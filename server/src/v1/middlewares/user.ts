import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { UnauthorizedError } from "../errors/HttpErrors";
export const userMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.headers.authorization
    console.log(token)
    if (!token) {
        console.log("No token was provided")
        throw new UnauthorizedError();
    }
    const isTokenValid = jwt.verify(token,process.env.JWT_SECRET || "")
    if (!isTokenValid) {
        console.log("token is not valid")

        throw new UnauthorizedError();
    }
    next()
}