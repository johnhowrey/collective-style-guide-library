"use client";

import { useState } from "react";
import styles from "./Playground.module.scss";

const MODELS = [
  { id: "llama-3.3-70b", label: "Llama 3.3 70B Instruct", price: "$0.40 / 1M tok", latency: "p95 130 ms", tag: "open-source" },
  { id: "mistral-large", label: "Mistral Large", price: "$2.00 / 1M tok", latency: "p95 210 ms", tag: "frontier" },
  { id: "qwen-2.5-72b", label: "Qwen 2.5 72B", price: "$0.58 / 1M tok", latency: "p95 150 ms", tag: "open-source" },
  { id: "deepseek-v3", label: "DeepSeek V3", price: "$0.27 / 1M tok", latency: "p95 180 ms", tag: "open-source" },
  { id: "claude-haiku-4-5", label: "Claude Haiku 4.5", price: "$1.00 / 1M tok", latency: "p95 95 ms", tag: "frontier" },
];

const RESPONSE = `The roadtrip-copilot architecture decomposes into four tiers that should map cleanly to your existing services:

1. **Trip planner** (existing /api/trips) — owns the route graph and POI ranking. Stays as-is.
2. **Voice gateway** (new) — handles ASR streaming, intent extraction, and barge-in. This is the only piece that must run at the edge for latency.
3. **Inference router** (new) — picks Llama 3.3 70B for in-trip turn-by-turn (cheap, fast) and Claude Haiku 4.5 for trip planning (better reasoning, batch latency tolerable).
4. **State store** (extends existing redis-prod) — session state, partial transcripts, in-flight tool calls.

Recommended path: ship the inference router first behind a feature flag, route 5% of traffic to Llama 3.3 70B as a shadow, compare against your current GPT-4o-mini baseline. Llama 3.3 70B will likely match quality at 4× lower cost based on the trip-planning eval set you shared last quarter.`;

export function Playground() {
  const [model, setModel] = useState(MODELS[0]!.id);
  const [system, setSystem] = useState("You are a helpful AI assistant for cloud infrastructure.");
  const [prompt, setPrompt] = useState(
    "Sketch the architecture for a voice-first roadtrip companion with real-time turn-by-turn LLM responses, given my existing services.",
  );
  const [temp, setTemp] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(1024);

  const active = MODELS.find((m) => m.id === model)!;

  return (
    <div className={styles.page}>
      <header className={styles.head}>
        <div>
          <p className={styles.kicker}>Inference Hub · Playground</p>
          <h1 className={styles.title}>Inference playground</h1>
          <p className={styles.lede}>
            Test prompts against any model in your account. Streaming preview · token-level latency
            tracking · per-call cost.
          </p>
        </div>
        <div className={styles.headActions}>
          <button type="button" className={styles.ghostBtn}>
            Save preset
          </button>
          <button type="button" className={styles.primaryBtn}>
            Deploy as endpoint
          </button>
        </div>
      </header>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <section className={styles.panel}>
            <h3 className={styles.panelTitle}>Model</h3>
            <div className={styles.modelList}>
              {MODELS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  className={`${styles.modelRow} ${model === m.id ? styles.modelActive : ""}`}
                  onClick={() => setModel(m.id)}
                >
                  <div className={styles.modelHead}>
                    <span className={styles.modelName}>{m.label}</span>
                    <span className={`${styles.modelTag} ${styles[`tag_${m.tag.replace("-", "_")}`]}`}>
                      {m.tag}
                    </span>
                  </div>
                  <div className={styles.modelMeta}>
                    <span>{m.price}</span>
                    <span>·</span>
                    <span>{m.latency}</span>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <section className={styles.panel}>
            <h3 className={styles.panelTitle}>Parameters</h3>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>
                Temperature <span className={styles.fieldValue}>{temp.toFixed(2)}</span>
              </span>
              <input
                type="range"
                min={0}
                max={2}
                step={0.05}
                value={temp}
                onChange={(e) => setTemp(parseFloat(e.target.value))}
                className={styles.slider}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>
                Max tokens <span className={styles.fieldValue}>{maxTokens}</span>
              </span>
              <input
                type="range"
                min={128}
                max={4096}
                step={128}
                value={maxTokens}
                onChange={(e) => setMaxTokens(parseInt(e.target.value))}
                className={styles.slider}
              />
            </label>
            <label className={styles.field}>
              <span className={styles.fieldLabel}>Top-p</span>
              <input type="range" min={0} max={1} step={0.05} defaultValue={0.95} className={styles.slider} />
            </label>
          </section>

          <section className={styles.panel}>
            <h3 className={styles.panelTitle}>System prompt</h3>
            <textarea
              value={system}
              onChange={(e) => setSystem(e.target.value)}
              className={styles.systemField}
              rows={5}
            />
          </section>
        </aside>

        <main className={styles.main}>
          <section className={styles.promptArea}>
            <header className={styles.promptHead}>
              <span className={styles.promptLabel}>Prompt</span>
              <span className={styles.promptMeta}>{prompt.length} chars</span>
            </header>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className={styles.promptField}
              rows={4}
            />
            <div className={styles.promptActions}>
              <button type="button" className={styles.runBtn}>
                Run · ⌘ ↵
              </button>
              <span className={styles.promptHint}>
                {active.label} · temperature {temp.toFixed(2)} · max {maxTokens} tokens
              </span>
            </div>
          </section>

          <section className={styles.response}>
            <header className={styles.responseHead}>
              <span className={styles.responseLabel}>Response</span>
              <div className={styles.responseStats}>
                <span>823 ms ttft</span>
                <span>·</span>
                <span>1,142 tok</span>
                <span>·</span>
                <span>$0.0008</span>
              </div>
            </header>
            <div className={styles.responseBody}>
              {RESPONSE.split("\n\n").map((para, i) => (
                <p key={i}>
                  {para.split(/\*\*([^*]+)\*\*/).map((chunk, j) =>
                    j % 2 === 1 ? <strong key={j}>{chunk}</strong> : chunk,
                  )}
                </p>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
