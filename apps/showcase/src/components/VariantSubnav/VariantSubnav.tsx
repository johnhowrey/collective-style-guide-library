"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VARIANT_SUBPAGES } from "@/lib/sitemap";
import styles from "./VariantSubnav.module.scss";

export function VariantSubnav({ variantId }: { variantId: string }) {
  const pathname = usePathname();
  const base = `/variants/${variantId}`;
  return (
    <nav className={styles.subnav} aria-label="Variant sections">
      {VARIANT_SUBPAGES.map((p) => {
        const href = base + p.href;
        const active = pathname === href || (p.href && pathname.startsWith(href));
        return (
          <Link
            key={p.href}
            href={href}
            className={[styles.tab, active && styles.active].filter(Boolean).join(" ")}
          >
            {p.label}
          </Link>
        );
      })}
    </nav>
  );
}
