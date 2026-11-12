import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

const cookiePolicyTitle = "Cookie Policy | SUAM Global Digital";
const cookiePolicyMetadata = createPageMetadata({
  title: cookiePolicyTitle,
  description: "Understand how SUAM Global Digital uses cookies, website analytics and similar technologies, and learn how to manage your preferences.",
  path: "/cookie-policy",
});

export const metadata: Metadata = {
  ...cookiePolicyMetadata,
  title: { absolute: cookiePolicyTitle },
  openGraph: { ...cookiePolicyMetadata.openGraph, title: cookiePolicyTitle },
  twitter: { ...cookiePolicyMetadata.twitter, title: cookiePolicyTitle },
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageIntro
        eyebrow="LEGAL"
        title="Cookie Policy"
        description="How cookies and similar technologies may be used on the SUAM Global Digital website."
        breadcrumb="Cookie Policy"
      />
      <article className="legal-page">
        <div className="container">
          <div className="legal-copy">
            <p className="legal-updated"><strong>Last Updated: 12 November 2026</strong></p>
            <p>At SUAM Global Digital, we want visitors to understand how our website uses cookies and similar technologies.</p>
            <p>This Cookie Policy explains what cookies are, why they may be used, and how you can manage your preferences when browsing <a href="https://suamglobaldigital.com" target="_blank" rel="noreferrer">https://suamglobaldigital.com</a>.</p>

            <h2>1. What Are Cookies?</h2>
            <p>Cookies are small text files that websites place on your device when you visit them. They help websites perform certain functions, remember preferences, and collect information about how visitors interact with online content.</p>
            <p>Some cookies are necessary for a website to function properly, while others support analytics, preferences, or advertising.</p>

            <h2>2. How We Use Cookies</h2>
            <p>The public pages of our website do not require an account. When an administrator signs in to the lead portal, an essential, HTTP-only authentication cookie maintains that session. It is configured to expire after eight hours and uses secure and same-site settings in production.</p>
            <p>Other cookie categories below may apply if the corresponding technologies are enabled on the website:</p>

            <h3>Essential Cookies</h3>
            <p>These cookies support core website functions, including security, session management, and basic technical operations. The administrator authentication cookie is an example.</p>

            <h3>Analytics Cookies</h3>
            <p>Analytics tools may help us understand which pages visitors access, how they navigate the website, and whether technical improvements are needed. Analytics cookies are only used if an analytics service is enabled.</p>

            <h3>Preference Cookies</h3>
            <p>These cookies may remember choices such as language settings or cookie preferences, if those features are available.</p>

            <h3>Marketing Cookies</h3>
            <p>Where advertising technologies are implemented, cookies or similar identifiers may help measure advertising performance and understand interactions with campaigns.</p>

            <h2>3. Third-Party Cookies</h2>
            <p>Certain website features may rely on external technology providers, such as hosting services, analytics platforms, embedded content, or advertising tools.</p>
            <p>These providers may process information according to their own privacy policies and applicable contractual arrangements. The providers and cookies used may change when website features or integrations change.</p>

            <h2>4. Managing Your Cookie Preferences</h2>
            <p>You can manage or delete cookies through your browser settings.</p>
            <p>Where required by law, we will provide an appropriate mechanism to accept, reject, or change consent for non-essential cookies.</p>
            <p>Disabling certain cookies may affect website functionality.</p>

            <h2>5. Cookie Retention</h2>
            <p>Cookies may remain active for a browsing session or for a longer period, depending on their purpose and configuration. The administrator authentication cookie expires after eight hours.</p>
            <p>Details about any other cookies actually used on our website, including their providers and duration, should be made available through our cookie settings or cookie inventory.</p>

            <h2>6. Updates to This Policy</h2>
            <p>We may update this Cookie Policy when website technologies or applicable requirements change. Any updated version will be published on this page with a revised date.</p>

            <h2>7. Contact Us</h2>
            <p>For questions about cookies or data privacy, contact:</p>
            <p>
              <strong>SUAM Global Digital</strong><br />
              Email: <a href="mailto:info@suamglobalventures.com">info@suamglobalventures.com</a><br />
              Website: <a href="https://suamglobaldigital.com" target="_blank" rel="noreferrer">https://suamglobaldigital.com</a>
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
