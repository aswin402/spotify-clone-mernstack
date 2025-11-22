import { Router } from "express";
import {User} from "../models/user_model.js";
import { authCallback } from "../controller/auth_controller.js";

const router = Router();

router.get('/callback', authCallback);

export default router;