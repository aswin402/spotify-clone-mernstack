import exprress from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { clerkMiddleware } from '@clerk/express'
import fileUpload from 'express-fileupload';
import path from 'path';
import { createServer } from "http";
import { initializeSocket } from "./lib/socket.js";

import userRouter from './routers/user_router.js';
import adminRouter from './routers/admin_router.js';
import authRouter from './routers/auth_router.js';
import songRouter from './routers/song_router.js';
import albumRouter from './routers/album_router.js';
import statRouter from './routers/stat_router.js';
import { connectDB } from './lib/db.js';


dotenv.config();
const __dirname = path.resolve();
const app = exprress();
const PORT = process.env.PORT || 5000;

const httpServer = createServer(app);
initializeSocket(httpServer);



app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true,
  }
));
app.use(exprress.json());
app.use(clerkMiddleware())
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, 'temp'),
  createParentPath: true,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit the size of uploaded files to 10MB
}));

app.use('/api/users', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', authRouter);
app.use('/api/songs', songRouter);
app.use('/api/albums', albumRouter);
app.use('/api/stats', statRouter);

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: process.env.NODE_ENV === 'production' ? 'Internal Server Error' : err.message });
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   connectDB();
// });

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});