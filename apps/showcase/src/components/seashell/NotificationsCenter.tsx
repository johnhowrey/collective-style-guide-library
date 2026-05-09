"use client";

import { useState } from "react";
import styles from "./NotificationsCenter.module.scss";

type NotifType = "agentic" | "billing" | "infra" | "team" | "security";

interface NotificationItem {
  id: string;
  type: NotifType;
  categoryLabel: string;
  text: string;
  meta: string;
  time: string;
  unread?: boolean;
  actions: { label: string; primary?: boolean }[];
}

const TYPE_COLORS: Record<NotifType, string> = {
  agentic: "#7c3aed",
  billing: "#059669",
  infra: "#d97706",
  team: "#2563eb",
  security: "#dc2626",
};

const NOTIFICATIONS: { group: string; items: NotificationItem[] }[] = [
  {
    group: "Now",
    items: [
      {
        id: "1",
        type: "agentic",
        categoryLabel: "AI Agent",
        text: "Auto-scaling completed for copilot-app-nyc1",
        meta: "Agent optimized from 3 to 5 nodes based on traffic spike",
        time: "Just now",
        unread: true,
        actions: [{ label: "Review changes", primary: true }, { label: "Undo" }],
      },
      {
        id: "2",
        type: "security",
        categoryLabel: "Security",
        text: "Unusual login attempt blocked",
        meta: "IP 192.168.14.22 — São Paulo, Brazil",
        time: "2m ago",
        unread: true,
        actions: [{ label: "Review activity", primary: true }, { label: "Block IP" }],
      },
    ],
  },
  {
    group: "Earlier today",
    items: [
      {
        id: "3",
        type: "billing",
        categoryLabel: "Billing",
        text: "Monthly invoice ready",
        meta: "$247.83 for February 2026 — due Mar 15",
        time: "3h ago",
        unread: true,
        actions: [{ label: "View invoice", primary: true }, { label: "Payment settings" }],
      },
      {
        id: "4",
        type: "agentic",
        categoryLabel: "AI Agent",
        text: "Database vacuum scheduled automatically",
        meta: "copilot-db-prod — Agent detected fragmentation at 34%",
        time: "5h ago",
        actions: [{ label: "View details" }],
      },
      {
        id: "5",
        type: "infra",
        categoryLabel: "Infrastructure",
        text: "Droplet CPU alert resolved",
        meta: "copilot-droplet-01 returned below 80% threshold",
        time: "6h ago",
        actions: [{ label: "View metrics", primary: true }, { label: "Edit alert rules" }],
      },
    ],
  },
  {
    group: "Yesterday",
    items: [
      {
        id: "6",
        type: "team",
        categoryLabel: "Team",
        text: "Alex Chen joined Platform Engineering",
        meta: "Invited by you — Developer role",
        time: "Yesterday",
        actions: [{ label: "Manage roles", primary: true }],
      },
      {
        id: "7",
        type: "agentic",
        categoryLabel: "AI Agent",
        text: "Cost optimization suggestion",
        meta: "Agent identified 2 idle droplets — potential savings $18/mo",
        time: "Yesterday",
        actions: [{ label: "Review suggestion", primary: true }, { label: "Dismiss" }],
      },
      {
        id: "8",
        type: "infra",
        categoryLabel: "Infrastructure",
        text: "Kubernetes cluster upgraded",
        meta: "copilot-k8s-cluster — v1.29 → v1.30 completed successfully",
        time: "Yesterday",
        actions: [{ label: "View changelog" }],
      },
    ],
  },
  {
    group: "Last week",
    items: [
      {
        id: "9",
        type: "billing",
        categoryLabel: "Billing",
        text: "Credits applied to account",
        meta: "$50 promotional credit — expires Jun 30",
        time: "3 days ago",
        actions: [{ label: "View balance" }],
      },
      {
        id: "10",
        type: "team",
        categoryLabel: "Team",
        text: "New project created",
        meta: "staging-environment — created by Jamie Park",
        time: "5 days ago",
        actions: [{ label: "Go to project", primary: true }],
      },
      {
        id: "11",
        type: "agentic",
        categoryLabel: "AI Agent",
        text: "Backup policy auto-configured",
        meta: "Agent set daily snapshots for 3 new volumes",
        time: "6 days ago",
        actions: [{ label: "Review policy", primary: true }, { label: "Learn more" }],
      },
    ],
  },
];

const FILTERS: ("All" | NotifType)[] = ["All", "agentic", "billing", "infra", "team", "security"];
const FILTER_LABELS: Record<string, string> = {
  All: "All",
  agentic: "AI Agent",
  billing: "Billing",
  infra: "Infrastructure",
  team: "Team",
  security: "Security",
};

export function NotificationsCenter() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const groups = NOTIFICATIONS.map((g) => ({
    ...g,
    items: filter === "All" ? g.items : g.items.filter((it) => it.type === filter),
  })).filter((g) => g.items.length > 0);

  const totalUnread = NOTIFICATIONS.reduce(
    (sum, g) => sum + g.items.filter((it) => it.unread).length,
    0,
  );

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <div>
          <p className={styles.kicker}>Observability · Notifications</p>
          <h1 className={styles.title}>Notifications</h1>
          <p className={styles.lede}>
            <strong>{totalUnread}</strong> unread · agent activity, security, billing, and team
            updates from the last 7 days.
          </p>
        </div>
        <div className={styles.headActions}>
          <button type="button" className={styles.ghostBtn}>
            Mark all read
          </button>
          <button type="button" className={styles.primaryBtn}>
            Notification settings
          </button>
        </div>
      </header>

      <div className={styles.filters}>
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              className={`${styles.filterBtn} ${active ? styles.filterActive : ""}`}
              onClick={() => setFilter(f)}
            >
              {f !== "All" && (
                <span className={styles.filterDot} style={{ background: TYPE_COLORS[f as NotifType] }} />
              )}
              {FILTER_LABELS[f]}
            </button>
          );
        })}
      </div>

      <div className={styles.feed}>
        {groups.map((g) => (
          <section key={g.group} className={styles.group}>
            <h2 className={styles.groupTitle}>{g.group}</h2>
            {g.items.map((it) => (
              <article key={it.id} className={`${styles.item} ${it.unread ? styles.itemUnread : ""}`}>
                <span
                  className={styles.itemDot}
                  style={{ background: TYPE_COLORS[it.type] }}
                  aria-hidden="true"
                />
                <div className={styles.itemBody}>
                  <header className={styles.itemHeader}>
                    <span className={styles.itemCategory} style={{ color: TYPE_COLORS[it.type] }}>
                      {it.categoryLabel}
                    </span>
                    <span className={styles.itemTime}>{it.time}</span>
                  </header>
                  <p className={styles.itemText}>{it.text}</p>
                  <p className={styles.itemMeta}>{it.meta}</p>
                  {it.actions.length > 0 && (
                    <div className={styles.itemActions}>
                      {it.actions.map((a) => (
                        <button
                          key={a.label}
                          type="button"
                          className={a.primary ? styles.actionPrimary : styles.actionGhost}
                        >
                          {a.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
