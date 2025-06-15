import { prisma } from "@/lib/prisma"
import { Ticket } from "../../../../generated/prisma/client"

// fetch tickets from db via Prisma
export const getTickets = async (): Promise<Ticket[]> => {
    return await prisma.ticket.findMany({
        orderBy: { createdAt: 'desc' },
    })
}