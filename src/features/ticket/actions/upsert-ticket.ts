"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod/v4";
import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";

// Zod validation rules
const ticketUpsertSchema = z.object({
    title: z.string().min(1).max(191),
    content: z.string().min(1).max(191)
})


/** upsertTicket is a server action. Takes ticket id, actionState (useActionState hook in ticket-upsert-form) and other details from a form to update existing or create a new ticket */
const upsertTicket = async (id: string | undefined, _actionState: {message: string, payload?: FormData }, formData: FormData) => {

    try {
        // Succintly extracts the title and content from the form and packs it nicely into a data object for use in in the prisma update call. Parse with Zod for form validation.
        const data = ticketUpsertSchema.parse({
            title: formData.get("title"),
            content: formData.get("content"),
        });

        // Updates existing or creates new ticket
        await prisma.ticket.upsert({
            where: { id: id || ""},
            update: { ...data, updatedAt: new Date() },
            create: { ...data, updatedAt: new Date() },
        })
    } catch {
        return { 
            message: "Something went wrong",
            // In case of error, return the title and content for the defaultValue for the input fields
            payload: formData,
                }
    }


    // Cache check
    revalidatePath(ticketsPath);

    if (id) {
        redirect(ticketPath(id));
    }

    // Returns a happy state if everything in the try block validated and ran
    return { message: "Ticket created!"}
}

export default upsertTicket;
