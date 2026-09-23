import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [390, 418, 640, 750, 776, 828, 1080, 1200, 1440, 1920, 2048, 3840],
    qualities: [75, 90],
  },
};

export default nextConfig;
