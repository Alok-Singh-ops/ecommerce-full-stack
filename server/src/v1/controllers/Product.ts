import { NextFunction, Request, Response } from "express";
import { ProductRepositry } from "../repository/productRepositry";
import { addProductSchema } from "../zodSchema/zodSchema";
import { Product } from "../types";
import { NotFoundError } from "../errors/HttpErrors";

export class ProductController {
    private productRepository: ProductRepositry
    constructor(){
        this.productRepository = new ProductRepositry();
    }
    private PAGE_NO = 1
    private PAGE_SIZE = 10



    async addProduct(req:Request,res:Response,next:NextFunction){
        try {
            const {price,title,description,imgUrl}  = addProductSchema.parse(req.body);
            const data:Product = {
                price,
                title,
                description,
                imgUrl
            }
            const product = await this.productRepository.addProduct(data)  
            res.status(200).json({
                message: "Product added successfully",
                product
            })  

        } catch (error) {
            next(error)
        }
        
    }
    async getProducts(req:Request,res:Response,next:NextFunction){
      const queries = req.query
      const pageNo = parseInt(queries.page as string) || this.PAGE_NO
      const pageSize = parseInt(queries.pageSize as string) || this.PAGE_SIZE
       const products = await this.productRepository.getProdcuts(pageNo,pageSize)
       return res.status(200).json(products)
    }

    async getSingleProdcut(req:Request,res:Response,next:NextFunction){
        try {
            const id = req.params.id
           const product =  await this.productRepository.getSingleProdcut(id)
            return res.json(product)
        } catch (error) {
            next(error)
        }
      
    }




}