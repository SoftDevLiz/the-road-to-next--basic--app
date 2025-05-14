import Link from "next/link";
import { Placeholder } from "@/components/placeholder"
import { buttonVariants } from "@/components/ui/button";
import { ticketsPath } from "@/paths";

const notFound = () => {
    return (
        <Placeholder 
        label="Ticket not found"
        button={<Link href={ticketsPath} className={buttonVariants({ variant: "outline"})}>Back to Tickets</Link>}
        />
    )
}

export default notFound;