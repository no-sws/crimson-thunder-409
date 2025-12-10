import { createOnboarding } from "@/framework/controllers/onboarding.js";
import { Router } from "express";

const router = Router();

router.post("/", createOnboarding);

export default router;
