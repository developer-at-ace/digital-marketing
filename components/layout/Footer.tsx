import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> LET’S BUILD WITH INTENTION</span>
            <h2>Have a challenge in mind?</h2>
            <p>Tell us what you’re working through. We’ll help you find a practical next step.</p>
          </div>
          <Link className="button button-light" href="/contact">Start a conversation <ArrowUpRight size={16} /></Link>
        </div>
        <div className="row g-4 footer-links">
          <div className="col-12 col-md-6 col-lg-3">
            <Link className="brand brand-footer" href="/">
              <span className="brand-mark" aria-hidden="true"><span /></span>
              <span className="brand-name">SuamGlobalDigital</span>
            </Link>
            <p className="footer-copy">Thoughtful technology for the work that matters.</p>
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <h3>Services</h3>
            {services.slice(0, 5).map((service) => <Link className="footer-link" key={service.slug} href={`/services/${service.slug}`}>{service.title}</Link>)}
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <h3>Explore</h3>
            <Link className="footer-link" href="/industries">Industries</Link>
            <Link className="footer-link" href="/solutions">Solutions</Link>
            <Link className="footer-link" href="/portfolio">Work</Link>
            <Link className="footer-link" href="/about">About</Link>
            <Link className="footer-link" href="/insights">Insights</Link>
          </div>
          <div className="col-6 col-md-6 col-lg-3">
            <h3>Get in touch</h3>
            <a className="footer-link" href="mailto:info@suamglobalventures.com">info@suamglobalventures.com</a>
            <a className="footer-link" href="tel:9888976796">9888976796</a>
            <Link className="footer-link" href="/contact">Contact & project brief</Link>
            <Link className="footer-link" href="/privacy-policy">Privacy policy</Link>
            <Link className="footer-link" href="/terms">Terms of use</Link>
            <Link className="footer-link" href="/admin/leads">Lead portal</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© SuamGlobalDigital. All rights reserved.</span>
          <span>Built for clarity, designed for what’s next.</span>
        </div>
      </div>
    </footer>
  );
}
