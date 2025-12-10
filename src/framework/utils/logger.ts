import { env } from "node:process";
import pino from "pino";

// TODO: Dest (e.g., Kibana, CloudWatch).
const logger = pino({
  level: env.ENV === "prod" ? "info" : (env.LOG_LEVEL ?? "debug"),
});

export default logger;
