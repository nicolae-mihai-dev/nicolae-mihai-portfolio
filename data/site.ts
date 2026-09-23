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
  url: "https://nicolae-mihai-dev.netlify.app",
  email: "nicolae.mihai.dev@gmail.com",
};

export const projects: Project[] = [
  {
    title: "React / Next.js Portfolio Website",
    description:
      "A personal portfolio built with Next.js, TypeScript and custom CSS, focused on editorial layout, responsive structure and a polished presentation system.",
    tags: ["Next.js", "TypeScript", "CSS Modules", "Netlify"],
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
    title: "Alder & Stone — WordPress + ACF",
    description:
      "A custom WordPress + ACF website for an architecture and construction studio, built around editable project content, a clear editorial system and a performance-conscious front end.",
    tags: ["WordPress", "ACF", "PHP", "SCSS"],
    links: [
      { label: "Live site", href: "https://alder-stone.netlify.app/" },
      {
        label: "GitHub",
        href: "https://github.com/nicolae-mihai-dev/alder-stone",
      },
      { label: "Case Study", href: "/work/alder-stone" },
    ],
    status: "Live",
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
