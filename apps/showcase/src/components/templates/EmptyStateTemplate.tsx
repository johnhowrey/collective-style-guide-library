"use client";

import { Button } from "@carbon/react";
import styles from "./templates.module.scss";

export function EmptyStateTemplate() {
  return (
    <div className={styles.template}>
      <div className={styles.emptyState}>
        <div className={styles.emptyIcon} aria-hidden="true">
          ⌥
        </div>
        <h2 className={styles.emptyTitle}>No projects yet</h2>
        <p className={styles.emptyLede}>
          Projects appear here as soon as you create one. Start with a template or import from GitHub.
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <Button kind="primary">Create project</Button>
          <Button kind="tertiary">Import from GitHub</Button>
        </div>
      </div>
    </div>
  );
}
