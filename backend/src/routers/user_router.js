import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  res.send('User Router is working!');
});

export default router;