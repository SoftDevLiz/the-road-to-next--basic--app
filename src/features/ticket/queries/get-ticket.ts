import { prisma } from "@/lib/prisma";

// Fetch unique ticket data from db
export const getTicket = async (ticketId: string) => {
    return await prisma.ticket.findUnique({ where: { id: ticketId } });
}