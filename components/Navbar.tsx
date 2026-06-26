"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>NF</span>
          <span className={styles.logoText}>NexaFlow</span>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <button className={styles.button}>
          Get Started
        </button>
      </div>
    </header>
  );
}