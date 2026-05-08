"use client";

import { Button, Tile } from "@carbon/react";
import styles from "./templates.module.scss";

const TIERS = [
  {
    tier: "Hobby",
    amount: "$0",
    unit: "free forever",
    features: ["1 project", "Community support", "100k requests/mo"],
    cta: "Get started",
    primary: false,
  },
  {
    tier: "Pro",
    amount: "$29",
    unit: "per workspace · monthly",
    features: ["Unlimited projects", "SSO", "5M requests/mo", "Priority support"],
    cta: "Start 14-day trial",
    primary: true,
  },
  {
    tier: "Enterprise",
    amount: "Custom",
    unit: "annual contract",
    features: ["SAML + SCIM", "Dedicated infra", "99.99% SLA", "Designated CSM"],
    cta: "Talk to sales",
    primary: false,
  },
];

export function PricingTemplate() {
  return (
    <div className={styles.template}>
      <header className={styles.templateHeader}>
        <div>
          <p className={styles.kicker}>Pricing · all tiers</p>
          <h2 className={styles.title}>Pay for what you use.</h2>
        </div>
      </header>

      <div className={styles.pricingGrid}>
        {TIERS.map((t) => (
          <Tile key={t.tier} className={styles.priceCard}>
            <p className={styles.priceTier}>{t.tier}</p>
            <p className={styles.priceAmount}>{t.amount}</p>
            <p className={styles.priceUnit}>{t.unit}</p>
            <ul className={styles.priceFeatures}>
              {t.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Button kind={t.primary ? "primary" : "tertiary"}>{t.cta}</Button>
          </Tile>
        ))}
      </div>
    </div>
  );
}
