import { initialTickets } from "@/data"
import { Ticket } from "../type";

// Simulate data fetching
export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // .find() is checking if the ticketId from the URL matches the ticket.id in the initialTickets object.
    // If true, it returns the objects.
    // So ticket holds the object in which truthy was found.

    /** Represents individual ticket data object */
    const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);

    return new Promise((resolve) => {
        resolve(maybeTicket || null)
    })
}