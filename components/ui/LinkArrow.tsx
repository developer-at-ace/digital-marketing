import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function LinkArrow({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return <Link className={`link-arrow ${className}`} href={href}>{children} <ArrowUpRight size={15} aria-hidden="true" /></Link>;
}
