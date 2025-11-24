import { Router } from "express";
import { authMiddleware, requireAdmin } from "../middleware/auth_middleware.js";
import { getStats } from "../controller/stat_controller.js";

const router = Router();

router.get('/stat', authMiddleware, requireAdmin ,getStats );

export default router; 