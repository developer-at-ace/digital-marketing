import type { Metadata } from "next";
import { LeadDashboard } from "@/components/admin/LeadDashboard";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Lead Inbox",
  description: "Authenticated project enquiry management.",
  robots: { index: false, follow: false },
};

export default function AdminLeadsPage() {
  return (
    <>
      <PageIntro eyebrow="ADMINISTRATION" title="Lead inbox" description="Review project enquiries and manage follow-up." breadcrumb="Lead inbox" />
      <section className="section-space admin-page"><div className="container"><LeadDashboard /></div></section>
    </>
  );
}
