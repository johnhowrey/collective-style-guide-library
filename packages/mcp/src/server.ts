import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { listVariants, readDoc } from "./variants.js";

const TOOLS = [
  {
    name: "list_variants",
    description:
      "Return slug, name, tagline, and inspiration for every variant in The Collective Style Guide Library.",
    inputSchema: { type: "object", properties: {} },
  },
  {
    name: "get_tokens",
    description:
      "Return the DTCG-formatted tokens.json for a variant. Includes color (light/dark), typography, radius, density, motion.",
    inputSchema: {
      type: "object",
      properties: { variant: { type: "string", description: "Variant slug, e.g. 'foundry'" } },
      required: ["variant"],
    },
  },
  {
    name: "get_principles",
    description: "Return the variant's design principles (visual character, do/don't, when to choose).",
    inputSchema: {
      type: "object",
      properties: { variant: { type: "string" } },
      required: ["variant"],
    },
  },
  {
    name: "get_content_rules",
    description: "Return the variant's voice and microcopy guide.",
    inputSchema: {
      type: "object",
      properties: { variant: { type: "string" } },
      required: ["variant"],
    },
  },
  {
    name: "get_motion",
    description: "Return the variant's motion principles.",
    inputSchema: {
      type: "object",
      properties: { variant: { type: "string" } },
      required: ["variant"],
    },
  },
  {
    name: "get_i18n",
    description: "Return the variant's i18n and RTL guide.",
    inputSchema: {
      type: "object",
      properties: { variant: { type: "string" } },
      required: ["variant"],
    },
  },
  {
    name: "get_starter_prompt",
    description:
      "Return a drop-in starter prompt for the variant. Designed to be prepended as a system or developer message.",
    inputSchema: {
      type: "object",
      properties: { variant: { type: "string" } },
      required: ["variant"],
    },
  },
  {
    name: "get_components",
    description: "Return the component manifest for a variant.",
    inputSchema: {
      type: "object",
      properties: { variant: { type: "string" } },
      required: ["variant"],
    },
  },
  {
    name: "search",
    description: "Full-text search across all variants' LLM artifacts. Returns match snippets.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search query (substring match, case-insensitive)" },
        variant: {
          type: "string",
          description: "Optional: limit search to a single variant",
        },
      },
      required: ["query"],
    },
  },
];

const FILE_BY_TOOL: Record<string, string> = {
  get_tokens: "tokens.json",
  get_principles: "principles.md",
  get_content_rules: "content.md",
  get_motion: "motion.md",
  get_i18n: "i18n.md",
  get_starter_prompt: "starter-prompt.md",
  get_components: "components.json",
};

export function createServer() {
  const server = new Server(
    { name: "@collective/mcp", version: "0.0.0" },
    { capabilities: { tools: {} } },
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }));

  server.setRequestHandler(CallToolRequestSchema, async (req) => {
    const { name, arguments: args } = req.params;
    const a = (args ?? {}) as Record<string, unknown>;

    if (name === "list_variants") {
      const variants = await listVariants();
      return {
        content: [{ type: "text", text: JSON.stringify(variants, null, 2) }],
      };
    }

    const file = FILE_BY_TOOL[name];
    if (file) {
      const variant = String(a.variant ?? "");
      const text = await readDoc(variant, file);
      if (!text) {
        return {
          isError: true,
          content: [{ type: "text", text: `No '${file}' for variant '${variant}'` }],
        };
      }
      return { content: [{ type: "text", text }] };
    }

    if (name === "search") {
      const q = String(a.query ?? "").toLowerCase();
      const limitTo = a.variant ? String(a.variant) : null;
      const variants = await listVariants();
      const matches: Array<{ variant: string; doc: string; line: number; snippet: string }> = [];
      const docs = ["principles.md", "content.md", "motion.md", "i18n.md", "llms.txt", "starter-prompt.md"];
      for (const v of variants) {
        if (limitTo && v.id !== limitTo) continue;
        for (const d of docs) {
          const body = await readDoc(v.id, d);
          if (!body) continue;
          const lines = body.split("\n");
          lines.forEach((line, i) => {
            if (line.toLowerCase().includes(q)) {
              matches.push({ variant: v.id, doc: d, line: i + 1, snippet: line.trim().slice(0, 200) });
            }
          });
        }
      }
      return {
        content: [{ type: "text", text: JSON.stringify(matches.slice(0, 50), null, 2) }],
      };
    }

    return {
      isError: true,
      content: [{ type: "text", text: `Unknown tool: ${name}` }],
    };
  });

  return server;
}
