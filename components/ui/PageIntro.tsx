import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: string;
  dark?: boolean;
};

export function PageIntro({ eyebrow, title, description, breadcrumb, dark = false }: PageIntroProps) {
  return (
    <section className={`page-intro${dark ? " page-intro-dark" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-9">
            {breadcrumb && <div className="breadcrumbs"><Link href="/">Home</Link><ArrowRight size={13} /><span>{breadcrumb}</span></div>}
            <span className="eyebrow"><span className="eyebrow-dot" /> {eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
