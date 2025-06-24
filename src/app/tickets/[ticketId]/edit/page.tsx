import CardCompact from "@/components/card-compact";
import TicketUpdateForm from "@/features/ticket/components/ticket-update-form";


const EditTicketPage = () => {

    return (
        <div className="flex-1 flex flex-col justify-center items-center">
            <CardCompact title="Edit Ticket" description="Edit this ticket" content={<TicketUpdateForm />} className="w-full max-w-[420px] animate-fade-from-top"/>
        </div>
    )
    
};

export default EditTicketPage;