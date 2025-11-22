import { Router } from "express";

const router = Router();

router.get('/songs', (req, res) => {
  res.send('Song Router is working!');
});

export default router;