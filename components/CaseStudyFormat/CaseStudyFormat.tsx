import { caseStudySteps } from "@/data/site";
import styles from "./CaseStudyFormat.module.css";

const stepStyles = [styles.problem, styles.approach, styles.build, styles.handoff];

export function CaseStudyFormat() {
  return (
    <section className={styles.caseStudies} id="case-studies">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <span className={styles.label}>Case studies</span>

          <h2 className={styles.title}>
            Not just screenshots. Each project explains <span>the build.</span>
          </h2>

          <p className={styles.description}>
            Each project is documented as a practical implementation study:
            what needed to be built, how the structure was planned, what
            technologies were used and what decisions shaped the final result.
          </p>
        </header>

        <ol className={styles.timeline}>
          {caseStudySteps.map((step, index) => (
            <li
              className={`${styles.step} ${stepStyles[index]}`}
              key={step.title}
            >
              <span className={styles.dot} aria-hidden="true" />

              <article className={styles.panel}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className={styles.divider} />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
