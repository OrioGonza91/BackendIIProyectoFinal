import TicketsDao from "../daos/ticketsDao.js";
import { v4 as uuidv4 } from 'uuid';

class TicketsRepository {
    constructor(){
        this.ticketsDao = new TicketsDao()
    }

    async createTicket(amount, purchaser){
        const code = uuidv4()
        const ticketData = {
            code,
            amount,
            purchaser
        }
        return await this.ticketsDao.create(ticketData)
    }

    async getTicketByCode(code){
        return await this.ticketsDao.getByCode(code)
    }
}

export default TicketsRepository;