import { notFound } from "next/navigation";
import CardCompact from "@/components/card-compact";
import TicketUpsertForm from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";

type TicketEditPageProps = {
    params: Promise<{ ticketId: string }>
}

const EditTicketPage = async ({ params }: TicketEditPageProps) => {

    // fetch entire ticket to pass to the update form
    const { ticketId } = await params;
    const ticket = await getTicket(ticketId);

    if (!ticket) {
        notFound();
    }

    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <CardCompact title="Edit Ticket" description="Update an existing ticket" content={<TicketUpsertForm ticket={ticket} />} className="w-full max-w-[420px] animate-fade-from-top"/>
        </div>
    )
    
};

export default EditTicketPage;