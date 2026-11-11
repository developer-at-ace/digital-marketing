import Link from "next/link";
import { ArrowUpRight, Bot, Layers3, Network, Route } from "lucide-react";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Digital Growth Solutions",
  description: "Find practical ways to improve digital marketing, automate workflows, connect business systems and plan technology around your goals.",
  path: "/solutions",
});

const solutionAreas = [
  { title: "Workflows with less friction", icon: Bot, description: "Explore where AI or automation can reduce repetitive effort while keeping people involved in important decisions.", links: [["AI & Automation", "/services/ai-automation"], ["Technology Consulting", "/services/technology-consulting"]] },
  { title: "A more useful digital foundation", icon: Route, description: "Plan the content, customer journeys, and software foundation that support a clearer digital experience.", links: [["Websites & Apps", "/services/websites-apps"], ["SEO & Marketing", "/services/seo-digital-marketing"]] },
  { title: "Systems that work together", icon: Layers3, description: "Understand how business processes and information move between tools, teams, and operational systems.", links: [["ERP, CRM & HMS", "/services/erp-crm-hms"], ["Cloud & DevOps", "/services/cloud-devops"]] },
  { title: "Visibility across connected operations", icon: Network, description: "Explore how connected devices, cloud platforms, and responsible data flows can support operational insight.", links: [["IoT", "/services/iot"], ["Cybersecurity", "/services/cybersecurity"]] },
];

export default function SolutionsPage() {
  return (
    <>
      <PageIntro eyebrow="SOLUTIONS" title="Start with the challenge, not the catalogue." description="There is rarely one tool that solves everything. Explore a few common directions, then let your context shape the right mix." breadcrumb="Solutions" />
      <section className="section-space"><div className="container"><div className="row g-4">{solutionAreas.map(({ title, icon: Icon, description, links }) => <div className="col-12 col-md-6" key={title}><article className="solution-card card-surface"><span className="service-icon"><Icon size={22} /></span><h2>{title}</h2><p>{description}</p><div className="solution-links">{links.map(([label, href]) => <Link className="link-arrow" href={href} key={href}>{label} <ArrowUpRight size={14} /></Link>)}</div></article></div>)}</div></div></section>
      <PageEndCTA />
    </>
  );
}
