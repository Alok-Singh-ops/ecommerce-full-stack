import { Router } from "express";
import userRouter from "./routes/user";
import adminRouter from "./routes/admin";

const v1Router = Router()

v1Router.use("/user",userRouter);
v1Router.use("/admin",adminRouter);





export default v1Router