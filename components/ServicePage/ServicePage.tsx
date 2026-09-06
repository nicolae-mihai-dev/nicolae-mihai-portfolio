import Link from "next/link";
import { Button } from "@/components/Button/Button";
import {
  getRelatedServices,
  globalServiceCta,
  type ServicePageData,
} from "@/data/services";
import Image from "next/image";
import styles from "./ServicePage.module.css";
import {
  ArrowRight,
  Check,
  CodeXml,
  Crosshair,
  Mail,
  MonitorSmartphone,
  UserRound,
} from "lucide-react";

const heroOutcomeIcons = [Crosshair, MonitorSmartphone, CodeXml];

type ServicePageProps = {
  service: ServicePageData;
};

export function ServicePage({ service }: ServicePageProps) {
  const relatedServices = getRelatedServices(service);
  const isRepresentativeScope =
    service.examples.length > 0 &&
    service.examples.every((example) => example.isRepresentative);

  return (
    <main className={styles.page} id="main-content" tabIndex={-1}>
      <section className={styles.hero} id="top">
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p
                className={`${styles.eyebrow} type-label type-label--accent type-label--ruled`}
              >
                {service.eyebrow}
              </p>

              <h1>{service.title}</h1>

              <p className={`${styles.heroDescription} type-section-copy`}>
                {service.heroText}
              </p>

              <div className={styles.heroActions}>
                <Button href="/#projects">View current work</Button>

                <Button
                  href={`mailto:${globalServiceCta.email}`}
                  variant="secondary"
                >
                  Contact me
                </Button>
              </div>
            </div>

            <aside className={styles.heroVisual} aria-labelledby="service-outcomes-title">
              <div className={styles.heroVisualHeader}>
                <span className={styles.heroNumber} aria-hidden="true">
                  {service.card.number}
                </span>

                <p
                  className={`${styles.heroVisualLabel} type-kicker`}
                  id="service-outcomes-title"
                >
                  At a glance
                </p>
              </div>

              <ul className={styles.heroOutcomes} aria-label="What you get">
                {service.heroOutcomes.map((outcome, index) => {
                  const Icon = heroOutcomeIcons[index] ?? Check;

                  return (
                    <li key={outcome}>
                      <Icon
                        className={styles.heroOutcomeIcon}
                        aria-hidden="true"
                        strokeWidth={1.8}
                      />

                      <span className={styles.heroOutcomeText}>{outcome}</span>
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.overview} aria-labelledby="overview-title">
        <div className={`container ${styles.overviewInner}`}>
          <p
            className={`${styles.sectionLabel} type-label type-label--accent`}
          >
            Overview
          </p>

          <div className={styles.overviewContent}>
            <h2 id="overview-title">{service.overviewTitle}</h2>

            <p className={`${styles.overviewText} type-section-copy`}>
              {service.overviewText}
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.details}
        aria-label="What I deliver and good fit for"
      >
        <div className={`container ${styles.detailsGrid}`}>
          <section
            className={styles.detailColumn}
            aria-labelledby="deliver-title"
          >
            <p className={`${styles.detailLabel} ${styles.detailLabelOrange}`}>
              What I deliver
            </p>

            <h2 id="deliver-title" className={styles.detailTitle}>
              What the build needs to work well.
            </h2>

            <ul className={styles.detailItems}>
              {service.includes.map((item) => (
                <li key={item}>
                  <Check
                    className={`${styles.detailIcon} ${styles.detailIconOrange}`}
                    aria-hidden="true"
                    strokeWidth={2}
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            className={`${styles.detailColumn} ${styles.detailColumnFit}`}
            aria-labelledby="fit-title"
          >
            <p className={`${styles.detailLabel} ${styles.detailLabelBlue}`}>
              Good fit for
            </p>

            <h2 id="fit-title" className={styles.detailTitle}>
              Where this work creates the most value.
            </h2>

            <ul className={styles.detailItems}>
              {service.goodFit.map((item) => (
                <li key={item}>
                  <UserRound
                    className={`${styles.detailIcon} ${styles.detailIconBlue}`}
                    aria-hidden="true"
                    strokeWidth={1.8}
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>

      <section className={styles.approach} aria-labelledby="approach-title">
        <div className={`container ${styles.approachInner}`}>
          <div className={styles.approachHeading}>
            <p
              className={`${styles.sectionLabel} type-label type-label--accent`}
            >
              Process
            </p>

            <h2 id="approach-title">How I work</h2>

            <p className="type-section-copy">
              {service.processIntro}
            </p>
          </div>

          <ol className={styles.steps}>
            {service.approach.map((step, index) => (
              <li key={step}>
                <span
                  className={styles.stepNumber}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.examples} aria-labelledby="examples-title">
        <div className={`container ${styles.examplesInner}`}>
          <div className={styles.examplesHeading}>
            <p
              className={`${styles.experienceEyebrow} type-label type-label--ruled type-label--centered`}
            >
              {isRepresentativeScope ? "Typical implementation" : "Experience"}
            </p>

            <h2 id="examples-title">
              {isRepresentativeScope
                ? "Representative scope"
                : "Relevant work & experience"}
            </h2>
          </div>

          <div className={styles.exampleList}>
            {service.examples.map((example) => {
              const cardContent = (
                <>
                {example.imageSrc ? (
                  <div className={styles.exampleMedia}>
                    <div className={styles.browserBar} aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>

                    <div className={styles.exampleImageWrap}>
                      <Image
                        src={example.imageSrc}
                        alt={example.imageAlt ?? example.title}
                        fill
                        sizes="(max-width: 62rem) 100vw, 38vw"
                        className={styles.exampleImage}
                      />
                    </div>
                  </div>
                ) : null}

                <div className={styles.exampleContent}>
                  <p className={`${styles.exampleLabel} type-kicker`}>
                    <span className={styles.exampleLabelDot} aria-hidden="true" />
                    {example.label}
                  </p>

                  <h3>{example.title}</h3>

                  <p className={`${styles.exampleDescription} type-body`}>
                    {example.description}
                  </p>

                  {example.caseStudyHref ? (
                    <span className={styles.exampleAction}>
                      View case study
                      <ArrowRight aria-hidden="true" />
                    </span>
                  ) : null}
                </div>
                </>
              );

              return (
                <article className={styles.example} key={example.title}>
                  {example.caseStudyHref ? (
                    <Link
                      className={styles.exampleLink}
                      href={example.caseStudyHref}
                      aria-label={`View case study: ${example.title}`}
                    >
                      {cardContent}
                    </Link>
                  ) : (
                    cardContent
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="cta-title">
        <div className={`container ${styles.ctaInner}`}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <p
                className={`${styles.ctaLabel} type-label type-label--accent`}
              >
                Start a project
              </p>

              <h2 id="cta-title">{service.ctaTitle}</h2>

              <p className="type-section-copy">{globalServiceCta.text}</p>

              <div className={styles.ctaActions}>
                <a
                  className={`${styles.email} type-ui-strong`}
                  href={`mailto:${globalServiceCta.email}`}
                >
                  <Mail aria-hidden="true" />
                  {globalServiceCta.email}
                </a>

                <Button
                  className={styles.ctaButton}
                  href={`mailto:${globalServiceCta.email}`}
                  size="small"
                  variant="warm"
                >
                  {globalServiceCta.button}
                  <ArrowRight aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.related} aria-labelledby="related-title">
        <div className={`container ${styles.relatedInner}`}>
          <h2
            className={`${styles.relatedTitle} type-section-title`}
            id="related-title"
          >
            Related services
          </h2>

          <nav className={styles.relatedNav} aria-labelledby="related-title">
            <ul className={styles.relatedLinks}>
              {relatedServices.map((relatedService) => (
                <li className={styles.relatedItem} key={relatedService.slug}>
                  <Link
                    className={styles.relatedLink}
                    href={"/services/" + relatedService.slug}
                  >
                    <div className={styles.relatedMedia}>
                      <Image
                        alt={relatedService.card.imageAlt}
                        className={styles.relatedImage}
                        fill
                        sizes="(max-width: 62rem) 100vw, (max-width: 76rem) 50vw, 33vw"
                        src={relatedService.card.imageSrc}
                      />
                    </div>

                    <div className={styles.relatedContent}>
                      <p className={styles.relatedEyebrow}>
                        {relatedService.eyebrow}
                      </p>

                      <h3 className={styles.relatedCardTitle}>
                        {relatedService.card.title}
                      </h3>

                      <p className={styles.relatedDescription}>
                        {relatedService.card.description}
                      </p>

                      <span className={styles.relatedAction}>
                        Explore service
                        <ArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}
