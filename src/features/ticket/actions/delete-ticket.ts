"use server";

// Server action for deleting a ticket based on ID

import { prisma } from "@/lib/prisma";

export const deleteTicket = async (id: string) => {
    try {
        await prisma.ticket.delete({
            where: {
                id,
            },
        });
    } catch (error) {
        console.error("Error deleting ticket:", error);
        throw new Error("Failed to delete ticket");
    }
};

