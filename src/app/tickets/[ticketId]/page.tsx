import { Placeholder } from "@/components/placeholder";
import { initialTickets } from "@/data";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};
// ticketId is passed from the URL via the params
const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;

    // .find() is checking if the ticketId from the URL matches the ticket.id in the initialTickets object.
    // If true, it returns the objects.
    // So ticket holds the object in which truthy was found.

    /** Represents individual ticket data object */
    const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

    if (!ticket) {
        return (
            <Placeholder 
            label="Ticket not found"
            buttonPath={ticketsPath}
            buttonLabel="Go to Tickets"
            />
        )}

    return (
        <div>
            <h2 className="text-3xl">{ticket.title}</h2>
            <h3>{ticket.content}</h3>
        </div>
    );
};

export default TicketPage;