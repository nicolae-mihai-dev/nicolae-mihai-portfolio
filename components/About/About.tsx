import { aboutDetails } from "@/data/site";
import styles from "./About.module.css";

const detailStyles = [
  styles.yellow,
  styles.cyan,
  styles.pink,
  styles.purple,
];

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.layout}`}>
        <aside className={styles.details} aria-label="Personal details">
          <dl className={styles.detailList}>
            {aboutDetails.map((item, index) => (
              <div
                className={`${styles.detail} ${detailStyles[index]}`}
                key={item.label}
              >
                <dt>{item.label}</dt>
                <dd>
                  {item.label === "Email" ? (
                    <a href={`mailto:${item.value}`}>
                      <span>{item.value}</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className={styles.content}>
          <span className={styles.label}>About</span>

          <h2 className={styles.title}>
            Building a <span>serious</span> freelance portfolio from the ground
            up<b>.</b>
          </h2>

          <div className={styles.copy}>
            <p>
              I am developing a focused web development portfolio around React,
              WordPress, HubSpot and practical implementation work. The goal is
              to build projects that are honest, well-documented and useful for
              showing real-world development skills.
            </p>

            <p>
              Instead of presenting fake client work, I document self-initiated
              builds with clear context, live demos, GitHub repositories and
              notes about what was planned, built and improved.
            </p>

            <p>
              My focus is on websites that look polished, work across devices
              and are structured in a way that makes future updates easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
