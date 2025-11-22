import exprress from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware } from '@clerk/express'
import userRouter from './routers/user_router.js';
import adminRouter from './routers/admin_router.js';
import authRouter from './routers/auth_router.js';
import songRouter from './routers/song_router.js';
import albumRouter from './routers/album_router.js';
import statRouter from './routers/stat_router.js';
import { connectDB } from './lib/db.js';

dotenv.config();

const app = exprress();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(exprress.json());
app.use(clerkMiddleware())

app.use('/api/users', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);
app.use('/api/songs', songRouter);
app.use('/api/albums', albumRouter);
app.use('/api/stats', statRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});