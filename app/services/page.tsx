import Link from "next/link";
import { services } from "@/data/site";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { CiCdWorkflow } from "@/components/home/CiCdWorkflow";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Digital Marketing & Tech Services",
  description: "Explore SuamGlobalDigital's digital marketing, SEO, website development, AI, cybersecurity, cloud and business technology services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="OUR SERVICES" title="The right technology starts with the right question." description="Explore a connected set of capabilities. We’ll help you identify what fits your goals, your team, and the realities of your environment." breadcrumb="Services" />
      <section className="section-space page-service-list">
        <div className="container">
          <div className="row g-4">
            {services.map(({ slug, title, short, description, icon: Icon }) => (
              <div className="col-12 col-md-6 col-xl-4" key={slug}>
                <Link className="service-card service-card-large" href={`/services/${slug}`}>
                  <span className="service-icon"><Icon size={22} /></span><span className="service-label">{title}</span><h2>{short}</h2><p>{description}</p><span className="card-link">Explore service <span aria-hidden="true">↗</span></span>
                </Link>
              </div>
            ))}
          </div>
          <p className="notice-box">Not sure which service fits? <Link href="/contact">Tell us what you’re trying to solve.</Link></p>
          <CiCdWorkflow />
        </div>
      </section>
      <PageEndCTA />
    </>
  );
}
