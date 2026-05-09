"use client";

import { useState } from "react";
import styles from "./DatabaseCreate.module.scss";

const ENGINES = [
  { id: "postgres", name: "PostgreSQL", version: "16", icon: "P", desc: "Relational. ACID. JSON. The default for most workloads.", recommended: true },
  { id: "mysql", name: "MySQL", version: "8.0", icon: "M", desc: "Relational. Mature. Familiar." },
  { id: "redis", name: "Redis", version: "7", icon: "R", desc: "In-memory key/value. Caching, queues, ephemeral data." },
  { id: "mongo", name: "MongoDB", version: "7.0", icon: "G", desc: "Document database. Flexible schema. Aggregation pipelines." },
  { id: "kafka", name: "Kafka", version: "3.7", icon: "K", desc: "Distributed event streaming. Durable, partitioned logs." },
  { id: "opensearch", name: "OpenSearch", version: "2.13", icon: "O", desc: "Full-text and vector search. Analytics over text." },
];

const REGIONS = [
  { id: "nyc1", name: "New York 1", continent: "Americas", latency: "12 ms" },
  { id: "nyc3", name: "New York 3", continent: "Americas", latency: "14 ms" },
  { id: "sfo3", name: "San Francisco 3", continent: "Americas", latency: "68 ms" },
  { id: "ams3", name: "Amsterdam 3", continent: "Europe", latency: "84 ms" },
  { id: "lon1", name: "London 1", continent: "Europe", latency: "92 ms" },
  { id: "fra1", name: "Frankfurt 1", continent: "Europe", latency: "96 ms" },
  { id: "sgp1", name: "Singapore 1", continent: "Asia Pacific", latency: "232 ms" },
  { id: "tor1", name: "Toronto 1", continent: "Americas", latency: "22 ms" },
];

const PLANS = [
  { id: "basic-1", name: "Basic", cpu: 1, mem: 1, storage: 10, price: 15, ha: false },
  { id: "basic-2", name: "Basic", cpu: 2, mem: 2, storage: 25, price: 30, ha: false },
  { id: "general-2", name: "General Purpose", cpu: 2, mem: 8, storage: 60, price: 90, ha: true, recommended: true },
  { id: "general-4", name: "General Purpose", cpu: 4, mem: 16, storage: 120, price: 180, ha: true },
  { id: "memory-4", name: "Memory-Optimized", cpu: 4, mem: 32, storage: 240, price: 330, ha: true },
  { id: "storage-8", name: "Storage-Optimized", cpu: 8, mem: 64, storage: 1000, price: 720, ha: true },
];

export function DatabaseCreate() {
  const [engine, setEngine] = useState(ENGINES[0]!.id);
  const [region, setRegion] = useState("nyc1");
  const [plan, setPlan] = useState("general-2");
  const [name, setName] = useState("copilot-db-staging");
  const [vpc, setVpc] = useState("prod-vpc");

  const activeEngine = ENGINES.find((e) => e.id === engine)!;
  const activeRegion = REGIONS.find((r) => r.id === region)!;
  const activePlan = PLANS.find((p) => p.id === plan)!;

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <p className={styles.kicker}>Data Services · Create Database</p>
        <h1 className={styles.title}>Create a managed database</h1>
        <p className={styles.lede}>
          Provision a database with daily backups, automated patching, and one-click read replicas.
          Most workloads complete in under 4 minutes.
        </p>
      </header>

      <div className={styles.steps}>
        <div className={styles.stepCircle} data-active="true">
          1
        </div>
        <span className={styles.stepLine} />
        <div className={styles.stepCircle} data-active="true">
          2
        </div>
        <span className={styles.stepLine} />
        <div className={styles.stepCircle} data-active="true">
          3
        </div>
        <span className={styles.stepLine} />
        <div className={styles.stepCircle}>4</div>
      </div>

      <section className={styles.section}>
        <header className={styles.sectionHead}>
          <span className={styles.sectionStep}>Step 1</span>
          <h2 className={styles.sectionTitle}>Choose an engine</h2>
        </header>
        <div className={styles.engineGrid}>
          {ENGINES.map((e) => (
            <button
              key={e.id}
              type="button"
              className={`${styles.engineCard} ${engine === e.id ? styles.cardActive : ""}`}
              onClick={() => setEngine(e.id)}
            >
              <span className={styles.engineIcon}>{e.icon}</span>
              <div className={styles.engineBody}>
                <div className={styles.engineNameRow}>
                  <span className={styles.engineName}>{e.name}</span>
                  <span className={styles.engineVersion}>v{e.version}</span>
                  {e.recommended && <span className={styles.recommendedTag}>Recommended</span>}
                </div>
                <p className={styles.engineDesc}>{e.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHead}>
          <span className={styles.sectionStep}>Step 2</span>
          <h2 className={styles.sectionTitle}>Pick a region</h2>
        </header>
        <p className={styles.sectionLede}>
          Latency shown is from your last login location ({REGIONS[0]!.continent}). Regions in your
          existing VPC are preferred to keep traffic private.
        </p>
        <div className={styles.regionGrid}>
          {REGIONS.map((r) => (
            <button
              key={r.id}
              type="button"
              className={`${styles.regionCard} ${region === r.id ? styles.cardActive : ""}`}
              onClick={() => setRegion(r.id)}
            >
              <span className={styles.regionContinent}>{r.continent}</span>
              <span className={styles.regionName}>{r.name}</span>
              <span className={styles.regionLatency}>{r.latency}</span>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHead}>
          <span className={styles.sectionStep}>Step 3</span>
          <h2 className={styles.sectionTitle}>Choose a plan</h2>
        </header>
        <div className={styles.planTable}>
          <div className={styles.planHead}>
            <span>Plan</span>
            <span>vCPU</span>
            <span>Memory</span>
            <span>Storage</span>
            <span>HA</span>
            <span>Monthly</span>
            <span></span>
          </div>
          {PLANS.map((p) => (
            <label
              key={p.id}
              className={`${styles.planRow} ${plan === p.id ? styles.rowActive : ""}`}
            >
              <input
                type="radio"
                name="plan"
                value={p.id}
                checked={plan === p.id}
                onChange={() => setPlan(p.id)}
                className={styles.planRadio}
              />
              <span className={styles.planName}>
                {p.name}
                {p.recommended && <span className={styles.recommendedTag}>Recommended</span>}
              </span>
              <span className={styles.planMono}>{p.cpu}</span>
              <span className={styles.planMono}>{p.mem} GB</span>
              <span className={styles.planMono}>{p.storage} GB SSD</span>
              <span className={styles.planMono}>{p.ha ? "Yes" : "—"}</span>
              <span className={styles.planPrice}>${p.price}</span>
              <span className={styles.planRadioVisual} aria-hidden="true">
                <span className={styles.planRadioInner} />
              </span>
            </label>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <header className={styles.sectionHead}>
          <span className={styles.sectionStep}>Step 4</span>
          <h2 className={styles.sectionTitle}>Name and finalize</h2>
        </header>
        <div className={styles.finalGrid}>
          <label className={styles.fieldLabel}>
            <span>Cluster name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
              placeholder="e.g. copilot-db-prod"
            />
            <span className={styles.fieldHelp}>Lowercase, hyphens. 3–63 chars.</span>
          </label>
          <label className={styles.fieldLabel}>
            <span>VPC</span>
            <select
              value={vpc}
              onChange={(e) => setVpc(e.target.value)}
              className={styles.input}
            >
              <option value="prod-vpc">prod-vpc · 10.10.0.0/16</option>
              <option value="staging-vpc">staging-vpc · 10.20.0.0/16</option>
              <option value="default">Default · public</option>
            </select>
          </label>
        </div>

        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>Summary</h3>
          <dl className={styles.summaryList}>
            <div>
              <dt>Engine</dt>
              <dd>
                {activeEngine.name} v{activeEngine.version}
              </dd>
            </div>
            <div>
              <dt>Region</dt>
              <dd>
                {activeRegion.name} <span className={styles.summaryDim}>{activeRegion.continent}</span>
              </dd>
            </div>
            <div>
              <dt>Plan</dt>
              <dd>
                {activePlan.name} · {activePlan.cpu} vCPU / {activePlan.mem} GB / {activePlan.storage} GB
              </dd>
            </div>
            <div>
              <dt>HA</dt>
              <dd>{activePlan.ha ? "Standby + automatic failover" : "Single node"}</dd>
            </div>
            <div>
              <dt>Backups</dt>
              <dd>Daily snapshots · 7-day retention · included</dd>
            </div>
            <div>
              <dt>Network</dt>
              <dd>{vpc}</dd>
            </div>
            <div>
              <dt>Estimated monthly</dt>
              <dd className={styles.summaryStrong}>${activePlan.price}.00</dd>
            </div>
          </dl>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.ghostBtn}>
            Save as template
          </button>
          <button type="button" className={styles.primaryBtn}>
            Create database — ${activePlan.price}/mo
          </button>
        </div>
      </section>
    </div>
  );
}
