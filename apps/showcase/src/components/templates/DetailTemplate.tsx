"use client";

import { Button, Tag, Tabs, TabList, Tab, TabPanels, TabPanel } from "@carbon/react";
import styles from "./templates.module.scss";

export function DetailTemplate() {
  return (
    <div className={styles.template}>
      <header className={styles.templateHeader}>
        <div>
          <p className={styles.kicker}>services / production-api</p>
          <h2 className={styles.title}>production-api</h2>
        </div>
        <div className={styles.headerActions}>
          <Button kind="secondary">View logs</Button>
          <Button kind="primary">Deploy</Button>
        </div>
      </header>

      <div className={styles.detailHero}>
        <div className={styles.detailMeta}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <Tag type="green">Healthy</Tag>
            <Tag type="blue">us-east-1</Tag>
            <Tag>v 4.12.1</Tag>
          </div>
          <p style={{ margin: 0, color: "var(--cds-text-secondary)", fontSize: 14 }}>
            Last deploy 2h ago by alex.r · build #4128 · 1,832 lines changed
          </p>
          <dl className={styles.detailFacts}>
            <div>
              <dt>Uptime (30d)</dt>
              <dd>99.98%</dd>
            </div>
            <div>
              <dt>p50 latency</dt>
              <dd>32ms</dd>
            </div>
            <div>
              <dt>p95 latency</dt>
              <dd>114ms</dd>
            </div>
            <div>
              <dt>Requests/s</dt>
              <dd>1,287</dd>
            </div>
            <div>
              <dt>Error rate</dt>
              <dd>0.02%</dd>
            </div>
          </dl>
        </div>
      </div>

      <Tabs>
        <TabList aria-label="Service detail tabs">
          <Tab>Overview</Tab>
          <Tab>Deploys</Tab>
          <Tab>Logs</Tab>
          <Tab>Metrics</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p style={{ color: "var(--cds-text-secondary)", fontSize: 14 }}>
              Service is healthy across all 4 instances. No incidents in the last 30 days.
            </p>
          </TabPanel>
          <TabPanel>Deploy history.</TabPanel>
          <TabPanel>Live log tail.</TabPanel>
          <TabPanel>Latency, throughput, errors.</TabPanel>
          <TabPanel>Runtime, scaling, access.</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
