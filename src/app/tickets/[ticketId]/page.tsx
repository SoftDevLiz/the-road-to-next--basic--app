import { initialTickets } from "@/data";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;

    const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

    if (!ticket) {
        return <div className="text-3xl">Ticket not found</div>
    }

    return (
        <div>
            <h2 className="text-3xl">{ticket.title}</h2>
            <h3>{ticket.content}</h3>
        </div>
    );
};

export default TicketPage;