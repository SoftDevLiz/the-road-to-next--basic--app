import { prisma } from "@/lib/prisma";
import { Ticket } from "../../../../node_modules/generated/prisma"

// Fetch unique ticket data from db
export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
    return await prisma.ticket.findUnique({ where: { id: ticketId } });
}