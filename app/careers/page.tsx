import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, HeartHandshake, Lightbulb, Megaphone, Users } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

const careersTitle = "Careers at SUAM Global Digital | IT & Digital Jobs";
const careersMetadata = createPageMetadata({
  title: careersTitle,
  description: "Explore career opportunities at SUAM Global Digital in software development, AI, digital marketing, business development and technology services.",
  path: "/careers",
});

export const metadata: Metadata = {
  ...careersMetadata,
  title: { absolute: careersTitle },
  openGraph: { ...careersMetadata.openGraph, title: careersTitle },
  twitter: { ...careersMetadata.twitter, title: careersTitle },
};

const careerBenefits = [
  {
    title: "Opportunities to Learn",
    description: "Technology continues to evolve, and staying current requires an interest in learning new tools, methods, and approaches.",
    icon: GraduationCap,
  },
  {
    title: "Meaningful Work",
    description: "Business technology projects involve real operational challenges. Understanding those challenges is an important part of developing useful solutions.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description: "Clear communication, respect for colleagues, and shared responsibility help teams work effectively.",
    icon: HeartHandshake,
  },
  {
    title: "Professional Development",
    description: "We encourage a professional approach to work, feedback, problem-solving, and skill development.",
    icon: BriefcaseBusiness,
  },
];

const careerAreas = [
  { title: "Software Development", icon: Code2 },
  { title: "Artificial Intelligence and Automation", icon: Lightbulb },
  { title: "Website and Application Development", icon: BriefcaseBusiness },
  { title: "SEO and Digital Marketing", icon: Megaphone },
  { title: "Business Development", icon: Users },
  { title: "Human Resources and Operations", icon: HeartHandshake },
  { title: "Project Coordination", icon: BriefcaseBusiness },
];

export default function CareersPage() {
  return (
    <>
      <PageIntro
        eyebrow="CAREERS"
        title="Careers at SUAM Global Digital"
        description="Grow Your Career in Technology"
        breadcrumb="Careers"
      />
      <section className="section-space">
        <div className="container">
          <div className="row g-5 align-items-start">
            <div className="col-12 col-lg-7">
              <span className="eyebrow"><span className="eyebrow-dot" /> BUILD WHAT’S NEXT</span>
              <h2>Curiosity, collaboration, and problem-solving.</h2>
              <p>Good technology is built by people who are willing to learn, collaborate, and solve problems.</p>
              <p>At SUAM Global Digital, our work spans software engineering, artificial intelligence, digital transformation, and technology services.</p>
              <p>We value professionals who approach their work with curiosity, responsibility, and a commitment to continuous improvement.</p>
            </div>
            <div className="col-12 col-lg-5">
              <div className="career-openings-card card-surface" id="current-openings">
                <span className="service-icon"><BriefcaseBusiness size={21} /></span>
                <h2>Current Job Openings</h2>
                <p>Available positions, eligibility requirements, and application instructions will be listed here when recruitment is open.</p>
                <p>No current openings are listed. Please check back for future opportunities.</p>
                <a className="link-arrow" href="mailto:info@suamglobalventures.com?subject=Recruitment%20enquiry">
                  Ask about recruitment <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space detail-alt">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow"><span className="eyebrow-dot" /> WHY EXPLORE A CAREER WITH US?</span>
            <h2>Room to learn and do meaningful work.</h2>
          </div>
          <div className="row g-3">
            {careerBenefits.map(({ title, description, icon: Icon }) => (
              <div className="col-12 col-md-6 col-lg-3" key={title}>
                <article className="value-card card-surface career-card">
                  <span className="service-icon"><Icon size={21} /></span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow"><span className="eyebrow-dot" /> CAREER AREAS</span>
            <h2>Explore where you could contribute.</h2>
            <p>Depending on current hiring requirements, opportunities may be available in:</p>
          </div>
          <div className="row g-3">
            {careerAreas.map(({ title, icon: Icon }) => (
              <div className="col-12 col-sm-6 col-lg-4" key={title}>
                <div className="career-area-card card-surface">
                  <span className="service-icon"><Icon size={20} /></span>
                  <h3>{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space detail-alt">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-8">
              <span className="eyebrow"><span className="eyebrow-dot" /> HOW TO APPLY</span>
              <h2>Take the next step in your career.</h2>
              <p>Review the requirements for the relevant position and submit your updated resume through the application channel listed with that opening.</p>
              <p>For recruitment-related questions, contact SUAM Global Digital at <a href="mailto:info@suamglobalventures.com?subject=Recruitment%20enquiry">info@suamglobalventures.com</a>.</p>
            </div>
            <div className="col-12 col-lg-4 text-lg-end">
              <Link className="button button-primary" href="#current-openings">Explore Open Positions <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
