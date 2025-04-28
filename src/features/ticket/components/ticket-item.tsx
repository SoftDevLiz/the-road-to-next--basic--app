import { LucideCircleArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../type";

type TicketItemProps = {
    ticket: Ticket;
}

const TicketItem = ({ ticket }: TicketItemProps) => {
    const viewTicketBtn = (
        <Link href={ticketPath(ticket.id)} className={buttonVariants({ variant: 'outline', size: 'icon'})}>
        <LucideCircleArrowOutUpRight />
        </Link>
    )
    return (
        <div className="w-full max-w-[420px] flex gap-x-1">
            <Card className='w-full'>
                {/* [ticket.status] is mapped against TICKET_ICONS because the initialTickets holds the actual status of the ticket and TICKET_ICONS holds the related SVG */}
                <CardHeader>
                    <CardTitle className='flex gap-2 items-center'>
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className='truncate'>{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <span className='line-clamp-3 whitespace-break-spaces'>{ticket.content}</span>
                </CardContent>
            </Card>
            <div className="flex flex-col gap-y-2">
                {viewTicketBtn}
            </div>
        </div>

    )
}

export { TicketItem };