import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/site";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Digital Solutions by Industry",
  description: "Explore digital marketing, software and technology for the workflows and customer needs of healthcare, education, retail, finance and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageIntro eyebrow="INDUSTRIES" title="Technology that understands the context." description="Your sector shapes your workflows, regulations, and customers. We begin by learning what makes your environment different." breadcrumb="Industries" />
      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="SECTOR PERSPECTIVES" title="Start with the world you work in" description="Explore the considerations that can shape a useful technology decision." />
          <div className="row g-4">
            {industries.map(({ slug, title, description, icon: Icon }) => (
              <div className="col-12 col-md-6 col-lg-4" key={slug}>
                <Link className="industry-detail-card card-surface" href={`/industries/${slug}`}>
                  <span className="service-icon"><Icon size={22} /></span><h2>{title}</h2><p>{description}</p><span className="card-link">Explore {title.toLowerCase()} <ArrowUpRight size={15} /></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageEndCTA />
    </>
  );
}
