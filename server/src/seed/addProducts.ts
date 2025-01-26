import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const promises = Array.from({ length: 1000 }, (_, index) =>
    prisma.product.create({
      data: {
        title: `Item ${index + 1}`,
        price: Math.random() * 100,
      },
    })
  );

  await Promise.all(promises);

  console.log("Products added successfully");
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
