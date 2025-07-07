import { ActionState } from "./utils/error-to-action";

type FieldErrorProps = {
    actionState: ActionState;
    fieldName: string,
}

/** Takes the actionState and extracts the field error for a specific form field. You have to pass the specific field name in order to get the error for that field. */
const FieldError = ({actionState, fieldName}: FieldErrorProps) => {
    const message = actionState.fieldErrors[fieldName]?.[0]

    return (
        <span className="text-red-500 text-xs">{message}</span>
    )
}

export default FieldError;