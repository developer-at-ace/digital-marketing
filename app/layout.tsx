import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { getSiteUrl } from "@/lib/site-url";
import { DEFAULT_DESCRIPTION, SITE_NAME, SOCIAL_IMAGE } from "@/lib/seo";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: `${SITE_NAME} | Digital Marketing & Technology Solutions`, template: `%s | ${SITE_NAME}` },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Digital Marketing & Technology Solutions`,
    description: DEFAULT_DESCRIPTION,
    ...(siteUrl ? {
      url: siteUrl.toString(),
      images: [{
        url: new URL(SOCIAL_IMAGE, siteUrl).toString(),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} digital marketing, SEO, web development, and technology solutions`,
      }],
    } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Digital Marketing & Technology Solutions`,
    description: DEFAULT_DESCRIPTION,
    ...(siteUrl ? {
      images: [{
        url: new URL(SOCIAL_IMAGE, siteUrl).toString(),
        alt: `${SITE_NAME} digital marketing, SEO, web development, and technology solutions`,
      }],
    } : {}),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <JsonLd
          data={{
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": siteUrl ? new URL("#organization", siteUrl).toString() : undefined,
              name: SITE_NAME,
              description: DEFAULT_DESCRIPTION,
              ...(siteUrl ? { url: siteUrl.toString() } : {}),
              logo: siteUrl ? new URL("/icon.svg", siteUrl).toString() : undefined,
              email: "info@suamglobalventures.com",
              telephone: "9888976796",
              contactPoint: [{
                "@type": "ContactPoint",
                contactType: "customer service",
                email: "info@suamglobalventures.com",
                telephone: "9888976796",
                url: siteUrl ? new URL("/contact", siteUrl).toString() : undefined,
              }],
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            ...(siteUrl ? { "@id": new URL("#website", siteUrl).toString(), url: siteUrl.toString() } : {}),
            name: SITE_NAME,
            description: DEFAULT_DESCRIPTION,
            publisher: siteUrl ? { "@id": new URL("#organization", siteUrl).toString() } : { "@type": "Organization", name: SITE_NAME },
          }}
        />
      </body>
    </html>
  );
}
