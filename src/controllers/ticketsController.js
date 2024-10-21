import TicketsRepository from '../repositories/ticketsRepository.js';

const ticketsRepository = new TicketsRepository();

export const createTicket = async (req, res) => {
    const { amount, purchaser } = req.body;
    const newTicket = await ticketsRepository.createTicket(amount, purchaser);
    res.json(newTicket);
};