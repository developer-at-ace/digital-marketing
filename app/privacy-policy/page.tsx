import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

const privacyTitle = "Privacy Policy | SUAM Global Digital";
const privacyMetadata = createPageMetadata({
  title: privacyTitle,
  description: "Read how SUAM Global Digital collects, uses, stores and protects personal information submitted through its website and business communications.",
  path: "/privacy-policy",
});

export const metadata: Metadata = {
  ...privacyMetadata,
  title: { absolute: privacyTitle },
  openGraph: { ...privacyMetadata.openGraph, title: privacyTitle },
  twitter: { ...privacyMetadata.twitter, title: privacyTitle },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro
        eyebrow="LEGAL"
        title="Privacy Policy"
        description="How SUAM Global Digital collects, uses, stores and protects personal information."
        breadcrumb="Privacy Policy"
      />
      <article className="legal-page">
        <div className="container">
          <div className="legal-copy">
            <p className="legal-updated"><strong>Last Updated: 12 November 2026</strong></p>
            <p>At SUAM Global Digital, we respect your privacy and understand the importance of handling personal information responsibly.</p>
            <p>This Privacy Policy explains what information we may collect when you visit our website, how that information may be used, and the choices available to you.</p>
            <p>Our website is available at <a href="https://suamglobaldigital.com" target="_blank" rel="noreferrer">https://suamglobaldigital.com</a>.</p>

            <h2>1. Who We Are</h2>
            <p>SUAM Global Digital provides information about technology services, including AI development, custom software, ERP and CRM solutions, cybersecurity, cloud infrastructure, and digital marketing.</p>
            <p>The website is operated by <strong>[Registered Legal Entity Name]</strong>, located at <strong>[Registered Business Address]</strong>.</p>
            <p>For privacy-related questions, you can contact us at <a href="mailto:info@suamglobalventures.com">info@suamglobalventures.com</a>.</p>

            <h2>2. Information We Collect</h2>
            <p>The information we collect depends on how you interact with our website.</p>

            <h3>Information You Provide</h3>
            <p>When you complete a contact form, send an email, or enquire about our services, you may provide your name, email address, phone number, company name, and project details. The contact form also allows you to provide a requested service, budget, and timeline.</p>
            <p>If you apply for a job, we may receive your resume, professional qualifications, employment history, and other information relevant to recruitment.</p>

            <h3>Website and Technical Information</h3>
            <p>Our website hosting and security systems may collect technical information such as IP address, browser type, device information, pages visited, and website interaction data, as part of standard service logs.</p>

            <h3>Cookies</h3>
            <p>Public website pages do not require an account. When an administrator signs in to the lead portal, the site uses a short-lived, HTTP-only authentication cookie to maintain that session. The hosting provider may also process standard technical logs. Read our <Link href="/cookie-policy">Cookie Policy</Link> for more information about cookies and how to manage them.</p>

            <h2>3. How We Use Your Information</h2>
            <p>We may use the information we receive to:</p>
            <ul>
              <li>Respond to enquiries and communicate with visitors.</li>
              <li>Understand business and project requirements.</li>
              <li>Prepare proposals or discuss potential services.</li>
              <li>Maintain website security and functionality.</li>
              <li>Improve website content and user experience.</li>
              <li>Process recruitment applications, where applicable.</li>
              <li>Maintain business records and comply with legal obligations.</li>
              <li>Send marketing communications where permitted by applicable law.</li>
            </ul>

            <h2>4. Legal Grounds for Processing</h2>
            <p>Where required by applicable law, we process personal information on an appropriate legal basis.</p>
            <p>Depending on the circumstances, this may include consent, contractual necessity, legitimate interests, compliance with legal obligations, or steps requested before entering into a contract.</p>

            <h2>5. Sharing Information</h2>
            <p>We may share information with authorised service providers that support website hosting, communications, security, and business operations.</p>
            <p>These providers should only receive information necessary for their services and be subject to appropriate data protection arrangements.</p>
            <p>We may also disclose information when required by law.</p>
            <p><strong>[Confirm whether the business shares or sells information for advertising or other commercial purposes and add the appropriate disclosure.]</strong></p>

            <h2>6. AI Development and Client Information</h2>
            <p>Some of our technology services involve artificial intelligence and data processing.</p>
            <p>The handling of information within a client project depends on the agreed technical requirements, contractual arrangements, and applicable data protection laws.</p>
            <p>Information submitted through a general website enquiry should not include confidential records, sensitive personal data, passwords, or proprietary code unless an approved secure method has been established.</p>
            <p>Any use of client data for AI model training or improvement should be addressed explicitly in the applicable project agreement.</p>

            <h2>7. Data Security</h2>
            <p>We aim to use reasonable technical and organisational safeguards to protect personal information from unauthorised access, loss, alteration, or disclosure.</p>
            <p>However, no method of internet transmission or electronic storage can be guaranteed to be completely secure.</p>

            <h2>8. Data Retention</h2>
            <p>We retain information for as long as reasonably necessary to fulfil the purposes for which it was collected, maintain appropriate business records, resolve disputes, and meet legal requirements.</p>
            <p>Retention periods depend on the type of information and applicable obligations.</p>

            <h2>9. International Data Transfers</h2>
            <p>Some service providers may process information outside the country in which it was originally collected.</p>
            <p>Where applicable, international transfers will be handled in accordance with relevant data protection requirements.</p>

            <h2>10. Your Privacy Rights</h2>
            <p>Depending on the laws applicable to you, you may have rights to request access to, correction of, or deletion of your personal information.</p>
            <p>You may also have rights to withdraw consent, object to certain processing, request data portability, or raise concerns with a relevant authority.</p>
            <p>To exercise your rights, contact <a href="mailto:info@suamglobalventures.com">info@suamglobalventures.com</a>.</p>

            <h2>11. Children&apos;s Privacy</h2>
            <p>Our website is intended for business and professional audiences.</p>
            <p>We do not knowingly seek personal information from children through our general business enquiry channels.</p>

            <h2>12. Third-Party Websites</h2>
            <p>Our website may contain links to external websites. We do not control their privacy practices and encourage visitors to review their policies.</p>

            <h2>13. Changes to This Policy</h2>
            <p>We may update this Privacy Policy when our website, business activities, or legal requirements change.</p>
            <p>Any updated version will be published on this page with a revised date.</p>

            <h2>14. Contact Information</h2>
            <p>For privacy enquiries:</p>
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
