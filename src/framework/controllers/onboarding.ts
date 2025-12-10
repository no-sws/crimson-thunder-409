import { ingest } from "@/framework/services/onboarding.js";
import { OnboardingSchema } from "@/framework/types/onboarding.js";
import type { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

export const createOnboarding: RequestHandler = (req, res) => {
  const onboarding = OnboardingSchema.safeParse(req.body);

  // NOTE: Exit early if we do not have required data.
  if (!onboarding.success) {
    // TODO: Make sure this does not leak private/sensitive info.
    req.log.info({ errors: onboarding.error.issues });

    res.status(StatusCodes.BAD_REQUEST).json({
      ok: false,
      error: "bad onboarding data",
    });
    return;
  }

  // NOTE: Return response early to client while we process ingestion (i.e., do
  // not await outer anonymous async function).
  void (async () => {
    try {
      req.log.info("onboarding ingestion start");

      // TODO: Track this somewhere?
      const ingestion = await ingest(onboarding.data);

      req.log.info({ ingestion }, "onboarding ingestion done");
    } catch (err) {
      req.log.error(
        { error: (err as Error).message },
        "onboarding ingestion error",
      );
    }
  })();

  res.status(StatusCodes.ACCEPTED).json({ ok: true });
};
