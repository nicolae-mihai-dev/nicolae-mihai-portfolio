export type NavLink = {
  label: string;
  href: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  href: `/services/${string}`;
  featured?: boolean;
};

export type ProjectStatus = "Live" | "In progress" | "Planned";

export type ProjectLink = {
  label: string;
  href?: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  status: ProjectStatus;
};

export type StackGroup = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  href?: string;
};

export const siteInfo = {
  name: "NICOLAE MIHAI",
  role: "NICOLAE MIHAI",
  logo: "NM.DEV",
  positioning:
    "Web Developer focused on React, WordPress, HubSpot & modern landing pages.",
  heroTitle: "WEB DEVELOPER\nFOR MODERN\nWEBSITES",
  heroIntro:
    "I build polished websites, landing pages and CMS-driven sections with React, WordPress and HubSpot - shaped around clear structure, strong visual implementation and content that is easy to manage.",
  heroNote:
    "Selected self-initiated projects, documented with live demos, GitHub repos and implementation notes.",
  email: "nicolae.mihai.dev@gmail.com",
  ctaLabel: "Work With Me",
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Landing Pages & Business Websites",
    description:
      "Marketing pages, personal websites and service pages built with strong layout, responsive details and clear content structure.",
    href: "/services/figma-to-website",
    featured: true,
  },
  {
    number: "02",
    title: "React / Next.js Front-end Builds",
    description:
      "Component-based interfaces using React, Next.js and TypeScript, suitable for landing pages, portfolio builds, dashboards and API-connected sections.",
    href: "/services/react-nextjs-developer",
    featured: true,
  },
  {
    number: "03",
    title: "WordPress & ACF Development",
    description:
      "Custom WordPress structures with editable content areas, flexible sections and admin-friendly fields for content-driven websites.",
    href: "/services/wordpress-acf-developer",
  },
  {
    number: "04",
    title: "HubSpot CMS Landing Pages",
    description:
      "HubSpot pages and reusable CMS modules for marketing teams that need campaign pages, content blocks and controlled editing.",
    href: "/services/hubspot-cms-developer",
  },
  {
    number: "05",
    title: "WooCommerce Product Experiences",
    description:
      "Product pages, store layouts and front-end improvements for WooCommerce websites that need a cleaner buying experience.",
    href: "/services/woocommerce-developer",
  },
  {
    number: "06",
    title: "Responsive Improvements & Website Updates",
    description:
      "Layout fixes, CSS cleanup, mobile improvements and front-end refinements for existing websites that need better presentation.",
    href: "/services/responsive-website-fixes",
  },
];

export const projects: Project[] = [
  {
    title: "React / Next.js Portfolio Website",
    description:
      "A personal portfolio built with Next.js, TypeScript and custom CSS, focused on editorial layout, responsive structure and a polished presentation system.",
    tags: ["Next.js", "TypeScript", "CSS Modules", "Vercel"],
    links: [
      { label: "Live Demo" },
      { label: "GitHub" },
      { label: "Case Study" },
    ],
    status: "In progress",
  },
  {
    title: "React Business Dashboard",
    description:
      "A dashboard interface with data cards, filters, charts, form states and API-driven content, built to demonstrate practical front-end application structure.",
    tags: ["React", "TypeScript", "API Fetching", "Charts"],
    links: [
      { label: "Live Demo" },
      { label: "GitHub" },
      { label: "Case Study" },
    ],
    status: "Planned",
  },
  {
    title: "Node.js + PostgreSQL REST API",
    description:
      "A backend project with REST endpoints, CRUD operations, authentication flow, relational data structure and deployment-ready documentation.",
    tags: ["Node.js", "Express", "PostgreSQL", "REST API"],
    links: [
      { label: "GitHub" },
      { label: "Documentation" },
      { label: "Case Study" },
    ],
    status: "Planned",
  },
  {
    title: "WordPress + ACF Custom Theme",
    description:
      "A WordPress implementation with flexible content sections, editable fields and a structure designed for non-technical content updates.",
    tags: ["WordPress", "ACF", "PHP", "Custom Theme"],
    links: [{ label: "Preview" }, { label: "GitHub" }, { label: "Case Study" }],
    status: "Planned",
  },
  {
    title: "WooCommerce Product Website",
    description:
      "A WooCommerce-focused build with product presentation, cart flow styling and front-end improvements shaped around clear product browsing.",
    tags: ["WordPress", "WooCommerce", "CSS", "UX"],
    links: [{ label: "Preview" }, { label: "GitHub" }, { label: "Case Study" }],
    status: "Planned",
  },
  {
    title: "HubSpot CMS Landing Page",
    description:
      "A HubSpot CMS landing page system with reusable modules, controlled editing and campaign-focused sections.",
    tags: ["HubSpot CMS", "HubL", "Modules", "Landing Page"],
    links: [{ label: "Preview" }, { label: "Case Study" }],
    status: "Planned",
  },
];

export const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js", "Express", "PostgreSQL", "SQL", "REST APIs"],
  },
  {
    title: "CMS & Platforms",
    items: [
      "WordPress",
      "Advanced Custom Fields",
      "PHP",
      "HubSpot CMS",
      "WooCommerce",
    ],
  },
  {
    title: "Delivery & Workflow",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "Browser DevTools",
      "Responsive Testing",
      "Figma",
    ],
  },
];

export const aboutDetails = [
  {
    label: "Name",
    value: "Nicolae Mihai",
  },
  {
    label: "Role",
    value: "Web Developer",
  },
  {
    label: "Focus",
    value: "React / Next.js / Full-Stack / CMS",
  },
  {
    label: "Experience",
    value: "8+ Years Web Development",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/nicolae-mihai-dev",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nicolae-mihai-311b6042a/",
  },
];

export const futureRoutes = [
  "/services/react-nextjs-developer",
  "/services/wordpress-acf-developer",
  "/services/hubspot-cms-developer",
  "/services/responsive-website-fixes",
  "/services/figma-to-website",
  "/services/woocommerce-developer",
] as const;
