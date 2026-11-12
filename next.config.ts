import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // GitHub Pages needs a static export. Vercel sets VERCEL=1 and runs the API route.
  output: process.env.VERCEL ? undefined : "export",
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
