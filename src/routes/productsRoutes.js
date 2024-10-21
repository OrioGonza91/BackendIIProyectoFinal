import { Router } from 'express';
import { getAllProducts, createProduct } from '../controllers/productsController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/', getAllProducts);
router.post('/', authMiddleware, createProduct);
// Otras rutas como updateProduct, deleteProduct, etc.

export default router;