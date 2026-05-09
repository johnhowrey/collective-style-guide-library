"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useRouter } from "next/navigation";
import type { Theme } from "@collective/foundation";
import { VARIANTS } from "@/lib/variants";
import styles from "./VariantPicker.module.scss";

interface VariantPickerProps {
  activeVariantId: string;
  active: Theme;
  /** When true, picking a variant rewrites the URL instead of just updating state. */
  urlDriven: boolean;
  /** Pathname so we can rewrite /variants/<old>/... to /variants/<new>/... */
  pathname: string;
  onPick: (id: string) => void;
}

export function VariantPicker({
  activeVariantId,
  active,
  urlDriven,
  pathname,
  onPick,
}: VariantPickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handlePick = (id: string) => {
    setOpen(false);
    if (urlDriven) {
      // Rewrite /variants/<oldSlug>/... → /variants/<newSlug>/...
      const next = pathname.replace(/^\/variants\/[^/]+/, `/variants/${id}`);
      router.push(next);
    } else {
      onPick(id);
    }
  };

  const accentColor = active.modes.light.cssVariables["--collective-accent-primary"] ?? "#000";

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        title="Switch variant"
      >
        <span
          className={styles.swatch}
          aria-hidden="true"
          style={{ "--swatch": accentColor } as CSSProperties}
        />
        <span className={styles.text}>
          <span className={styles.label}>Variant</span>
          <span className={styles.name}>{active.meta.name}</span>
        </span>
        <svg
          className={open ? styles.chevronOpen : styles.chevron}
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3.5 6L8 10.5 12.5 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className={styles.popover} role="listbox" aria-label="Variants">
          <p className={styles.popoverHead}>Switch variant — the chrome and product re-skin live</p>
          <div className={styles.grid}>
            {VARIANTS.map((v) => {
              const isActive = v.meta.id === activeVariantId;
              const swatch = v.modes.light.cssVariables["--collective-accent-primary"] ?? "#000";
              const surface = v.modes.light.cssVariables["--cds-background"] ?? "#fff";
              const text = v.modes.light.cssVariables["--cds-text-primary"] ?? "#000";
              const border = v.modes.light.cssVariables["--cds-border-subtle"] ?? "#ddd";
              return (
                <button
                  key={v.meta.id}
                  type="button"
                  role="option"
                  aria-selected={isActive}
                  className={`${styles.card} ${isActive ? styles.cardActive : ""}`}
                  onClick={() => handlePick(v.meta.id)}
                >
                  <div
                    className={styles.preview}
                    style={
                      {
                        "--preview-bg": surface,
                        "--preview-text": text,
                        "--preview-border": border,
                        "--preview-swatch": swatch,
                      } as CSSProperties
                    }
                  >
                    <span className={styles.previewBar} />
                    <span className={styles.previewLines}>
                      <span className={styles.previewLine} />
                      <span className={styles.previewLine} style={{ width: "60%" }} />
                    </span>
                    <span className={styles.previewBtn}>Aa</span>
                  </div>
                  <div className={styles.cardText}>
                    <span className={styles.cardName}>{v.meta.name}</span>
                    <span className={styles.cardKicker}>{v.meta.inspiration}</span>
                  </div>
                  {isActive && <span className={styles.activeBadge}>Active</span>}
                </button>
              );
            })}
          </div>
          {urlDriven && (
            <p className={styles.popoverNote}>
              You&rsquo;re on a variant docs page; picking a variant navigates to its equivalent doc.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
