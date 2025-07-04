"use client";

import { useActionState } from "react";
import SubmitButton from "@/components/form/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "../../../../node_modules/generated/prisma"
import upsertTicket from "../actions/upsert-ticket";

type TicketUpsertFormProps = {
    ticket?: Ticket;
}

// Optional ticket is passed from the edit page, needs to be destructured because React wraps wrapps the props in an object by default.

/** Form for user to fill in to update existing or create a new ticket. Calls upsertTicket server action when submitted. */
const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    // useActionState hook being used to give our upsertTicket server action a state, it takes the action and an initial state as arguments.
    const [actionState, action] = useActionState(upsertTicket.bind(null, ticket?.id), { message: "" })

    return (
        <form action={action} className="flex flex-col gap-y-2">

            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" type="text" defaultValue={(actionState.payload?.get("title") as string ) ?? ticket?.title}/>

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" defaultValue={(actionState.payload?.get("content") as string ) ?? ticket?.content}/>

            <SubmitButton label={ticket ? "Update" : "Create"}/>

            {actionState.message}
    </form>
    )
}

export default TicketUpsertForm;