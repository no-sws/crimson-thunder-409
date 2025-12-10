import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.post("https://dummy-s3-location.com/ingest", async () => {
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 4));
    return HttpResponse.json({
      key: `onboarding/${Math.ceil(Math.random() * 1_000_000) + 1}.json`,
    });
  }),
);

export default server;
