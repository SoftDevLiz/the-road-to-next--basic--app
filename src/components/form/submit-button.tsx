import { LucideLoader } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
    label: string,
}

const SubmitButton = ({ label }: SubmitButtonProps) => {
    const { pending } = useFormStatus();

    return (
        <Button type="submit">
            { pending && <LucideLoader className="animate-spin" /> }
            {label}
        </Button>
    )
}

export default SubmitButton;