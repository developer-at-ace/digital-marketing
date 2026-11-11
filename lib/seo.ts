import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const SITE_NAME = "SuamGlobalDigital";
export const DEFAULT_DESCRIPTION =
  "SuamGlobalDigital helps businesses grow through practical digital marketing, SEO, web development, and technology solutions.";
export const SOCIAL_IMAGE = "/social-image";

export function createBreadcrumbSchema(items: { name: string; path: string }[]) {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return undefined;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(({ name, path }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name,
      item: new URL(path, siteUrl).toString(),
    })),
  };
}

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
}: PageMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalUrl = siteUrl ? new URL(path, siteUrl).toString() : path;
  const pageTitle = `${title} | ${SITE_NAME}`;
  const socialImage = siteUrl
    ? [{ url: new URL(SOCIAL_IMAGE, siteUrl).toString(), width: 1200, height: 630, alt: `${SITE_NAME} — ${title}` }]
    : undefined;

  return {
    title: { absolute: pageTitle },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type,
      siteName: SITE_NAME,
      title: pageTitle,
      description,
      url: canonicalUrl,
      ...(socialImage ? { images: socialImage } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      ...(socialImage ? { images: socialImage.map(({ url, alt }) => ({ url, alt })) } : {}),
    },
  };
}
