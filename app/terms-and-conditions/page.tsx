import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

const termsMetadata = createPageMetadata({
  title: "Terms & Conditions",
  description: "Review the terms governing the use of the SUAM Global Digital website, including website content, intellectual property, enquiries and liability.",
  path: "/terms-and-conditions",
});

const termsTitle = "Terms & Conditions | SUAM Global Digital";

export const metadata: Metadata = {
  ...termsMetadata,
  title: { absolute: termsTitle },
  openGraph: { ...termsMetadata.openGraph, title: termsTitle },
  twitter: { ...termsMetadata.twitter, title: termsTitle },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageIntro
        eyebrow="LEGAL"
        title="Terms & Conditions"
        description="The rules governing access to and use of the SUAM Global Digital website."
        breadcrumb="Terms & Conditions"
      />
      <article className="legal-page">
        <div className="container">
          <div className="legal-copy">
            <p className="legal-updated"><strong>Last Updated: 12 November 2026</strong></p>
            <p>Welcome to SUAM Global Digital.</p>
            <p>These Terms and Conditions explain the rules governing access to and use of our website at <a href="https://suamglobaldigital.com" target="_blank" rel="noreferrer">https://suamglobaldigital.com</a>.</p>
            <p>By using this website, you agree to these terms. If you do not agree with them, please discontinue using the website.</p>

            <h2>1. Website Operator</h2>
            <p>This website is operated by <strong>[Registered Legal Entity Name]</strong>, trading or operating under the name SUAM Global Digital.</p>
            <p>The website provides information about software development, artificial intelligence, technology consulting, digital marketing, and related business services.</p>

            <h2>2. Acceptable Use</h2>
            <p>You agree to use the website responsibly and in accordance with applicable laws.</p>
            <p>You must not:</p>
            <ul>
              <li>Attempt to access restricted systems without authorisation.</li>
              <li>Disrupt the website or interfere with its operation.</li>
              <li>Introduce malicious software or harmful code.</li>
              <li>Submit false or misleading information.</li>
              <li>Copy or distribute protected materials without permission.</li>
              <li>Use the website for fraudulent or unlawful purposes.</li>
            </ul>

            <h2>3. Service Information</h2>
            <p>The information on this website describes our general service areas and capabilities.</p>
            <p>It does not constitute a binding offer, technical guarantee, or commitment to provide a specific service.</p>
            <p>Project scope, timelines, deliverables, fees, intellectual property ownership, confidentiality, and support obligations will be established through a separate written agreement.</p>

            <h2>4. Artificial Intelligence Services</h2>
            <p>Artificial intelligence technologies may produce results that require verification or human review.</p>
            <p>Information about AI development and automation on this website should not be interpreted as a guarantee of accuracy, suitability, or performance.</p>
            <p>The responsibilities and limitations associated with a particular AI project will be defined in the relevant agreement.</p>

            <h2>5. Intellectual Property</h2>
            <p>Unless otherwise stated, the website&apos;s original content, branding, designs, graphics, and other materials are owned by or licensed to the website operator.</p>
            <p>Visitors may access the content for lawful personal or internal business use.</p>
            <p>Unauthorised commercial reproduction, redistribution, or modification is prohibited except where permitted by law.</p>

            <h2>6. Third-Party Services</h2>
            <p>Our website may mention or link to third-party products, platforms, and services.</p>
            <p>These references do not automatically establish a partnership, endorsement, or affiliation.</p>
            <p>We are not responsible for external websites or services outside our control.</p>

            <h2>7. Website Availability</h2>
            <p>We aim to maintain an accessible and functional website, but temporary interruptions may occur because of maintenance, technical issues, or circumstances beyond our control.</p>
            <p>We do not guarantee uninterrupted availability.</p>

            <h2>8. Accuracy of Information</h2>
            <p>We make reasonable efforts to keep website content accurate and relevant.</p>
            <p>However, technical information, service descriptions, and other materials may change over time.</p>
            <p>Visitors should contact us for confirmation before relying on website information for important business decisions.</p>

            <h2>9. Limitation of Liability</h2>
            <p>To the extent permitted by applicable law, the website operator is not responsible for indirect or consequential losses resulting solely from use of this informational website.</p>
            <p>Nothing in these terms limits liability that cannot legally be excluded.</p>
            <p>Separate agreements govern the provision of paid professional services.</p>

            <h2>10. Privacy</h2>
            <p>Personal information collected through the website will be handled in accordance with our <Link href="/privacy-policy">Privacy Policy</Link> and applicable law.</p>

            <h2>11. Changes to These Terms</h2>
            <p>We may revise these Terms and Conditions when necessary.</p>
            <p>Updated terms will be published on this page with the date of revision.</p>

            <h2>12. Governing Law</h2>
            <p>These terms are governed by the laws of <strong>[Applicable Jurisdiction]</strong>, subject to mandatory legal protections that may apply.</p>

            <h2>13. Contact Us</h2>
            <p>For questions about these terms:</p>
            <p>
              <strong>SUAM Global Digital</strong><br />
              Email: <a href="mailto:info@suamglobalventures.com">info@suamglobalventures.com</a><br />
              Address: 225, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015<br />
              Website: <a href="https://suamglobaldigital.com" target="_blank" rel="noreferrer">https://suamglobaldigital.com</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
