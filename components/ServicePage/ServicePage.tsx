import Link from "next/link";
import { Button } from "@/components/Button/Button";
import type { ServicePageData } from "@/data/services";
import { globalServiceCta } from "@/data/services";
import styles from "./ServicePage.module.css";

const themeClass = {
  sky: styles.themeSky,
  peach: styles.themePeach,
  ivory: styles.themeIvory,
  dark: styles.themeDark,
} satisfies Record<ServicePageData["theme"], string>;

const variantClass = {
  split: styles.variantSplit,
  editorial: styles.variantEditorial,
  timeline: styles.variantTimeline,
  "dark-panel": styles.variantDarkPanel,
} satisfies Record<ServicePageData["variant"], string>;

type ServicePageProps = {
  service: ServicePageData;
};

export function ServicePage({ service }: ServicePageProps) {
  return (
    <main
      className={[
        styles.page,
        themeClass[service.theme],
        variantClass[service.variant],
      ].join(" ")}
    >
      <section className={styles.hero} id="top">
        <div className={`container ${styles.heroInner}`}>
          <nav className={styles.breadcrumbs} aria-label="Service navigation">
            <Link href="/">Back to homepage</Link>
            <Link href="/#projects">View projects</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{service.eyebrow}</p>
              <h1>{service.title}</h1>
            </div>
            <div className={styles.heroText}>
              <p>{service.heroText}</p>
              <div className={styles.heroActions}>
                <Button href={`mailto:${globalServiceCta.email}`}>
                  Contact Me
                </Button>
                <Link className={styles.textLink} href="/#services">
                  See all services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.angle}>
        <div className={`container ${styles.angleInner}`}>
          <span className={styles.kicker}>Direction</span>
          <h2>{service.angleTitle}</h2>
          <p>{service.angleText}</p>
        </div>
      </section>

      <section className={styles.details}>
        <div className={`container ${styles.detailsGrid}`}>
          <section className={styles.includes}>
            <h2>What this includes</h2>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.fit}>
            <h2>Good fit for</h2>
            <ul>
              {service.goodFit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className={styles.approach}>
        <div className={`container ${styles.approachInner}`}>
          <div className={styles.approachHeading}>
            <h2>How I approach it</h2>
            <p>
              A focused implementation path, from reviewing the direction to
              preparing a working preview and handoff notes.
            </p>
          </div>

          <ol className={styles.steps}>
            {service.approach.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.examples}>
        <div className={`container ${styles.examplesInner}`}>
          <h2>Related project examples</h2>
          <div className={styles.exampleList}>
            {service.examples.map((example) => (
              <article className={styles.example} key={example.title}>
                <span>{example.status}</span>
                <h3>{example.title}</h3>
                <p>{example.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <span>{service.ctaTitle}</span>
            <h2>{globalServiceCta.title}</h2>
          </div>
          <div className={styles.ctaPanel}>
            <p>{globalServiceCta.text}</p>
            <a className={styles.email} href={`mailto:${globalServiceCta.email}`}>
              {globalServiceCta.email}
            </a>
            <div className={styles.ctaActions}>
              <Button href={`mailto:${globalServiceCta.email}`}>
                {globalServiceCta.button}
              </Button>
              <Link className={styles.textLink} href="/#projects">
                View projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.related}>
        <div className={`container ${styles.relatedInner}`}>
          <h2>Related service pages</h2>
          <div className={styles.relatedLinks}>
            {service.related.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
            <Link href="/#services">All services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
