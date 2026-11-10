"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { BufferGeometry, Float32BufferAttribute, MathUtils, type Group } from "three";

type HeroThreeSceneProps = {
  onReady: () => void;
};

const nodeCount = 18;
const nodePositions = Array.from({ length: nodeCount }, (_, index) => {
  const y = 1 - (index / (nodeCount - 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const angle = Math.PI * (3 - Math.sqrt(5)) * index;
  return [Math.cos(angle) * radius * 1.48, y * 1.48, Math.sin(angle) * radius * 1.48] as const;
});

function NetworkCore() {
  const group = useRef<Group>(null);
  const links = useMemo(() => {
    const points = nodePositions.flatMap((point, index) => {
      const next = nodePositions[(index + 1) % nodeCount];
      return [...point, ...next];
    });
    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new Float32BufferAttribute(points, 3));
    return geometry;
  }, []);

  useFrame(({ pointer, clock }, delta) => {
    if (!group.current) return;
    const scrollTilt = Math.min(window.scrollY, 900) * 0.00005;
    group.current.rotation.y = MathUtils.damp(
      group.current.rotation.y,
      pointer.x * 0.22 + clock.elapsedTime * 0.045,
      2.4,
      delta,
    );
    group.current.rotation.x = MathUtils.damp(group.current.rotation.x, -pointer.y * 0.16 + scrollTilt, 2.4, delta);
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[0.78, 1]} />
        <meshStandardMaterial color="#246BFD" emissive="#1749ba" emissiveIntensity={0.8} metalness={0.65} roughness={0.26} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.82, 1]} />
        <meshBasicMaterial color="#8bbcff" wireframe transparent opacity={0.42} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.48, 1]} />
        <meshBasicMaterial color="#34c8ed" wireframe transparent opacity={0.16} />
      </mesh>
      <lineSegments geometry={links}>
        <lineBasicMaterial color="#48b7f4" transparent opacity={0.42} />
      </lineSegments>
      {nodePositions.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[index % 4 === 0 ? 0.055 : 0.035, 10, 10]} />
          <meshBasicMaterial color={index % 3 === 0 ? "#a98bff" : "#71e5f4"} />
        </mesh>
      ))}
      <mesh rotation={[0.92, 0.18, -0.3]}>
        <torusGeometry args={[1.76, 0.008, 8, 96]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[-0.58, 0.1, 0.45]}>
        <torusGeometry args={[1.9, 0.006, 8, 96]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.42} />
      </mesh>
    </group>
  );
}

export default function HeroThreeScene({ onReady }: HeroThreeSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 40 }}
      dpr={[1, 1.4]}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      onCreated={onReady}
    >
      <ambientLight intensity={0.9} />
      <pointLight color="#61b2ff" intensity={20} distance={8} position={[3, 2, 4]} />
      <pointLight color="#8b5cf6" intensity={13} distance={7} position={[-3, -1, 2]} />
      <Float speed={0.7} rotationIntensity={0.06} floatIntensity={0.14}>
        <NetworkCore />
      </Float>
    </Canvas>
  );
}
