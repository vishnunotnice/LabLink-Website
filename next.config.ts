import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/LabLink-Website" : "",
  assetPrefix: isGitHubPages ? "/LabLink-Website/" : "",
  trailingSlash: true,
};

export default nextConfig;
