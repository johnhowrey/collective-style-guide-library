import { readFile, readdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Resolve the workspace root regardless of where the binary runs from.
 * Walks up from this file until a `pnpm-workspace.yaml` is found.
 */
async function findWorkspaceRoot(): Promise<string> {
  let dir = __dirname;
  while (dir !== "/") {
    try {
      await readFile(join(dir, "pnpm-workspace.yaml"));
      return dir;
    } catch {
      dir = dirname(dir);
    }
  }
  throw new Error("Could not locate workspace root");
}

let cachedRoot: string | null = null;

export async function packagesDir(): Promise<string> {
  if (!cachedRoot) cachedRoot = await findWorkspaceRoot();
  return join(cachedRoot, "packages");
}

export async function listVariants(): Promise<
  Array<{ id: string; name: string; tagline: string; inspiration: string }>
> {
  const dir = await packagesDir();
  const entries = await readdir(dir, { withFileTypes: true });
  const out: Array<{ id: string; name: string; tagline: string; inspiration: string }> = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "foundation" || entry.name === "mcp") continue;
    const llmsTxt = await readFile(join(dir, entry.name, "llm", "llms.txt"), "utf-8").catch(() => null);
    if (!llmsTxt) continue;
    const pkg = JSON.parse(
      await readFile(join(dir, entry.name, "package.json"), "utf-8"),
    ) as { description?: string; collective?: { variant?: string; inspiration?: string } };
    const titleLine = llmsTxt.split("\n")[0]?.replace(/^#\s+/, "") ?? entry.name;
    const taglineMatch = llmsTxt.match(/^>\s+(.+)/m);
    out.push({
      id: pkg.collective?.variant ?? entry.name,
      name: titleLine,
      tagline: taglineMatch?.[1] ?? pkg.description ?? "",
      inspiration: pkg.collective?.inspiration ?? "",
    });
  }
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

export async function readDoc(variant: string, file: string): Promise<string | null> {
  const dir = await packagesDir();
  return readFile(join(dir, variant, "llm", file), "utf-8").catch(() => null);
}
