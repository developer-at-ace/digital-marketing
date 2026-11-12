import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

const disclaimerTitle = "Website Disclaimer | SUAM Global Digital";
const disclaimerMetadata = createPageMetadata({
  title: disclaimerTitle,
  description: "Read the SUAM Global Digital website disclaimer covering technology information, AI services, third-party references and project outcomes.",
  path: "/disclaimer",
});

export const metadata: Metadata = {
  ...disclaimerMetadata,
  title: { absolute: disclaimerTitle },
  openGraph: { ...disclaimerMetadata.openGraph, title: disclaimerTitle },
  twitter: { ...disclaimerMetadata.twitter, title: disclaimerTitle },
};

export default function DisclaimerPage() {
  return (
    <>
      <PageIntro
        eyebrow="LEGAL"
        title="Website Disclaimer"
        description="Important information about the technology content, services, and external references on this website."
        breadcrumb="Website Disclaimer"
      />
      <article className="legal-page">
        <div className="container">
          <div className="legal-copy">
            <p className="legal-updated"><strong>Last Updated: 12 November 2026</strong></p>
            <p>The information available on the SUAM Global Digital website is intended to provide a general understanding of our services, technology capabilities, and related topics.</p>
            <p>We make reasonable efforts to present useful and accurate information. However, website content should not be treated as a substitute for professional advice based on your organisation&apos;s specific circumstances.</p>

            <h2>1. General Information</h2>
            <p>Content published on <a href="https://suamglobaldigital.com" target="_blank" rel="noreferrer">https://suamglobaldigital.com</a> is provided for informational purposes.</p>
            <p>Service descriptions, technical explanations, articles, and examples are intended to help visitors understand different technology solutions.</p>

            <h2>2. Technology and AI Information</h2>
            <p>Artificial intelligence, software engineering, cybersecurity, and cloud technologies are constantly evolving.</p>
            <p>The suitability of any technology depends on factors such as business requirements, infrastructure, data quality, implementation, and ongoing maintenance.</p>
            <p>AI systems can generate incomplete or inaccurate information. Important outputs should be appropriately reviewed and verified.</p>

            <h2>3. No Guaranteed Business Results</h2>
            <p>We do not guarantee that using a particular technology, software product, or digital marketing approach will produce specific financial, operational, or search engine results.</p>
            <p>Any project-specific commitments must be agreed in writing.</p>

            <h2>4. Third-Party Products and Trademarks</h2>
            <p>Our website may reference third-party software, cloud platforms, frameworks, and technology providers.</p>
            <p>All third-party trademarks remain the property of their respective owners.</p>
            <p>Mentioning a product or company does not imply an official partnership, endorsement, or certification unless expressly stated and verified.</p>

            <h2>5. External Website Links</h2>
            <p>Links to external resources may be provided for convenience.</p>
            <p>We do not control third-party websites and cannot guarantee their accuracy, availability, or security.</p>

            <h2>6. Website Availability</h2>
            <p>We aim to maintain a functional and accessible website. However, temporary interruptions or technical issues may occur.</p>

            <h2>7. Contact</h2>
            <p>If you have questions about the information published on our website, please <Link href="/contact">contact us</Link>.</p>
            <p>
              <strong>SUAM Global Digital</strong><br />
              Website: <a href="https://suamglobaldigital.com" target="_blank" rel="noreferrer">https://suamglobaldigital.com</a><br />
              Email: <a href="mailto:info@suamglobalventures.com">info@suamglobalventures.com</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
