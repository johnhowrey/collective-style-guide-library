/**
 * Font provider loader.
 *
 * Each variant declares a FontProvider in its theme. When that theme
 * activates, the loader injects the right stylesheet for the provider:
 *
 *   - adobe       → https://use.typekit.net/<kitId>.css
 *   - google      → https://fonts.googleapis.com/css2?family=<...>
 *   - self-hosted → user-supplied CSS URL
 *   - system      → no-op; fallback stacks render
 *
 * Multiple providers can be loaded across the lifetime of the app; switching
 * variants does not unload prior stylesheets (cheap, harmless, avoids
 * re-fetching on toggle).
 */

import type { FontProvider } from "./theme";

const loaded = new Set<string>();

function inject(href: string, dataset: Record<string, string>) {
  if (loaded.has(href) || typeof document === "undefined") return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  for (const [k, v] of Object.entries(dataset)) link.dataset[k] = v;
  document.head.appendChild(link);
  loaded.add(href);
}

export function loadFontProvider(provider: FontProvider): void {
  switch (provider.type) {
    case "adobe":
      inject(`https://use.typekit.net/${provider.kitId}.css`, {
        collectiveProvider: "adobe",
        collectiveKit: provider.kitId,
      });
      return;
    case "google": {
      const families = provider.families.map(encodeURIComponent).join("&family=");
      const display = provider.display ?? "swap";
      const url = `https://fonts.googleapis.com/css2?family=${families}&display=${display}`;
      inject(url, { collectiveProvider: "google" });
      return;
    }
    case "self-hosted":
      inject(provider.cssUrl, { collectiveProvider: "self-hosted" });
      return;
    case "system":
      return;
  }
}

/** Back-compat helper: accepts a Typekit ID and loads it. */
export function loadTypekit(kitId: string | undefined): void {
  if (!kitId) return;
  loadFontProvider({ type: "adobe", kitId });
}
