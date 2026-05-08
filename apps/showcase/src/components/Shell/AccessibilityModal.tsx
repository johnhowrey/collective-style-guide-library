"use client";

import { useEffect, useState } from "react";
import { icons } from "./icons";
import styles from "./AccessibilityModal.module.scss";

interface AccessibilityModalProps {
  open: boolean;
  onClose: () => void;
}

const OPTIONS = [
  {
    id: "reduce-motion",
    label: "Reduce motion",
    description: "Minimize animations and transitions",
    attr: "data-reduce-motion",
  },
  {
    id: "high-contrast",
    label: "High contrast",
    description: "Increase contrast for better readability",
    attr: "data-high-contrast",
  },
  {
    id: "dyslexia-font",
    label: "Dyslexia-friendly font",
    description: "Use OpenDyslexic typeface across the UI",
    attr: "data-dyslexia-font",
  },
  {
    id: "large-text",
    label: "Large text",
    description: "Increase the base text size by 20%",
    attr: "data-large-text",
  },
  {
    id: "enhanced-focus",
    label: "Enhanced focus indicators",
    description: "Show prominent outlines on focused elements",
    attr: "data-enhanced-focus",
  },
  {
    id: "underline-links",
    label: "Underline links",
    description: "Always underline links for visibility",
    attr: "data-underline-links",
  },
];

const STORAGE_KEY = "collective.a11y";

export function AccessibilityModal({ open, onClose }: AccessibilityModalProps) {
  const [enabled, setEnabled] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setEnabled(JSON.parse(raw));
      } catch {
        // fall through to default
      }
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    for (const opt of OPTIONS) {
      if (enabled[opt.id]) {
        document.documentElement.setAttribute(opt.attr, "");
      } else {
        document.documentElement.removeAttribute(opt.attr);
      }
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(enabled));
  }, [enabled]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="a11y-title"
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <div>
            <h2 id="a11y-title" className={styles.title}>
              Accessibility options
            </h2>
            <p className={styles.lede}>Motion, contrast, fonts, focus, and more.</p>
          </div>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Close"
          >
            {icons.close}
          </button>
        </header>

        <div className={styles.list}>
          {OPTIONS.map((opt) => {
            const isOn = !!enabled[opt.id];
            return (
              <label
                key={opt.id}
                className={[styles.row, isOn && styles.rowOn]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className={styles.rowText}>
                  <span className={styles.rowLabel}>{opt.label}</span>
                  <span className={styles.rowDescription}>{opt.description}</span>
                </div>
                <span className={styles.toggleWrap}>
                  <input
                    type="checkbox"
                    checked={isOn}
                    onChange={(e) =>
                      setEnabled((s) => ({ ...s, [opt.id]: e.target.checked }))
                    }
                    aria-label={opt.label}
                  />
                  <span className={styles.toggle} aria-hidden="true">
                    <span className={styles.toggleDot} />
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
