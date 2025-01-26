import { NextFunction, Request, Response } from "express";
import { signInSchema, signUpSchema } from "../zodSchema/zodSchema";
import { UserRepository } from "../repository/userRepositry";
import { NotFoundError, UnauthorizedError } from "../errors/HttpErrors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_USER } from "../types";
export class UserController {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, name } = signUpSchema.parse(req.body);
      await this.userRepository.createUser({
        email,
        password,
        name,
      });
      return res.status(200).json({
        message: "User created successfully",
      });
    } catch (error: any) {
      next(error);
    }
  }

  async signInUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = signInSchema.parse(req.body);
      const user = await this.userRepository.findUserByEmail(email);
      if (!user) {
        throw new NotFoundError("User not found");
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
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
}
