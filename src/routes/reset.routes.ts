import { Router } from "express";
import { forgotPassword, resetPassword } from "../controllers/reset.controller";

const router = Router();

router.post("/forgot", forgotPassword);
router.post("/reset", resetPassword);

export default router;
