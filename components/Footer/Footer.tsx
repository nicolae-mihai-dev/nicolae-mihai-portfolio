import { contactLinks, siteInfo } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  const professionalLinks = contactLinks.filter(
    (link) => link.label === "GitHub" || link.label === "LinkedIn",
  );

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.identity}>
          <a className={`${styles.logo} type-logo`} href="#top" aria-label="Back to top">
            <span className={styles.bracket}>&lt;</span>
            NM<span className={styles.dot}>.</span>DEV
            <span className={styles.bracket}>&gt;</span>
          </a>

          <p>Nicolae Mihai — Web Developer</p>
        </div>

        {/* CENTER */}
        <div className={styles.connections}>
          <span className={`${styles.columnLabel} type-label type-label--accent`}>
            Connect
          </span>

          <div className={styles.connectionLinks}>
            {professionalLinks.map((link) =>
              link.href ? (
                <a
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className={styles.pendingLink} key={link.label}>
                  {link.label}
                </span>
              ),
            )}

            <a href={`mailto:${siteInfo.email}`}>
              Email
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.meta}>
          <span className={`${styles.columnLabel} type-label type-label--accent`}>
            Availability
          </span>

          <p className={styles.availability}>
            Open to freelance &amp; contract opportunities.
          </p>

          <div className={styles.bottomMeta}>
            <span>&copy; {year} Nicolae Mihai</span>

            <a href="#top">
              Back to top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
