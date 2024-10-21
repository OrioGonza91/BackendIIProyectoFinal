import TicketModel from "../models/ticket.js";

class TicketsDao {
    async create(ticketData){
        return await TicketModel.create(ticketData)
    }

    async getByCode(code){
        return await TicketModel.findOne({ code })
    }
}

export default TicketsDao;