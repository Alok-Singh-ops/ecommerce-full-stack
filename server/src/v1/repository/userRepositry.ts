import { PrismaClient } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import bcrypt from "bcrypt";
import { ZodError, ZodIssue } from "zod";
const prisma = new PrismaClient();

export class UserRepository {
  async createUser({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword, // Save hashed password
        name,
      },
    });
    return user
  }

  async getUserById(userId: string) {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }

  async updateUser(
    userId: string,
    data: { email?: string; name?: string; password?: string }
  ) {
    return prisma.user.update({
      where: {
        id: userId,
      },
      data,
    });
  }

  async deleteUser(userId: string) {
    return prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }

  // Additional: Find User by email
  async findUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
