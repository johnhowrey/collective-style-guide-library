import type { ReactNode } from "react";
import styles from "./Prose.module.scss";

/** Wraps long-form content with sensible typographic defaults per variant. */
export function Prose({ children }: { children: ReactNode }) {
  return <div className={styles.prose}>{children}</div>;
}
