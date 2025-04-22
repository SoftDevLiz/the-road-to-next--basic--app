
type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;

    return <div className="text-3xl p-4">Ticket number {ticketId}</div>;
};

export default TicketPage;