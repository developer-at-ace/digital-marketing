import Link from "next/link";
import { ArrowUpRight, Compass, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { PageEndCTA } from "@/components/home/HomePageSections";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About Our Digital Team",
  description: "Meet SuamGlobalDigital. We combine practical digital marketing, SEO, web development and technology planning with clear, people-first delivery.",
  path: "/about",
});

const values = [
  { title: "Curiosity before assumption", text: "We ask how the work really happens before choosing a technical answer.", icon: Compass },
  { title: "Useful over impressive", text: "We focus on clear decisions and outcomes your team can understand and maintain.", icon: Lightbulb },
  { title: "People in the loop", text: "Good technology makes work better for the people who depend on it.", icon: HeartHandshake },
  { title: "Care in every detail", text: "Accessibility, privacy, security, and handover belong in the plan from the beginning.", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="ABOUT SUAMGLOBALDIGITAL" title="Technology is only useful when it works for people." description="We bring business goals, thoughtful design, and sound engineering together to help teams move forward with clarity." breadcrumb="About" dark />
      <section className="section-space"><div className="container"><div className="row g-5 align-items-start"><div className="col-12 col-lg-5"><span className="eyebrow"><span className="eyebrow-dot" /> OUR POINT OF VIEW</span><h2>Make the complex feel manageable.</h2><p>Every organisation has its own context. Our work starts by understanding the people doing the work, the systems around them, and the change they want to make.</p><p>From early discovery to software delivery, we aim to leave teams with clear decisions, useful technology, and a better understanding of what comes next.</p><Link className="button button-outline" href="/contact">Talk with our team <ArrowUpRight size={15} /></Link></div><div className="col-12 col-lg-7"><div className="row g-3">{values.map(({ title, text, icon: Icon }) => <div className="col-12 col-md-6" key={title}><article className="value-card card-surface"><span className="service-icon"><Icon size={21} /></span><h3>{title}</h3><p>{text}</p></article></div>)}</div></div></div></div></section>
      <section className="values-banner"><div className="container"><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> A COMMITMENT TO CLARITY</span><h2>No invented success stories.<br />No one-size-fits-all answers.</h2><p>We share real, useful information and make our assumptions clear. Your organisation deserves a technology partner who begins with listening.</p></div></section>
      <PageEndCTA />
    </>
  );
}
