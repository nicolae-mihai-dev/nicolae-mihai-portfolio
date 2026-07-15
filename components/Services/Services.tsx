import Link from "next/link";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Landing Pages & Business Websites",
    description:
      "Marketing pages, personal websites and service pages with strong layout, responsive details and clear content structure.",
    href: "/services/figma-to-website",
  },
  {
    number: "02",
    title: "React / Next.js Front-end Builds",
    description:
      "Component-based interfaces using React, Next.js and TypeScript for landing pages, portfolio builds, dashboards and API-connected sections.",
    href: "/services/react-nextjs-developer",
  },
  {
    number: "03",
    title: "WordPress & ACF Development",
    description:
      "Editable WordPress sections, custom fields and flexible content structures for websites that need easier content management.",
    href: "/services/wordpress-acf-developer",
  },
  {
    number: "04",
    title: "HubSpot CMS Landing Pages",
    description:
      "Reusable HubSpot CMS modules and landing page sections built for campaign pages and controlled content updates.",
    href: "/services/hubspot-cms-developer",
  },
  {
    number: "05",
    title: "WooCommerce Product Experiences",
    description:
      "Product pages, store layouts and front-end improvements for WooCommerce websites that need cleaner product presentation.",
    href: "/services/woocommerce-developer",
  },
];

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.sectionLabel}>Services</span>

          <h2 className={styles.headline}>
            Web development built around{" "}
            <span className={styles.accentLine}>clarity and execution.</span>
          </h2>

          <p className={styles.intro}>
            From landing pages and CMS builds to modern front-end interfaces, I
            focus on websites that are easy to use, easy to maintain and built
            with long-term structure in mind.
          </p>

        </div>

        <div className={styles.list} id="services-list">
          {services.map((service) => (
            <Link className={styles.item} href={service.href} key={service.number}>
              <span className={styles.number}>{service.number}</span>

              <div className={styles.itemCopy}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
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
