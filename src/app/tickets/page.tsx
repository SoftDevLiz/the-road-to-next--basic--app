import Link from 'next/link';
import clsx from 'clsx';
import { initialTickets } from '@/data'
import { ticketPath } from '@/paths';

// Ticket icon map, to be replaced with icons later on
const TICKET_ICONS = {
    OPEN: "O",
    IN_PROGRESS: ">",
    DONE: "X"
}

const TicketsPage = () => {
    return (
        <div className='flex-1 flex flex-col gap-y-8'>
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Tickets page</h2>
                <p className="text-sm text-muted-foreground">All your tickets in one place</p>
            </div>
            <div className='flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top'>
                {initialTickets.map((ticket) => (
                    <div key={ticket.id} className='w-full max-w-[420px] p-4 border border-slate-100 rounded'>
                        <h3>{TICKET_ICONS[ticket.status]}</h3>
                        <h3 className="text-lg truncate font-semibold">{ticket.title}</h3>
                        <p className={clsx('text-sm text-slate-500 truncate', {"line-through": ticket.status === "DONE"})}>{ticket.content}</p>
                        <Link href={ticketPath(ticket.id)} className='underline text-lg'>View</Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default TicketsPage;