import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

// Determine if we are mocking or actually connecting to a DB.
// Since the user is moving away from Supabase specifically, we set up Prisma.
// For Prisma V7, we pass the URL if we have it, else mock it so build doesn't fail.

const connectionString = process.env.DATABASE_URL || "postgres://dummy:dummy@localhost:5432/dummy"
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)

const prismaClientSingleton = () => {
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
