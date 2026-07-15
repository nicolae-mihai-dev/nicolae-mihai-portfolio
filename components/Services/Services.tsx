import Link from "next/link";
import { services } from "@/data/site";
import styles from "./Services.module.css";

const serviceStyles = [
  styles.yellow,
  styles.cyan,
  styles.pink,
  styles.purple,
  styles.yellow,
  styles.cyan,
];

export function Services() {
  return (
    <section className={styles.services} id="services">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <span className={styles.label}>Services</span>

          <h2 className={styles.headline}>
            Web development built around{" "}
            <span className={styles.accentLine}>clarity and execution.</span>
          </h2>

          <p className={styles.intro}>
            From landing pages and CMS builds to modern front-end interfaces, I
            focus on websites that are easy to use, easy to maintain and built
            with long-term structure in mind.
          </p>
        </header>

        <div className={styles.list} id="services-list">
          {services.map((service, index) => (
            <Link
              className={`${styles.item} ${serviceStyles[index]}`}
              href={service.href}
              key={service.number}
            >
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
