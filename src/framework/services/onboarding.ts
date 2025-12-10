import type { Onboarding } from "@/framework/types/onboarding.js";
import { env } from "node:process";

const S3_URL = env.S3_URL ?? "https://dummy-s3-location.com/ingest";

type Ingestion = {
  key: string;
};

export const ingest = async (onboarding: Onboarding): Promise<Ingestion> => {
  const resp = await fetch(S3_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(onboarding),
  });

  return resp.json() as Promise<Ingestion>;
};
