import type { MetadataRoute } from "next";
import { articles, deliveryFormats, industries, services } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];

  const paths = [
    "",
    "/services",
    ...services.map(({ slug }) => `/services/${slug}`),
    "/industries",
    ...industries.map(({ slug }) => `/industries/${slug}`),
    "/solutions",
    "/portfolio",
    ...deliveryFormats.map(({ slug }) => `/portfolio/${slug}`),
    "/about",
    "/insights",
    ...articles.map(({ slug }) => `/insights/${slug}`),
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: new URL(path, base).toString(),
  }));
}
