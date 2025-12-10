import app from "@/framework/app.js";
import logger from "@/framework/utils/logger.js";
import mockServer from "@/mocks/server.js";
import http from "node:http";
import { env } from "node:process";

const PORT = parseInt(env.PORT ?? "") || 3000;

if ((env.ENV ?? "dev") === "dev") {
  logger.warn("mock server boot");

  mockServer.listen({ onUnhandledRequest: "bypass" });
}

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(
    {
      ENV: env.ENV ?? "dev",
      LOG_LEVEL: logger.level,
      PORT,
    },
    "framework server boot",
  );
});
