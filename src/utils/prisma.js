import { PrismaClient } from '@prisma/client'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL;

const prismaClientSingleton = () => {
  if (!connectionString) {
    console.warn("⚠️ DATABASE_URL is not set. Prisma will not be able to connect to the database.");
    // Return a dummy client or a client that throws a clear error
    // We pass a dummy adapter just so instantiation doesn't crash during build
    const dummyPool = new Pool({ connectionString: "postgres://dummy:dummy@localhost:5432/dummy" })
    return new PrismaClient({ adapter: new PrismaPg(dummyPool) })
  }

  const pool = new Pool({ connectionString })
  const adapter = new PrismaPg(pool)
  return new PrismaClient({ adapter })
}

const globalForPrisma = globalThis

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma
