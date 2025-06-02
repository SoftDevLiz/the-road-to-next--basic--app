// This code initializes a singleton instance of the Prisma Client for database interactions. 
// It ensures that the same instance is reused during development to avoid exhausting database connections. 
// In production, a new instance is created for each request.

import { PrismaClient } from "../../generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;