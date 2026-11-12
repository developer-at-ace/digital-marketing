import type { MetadataRoute } from "next";
import { articles, deliveryFormats, industries, services } from "@/data/site";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];

  const pages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    ...services.map(({ slug }) => ({ path: `/services/${slug}`, priority: 0.7 })),
    { path: "/industries", priority: 0.8 },
    ...industries.map(({ slug }) => ({ path: `/industries/${slug}`, priority: 0.6 })),
    { path: "/solutions", priority: 0.8 },
    { path: "/portfolio", priority: 0.8 },
    ...deliveryFormats.map(({ slug }) => ({ path: `/portfolio/${slug}`, priority: 0.6 })),
    { path: "/about", priority: 0.7 },
    { path: "/careers", priority: 0.6 },
    { path: "/faq", priority: 0.6 },
    { path: "/responsible-ai", priority: 0.6 },
    { path: "/insights", priority: 0.8 },
    ...articles.map(({ slug }) => ({ path: `/insights/${slug}`, priority: 0.6 })),
    { path: "/contact", priority: 0.8 },
    { path: "/privacy-policy", priority: 0.3 },
    { path: "/terms-and-conditions", priority: 0.3 },
    { path: "/disclaimer", priority: 0.3 },
    { path: "/cookie-policy", priority: 0.3 },
  ];

  return pages.map(({ path, priority }) => ({
    url: new URL(path, base).toString(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority,
  }));
}
