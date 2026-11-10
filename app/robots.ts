import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const isNonProductionDeployment = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

  return {
    rules: isNonProductionDeployment
      ? { userAgent: "*", disallow: "/" }
      : { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ...(base ? { sitemap: new URL("/sitemap.xml", base).toString() } : {}),
  };
}
