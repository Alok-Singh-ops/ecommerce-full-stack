import { NextFunction, Request, Response } from "express";
import { signInSchema } from "../zodSchema/zodSchema";
import { UserRepository } from "../repository/userRepositry";

export class UserController {
    private userRepository: UserRepository;
    constructor(){
        this.userRepository = new UserRepository();
    }
    async createUser(req:Request,res:Response,next:NextFunction){
        try {
            const{ email,password,name}  = req.body
            const user = await this.userRepository.createUser({email,password,name})
            return res.status(200).json({
                message: "User created successfully",
            })
        } catch (error: any) {
            throw error
    
        }
    }

    
}