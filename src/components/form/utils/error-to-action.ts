import * as z from "zod/v4";

export type ActionState = {
    status?: "SUCCESS" | "ERROR",
    message: string, 
    fieldErrors: Record<string, string[] | undefined>, 
    payload?: FormData,
    timestamp: number
}

export const EMPTY_ACTION_STATE: ActionState =  { message: "", fieldErrors: {}, timestamp: Date.now() };

/** Returns errors from zod, db, or unknown source to the action state so we have feedback on what a potential issue might be at the end of the action lifecycle */
export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {
    // if input field validation error... 
    if (error instanceof z.ZodError) {
    const flatErr = z.flattenError(error)

        return {
            status: "ERROR",
            message: error.issues[0].message,
            fieldErrors: flatErr.fieldErrors,
            payload: formData,
            timestamp: Date.now() 
        } 
    // if db error...
    } else if (error instanceof Error) { 
        return {
            status: "ERROR",
            message: error.message,
            fieldErrors: {},
            payload: formData,
            timestamp: Date.now()
        }
    // if unknown error that's not coming from zod or db...
    } else {
        return {
            status: "ERROR",
            message: "An unknown error occured",
            fieldErrors: {},
            payload: formData,
            timestamp: Date.now()
        }
    }
}

export const toActionState =  (status: ActionState["status"], message: string): ActionState => {
    return { status, message, fieldErrors: {}, timestamp: Date.now() }
}



