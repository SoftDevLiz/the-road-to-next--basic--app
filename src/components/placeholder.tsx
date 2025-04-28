import { LucideMessageSquareWarning } from "lucide-react";
import Link from "next/link";
import { cloneElement } from "react";
import { buttonVariants } from "./ui/button";

type PlaceholderProps = {
    label: string;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>, "svg">;
    buttonPath?: string;
    buttonLabel?: string;
}
/** A placeholder component which can be customised.
 *  Takes the following props: 
    label (message to user),
    icon? (optional custom icon, but renders its own default icon),
    buttonPath? (optional url path for a button),
    buttonLabel? (optional button label, will not show if no buttonPath has been passed to it)
 */
const Placeholder = ({ label, icon = <LucideMessageSquareWarning />, buttonPath, buttonLabel }: PlaceholderProps) => {

    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon, {
                className: "w-16 h-16",
            })}
            <h2 className="text-lg text-center">{label}</h2>
            {/* Checks if a path has been passed to it and renders either the button or a div to make up for a height
                difference in the event that two of these placeholders are next to each other 
                (one with a button, one without) */}
            {buttonPath ? 
                <Link href={buttonPath} className={buttonVariants({ variant: 'outline'})}>{buttonLabel}</Link> 
                : <div className="h-10"/>}
        </div>

    )
}

export { Placeholder };