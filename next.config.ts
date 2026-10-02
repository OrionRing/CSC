import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images and future remote sources
    remotePatterns: [],
  },
};

export default nextConfig;
