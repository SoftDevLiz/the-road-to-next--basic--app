import * as z from "zod/v4";

export type ActionState = { message: string , payload?: FormData }

/** Returns errors from zod, db, or unknown source to the action state so we have feedback on what a potential issue might be at the end of the action lifecycle */
export const fromErrorToActionState = (error: unknown, formData: FormData): ActionState => {
    // if input field validation error... 
    if (error instanceof z.ZodError) {
    // Zod 4 returns errors in an array, we use prettifyError in order to change it to a pretty string
    const zodError = z.prettifyError(error)
        return { 
            message: zodError,
            payload: formData 
        } 
    // if db error...
    } else if (error instanceof Error) { 
        return {
            message: error.message, 
            payload: formData
        }
    // if unknown error that's not coming from zod or db...
    } else {
        return {
            message: "An unknown error occured",
            payload: formData
        }
    }

}



