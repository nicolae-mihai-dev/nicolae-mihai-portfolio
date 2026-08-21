import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Modern Web Applications",
    description:
      "Full-stack web applications built with Next.js, TypeScript, Node.js, APIs and data — from interface architecture to application logic and production delivery.",
    href: "/services/react-nextjs-developer",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Responsive frontend implementation using TypeScript, JavaScript, React and modern browser technologies.",
    href: "/services/figma-to-website",
  },
  {
    number: "03",
    title: "API & AI Integrations",
    description:
      "Connecting applications with external APIs, AI services, data sources and product functionality across modern web workflows.",
    href: "/#contact",
  },
  {
    number: "04",
    title: "WordPress & ACF Development",
    description:
      "Custom WordPress implementations using ACF, PHP and JavaScript with reusable components, structured content and maintainable frontend architecture.",
    href: "/services/wordpress-acf-developer",
  },
  {
    number: "05",
    title: "HubSpot CMS",
    description:
      "Responsive landing pages, reusable modules and CMS implementations for marketing and business teams.",
    href: "/services/hubspot-cms-developer",
  },
];

const strengths = [
  "Clean, maintainable implementation",
  "Responsive across real devices",
  "Performance and production quality",
];

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={`${styles.sectionLabel} type-label type-label--accent`}>
            Services
          </span>

          <h2 className={`${styles.headline} type-section-title`}>
            Web development across products, platforms and CMS.
          </h2>

          <p className={`${styles.intro} type-section-copy`}>
            From modern applications and frontend systems to CMS development and
            integrations, I focus on software that is functional, maintainable
            and built for production.
          </p>

          <div className={styles.strengths}>
            {strengths.map((strength) => (
              <div className={styles.strength} key={strength}>
                <span className={styles.strengthMark} aria-hidden="true" />
                <span>{strength}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.list} id="services-list">
          {services.map((service) => (
            <Link
              className={styles.item}
              href={service.href}
              key={service.number}
            >
              <span className={styles.number}>{service.number}</span>

              <div className={styles.itemCopy}>
                <h3>{service.title}</h3>
                <p className="type-body">{service.description}</p>
              </div>

              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
