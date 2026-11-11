import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: `Page Not Found | ${SITE_NAME}` },
  description: "This page could not be found. Browse SuamGlobalDigital's digital marketing, SEO and technology services.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="page-intro">
      <div className="container">
        <span className="eyebrow"><span className="eyebrow-dot" /> 404 ERROR</span>
        <h1>Page not found</h1>
        <p>The page may have moved or the address may be incorrect.</p>
        <Link className="button button-primary" href="/">Return to homepage</Link>
      </div>
    </section>
  );
}
