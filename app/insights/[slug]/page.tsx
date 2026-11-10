import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import { articles } from "@/data/site";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { JsonLd } from "@/components/seo/JsonLd";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  return article
    ? createPageMetadata({
        title: article.title,
        description: article.excerpt,
        path: `/insights/${article.slug}`,
        type: "article",
      })
    : { title: "Insight not found", robots: { index: false, follow: false } };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: article.title, path: `/insights/${article.slug}` },
  ]);

  return (
    <>
      {breadcrumb && <JsonLd data={breadcrumb} />}
      <article className="article-page">
        <div className="container">
          <div className="article-reading-column">
            <Link className="back-link" href="/insights"><ArrowLeft size={15} /> All insights</Link>
            <span className="article-category">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="article-intro">{article.intro}</p>
            <div className="article-meta"><span><Clock3 size={14} />{article.readingTime}</span></div>
            <div className="article-body">
              {article.sections.map(({ title, paragraphs }) => <section key={title}><h2>{title}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
            </div>
            <div className="article-end"><p>Have a question about putting these ideas into practice?</p><Link className="link-arrow" href="/contact">Talk with us <ArrowUpRight size={15} /></Link></div>
          </div>
        </div>
      </article>
      <PageEndCTA />
    </>
  );
}
