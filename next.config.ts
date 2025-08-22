import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['next/image'],
  },
};

export default nextConfig;
