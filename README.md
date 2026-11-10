# TechNova — AI, software & digital transformation

A responsive organisation website built with Next.js App Router, TypeScript, Bootstrap 5.3's grid, custom SCSS, and Lucide icons. The reference brand is TechNova; replace it and the site copy with the organisation's approved identity before launch. The portfolio pages intentionally describe engagement formats rather than inventing client work or results.

## Requirements

- Node.js 20.9 or newer
- npm
- A MongoDB database for enquiry storage

## Local setup

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Set the environment variables in `.env.local` before testing enquiry submission or the administrator portal:

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | MongoDB connection string used by Mongoose to store and manage enquiries |
| `ADMIN_USERNAME` | Administrator sign-in username |
| `ADMIN_PASSWORD` | Strong administrator password |
| `AUTH_SECRET` | Random secret of at least 32 characters used to sign the eight-hour HTTP-only admin session |
| `NEXT_PUBLIC_SITE_URL` | Production canonical origin (for example `https://www.example.com`); used for canonical metadata, structured data, and the sitemap. Vercel production can fall back to `VERCEL_PROJECT_PRODUCTION_URL`. |

Keep production secrets in the hosting provider's secret manager. Do not expose administrator or database credentials to client-side code. Configure a real MongoDB database, reviewed legal copy, the organisation's contact details, and its verified site URL before launch. If the database is unavailable or not configured, the enquiry API returns an error and does not report a false success.

## Search engine setup

- Set `NEXT_PUBLIC_SITE_URL` to the verified HTTPS production origin in the hosting environment. The sitemap is intentionally empty without a known public origin; Vercel production deployments can use `VERCEL_PROJECT_PRODUCTION_URL` as a fallback.
- Submit `https://your-domain.example/sitemap.xml` in Google Search Console and verify the domain. Check indexing and Core Web Vitals there; metadata cannot guarantee rankings or indexing.
- Replace the example TechNova brand and copy with the organisation's approved name, services, locations, and contact details. Do not add local-business schema until the real public address/coverage and contact information are confirmed.
- Review every page title, description, canonical URL, social preview, and legal page after replacing the brand. Keep service, industry, and article copy accurate and substantive.
- Preview the generated social card at `/opengraph-image`. Structured data describes the organisation, website, services, and visible page breadcrumbs; validate it with Google's Rich Results Test and Schema Markup Validator after deployment.
- Vercel preview deployments are disallowed from crawling; production is crawlable, with APIs disallowed and the authenticated admin page marked `noindex`.

## Routes

- `/` — Homepage and project brief
- `/services`, `/services/[slug]` — Services and service details
- `/industries`, `/industries/[slug]` — Industry perspectives
- `/solutions` — Solution areas
- `/portfolio`, `/portfolio/[slug]` — Transparent engagement formats (not claimed client case studies)
- `/about` — Approach and values
- `/insights`, `/insights/[slug]` — Editorial articles
- `/contact` — Project enquiry
- `/privacy-policy`, `/terms` — Legal information requiring operator review
- `/admin/leads` — Credential-protected lead inbox, status, owner, and notes
- `/api/leads` — Validated enquiry submission endpoint

## Validation and production

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The public lead form and server handler share Zod validation. Successful enquiries are persisted to MongoDB; the admin API only returns or updates lead records for a signed, short-lived, HTTP-only session. The sitemap and absolute canonical URLs use `NEXT_PUBLIC_SITE_URL`.
