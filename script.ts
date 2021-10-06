import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // // ... you will write your Prisma Client queries here
  // const allUsers = await prisma.user.findMany({
  //   include: { posts: true },
  // })
  // // use `console.dir` to print nested objects
  // console.dir(allUsers, { depth: null })

  // NOTE: prisma/mongo currently has an issue where it blows up when querying
  // more than a 100 documents
    const counties = await prisma.harvest.findMany({ select: { county: true }, distinct: ["county"] });
    console.log({ counties });
    // const allHarvestData = await prisma.harvest.findMany({ skip: 3000, take: 100, orderBy: [{ county: "asc" }, { year: "asc" }]});
    // console.dir(allHarvestData, { depth: null });
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
