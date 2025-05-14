
import { notFound } from "next/navigation";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";


type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

// ticketId is passed from the URL via the params
const TicketPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;

    const ticket = await getTicket(ticketId);

    if (!ticket) {
        // notFound() is a built in Next function that returns a 404 page.
        // I have customised it to return a custom error page. See app/not-found.tsx.
        return notFound();
    }

    return (
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>

    );
};

export default TicketPage;