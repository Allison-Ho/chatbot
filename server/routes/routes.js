import express from 'express';
import userRouter from './controls/users.js';
import messageRouter from './controls/messages.js';

const router = express.Router();

router.use('/users', userRouter);
router.use('/messages', messageRouter);

export default router;