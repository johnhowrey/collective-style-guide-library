import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@collective/foundation",
    "@collective/foundry",
    "@collective/vellum",
    "@collective/beacon",
    "@collective/marginalia",
    "@collective/proscenium",
    "@collective/caesura",
    "@collective/cipher",
  ],
  experimental: {
    optimizePackageImports: ["@carbon/react", "@carbon/icons-react"],
  },
};

export default config;
