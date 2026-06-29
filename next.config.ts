import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aima.sanntra.com",
      },
    ],
  },
};

export default nextConfig;
