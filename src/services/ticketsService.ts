import {tickets} from "../db.json";
import {TicketType} from "../types/ticketType";

export const getPageItems = (page: number) => {
    const pageSize = 10;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const pageTickets = tickets.slice(start, end);
    const hasMore =  end < tickets.length;
    return {pageTickets, hasMore}
}

export const getTicketsDataByUserType = (pageTickets: TicketType[], userType: string) => {
    return userType === 'tourist'
        ? pageTickets.map((ticket: TicketType) => ({
            image: ticket.image,
            id: ticket.id,
            title: ticket.title,
            description: ticket.description
        }))
        : pageTickets;
};


export const getTicketsData = (userType: string, page: number) => {
    const { pageTickets, hasMore } = getPageItems(page)
    const tickets = getTicketsDataByUserType(pageTickets, userType)
    return {
        tickets,
        hasMore
    }
}