import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { VARIANTS_BY_ID } from "@/lib/variants";

const DOC_PATHS: Record<string, { file: string; mime: string }> = {
  tokens: { file: "tokens.json", mime: "application/json" },
  principles: { file: "principles.md", mime: "text/markdown" },
  content: { file: "content.md", mime: "text/markdown" },
  motion: { file: "motion.md", mime: "text/markdown" },
  i18n: { file: "i18n.md", mime: "text/markdown" },
  "starter-prompt": { file: "starter-prompt.md", mime: "text/markdown" },
  components: { file: "components.json", mime: "application/json" },
  llms: { file: "llms.txt", mime: "text/plain" },
};

/**
 * GET /api/llm/[variant]/[doc] — serves a variant's LLM artifact directly
 * from the package's llm/ directory. Used by agents and the MCP server.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ variant: string; doc: string }> },
) {
  const { variant, doc } = await params;

  if (!VARIANTS_BY_ID[variant]) {
    return new Response("Unknown variant", { status: 404 });
  }
  const docMeta = DOC_PATHS[doc];
  if (!docMeta) {
    return new Response("Unknown doc", { status: 404 });
  }

  const path = join(
    process.cwd(),
    "..",
    "..",
    "packages",
    variant,
    "llm",
    docMeta.file,
  );
  try {
    const body = await readFile(path, "utf-8");
    return new Response(body, {
      headers: { "content-type": `${docMeta.mime}; charset=utf-8` },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}
