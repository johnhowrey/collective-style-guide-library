"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pathnameToBreadcrumbs } from "@/lib/sitemap";
import styles from "./Breadcrumbs.module.scss";

export function Breadcrumbs() {
  const pathname = usePathname();
  const trail = pathnameToBreadcrumbs(pathname);

  return (
    <nav className={styles.trail} aria-label="Breadcrumb">
      {trail.map((seg, i) => {
        const isLast = i === trail.length - 1;
        return (
          <span key={seg.href} className={styles.group}>
            {isLast ? (
              <span className={[styles.segment, styles.active].join(" ")}>
                {seg.label}
              </span>
            ) : (
              <Link href={seg.href} className={styles.segment}>
                {seg.label}
              </Link>
            )}
            {!isLast && (
              <span className={styles.separator} aria-hidden="true">
                /
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
