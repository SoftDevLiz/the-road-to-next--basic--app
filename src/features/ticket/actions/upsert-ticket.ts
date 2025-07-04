"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";

/** upsertTicket is a server action. Takes ticket id, actionState (useActionState hook in ticket-upsert-form) and other details from a form to update existing or create a new ticket */
const upsertTicket = async (id: string | undefined, _actionState: {message: string}, formData: FormData) => {

    // Succintly extracts the title and content from the form and packs it nicely into a data object for use in in the prisma update call.
    const data = {
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        updatedAt: new Date(),
    };

    // Updates existing or creates new ticket
    await prisma.ticket.upsert({
        where: { id: id || ""},
        update: data,
        create: data,
    })

    // Cache check
    revalidatePath(ticketsPath);

    if (id) {
        redirect(ticketPath(id));
    }

    // Just returns a state for the useActionState hook in ticket-upsert-form
    return { message: "Ticket created!"}
}

export default upsertTicket;
