import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { industries, services } from "@/data/site";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { PageIntro } from "@/components/ui/PageIntro";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return { title: "Industry not found", robots: { index: false, follow: false } };
  return createPageMetadata({
    title: industry.title,
    description: industry.description,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();

  const Icon = industry.icon;
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.title, path: `/industries/${industry.slug}` },
  ]);
  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <PageIntro eyebrow="INDUSTRY PERSPECTIVE" title={`${industry.title}, understood.`} description={industry.description} breadcrumb={industry.title} dark />
      <section className="section-space">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5"><span className="service-icon detail-icon"><Icon size={25} /></span><h2>Start with your operating reality.</h2><p>Technology has to fit the people, information, and processes already in motion. We learn those details before suggesting a direction.</p><div className="notice-box"><strong>A useful first step</strong><br />{industry.firstStep}</div></div>
            <div className="col-12 col-lg-7"><div className="industry-considerations card-surface"><span className="eyebrow"><span className="eyebrow-dot" /> IMPORTANT CONSIDERATIONS</span><h2>Questions worth exploring</h2>{industry.considerations.map((item) => <p key={item}><Check size={17} />{item}</p>)}</div></div>
          </div>
        </div>
      </section>
      <section className="section-space detail-alt">
        <div className="container">
          <div className="section-heading"><span className="eyebrow"><span className="eyebrow-dot" /> CAPABILITIES</span><h2>Explore services that may support your team.</h2><p>The right combination depends on your goals and constraints; these capabilities are a place to start the conversation.</p></div>
          <div className="row g-3">
            {services.slice(0, 4).map(({ slug: serviceSlug, title, short, icon: ServiceIcon }) => <div className="col-12 col-md-6 col-lg-3" key={serviceSlug}><Link className="service-card compact-service" href={`/services/${serviceSlug}`}><span className="service-icon"><ServiceIcon size={21} /></span><h3>{title}</h3><p>{short}</p><span className="card-link">Learn more <ArrowRight size={14} /></span></Link></div>)}
          </div>
        </div>
      </section>
      <PageEndCTA />
    </>
  );
}
