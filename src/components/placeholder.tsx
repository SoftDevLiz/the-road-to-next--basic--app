import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";;

type PlaceholderProps = {
    label: string;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>, "svg">;
    button?: React.ReactElement;
}
/** A placeholder component which can be customised.
 *  Takes the following props: 
    label (message to user),
    icon? (optional custom icon, but renders its own default icon),
    button? (optional button)
 */
const Placeholder = ({ label, icon = <LucideMessageSquareWarning />, button }: PlaceholderProps) => {

    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon, {
                className: "w-16 h-16",
            })}
            <h2 className="text-lg text-center">{label}</h2>
            {/* Checks if a button has been passed to it and renders either the button or a div to make up for a height difference in the event that two of these placeholders are next to each other 
            (one with a button, one without) */}
            {button ? button : <div className="h-10" />}
        </div>
    )
}

export { Placeholder };
