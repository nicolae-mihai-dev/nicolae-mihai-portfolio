"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button/Button";
import { navLinks, siteInfo } from "@/data/site";
import styles from "./Header.module.css";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const header = headerRef.current;

    if (!header) {
      return;
    }

    const syncHeaderHeight = () => {
      const { height } = header.getBoundingClientRect();
      document.documentElement.style.setProperty(
        "--site-header-height",
        `${height}px`,
      );
    };

    syncHeaderHeight();

    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);
    window.addEventListener("resize", syncHeaderHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", syncHeaderHeight);
    };
  }, []);

  useEffect(() => {
    const showThreshold = 12;
    const hideAfter = 96;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= hideAfter) {
        setIsHidden(false);
      } else if (scrollDelta > showThreshold) {
        setIsHidden(true);
      } else if (scrollDelta < -showThreshold) {
        setIsHidden(false);
      }

      lastScrollY.current = Math.max(currentScrollY, 0);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${isHidden ? styles.hidden : ""}`}
      ref={headerRef}
    >
      <div className={`container ${styles.inner}`}>
        <Link className={styles.logo} href="/" aria-label="Nicolae Mihai home">
          <span className={styles.bracket}>&lt;</span>NM
          <span className={styles.accent}>.</span>DEV
          <span className={styles.bracket}>&gt;</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link className={styles.navLink} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Button className={styles.cta} href="/#contact" size="medium">
          {siteInfo.ctaLabel}
        </Button>
      </div>
    </header>
  );
}
