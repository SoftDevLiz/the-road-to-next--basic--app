import { useEffect } from "react"
import { ActionState } from "../utils/error-to-action"

type UseActionFeedbackOptions = {
    onSuccess?: () => void,
    onError?: () => void
}

/** Custom (generic) hook that is used to display a toast message depening on the action state (succesful, error, etc.). 
 * The options param is the onSuccess or onError functions that you want to run depending on the state, which is passed from the outside.
 */
export const useActionFeedback = (actionState: ActionState, options: UseActionFeedbackOptions) => {
    useEffect(() => {

        if (actionState.status === "SUCCESS") {
            options.onSuccess?.()
        } else if (actionState.status === "ERROR") {
            options.onError?.()
        }
        
    }, [actionState, options])
}