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
  MessageSquareText,
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
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> SOFTWARE · AI · DIGITAL GROWTH</span>
            <h1>Software Development,<br />AI &amp; Digital<br /><span>Transformation Services</span></h1>
            <p className="hero-copy">Every business has its own challenges. We help businesses plan, develop, and improve the software, automation, and digital services they rely on. We understand your requirements before recommending technology, so every investment has a clear purpose.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/services">Explore Our Services <ArrowRight size={16} /></Link>
              <Link className="button button-ghost" href="/contact">Discuss Your Project <ArrowUpRight size={15} /></Link>
            </div>
            <div className="hero-note"><span className="hero-note-icon"><Compass size={15} /></span> Technology with a clear purpose, built around your requirements.</div>
          </div>
          <div className="col-12 col-lg-6">
            <HeroVisual />
          </div>
        </div>
        <div className="hero-bottom">
          <span>SOFTWARE · AI · BUSINESS SYSTEMS</span><span className="hero-bottom-line" /><span>SCROLL TO EXPLORE <ArrowDown size={13} /></span>
        </div>
      </div>
    </section>
  );
}

export function Principles() {
  const principles = [
    { icon: Compass, title: "We Begin With Your Requirements", text: "Before discussing platforms or frameworks, we learn what your business needs to accomplish." },
    { icon: Blocks, title: "We Focus on Practical Solutions", text: "Technology should solve a problem, simplify a process, or support a meaningful business objective." },
    { icon: Check, title: "We Consider Long-Term Maintainability", text: "A useful solution should remain understandable and manageable beyond its initial development." },
    { icon: MessageSquareText, title: "We Value Clear Communication", text: "We keep project requirements, decisions, and next steps easy to understand." },
  ];
  return (
    <section className="principles-section section-space-sm">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow"><span className="eyebrow-dot" /> WHY WORK WITH US</span>
          <h2>Why Work With SuamGlobalDigital?</h2>
        </div>
        <div className="row g-3">
          {principles.map(({ icon: Icon, title, text }) => (
            <div className="col-12 col-md-6 col-lg-3" key={title}>
              <div className="principle-card"><span className="principle-icon"><Icon size={20} /></span><div><h2>{title}</h2><p>{text}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceGrid() {
  const serviceDescriptions: Record<string, string> = {
    "ai-automation": "Reduce repetitive work with AI applications, intelligent assistants, document processing, and workflow automation suited to your operations.",
    "erp-crm-hms": "Organise customer, financial, inventory, and hospital administration processes with software shaped around practical operational requirements.",
    "websites-apps": "Build digital experiences that are easy to use, maintain, and expand, from business websites and mobile apps to back-end systems and API integrations.",
    "seo-digital-marketing": "Help customers discover your business with technical SEO, useful website content, stronger search visibility, and goal-aligned marketing.",
    cybersecurity: "Identify security concerns and improve how your organisation protects its systems and information, starting with the risks that matter to your operations.",
    iot: "Bring connected-device information into useful workflows for monitoring, data collection, and better operational visibility.",
    "cloud-devops": "Improve how applications are deployed, maintained, and monitored with cloud infrastructure and reliable deployment automation.",
    "technology-consulting": "Evaluate technical options, improve existing systems, and plan practical next steps before deciding whether new software is needed.",
  };

  return (
    <section className="section-space" id="services">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading eyebrow="OUR TECHNOLOGY SERVICES" title="Software Development, AI & Digital Transformation Services" description="We help businesses plan, develop, and improve the technology they rely on—from custom software and business systems to cloud services and digital marketing." />
          <LinkArrow href="/services">Explore all services</LinkArrow>
        </div>
        <div className="row g-4 service-grid">
          {services.map(({ slug, title, icon: Icon, description }) => (
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
                <p>{serviceDescriptions[slug] ?? description}</p>
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
          <SectionHeading eyebrow="INDUSTRY SOLUTIONS" title="Technology Solutions for Different Industries" description="Healthcare, education, manufacturing, retail, travel, finance, real estate, and logistics each have distinct workflows and needs. We learn your users, operations, and technical requirements before proposing a solution." />
          <LinkArrow href="/industries">Discover industries</LinkArrow>
        </div>
        <div className="row g-4 industry-grid">
          {industries.map(({ slug, title, icon: Icon }) => (
            <div className="col-12 col-sm-6 col-lg-3" key={slug}>
              <Link className="industry-card" href={`/industries/${slug}`}>
                <span className={`industry-artwork industry-artwork-${slug}`} role="img" aria-label={`${title} technology illustration`}>
                  <svg className="industry-artwork-scene" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                    <defs>
                      <linearGradient id={`industry-gradient-${slug}`} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="var(--industry-start)" />
                        <stop offset="100%" stopColor="var(--industry-end)" />
                      </linearGradient>
                      <pattern id={`industry-grid-${slug}`} width="22" height="22" patternUnits="userSpaceOnUse">
                        <path d="M22 0H0V22" fill="none" stroke="white" strokeOpacity=".13" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="320" height="180" fill={`url(#industry-gradient-${slug})`} />
                    <rect width="320" height="180" fill={`url(#industry-grid-${slug})`} />
                    <circle cx="250" cy="40" r="95" fill="white" fillOpacity=".08" />
                    <circle cx="250" cy="40" r="66" fill="none" stroke="white" strokeOpacity=".23" />
                    <circle cx="250" cy="40" r="43" fill="none" stroke="white" strokeOpacity=".2" />
                    <path d="M0 148C68 109 118 201 189 150s86-34 131-68v98H0z" fill="white" fillOpacity=".1" />
                    <path d="M0 162c68-39 118 39 189-2s86-19 131-48" fill="none" stroke="white" strokeOpacity=".48" strokeWidth="2" />
                    <circle cx="68" cy="49" r="3" fill="white" fillOpacity=".8" />
                    <circle cx="93" cy="83" r="2" fill="white" fillOpacity=".65" />
                    <circle cx="206" cy="131" r="3" fill="white" fillOpacity=".7" />
                  </svg>
                  <span className="industry-artwork-icon"><Icon size={39} strokeWidth={1.6} aria-hidden="true" /></span>
                  <span className="industry-artwork-caption">TECHNOLOGY IN CONTEXT</span>
                </span>
                <span className="industry-card-label">{title}<ChevronRight size={17} className="industry-arrow" aria-hidden="true" /></span>
              </Link>
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

type PageEndCTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonText?: string;
};

export function PageEndCTA({
  eyebrow = "READY WHEN YOU ARE",
  title = "Let’s make your next move a clear one.",
  description,
  buttonText = "Start a conversation",
}: PageEndCTAProps) {
  return (
    <section className="page-end-cta">
      <div className="page-end-orb" aria-hidden="true" />
      <div className="container">
        <div>
          <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> {eyebrow}</span>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
        <Link className="button button-primary" href="/contact">{buttonText} <ArrowUpRight size={16} /></Link>
      </div>
    </section>
  );
}
