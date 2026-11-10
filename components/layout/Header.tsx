"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { quickNav, services } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const servicesMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <header className={`site-header${pathname === "/" ? " is-home" : ""}${isScrolled ? " is-scrolled" : ""}`} onKeyDown={(event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        const servicesMenu = servicesMenuRef.current;
        if (servicesMenu?.open) {
          servicesMenu.open = false;
          servicesMenu.querySelector("summary")?.focus();
        } else {
          menuToggleRef.current?.focus();
        }
      }
    }}>
      <div className="container">
        <div className="header-row">
          <Link className="brand" href="/" aria-label="TechNova home" onClick={() => setMenuOpen(false)}>
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-name">TechNova<span>.</span></span>
          </Link>
          <button
            ref={menuToggleRef}
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav id="primary-navigation" className={`primary-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <details className="nav-services" ref={servicesMenuRef}>
              <summary>Services <ChevronDown size={14} /></summary>
              <div className="services-menu">
                <p className="menu-kicker">Explore our services</p>
                <div className="services-menu-grid">
                  {services.map(({ slug, title, short, icon: Icon }) => (
                    <Link href={`/services/${slug}`} key={slug} onClick={() => setMenuOpen(false)}>
                      <Icon size={18} aria-hidden="true" />
                      <span><strong>{title}</strong><small>{short}</small></span>
                    </Link>
                  ))}
                </div>
                <Link className="menu-all-link" href="/services" onClick={() => setMenuOpen(false)}>All services <ArrowUpRight size={15} /></Link>
              </div>
            </details>
            {quickNav.map(({ label, href }) => (
              <Link href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
            <Link className="button button-primary header-cta" href="/contact" onClick={() => setMenuOpen(false)}>
              Get Free Consultation <ArrowUpRight size={15} />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
