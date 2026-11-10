import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import { industries, services } from "@/data/site";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { PageIntro } from "@/components/ui/PageIntro";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createPageMetadata, SITE_NAME } from "@/lib/seo";
import { getSiteUrl } from "@/lib/site-url";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: "Service not found", robots: { index: false, follow: false } };
  return createPageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;
  const relatedIndustries = industries.slice(0, 3);
  const siteUrl = getSiteUrl();
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      ...(siteUrl ? { url: siteUrl.toString() } : {}),
    },
    ...(siteUrl ? { url: new URL(`/services/${service.slug}`, siteUrl).toString() } : {}),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <PageIntro eyebrow="TECHNOLOGY SERVICES" title={service.title} description={service.description} breadcrumb={service.title} dark />
      <section className="section-space detail-intro">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-7">
              <span className="service-icon detail-icon"><Icon size={25} /></span>
              <h2>Start with the work that needs to change.</h2>
              <p>{service.approach}</p>
              <Link className="button button-primary" href="/contact">Talk through your project <ArrowRight size={16} /></Link>
            </div>
            <div className="col-12 col-lg-5">
              <div className="detail-list card-surface">
                <span className="eyebrow"><span className="eyebrow-dot" /> COMMON CHALLENGES</span>
                <h3>Where we can help</h3>
                {service.problems.map((problem) => <p key={problem}><ChevronRight size={15} />{problem}</p>)}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space detail-alt">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5"><span className="eyebrow"><span className="eyebrow-dot" /> WHAT YOU CAN EXPECT</span><h2>Useful deliverables, clear decisions.</h2><p>We agree on the scope together, and keep the work connected to the business need that brought you here.</p></div>
            <div className="col-12 col-lg-7"><div className="deliverables-list">{service.deliverables.map((item) => <div key={item}><Check size={18} /><span>{item}</span></div>)}</div></div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container">
          <div className="section-heading"><span className="eyebrow"><span className="eyebrow-dot" /> A COLLABORATIVE PROCESS</span><h2>From the first conversation to the next step.</h2></div>
          <div className="row g-3 process-grid">
            {["Understand your context", "Agree on a clear scope", "Deliver and learn"].map((step, index) => <div className="col-12 col-md-4" key={step}><div className="process-card"><span>0{index + 1}</span><h3>{step}</h3><p>{["Listen to your team and map the challenge.", "Make the priorities, roles, and constraints visible.", "Review work together and plan what comes next."][index]}</p></div></div>)}
          </div>
        </div>
      </section>
      <section className="section-space detail-alt">
        <div className="container">
          <div className="section-heading-row"><div><span className="eyebrow"><span className="eyebrow-dot" /> INDUSTRY CONTEXT</span><h2>Designed around your operating reality.</h2><p>Good technology decisions account for the people, policies, and systems around the work.</p></div><Link href="/industries" className="link-arrow">Browse industries <ArrowRight size={15} /></Link></div>
          <div className="row g-3">{relatedIndustries.map(({ slug, title, icon: IndustryIcon }) => <div className="col-12 col-md-4" key={slug}><Link className="industry-card" href={`/industries/${slug}`}><IndustryIcon size={19} /><span>{title}</span><ChevronRight size={15} /></Link></div>)}</div>
        </div>
      </section>
      <PageEndCTA />
    </>
  );
}
