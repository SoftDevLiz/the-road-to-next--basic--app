"use client";

import { LucideLoader } from "lucide-react";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
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
    const [ isPending, startTransition ] = useTransition();
    
    const upsertTicketAction = (formData: FormData) => {
        startTransition( async () => {
            await upsertTicket.bind(null, ticket?.id)(formData)
        })
    }

    return (
        <form action={upsertTicketAction} className="flex flex-col gap-y-2">

            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" type="text" defaultValue={ticket?.title}/>

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" defaultValue={ticket?.content}/>

            <Button type="submit">
                { isPending && <LucideLoader className="animate-spin" /> }
                { ticket ? "Edit" : "Create" }
            </Button>
        
    </form>
    )
}

export default TicketUpsertForm;