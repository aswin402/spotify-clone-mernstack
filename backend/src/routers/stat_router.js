import { Router } from "express";

const router = Router();

router.get('/stat', (req, res) => {
  res.send('stat Router is working!');
});

export default router;