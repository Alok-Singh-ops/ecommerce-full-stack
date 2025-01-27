import { Router,Request,Response,NextFunction } from "express";
import { CommentController } from "../controllers/Comment";
import { userMiddleware } from "../middlewares/user";


const commentRouter = Router()



const commentController  =new CommentController()


// TODO: get all comments on a specific product

commentRouter.get("/",(req:Request,res:Response,next:NextFunction)=>{
    commentController.getComment(req,res,next)   
})





//TODO: POST a comment on a specific product by a single user
commentRouter.post("/add-comment",userMiddleware,(req,res,next)=>{
    commentController.postComment(req,res,next)
})

// TODO: Soft delete the comment by the user










export default commentRouter


