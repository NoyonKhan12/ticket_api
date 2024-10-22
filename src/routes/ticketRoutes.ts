import express from 'express';
import { createTicket } from '../controllers/ticketController';

const router = express.Router();

router.post('/create_ticket', createTicket);

export default router;