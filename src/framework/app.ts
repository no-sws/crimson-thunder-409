import onboarding from "@/framework/routes/onboarding.js";
import logger from "@/framework/utils/logger.js";
import express from "express";
import { pinoHttp } from "pino-http";

const app = express();

// Config.
// NOTE: Do not to leak framework info (e.g., CVE).
app.disable("x-powered-by");

// Utils.
app.use(pinoHttp({ logger }));
app.use(express.json());

// Routes.
app.use("/onboarding", onboarding);

// Health check.
// NOTE: E.g., monitoring.
app.get("/healthz", (_req, res) => {
  res.json({ ok: true });
});

export default app;
