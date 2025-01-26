import { Router,Request,Response,NextFunction } from "express";


const commentRouter = Router()



// TODO: get all comments on a specific product
const getComment = (req:Request,res:Response,next:NextFunction)=>{
    const queries =   req.query
    const {postId,pageNo,pageSize}  = queries
}



//TODO: POST a comment on a specific product by a single user


// TODO: Soft delete the comment by the user










export default commentRouter


