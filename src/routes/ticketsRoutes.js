import { Router } from 'express';
import { createTicket } from '../controllers/ticketsController.js';

const router = Router();

router.post('/', createTicket);
// Otras rutas para obtener tickets, si es necesario.

export default router;
