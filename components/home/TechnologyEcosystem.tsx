"use client";

import { motion, useReducedMotion } from "motion/react";
import { AppWindow, Cloud, Cpu, Database, ShieldCheck } from "lucide-react";

const ecosystemNodes = [
  { title: "AI & intelligence", icon: Cpu, className: "ecosystem-ai", x: "50%", y: "8%" },
  { title: "Cloud platforms", icon: Cloud, className: "ecosystem-cloud", x: "80%", y: "31%" },
  { title: "Data systems", icon: Database, className: "ecosystem-data", x: "69%", y: "75%" },
  { title: "Applications", icon: AppWindow, className: "ecosystem-apps", x: "31%", y: "75%" },
  { title: "Cybersecurity", icon: ShieldCheck, className: "ecosystem-security", x: "20%", y: "31%" },
];

export function TechnologyEcosystem() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="technology-ecosystem" role="img" aria-label="Technology ecosystem connecting AI, cloud platforms, data systems, applications, and cybersecurity">
      <div className="ecosystem-orbit ecosystem-orbit-outer" />
      <div className="ecosystem-orbit ecosystem-orbit-inner" />
      <svg className="ecosystem-connections" viewBox="0 0 500 300" aria-hidden="true">
        <path d="M250 45 390 105 345 238 155 238 110 105Z" />
        <path d="M250 45 345 238M390 105 155 238M110 105 345 238M250 45 155 238M390 105 110 105" />
      </svg>
      <motion.div
        className="ecosystem-hub"
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <span><Cpu size={22} /></span>
        <strong>Connected<br />technology</strong>
      </motion.div>
      {ecosystemNodes.map(({ title, icon: Icon, className, x, y }, index) => (
        <motion.div
          className={`ecosystem-node ${className}`}
          key={title}
          style={{ left: x, top: y }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : index * 0.08 }}
        >
          <span><Icon size={17} /></span>
          <strong>{title}</strong>
        </motion.div>
      ))}
    </div>
  );
}
