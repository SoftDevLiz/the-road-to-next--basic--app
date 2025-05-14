"use client";

import { Placeholder } from "@/components/placeholder"

// Error boundary if there is an error while fetching ticket data
const Error = ({ error }: { error: Error}) => { 
    // ?? is the nullish coalescing operator, which returns the right-hand side operand when the left-hand side operand is null or undefined
    return <Placeholder label={error.message ?? "Something went wrong"} />
}

export default Error;