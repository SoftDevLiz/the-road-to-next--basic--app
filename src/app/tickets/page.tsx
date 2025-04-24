import Link from 'next/link';
import clsx from 'clsx';
import { initialTickets } from '@/data'
import { ticketPath } from '@/paths';

const doneIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smile-icon lucide-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
const openIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-frown-icon lucide-frown"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
const inProgressIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-annoyed-icon lucide-annoyed"><circle cx="12" cy="12" r="10"/><path d="M8 15h8"/><path d="M8 9h2"/><path d="M14 9h2"/></svg>

/** Holds the icon SVGS */
const TICKET_ICONS = {
    OPEN: openIcon,
    IN_PROGRESS: inProgressIcon,
    DONE: doneIcon,
}

const TicketsPage = () => {
    return (
        <div className='flex-1 flex flex-col gap-y-8'>
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Tickets page</h2>
                <p className="text-sm text-muted-foreground">All your tickets in one place</p>
            </div>
            <div className='flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top'>
                {/* Loops over ticket data and renders individual tickets*/}
                {initialTickets.map((ticket) => (
                    <div key={ticket.id} className='w-full max-w-[420px] p-4 border border-slate-100 rounded'>
                        {/* [ticket.status] is mapped against TICKET_ICONS because the initialTickets holds the actual status of the ticket and TICKET_ICONS holds the related SVG */}
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