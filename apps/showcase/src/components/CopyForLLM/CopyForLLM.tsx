"use client";

import { useState } from "react";
import styles from "./CopyForLLM.module.scss";

interface CopyForLLMProps {
  /** Already-assembled prompt to copy. */
  prompt: string;
  /** Optional label override. Defaults to "Copy for LLM". */
  label?: string;
}

/**
 * Single-click button that copies a ready-to-paste prompt for Claude / Cursor /
 * any LLM. Page-level callers assemble the prompt by combining variant
 * starter-prompt + page context.
 */
export function CopyForLLM({ prompt, label = "Copy for LLM" }: CopyForLLMProps) {
  const [copied, setCopied] = useState(false);

  const onClick = async () => {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button type="button" className={styles.button} onClick={onClick} aria-live="polite">
      <span aria-hidden="true">{copied ? "✓" : "↗"}</span>
      <span>{copied ? "Copied" : label}</span>
    </button>
  );
}
