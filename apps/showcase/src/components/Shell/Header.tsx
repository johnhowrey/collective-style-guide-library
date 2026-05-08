"use client";

import type { Theme, ColorMode, Density } from "@collective/foundation";
import { VARIANTS } from "@/lib/variants";
import { Breadcrumbs } from "./Breadcrumbs";
import { Search } from "./Search";
import { ModeToggle } from "./ModeToggle";
import { icons } from "./icons";
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
  assistantOpen: boolean;
  onToggleAssistant: () => void;
  onOpenMobileNav: () => void;
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
  assistantOpen,
  onToggleAssistant,
  onOpenMobileNav,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.hamburger}
        aria-label="Open navigation"
        onClick={onOpenMobileNav}
      >
        {icons.hamburger}
      </button>

      <div className={styles.crumbs}>
        <Breadcrumbs />
      </div>

      <div className={styles.searchSlot}>
        <Search />
      </div>

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

      <button
        type="button"
        className={[styles.assistant, assistantOpen && styles.assistantActive]
          .filter(Boolean)
          .join(" ")}
        onClick={onToggleAssistant}
        aria-label="AI Assistant (⌘K)"
        title="AI Assistant (⌘K)"
        aria-pressed={assistantOpen}
      >
        {icons.sparkles}
        <span className={styles.assistantLabel}>AI</span>
      </button>

      <ModeToggle mode={mode} onModeChange={onModeChange} />

      <span className={styles.brandTag} aria-hidden="true">
        {variant.meta.name}
      </span>
    </header>
  );
}
