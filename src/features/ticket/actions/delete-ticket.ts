"use server";

// Server action for deleting a ticket based on ID

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const deleteTicket = async (id: string) => {

    await prisma.ticket.delete({
        where: {
            id,
        },
    });

revalidatePath(ticketsPath);
redirect(ticketsPath);
};

