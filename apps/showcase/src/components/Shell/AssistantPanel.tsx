"use client";

import { useEffect } from "react";
import { icons } from "./icons";
import styles from "./AssistantPanel.module.scss";

interface AssistantPanelProps {
  open: boolean;
  onClose: () => void;
  variantName: string;
}

const PROMPTS = [
  "What's the difference between Foundry and Beacon?",
  "Generate a dashboard layout in this variant",
  "Explain the motion principles for this variant",
  "Show me the type stack and a real component",
];

export function AssistantPanel({ open, onClose, variantName }: AssistantPanelProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <aside
      className={[styles.panel, open && styles.open].filter(Boolean).join(" ")}
      aria-hidden={!open}
      aria-label="AI Assistant"
    >
      <header className={styles.header}>
        <span className={styles.title}>
          {icons.sparkles}
          <span>AI Assistant</span>
          <span className={styles.beta}>Beta</span>
        </span>
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close assistant"
        >
          {icons.close}
        </button>
      </header>

      <div className={styles.body}>
        <p className={styles.lede}>
          Ask anything about <strong>{variantName}</strong>, the library, or how to apply a variant
          to your product. Each variant&rsquo;s tokens, voice, motion, and i18n notes flow into the
          prompt context automatically.
        </p>

        <div className={styles.prompts}>
          <p className={styles.promptLabel}>Try</p>
          {PROMPTS.map((p) => (
            <button key={p} type="button" className={styles.promptRow}>
              {p}
            </button>
          ))}
        </div>

        <div className={styles.note}>
          <p>
            <strong>Live wiring deferred.</strong> The Assistant chrome is real; the response
            backend will plug into the Anthropic SDK when we add an API route. For now, copy any
            page&rsquo;s <em>Copy for LLM</em> prompt and paste into Claude.
          </p>
        </div>
      </div>

      <footer className={styles.composer}>
        <textarea
          className={styles.composerInput}
          placeholder={`Ask about ${variantName}…`}
          rows={2}
          disabled
        />
        <button type="button" className={styles.send} disabled>
          Send
        </button>
      </footer>
    </aside>
  );
}
