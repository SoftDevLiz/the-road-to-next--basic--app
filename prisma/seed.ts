import { PrismaClient } from "../generated/prisma"

const prisma = new PrismaClient();

const tickets = [
    {
        title: "Ticket 1",
        content: "First ticket from the database",
        status: "DONE" as const,
        updatedAt: new Date(),
    },
    {
        title: "Ticket 2",
        content: "Second ticket from the database",
        status: "OPEN" as const,
        updatedAt: new Date(),
    },
    {
        title: "Ticket 3",
        content: "Third ticket from the database",
        status: "IN_PROGRESS" as const,
        updatedAt: new Date(),
    },
]

const seed = async () => {
    await prisma.ticket.createMany({
        data: tickets
    })
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });