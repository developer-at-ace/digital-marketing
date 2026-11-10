import Link from "next/link";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: "Terms for using the TechNova website and its general information.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="LEGAL" title="Terms of use" description="A few straightforward terms for using this website." breadcrumb="Terms of use" />
      <article className="legal-page"><div className="container"><div className="legal-copy">
        <p className="legal-updated">Last updated: November 2026</p>
        <p>These terms are general website-use information and should be reviewed by the organisation operating this site before publication.</p>
        <h2>Website information</h2><p>The content on this site is general information about technology services and ways of working. It is not technical, legal, security, or professional advice for a specific situation. A project scope and any professional services are agreed separately.</p>
        <h2>Use of the site</h2><p>Use this website lawfully and do not attempt to disrupt its operation, access administrator areas without authorisation, or submit content that you do not have the right to share.</p>
        <h2>Intellectual property</h2><p>Unless otherwise stated, website content and design are provided by the site operator. You may link to public pages, but should obtain permission before reproducing substantial content.</p>
        <h2>External services</h2><p>Links to third-party services are provided for convenience. The site operator does not control and is not responsible for third-party content or policies.</p>
        <h2>Availability and changes</h2><p>The site may be changed or temporarily unavailable. The operator may update these terms and should publish a revised date when doing so.</p>
        <h2>Contact</h2><p>For questions about these terms, use the <Link href="/contact">contact form</Link>.</p>
      </div></div></article>
    </>
  );
}
