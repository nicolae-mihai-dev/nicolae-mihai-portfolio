import { siteInfo } from "@/data/site";

export const serviceSlugs = [
  "react-nextjs-developer",
  "figma-to-website",
  "api-ai-integrations",
  "wordpress-acf-developer",
  "hubspot-cms-developer",
  "responsive-website-fixes",
  "woocommerce-developer",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServiceCard = {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: "";
};

export type ServiceExample = {
  label: string;
  title: string;
  description: string;
  isRepresentative?: boolean;
  caseStudyHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export type ServicePageData = {
  slug: ServiceSlug;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  heroText: string;
  card: ServiceCard;
  heroOutcomes: string[];
  overviewTitle: string;
  overviewText: string;
  includes: string[];
  goodFit: string[];
  processIntro: string;
  approach: string[];
  examples: ServiceExample[];
  ctaTitle: string;
  relatedServiceSlugs: ServiceSlug[];
};

const serviceProjectPlaceholder = {
  imageSrc: "/images/service-project-placeholder.png",
  imageAlt: "",
} satisfies Required<Pick<ServiceExample, "imageSrc" | "imageAlt">>;

export const servicePages: ServicePageData[] = [
  {
    slug: "react-nextjs-developer",
    metaTitle: "React & Next.js Developer | Nicolae Mihai",
    metaDescription:
      "React, Next.js and TypeScript development for responsive websites, reusable interfaces and production-ready front-end systems.",
    eyebrow: "React / Next.js Development",
    title: "React & Next.js Development",
    heroText:
      "I build responsive React and Next.js interfaces with TypeScript - clear component systems, accessible states and maintainable front-end code for websites and web applications.",
    card: {
      number: "01",
      title: "React / Next.js Developer",
      description:
        "Reusable, responsive interfaces for websites and web applications.",
      imageSrc: "/images/services/react-nextjs-development.png",
      imageAlt: "",
    },
    heroOutcomes: [
      "Reusable component system",
      "Responsive, accessible UI",
      "Deployment-ready handoff",
    ],
    overviewTitle: "Front-end systems that stay clear as they grow.",
    overviewText:
      "I turn product requirements into a practical interface structure, so new pages, states and features do not become a collection of one-off fixes.",
    includes: [
      "React and Next.js pages",
      "Reusable UI components",
      "TypeScript project structure",
      "Forms, filters and interface states",
      "Data and API interfaces where needed",
      "Responsive and keyboard QA",
      "Performance-focused front-end polish",
      "Production build and deployment handoff",
    ],
    goodFit: [
      "New websites or product interfaces with an approved scope",
      "Landing pages that need a reusable component structure",
      "Dashboards and internal tools with clear interface states",
      "Existing React or Next.js projects that need cleanup or expansion",
    ],
    processIntro:
      "The structure follows the actual pages, interface states and data needs — not a pattern library created in isolation.",
    approach: [
      "Define the pages, content structure and interface states",
      "Build reusable components with a clear TypeScript foundation",
      "Connect approved data, forms or integrations where needed",
      "Verify responsive behavior, accessibility basics and the production build",
    ],
    examples: [
      {
        label: "Public portfolio build",
        ...serviceProjectPlaceholder,
        title: "Nicolae Mihai - Developer Portfolio",
        description:
          "The site you are viewing: a Next.js and TypeScript build with data-driven service pages, responsive layouts, SEO configuration and a protected contact flow.",
      },
    ],
    ctaTitle: "Need a React or Next.js front end built cleanly?",
    relatedServiceSlugs: [
      "figma-to-website",
      "api-ai-integrations",
      "responsive-website-fixes",
    ],
  },
  {
    slug: "figma-to-website",
    metaTitle: "Figma to Website Developer | Nicolae Mihai",
    metaDescription:
      "Figma to responsive website implementation using semantic HTML, CSS, React, Next.js or WordPress.",
    eyebrow: "Figma to Website",
    title: "Figma to Responsive Website",
    heroText:
      "I translate approved Figma designs into responsive HTML, CSS, React, Next.js or WordPress implementations - with reusable patterns and realistic behavior beyond one desktop artboard.",
    card: {
      number: "02",
      title: "Figma to Website",
      description:
        "Accurate design implementation with responsive behavior built in.",
      imageSrc: "/images/services/figma-to-website.png",
      imageAlt: "",
    },
    heroOutcomes: [
      "Clear design translation",
      "Responsive component patterns",
      "Clean front-end handoff",
    ],
    overviewTitle: "From approved design to a website that works.",
    overviewText:
      "A strong implementation starts with the design system, assets and interface states - not by copying a single static screen.",
    includes: [
      "Design-system and asset review",
      "Semantic HTML and maintainable CSS",
      "Responsive page variants",
      "Reusable page sections and components",
      "Typography, spacing and layout matching",
      "Interaction and focus states",
      "Implementation in the agreed stack",
      "Cross-device QA and handoff",
    ],
    goodFit: [
      "Designers who need dependable development support",
      "Landing pages ready for implementation",
      "Business or portfolio websites with approved designs",
      "Existing products that need new pages built from Figma",
    ],
    processIntro:
      "Implementation starts with the source design, available assets and responsive rules, so the result works beyond one desktop artboard.",
    approach: [
      "Review the design system, assets and required states",
      "Define responsive rules and reusable implementation patterns",
      "Build the interface in the agreed technology",
      "Test visual details, interactions and narrow-screen behavior",
    ],
    examples: [
      {
        label: "Portfolio implementation",
        ...serviceProjectPlaceholder,
        title: "Nicolae Mihai - Developer Portfolio",
        description:
          "A Figma-informed portfolio implementation with structured typography, responsive layout rules and deliberate interaction states.",
      },
    ],
    ctaTitle: "Have a design ready to become a working website?",
    relatedServiceSlugs: [
      "react-nextjs-developer",
      "wordpress-acf-developer",
      "hubspot-cms-developer",
    ],
  },
  {
    slug: "api-ai-integrations",
    metaTitle: "API & AI Integrations Developer | Nicolae Mihai",
    metaDescription:
      "Practical API and AI integrations for web applications, including secure server-side routes, validated inputs and clear user-facing states.",
    eyebrow: "API & AI Integrations",
    title: "API & AI Integrations for Web Products",
    heroText:
      "I connect web applications with external APIs, structured data and AI features when they solve a defined product task - with clear states, validation and maintainable server-side handling.",
    card: {
      number: "03",
      title: "API & AI Integrations",
      description:
        "Practical integrations with validated inputs and reliable user-facing states.",
      imageSrc: "/images/services/api-ai-integrations.png",
      imageAlt: "",
    },
    heroOutcomes: [
      "Clear integration scope",
      "Safe server-side handling",
      "Useful product states",
    ],
    overviewTitle: "Integrations should make a product more useful, not more fragile.",
    overviewText:
      "The focus is a reliable flow from user input to external service and back to the interface, with the validation, feedback and error handling the workflow actually needs.",
    includes: [
      "External API discovery and integration planning",
      "Secure server-side API routes",
      "Validated forms, webhooks and data flows",
      "AI feature integration for defined product tasks",
      "Loading, error and empty states",
      "Input validation and rate-aware handling",
      "Environment-variable and deployment configuration",
      "Implementation notes and handoff",
    ],
    goodFit: [
      "Products that need external data or service connections",
      "Existing workflows that need a reliable integration layer",
      "Teams evaluating an AI feature with a clear user problem",
      "Web applications that need better feedback around asynchronous actions",
    ],
    processIntro:
      "The work is shaped around the user action, service constraints and the states needed when an external request succeeds, fails or takes time.",
    approach: [
      "Define the user outcome, API constraints and data flow",
      "Build the server-side boundary and validated request handling",
      "Connect the interface with clear loading and error states",
      "Test the expected path, failure cases and deployment configuration",
    ],
    examples: [
      {
        label: "Portfolio contact flow",
        ...serviceProjectPlaceholder,
        title: "Protected Portfolio Contact Flow",
        description:
          "A contact flow with server-side validation, spam protection, Turnstile verification, clear client feedback and email delivery through a dedicated API route.",
      },
    ],
    ctaTitle: "Need an integration that feels reliable in the product?",
    relatedServiceSlugs: [
      "react-nextjs-developer",
      "hubspot-cms-developer",
      "responsive-website-fixes",
    ],
  },
  {
    slug: "wordpress-acf-developer",
    metaTitle: "WordPress & ACF Developer | Nicolae Mihai",
    metaDescription:
      "Custom WordPress and ACF development for reusable content structures, editable sections and responsive front-end implementation.",
    eyebrow: "WordPress / ACF Development",
    title: "Editable WordPress Builds with ACF",
    heroText:
      "I build custom WordPress pages and ACF content structures that give editors clear controls without losing responsive layout or front-end quality.",
    card: {
      number: "04",
      title: "WordPress & ACF Development",
      description:
        "Editable content structures with a controlled responsive front end.",
      imageSrc: "/images/services/wordpress-acf-development.png",
      imageAlt: "",
    },
    heroOutcomes: [
      "Structured content editing",
      "Reusable page sections",
      "Responsive WordPress build",
    ],
    overviewTitle: "Flexible for editors, structured for development.",
    overviewText:
      "The aim is a website editors can update confidently, with a content model that protects the visual system instead of exposing every layout decision.",
    includes: [
      "Custom templates and page sections",
      "ACF field groups and structured content",
      "Flexible, reusable content patterns",
      "Editor-friendly content controls",
      "Responsive front-end implementation",
      "Theme-level front-end fixes and cleanup",
      "Content structures for non-technical editing",
      "WooCommerce front-end support where relevant",
    ],
    goodFit: [
      "Businesses that need easier website editing",
      "Existing WordPress sites that need cleaner structure",
      "Designs that need to become editable WordPress pages",
      "Content-heavy websites that need reusable sections",
    ],
    processIntro:
      "The content model is agreed before templates are built, so editors have useful controls without being asked to make layout decisions.",
    approach: [
      "Review the content, design and editing requirements",
      "Define ACF fields and reusable section patterns",
      "Build templates and connect the responsive front end",
      "Test both the editor workflow and the public website",
    ],
    examples: [
      {
        label: "Representative scope",
        isRepresentative: true,
        ...serviceProjectPlaceholder,
        title: "Editable WordPress & ACF Build",
        description:
          "A typical WordPress and ACF scope: structured fields, editable sections and responsive front-end implementation that protects the original page system.",
      },
    ],
    ctaTitle: "Need a WordPress build that stays easy to edit?",
    relatedServiceSlugs: [
      "woocommerce-developer",
      "figma-to-website",
      "responsive-website-fixes",
    ],
  },
  {
    slug: "hubspot-cms-developer",
    metaTitle: "HubSpot CMS Developer | Nicolae Mihai",
    metaDescription:
      "HubSpot CMS landing pages and reusable modules for responsive campaign pages, structured content editing and marketing websites.",
    eyebrow: "HubSpot CMS Development",
    title: "HubSpot CMS Landing Pages & Modules",
    heroText:
      "I build responsive HubSpot CMS pages and reusable modules that give marketing teams defined editing controls without breaking the design system.",
    card: {
      number: "05",
      title: "HubSpot CMS Development",
      description:
        "Campaign pages and reusable modules with controlled editing.",
      imageSrc: "/images/services/hubspot-cms-development.png",
      imageAlt: "",
    },
    heroOutcomes: [
      "Reusable custom modules",
      "Defined editing controls",
      "Campaign-ready pages",
    ],
    overviewTitle: "Marketing pages that stay easy to update.",
    overviewText:
      "Each module is designed as a reusable building block, with the content controls an editor actually needs and the responsive behavior the design requires.",
    includes: [
      "HubSpot landing pages",
      "Reusable custom modules",
      "Campaign page and template patterns",
      "Configured editable content fields",
      "HubL templates and module markup where needed",
      "Responsive implementation and QA",
      "Reusable section patterns",
      "Content-editor handoff",
    ],
    goodFit: [
      "Marketing teams building campaign pages",
      "Businesses already using HubSpot CMS",
      "Pages that need controlled content editing",
      "Teams that need reusable marketing modules",
    ],
    processIntro:
      "Module fields reflect the changes a marketing team needs to make often, while the implementation keeps the page system intact.",
    approach: [
      "Define the campaign goal and editable content fields",
      "Build reusable module and page patterns",
      "Implement responsive behavior and content controls",
      "Test the editor workflow and prepare the handoff",
    ],
    examples: [
      {
        label: "Representative scope",
        isRepresentative: true,
        ...serviceProjectPlaceholder,
        title: "HubSpot CMS Page & Module Scope",
        description:
          "A typical HubSpot scope: campaign pages, reusable modules and editor-controlled content designed around the publishing workflow.",
      },
    ],
    ctaTitle: "Need a HubSpot landing page or reusable CMS module?",
    relatedServiceSlugs: [
      "figma-to-website",
      "react-nextjs-developer",
      "api-ai-integrations",
    ],
  },
  {
    slug: "responsive-website-fixes",
    metaTitle:
      "Responsive Website Fixes & Front-end Improvements | Nicolae Mihai",
    metaDescription:
      "Responsive website fixes, CSS cleanup, mobile layout improvements and front-end polish for existing websites.",
    eyebrow: "Responsive Website Improvements",
    title: "Responsive Website Fixes & Front-end Polish",
    heroText:
      "I audit existing pages at real viewport sizes and fix layout, readability, navigation and interaction issues without rebuilding what already works.",
    card: {
      number: "06",
      title: "Responsive Website Improvements",
      description:
        "Focused layout, usability and front-end fixes across real devices.",
      imageSrc: "/images/services/responsive-website-improvements.png",
      imageAlt: "",
    },
    heroOutcomes: [
      "Clearer layout hierarchy",
      "Usable narrow-screen states",
      "Focused implementation changes",
    ],
    overviewTitle: "Improve what is already there.",
    overviewText:
      "The right fix addresses the layout rule or component constraint behind the issue, rather than merely shrinking a desktop page.",
    includes: [
      "Viewport audit across key screen sizes",
      "Mobile, tablet and desktop fixes",
      "Flexible layout and typography improvements",
      "Navigation and form-state fixes",
      "CSS cleanup and component refinements",
      "Content overflow and alignment repairs",
      "Cross-browser front-end QA",
      "Clear implementation notes",
    ],
    goodFit: [
      "Websites that break on smaller screens",
      "Pages with inconsistent spacing or alignment",
      "Existing websites that need visual cleanup",
      "WordPress, CMS or static sites that need focused front-end fixes",
    ],
    processIntro:
      "The audit starts by reproducing the real issue, then traces it to the layout rule or component constraint behind the visible symptom.",
    approach: [
      "Reproduce the issue across representative viewport sizes",
      "Identify the structural cause rather than only the symptom",
      "Apply focused component and CSS changes",
      "Retest the key screens, interactions and content states",
    ],
    examples: [
      {
        label: "Representative scope",
        isRepresentative: true,
        ...serviceProjectPlaceholder,
        title: "Responsive Improvements & Front-end Maintenance",
        description:
          "A typical front-end improvement scope: audit and repair of layout, navigation, forms and content overflow at the viewports people actually use.",
      },
    ],
    ctaTitle: "Need your existing website to work better across devices?",
    relatedServiceSlugs: [
      "react-nextjs-developer",
      "wordpress-acf-developer",
      "woocommerce-developer",
    ],
  },
  {
    slug: "woocommerce-developer",
    metaTitle: "WooCommerce Front-end Developer | Nicolae Mihai",
    metaDescription:
      "WooCommerce storefront improvements for product pages, store layouts, responsive behavior and clearer product browsing.",
    eyebrow: "WooCommerce Development",
    title: "WooCommerce Storefront Improvements",
    heroText:
      "I improve WooCommerce storefront, product and category pages so customers can browse product information with a clearer hierarchy on every screen size.",
    card: {
      number: "07",
      title: "WooCommerce Development",
      description:
        "Clearer storefront, product-page and responsive shopping experiences.",
      imageSrc: "/images/services/woocommerce-storefront.png",
      imageAlt: "",
    },
    heroOutcomes: [
      "Clearer product hierarchy",
      "Responsive store layouts",
      "Focused purchase-path review",
    ],
    overviewTitle: "Product browsing should feel simple.",
    overviewText:
      "I focus on product presentation, navigation and responsive behavior while working within the store's existing WooCommerce theme and checkout architecture.",
    includes: [
      "Product-page presentation improvements",
      "Shop and category layout refinements",
      "Product card and product-grid styling",
      "Responsive storefront fixes",
      "Cart and checkout review appropriate to the theme",
      "ACF content integration where needed",
      "CSS cleanup and component consistency",
      "Front-end QA across the browsing path",
    ],
    goodFit: [
      "WooCommerce stores that need better product presentation",
      "Product pages with weak visual hierarchy",
      "Stores with mobile layout problems",
      "Existing WordPress stores that need focused front-end improvements",
    ],
    processIntro:
      "The review follows how customers browse products, compare options and move toward the cart instead of treating every store page as the same layout.",
    approach: [
      "Review the storefront, product pages and purchase path",
      "Identify hierarchy, layout and interaction issues",
      "Improve components within the existing store architecture",
      "Test browsing, cart and responsive states",
    ],
    examples: [
      {
        label: "Representative scope",
        isRepresentative: true,
        ...serviceProjectPlaceholder,
        title: "WooCommerce Storefront Improvement Scope",
        description:
          "A typical storefront scope: product presentation, store-listing layout and responsive refinements within an existing WooCommerce theme.",
      },
    ],
    ctaTitle: "Need a clearer WooCommerce product experience?",
    relatedServiceSlugs: [
      "wordpress-acf-developer",
      "responsive-website-fixes",
      "figma-to-website",
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function getHomepageServices() {
  return [...servicePages].sort(
    (first, second) =>
      Number(first.card.number) - Number(second.card.number),
  );
}

export function getRelatedServices(service: ServicePageData) {
  return service.relatedServiceSlugs.flatMap((slug) => {
    const relatedService = getServicePage(slug);

    return relatedService ? [relatedService] : [];
  });
}

export const globalServiceCta = {
  text: "Send a short brief with the outcome, audience and constraints. I can review the scope and suggest a practical implementation path.",
  button: "Contact Me",
  email: siteInfo.email,
};
