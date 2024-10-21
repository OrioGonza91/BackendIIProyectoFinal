import { Router } from 'express';
import { createProduct, updateProduct, deleteProduct } from '../controllers/realTimeProductsController.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const router = Router();

router.post('/create', adminMiddleware, createProduct);
router.put('/update/:id', adminMiddleware, updateProduct);
router.delete('/delete/:id', adminMiddleware, deleteProduct);

export default router;
