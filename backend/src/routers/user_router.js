import { Router } from "express";
import { authMiddleware } from "../middleware/auth_middleware.js";
import { getAllUsers,getMessages } from "../controller/user_controller.js";

const router = Router();

router.get('/', authMiddleware, getAllUsers);
router.get("/messages/:userId", authMiddleware, getMessages);
 
export default router;