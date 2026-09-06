"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button/Button";
import styles from "./Header.module.css";

const navigation = [
  { label: "Work", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const lastScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);
  const [hasScrollBorder, setHasScrollBorder] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      if (isMenuOpen || currentScrollY <= hideAfter) {
        setIsHidden(false);
        setHasScrollBorder(false);
      } else if (scrollDelta > showThreshold) {
        setIsHidden(true);
        setHasScrollBorder(false);
      } else if (scrollDelta < -showThreshold) {
        setIsHidden(false);
        setHasScrollBorder(true);
      }

      lastScrollY.current = Math.max(currentScrollY, 0);
    };

    lastScrollY.current = window.scrollY;

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        requestAnimationFrame(() => menuToggleRef.current?.focus());
      }
    };

    document.addEventListener("keydown", closeMenu);

    return () => {
      document.removeEventListener("keydown", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={[
        styles.header,
        isHidden && !isMenuOpen ? styles.hidden : "",
        hasScrollBorder && !isHidden ? styles.revealed : "",
      ]
        .filter(Boolean)
        .join(" ")}
      ref={headerRef}
    >
      <div className={`container ${styles.inner}`}>
        <Link
          className={`${styles.logo} type-logo`}
          href="/"
          aria-label="Nicolae Mihai home"
        >
          <span className={styles.bracket}>&lt;</span>
          <span className={styles.logoName}>NM</span>
          <span className={styles.accent}>.</span>
          <span className={styles.logoDev}>DEV</span>
          <span className={styles.bracket}>&gt;</span>
        </Link>

        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className={styles.menuToggle}
          onClick={() => {
            setIsHidden(false);
            setIsMenuOpen((open) => !open);
          }}
          type="button"
          ref={menuToggleRef}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
            <span className={styles.menuLine} />
          </span>
        </button>

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              className={styles.navLink}
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button className={styles.cta} href="/#contact" size="medium">
          Let&apos;s work together
        </Button>
      </div>
    </header>
  );
}
