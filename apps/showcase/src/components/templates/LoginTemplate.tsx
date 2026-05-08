"use client";

import { Button, TextInput, Tile } from "@carbon/react";
import styles from "./templates.module.scss";

export function LoginTemplate() {
  return (
    <div className={styles.template}>
      <div className={styles.login}>
        <Tile className={styles.loginCard}>
          <h2 className={styles.loginTitle}>Sign in</h2>
          <form className={styles.loginForm}>
            <TextInput id="email" type="email" labelText="Email" placeholder="you@company.com" />
            <TextInput id="password" type="password" labelText="Password" />
            <Button kind="primary">Sign in</Button>
            <Button kind="tertiary">Continue with SSO</Button>
          </form>
          <div className={styles.loginFooter}>
            New here? <a href="#">Create an account</a>
          </div>
        </Tile>
      </div>
    </div>
  );
}
