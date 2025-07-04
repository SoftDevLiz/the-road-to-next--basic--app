"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as z from "zod/v4";
import { ActionState, fromErrorToActionState } from "@/components/form/utils/error-to-action";
import { prisma } from "@/lib/prisma";
import { ticketPath, ticketsPath } from "@/paths";

// Zod validation rules
const ticketUpsertSchema = z.object({
    title: z.string().min(1, "title can't be empty").max(191),
    content: z.string().min(1, "content can't be empty").max(1024)
})


/** upsertTicket is a server action. Takes ticket id, actionState (useActionState hook in ticket-upsert-form) and other details from a form to update existing or create a new ticket */
const upsertTicket = async (id: string | undefined, _actionState: ActionState, formData: FormData) => {

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
    } catch (error) {
        return fromErrorToActionState(error, formData);
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
