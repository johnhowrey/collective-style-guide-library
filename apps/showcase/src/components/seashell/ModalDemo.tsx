"use client";

import { useState } from "react";
import styles from "./ModalDemo.module.scss";

interface ModalDemoProps {
  size: "large" | "small";
}

export function ModalDemo({ size }: ModalDemoProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <p className={styles.kicker}>Patterns · Modal {size === "large" ? "(large)" : "(small)"}</p>
        <h1 className={styles.title}>
          {size === "large" ? "Full-screen modal" : "Confirmation modal"}
        </h1>
        <p className={styles.lede}>
          {size === "large"
            ? "Used for multi-step flows, complex forms, or any task that needs full attention without losing context. Background dims; modal traps focus and is dismissable on Escape."
            : "Used for confirmations, single-action prompts, and lightweight choices. Defaults to dismissable on Escape and on backdrop click for non-destructive actions."}
        </p>
        <div className={styles.toolbar}>
          <button type="button" className={styles.primaryBtn} onClick={() => setOpen(true)}>
            Open modal
          </button>
          <button type="button" className={styles.ghostBtn} onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
      </header>

      <section className={styles.frameSection}>
        <header className={styles.frameHead}>
          <span className={styles.frameLabel}>Live preview</span>
        </header>
        <div className={`${styles.frame} ${size === "large" ? styles.frameLarge : styles.frameSmall}`}>
          <div className={styles.fakePage}>
            <div className={styles.fakeHeader} />
            <div className={styles.fakeBody}>
              <div className={styles.fakeBlock} />
              <div className={styles.fakeBlock} />
              <div className={styles.fakeBlock} />
              <div className={styles.fakeBlock} />
            </div>
          </div>
          {open && <div className={styles.backdrop} onClick={() => setOpen(false)} />}
          {open && size === "small" && (
            <div className={styles.smallModal} role="dialog" aria-modal="true">
              <header className={styles.smallHead}>
                <h2>Delete production-api?</h2>
                <button
                  type="button"
                  className={styles.iconBtn}
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>
              </header>
              <p className={styles.smallBody}>
                This permanently removes <strong>production-api</strong> and its 4 instances. The
                load balancer will fail open until DNS propagates (~30 sec). Data on attached
                volumes is unaffected.
              </p>
              <p className={styles.confirmHint}>
                Type <code>production-api</code> to confirm.
              </p>
              <input
                type="text"
                placeholder="production-api"
                className={styles.confirmInput}
                aria-label="Confirm by typing the resource name"
              />
              <footer className={styles.smallActions}>
                <button type="button" className={styles.ghostBtn} onClick={() => setOpen(false)}>
                  Cancel
                </button>
                <button type="button" className={styles.dangerBtn}>
                  Delete production-api
                </button>
              </footer>
            </div>
          )}
          {open && size === "large" && (
            <div className={styles.largeModal} role="dialog" aria-modal="true">
              <header className={styles.largeHead}>
                <div>
                  <p className={styles.largeKicker}>Migration assistant</p>
                  <h2>Move main-postgres to a larger plan</h2>
                </div>
                <button
                  type="button"
                  className={styles.iconBtn}
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                >
                  ✕
                </button>
              </header>
              <div className={styles.largeBody}>
                <section>
                  <h3 className={styles.subHead}>What will happen</h3>
                  <ol className={styles.timeline}>
                    <li>
                      <span className={styles.timelineDot} />
                      <div>
                        <strong>Now</strong> — provision the larger instance in NYC1
                        <span className={styles.timelineMeta}>~ 2 minutes</span>
                      </div>
                    </li>
                    <li>
                      <span className={styles.timelineDot} />
                      <div>
                        <strong>+ 2m</strong> — replicate data continuously until catch-up
                        <span className={styles.timelineMeta}>~ 14 minutes for 240 GB</span>
                      </div>
                    </li>
                    <li>
                      <span className={styles.timelineDot} />
                      <div>
                        <strong>+ 16m</strong> — promote new instance, fail over (read-only window
                        ≈ 6 sec)
                        <span className={styles.timelineMeta}>App reconnects automatically</span>
                      </div>
                    </li>
                    <li>
                      <span className={styles.timelineDot} />
                      <div>
                        <strong>+ 17m</strong> — old instance retained for 24h, then released
                        <span className={styles.timelineMeta}>Reversible during this window</span>
                      </div>
                    </li>
                  </ol>
                </section>

                <section>
                  <h3 className={styles.subHead}>Plan change</h3>
                  <div className={styles.diff}>
                    <div className={styles.diffSide}>
                      <span className={styles.diffLabel}>Current</span>
                      <span className={styles.diffName}>General Purpose · 2/8</span>
                      <span className={styles.diffSpec}>2 vCPU · 8 GB · 60 GB SSD</span>
                      <span className={styles.diffPrice}>$90 / mo</span>
                    </div>
                    <span className={styles.diffArrow} aria-hidden="true">
                      →
                    </span>
                    <div className={styles.diffSide}>
                      <span className={styles.diffLabel}>New</span>
                      <span className={styles.diffName}>General Purpose · 4/16</span>
                      <span className={styles.diffSpec}>4 vCPU · 16 GB · 120 GB SSD</span>
                      <span className={styles.diffPrice}>$180 / mo</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className={styles.subHead}>Confirmations</h3>
                  <label className={styles.checkRow}>
                    <input type="checkbox" defaultChecked />
                    <span>I understand the read-only window during fail-over.</span>
                  </label>
                  <label className={styles.checkRow}>
                    <input type="checkbox" defaultChecked />
                    <span>The team Slack will receive a heads-up when the migration starts.</span>
                  </label>
                  <label className={styles.checkRow}>
                    <input type="checkbox" />
                    <span>Send an email to the on-call rotation as well.</span>
                  </label>
                </section>
              </div>

              <footer className={styles.largeActions}>
                <button type="button" className={styles.ghostBtn} onClick={() => setOpen(false)}>
                  Cancel
                </button>
                <button type="button" className={styles.primaryBtn}>
                  Schedule migration · ~ 17 min
                </button>
              </footer>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
