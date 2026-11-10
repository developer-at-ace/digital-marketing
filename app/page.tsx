import {
  AiSpotlight,
  FaqSection,
  Hero,
  IndustryGrid,
  InsightPreview,
  LeadCapture,
  PageEndCTA,
  Principles,
  ServiceGrid,
  Technology,
  WorkPreview,
} from "@/components/home/HomePageSections";
import { DeploymentShowcase } from "@/components/home/DeploymentShowcase";
import { PlatformMarquee } from "@/components/home/PlatformMarquee";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "AI, Software & Digital Transformation",
  description: "Explore practical AI, business systems, digital products, and technology consulting for your organisation.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <PlatformMarquee />
      <Principles />
      <ServiceGrid />
      <AiSpotlight />
      <IndustryGrid />
      <WorkPreview />
      <DeploymentShowcase />
      <Technology />
      <LeadCapture />
      <FaqSection />
      <InsightPreview />
      <PageEndCTA />
    </>
  );
}
