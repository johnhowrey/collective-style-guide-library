"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./ProjectHome.module.scss";

const ATTENTION = [
  {
    glyph: "!",
    tone: "danger",
    title: "main-postgres has no nightly backups",
    body: "Production database with 240 GB committed. Median recovery time without snapshots is 8h.",
    primary: { label: "Enable backups" },
    secondary: { label: "Snooze 24h" },
  },
  {
    glyph: "↓",
    tone: "warn",
    title: "copilot-app-nyc1 throttling at peak",
    body: "p95 latency 940 ms (target 400 ms) during 8–10am PT spikes for 3 days running.",
    primary: { label: "Add an instance" },
    secondary: { label: "Open metrics" },
  },
  {
    glyph: "✓",
    tone: "ok",
    title: "Dependency updates ready to ship",
    body: "12 patches across 3 services queued. CI green. AI Agent flagged none as breaking.",
    primary: { label: "Ship updates" },
    secondary: { label: "Review PRs" },
  },
];

const DEPLOYS = [
  { label: "Mon", height: 32 },
  { label: "Tue", height: 18 },
  { label: "Wed", height: 44 },
  { label: "Thu", height: 22 },
  { label: "Fri", height: 36 },
  { label: "Sat", height: 6 },
  { label: "Sun", height: 8 },
];

const RESOURCES = [
  { name: "web-prod-1", type: "Droplet · 4 vCPU / 8 GB", region: "NYC1", health: "Healthy" },
  { name: "web-prod-2", type: "Droplet · 4 vCPU / 8 GB", region: "NYC1", health: "Healthy" },
  { name: "main-postgres", type: "Database · PostgreSQL 16", region: "NYC1", health: "Action" },
  { name: "cache-redis", type: "Database · Redis 7", region: "NYC1", health: "Healthy" },
  { name: "prod-k8s-cluster", type: "Kubernetes · 6 nodes", region: "NYC1", health: "Healthy" },
  { name: "api-lb", type: "Load Balancer · 3 targets", region: "NYC1", health: "Healthy" },
];

const TEAM = [
  { name: "John Howrey", role: "Owner", initials: "JH", color: "#0061eb" },
  { name: "Alex Chen", role: "Developer", initials: "AC", color: "#7c3aed" },
  { name: "Maya Patel", role: "Operator", initials: "MP", color: "#10b981" },
  { name: "Liam Park", role: "Reviewer", initials: "LP", color: "#f59e0b" },
];

const INTEGRATIONS = [
  { name: "GitHub", subtitle: "acme-corp/roadtrip-copilot", connected: true },
  { name: "Slack", subtitle: "#deploys, #ops", connected: true },
  { name: "Datadog", subtitle: "Service map + alerts", connected: true },
  { name: "Linear", subtitle: "Auto-link PRs to tickets", connected: false },
  { name: "Stripe", subtitle: "Production billing", connected: false },
];

const TABS = ["Overview", "Resources", "Deploys", "Team", "Integrations", "Settings"] as const;

export function ProjectHome() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Overview");

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.avatar} aria-hidden="true">
          R
        </div>
        <div className={styles.heroInfo}>
          <div className={styles.nameRow}>
            <h1 className={styles.projectName}>roadtrip-copilot</h1>
            <span className={`${styles.statusPill} ${styles.statusOk}`}>Production · healthy</span>
          </div>
          <p className={styles.projectDesc}>
            Voice-first roadtrip planning, US + EU. 12 resources across NYC1 and AMS3. 7-day uptime
            99.94%, monthly spend on track at $284.30 against $1,012 forecast.
          </p>
          <div className={styles.metaRow}>
            <span>Owner · John Howrey</span>
            <span className={styles.metaSep}>·</span>
            <span>4 members</span>
            <span className={styles.metaSep}>·</span>
            <span>Created Jan 12, 2026</span>
            <span className={styles.metaSep}>·</span>
            <Link href="/notifications" className={styles.metaLink}>
              Open notifications →
            </Link>
          </div>
        </div>
        <div className={styles.heroActions}>
          <button type="button" className={styles.heroGhost}>
            Open repo
          </button>
          <button type="button" className={styles.heroPrimary}>
            Run deploy
          </button>
        </div>
      </header>

      <section className={styles.investigation}>
        <p className={styles.investigationKicker}>Investigation complete · 14 minutes ago</p>
        <h2 className={styles.investigationLead}>
          Production is serving traffic, but <strong>copilot-db-prod will fill in 12 days</strong> at
          the current ingest rate.
        </h2>
        <p className={styles.investigationProse}>
          Storage growth has been <strong>+ 2.4 GB / day</strong> for three weeks running. Free space
          is at 18% (28 GB of 160 GB). Provisioning a larger plan or running the archive job both
          buy you 90 days. The archive job is reversible; the resize is not.
        </p>
        <span className={styles.confidence}>
          High confidence · backed by 21 days of metrics
        </span>
      </section>

      <section className={styles.focus}>
        <p className={styles.focusLead}>
          Recommended action: <strong>run the archive batch tonight at 02:00 UTC</strong>. Estimated
          duration 38 minutes. Read-only window 6 minutes.
        </p>
        <div className={styles.focusActions}>
          <button type="button" className={styles.focusPrimary}>
            Schedule archive batch
          </button>
          <button type="button" className={styles.focusGhost}>
            Resize the database instead
          </button>
          <button type="button" className={styles.focusGhost}>
            Snooze · 7 days
          </button>
        </div>
      </section>

      <section className={styles.attention}>
        <header className={styles.attentionHead}>
          <h3 className={styles.attentionTitle}>3 things need your attention</h3>
          <span className={styles.attentionMeta}>Auto-grouped · updated 8m ago</span>
        </header>
        {ATTENTION.map((a) => (
          <div key={a.title} className={styles.attentionRow}>
            <span className={`${styles.attentionGlyph} ${styles[`tone_${a.tone}`]}`} aria-hidden="true">
              {a.glyph}
            </span>
            <div className={styles.attentionBody}>
              <p className={styles.attentionLine1}>{a.title}</p>
              <p className={styles.attentionLine2}>{a.body}</p>
            </div>
            <div className={styles.attentionActions}>
              <button type="button" className={styles.attentionPrimary}>
                {a.primary.label}
              </button>
              <button type="button" className={styles.attentionGhost}>
                {a.secondary.label}
              </button>
            </div>
          </div>
        ))}
      </section>

      <nav className={styles.tabs} aria-label="Project sections">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            className={`${styles.tab} ${tab === t ? styles.tabActive : ""}`}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </nav>

      {tab === "Overview" && (
        <div className={styles.overviewGrid}>
          <section className={styles.section}>
            <header className={styles.sectionHead}>
              <h3 className={styles.sectionTitle}>Deploy frequency</h3>
              <span className={styles.sectionMeta}>Last 7 days</span>
            </header>
            <div className={styles.deployBars}>
              {DEPLOYS.map((d) => (
                <div key={d.label} className={styles.deployCol}>
                  <div className={styles.deployBar} style={{ height: `${d.height}px` }} />
                  <span className={styles.deployLabel}>{d.label}</span>
                </div>
              ))}
            </div>
            <p className={styles.deploySummary}>
              <strong>166 deploys</strong> · 12% w/w · 0 rollbacks · median 4m 12s
            </p>
          </section>

          <section className={styles.section}>
            <header className={styles.sectionHead}>
              <h3 className={styles.sectionTitle}>Latency snapshot</h3>
              <span className={styles.sectionMeta}>Last hour · p95</span>
            </header>
            <div className={styles.latencyList}>
              {[
                { service: "production-api", p95: "112 ms", trend: "→" },
                { service: "edge-cache", p95: "8 ms", trend: "↓" },
                { service: "warehouse-etl", p95: "28 s", trend: "↑" },
                { service: "copilot-app-nyc1", p95: "940 ms", trend: "↑↑" },
              ].map((s) => (
                <div key={s.service} className={styles.latencyRow}>
                  <span className={styles.latencyService}>{s.service}</span>
                  <span className={styles.latencyValue}>{s.p95}</span>
                  <span className={styles.latencyTrend}>{s.trend}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <header className={styles.sectionHead}>
              <h3 className={styles.sectionTitle}>Team</h3>
              <Link href="/onboarding" className={styles.sectionLink}>
                Invite →
              </Link>
            </header>
            <div className={styles.teamGrid}>
              {TEAM.map((m) => (
                <div key={m.name} className={styles.teamRow}>
                  <span className={styles.teamAvatar} style={{ background: m.color }}>
                    {m.initials}
                  </span>
                  <div className={styles.teamInfo}>
                    <span className={styles.teamName}>{m.name}</span>
                    <span className={styles.teamRole}>{m.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <header className={styles.sectionHead}>
              <h3 className={styles.sectionTitle}>Integrations</h3>
              <Link href="/library" className={styles.sectionLink}>
                Browse →
              </Link>
            </header>
            <div className={styles.integrations}>
              {INTEGRATIONS.map((i) => (
                <div key={i.name} className={styles.integrationRow}>
                  <span className={styles.integrationLogo} aria-hidden="true">
                    {i.name[0]}
                  </span>
                  <div className={styles.integrationInfo}>
                    <span className={styles.integrationName}>{i.name}</span>
                    <span className={styles.integrationSub}>{i.subtitle}</span>
                  </div>
                  <span
                    className={`${styles.integrationStatus} ${
                      i.connected ? styles.connected : styles.disconnected
                    }`}
                  >
                    {i.connected ? "Connected" : "Connect"}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {tab === "Resources" && (
        <section className={styles.resourceTable}>
          <header className={styles.resourceTableHead}>
            <span>Name</span>
            <span>Type</span>
            <span>Region</span>
            <span>Health</span>
          </header>
          {RESOURCES.map((r) => (
            <div key={r.name} className={styles.resourceRow}>
              <span className={styles.resourceName}>{r.name}</span>
              <span className={styles.resourceType}>{r.type}</span>
              <span className={styles.resourceRegion}>{r.region}</span>
              <span
                className={`${styles.resourceHealth} ${
                  r.health === "Healthy" ? styles.healthOk : styles.healthAlert
                }`}
              >
                {r.health}
              </span>
            </div>
          ))}
        </section>
      )}

      {tab !== "Overview" && tab !== "Resources" && (
        <section className={styles.placeholder}>
          <p>{tab} view — comprehensive flow ports forthcoming.</p>
        </section>
      )}
    </div>
  );
}
