
type TicketPageProps = {
    params: {
        ticketId: string;
    };
};

const TicketPage = ({ params }: TicketPageProps) => {
    return <div className="text-3xl p-4">Ticket number {params.ticketId}</div>;
};

export default TicketPage;