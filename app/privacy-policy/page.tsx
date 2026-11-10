import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How information submitted through the TechNova website is handled.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro eyebrow="LEGAL" title="Privacy policy" description="A clear explanation of the information this website collects and how it is used." breadcrumb="Privacy policy" />
      <article className="legal-page"><div className="container"><div className="legal-copy">
        <p className="legal-updated">Last updated: November 2026</p>
        <p>This policy describes information submitted through this website. The organisation operating this site should review and adapt it to its actual business practices, hosting providers, applicable laws, and retention requirements before publication.</p>
        <h2>Information you provide</h2><p>When you submit a project enquiry, the form collects your name, email address, organisation (optional), selected service, project description, and any budget or timeline details you choose to provide. The form also records your consent to receive a response.</p>
        <h2>How information is used</h2><p>Enquiry information is used to review and respond to your request. If the deployment has been configured, submissions are stored in the organisation’s MongoDB database and can be accessed by an authenticated administrator through the lead portal. Do not include passwords, payment details, health information, or other sensitive personal information in a project brief.</p>
        <h2>Retention and security</h2><p>The organisation operating this site is responsible for setting appropriate retention periods, access controls, and security safeguards for its database and hosting environment. No internet transmission or storage method can be guaranteed completely secure.</p>
        <h2>Cookies and site operation</h2><p>The public pages do not require an account. The administrator portal uses a short-lived, HTTP-only authentication cookie when an administrator signs in. The website may also receive standard technical logs from its hosting provider.</p>
        <h2>Your choices</h2><p>You may choose not to provide optional project details. If you have a privacy question or want to ask about an enquiry you submitted, use the <Link href="/contact">contact form</Link> and mention your request. The site operator should provide a verified privacy contact before launch where required.</p>
        <h2>Updates</h2><p>This policy should be updated if the site’s data practices change. The date above should reflect the last substantive review.</p>
      </div></div></article>
    </>
  );
}
