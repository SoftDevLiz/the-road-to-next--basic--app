import { prisma } from "@/lib/prisma"

// fetch tickets from db via Prisma
export const getTickets = async () => {
    return await prisma.ticket.findMany({
        orderBy: { createdAt: 'desc' },
    })
}