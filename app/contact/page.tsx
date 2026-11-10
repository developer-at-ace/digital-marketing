import { Clock3, LockKeyhole, MessageSquareText } from "lucide-react";
import { LeadForm } from "@/components/forms/LeadForm";
import { PageIntro } from "@/components/ui/PageIntro";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact & Project Brief",
  description: "Tell us what you are planning and send a project brief to TechNova.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="CONTACT" title="A good conversation starts with context." description="Tell us what you’re working through. A few details help us make the first conversation more useful." breadcrumb="Contact" />
      <section className="section-space contact-page"><div className="container"><div className="row g-5"><div className="col-12 col-lg-4"><div className="contact-sidebar"><h2>Share your project brief.</h2><p>Whether you have a detailed plan or just an early question, tell us where you are and what would help.</p><div className="contact-points"><p><MessageSquareText size={18} /><span><strong>Start a conversation</strong><small>Share your goals, questions, or current challenges.</small></span></p><p><Clock3 size={18} /><span><strong>Set the context</strong><small>Budget and timing are optional; estimates are welcome.</small></span></p><p><LockKeyhole size={18} /><span><strong>Handled privately</strong><small>Your details are used to respond to this enquiry.</small></span></p></div></div></div><div className="col-12 col-lg-8"><div className="lead-form-card contact-form-card"><LeadForm /></div></div></div></div></section>
    </>
  );
}
