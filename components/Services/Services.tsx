import Link from "next/link";
import { getHomepageServices } from "@/data/services";
import styles from "./Services.module.css";

const strengths = [
  "Responsive layouts checked across real viewport ranges",
  "CMS, front-end and integration work scoped to the actual need",
  "A codebase that can be reviewed, deployed and extended",
];

export function Services() {
  const services = getHomepageServices();

  return (
    <section
      className={styles.services}
      aria-labelledby="services-title"
      id="services"
    >
      <div className={"container " + styles.inner}>
        <header className={styles.copy}>
          <span
            className={
              styles.sectionLabel +
              " type-label type-label--accent type-label--ruled"
            }
          >
            Services
          </span>

          <h2
            className={styles.headline + " type-section-title"}
            id="services-title"
          >
            Web development across products, platforms and CMS.
          </h2>

          <p className={styles.intro + " type-section-copy"}>
            I help turn an approved design, an existing website or a product
            requirement into a focused build: responsive pages, CMS structures,
            front-end interfaces and integration work with a clear purpose.
          </p>

          <ul className={styles.strengths} aria-label="Working principles">
            {strengths.map((strength) => (
              <li className={styles.strength} key={strength}>
                <span className={styles.strengthMark} aria-hidden="true" />
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </header>

        <div className={styles.list} id="services-list">
          {services.map((service) => (
            <Link
              className={styles.item}
              href={"/services/" + service.slug}
              key={service.slug}
            >
              <span className={styles.number}>{service.card.number}</span>

              <div className={styles.itemCopy}>
                <h3>{service.card.title}</h3>
                <p className="type-body">{service.card.description}</p>
              </div>

              <span className={styles.arrow} aria-hidden="true">
                {"\u2192"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
