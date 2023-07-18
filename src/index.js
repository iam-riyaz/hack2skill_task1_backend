import express from 'express';
import { connectDB } from './db.js';
import dotenv from "dotenv"
import { Data1 } from './model/data1.model.js';
import { Data2 } from './model/data2.model.js';
import cors from "cors"
const app = express();
app.use(cors())
dotenv.config()
app.use(express.json())
const PORT= process.env.PORT || 2001

app.get("/", async(req,res) => {
    res.send("server is working")
})

// to get all joined data with this single route
app.get("/data", async(req,res)=>{
    try{
      const data= await Data1.aggregate([{$lookup:{from:"data_2",localField:"email",foreignField:"email",as:"data2"}}])
      res.status(200).send(data)
    }
    catch(err){
        console.log(err.message)
    }
})


// to start the server with mongo connection
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("port 2000 running")
    })
})
.catch(err=>console.log(err.message))
