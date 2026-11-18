import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // generates a static /out folder ready for Netlify drag-and-drop
  // cacheComponents and partialPrefetching are incompatible with static export
};

export default nextConfig;
