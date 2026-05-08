import { createServer as createHttpServer } from "node:http";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import type { Server } from "@modelcontextprotocol/sdk/server/index.js";

/**
 * Lightweight HTTP wrapper for the MCP server. Exposes /mcp as the
 * Streamable HTTP endpoint per the MCP spec.
 *
 * Hosted-MCP clients (Claude.ai, Anthropic web) connect here.
 */
export async function startHttpServer(server: Server, port: number) {
  const transport = new StreamableHTTPServerTransport({
    sessionIdGenerator: () => crypto.randomUUID(),
  });

  await server.connect(transport);

  const httpServer = createHttpServer((req, res) => {
    if (!req.url?.startsWith("/mcp")) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }
    transport.handleRequest(req, res).catch((err) => {
      res.statusCode = 500;
      res.end(String(err));
    });
  });

  httpServer.listen(port, () => {
    console.error(`@collective/mcp listening at http://localhost:${port}/mcp`);
  });
}
