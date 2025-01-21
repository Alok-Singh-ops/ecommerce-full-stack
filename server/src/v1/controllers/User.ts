import { Request, Response } from "express";
import { signInSchema } from "../zodSchema/zodSchema";

export class UserController {


    public async signIn(req:Request,res:Response){
        try {
             signInSchema.parse(req.body)
        } catch (error) {
            console.log(error)
        }
     
    }




}