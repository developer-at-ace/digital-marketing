import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(254),
  company: z.string().trim().max(120).optional().default(""),
  service: z.enum([
    "AI & Automation",
    "ERP, CRM & HMS",
    "Websites & Apps",
    "SEO & Digital Marketing",
    "Cybersecurity",
    "IoT & Connected Systems",
    "Cloud & DevOps",
    "Technology Consulting",
    "Not sure yet",
  ], { error: "Choose a service." }),
  project: z.string().trim().min(20, "Add a little more detail (at least 20 characters).").max(5000),
  budget: z.string().max(80).optional().default(""),
  timeline: z.string().max(80).optional().default(""),
  consent: z.literal(true, { error: "Please confirm that we may respond to your enquiry." }),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type LeadFormValues = z.input<typeof leadSchema>;

export const leadUpdateSchema = z.object({
  id: z.string().regex(/^[a-f\d]{24}$/i),
  status: z.enum(["new", "in-progress", "completed"]),
  owner: z.string().trim().max(100),
  note: z.string().trim().max(3000),
});
