import { NextFunction, Request, Response, Router } from "express";
import { adminMiddleware } from "../middlewares/adminMiddleware";
import { signInSchema } from "../zodSchema/zodSchema";
import { PrismaClient } from "@prisma/client";
import { NotFoundError, UnauthorizedError } from "../errors/HttpErrors";
import { JWT_USER } from "../types";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const adminRouter = Router();
const prisma = new PrismaClient()
adminRouter.post(
  "/signin",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = signInSchema.parse(req.body);
      const user = await prisma.admin.findFirst({
        where: {
          email
        }
      })
      if (!user) {
        throw new NotFoundError("User not found");
      }
      const isPasswordValid = user.password && password
      if (!isPasswordValid) {
        throw new UnauthorizedError("Invalid email or password");
      }

      const jwtUser:JWT_USER = {
        userId: user.id,
        email: user.email,
        createdAt: user.createdAt,
      };

      const token = jwt.sign(jwtUser, process.env.JWT_SECRET || "");
      res.status(200).json({
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);



export default adminRouter;
