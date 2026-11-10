import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { articles } from "@/data/site";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Insights",
  description: "Practical thinking on AI, digital products, and the systems behind them.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="INSIGHTS" title="Clear thinking for complex technology." description="Practical notes to help you ask better questions, make considered decisions, and plan what comes next." breadcrumb="Insights" />
      <section className="section-space"><div className="container"><div className="row g-4">{articles.map(({ slug, title, category, readingTime, excerpt }) => <div className="col-12 col-md-6 col-lg-4" key={slug}><Link className="article-card card-surface" href={`/insights/${slug}`}><span className="article-category">{category}</span><h2>{title}</h2><p>{excerpt}</p><div className="article-meta"><span><Clock3 size={14} />{readingTime}</span><span className="card-link">Read article <ArrowUpRight size={14} /></span></div></Link></div>)}</div></div></section>
      <PageEndCTA />
    </>
  );
}
