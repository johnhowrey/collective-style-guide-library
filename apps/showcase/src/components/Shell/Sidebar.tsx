"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV } from "@/lib/sitemap";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className={styles.sidebar} aria-label="Section">
      {PRIMARY_NAV.map((section) => (
        <section key={section.label} className={styles.section}>
          <h3 className={styles.sectionLabel}>{section.label}</h3>
          <ul className={styles.list}>
            {section.items.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[styles.link, active && styles.active].filter(Boolean).join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </nav>
  );
}
