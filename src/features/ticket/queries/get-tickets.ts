import { initialTickets } from "@/data"

// Simulate data fetching
export const getTickets = async () => {

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return new Promise((resolve) => {
        resolve(initialTickets)
    })
}