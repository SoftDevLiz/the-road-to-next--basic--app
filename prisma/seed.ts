import { PrismaClient } from "../src/generated/prisma/client"

const prisma = new PrismaClient();

// seed tickets for db
const tickets = [
    {
        title: "Ticket 1",
        content: "First ticket from database",
        status: "DONE" as const,
    },
    {
        title: "Ticket 2",
        content: "Second ticket from database",
        status: "OPEN" as const,
    },
    {
        title: "Ticket 3",
        content: "Third ticket from database",
        status: "IN_PROGRESS" as const,
    },
]

// function to seed db
const seed = async () => {
    await prisma.ticket.deleteMany();
    await prisma.ticket.createMany({ data: tickets });
}

seed().catch((error) => {
    console.error('Error seeding database:', error);
    process.exit(1);
});