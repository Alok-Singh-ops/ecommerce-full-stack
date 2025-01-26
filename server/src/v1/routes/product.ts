import { NextFunction, Request, Response, Router } from "express";
import { adminMiddleware } from "../middlewares/adminMiddleware";
import { addProductSchema } from "../zodSchema/zodSchema";
import { ProductController } from "../controllers/Product";



const productRouter = Router();
const productController = new ProductController()


productRouter.post("/add-product",adminMiddleware,(req:Request,res:Response,next:NextFunction)=>{
    productController.addProduct(req,res,next)
})


productRouter.get("/all-products",(req,res,next)=>{
    productController.getProducts(req,res,next)
})


productRouter.get("/:id",(req,res,next)=>{

    productController.getSingleProdcut(req,res,next)
})






export default productRouter;