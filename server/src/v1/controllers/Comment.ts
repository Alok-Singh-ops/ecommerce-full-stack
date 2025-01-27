import { NextFunction, Request, Response } from "express";
import { CommentRepository } from "../repository/commentRepositry";
import { BadRequestError, NotFoundError } from "../errors/HttpErrors";
import { addCommentSchema } from "../zodSchema/zodSchema";
import jwt from "jsonwebtoken";
import { JWT_USER } from "../types";
export class CommentController {
  private commentRepository: CommentRepository;

  constructor() {
    this.commentRepository = new CommentRepository();
  }

  async getComment(req: Request, res: Response, next: NextFunction) {
    try {
      const queries = req.query;
      const { productId, pageNo, pageSize } = queries;

      if (!productId || typeof productId !== "string") {
        throw new NotFoundError("No such product");
      }

      const parsedPageNo = parseInt(pageNo as string, 10) || 1;
      const parsedPageSize = parseInt(pageSize as string, 10) || 10;

      const comments = await this.commentRepository.getAllCommentsOnProducts(
        productId,
        parsedPageNo,
        parsedPageSize
      );

      return res.json({
        message: "Comment fetched successfully",
        comments,
      });
    } catch (error) {
      next(error);
    }
  }

  async postComment(req: Request, res: Response, next: NextFunction) {
    try {
      const decodedToken = jwt.decode(
        req.headers.authorization || ""
      ) as JWT_USER;

      const { comment, productId } = addCommentSchema.parse(req.body);
      await this.commentRepository.postComment(
        productId,
        decodedToken.userId,
        comment
      );
      res.status(200).json({
        message: "Comment added successfully",
      });
    } catch (error) {
      next(error);
    }
  }
}
