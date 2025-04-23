import Link from 'next/link';
import { initialTickets } from '@/data'

const TicketsPage = () => {
    return (
        <div>
            {initialTickets.map((ticket) => (
                <div key={ticket.id}>
                    <h2 className="text-3xl p-4">{ticket.title}</h2>
                    <Link href={`tickets/${ticket.id}`} className='underline p-4 text-lg'>View</Link>
                </div>
            ))}
        </div>
    )
};

export default TicketsPage;