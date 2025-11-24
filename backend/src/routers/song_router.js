import { Router } from "express";
import {getAllSongs, getSongById, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs} from "../controller/song_controller.js";
import { authMiddleware, requireAdmin } from "../middleware/auth_middleware.js";

const router = Router();



router.get('/songs', authMiddleware, requireAdmin, getAllSongs);
router.get('/songs/:id', getSongById);
router.get('/featured-songs', getFeaturedSongs);
router.get('/made-for-you-songs', getMadeForYouSongs);
router.get('/trending-songs', getTrendingSongs);



export default router;