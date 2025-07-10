import { toast } from "sonner";
import { useActionFeedback } from "./hooks/use-action-feedback";
import { ActionState } from "./utils/error-to-action"

type FormProps = {
    action: (payload: FormData) => void,
    actionState: ActionState,
    children: React.ReactNode,
}

/** Abstracted form component to make ticket-upsert-form a bit more lightweight */ 
export const Form = ({action, actionState, children}: FormProps ) => {

    useActionFeedback(actionState, {
        onSuccess: ({ actionState }) => {
            if (actionState.message) {toast.success(actionState.message)}
            },
        onError: ({ actionState }) => {
            if (actionState.message) {toast.error(actionState.message)}
            },
    });  

    return (
        <form action={action} className="flex flex-col gap-y-2">
            {children}
        </form>
    )
}