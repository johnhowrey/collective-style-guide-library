"use client";

import Link from "next/link";
import styles from "./WorkspaceHome.module.scss";

const ITEMS: Array<{
  chip: { label: string; tone: "mint" | "risk" | "speed" | "block" };
  title: string;
  evidence: string;
  reason: string;
  cta: { label: string; href: string };
}> = [
  {
    chip: { label: "$18 / mo", tone: "mint" },
    title: "Right-size 2 idle Droplets",
    evidence: "web-dev-1 + web-dev-2 averaged 4% CPU over the last 30 days.",
    reason:
      "Cost Optimizer flagged sustained < 5% CPU on production-tagged droplets — high confidence the workload fits a smaller plan.",
    cta: { label: "Right-size", href: "/droplets" },
  },
  {
    chip: { label: "Risk", tone: "risk" },
    title: "Add backups to 4 unprotected Droplets",
    evidence: "main-postgres, web-prod-1/2, api-server. Nightly is $1.20 / mo each.",
    reason:
      "Production tag with no snapshot policy. Teams of your size keep nightly backups on 96% of prod resources.",
    cta: { label: "Enable", href: "/droplets/web-prod-1" },
  },
  {
    chip: { label: "60% faster", tone: "speed" },
    title: "Move llama-3-endpoint off serverless",
    evidence: "320 ms p95 today. A dedicated SFO3 instance hits 130 ms.",
    reason:
      "Your traffic shape (steady 40 req/s) is the cutover point where dedicated beats serverless on both latency and cost.",
    cta: { label: "See plans", href: "/playground" },
  },
  {
    chip: { label: "Unblock 3 PRs", tone: "block" },
    title: "Add Jane Park to Acme Corp",
    evidence: "Requested as reviewer on 3 PRs in roadtrip-copilot since Tuesday.",
    reason: "Three PRs sat idle for 4+ days waiting on a reviewer who isn't on the team yet.",
    cta: { label: "Invite", href: "/onboarding" },
  },
];

const ACTIVITY = [
  { dot: "#10b981", label: "Deployed roadtrip-copilot v2.4 to production", meta: "Production · 8 minutes ago" },
  { dot: "#0ea5e9", label: "Created Droplet web-prod-3 (4 vCPU / 8 GB / NYC1)", meta: "John Howrey · 24 minutes ago" },
  { dot: "#f59e0b", label: "Auto-scaled copilot-app-nyc1 from 3 → 5 nodes", meta: "AI Agent · 1 hour ago" },
  { dot: "#ef4444", label: "CPU alert resolved on copilot-droplet-01", meta: "Monitoring · 3 hours ago" },
  { dot: "#8b5cf6", label: "Alex Chen joined Platform Engineering as Developer", meta: "Yesterday at 4:12pm" },
  { dot: "#0ea5e9", label: "Database vacuum completed for copilot-db-prod", meta: "Yesterday at 2:08am" },
];

const CHECKLIST = [
  { label: "Verify your email", done: true },
  { label: "Create your first project", done: true },
  { label: "Deploy a Droplet or App", done: true },
  { label: "Invite a teammate", done: false },
  { label: "Set up billing alerts", done: false },
];

const WORKSPACES = [
  { name: "Acme Corp", role: "Owner · 24 members", bg: "#0061eb" },
  { name: "Roadtrip Studio", role: "Admin · 5 members", bg: "#7c3aed" },
  { name: "Personal", role: "Owner · just you", bg: "#10b981" },
];

const SPEND = [
  { label: "Compute", value: 142, pct: 50, color: "#0ea5e9" },
  { label: "Database", value: 76, pct: 27, color: "#10b981" },
  { label: "Storage", value: 38, pct: 13, color: "#f59e0b" },
  { label: "Networking", value: 28.3, pct: 10, color: "#a855f7" },
];

const KPIS: Array<{
  label: string;
  value: string;
  delta: string;
  chip: { label: string; tone: "ok" | "alert" } | null;
  sparkline: number[];
  sparkColor: string;
}> = [
  {
    label: "Active resources",
    value: "12",
    delta: "+2 this week",
    chip: null,
    sparkline: [7, 7, 8, 8, 9, 9, 10, 10, 11, 12, 12, 12],
    sparkColor: "#0ea5e9",
  },
  {
    label: "Spend this month",
    value: "$284.30",
    delta: "$1,012 forecast",
    chip: { label: "On track", tone: "ok" },
    sparkline: [12, 28, 45, 64, 88, 110, 138, 164, 192, 224, 256, 284],
    sparkColor: "#10b981",
  },
  {
    label: "Healthy services",
    value: "98%",
    delta: "↑ 0.4% from last week",
    chip: null,
    sparkline: [97.4, 97.6, 97.5, 97.8, 97.6, 97.9, 98.0, 97.9, 98.1, 98.0, 98.2, 98.0],
    sparkColor: "#22c55e",
  },
  {
    label: "Open alerts",
    value: "3",
    delta: "2 high priority",
    chip: { label: "Action needed", tone: "alert" },
    sparkline: [8, 6, 7, 5, 4, 6, 5, 4, 3, 5, 4, 3],
    sparkColor: "#ef4444",
  },
];

function Sparkline({ data, color, id }: { data: number[]; color: string; id: string }) {
  const w = 280;
  const h = 36;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const xStep = w / (data.length - 1);
  const path = data
    .map(
      (v, i) =>
        `${i === 0 ? "M" : "L"}${(i * xStep).toFixed(1)},${(h - ((v - min) / range) * h).toFixed(1)}`,
    )
    .join(" ");
  const gradId = `kpi-${id}`;
  return (
    <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.32" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${path} L${w},${h} L0,${h} Z`} fill={`url(#${gradId})`} />
      <path d={path} stroke={color} strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function WorkspaceHome() {
  const doneCount = CHECKLIST.filter((c) => c.done).length;
  const pct = (doneCount / CHECKLIST.length) * 100;

  return (
    <div className={styles.page}>
      <p className={styles.greeting}>Hey, John. Hope your week&rsquo;s been going well.</p>

      <h1 className={styles.standupLead}>
        <span className={styles.agentPill}>
          <span className={styles.agentPillPlus} aria-hidden="true">
            +
          </span>
          Cost Optimizer
        </span>{" "}
        spotted <strong>$18 / month</strong> in idle compute, your{" "}
        <strong>4 production Droplets</strong> still need backups, and{" "}
        <strong>llama-3 inference</strong> is running 60% slower than it could on a dedicated SFO3
        instance.
      </h1>

      <div className={styles.focusActions}>
        <button type="button" className={styles.primaryBtn}>
          Let AI handle the 3 routine ones
        </button>
        <button type="button" className={styles.ghostBtn}>
          Snooze them all for the week
        </button>
      </div>

      <div className={styles.itemList}>
        {ITEMS.map((item) => (
          <article key={item.title} className={styles.itemRow}>
            <span className={`${styles.itemChip} ${styles[`chip_${item.chip.tone}`]}`}>
              {item.chip.label}
            </span>
            <div className={styles.itemText}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemEvidence}>{item.evidence}</p>
              <p className={styles.itemReason}>
                <strong>Why this?</strong> {item.reason}
              </p>
            </div>
            <Link href={item.cta.href} className={styles.itemCta}>
              {item.cta.label}
            </Link>
          </article>
        ))}
      </div>

      <span className={styles.mintPill}>
        <span className={styles.mintDot} aria-hidden="true" />
        All 4 routine items are agent-handleable with high confidence
      </span>

      <details className={styles.snapshot}>
        <summary>Today&rsquo;s snapshot — KPIs, recent activity, spend, getting started</summary>

        <div className={styles.kpiGrid}>
          {KPIS.map((k) => (
            <div key={k.label} className={styles.kpiCard}>
              <div className={styles.kpiLabelRow}>
                <span className={styles.kpiLabel}>{k.label}</span>
                {k.chip && (
                  <span className={`${styles.kpiChip} ${styles[`chip_${k.chip.tone === "ok" ? "mint" : "risk"}`]}`}>
                    {k.chip.label}
                  </span>
                )}
              </div>
              <span className={styles.kpiValue}>{k.value}</span>
              <Sparkline data={k.sparkline} color={k.sparkColor} id={k.label.replace(/\s+/g, "-").toLowerCase()} />
              <span className={styles.kpiDelta}>{k.delta}</span>
            </div>
          ))}
        </div>

        <div className={styles.cols}>
          <div>
            <section className={styles.section}>
              <header className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Recent activity</h2>
                <Link href="/notifications" className={styles.seeAll}>
                  View all →
                </Link>
              </header>
              {ACTIVITY.map((a, i) => (
                <div key={i} className={styles.activityRow}>
                  <span className={styles.activityDot} style={{ background: a.dot }} aria-hidden="true" />
                  <div className={styles.activityText}>
                    <p className={styles.activityMain}>{a.label}</p>
                    <p className={styles.activityMeta}>{a.meta}</p>
                  </div>
                </div>
              ))}
            </section>

            <section className={styles.section}>
              <header className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Your workspaces</h2>
                <Link href="/onboarding" className={styles.seeAll}>
                  Create new →
                </Link>
              </header>
              <div className={styles.workspaceList}>
                {WORKSPACES.map((w) => (
                  <Link key={w.name} href="/project" className={styles.wsCard}>
                    <div className={styles.wsTop}>
                      <span className={styles.wsAvatar} style={{ background: w.bg }}>
                        {w.name[0]}
                      </span>
                      <span className={styles.wsName}>{w.name}</span>
                    </div>
                    <span className={styles.wsMeta}>{w.role}</span>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div>
            <section className={styles.section}>
              <header className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>Getting started</h2>
                <span className={styles.checklistCount}>
                  {doneCount}/{CHECKLIST.length}
                </span>
              </header>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${pct}%` }} />
              </div>
              <ol className={styles.checklist}>
                {CHECKLIST.map((c) => (
                  <li
                    key={c.label}
                    className={`${styles.checklistItem} ${c.done ? styles.checklistDone : ""}`}
                  >
                    <span className={styles.checklistBox} aria-hidden="true">
                      {c.done ? "✓" : ""}
                    </span>
                    <span className={styles.checklistLabel}>{c.label}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className={styles.section}>
              <header className={styles.sectionHead}>
                <h2 className={styles.sectionTitle}>This month&rsquo;s spend</h2>
              </header>
              <div className={styles.spendStack}>
                {SPEND.map((s) => (
                  <div key={s.label} className={styles.spendRow}>
                    <div className={styles.spendBar}>
                      <span className={styles.spendBarLabel}>{s.label}</span>
                      <span className={styles.spendBarValue}>${s.value.toFixed(2)}</span>
                    </div>
                    <div className={styles.spendTrack}>
                      <div
                        className={styles.spendFill}
                        style={{ width: `${s.pct}%`, background: s.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </details>
    </div>
  );
}
