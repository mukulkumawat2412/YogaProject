import dotenv from "dotenv";
dotenv.config();


import express from "express"
import dbConnect from "./Db/dbConfig.js"
import cors from "cors"
import {router as UserRoute} from "./Routes/UserRoute.js"
import {router as YogaRoute} from "./Routes/YogaRoute.js"
import {router as ApplyRoute} from "./Routes/ApplyRoute.js"

import path from "path"

const _dirname = path.resolve()




const app = express()




app.use(cors())

dbConnect()


app.use(express.json())
app.use(express.static("public/upload"))





app.use("/api",UserRoute)
app.use("/api",YogaRoute)
app.use("/api",ApplyRoute)



app.use(express.static(path.join(_dirname,"Frontend/dist")))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"Frontend","dist","index.html"))

})


app.listen(process.env.PORT,()=>{
    console.log(`Server is Running on Port :-${process.env.PORT}`)

})