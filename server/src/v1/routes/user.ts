import { Request, Response, Router } from "express";
import { UserController } from "../controllers/User";

const userRouter = Router()


const userController = new UserController();
// todo: signin 


userRouter.get("/",(req:Request,res:Response)=>{
    


})

userRouter.post("/signin",(req:Request,res:Response)=>{
    userController.signIn(req,res)
})


// todo: signup


export default userRouter