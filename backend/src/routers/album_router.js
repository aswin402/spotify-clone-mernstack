import { Router } from "express";
import { getAlbums, getAlbumsById } from "../controller/album_controller.js";

const router = Router();

router.get('/', getAlbums);
router.get('/:albumId', getAlbumsById);

export default router;router.get('/', getAlbums);