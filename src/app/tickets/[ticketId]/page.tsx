import Link from "next/link";
import { Placeholder } from "@/components/placeholder";
import { buttonVariants } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { ticketsPath } from "@/paths";

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
        return (
            <Placeholder 
            label="Ticket not found"
            button={<Link href={ticketsPath} className={buttonVariants({ variant: "outline"})}>Back to Tickets</Link>}
            />
        )}

    return (
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail />
        </div>

    );
};

export default TicketPage;