import styles from "./WorkTracks.module.css";

const tracks = [
  {
    variant: "frontend" as const,
    title: <>Front-end &amp; product-style builds</>,
    technologies: ["React", "Next.js", "TypeScript", "Responsive UI"],
  },
  {
    variant: "cms" as const,
    title: <>CMS &amp; marketing websites</>,
    technologies: ["WordPress", "ACF", "HubSpot CMS", "WooCommerce"],
  },
];

const trackStyles = {
  frontend: styles.frontend,
  cms: styles.cms,
};

export function WorkTracks() {
  return (
    <section className={styles.tracks} id="two-tracks">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <span className={styles.label}>Two tracks</span>

          <h2 className={styles.title}>
            Modern front-end meets <span>practical CMS</span>
            <b>.</b>
          </h2>

          <p className={styles.description}>
            I organize my work around two directions that often connect in real
            projects: polished interfaces and structured content systems.
          </p>
        </header>

        <div className={styles.map}>
          <svg
            className={styles.lines}
            viewBox="0 0 1200 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className={`${styles.line} ${styles.lineYellow}`}
              d="M260 82 H720 C805 82 805 155 900 160"
            />
            <path
              className={`${styles.line} ${styles.lineCyan}`}
              d="M260 238 H720 C805 238 805 165 900 160"
            />
            <circle className={styles.dotYellow} cx="260" cy="82" r="7" />
            <circle className={styles.dotCyan} cx="260" cy="238" r="7" />
            <circle className={styles.dotPink} cx="900" cy="160" r="9" />
          </svg>

          {tracks.map((track) => (
            <article
              className={`${styles.track} ${trackStyles[track.variant]}`}
              key={track.variant}
            >
              <h3>{track.title}</h3>

              <ul className={styles.technologies}>
                {track.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}

          <article className={styles.result}>
            <h3>One complete website</h3>
            <span className={styles.resultLine} />
            <p>Clear UI + editable content structure.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
