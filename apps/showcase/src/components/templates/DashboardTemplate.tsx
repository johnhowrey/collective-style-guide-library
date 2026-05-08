"use client";

import { Button, Tag, ProgressBar, Tile } from "@carbon/react";
import styles from "./templates.module.scss";

const KPIS = [
  { label: "Active deploys", value: "12", delta: "+2 this week" },
  { label: "Uptime (30d)", value: "99.94%", delta: "+0.02%" },
  { label: "MRR", value: "$48,210", delta: "+5.4%" },
  { label: "Open issues", value: "27", delta: "-3 since Mon" },
];

const ACTIVITY = [
  { time: "2m ago", text: "build #4128 succeeded · main · 1832 lines" },
  { time: "8m ago", text: "alex.r merged 'extract billing module' (#812)" },
  { time: "32m ago", text: "deploy d29c1a1 → production · 4 instances" },
  { time: "1h ago", text: "warehouse-etl job failed · OOM at step 4/7" },
];

export function DashboardTemplate() {
  return (
    <div className={styles.template}>
      <header className={styles.templateHeader}>
        <div>
          <p className={styles.kicker}>Workspace · acme</p>
          <h2 className={styles.title}>Production overview</h2>
        </div>
        <div className={styles.headerActions}>
          <Button kind="secondary">Run deploy</Button>
          <Button kind="primary">Open project</Button>
        </div>
      </header>

      <div className={styles.kpiGrid}>
        {KPIS.map((k) => (
          <Tile key={k.label} className={styles.kpiTile}>
            <p className={styles.kpiLabel}>{k.label}</p>
            <p className={styles.kpiValue}>{k.value}</p>
            <p className={styles.kpiDelta}>{k.delta}</p>
          </Tile>
        ))}
      </div>

      <div className={styles.twoCol}>
        <Tile className={styles.panel}>
          <div className={styles.panelHeader}>
            <h3>Recent activity</h3>
            <Button kind="ghost" size="sm">View all</Button>
          </div>
          <ul className={styles.activityList}>
            {ACTIVITY.map((a, i) => (
              <li key={i}>
                <span className={styles.activityTime}>{a.time}</span>
                <span className={styles.activityText}>{a.text}</span>
              </li>
            ))}
          </ul>
        </Tile>

        <Tile className={styles.panel}>
          <div className={styles.panelHeader}>
            <h3>Active migrations</h3>
            <Tag type="blue">3 running</Tag>
          </div>
          <div className={styles.migrations}>
            <div>
              <div className={styles.migRow}>
                <span>users.email_verified backfill</span>
                <span className={styles.eta}>ETA 4m</span>
              </div>
              <ProgressBar label="" value={62} />
            </div>
            <div>
              <div className={styles.migRow}>
                <span>orders.region partition</span>
                <span className={styles.eta}>ETA 28m</span>
              </div>
              <ProgressBar label="" value={18} />
            </div>
            <div>
              <div className={styles.migRow}>
                <span>events.archive cold-storage</span>
                <span className={styles.eta}>ETA 1h 12m</span>
              </div>
              <ProgressBar label="" value={4} />
            </div>
          </div>
        </Tile>
      </div>
    </div>
  );
}
