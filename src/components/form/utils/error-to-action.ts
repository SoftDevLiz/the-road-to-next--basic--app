import * as z from "zod/v4";

export type ActionState = { 
    message: string, 
    fieldErrors: Record<string, string[] | undefined>, 
    payload?: FormData 
}

export const EMPTY_ACTION_STATE: ActionState =  { message: "", fieldErrors: {} };

/** Returns errors from zod, db, or unknown source to the action state so we have feedback on what a potential issue might be at the end of the action lifecycle */
export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {
    // if input field validation error... 
    if (error instanceof z.ZodError) {
    const flatErr = z.flattenError(error)

        return { 
            message: error.issues[0].message,
            fieldErrors: flatErr.fieldErrors,
            payload: formData 
        } 
    // if db error...
    } else if (error instanceof Error) { 
        return {
            message: error.message,
            fieldErrors: {},
            payload: formData
        }
    // if unknown error that's not coming from zod or db...
    } else {
        return {
            message: "An unknown error occured",
            fieldErrors: {},
            payload: formData
        }
    }
}

export const toActionState =  (message: string): ActionState => {
    return { message, fieldErrors: {} }
}



