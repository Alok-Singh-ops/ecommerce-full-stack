import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class CommentRepository {
  async getAllCommentsOnProducts(
    productId: string,
    pageNo: number,
    pageSize: number
  ) {
    const comment = prisma.comment.findMany({
      where: {
        productId,
      },
      skip: (pageNo - 1) * pageSize,
      take: pageSize,
    });
    console.log(comment, "comment");
    return comment;
  }

  async postComment(productId: string, userId: string, comment: string) {
    return prisma.comment.create({
      data: {
        comment,
        userId,
        productId,
      },
    });
  }
}
