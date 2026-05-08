"use client";

import {
  Button,
  TextInput,
  Toggle,
  Dropdown,
  RadioButtonGroup,
  RadioButton,
} from "@carbon/react";
import styles from "./templates.module.scss";

export function SettingsTemplate() {
  return (
    <div className={styles.template}>
      <header className={styles.templateHeader}>
        <div>
          <p className={styles.kicker}>Workspace · settings</p>
          <h2 className={styles.title}>Settings</h2>
        </div>
      </header>

      <div className={styles.settingsLayout}>
        <nav className={styles.settingsNav}>
          <a href="#general" className={styles.active}>
            General
          </a>
          <a href="#access">Access & permissions</a>
          <a href="#billing">Billing</a>
          <a href="#integrations">Integrations</a>
          <a href="#api">API keys</a>
          <a href="#audit">Audit log</a>
          <a href="#danger">Danger zone</a>
        </nav>

        <div className={styles.settingsContent}>
          <section className={styles.settingsSection} id="general">
            <h3>General</h3>
            <div style={{ display: "grid", gap: 16, maxWidth: 480 }}>
              <TextInput id="ws-name" labelText="Workspace name" defaultValue="Acme Inc." />
              <TextInput id="ws-slug" labelText="URL slug" defaultValue="acme" />
              <Dropdown
                id="ws-region"
                titleText="Default region"
                label="us-east-1"
                items={["us-east-1", "us-west-2", "eu-west-2", "ap-northeast-1"]}
              />
            </div>
          </section>

          <section className={styles.settingsSection}>
            <h3>Privacy & data</h3>
            <div style={{ display: "grid", gap: 16, maxWidth: 480 }}>
              <Toggle labelText="Allow analytics" id="analytics" defaultToggled />
              <Toggle labelText="Anonymize IPs" id="anon" defaultToggled />
              <RadioButtonGroup
                name="retention"
                defaultSelected="90"
                legendText="Log retention"
                orientation="vertical"
              >
                <RadioButton id="r30" labelText="30 days" value="30" />
                <RadioButton id="r90" labelText="90 days" value="90" />
                <RadioButton id="r365" labelText="365 days" value="365" />
              </RadioButtonGroup>
            </div>
          </section>

          <div style={{ display: "flex", gap: 8 }}>
            <Button kind="primary">Save changes</Button>
            <Button kind="ghost">Discard</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
