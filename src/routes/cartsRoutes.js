import { Router } from 'express';
import { finalizePurchase } from '../controllers/cartsController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/:cid/purchase', authMiddleware, finalizePurchase);

export default router;