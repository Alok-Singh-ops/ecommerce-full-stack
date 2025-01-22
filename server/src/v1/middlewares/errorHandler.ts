import { ErrorRequestHandler, Request, Response, NextFunction } from "express";
import { BaseError } from "../errors/BaseError";
import { ValidationError } from "../errors/ValidationErrors";
import { DatabaseError } from "../errors/DatabaseErrors";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error({
    name: error.name,
    message: error.message,
    stack: error.stack,
    path: req.path,
    method: req.method,
  });

  if (error instanceof BaseError) {
    res.status(error.statusCode).json({
      status: "error",
      message: error.message,
      ...(error instanceof ValidationError && { errors: error.errors }),
    });
    return;
  }

  if (error instanceof ZodError) {
    const validationError = new ValidationError(error);
    res.status(validationError.statusCode).json({
      status: "error",
      message: validationError.message,
      errors: validationError.errors,
    });
    return;
  }
  if (
    error instanceof Prisma.PrismaClientKnownRequestError ||
    error instanceof Prisma.PrismaClientUnknownRequestError
  ) {
    const dbError = new DatabaseError(error);
    res.status(dbError.statusCode).json({
      status: "error",
      message: dbError.message,
    });
    return;
  }

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
  return;
};
