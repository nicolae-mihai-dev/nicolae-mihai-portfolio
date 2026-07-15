import { siteInfo } from "@/data/site";

export type ServicePageTheme = "sky" | "peach" | "ivory" | "dark";
export type ServicePageVariant = "split" | "editorial" | "timeline" | "dark-panel";

export type ServicePageLink = {
  label: string;
  href: `/services/${string}`;
};

export type ServiceExample = {
  title: string;
  description: string;
  status: "In progress" | "Planned";
};

export type ServicePageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  theme: ServicePageTheme;
  variant: ServicePageVariant;
  eyebrow: string;
  title: string;
  heroText: string;
  angleTitle: string;
  angleText: string;
  includes: string[];
  goodFit: string[];
  approach: string[];
  examples: ServiceExample[];
  ctaTitle: string;
  related: ServicePageLink[];
};

export const servicePages: ServicePageData[] = [
  {
    slug: "react-nextjs-developer",
    metaTitle: "React / Next.js Developer | Nicolae Mihai",
    metaDescription:
      "React, Next.js and TypeScript front-end implementation for landing pages, reusable sections, API-connected UI and dashboard-style interfaces.",
    theme: "sky",
    variant: "split",
    eyebrow: "React / Next.js Developer",
    title: "React / Next.js Front-end Builds",
    heroText:
      "I build polished front-end interfaces with React, Next.js and TypeScript - from landing pages and reusable sections to API-connected UI and dashboard-style experiences.",
    angleTitle: "A credible start for polished pages, with room to grow.",
    angleText:
      "This direction starts with strong landing pages and front-end implementation, then extends into structured interface work when a project needs components, states, data and deployment-ready organization.",
    includes: [
      "React and Next.js landing pages",
      "Reusable component sections",
      "TypeScript project structure",
      "Responsive implementation",
      "API-connected content sections",
      "Dashboard-style interfaces",
      "Forms, filters and UI states",
      "Vercel deployment",
    ],
    goodFit: [
      "Service websites that need a modern front-end",
      "Landing pages that need strong layout and performance",
      "Dashboards or admin-style interfaces",
      "Portfolio/product-style builds",
      "Projects that need clean component structure",
    ],
    approach: [
      "Plan the page structure and content flow",
      "Build reusable components",
      "Implement responsive states",
      "Connect data or APIs where needed",
      "Prepare live preview and handoff notes",
    ],
    examples: [
      {
        title: "React / Next.js Portfolio Website",
        description:
          "An editorial portfolio build focused on layout system, responsive states and a custom visual language.",
        status: "In progress",
      },
      {
        title: "React Business Dashboard",
        description:
          "A planned interface study for filters, cards, charts, forms and API-driven content.",
        status: "Planned",
      },
    ],
    ctaTitle: "Need a React or Next.js page built with clean structure?",
    related: [
      { label: "Figma to Website", href: "/services/figma-to-website" },
      { label: "Responsive Improvements", href: "/services/responsive-website-fixes" },
    ],
  },
  {
    slug: "wordpress-acf-developer",
    metaTitle: "WordPress & ACF Developer | Nicolae Mihai",
    metaDescription:
      "WordPress and ACF development for editable sections, flexible content layouts, custom theme structure and responsive website improvements.",
    theme: "peach",
    variant: "editorial",
    eyebrow: "WordPress & ACF Developer",
    title: "WordPress & ACF Development",
    heroText:
      "I build WordPress structures with editable sections, custom fields and admin-friendly content controls - so pages can be updated without touching code.",
    angleTitle: "From front-end refinements to structured editable builds.",
    angleText:
      "WordPress work can begin with layout updates and responsive improvements, or move into ACF-driven sections, flexible content and custom theme structure for content-driven pages.",
    includes: [
      "WordPress page sections",
      "Editable ACF fields",
      "Flexible content layouts",
      "Custom theme structure",
      "Responsive WordPress improvements",
      "Content blocks for non-technical editing",
      "CSS and layout refinements",
      "WooCommerce front-end improvements when needed",
    ],
    goodFit: [
      "Websites that need easier editing",
      "WordPress pages that need better layout",
      "Existing websites that need front-end cleanup",
      "Businesses that need structured content sections",
      "Projects where design must become an editable WordPress build",
    ],
    approach: [
      "Review the current website or design",
      "Define editable fields and section logic",
      "Build the front-end structure",
      "Connect ACF fields cleanly",
      "Test responsive layouts and admin editing",
    ],
    examples: [
      {
        title: "WordPress + ACF Custom Theme",
        description:
          "A planned WordPress implementation around flexible sections, editable fields and content handoff notes.",
        status: "Planned",
      },
      {
        title: "WooCommerce Product Website",
        description:
          "A related WordPress direction focused on product presentation and front-end polish.",
        status: "Planned",
      },
    ],
    ctaTitle: "Need WordPress sections that are easier to manage?",
    related: [
      { label: "WooCommerce Developer", href: "/services/woocommerce-developer" },
      { label: "Figma to Website", href: "/services/figma-to-website" },
    ],
  },
  {
    slug: "hubspot-cms-developer",
    metaTitle: "HubSpot CMS Developer | Nicolae Mihai",
    metaDescription:
      "HubSpot CMS landing pages and reusable modules for campaign pages, editable content blocks and marketing website structure.",
    theme: "ivory",
    variant: "dark-panel",
    eyebrow: "HubSpot CMS Developer",
    title: "HubSpot CMS Landing Pages",
    heroText:
      "I build HubSpot CMS landing pages and reusable modules for marketing websites that need campaign-ready sections and controlled content editing.",
    angleTitle: "Marketing pages with controlled editing.",
    angleText:
      "HubSpot work is about giving campaign pages a strong visual structure while keeping content controls clear enough for marketing updates, repeated sections and future page variations.",
    includes: [
      "HubSpot landing page sections",
      "Reusable CMS modules",
      "Campaign page layouts",
      "Editable content blocks",
      "Responsive HubSpot implementation",
      "HubL-ready structure",
      "Module documentation",
      "Handoff notes for content updates",
    ],
    goodFit: [
      "Marketing teams that need campaign pages",
      "Businesses using HubSpot CMS",
      "Landing pages that need editable sections",
      "Websites that need reusable content modules",
      "Teams that want content control without breaking layout",
    ],
    approach: [
      "Define campaign sections and content needs",
      "Build reusable module structure",
      "Implement responsive layout",
      "Keep editing controls clear",
      "Prepare handoff notes",
    ],
    examples: [
      {
        title: "HubSpot CMS Landing Page",
        description:
          "A planned landing page system with reusable modules, controlled editing and campaign-focused sections.",
        status: "Planned",
      },
      {
        title: "Figma to Website Implementation",
        description:
          "A related implementation path when a marketing design needs to become a working page.",
        status: "Planned",
      },
    ],
    ctaTitle: "Need a HubSpot landing page or reusable CMS module?",
    related: [
      { label: "Figma to Website", href: "/services/figma-to-website" },
      { label: "React / Next.js Developer", href: "/services/react-nextjs-developer" },
    ],
  },
  {
    slug: "responsive-website-fixes",
    metaTitle: "Responsive Website Improvements | Nicolae Mihai",
    metaDescription:
      "Responsive website improvements, CSS cleanup, mobile layout fixes and front-end refinements for existing websites.",
    theme: "dark",
    variant: "timeline",
    eyebrow: "Responsive Website Fixes",
    title: "Responsive Website Improvements",
    heroText:
      "I improve existing websites by fixing layout issues, mobile problems, spacing inconsistencies and front-end details that affect presentation and usability.",
    angleTitle: "Better presentation without unnecessary rebuilds.",
    angleText:
      "This work focuses on the front-end details that make an existing page feel more stable: layout, spacing, typography, navigation, forms and responsive behavior across devices.",
    includes: [
      "Mobile layout improvements",
      "Tablet and desktop refinements",
      "CSS cleanup",
      "Broken section fixes",
      "Spacing and typography adjustments",
      "Button and form styling",
      "Navigation fixes",
      "Front-end polish for existing websites",
    ],
    goodFit: [
      "Pages that look broken on mobile",
      "Websites with inconsistent spacing",
      "Sections that need visual cleanup",
      "WordPress or static pages that need CSS improvements",
      "Existing landing pages that need better presentation",
    ],
    approach: [
      "Review the page across screen sizes",
      "Identify layout and CSS issues",
      "Fix the structure without unnecessary rebuilds",
      "Test responsive behavior",
      "Document what changed",
    ],
    examples: [
      {
        title: "Responsive Improvements & Website Updates",
        description:
          "A service direction focused on layout cleanup, mobile behavior and front-end refinements for existing pages.",
        status: "In progress",
      },
      {
        title: "WordPress + ACF Custom Theme",
        description:
          "A planned WordPress build where responsive polish and editable structure meet.",
        status: "Planned",
      },
    ],
    ctaTitle: "Need your website to look better across devices?",
    related: [
      { label: "WordPress & ACF Developer", href: "/services/wordpress-acf-developer" },
      { label: "React / Next.js Developer", href: "/services/react-nextjs-developer" },
    ],
  },
  {
    slug: "figma-to-website",
    metaTitle: "Figma to Website Implementation | Nicolae Mihai",
    metaDescription:
      "Figma to website implementation with responsive HTML, CSS, JavaScript, React, Next.js or WordPress structure.",
    theme: "sky",
    variant: "editorial",
    eyebrow: "Figma to Website",
    title: "Figma to Website Implementation",
    heroText:
      "I turn Figma designs into responsive web pages with clean HTML, CSS, JavaScript, React or WordPress structure depending on the project needs.",
    angleTitle: "Design files turned into working pages.",
    angleText:
      "This service is for designs that already have a visual direction and need careful implementation: section structure, spacing, typography, responsive behavior and a maintainable front-end handoff.",
    includes: [
      "Figma to HTML/CSS",
      "Figma to React / Next.js",
      "Figma to WordPress sections",
      "Responsive implementation",
      "Layout matching",
      "Reusable page sections",
      "Clean CSS structure",
      "Front-end handoff notes",
    ],
    goodFit: [
      "Designers who need development support",
      "Landing page designs ready for implementation",
      "Portfolio or business page builds",
      "WordPress sections based on design files",
      "React pages that need polished layout",
    ],
    approach: [
      "Review the design file and page states",
      "Define sections and responsive behavior",
      "Build the layout with clean structure",
      "Match spacing, typography and visual details",
      "Prepare preview and handoff notes",
    ],
    examples: [
      {
        title: "React / Next.js Portfolio Website",
        description:
          "An implementation-led portfolio build with editorial layout, custom styling and responsive detail.",
        status: "In progress",
      },
      {
        title: "WordPress + ACF Custom Theme",
        description:
          "A planned path for turning a design into editable WordPress sections.",
        status: "Planned",
      },
    ],
    ctaTitle: "Have a design ready to become a working website?",
    related: [
      { label: "React / Next.js Developer", href: "/services/react-nextjs-developer" },
      { label: "WordPress & ACF Developer", href: "/services/wordpress-acf-developer" },
    ],
  },
  {
    slug: "woocommerce-developer",
    metaTitle: "WooCommerce Developer | Nicolae Mihai",
    metaDescription:
      "WooCommerce product page styling, store layout improvements, responsive fixes and front-end polish for product browsing.",
    theme: "peach",
    variant: "timeline",
    eyebrow: "WooCommerce Developer",
    title: "WooCommerce Product Experiences",
    heroText:
      "I improve WooCommerce product pages, store layouts and front-end flows so product browsing feels clearer, cleaner and easier to use.",
    angleTitle: "Product presentation with practical WordPress structure.",
    angleText:
      "WooCommerce work here focuses on product pages, store layouts, cart and checkout presentation, responsive states and WordPress content structure around product browsing.",
    includes: [
      "WooCommerce product page styling",
      "Store layout improvements",
      "Product card refinements",
      "Cart and checkout front-end polish",
      "Responsive WooCommerce fixes",
      "CSS cleanup",
      "Product-focused landing sections",
      "WordPress/WooCommerce content structure",
    ],
    goodFit: [
      "WooCommerce stores that need better presentation",
      "Product pages that need stronger layout",
      "Stores with mobile layout issues",
      "Brands that need cleaner product browsing",
      "WordPress websites expanding into product sales",
    ],
    approach: [
      "Review product and store flow",
      "Identify layout and usability problems",
      "Improve product presentation",
      "Refine cart/checkout front-end details",
      "Test responsive states",
    ],
    examples: [
      {
        title: "WooCommerce Product Website",
        description:
          "A planned WooCommerce-focused build around product presentation, browsing and front-end clarity.",
        status: "Planned",
      },
      {
        title: "WordPress + ACF Custom Theme",
        description:
          "A related WordPress direction for editable content structure and theme-level implementation.",
        status: "Planned",
      },
    ],
    ctaTitle: "Need a cleaner WooCommerce product experience?",
    related: [
      { label: "WordPress & ACF Developer", href: "/services/wordpress-acf-developer" },
      { label: "Responsive Improvements", href: "/services/responsive-website-fixes" },
    ],
  },
];

export const serviceSlugs = servicePages.map((service) => service.slug);

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export const globalServiceCta = {
  title: "Have a project that fits this direction?",
  text: "Send me a short brief with what you need built, improved or structured. I can review the scope and suggest the right implementation path.",
  button: "Contact Me",
  email: siteInfo.email,
};
