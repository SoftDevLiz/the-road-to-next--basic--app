import { useEffect, useRef } from "react"
import { ActionState } from "../utils/error-to-action"

type onArgs = {
    actionState: ActionState
}

type UseActionFeedbackOptions = {
    onSuccess?: (Args: onArgs) => void,
    onError?: (Args: onArgs) => void
}

/** Custom (generic) hook that is used to display a toast message depening on the action state (succesful, error, etc.). 
 * The options param is the onSuccess or onError functions that you want to run depending on the state, which is passed from the outside.
 */
export const useActionFeedback = (actionState: ActionState, options: UseActionFeedbackOptions) => {
    // Checks incoming action state timestamps and compares in order to make sure that the useEffect only runs when there has been a change in the action state
    const prevTimestamp = useRef(actionState.timestamp);
    const isUpdate = prevTimestamp.current !== actionState.timestamp;

    useEffect(() => {
        if (!isUpdate) return;

        if (actionState.status === "SUCCESS") {
            options.onSuccess?.({ actionState })
        } else if (actionState.status === "ERROR") {
            options.onError?.({ actionState })
        }
        
        prevTimestamp.current = actionState.timestamp;
    }, [isUpdate, actionState, options])
}