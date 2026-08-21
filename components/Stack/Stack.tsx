import type { CSSProperties } from "react";
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
  color: string;
};

const techVisuals: Record<string, TechVisual> = {
  HTML: {
    icon: SiHtml5,
    color: "#e34f26",
  },

  CSS: {
    icon: SiCss,
    color: "#1572b6",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "#f7df1e",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "#3178c6",
  },

  React: {
    icon: SiReact,
    color: "#61dafb",
  },

  "Next.js": {
    icon: SiNextdotjs,
    color: "#111111",
  },

  "Node.js": {
    icon: SiNodedotjs,
    color: "#339933",
  },

  Express: {
    icon: SiExpress,
    color: "#111111",
  },

  PostgreSQL: {
    icon: SiPostgresql,
    color: "#4169e1",
  },

  SQL: {
    monogram: "SQL",
    color: "#336791",
  },

  "REST APIs": {
    monogram: "API",
    color: "#238c8c",
  },

  WordPress: {
    icon: SiWordpress,
    color: "#21759b",
  },

  "Advanced Custom Fields": {
    monogram: "ACF",
    color: "#00bfa5",
  },

  PHP: {
    icon: SiPhp,
    color: "#777bb4",
  },

  "HubSpot CMS": {
    icon: SiHubspot,
    color: "#ff7a59",
  },

  WooCommerce: {
    icon: SiWoocommerce,
    color: "#96588a",
  },

  Git: {
    icon: SiGit,
    color: "#f05032",
  },

  GitHub: {
    icon: SiGithub,
    color: "#181717",
  },

  Vercel: {
    icon: SiVercel,
    color: "#111111",
  },

  "Browser DevTools": {
    icon: SiGooglechrome,
    color: "#4285f4",
  },

  "Responsive Testing": {
    icon: TbDevices,
    color: "#5e737c",
  },

  Figma: {
    icon: SiFigma,
    color: "#f24e1e",
  },
};

function Technology({ name }: { name: string }) {
  const visual = techVisuals[name];

  if (!visual) {
    return <span className={styles.techName}>{name}</span>;
  }

  const Icon = visual.icon;

  const style = {
    "--tech-color": visual.color,
  } as CSSProperties;

  return (
    <div className={styles.technology} style={style}>
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
    <section className={styles.stack} id="experience">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <span className={`${styles.label} type-label type-label--accent`}>
            Technologies &amp; Platforms
          </span>

          <h2 className={`${styles.heading} type-section-title`}>
            A practical stack for modern web products.
          </h2>

          <p className={`${styles.intro} type-section-copy`}>
            Technologies I use across frontend development, application logic,
            data, CMS platforms and production delivery.
          </p>
        </header>

        <div className={styles.grid}>
          {stackGroups.map((group, index) => (
            <article className={styles.card} key={group.title}>
              <header className={styles.cardHeader}>
                <span className={styles.cardNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

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
