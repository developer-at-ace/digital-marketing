import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, align = "left", children }: SectionHeadingProps) {
  return (
    <div className={`section-heading${align === "center" ? " text-center mx-auto" : ""}`}>
      <span className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
