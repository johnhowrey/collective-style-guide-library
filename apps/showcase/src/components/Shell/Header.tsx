"use client";

import Link from "next/link";
import type { Theme, ColorMode, Density } from "@collective/foundation";
import { VARIANTS } from "@/lib/variants";
import styles from "./Header.module.scss";

interface HeaderProps {
  variant: Theme;
  variantId: string;
  variantLocked: boolean;
  onVariantChange: (id: string) => void;
  mode: ColorMode;
  onModeChange: (mode: ColorMode) => void;
  density: Density;
  onDensityChange: (density: Density) => void;
}

export function Header({
  variant,
  variantId,
  variantLocked,
  onVariantChange,
  mode,
  onModeChange,
  density,
  onDensityChange,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>
        <span className={styles.brandMark} aria-hidden="true" />
        <span className={styles.brandWord}>The Collective</span>
        <span className={styles.brandSlash}>/</span>
        <span className={styles.brandVariant}>{variant.meta.name}</span>
      </Link>

      <nav className={styles.primaryNav} aria-label="Primary">
        <Link href="/getting-started">Get started</Link>
        <Link href="/variants">Variants</Link>
        <Link href="/templates">Templates</Link>
        <Link href="/ai">AI</Link>
        <Link href="/changelog">Changelog</Link>
      </nav>

      <div className={styles.controls}>
        <label className={styles.control}>
          <span className={styles.controlLabel}>Variant</span>
          <select
            value={variantId}
            onChange={(e) => onVariantChange(e.target.value)}
            disabled={variantLocked}
            aria-label="Active variant"
          >
            {VARIANTS.map((v) => (
              <option key={v.meta.id} value={v.meta.id}>
                {v.meta.name}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.control}>
          <span className={styles.controlLabel}>Mode</span>
          <select
            value={mode}
            onChange={(e) => onModeChange(e.target.value as ColorMode)}
            aria-label="Color mode"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>

        <label className={styles.control}>
          <span className={styles.controlLabel}>Density</span>
          <select
            value={density}
            onChange={(e) => onDensityChange(e.target.value as Density)}
            aria-label="Density"
          >
            <option value="comfortable">Comfortable</option>
            <option value="compact">Compact</option>
          </select>
        </label>
      </div>
    </header>
  );
}
