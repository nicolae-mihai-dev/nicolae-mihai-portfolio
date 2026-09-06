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
    value: "Product workflows",
    label: "Forms · APIs · data",
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
    <section className={styles.hero} aria-labelledby="hero-title" id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.heroContent}>
          <div className={`${styles.identity} type-hero-meta`}>
            <span>NICOLAE MIHAI</span>
            <span>WEB DEVELOPER</span>
          </div>

          <h1 className={styles.title} id="hero-title">
            <span>Web development for responsive websites,</span>
            <span>
              product interfaces and CMS platforms
              <strong>.</strong>
            </span>
          </h1>

          <p className={`${styles.description} type-section-copy`}>
            I turn approved design, product and content requirements into
            structured websites and web interfaces — from React and Next.js
            builds to WordPress, HubSpot and carefully scoped integrations.
          </p>

          <div className={styles.actions}>
            <Button href="#projects">View current work</Button>

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
