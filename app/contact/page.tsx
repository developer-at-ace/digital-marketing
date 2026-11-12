import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe2, Mail, MapPin, MessageSquareText, Phone } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

const contactTitle = "Contact SUAM Global Digital | AI & IT Services";
const contactMetadata = createPageMetadata({
  title: contactTitle,
  description: "Contact SUAM Global Digital for AI development, custom software, ERP, CRM, cybersecurity, cloud solutions and technology consulting enquiries.",
  path: "/contact",
});

export const metadata: Metadata = {
  ...contactMetadata,
  title: { absolute: contactTitle },
  openGraph: { ...contactMetadata.openGraph, title: contactTitle },
  twitter: { ...contactMetadata.twitter, title: contactTitle },
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="CONTACT US"
        title="Contact Us"
        description="Let's Talk About Your Next Project"
        breadcrumb="Contact"
      />
      <section className="section-space contact-page">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <div className="contact-sidebar">
                <h2>Let&apos;s Talk About Your Next Project</h2>
                <p>Have a technology project in mind? We&apos;d be happy to hear about it.</p>
                <p>Whether you&apos;re exploring artificial intelligence, planning a new website, developing business software, or looking to improve your existing systems, a conversation is a good place to begin.</p>
                <p>At SUAM Global Digital, we take time to understand your requirements before discussing possible solutions.</p>

                <div className="contact-details card-surface">
                  <h3>Get in Touch</h3>
                  <address className="contact-points">
                    <p>
                      <Mail size={18} aria-hidden="true" />
                      <span><strong>Business Email</strong><a href="mailto:info@suamglobalventures.com">info@suamglobalventures.com</a></span>
                    </p>
                    <p>
                      <Phone size={18} aria-hidden="true" />
                      <span><strong>Phone</strong><a href="tel:9888976796">9888976796</a></span>
                    </p>
                    <p>
                      <MapPin size={18} aria-hidden="true" />
                      <span><strong>Office Address</strong><a href="https://maps.google.com/?q=225%2C%20Phase%20IV%2C%20Udyog%20Vihar%2C%20Sector%2018%2C%20Gurugram%2C%20Haryana%20122015" target="_blank" rel="noreferrer">225, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</a></span>
                    </p>
                    <p>
                      <Globe2 size={18} aria-hidden="true" />
                      <span><strong>Website</strong><a href="https://suamglobaldigital.com" target="_blank" rel="noreferrer">https://suamglobaldigital.com</a></span>
                    </p>
                  </address>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="contact-form-heading">
                <span className="eyebrow"><span className="eyebrow-dot" /> TELL US WHAT YOU&apos;RE WORKING ON</span>
                <h2>Share a few project details.</h2>
                <p>Tell us about your project, the challenges you&apos;re facing, or the services you&apos;re interested in. Our team can review your enquiry and discuss the next steps.</p>
              </div>
              <div className="lead-form-card contact-form-card">
                <LeadForm />
                <p className="contact-form-disclaimer">Please avoid sharing passwords, sensitive personal information, or confidential business documents through this form.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <article className="value-card card-surface contact-followup">
                <span className="service-icon"><MessageSquareText size={21} /></span>
                <h2>What Happens After You Contact Us?</h2>
                <p>Once we receive your enquiry, we can review the information, clarify your requirements, and discuss possible approaches.</p>
                <p>For larger projects, a detailed requirements discussion may be needed before a proposal or timeline can be prepared.</p>
              </article>
            </div>
            <div className="col-12 col-lg-6">
              <article className="value-card card-surface contact-followup">
                <span className="service-icon"><ArrowUpRight size={21} /></span>
                <h2>Explore Our Services</h2>
                <p>Discover how our AI development, software engineering, business automation, and digital technology services may support your organisation.</p>
                <Link className="button button-outline" href="/services">Explore Our Services <ArrowUpRight size={15} /></Link>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
