import type { IconType } from "react-icons";

import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGooglechrome,
  SiHtml5,
  SiHubspot,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVercel,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

import { TbDevices } from "react-icons/tb";

import { stackGroups } from "@/data/site";
import styles from "./Stack.module.css";

type TechVisual = {
  icon?: IconType;
  monogram?: string;
};

const techVisuals: Record<string, TechVisual> = {
  HTML: {
    icon: SiHtml5,
  },

  CSS: {
    icon: SiCss,
  },

  JavaScript: {
    icon: SiJavascript,
  },

  TypeScript: {
    icon: SiTypescript,
  },

  React: {
    icon: SiReact,
  },

  "Next.js": {
    icon: SiNextdotjs,
  },

  "Node.js": {
    icon: SiNodedotjs,
  },

  Express: {
    icon: SiExpress,
  },

  PostgreSQL: {
    icon: SiPostgresql,
  },

  SQL: {
    monogram: "SQL",
  },

  "REST APIs": {
    monogram: "API",
  },

  WordPress: {
    icon: SiWordpress,
  },

  "Advanced Custom Fields": {
    monogram: "ACF",
  },

  PHP: {
    icon: SiPhp,
  },

  "HubSpot CMS": {
    icon: SiHubspot,
  },

  WooCommerce: {
    icon: SiWoocommerce,
  },

  Git: {
    icon: SiGit,
  },

  GitHub: {
    icon: SiGithub,
  },

  Vercel: {
    icon: SiVercel,
  },

  "Browser DevTools": {
    icon: SiGooglechrome,
  },

  "Responsive Testing": {
    icon: TbDevices,
  },

  Figma: {
    icon: SiFigma,
  },
};

function Technology({ name }: { name: string }) {
  const visual = techVisuals[name];

  if (!visual) {
    return <span className={styles.techName}>{name}</span>;
  }

  const Icon = visual.icon;

  return (
    <div className={styles.technology}>
      <span className={styles.iconBox} aria-hidden="true">
        {Icon ? (
          <Icon className={styles.techIcon} />
        ) : (
          <span className={styles.monogram}>{visual.monogram}</span>
        )}
      </span>

      <span className={styles.techName}>{name}</span>
    </div>
  );
}

export function Stack() {
  return (
    <section className={styles.stack} aria-labelledby="stack-title" id="experience">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <span
            className={`${styles.label} type-label type-label--accent type-label--ruled type-label--centered`}
          >
            Technologies &amp; Platforms
          </span>

          <h2 className={`${styles.heading} type-section-title`} id="stack-title">
            A practical stack for modern web products.
          </h2>

          <p className={`${styles.intro} type-section-copy`}>
            Technologies I use across frontend development, application logic,
            data, CMS platforms and production delivery.
          </p>
        </header>

        <div className={styles.grid}>
          {stackGroups.map((group) => (
            <article className={styles.card} key={group.title}>
              <header className={styles.cardHeader}>
                <h3>{group.title}</h3>
              </header>

              <ul className={styles.techList}>
                {group.items.map((item) => (
                  <li key={item}>
                    <Technology name={item} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
