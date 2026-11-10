export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelProductionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const value =
    configured ||
    (process.env.VERCEL_ENV === "production" && vercelProductionDomain
      ? `https://${vercelProductionDomain}`
      : undefined);
  if (!value) return undefined;
  try {
    const url = new URL(value);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      throw new Error("NEXT_PUBLIC_SITE_URL must use HTTP or HTTPS.");
    }
    return new URL("/", url.origin);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL must be a valid absolute HTTP(S) URL.");
  }
}
