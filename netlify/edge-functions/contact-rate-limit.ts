import type { Config } from "@netlify/edge-functions";

export default function contactRateLimit() {
  return;
}

export const config: Config = {
  path: "/api/contact",
  rateLimit: {
    action: "rate_limit",
    aggregateBy: ["ip", "domain"],
    windowLimit: 5,
    windowSize: 60,
  },
};
