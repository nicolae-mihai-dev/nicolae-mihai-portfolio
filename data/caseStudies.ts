export const caseStudySlugs = ["developer-portfolio"] as const;

export type CaseStudySlug = (typeof caseStudySlugs)[number];

type CaseStudyFact = {
  label: string;
  value: string;
};

type CaseStudyDecision = {
  title: string;
  description: string;
};

export type CaseStudyData = {
  slug: CaseStudySlug;
  isPublished: boolean;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  summary: string;
  imageSrc: string;
  imageAlt: string;
  facts: readonly CaseStudyFact[];
  briefTitle: string;
  brief: string;
  briefPoint: string;
  decisions: readonly CaseStudyDecision[];
  deliverables: readonly string[];
  qualityChecks: readonly string[];
};

export const caseStudies = [
  {
    slug: "developer-portfolio",
    isPublished: false,
    metaTitle: "Developer Portfolio Case Study | Nicolae Mihai",
    metaDescription:
      "How Nicolae Mihai's developer portfolio was structured as a responsive, data-driven Next.js website with an accessible contact flow.",
    eyebrow: "Case study",
    title: "Nicolae Mihai - Developer Portfolio",
    summary:
      "A personal developer portfolio designed to explain services clearly, show implementation thinking and give potential clients a direct, reliable way to start a conversation.",
    imageSrc: "/images/service-project-placeholder.png",
    imageAlt:
      "Abstract illustration of a responsive website interface and front-end code.",
    facts: [
      { label: "Project type", value: "Developer portfolio" },
      {
        label: "Role",
        value: "Content structure, UI system and front-end development",
      },
      { label: "Stack", value: "Next.js, TypeScript and CSS Modules" },
    ],
    briefTitle: "Make the work easy to understand before asking for a call.",
    brief:
      "The site needed to work as more than a visual profile. A visitor should be able to identify a relevant service, understand the implementation approach and reach out without relying on a personal email client setup.",
    briefPoint:
      "The guiding decision: keep the visual system editorial and confident, while giving the content and interactions a practical job to do.",
    decisions: [
      {
        title: "One source of truth for services",
        description:
          "Service titles, descriptions, routes, metadata and related recommendations are defined as typed data. Homepage cards and child pages read from the same source, so the message stays consistent as the site grows.",
      },
      {
        title: "A small, reusable visual system",
        description:
          "Typography roles, colors, controls and spacing are tokenized instead of repeated as one-off values. The result is easier to refine without introducing visual drift between sections.",
      },
      {
        title: "Responsive behavior is designed, not added later",
        description:
          "Layouts reduce from multi-column compositions to focused single-column reading flows. Navigation, cards, labels, images and forms keep their hierarchy on narrower screens.",
      },
      {
        title: "A contact path with real server-side checks",
        description:
          "The contact form uses server-side validation, a size limit, a honeypot, Turnstile verification and Resend delivery. A success state is only shown after the intended request pipeline succeeds.",
      },
    ],
    deliverables: [
      "Homepage narrative with linked service pages",
      "Data-driven service and related-service architecture",
      "Reusable CSS Modules and shared design tokens",
      "Responsive navigation and keyboard-visible focus states",
      "SEO metadata, robots and sitemap configuration",
    ],
    qualityChecks: [
      "TypeScript type checking and linting",
      "Production build and static route generation",
      "Responsive CSS rules and reduced-motion support",
      "Server-side contact validation and anti-spam checks",
      "Semantic landmarks, labels and accessible link states",
    ],
  },
] as const satisfies readonly CaseStudyData[];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
