import Link from "next/link";
import { ArrowUpRight, Compass, Layers3, Workflow } from "lucide-react";
import { deliveryFormats } from "@/data/site";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Digital Project Work & Delivery",
  description: "See how SuamGlobalDigital structures discovery, digital product delivery and connected business systems projects, from first questions to a practical plan.",
  path: "/portfolio",
});

const icons = [Compass, Workflow, Layers3];

export default function PortfolioPage() {
  return (
    <>
      <PageIntro eyebrow="WORK & ENGAGEMENTS" title="The work begins with understanding." description="We don’t publish invented client stories or borrowed results. Here are transparent examples of the engagement formats we use to shape and deliver useful technology." breadcrumb="Work" />
      <section className="section-space"><div className="container"><div className="portfolio-note"><span className="portfolio-note-icon"><Compass size={19} /></span><p><strong>Honest by design.</strong> The following are illustrative engagement formats, not claims about completed client projects or outcomes.</p></div><div className="row g-4">{deliveryFormats.map(({ slug, title, category, summary }, index) => { const Icon = icons[index]; return <div className="col-12 col-lg-4" key={slug}><Link className="portfolio-card card-surface" href={`/portfolio/${slug}`}><span className="service-icon"><Icon size={22} /></span><span className="article-category">{category}</span><h2>{title}</h2><p>{summary}</p><span className="card-link">Explore this approach <ArrowUpRight size={15} /></span></Link></div>; })}</div></div></section>
      <PageEndCTA />
    </>
  );
}
