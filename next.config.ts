import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // GitHub Pages needs a static export. Vercel sets VERCEL=1 and runs the API route.
  output: process.env.VERCEL ? undefined : "export",
  
  // The assistant needs the server route, so it only shows on Vercel.
  env: { NEXT_PUBLIC_CHAT_ENABLED: process.env.VERCEL ? "1" : "" },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
