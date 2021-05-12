import Prisma from "@prisma/client";

const prisma = new Prisma.PrismaClient();

async function main() {
  await prisma.task.create({
    data: {
      name: `Todo`,
    },
  });

  const tasks = await prisma.task.findMany();

  console.table(tasks);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
