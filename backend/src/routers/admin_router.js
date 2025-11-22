import { Router } from "express";
import { getAdmin } from "../controller/admin_controller.js";
import { authMiddleware, requireAdmin } from "../middleware/auth_middleware.js";

const router = Router();

router.get('/', authMiddleware, requireAdmin, getAdmin);

export default router; 