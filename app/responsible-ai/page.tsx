import type { Metadata } from "next";
import { BadgeCheck, Eye, LockKeyhole, RefreshCw, Scale, ShieldCheck, UserRoundCheck } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { createPageMetadata } from "@/lib/seo";

const responsibleAITitle = "Responsible AI Development | SUAM Global Digital";
const responsibleAIMetadata = createPageMetadata({
  title: responsibleAITitle,
  description: "Explore SUAM Global Digital's approach to responsible AI development, including human oversight, privacy, transparency, security and reliability.",
  path: "/responsible-ai",
});

export const metadata: Metadata = {
  ...responsibleAIMetadata,
  title: { absolute: responsibleAITitle },
  openGraph: { ...responsibleAIMetadata.openGraph, title: responsibleAITitle },
  twitter: { ...responsibleAIMetadata.twitter, title: responsibleAITitle },
};

const principles = [
  {
    title: "Human Oversight",
    paragraphs: [
      "AI should help people work more effectively, not remove human responsibility from important decisions.",
      "Applications involving sensitive information or decisions with significant consequences require appropriate human review and oversight.",
    ],
    icon: UserRoundCheck,
  },
  {
    title: "Privacy and Data Protection",
    paragraphs: [
      "Responsible AI development requires careful consideration of how information is collected, processed, stored, and shared.",
      "Before implementing an AI solution, businesses should understand what data the system needs, who can access it, and how it will be protected.",
    ],
    icon: LockKeyhole,
  },
  {
    title: "Accuracy and Reliability",
    paragraphs: [
      "AI-generated responses are not always correct.",
      "Testing, evaluation, monitoring, and clear limitations are important when developing systems that people and businesses may rely on.",
      "We believe organisations should assess AI performance against the intended use rather than assume that a model will be accurate in every situation.",
    ],
    icon: BadgeCheck,
  },
  {
    title: "Transparency",
    paragraphs: [
      "People should have appropriate information about when and how AI is being used.",
      "Clear communication about system capabilities, limitations, and human responsibilities helps users make informed decisions.",
    ],
    icon: Eye,
  },
  {
    title: "Security",
    paragraphs: [
      "AI applications can introduce additional security considerations, including unauthorised access, sensitive data exposure, malicious inputs, and risks associated with third-party integrations.",
      "These concerns should be considered during system planning and implementation.",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Fairness and Responsible Use",
    paragraphs: [
      "AI systems may reflect limitations or biases in their training data and design.",
      "Businesses should evaluate whether an AI application is suitable for its intended users and consider the potential effects of inaccurate or unfair outputs.",
    ],
    icon: Scale,
  },
  {
    title: "Continuous Evaluation",
    paragraphs: [
      "AI technologies evolve quickly.",
      "Applications should be reviewed as business requirements, model capabilities, and applicable regulations change.",
    ],
    icon: RefreshCw,
  },
];

export default function ResponsibleAIPage() {
  return (
    <>
      <PageIntro
        eyebrow="RESPONSIBLE AI"
        title="Responsible AI Development"
        description="Building AI Solutions With Responsibility in Mind"
        breadcrumb="Responsible AI"
      />
      <section className="section-space">
        <div className="container">
          <div className="legal-copy">
            <p>Artificial intelligence is changing how businesses manage information, automate processes, and interact with technology.</p>
            <p>These opportunities also introduce important questions about accuracy, privacy, security, and accountability.</p>
            <p>At SUAM Global Digital, we believe responsible AI development begins with understanding both the benefits and limitations of the technology.</p>
            <p>Our approach is guided by the following principles.</p>
          </div>
        </div>
      </section>
      <section className="section-space detail-alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow"><span className="eyebrow-dot" /> OUR PRINCIPLES</span>
            <h2>Consider the impact at every stage.</h2>
          </div>
          <div className="row g-3">
            {principles.map(({ title, paragraphs, icon: Icon }, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={title}>
                <article className="value-card card-surface">
                  <span className="service-icon"><Icon size={21} /></span>
                  <h3>{index + 1}. {title}</h3>
                  {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container">
          <div className="legal-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> FROM USE CASE TO IMPLEMENTATION</span>
            <h2>Our Approach to AI Projects</h2>
            <p>When exploring AI development, we encourage businesses to define a clear use case, identify relevant risks, assess available data, and establish appropriate testing and oversight requirements.</p>
            <p>The technical controls and responsibilities for each project should be documented in the applicable agreement.</p>
          </div>
        </div>
      </section>
      <PageEndCTA
        eyebrow="EXPLORE AI DEVELOPMENT"
        title="Explore AI Development With SUAM Global Digital"
        description="Whether you're considering an internal knowledge assistant, document automation, or an AI-powered business application, understanding the use case is the first step."
        buttonText="Contact our team"
      />
    </>
  );
}
