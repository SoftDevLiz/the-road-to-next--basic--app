import { prisma } from "@/lib/prisma"

// Fetch tickets from db
export const getTickets = async () => {
    return await prisma.ticket.findMany({
        orderBy: { createdAt: "desc" },
    })
}