import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

const isProd = process.env.NODE_ENV === "production";

const aj = arcjet({
  key: ARCJET_KEY,
  mode: isProd ? "LIVE" : "DRY_RUN", // 🔐 Safe fallback
  rules: [
    shield({ mode: isProd ? "LIVE" : "DRY_RUN" }),
    detectBot({
      mode: isProd ? "LIVE" : "DRY_RUN",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    tokenBucket({
      mode: isProd ? "LIVE" : "DRY_RUN",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

export default aj;
