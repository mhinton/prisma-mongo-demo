import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  // // ... you will write your Prisma Client queries here
  // const allUsers = await prisma.user.findMany({
  //   include: { posts: true },
  // })
  // console.dir(allUsers, { depth: null })

  const counties = await prisma.harvest.findMany({ select: { county: true }, distinct: ["county"] });
  // use `console.dir` to print nested objects
  console.dir(counties, { depth: null});
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
