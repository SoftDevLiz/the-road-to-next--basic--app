import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "../../../../node_modules/generated/prisma"
import updateTicket from "../actions/update-ticket";

type TicketUpdateFormProps = {
    ticket: Ticket;
}

// ticket is passed from the edit page, needs to be destructured because React wraps wrapps the props in an object by default.

/** Form for user to fill in to update the ticket. Calls updateTicket server action when submitted. */
const TicketUpdateForm = ({ ticket }: TicketUpdateFormProps) => {

    return (
        <form action={updateTicket.bind(null, ticket.id)} className="flex flex-col gap-y-2">

            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" type="text" defaultValue={ticket.title}/>

            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" defaultValue={ticket.content}/>

            <Button type="submit">Update</Button>
        
    </form>
    )
}

export default TicketUpdateForm;