import { Router } from "express";
import userRouter from "./routes/user";
import adminRouter from "./routes/admin";
import productRouter from "./routes/product";
import commentRouter from "./routes/comment";


const v1Router = Router()

v1Router.use("/user",userRouter);
v1Router.use("/admin",adminRouter);
v1Router.use("/product",productRouter)
v1Router.use("/comment",commentRouter)


export default v1Router