import express, { Request, Response } from 'express';
import v1Router from './v1';
const app = express();
const PORT  = 3000;

app.use(express.json())
app.use("/v1",v1Router)



app.get("/health",(req:Request,res:Response)=>{
    res.status(200).json({
        message: "Server is up and running"
    })
})


app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`)
})