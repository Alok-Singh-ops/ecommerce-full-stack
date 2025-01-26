import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const adminEmails = [
    {
      email: "admin1@gmail.com",
      password: "admin",
      name: "admin",
    },
  ];
  for (const admin of adminEmails) {
    try {
      await prisma.admin.create({
        data: {
          email: admin.email,
          password: admin.password,
          name: admin.name,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  console.log("Admin email have been added");
};

main();
