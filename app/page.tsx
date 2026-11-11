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
  title: "Digital Marketing & SEO",
  description: "Grow your business with digital marketing, SEO and web development from SuamGlobalDigital. Explore practical strategies, tech services and clear next steps.",
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
