import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/Button/Button";
import type { CaseStudyData } from "@/data/caseStudies";
import { siteInfo } from "@/data/site";
import styles from "./CaseStudy.module.css";

type CaseStudyProps = {
  caseStudy: CaseStudyData;
};

export function CaseStudy({ caseStudy }: CaseStudyProps) {
  return (
    <main className={styles.page} id="main-content" tabIndex={-1}>
      <section className={styles.hero} id="top">
        <div className={"container " + styles.heroInner}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className="type-label type-label--accent type-label--ruled">
                {caseStudy.eyebrow}
              </p>

              <h1>{caseStudy.title}</h1>

              <p className={styles.heroSummary + " type-section-copy"}>
                {caseStudy.summary}
              </p>

              <dl className={styles.facts}>
                {caseStudy.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <figure className={styles.heroVisual}>
              <div className={styles.imageFrame}>
                <Image
                  alt={caseStudy.imageAlt}
                  className={styles.image}
                  fill
                  priority
                  sizes="(max-width: 62rem) 100vw, 48vw"
                  src={caseStudy.imageSrc}
                />
              </div>
              <figcaption>
                A responsive, component-led portfolio system.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.brief} aria-labelledby="brief-title">
        <div className={"container " + styles.briefInner}>
          <p className="type-label type-label--accent type-label--ruled">
            The brief
          </p>

          <div className={styles.briefGrid}>
            <div>
              <h2 id="brief-title">{caseStudy.briefTitle}</h2>
              <p className={styles.briefCopy + " type-section-copy"}>
                {caseStudy.brief}
              </p>
            </div>

            <p className={styles.briefPoint}>{caseStudy.briefPoint}</p>
          </div>
        </div>
      </section>

      <section className={styles.decisions} aria-labelledby="decisions-title">
        <div className={"container " + styles.decisionsInner}>
          <p className="type-label type-label--accent type-label--ruled">
            Key decisions
          </p>

          <h2 id="decisions-title">
            Build a portfolio that is useful before it is decorative.
          </h2>

          <ol className={styles.decisionList}>
            {caseStudy.decisions.map((decision, index) => (
              <li key={decision.title}>
                <span className={styles.decisionNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{decision.title}</h3>
                  <p className="type-body">{decision.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.outcomes} aria-labelledby="outcomes-title">
        <div className={"container " + styles.outcomesInner}>
          <p className="type-label type-label--accent type-label--ruled">
            What was built
          </p>

          <h2 id="outcomes-title">
            A clear system for presenting work and starting conversations.
          </h2>

          <div className={styles.outcomeGrid}>
            <article className={styles.deliverableCard}>
              <h3>Core deliverables</h3>
              <ul>
                {caseStudy.deliverables.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className={styles.qualityCard}>
              <h3>Quality built in</h3>
              <ul>
                {caseStudy.qualityChecks.map((item) => (
                  <li key={item}>
                    <Check aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="case-study-cta-title">
        <div className={"container " + styles.ctaInner}>
          <div className={styles.ctaCard}>
            <div>
              <p className="type-label type-label--inverse type-label--ruled">
                Have a similar project in mind?
              </p>
              <h2 id="case-study-cta-title">
                Let&apos;s make the next project clear, useful and production-ready.
              </h2>
            </div>

            <Button href={"mailto:" + siteInfo.email} variant="warm">
              Start a conversation
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
