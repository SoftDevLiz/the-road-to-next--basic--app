import { prisma } from "@/lib/prisma"

// Simulate data fetching
export const getTicket = async (ticketId: string) => {
    return await prisma.ticket.findUnique({ where: { id: ticketId } });
}