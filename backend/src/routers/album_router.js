import { Router } from "express";

const router = Router();

router.get('/albums', (req, res) => {
  res.send('Album Router is working!');
});

export default router;