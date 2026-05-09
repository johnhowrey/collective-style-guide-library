"use client";

import { usePathname } from "next/navigation";
import type { Theme, ColorMode, Density } from "@collective/foundation";
import { Breadcrumbs } from "./Breadcrumbs";
import { Search } from "./Search";
import { ModeToggle } from "./ModeToggle";
import { VariantPicker } from "./VariantPicker";
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
  const pathname = usePathname();

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

      <div className={styles.densitySlot}>
        <label className={styles.densityControl}>
          <span className={styles.densityLabel}>Density</span>
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

      <VariantPicker
        activeVariantId={variantId}
        active={variant}
        urlDriven={variantLocked}
        pathname={pathname}
        onPick={onVariantChange}
      />

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
    </header>
  );
}
