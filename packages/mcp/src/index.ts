import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";

/**
 * Entry point. Defaults to stdio transport (for Claude Code, Cursor).
 *
 * For HTTP transport, run with `--transport http --port <port>`. The HTTP
 * mode is intended for Vercel and remote MCP clients (Claude.ai web).
 */
async function main() {
  const args = process.argv.slice(2);
  const transport = args.includes("--transport")
    ? args[args.indexOf("--transport") + 1]
    : "stdio";

  const server = createServer();

  if (transport === "stdio") {
    await server.connect(new StdioServerTransport());
    return;
  }

  if (transport === "http") {
    const portIndex = args.indexOf("--port");
    const port = portIndex >= 0 ? Number(args[portIndex + 1]) : 3030;
    const { startHttpServer } = await import("./http.js");
    await startHttpServer(server, port);
    return;
  }

  console.error(`Unknown transport: ${transport}`);
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
