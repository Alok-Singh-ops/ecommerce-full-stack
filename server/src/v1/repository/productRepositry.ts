import { PrismaClient } from "@prisma/client";
import { Product } from "../types";

const prisma = new PrismaClient();

export class ProductRepositry {
  async addProduct(data: Product) {
    // TODO: add logic to store img
    return prisma.product.create({
      data: {
        title: data.title,
        description: data.description || "",
        price: data.price,
        imgUrl: "",
      },
    });
  }
  async getProdcuts(pageNo:number,pageSize:number){
    return prisma.product.findMany({
        skip: (pageNo-1) * pageSize,
        take: pageSize
    })
  }

  async getSingleProdcut(id: string){
    return prisma.product.findFirst({
        where:{
            id
        }
    })
  }

}
