import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Compass } from "lucide-react";
import { notFound } from "next/navigation";
import { deliveryFormats } from "@/data/site";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { PageIntro } from "@/components/ui/PageIntro";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return deliveryFormats.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = deliveryFormats.find((format) => format.slug === slug);
  return item
    ? createPageMetadata({ title: item.title, description: item.summary, path: `/portfolio/${item.slug}` })
    : { title: "Engagement format not found", robots: { index: false, follow: false } };
}

export default async function EngagementPage({ params }: Props) {
  const { slug } = await params;
  const item = deliveryFormats.find((format) => format.slug === slug);
  if (!item) notFound();
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Work & Engagements", path: "/portfolio" },
    { name: item.title, path: `/portfolio/${item.slug}` },
  ]);

  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <PageIntro eyebrow={item.category.toUpperCase()} title={item.title} description={item.summary} breadcrumb="Work" dark />
      <section className="section-space"><div className="container"><div className="row g-5"><div className="col-12 col-lg-7"><div className="illustrative-notice"><Compass size={18} /><p>This is an illustrative engagement format, not a completed client project or a reported result.</p></div><h2>The challenge</h2><p>{item.challenge}</p><h2 className="content-subheading">A considered approach</h2><div className="deliverables-list">{item.approach.map((step) => <div key={step}><Check size={18} /><span>{step}</span></div>)}</div></div><div className="col-12 col-lg-5"><aside className="outcome-card card-surface"><span className="eyebrow"><span className="eyebrow-dot" /> WHAT THIS CAN DELIVER</span><h2>A clearer next step.</h2><p>{item.outcome}</p><Link className="link-arrow" href={`/services/${item.relatedService}`}>Explore a related service <ArrowRight size={15} /></Link></aside></div></div></div></section>
      <PageEndCTA />
    </>
  );
}
