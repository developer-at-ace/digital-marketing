import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

const faqTitle = "FAQ | AI Development & IT Services | SUAM Global Digital";
const faqMetadata = createPageMetadata({
  title: faqTitle,
  description: "Find answers about SUAM Global Digital's AI development, software engineering, ERP, CRM, website development, project costs and consulting services.",
  path: "/faq",
});

export const metadata: Metadata = {
  ...faqMetadata,
  title: { absolute: faqTitle },
  openGraph: { ...faqMetadata.openGraph, title: faqTitle },
  twitter: { ...faqMetadata.twitter, title: faqTitle },
};

const faqGroups: { title: string; questions: { question: string; answer: ReactNode }[] }[] = [
  {
    title: "General Questions",
    questions: [
      {
        question: "What is SUAM Global Digital?",
        answer: "SUAM Global Digital is a technology services brand focused on AI development, custom software, business management solutions, web and mobile applications, cybersecurity, cloud infrastructure, and digital marketing.",
      },
      {
        question: "What types of businesses can benefit from your services?",
        answer: "Businesses with technology-related requirements may benefit from our services. The right solution depends on the organisation's industry, existing systems, budget, and operational needs.",
      },
      {
        question: "Do you work on custom development projects?",
        answer: <>Custom software development is one of our core service areas. You can <Link href="/contact">share your requirements with our team</Link> to discuss technical feasibility and possible next steps.</>,
      },
    ],
  },
  {
    title: "Artificial Intelligence",
    questions: [
      {
        question: "What AI development services do you offer?",
        answer: "Our AI service areas include intelligent applications, AI assistants, workflow automation, document processing, and integrations with existing business systems.",
      },
      {
        question: "Can AI be integrated into an existing website or application?",
        answer: "In many cases, yes. Integration depends on the current software architecture, available APIs, data access, and the functionality required.",
      },
      {
        question: "Is AI suitable for every business process?",
        answer: "Not necessarily. Some processes can benefit from automation, while others require human judgement or more conventional software solutions. An assessment of the business problem helps determine the appropriate approach.",
      },
    ],
  },
  {
    title: "Software Development",
    questions: [
      {
        question: "Do you develop custom ERP and CRM systems?",
        answer: "ERP and CRM development are among our technology service areas. The required modules, integrations, reporting capabilities, and user permissions depend on the organisation's needs.",
      },
      {
        question: "Do you develop websites and mobile applications?",
        answer: "Our development services cover business websites, web applications, mobile applications, backend systems, and related integrations.",
      },
      {
        question: "Can you improve an existing application?",
        answer: <>You can <Link href="/contact">contact us</Link> to discuss an existing system and the improvements you are considering. Technical feasibility depends on the application&apos;s current condition and architecture.</>,
      },
    ],
  },
  {
    title: "Project Planning",
    questions: [
      {
        question: "How much does a software development project cost?",
        answer: "Project costs depend on features, integrations, technical complexity, design requirements, testing, and ongoing support needs. A requirements discussion is usually necessary before a meaningful estimate can be prepared.",
      },
      {
        question: "How long does a development project take?",
        answer: "Timelines vary according to project scope, complexity, resources, and dependencies.",
      },
      {
        question: "How do I start a project with SUAM Global Digital?",
        answer: <>Visit our <Link href="/contact">Contact Us page</Link> and provide a description of your business requirements. Our team can review the enquiry and discuss the next steps.</>,
      },
      {
        question: "Do you provide maintenance and support?",
        answer: "Maintenance and support requirements can be discussed during project planning. Any ongoing service commitments should be documented in the relevant agreement.",
      },
    ],
  },
  {
    title: "Contact",
    questions: [
      {
        question: "How can I contact SUAM Global Digital?",
        answer: <>You can reach us through the official contact information and enquiry form available on our <Link href="/contact">Contact Us page</Link>.</>,
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <PageIntro
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title="Frequently Asked Questions"
        description="Answers about our AI development, software engineering, technology services, and project planning."
        breadcrumb="FAQ"
      />
      <section className="faq-section section-space">
        <div className="container">
          <div className="legal-copy faq-page-intro">
            <p>Find helpful information about SUAM Global Digital, our services, and what to expect when planning a project with our team.</p>
          </div>
          <div className="faq-page-groups">
            {faqGroups.map(({ title, questions }) => (
              <section className="faq-page-group" key={title} aria-labelledby={`faq-${title.toLowerCase().replaceAll(" ", "-")}`}>
                <h2 id={`faq-${title.toLowerCase().replaceAll(" ", "-")}`}>{title}</h2>
                <div className="faq-list">
                  {questions.map(({ question, answer }) => (
                    <details className="faq-item" key={question}>
                      <summary>{question}<ChevronRight size={18} aria-hidden="true" /></summary>
                      <p>{answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
