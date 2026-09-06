import { aboutDetails } from "@/data/site";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title" id="about">
      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <span
            className={`${styles.label} type-label type-label--accent type-label--ruled`}
          >
            About
          </span>

          <h2 className={`${styles.title} type-section-title`} id="about-title">
            Web development experience across products, platforms and CMS
            <span>.</span>
          </h2>

          <div className={styles.copy}>
            <p className="type-section-copy">
              I&apos;m Nicolae Mihai, a Web Developer with over eight years of
              experience across front-end development, WordPress, ACF, HubSpot
              CMS and modern web applications.
            </p>

            <p className="type-section-copy">
              I work from the requirement behind the page or feature: an
              interface that needs to scale, a CMS that needs safer editor
              controls, or an existing experience that needs focused fixes.
            </p>

            <p className="type-section-copy">
              That means making considered decisions about hierarchy,
              components, editor controls and integration boundaries before the
              final build is handed over.
            </p>
          </div>
        </div>

        <aside className={styles.details} aria-label="Professional details">
          <dl className={styles.detailList}>
            {aboutDetails.map((item) => (
              <div className={styles.detail} key={item.label}>
                <dt className={`${styles.detailLabel} type-tag`}>
                  {item.label}
                </dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
