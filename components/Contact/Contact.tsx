import { contactLinks, siteInfo } from "@/data/site";
import styles from "./Contact.module.css";

export function Contact() {
  const emailHref = `mailto:${siteInfo.email}`;

  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.layout}`}>
        <div className={styles.heading}>
          <span className={styles.label}>Contact</span>

          <h2>
            Have a website, landing page or CMS build in mind?
          </h2>
        </div>

        <div className={styles.content}>
          <p>Tell me what you need built, improved or structured.</p>

          <a className={styles.email} href={emailHref}>
            <span>{siteInfo.email}</span>
            <span aria-hidden="true">{"\u2192"}</span>
          </a>

          <nav
            className={styles.links}
            aria-label="Contact and portfolio links"
          >
            {contactLinks.slice(0, 2).map((link) =>
              link.href ? (
                <a
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ) : (
                <span key={link.label}>{link.label}</span>
              ),
            )}

            <a href="#projects">
              <span>View Projects</span>
              <span aria-hidden="true">{"\u2192"}</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
