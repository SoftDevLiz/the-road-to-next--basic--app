import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../type";

type TicketItemProps = {
    ticket: Ticket;
}

const TicketItem = ({ ticket }: TicketItemProps) => {
    return (
            <Card className='w-full max-w-[420px]'>
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
                <CardFooter>
                    <Link href={ticketPath(ticket.id)} className='underline text-lg'>View</Link>
                </CardFooter>
            </Card>  
    )
}

export { TicketItem };