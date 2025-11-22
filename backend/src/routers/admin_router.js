import { Router } from "express";
import { getAdmin } from "../controller/admin_controller.js";

const router = Router();

router.get('/', getAdmin);

export default router; 