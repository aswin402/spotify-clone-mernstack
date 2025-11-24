import { Router } from "express";
import { authMiddleware } from "../middleware/auth_middleware.js";
import { getAllUsers } from "../controller/user_controller.js";

const router = Router();

router.get('/', authMiddleware, getAllUsers);

export default router;