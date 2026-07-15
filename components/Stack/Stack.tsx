import { stackGroups } from "@/data/site";
import styles from "./Stack.module.css";

const cardStyles = [
  styles.yellow,
  styles.cyan,
  styles.pink,
  styles.purple,
];

export function Stack() {
  return (
    <section className={styles.stack} id="stack">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <div>
            <span className={styles.label}>Stack</span>

            <h2 className={styles.heading}>
              Tools I use to build, structure and ship web projects<span>.</span>
            </h2>
          </div>

          <p className={styles.intro}>
            The stack is organized by how each tool is used in a project -
            interface, CMS, backend, data and deployment.
          </p>
        </header>

        <div className={styles.grid}>
          {stackGroups.map((group, index) => (
            <article
              className={`${styles.card} ${cardStyles[index]}`}
              key={group.title}
            >
              <span className={styles.rail} aria-hidden="true" />
              <span className={styles.triangle} aria-hidden="true" />

              <h3>{group.title}</h3>

              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
