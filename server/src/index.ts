
import express, { Request, Response } from 'express';
import v1Router from './v1';
import {config} from "dotenv"
import { errorHandler } from './v1/middlewares/errorHandler';
config()
const app = express();
const PORT  = 3000;

app.use(express.json())
app.use("/v1",v1Router)



app.get("/health",(req:Request,res:Response)=>{
    res.status(200).json({
        message: "Server is up and running"
    })
})


// test


app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})