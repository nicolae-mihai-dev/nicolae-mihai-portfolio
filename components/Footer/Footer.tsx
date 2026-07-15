import { navLinks, siteInfo } from "@/data/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.identity}>
          <a className={styles.logo} href="#top" aria-label="Back to top">
            <span className={styles.bracket}>&lt;</span>
            NM<span className={styles.dot}>.</span>DEV
            <span className={styles.bracket}>&gt;</span>
          </a>

          <p>Nicolae Mihai - Web Developer.</p>
        </div>

        <nav className={styles.navigation} aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.legal}>
          <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
          <p>&copy; {year} Nicolae Mihai</p>
        </div>
      </div>
    </footer>
  );
}
