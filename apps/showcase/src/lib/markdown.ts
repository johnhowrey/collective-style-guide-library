import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { marked } from "marked";

marked.use({
  gfm: true,
  breaks: false,
});

const PACKAGE_ROOT = join(process.cwd(), "..", "..", "packages");

/** Read a per-variant llm/*.md file and return rendered HTML. */
export async function readVariantDoc(
  variantId: string,
  filename: string,
): Promise<{ html: string; raw: string } | null> {
  const path = join(PACKAGE_ROOT, variantId, "llm", filename);
  try {
    const raw = await readFile(path, "utf-8");
    const html = await marked.parse(raw);
    return { html, raw };
  } catch {
    return null;
  }
}

export async function readVariantText(
  variantId: string,
  filename: string,
): Promise<string | null> {
  const path = join(PACKAGE_ROOT, variantId, "llm", filename);
  try {
    return await readFile(path, "utf-8");
  } catch {
    return null;
  }
}
