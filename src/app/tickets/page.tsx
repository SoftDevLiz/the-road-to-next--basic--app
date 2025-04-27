import { LucideCircleCheck,LucideEye, LucideEyeClosed } from 'lucide-react';
import Link from 'next/link';
import { Heading } from '@/components/heading'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card' 
import { initialTickets } from '@/data'
import { ticketPath } from '@/paths';

/** Holds the icon SVGS */
const TICKET_ICONS = {
    OPEN: <LucideEyeClosed />,
    IN_PROGRESS: <LucideEye />,
    DONE: <LucideCircleCheck />,
}

const TicketsPage = () => {
    return (
        <div className='flex-1 flex flex-col gap-y-8'>
            <Heading title='Tickets' description='All your tickets in one place'/>
                <div className='flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top'>
                    {/* Loops over ticket data and renders individual tickets*/}
                    {initialTickets.map((ticket) => (
                        <Card key={ticket.id} className='w-full max-w-[420px]'>
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
                    ))}
                </div>
        </div>
    )
};

export default TicketsPage;