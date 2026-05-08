"use client";

import { Button } from "@carbon/react";
import styles from "./templates.module.scss";

export function MarketingLandingTemplate() {
  return (
    <div className={styles.template}>
      <section className={styles.marketingHero}>
        <h2 className={styles.marketingTitle}>Ship serious products. Faster.</h2>
        <p className={styles.marketingLede}>
          A complete platform for engineering teams that need uptime, observability, and one less thing
          to maintain. Five-minute setup. Production-grade defaults.
        </p>
        <div className={styles.marketingCtas}>
          <Button kind="primary">Start free</Button>
          <Button kind="tertiary">Talk to sales</Button>
        </div>
      </section>

      <section className={styles.featureGrid}>
        <article className={styles.feature}>
          <h4>Deploys in seconds</h4>
          <p>Push to main, merge to deploy. Preview environments per pull request.</p>
        </article>
        <article className={styles.feature}>
          <h4>Built-in observability</h4>
          <p>Logs, metrics, traces — no extra tools to install. SOC 2 Type II.</p>
        </article>
        <article className={styles.feature}>
          <h4>SSO &amp; RBAC</h4>
          <p>SAML, SCIM, fine-grained roles. Audit log for everything.</p>
        </article>
        <article className={styles.feature}>
          <h4>Usage-based pricing</h4>
          <p>Pay for what you use. No seat counts to manage.</p>
        </article>
      </section>
    </div>
  );
}
