import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { siteInfo } from "@/data/site";
import rightGraphic from "../../images/right-graphic.png";
import styles from "./Hero.module.css";

const heroText =
  "I build responsive websites, landing pages and CMS sections using React, WordPress and HubSpot \u2014 with strong front-end implementation, clear structure and content editing in mind.";

const heroNote =
  "Self-initiated projects documented with live demos, GitHub repos and build notes.";

export function Hero() {
  const titleLines = siteInfo.heroTitle.split("\n");

  return (
    <section className={styles.hero} id="top">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{siteInfo.role}</p>
          <h1 className={styles.title}>
            {titleLines.map((line, index) => (
              <span
                className={`${styles.titleLine} ${index > 0 ? styles.highlightLine : ""}`}
                key={line}
              >
                {line}
              </span>
            ))}
          </h1>
          <div className={styles.text}>
            <p>{heroText}</p>
            <p className={styles.note}>{heroNote}</p>
          </div>
          <div className={styles.actions}>
            <Button href="#projects">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <Image
            src={rightGraphic}
            alt=""
            className={styles.heroImage}
            priority
            sizes="(max-width: 860px) 90vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
