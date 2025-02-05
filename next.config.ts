import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Required for static export
    domains: ["images.unsplash.com", "i.ibb.co", "i.pravatar.cc"], // Add i.ibb.co
  },
};

export default nextConfig;
