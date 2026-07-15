import type { ReactNode } from "react";
import { processSteps } from "@/data/site";
import styles from "./Process.module.css";

const processIcons: ReactNode[] = [
  <svg viewBox="0 0 24 24" key="brief" aria-hidden="true">
    <circle cx="12" cy="12" r="7" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>,
  <svg viewBox="0 0 24 24" key="structure" aria-hidden="true">
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <rect x="3" y="17" width="6" height="4" rx="1" />
    <rect x="15" y="17" width="6" height="4" rx="1" />
    <path d="M12 7v5M6 12h12M6 12v5M18 12v5" />
  </svg>,
  <svg viewBox="0 0 24 24" key="build" aria-hidden="true">
    <path d="M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4M14 4l2-2 4 4-2 2" />
  </svg>,
  <svg viewBox="0 0 24 24" key="responsive" aria-hidden="true">
    <rect x="3" y="4" width="13" height="10" rx="2" />
    <path d="M7 20h5M9.5 14v6" />
    <rect x="15" y="10" width="6" height="10" rx="1.5" />
  </svg>,
  <svg viewBox="0 0 24 24" key="deploy" aria-hidden="true">
    <path d="M14 4c3 1 5 3 6 6l-6 6-4-4 4-8z" />
    <circle cx="15" cy="9" r="1.5" />
    <path d="M10 12l-4 1-3 3 5 1 1 4 3-3 1-4" />
  </svg>,
];

const stepStyles = [
  styles.yellow,
  styles.cyan,
  styles.pink,
  styles.purple,
  styles.yellowLast,
];

export function Process() {
  return (
    <section className={styles.process} id="process">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <div>
            <span className={styles.label}>Process</span>

            <h2 className={styles.title}>
              A clear path
              <br />
              from idea
              <br />
              to a <span>working</span>
              <br />
              website.
            </h2>
          </div>

          <p className={styles.intro}>
            The goal is to keep every build structured, visible and easy to
            review - from first brief to final handoff.
          </p>
        </header>

        <ol className={styles.list}>
          {processSteps.map((step, index) => (
            <li
              className={`${styles.item} ${stepStyles[index]}`}
              key={step.number}
            >
              <span className={styles.number}>{step.number}</span>

              <span className={styles.icon}>{processIcons[index]}</span>

              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>

              <span className={styles.arrow} aria-hidden="true">
                {"\u2192"}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
