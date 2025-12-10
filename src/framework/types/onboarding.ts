import { z } from "zod";

export const OnboardingSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
});

export type Onboarding = z.infer<typeof OnboardingSchema>;
