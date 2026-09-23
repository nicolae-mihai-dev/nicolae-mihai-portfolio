export const caseStudySlugs = ["developer-portfolio", "alder-stone"] as const;

export type CaseStudySlug = (typeof caseStudySlugs)[number];

type CaseStudyFact = {
  label: string;
  value: string;
};

type CaseStudyDecision = {
  title: string;
  description: string;
};

type CaseStudyLink = {
  label: string;
  href: string;
};

type CaseStudyEvidence = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  layout: "full" | "half";
};

export type CaseStudyData = {
  slug: CaseStudySlug;
  isPublished: boolean;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  summary: string;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  heroImageLayout?: "landscape" | "portrait";
  projectLinks: readonly CaseStudyLink[];
  evidence?: readonly CaseStudyEvidence[];
  evidenceTitle?: string;
  facts: readonly CaseStudyFact[];
  briefTitle: string;
  brief: string;
  briefPoint: string;
  decisionsTitle: string;
  decisions: readonly CaseStudyDecision[];
  outcomesTitle: string;
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
    imageCaption: "A responsive, component-led portfolio system.",
    projectLinks: [],
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
    decisionsTitle: "Build a portfolio that is useful before it is decorative.",
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
    outcomesTitle:
      "A clear system for presenting work and starting conversations.",
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
  {
    slug: "alder-stone",
    isPublished: true,
    metaTitle: "Alder & Stone | WordPress Case Study | Nicolae Mihai",
    metaDescription:
      "How Nicolae Mihai built a custom WordPress and ACF website for an architecture and construction studio, with an editable project system, SEO foundations and performance-focused delivery.",
    eyebrow: "Case study · WordPress / ACF",
    title: "Alder & Stone",
    summary:
      "A custom WordPress website for an architecture and construction studio, designed to make projects, services and editorial content clear for visitors and straightforward for the client to manage.",
    imageSrc: "/images/work/alder-stone/alder-stone-mobile.png",
    imageAlt:
      "Alder & Stone homepage shown on a mobile phone viewport.",
    imageCaption:
      "Mobile homepage — the hierarchy, navigation and call to action remain clear on a narrow screen.",
    heroImageLayout: "portrait",
    projectLinks: [
      {
        label: "View source on GitHub",
        href: "https://github.com/nicolae-mihai-dev/alder-stone",
      },
    ],
    evidenceTitle:
      "The public experience and editor workflow were designed as one system.",
    evidence: [
      {
        title: "Homepage experience",
        description:
          "The desktop homepage combines a clear studio proposition, restrained navigation and architecture-led imagery in the first screen.",
        imageSrc: "/images/work/alder-stone/alder-stone-home-desktop.png",
        imageAlt:
          "Alder & Stone architecture studio homepage with the Spaces built with purpose hero.",
        imageWidth: 1440,
        imageHeight: 800,
        layout: "full",
      },
      {
        title: "Project detail template",
        description:
          "A focused project page frames the architecture first, then makes the supporting location, scope and project story easy to scan.",
        imageSrc:
          "/images/work/alder-stone/alder-courtyard-residence-project-desktop.png",
        imageAlt:
          "Courtyard Residence project page on the Alder & Stone website.",
        imageWidth: 1440,
        imageHeight: 800,
        layout: "full",
      },
      {
        title: "Editable project content",
        description:
          "ACF fields give the studio structured controls for the project overview, location, year, client, scope and story content.",
        imageSrc: "/images/work/alder-stone/alder-stone-acf-editor.png",
        imageAlt:
          "WordPress editor showing editable fields for the Courtyard Residence project.",
        imageWidth: 1440,
        imageHeight: 800,
        layout: "full",
      },
      {
        title: "Lighthouse — mobile",
        description:
          "A mobile audit recorded 100 across Performance, Accessibility, Best Practices and SEO, with a 1.4-second Largest Contentful Paint.",
        imageSrc:
          "/images/work/alder-stone/alder-stone-lighthouse-mobile.png",
        imageAlt:
          "Mobile Lighthouse report showing scores of 100 for Performance, Accessibility, Best Practices and SEO.",
        imageWidth: 765,
        imageHeight: 785,
        layout: "half",
      },
      {
        title: "Lighthouse — desktop",
        description:
          "A desktop audit also recorded 100 across all four Lighthouse categories, including a 0.7-second Largest Contentful Paint.",
        imageSrc:
          "/images/work/alder-stone/alder-stone-lighthouse-desktop.png",
        imageAlt:
          "Desktop Lighthouse report showing scores of 100 for Performance, Accessibility, Best Practices and SEO.",
        imageWidth: 776,
        imageHeight: 779,
        layout: "half",
      },
    ],
    facts: [
      { label: "Project type", value: "Architecture studio website" },
      {
        label: "Role",
        value: "WordPress theme development, CMS structure and front-end delivery",
      },
      { label: "Stack", value: "WordPress, ACF, PHP, SCSS and JavaScript" },
    ],
    briefTitle:
      "Create a considered digital presence that the studio can confidently keep current.",
    brief:
      "The site needed to communicate an architectural point of view without becoming difficult to navigate or update. Projects had to carry the visual weight, while the supporting content, services, journal and contact paths needed a stable, reusable structure for ongoing editorial work.",
    briefPoint:
      "The guiding decision: treat the site as an editorial system for the studio, not a collection of one-off page layouts.",
    decisionsTitle:
      "A focused WordPress build shaped around content, clarity and long-term maintenance.",
    decisions: [
      {
        title: "Projects are managed as structured content",
        description:
          "Individual projects use a dedicated content model and editable fields instead of hardcoded layouts. This gives the client control over project details, imagery and supporting story sections while keeping the front-end presentation consistent.",
      },
      {
        title: "Shared components reduce visual drift",
        description:
          "Typography roles, buttons, spacing rules, cards and calls to action were established as shared theme patterns. Reusing those patterns keeps the experience coherent as new projects and journal posts are added.",
      },
      {
        title: "Performance was treated as part of the implementation",
        description:
          "The delivery includes responsive image handling, WebP conversion, focused theme assets and a reduced JavaScript footprint. The aim was a fast visual experience without compromising the photography-led presentation.",
      },
      {
        title: "Search and accessibility are built into the foundation",
        description:
          "The theme includes semantic page structure, visible keyboard focus, meaningful image alternatives and page-level metadata support through Rank Math. This creates a reliable base for future content and search growth.",
      },
    ],
    outcomesTitle:
      "A flexible studio website with a refined public experience and a practical editor workflow.",
    deliverables: [
      "Custom WordPress child theme and responsive visual system",
      "ACF-powered content controls for projects, services and page sections",
      "Projects archive, individual project templates and a journal structure",
      "Contact experience, privacy page and reusable calls to action",
      "Rank Math SEO setup and page-level metadata support",
    ],
    qualityChecks: [
      "Desktop, tablet and mobile layout review",
      "Keyboard-visible focus states and semantic page landmarks",
      "Responsive image sizes and WebP conversion workflow",
      "Lighthouse performance and accessibility checks",
      "Source-controlled theme workflow with GitHub delivery",
    ],
  },
] as const satisfies readonly CaseStudyData[];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
