import { NextFunction, Request, Response, Router } from "express";
import { UserController } from "../controllers/User";

const userRouter = Router()


const userController = new UserController();
// todo: signin 


userRouter.get("/",(req:Request,res:Response)=>{
    


})

userRouter.post("/signup",(req:Request,res:Response,next:NextFunction)=>{
    userController.createUser(req,res,next)
})




// todo: signup


export default userRouter