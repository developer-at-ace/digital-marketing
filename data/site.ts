import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bot,
  BriefcaseBusiness,
  Building2,
  Cloud,
  Code2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers3,
  Map,
  Megaphone,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  problems: string[];
  deliverables: string[];
  approach: string;
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Make everyday work simpler with AI that fits your business.",
    description:
      "Practical AI and automation planning, integrations, and software built around the way your team works.",
    icon: Bot,
    problems: ["Repetitive manual workflows", "Scattered business information", "Unclear AI opportunities"],
    deliverables: ["Workflow discovery and prioritisation", "AI and automation prototypes", "Integrations and implementation guidance"],
    approach: "We begin with a specific workflow, identify its data and human decision points, and agree on a useful, measurable next step before building.",
  },
  {
    slug: "erp-crm-hms",
    title: "ERP, CRM & HMS",
    short: "Bring business-critical processes into a clearer operating system.",
    description:
      "Business systems planning and implementation support for operations, customer relationships, and healthcare workflows.",
    icon: Layers3,
    problems: ["Disconnected systems and records", "Slow handoffs between teams", "Processes that no longer scale"],
    deliverables: ["Requirements and process mapping", "Configuration and integration plans", "Migration and rollout support"],
    approach: "We map the real operating process first, then shape system requirements, integrations, and a rollout plan around the people who will use it.",
  },
  {
    slug: "websites-apps",
    title: "Websites & Apps",
    short: "Thoughtful digital products, from the first screen to the back end.",
    description:
      "Responsive websites and web applications designed to communicate clearly and support real business workflows.",
    icon: Code2,
    problems: ["A site that no longer reflects your business", "Clunky customer or staff journeys", "A product idea without a delivery plan"],
    deliverables: ["Product and content architecture", "Responsive web experiences", "Application development and handover"],
    approach: "We align on users and outcomes, shape the experience, and build in reviewable increments so decisions stay clear throughout delivery.",
  },
  {
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    short: "Build a more useful, discoverable digital presence.",
    description:
      "Technical SEO, content foundations, and digital campaign planning grounded in your audience and goals.",
    icon: Megaphone,
    problems: ["A site that is hard to discover", "Unclear content priorities", "Marketing activity without a joined-up plan"],
    deliverables: ["Technical and content reviews", "Search-focused information architecture", "Channel and measurement planning"],
    approach: "We review your current digital presence, prioritise practical improvements, and define reporting around signals your team can act on.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Understand security priorities and strengthen the basics.",
    description:
      "Security planning and implementation support that helps teams make informed, proportionate improvements.",
    icon: ShieldCheck,
    problems: ["Unclear security ownership", "Inconsistent access and device practices", "A need to prepare for a security review"],
    deliverables: ["Security posture discovery", "Prioritised control recommendations", "Implementation and readiness support"],
    approach: "We establish scope and context first, then help prioritise practical controls. No security service can promise zero risk.",
  },
  {
    slug: "iot",
    title: "IoT & Connected Systems",
    short: "Connect devices and data to make operations easier to understand.",
    description:
      "Internet of Things strategy, integration planning, and application development for connected environments.",
    icon: Activity,
    problems: ["Siloed device and operational data", "Limited visibility across sites", "An IoT concept that needs a technical path"],
    deliverables: ["Use-case and connectivity planning", "Device and platform integration", "Dashboards and workflow design"],
    approach: "We start with the operational question you need to answer, then assess devices, connectivity, data handling, and maintainability.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    short: "Create a dependable path from software changes to production.",
    description:
      "Cloud architecture and delivery workflow guidance shaped around your application and operating needs.",
    icon: Cloud,
    problems: ["Unclear deployment processes", "Growing infrastructure complexity", "A need for better operational visibility"],
    deliverables: ["Cloud and deployment discovery", "Infrastructure and CI/CD planning", "Monitoring and handover guidance"],
    approach: "We review the current environment and operational needs, then agree on a secure, supportable way to deliver and operate your software.",
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    short: "Turn a complex technology decision into a clear next step.",
    description:
      "Independent discovery, architecture, and delivery planning for teams navigating technology change.",
    icon: BriefcaseBusiness,
    problems: ["Too many technology choices", "A project with an unclear scope", "Misaligned business and technical teams"],
    deliverables: ["Stakeholder and needs discovery", "Architecture and options reviews", "Roadmaps, estimates, and decision briefs"],
    approach: "We bring the right stakeholders into the conversation, surface constraints and trade-offs, and leave you with decisions your team can use.",
  },
];

export type Industry = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  considerations: string[];
  firstStep: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Digital experiences and systems planning with patient journeys, privacy, and day-to-day clinical workflows in mind.",
    icon: HeartPulse,
    considerations: ["Accessible patient-facing experiences", "Care-team workflow discovery", "Privacy-aware system integration"],
    firstStep: "Map a patient or staff journey that needs to work better.",
  },
  {
    slug: "education",
    title: "Education",
    description: "Technology planning for learning environments, student services, and the teams that keep them running.",
    icon: GraduationCap,
    considerations: ["Clear student and staff journeys", "Connected learning systems", "Inclusive, device-friendly access"],
    firstStep: "Choose a learner or administrator workflow to examine.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Connected operations and software planning to help teams make sense of production and business information.",
    icon: Building2,
    considerations: ["Practical shop-floor workflows", "Useful operational visibility", "Integration with existing systems"],
    firstStep: "Identify where information handoffs slow an operation down.",
  },
  {
    slug: "retail",
    title: "Retail",
    description: "Customer and operational technology that supports a more coherent experience across digital and physical channels.",
    icon: ShoppingBag,
    considerations: ["Consistent customer journeys", "Inventory and system connections", "Useful measurement across channels"],
    firstStep: "Trace one customer journey from discovery through service.",
  },
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    description: "Digital services and operational systems shaped around the moments that matter to guests and staff.",
    icon: Map,
    considerations: ["Helpful booking and guest experiences", "Reliable operational handoffs", "Connected service information"],
    firstStep: "Select one guest or operations journey for discovery.",
  },
  {
    slug: "finance",
    title: "Finance",
    description: "Technology delivery planning that gives careful attention to data, access, and understandable customer journeys.",
    icon: Landmark,
    considerations: ["Data handling and access requirements", "Clear, accessible customer experiences", "Documented system boundaries"],
    firstStep: "Set the regulatory and data constraints before choosing an approach.",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description: "Connected digital experiences for property discovery, client communication, and portfolio workflows.",
    icon: Building2,
    considerations: ["Useful property search and discovery", "Clear enquiry and follow-up journeys", "Connected property information"],
    firstStep: "Review how a property enquiry moves through your team.",
  },
  {
    slug: "logistics",
    title: "Logistics",
    description: "Software and data planning that helps connect dispatch, delivery, and customer communication.",
    icon: Truck,
    considerations: ["Operationally useful status information", "Connected dispatch and delivery workflows", "Clear exception handling"],
    firstStep: "Map the handoffs around a delivery exception.",
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "a-practical-first-step-for-business-ai",
    title: "A practical first step for business AI",
    category: "AI & Automation",
    readingTime: "5 min read",
    excerpt: "Start with a workflow and its real constraints, not a model shortlist.",
    intro: "AI exploration is more useful when it begins with work your team already understands. A specific, bounded workflow makes the risks, inputs, and value easier to discuss.",
    sections: [
      { title: "Choose a workflow people can describe", paragraphs: ["Look for repeated work with clear inputs and outputs. Ask the people doing it where context gets lost, what decisions need human judgement, and what a useful improvement would look like.", "Avoid automating a process simply because it is frequent. A workflow with sensitive information or ambiguous decisions may need a different kind of support."] },
      { title: "Check the information before the technology", paragraphs: ["Understand where the relevant information lives, who can access it, and whether it is accurate enough for the task. Data handling and access requirements belong in the first conversation.", "A small prototype can help test assumptions, but it should use appropriate data and have a clear review plan."] },
      { title: "Agree on a useful next step", paragraphs: ["Write down the intended user, the task, the human review point, and how the team will learn from a pilot. That gives everyone a grounded basis for deciding whether to continue.", "A good first project can also conclude that a simpler integration or process change is the better answer."] },
    ],
  },
  {
    slug: "planning-a-website-that-can-grow",
    title: "Planning a website that can grow",
    category: "Web & Apps",
    readingTime: "4 min read",
    excerpt: "A clear content structure and a small set of user journeys are a durable starting point.",
    intro: "A useful website plan connects what an organisation needs to say with what visitors need to do. Starting with that relationship makes design and development decisions easier to revisit later.",
    sections: [
      { title: "Start with the questions visitors bring", paragraphs: ["List the questions your audience needs answered and the actions they may take next. Group related information into a structure that can be understood without knowing your internal organisation chart.", "Prioritise a few important journeys. They will guide page content, navigation labels, and the calls to action."] },
      { title: "Treat content as part of the product", paragraphs: ["Agree on page purpose, ownership, and review before choosing a visual pattern. Short, specific copy is easier to maintain and more useful than broad claims.", "Keep room for future content, but only introduce navigation categories that have a clear purpose today."] },
      { title: "Build for change", paragraphs: ["Use reusable page patterns where they simplify editing and keep accessibility consistent. Measure whether visitors can complete important tasks, then refine based on what you learn.", "Performance, accessibility, and search fundamentals are easier to preserve when they are part of the build rather than a final checklist."] },
    ],
  },
  {
    slug: "a-clearer-path-to-system-integration",
    title: "A clearer path to system integration",
    category: "Business Systems",
    readingTime: "6 min read",
    excerpt: "Map the information and ownership between systems before settling on an integration approach.",
    intro: "System integration is about more than moving fields from one application to another. It is an opportunity to clarify where information comes from, who is responsible for it, and what should happen when something changes.",
    sections: [
      { title: "Follow the information", paragraphs: ["Choose a business process and trace the information it creates, uses, and hands to another team. Capture which system is authoritative for each part.", "This often reveals duplicate entry or unclear ownership that a new connector alone would not resolve."] },
      { title: "Make exceptions visible", paragraphs: ["Record what happens when information is late, incomplete, or rejected. Teams need a clear way to notice and recover from failed handoffs.", "Consider access permissions, audit needs, and how integrations will be monitored after launch."] },
      { title: "Sequence the work", paragraphs: ["Prioritise a bounded integration that validates the important assumptions. Document interface contracts and responsibilities so future changes are easier to reason about.", "Plan for support and ownership as part of delivery, not as a separate clean-up task."] },
    ],
  },
];

export const deliveryFormats = [
  {
    slug: "discovery-and-direction",
    title: "Discovery & direction",
    category: "Project planning",
    summary: "A focused engagement to understand a business challenge and turn it into a practical decision brief.",
    challenge: "An idea may have a clear ambition but an uncertain scope, competing stakeholder needs, or untested assumptions.",
    approach: ["Listen to the people closest to the work.", "Map current workflows, constraints, and desired outcomes.", "Compare options and make key trade-offs visible."],
    outcome: "A decision-ready brief with priorities, risks, recommended next steps, and a shared view of what success should mean.",
    relatedService: "technology-consulting",
  },
  {
    slug: "digital-product-delivery",
    title: "Digital product delivery",
    category: "Web & applications",
    summary: "A collaborative path from user needs and product direction to a useful, maintainable digital experience.",
    challenge: "Teams need to move from an early product idea or an ageing website to a clear, accessible experience.",
    approach: ["Clarify user journeys and content needs.", "Shape an experience and technical plan that fits the constraints.", "Build, review, and refine in focused increments."],
    outcome: "A considered product foundation, a transparent delivery path, and a handover that supports continued improvement.",
    relatedService: "websites-apps",
  },
  {
    slug: "connected-business-systems",
    title: "Connected business systems",
    category: "Systems & integration",
    summary: "A practical approach to making business processes and the information behind them work together.",
    challenge: "Disconnected tools and unclear information ownership make handoffs harder to manage.",
    approach: ["Trace information through a real business process.", "Clarify system ownership, permissions, and exception handling.", "Prioritise integrations and rollout steps around operational needs."],
    outcome: "A clear system map and a sequenced implementation plan, with responsibilities and operational considerations documented.",
    relatedService: "erp-crm-hms",
  },
];

export const platformGroups = [
  { title: "Web", items: ["Next.js", "React", "TypeScript"] },
  { title: "Data", items: ["MongoDB", "Mongoose", "REST APIs"] },
  { title: "Delivery", items: ["Git", "CI/CD", "Cloud platforms"] },
];

export const faqs = [
  { question: "How does a first conversation work?", answer: "We learn about your goals, users, constraints, and timing. You can share a project brief in advance, and we will agree on a sensible next step together." },
  { question: "Can you work with our existing team and systems?", answer: "Yes. Discovery includes the people, tools, and constraints already in place so recommendations can fit your operating environment." },
  { question: "Do you guarantee search rankings or security outcomes?", answer: "No. Search visibility and security depend on many factors outside any single engagement. We focus on clear scope, sound practices, and transparent work." },
  { question: "What happens after I submit an enquiry?", answer: "Your brief is sent to the organisation's lead inbox. A response time depends on how this website is configured and staffed; include enough context to make a useful follow-up possible." },
];

export const quickNav = [
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];
