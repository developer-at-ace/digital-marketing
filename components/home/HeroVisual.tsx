"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { ArrowDown, Cpu, Network, Workflow } from "lucide-react";

const HeroThreeScene = dynamic(() => import("@/components/home/HeroThreeScene"), {
  ssr: false,
});

function canUseHeroScene() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lowPower =
    (navigator.hardwareConcurrency > 0 && navigator.hardwareConcurrency <= 2) ||
    ("deviceMemory" in navigator && Number(navigator.deviceMemory) <= 2);
  if (reducedMotion || lowPower) return false;

  return "WebGLRenderingContext" in window || "WebGL2RenderingContext" in window;
}

export function HeroVisual() {
  const artRef = useRef<HTMLDivElement>(null);
  const [shouldLoadScene, setShouldLoadScene] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sceneReady, setSceneReady] = useState(false);

  useEffect(() => {
    const art = artRef.current;
    if (!art || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const updateScrollDepth = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = art.getBoundingClientRect();
        const offset = (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) * 0.025;
        art.style.setProperty("--hero-scroll-depth", `${Math.max(-12, Math.min(12, offset))}px`);
      });
    };

    window.addEventListener("scroll", updateScrollDepth, { passive: true });
    updateScrollDepth();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollDepth);
    };
  }, []);

  useEffect(() => {
    const art = artRef.current;
    if (!art) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!canUseHeroScene()) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setShouldLoadScene(true);
        } else {
          setSceneReady(false);
        }
      },
      { threshold: 0.1 },
    );
    if (!reducedMotion.matches) {
      observer.observe(art);
      const bounds = art.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        setIsVisible(true);
        setShouldLoadScene(true);
      }
    }

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsVisible(false);
        setShouldLoadScene(false);
        setSceneReady(false);
      } else {
        observer.observe(art);
        const bounds = art.getBoundingClientRect();
        if (bounds.top < window.innerHeight && bounds.bottom > 0) {
          setIsVisible(true);
          setShouldLoadScene(true);
        }
      }
    };
    reducedMotion.addEventListener("change", onMotionPreferenceChange);

    return () => {
      observer.disconnect();
      reducedMotion.removeEventListener("change", onMotionPreferenceChange);
    };
  }, []);

  const handlePointerEnter = () => {
  if (shouldLoadScene) {
    setIsVisible(true);
    return;
  }
  if (!canUseHeroScene()) return;
  setShouldLoadScene(true);
  setIsVisible(true);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
  if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--hero-rotate-x", `${-y * 5}deg`);
  event.currentTarget.style.setProperty("--hero-rotate-y", `${x * 7}deg`);
  };

  const resetPointer = (event: ReactPointerEvent<HTMLDivElement>) => {
  event.currentTarget.style.setProperty("--hero-rotate-x", "0deg");
  event.currentTarget.style.setProperty("--hero-rotate-y", "0deg");
  };

  return (
  <div
    className={`hero-art${sceneReady ? " hero-art--3d-ready" : ""}`}
    onPointerEnter={handlePointerEnter}
    onPointerLeave={resetPointer}
    onPointerMove={handlePointerMove}
    ref={artRef}
  >
      <div className="hero-art-scene" aria-hidden="true">
        <div className="art-glow art-glow-blue" />
        <div className="art-glow art-glow-violet" />
        <Image
          className="hero-illustration"
          src="/ai-network.svg"
          alt=""
          width={760}
          height={680}
          priority
        />
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="art-node node-top"><Cpu size={23} /><span>Intelligence</span></div>
        <div className="art-node node-left"><Workflow size={21} /><span>Automation</span></div>
        <div className="art-node node-right"><Network size={20} /><span>Connected</span></div>
        <div className="art-data data-one" />
        <div className="art-data data-two" />
        <div className="art-data data-three" />
        <div className="art-caption"><span className="pulse-dot" /> Ideas into impact <ArrowDown size={13} /></div>
      </div>
      {shouldLoadScene && isVisible && (
        <div className="hero-3d-layer" aria-hidden="true">
          <HeroThreeScene onReady={() => setSceneReady(true)} />
        </div>
      )}
    </div>
  );
}
