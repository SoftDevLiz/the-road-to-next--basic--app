"use client";

import clsx from "clsx";
import { LucideCircleArrowOutUpRight, LucideTrash } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { Ticket } from "../../../../node_modules/generated/prisma/client";
import { deleteTicket } from "../actions/delete-ticket";
import { TICKET_ICONS } from "../constants";

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const viewTicketBtn = (
        <Link href={ticketPath(ticket.id)} className={buttonVariants({ variant: 'outline', size: 'icon'})}>
        <LucideCircleArrowOutUpRight />
        </Link>
    )

    const handleDeleteTicket = async () => {
        await deleteTicket(ticket.id);
    }

    const deleteTicketBtn = (
        /* The snippet: 
        
            onClick={() => { void handleDeleteTicket(); }} 

        We write it like this because onClick expects expects a function that returns void,
        but handleDeleteTicket is an async function. This way we are telling TypeScript that we are aware of this, and it will not throw an error.
        
        */
        <Button variant={'outline'} size={'icon'} onClick={() => { void handleDeleteTicket(); }}> 
            <LucideTrash />
        </Button>
    )

    return (
        <div className={clsx("w-full flex gap-x-1", {
            "max-w-[580px]": isDetail,
            "max-w-[420px]": !isDetail,
        })}>
            <Card className='w-full'>
                {/* [ticket.status] is mapped against TICKET_ICONS because the initialTickets holds the actual status of the ticket and TICKET_ICONS holds the related SVG */}
                <CardHeader>
                    <CardTitle className='flex gap-2 items-center'>
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className='truncate'>{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className={clsx("whitespace-break-spaces", {
                        "line-clamp-3": !isDetail,
                    })}>{ticket.content}</span>
                </CardContent>
            </Card>
            {/* Renders different buttons based on whether it's the detailed view or not */}
            <div className="flex flex-col gap-y-2">
                { isDetail ? deleteTicketBtn : viewTicketBtn }
            </div>
        </div>
    )
}

export { TicketItem };