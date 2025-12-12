import { Router } from "express";
import { createSong , deleteSong,  createAlbum, deleteAlbum, checkAdmin } from "../controller/admin_controller.js";
import { authMiddleware, requireAdmin } from "../middleware/auth_middleware.js";


const router = Router();

router.use(authMiddleware, requireAdmin);

router.get('/check', checkAdmin);
router.post('/songs', createSong);
router.delete('/songs/:id', deleteSong);
router.post('/albums', createAlbum);
router.delete('/albums/:albumId', deleteAlbum);

export default router; 