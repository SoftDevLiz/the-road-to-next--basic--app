"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

/** UpdateTicket is a server action. Takes ticket id and other details from the update form to update the ticket with. */
const updateTicket = async (id: string, formData: FormData) => {

    // Succintly extracts the title and content from the form and packs it nicely into a data object for use in in the prisma update call.
    const data = {
        title: formData.get("title"),
        content: formData.get("content"),
    };

// Updates the ticket with the new data, Prisma ORM
    await prisma.ticket.update({
        where: {
            id,
        },
        data: {
            title: data.title as string,
            content: data.content as string,
        }
    })

    // Cache check
    revalidatePath(ticketsPath);
    redirect(ticketsPath);
}

export default updateTicket;