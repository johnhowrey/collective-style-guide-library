"use client";

import { useState } from "react";
import styles from "./Onboarding.module.scss";

interface Step {
  id: string;
  num: number;
  label: string;
  duration: string;
  done: boolean;
}

const STEPS: Step[] = [
  { id: "verify", num: 1, label: "Verify your email", duration: "30 sec", done: true },
  { id: "team", num: 2, label: "Tell us about your team", duration: "1 min", done: true },
  { id: "workspace", num: 3, label: "Create your first workspace", duration: "30 sec", done: false },
  { id: "deploy", num: 4, label: "Deploy your first project", duration: "3 min", done: false },
  { id: "billing", num: 5, label: "Set up billing alerts", duration: "1 min", done: false },
  { id: "invite", num: 6, label: "Invite teammates", duration: "1 min", done: false },
];

const PROJECT_TEMPLATES = [
  { id: "next-app", label: "Next.js App", desc: "Full-stack React app with edge runtime", icon: "▲", time: "2 min" },
  { id: "node-api", label: "Node.js API", desc: "Express server on App Platform", icon: "{ }", time: "3 min" },
  { id: "static", label: "Static site", desc: "Astro / Hugo / 11ty / plain HTML", icon: "/>", time: "1 min" },
  { id: "python", label: "Python service", desc: "FastAPI / Flask / Django", icon: "py", time: "3 min" },
  { id: "go", label: "Go service", desc: "HTTP server with go.mod", icon: "Go", time: "2 min" },
  { id: "blank", label: "Empty workspace", desc: "Configure later — no template", icon: "—", time: "—" },
];

export function Onboarding() {
  const [activeStep, setActiveStep] = useState("workspace");
  const [template, setTemplate] = useState("next-app");
  const [workspaceName, setWorkspaceName] = useState("acme-prod");

  const doneCount = STEPS.filter((s) => s.done).length;
  const pct = (doneCount / STEPS.length) * 100;

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <p className={styles.kicker}>Welcome to DigitalOcean</p>
        <h1 className={styles.title}>Get up and running in under 10 minutes</h1>
        <p className={styles.lede}>
          We&rsquo;ll walk through six steps. You can skip anything that doesn&rsquo;t apply and come
          back later — your progress saves automatically.
        </p>

        <div className={styles.progress}>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${pct}%` }} />
          </div>
          <span className={styles.progressLabel}>
            <strong>{doneCount}</strong> of {STEPS.length} steps complete
          </span>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.steps}>
          {STEPS.map((step) => {
            const isActive = step.id === activeStep;
            return (
              <button
                key={step.id}
                type="button"
                className={`${styles.stepRow} ${isActive ? styles.stepActive : ""}`}
                onClick={() => setActiveStep(step.id)}
              >
                <span
                  className={`${styles.stepNum} ${
                    step.done
                      ? styles.stepDone
                      : isActive
                        ? styles.stepCurrent
                        : ""
                  }`}
                >
                  {step.done ? "✓" : step.num}
                </span>
                <div className={styles.stepText}>
                  <span className={styles.stepLabel}>{step.label}</span>
                  <span className={styles.stepDuration}>{step.duration}</span>
                </div>
              </button>
            );
          })}
        </aside>

        <main className={styles.body}>
          <header className={styles.bodyHead}>
            <span className={styles.stepBadge}>Step 3 of 6 · 30 seconds</span>
            <h2 className={styles.bodyTitle}>Create your first workspace</h2>
            <p className={styles.bodyLede}>
              Workspaces group projects, teammates, and billing. You can rename and reorganize them
              any time. Most teams start with one per environment (production, staging) or per
              client.
            </p>
          </header>

          <div className={styles.fieldGroup}>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Workspace name</span>
              <input
                type="text"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                className={styles.input}
                placeholder="e.g. acme-prod"
              />
              <span className={styles.fieldHelp}>
                Lowercase letters, numbers, and hyphens. Used in URLs and CLI commands.
              </span>
            </label>
          </div>

          <h3 className={styles.subTitle}>Start with a project template</h3>
          <p className={styles.subLede}>
            Pick a starter — we&rsquo;ll generate a sample project so you can see deploys end-to-end.
            All templates are MIT-licensed and you can swap them later.
          </p>

          <div className={styles.templateGrid}>
            {PROJECT_TEMPLATES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`${styles.templateCard} ${template === t.id ? styles.cardActive : ""}`}
                onClick={() => setTemplate(t.id)}
              >
                <span className={styles.templateIcon}>{t.icon}</span>
                <div className={styles.templateBody}>
                  <span className={styles.templateLabel}>{t.label}</span>
                  <span className={styles.templateDesc}>{t.desc}</span>
                </div>
                <span className={styles.templateTime}>{t.time}</span>
              </button>
            ))}
          </div>

          <div className={styles.tipBox}>
            <span className={styles.tipBadge}>Tip</span>
            <p className={styles.tipText}>
              <strong>Bring your own repo?</strong> You can connect a GitHub or GitLab repository
              instead of using a template. We&rsquo;ll detect the framework and configure build
              settings automatically.
            </p>
          </div>

          <footer className={styles.bodyActions}>
            <button type="button" className={styles.ghostBtn}>
              Skip for now
            </button>
            <button type="button" className={styles.primaryBtn}>
              Create workspace and continue →
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}
