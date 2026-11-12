import {
  Hero,
  IndustryGrid,
  PageEndCTA,
  Principles,
  ServiceGrid,
} from "@/components/home/HomePageSections";
import { PlatformMarquee } from "@/components/home/PlatformMarquee";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Software Development & IT Solutions",
  description: "Explore software development, AI automation, ERP, CRM, cybersecurity, cloud services and digital marketing solutions at SUAM Global Digital.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformMarquee />
      <Principles />
      <ServiceGrid />
      <IndustryGrid />
      <PageEndCTA
        eyebrow="LET’S DISCUSS YOUR NEXT PROJECT"
        title="A clear conversation is the best place to begin."
        description="Whether you’re planning an application, improving an existing platform, or exploring AI automation, tell us what your business needs and we’ll explore a practical next step."
        buttonText="Contact Our Team"
      />
    </>
  );
}
