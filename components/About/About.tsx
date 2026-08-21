import { aboutDetails } from "@/data/site";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.layout}`}>
        <aside className={styles.details} aria-label="Professional details">
          <dl className={styles.detailList}>
            {aboutDetails.map((item) => (
              <div className={styles.detail} key={item.label}>
                <dt className="type-label type-label--accent">{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className={styles.content}>
          <span className={`${styles.label} type-label type-label--accent`}>
            About
          </span>

          <h2 className={`${styles.title} type-section-title`}>
            Web development experience across products, platforms and CMS
            <span>.</span>
          </h2>

          <div className={styles.copy}>
            <p className="type-section-copy">
              I&apos;m Nicolae Mihai, a Web Developer with over eight years of
              experience working across frontend development, WordPress, ACF,
              HubSpot CMS and modern web applications.
            </p>

            <p className="type-section-copy">
              My work ranges from responsive websites and CMS-driven platforms
              to React and Next.js applications, API-connected products and
              data-intensive interfaces.
            </p>

            <p className="type-section-copy">
              I focus on translating business and product requirements into
              clean, functional software — from interface architecture and
              application logic to integrations, debugging, performance and
              production delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
