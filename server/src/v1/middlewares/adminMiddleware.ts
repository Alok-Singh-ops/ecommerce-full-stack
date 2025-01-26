import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../errors/HttpErrors";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { JWT_USER } from "../types";

const prisma = new PrismaClient();

export const adminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new UnauthorizedError("Authorization token is missing");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET || "") as JWT_USER;

    if (!decodedToken || !decodedToken.email) {
      throw new UnauthorizedError("Invalid or malformed token");
    }
    const user = await prisma.admin.findFirst({
      where: {
        email: decodedToken.email,
      },
    });

    if (!user) {
      throw new UnauthorizedError("User is not authorized");
    }

    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      next(new UnauthorizedError("Invalid or expired token"));
    } else {
      next(err);
    }
  }
};
