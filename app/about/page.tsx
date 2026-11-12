import { ClipboardList, Code2, Compass, Lightbulb, RefreshCw, Target } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { createPageMetadata } from "@/lib/seo";

const aboutTitle = "About SUAM Global Digital | AI & Software Solutions";
const aboutMetadata = createPageMetadata({
  title: aboutTitle,
  description: "Learn about SUAM Global Digital, our approach to AI development, custom software, business automation and practical technology solutions.",
  path: "/about",
});

export const metadata = {
  ...aboutMetadata,
  title: { absolute: aboutTitle },
  openGraph: { ...aboutMetadata.openGraph, title: aboutTitle },
  twitter: { ...aboutMetadata.twitter, title: aboutTitle },
};

const approachSteps = [
  { title: "Understanding First", text: "We begin by learning about the business, its challenges, and the outcome it wants to achieve.", icon: Compass },
  { title: "Practical Planning", text: "We identify the technology, features, and integrations needed to support the project.", icon: ClipboardList },
  { title: "Thoughtful Development", text: "We focus on usability, performance, maintainability, and the requirements agreed for each solution.", icon: Code2 },
  { title: "Continuous Improvement", text: "We build solutions that can be reviewed, maintained, and improved as businesses evolve.", icon: RefreshCw },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="ABOUT US"
        title="About SUAM Global Digital"
        description="Technology That Works for Your Business"
        breadcrumb="About"
        dark
      />
      <section className="section-space">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-12 col-lg-7">
              <span className="eyebrow"><span className="eyebrow-dot" /> TECHNOLOGY THAT WORKS FOR YOUR BUSINESS</span>
              <h2>Technology should make business easier, not more complicated.</h2>
              <p>At SUAM Global Digital, we focus on helping businesses find practical ways to use modern technology. From developing custom software and automating everyday processes to building digital platforms, our work starts with understanding what a business actually needs.</p>
              <p>We provide services across artificial intelligence, software development, ERP and CRM solutions, website and application development, cloud infrastructure, cybersecurity, IoT, and digital marketing.</p>
              <p>Every business operates differently. That&apos;s why we believe the right solution begins with listening, asking the right questions, and understanding the people who will use the technology.</p>
            </div>
            <div className="col-12 col-lg-5">
              <article className="value-card card-surface">
                <span className="service-icon"><Target size={21} /></span>
                <h3>What We Do</h3>
                <p>Our work brings together software engineering, business processes, and emerging technologies.</p>
                <p>Whether an organisation wants to improve an existing application, connect different systems, or explore AI-powered automation, we help turn technical requirements into a practical development plan.</p>
                <p>We focus on solutions that are useful, understandable, and designed with long-term maintenance in mind.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space detail-alt">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <article className="value-card card-surface">
                <span className="service-icon"><Target size={21} /></span>
                <h3>Our Mission</h3>
                <p>To help businesses use technology more effectively by providing practical digital solutions, thoughtful development, and clear technical guidance.</p>
              </article>
            </div>
            <div className="col-12 col-lg-6">
              <article className="value-card card-surface">
                <span className="service-icon"><Lightbulb size={21} /></span>
                <h3>Our Vision</h3>
                <p>To make modern technology more accessible to businesses and contribute to a future where digital tools support better decisions, stronger operations, and continuous improvement.</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow"><span className="eyebrow-dot" /> FROM FIRST CONVERSATION TO LONG-TERM SUPPORT</span>
            <h2>How We Approach Every Project</h2>
          </div>
          <div className="row g-3">
            {approachSteps.map(({ title, text, icon: Icon }) => (
              <div className="col-12 col-md-6 col-lg-3" key={title}>
                <article className="value-card card-surface">
                  <span className="service-icon"><Icon size={21} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PageEndCTA
        eyebrow="LET’S BUILD SOMETHING USEFUL"
        title="Have an idea, a business challenge, or an existing system that needs improvement?"
        description="Connect with SUAM Global Digital to discuss your requirements and explore the next steps."
        buttonText="Contact Our Team"
      />
    </>
  );
}
