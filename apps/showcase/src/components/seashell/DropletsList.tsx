"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./DropletsList.module.scss";

interface Droplet {
  name: string;
  type: string;
  size: string;
  region: string;
  ipv4: string;
  status: "Healthy" | "Degraded" | "Down" | "Building";
  cpu: number;
  memory: number;
  created: string;
  tags: string[];
}

const DROPLETS: Droplet[] = [
  { name: "web-prod-1", type: "Standard Droplet", size: "4 vCPU / 8 GB", region: "NYC1", ipv4: "157.230.18.114", status: "Healthy", cpu: 38, memory: 62, created: "Jan 12, 2026", tags: ["production", "web"] },
  { name: "web-prod-2", type: "Standard Droplet", size: "4 vCPU / 8 GB", region: "NYC1", ipv4: "157.230.18.115", status: "Healthy", cpu: 41, memory: 60, created: "Jan 12, 2026", tags: ["production", "web"] },
  { name: "api-server", type: "CPU-Optimized", size: "8 vCPU / 16 GB", region: "SFO3", ipv4: "164.92.74.201", status: "Degraded", cpu: 89, memory: 78, created: "Dec 18, 2025", tags: ["production", "api"] },
  { name: "staging-app", type: "Basic Droplet", size: "2 vCPU / 4 GB", region: "NYC3", ipv4: "165.227.93.44", status: "Healthy", cpu: 12, memory: 28, created: "Feb 02, 2026", tags: ["staging"] },
  { name: "worker-node-01", type: "Memory-Optimized", size: "4 vCPU / 8 GB", region: "AMS3", ipv4: "138.197.142.18", status: "Healthy", cpu: 22, memory: 71, created: "Nov 04, 2025", tags: ["production", "worker"] },
  { name: "bastion-host", type: "Basic Droplet", size: "1 vCPU / 1 GB", region: "NYC1", ipv4: "159.65.148.92", status: "Healthy", cpu: 3, memory: 18, created: "Aug 22, 2025", tags: ["security", "ops"] },
  { name: "ml-training-gpu-1", type: "GPU H100", size: "20 vCPU / 240 GB", region: "NYC2", ipv4: "143.198.241.105", status: "Building", cpu: 0, memory: 0, created: "5m ago", tags: ["ml", "gpu"] },
  { name: "inference-node-a", type: "GPU A100", size: "10 vCPU / 80 GB", region: "SFO3", ipv4: "104.131.211.33", status: "Healthy", cpu: 64, memory: 52, created: "Mar 14, 2026", tags: ["ml", "production"] },
  { name: "web-dev-1", type: "Basic Droplet", size: "2 vCPU / 4 GB", region: "NYC1", ipv4: "143.110.232.18", status: "Healthy", cpu: 4, memory: 22, created: "Sep 10, 2025", tags: ["dev"] },
  { name: "web-dev-2", type: "Basic Droplet", size: "2 vCPU / 4 GB", region: "NYC1", ipv4: "143.110.232.19", status: "Healthy", cpu: 4, memory: 19, created: "Sep 10, 2025", tags: ["dev"] },
  { name: "etl-warehouse", type: "Memory-Optimized", size: "8 vCPU / 64 GB", region: "EU-WEST-2", ipv4: "188.166.55.71", status: "Down", cpu: 0, memory: 0, created: "Oct 28, 2025", tags: ["data", "etl"] },
  { name: "media-encoder", type: "CPU-Optimized", size: "16 vCPU / 32 GB", region: "SFO3", ipv4: "104.236.198.11", status: "Healthy", cpu: 71, memory: 48, created: "Feb 18, 2026", tags: ["media"] },
];

const TAG_FILTERS = ["All", "production", "staging", "dev", "ml", "ops", "data", "media"];
const REGIONS = ["All regions", "NYC1", "NYC2", "NYC3", "SFO3", "AMS3", "EU-WEST-2"];

function StatusPill({ status }: { status: Droplet["status"] }) {
  const tone =
    status === "Healthy"
      ? "ok"
      : status === "Degraded"
        ? "warn"
        : status === "Down"
          ? "danger"
          : "info";
  return <span className={`${styles.statusPill} ${styles[`tone_${tone}`]}`}>{status}</span>;
}

function UsageBar({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.usage}>
      <span className={styles.usageLabel}>
        {label} <span className={styles.usageValue}>{value}%</span>
      </span>
      <div className={styles.usageTrack}>
        <div
          className={styles.usageFill}
          style={{
            width: `${value}%`,
            background:
              value > 80 ? "#ef4444" : value > 60 ? "#f59e0b" : "var(--collective-accent-primary, var(--cds-link-primary))",
          }}
        />
      </div>
    </div>
  );
}

export function DropletsList() {
  const [tag, setTag] = useState("All");
  const [region, setRegion] = useState("All regions");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return DROPLETS.filter((d) => {
      if (tag !== "All" && !d.tags.includes(tag)) return false;
      if (region !== "All regions" && d.region !== region) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        if (
          !d.name.toLowerCase().includes(q) &&
          !d.ipv4.includes(q) &&
          !d.type.toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [tag, region, query]);

  const healthCounts = useMemo(() => {
    const c = { Healthy: 0, Degraded: 0, Down: 0, Building: 0 };
    for (const d of DROPLETS) c[d.status]++;
    return c;
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <div>
          <p className={styles.kicker}>Compute · Droplets</p>
          <h1 className={styles.title}>Droplets</h1>
          <p className={styles.lede}>
            {DROPLETS.length} droplets across {new Set(DROPLETS.map((d) => d.region)).size} regions ·
            <span className={styles.healthOk}> {healthCounts.Healthy} healthy</span> ·
            <span className={styles.healthWarn}> {healthCounts.Degraded} degraded</span> ·
            <span className={styles.healthDanger}> {healthCounts.Down} down</span> ·
            <span className={styles.healthInfo}> {healthCounts.Building} building</span>
          </p>
        </div>
        <div className={styles.headActions}>
          <button type="button" className={styles.ghostBtn}>
            Import
          </button>
          <Link href="/database/create" className={styles.primaryBtn}>
            + Create Droplet
          </Link>
        </div>
      </header>

      <div className={styles.toolbar}>
        <div className={styles.search}>
          <span aria-hidden="true">⌕</span>
          <input
            type="text"
            placeholder="Search by name, IP, or type…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search droplets"
          />
        </div>
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className={styles.select}
          aria-label="Region filter"
        >
          {REGIONS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <div className={styles.tagFilters}>
          {TAG_FILTERS.map((t) => (
            <button
              key={t}
              type="button"
              className={`${styles.tagBtn} ${tag === t ? styles.tagActive : ""}`}
              onClick={() => setTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span>Name</span>
          <span>Type / Size</span>
          <span>Region · IPv4</span>
          <span>CPU / Memory</span>
          <span>Status</span>
          <span>Created</span>
        </div>
        {filtered.length === 0 ? (
          <div className={styles.empty}>No droplets match those filters.</div>
        ) : (
          filtered.map((d) => (
            <div key={d.name} className={styles.row}>
              <div className={styles.cellName}>
                <Link href={`/project`} className={styles.nameLink}>
                  {d.name}
                </Link>
                <div className={styles.tags}>
                  {d.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.cellMono}>
                <span className={styles.cellPrimary}>{d.type}</span>
                <span className={styles.cellSecondary}>{d.size}</span>
              </div>
              <div className={styles.cellMono}>
                <span className={styles.cellPrimary}>{d.region}</span>
                <span className={styles.cellSecondary}>{d.ipv4}</span>
              </div>
              <div className={styles.cellUsage}>
                <UsageBar value={d.cpu} label="CPU" />
                <UsageBar value={d.memory} label="Mem" />
              </div>
              <div>
                <StatusPill status={d.status} />
              </div>
              <div className={styles.cellMono}>
                <span className={styles.cellSecondary}>{d.created}</span>
              </div>
            </div>
          ))
        )}
      </div>

      <footer className={styles.footer}>
        <span className={styles.footerMeta}>
          Showing {filtered.length} of {DROPLETS.length} droplets
        </span>
        <div className={styles.pagination}>
          <button type="button" className={styles.pageBtn} disabled>
            ←
          </button>
          <button type="button" className={`${styles.pageBtn} ${styles.pageActive}`}>
            1
          </button>
          <button type="button" className={styles.pageBtn}>
            2
          </button>
          <button type="button" className={styles.pageBtn}>
            3
          </button>
          <button type="button" className={styles.pageBtn}>
            →
          </button>
        </div>
      </footer>
    </div>
  );
}
