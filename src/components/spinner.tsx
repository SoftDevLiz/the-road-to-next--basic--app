import { LucideLoader } from "lucide-react";

const Spinner = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center self-center">
            <LucideLoader className="w-16 h-16 animate-spin"/>
        </div>
    )
}

export { Spinner };