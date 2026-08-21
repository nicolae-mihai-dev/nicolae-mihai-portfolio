import { Button } from "@/components/Button/Button";
import styles from "./Hero.module.css";

const credibilityItems = [
  {
    value: "8+ Years",
    label: "Web Development",
  },
  {
    value: "React / Next.js",
    label: "Modern Frontend",
  },
  {
    value: "Full-Stack Applications",
    label: "Node.js · PostgreSQL · APIs",
  },
  {
    value: "WordPress & ACF",
    label: "CMS Development",
  },
  {
    value: "HubSpot CMS",
    label: "Landing Pages & Integrations",
  },
];

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.heroContent}>
          <div className={`${styles.identity} type-hero-meta`}>
            <span>NICOLAE MIHAI</span>
            <span>WEB DEVELOPER</span>
          </div>

          <h1 className={styles.title}>
            <span>I build modern web applications,</span>
            <span>
              platforms and digital products
              <strong>.</strong>
            </span>
          </h1>

          <p className={`${styles.description} type-section-copy`}>
            Web Developer working across React, Next.js, Node.js, WordPress,
            HubSpot and modern integrations — delivering responsive websites,
            web applications and data-driven products from implementation
            through production.
          </p>

          <div className={styles.actions}>
            <Button href="#projects">View selected work</Button>

            <Button href="#contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>

        <div className={styles.credibility}>
          {credibilityItems.map((item) => (
            <div className={styles.credibilityItem} key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <a className={`${styles.scrollHint} type-hero-meta`} href="#projects">
          <span>SCROLL TO EXPLORE</span>
          <span className={styles.scrollArrow} aria-hidden="true"></span>
        </a>
      </div>
    </section>
  );
}
