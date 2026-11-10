import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Check,
  ChevronRight,
  CircleHelp,
  Code2,
  Compass,
  Cpu,
  LockKeyhole,
} from "lucide-react";
import { industries, platformGroups, services, faqs } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkArrow } from "@/components/ui/LinkArrow";
import { LeadForm } from "@/components/forms/LeadForm";
import { CiCdWorkflow } from "@/components/home/CiCdWorkflow";
import { HeroVisual } from "@/components/home/HeroVisual";
import { TechnologyEcosystem } from "@/components/home/TechnologyEcosystem";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> AI · SOFTWARE · DIGITAL TRANSFORMATION</span>
            <h1>Your Vision.<br />Our Technology.<br /><span>Unlimited Possibilities.</span></h1>
            <p className="hero-copy">We help ambitious teams turn complex ideas into useful digital products, connected systems, and smarter ways of working.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contact">Start Your Project <ArrowRight size={16} /></Link>
              <Link className="button button-ghost" href="/services">Explore Our Services <ArrowUpRight size={15} /></Link>
            </div>
            <div className="hero-note"><span className="hero-note-icon"><Compass size={15} /></span> Thoughtful technology. Clear next steps.</div>
          </div>
          <div className="col-12 col-lg-6">
            <HeroVisual />
          </div>
        </div>
        <div className="hero-bottom">
          <span>DESIGNED FOR WHAT’S NEXT</span><span className="hero-bottom-line" /><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span>
        </div>
      </div>
    </section>
  );
}

export function Principles() {
  const principles = [
    { icon: Compass, title: "Start with the problem", text: "Understand the people, process, and constraints before recommending technology." },
    { icon: Blocks, title: "Build with intention", text: "Keep scope clear, decisions visible, and the work focused on a useful outcome." },
    { icon: Check, title: "Hand over with care", text: "Leave teams with accessible, maintainable work and a clear path to what comes next." },
  ];
  return (
    <section className="principles-section section-space-sm">
      <div className="container">
        <div className="row g-3">
          {principles.map(({ icon: Icon, title, text }) => (
            <div className="col-12 col-md-4" key={title}>
              <div className="principle-card"><span className="principle-icon"><Icon size={20} /></span><div><h2>{title}</h2><p>{text}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid() {
  return (
    <section className="section-space" id="services">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading eyebrow="WHAT WE DO" title="Technology that moves work forward" description="From a single digital product to connected business systems, start with the challenge that matters to your team." />
          <LinkArrow href="/services">Explore all services</LinkArrow>
        </div>
        <div className="row g-4 service-grid">
          {services.map(({ slug, title, short, icon: Icon }) => (
            <div className="col-12 col-md-6 col-xl-3" key={slug}>
              <Link className="service-card" href={`/services/${slug}`}>
                <span className={`service-visual service-visual-${slug}`} aria-hidden="true">
                  <span className="service-visual-core"><Icon size={19} strokeWidth={1.8} /></span>
                  <i className="service-visual-node service-visual-node-one" />
                  <i className="service-visual-node service-visual-node-two" />
                  <i className="service-visual-node service-visual-node-three" />
                  <i className="service-visual-link service-visual-link-one" />
                  <i className="service-visual-link service-visual-link-two" />
                </span>
                <h3>{title}</h3>
                <p>{short}</p>
                <span className="card-link">Explore service <ArrowUpRight size={15} /></span>
              </Link>
            </div>
          ))}
        </div>
        <CiCdWorkflow />
      </div>
    </section>
  );
}

export function AiSpotlight() {
  return (
    <section className="ai-spotlight-section section-space">
      <div className="container">
        <div className="ai-spotlight">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6">
              <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> AN INTENTIONAL APPROACH TO AI</span>
              <h2>Make room for better work.</h2>
              <p>AI is most useful when it supports a real task, works with appropriate information, and keeps people in control. We help your team find that starting point.</p>
              <Link className="button button-light" href="/services/ai-automation">Explore AI & automation <ArrowUpRight size={15} /></Link>
            </div>
            <div className="col-12 col-lg-6">
              <div className="rag-visual" role="img" aria-label="Retrieval-augmented generation: trusted documents are split into searchable chunks, relevant passages are retrieved for a question, and supplied to an LLM to generate a grounded answer. RAG provides runtime context; it does not retrain the model.">
                <div className="rag-visual-topline"><span>RETRIEVAL-AUGMENTED GENERATION</span><span className="rag-live"><i /> RUNTIME CONTEXT</span></div>
                <div className="rag-flow">
                  <div className="rag-source">
                    <span className="rag-step">01 · KNOWLEDGE</span>
                    <div className="rag-doc"><i /><i /><i /></div>
                    <strong>Trusted sources</strong>
                    <small>Docs · policies · data</small>
                  </div>
                  <div className="rag-connector" aria-hidden="true"><i /><i /><i /></div>
                  <div className="rag-index">
                    <span className="rag-step">02 · INDEX</span>
                    <div className="rag-chunks"><i /><i /><i /></div>
                    <strong>Chunk & embed</strong>
                    <small>Searchable vectors</small>
                  </div>
                  <div className="rag-connector" aria-hidden="true"><i /><i /><i /></div>
                  <div className="rag-retrieve">
                    <span className="rag-step">03 · RETRIEVE</span>
                    <div className="rag-search"><span /><i /></div>
                    <strong>Relevant context</strong>
                    <small>Matched to question</small>
                  </div>
                </div>
                <div className="rag-prompt"><span>QUESTION</span><span>How does our policy apply?</span><i aria-hidden="true" /></div>
                <div className="rag-context-connector" aria-hidden="true"><i /><i /><i /></div>
                <div className="rag-answer-row">
                  <div className="rag-context"><span className="rag-context-mark">+</span><span><strong>Retrieved passages</strong><small>Relevant source context</small></span></div>
                  <span className="rag-plus" aria-hidden="true">+</span>
                  <div className="rag-llm"><span className="rag-llm-icon"><Cpu size={19} /></span><span><strong>LLM</strong><small>Language model</small></span></div>
                  <span className="rag-arrow" aria-hidden="true">→</span>
                  <div className="rag-grounded"><Check size={17} /><span><strong>Grounded answer</strong><small>With source references</small></span></div>
                </div>
                <p className="rag-note">RAG adds relevant context at query time—it doesn’t retrain the LLM.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustryGrid() {
  return (
    <section className="section-space industries-section">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading eyebrow="WHO WE WORK WITH" title="Built around your world" description="Every sector has its own language, workflows, and constraints. The work starts by understanding yours." />
          <LinkArrow href="/industries">Discover industries</LinkArrow>
        </div>
        <div className="row g-3">
          {industries.map(({ slug, title, icon: Icon }) => (
            <div className="col-6 col-md-4 col-lg-3" key={slug}>
              <Link className="industry-card" href={`/industries/${slug}`}><Icon size={20} /><span>{title}</span><ChevronRight size={16} className="industry-arrow" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkPreview() {
  return (
    <section className="work-section section-space">
      <div className="container">
        <div className="work-preview card-surface">
          <div className="work-preview-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> OUR APPROACH TO DELIVERY</span>
            <h2>Good work begins with the right questions.</h2>
            <p>We don’t publish invented client stories or borrowed results. Explore the engagement formats we use to turn a challenge into a clear, deliverable plan.</p>
            <LinkArrow href="/portfolio">Explore how we work</LinkArrow>
          </div>
          <ol className="work-preview-steps" aria-label="Our approach to delivery">
            <li>
              <span className="work-step-number">01</span>
              <span className="work-step-copy"><strong>Discovery</strong><small>Understand the context</small></span>
              <Compass className="work-step-icon" size={19} aria-hidden="true" />
            </li>
            <li>
              <span className="work-step-number">02</span>
              <span className="work-step-copy"><strong>Direction</strong><small>Agree on a useful path</small></span>
              <Blocks className="work-step-icon" size={19} aria-hidden="true" />
            </li>
            <li>
              <span className="work-step-number">03</span>
              <span className="work-step-copy"><strong>Delivery</strong><small>Build and learn together</small></span>
              <Check className="work-step-icon" size={19} aria-hidden="true" />
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export function Technology() {
  return (
    <section className="technology-section section-space">
      <div className="container">
        <div className="technology-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-dot" /> A THOUGHTFUL TOOLKIT</span>
            <h2>Technology should work as one.</h2>
          </div>
          <p>We connect the right tools around your needs, keeping security, maintainability, and your team in view.</p>
        </div>
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-5">
            <div className="row g-3">
              {platformGroups.map(({ title, items }, index) => (
                <div className="col-12" key={title}>
                  <div className="stack-group">
                    <span className={`stack-icon stack-icon-${index}`}><Code2 size={18} /></span>
                    <div>
                      <h3>{title}</h3>
                      <div className="stack-tags">{items.map((item) => <span key={item}>{item}</span>)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <TechnologyEcosystem />
          </div>
        </div>
      </div>
    </section>
  );
}

export function LeadCapture() {
  return (
    <section className="lead-capture-section section-space" id="project-brief">
      <div className="container">
        <div className="row g-4 align-items-start">
          <div className="col-12 col-lg-5">
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> YOUR NEXT STEP STARTS HERE</span>
            <h2>Let’s talk about what you’re building.</h2>
            <p>Share a few details about your project. We’ll use them to make the first conversation more useful.</p>
            <div className="lead-promise"><LockKeyhole size={17} /><span>Your project details are handled privately and used to respond to your enquiry.</span></div>
            <div className="contact-side-note"><CircleHelp size={17} /><span>Not sure where to start? A rough outline is enough to begin.</span></div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="lead-form-card"><LeadForm /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="faq-section section-space">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-lg-4"><SectionHeading eyebrow="GOOD TO KNOW" title="Questions, answered" description="A little context before we begin." /><LinkArrow href="/contact">Ask us directly</LinkArrow></div>
          <div className="col-12 col-lg-8">
            <div className="faq-list">
              {faqs.map(({ question, answer }) => <details className="faq-item" key={question}><summary>{question}<ChevronRight size={18} /></summary><p>{answer}</p></details>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InsightPreview() {
  return (
    <section className="insight-preview-section section-space-sm">
      <div className="container">
        <div className="insight-preview">
          <div><span className="eyebrow"><span className="eyebrow-dot" /> IDEAS FOR WHAT’S NEXT</span><h2>Clear thinking for complex technology.</h2></div>
          <p>Practical notes on AI, digital products, and the systems behind them.</p>
          <LinkArrow href="/insights">Read our insights</LinkArrow>
        </div>
      </div>
    </section>
  );
}

export function PageEndCTA() {
  return (
    <section className="page-end-cta">
      <div className="page-end-orb" aria-hidden="true" />
      <div className="container">
        <div><span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> READY WHEN YOU ARE</span><h2>Let’s make your next move a clear one.</h2></div>
        <Link className="button button-primary" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}
