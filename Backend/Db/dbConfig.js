import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const URI = process.env.MONGO_URI

const dbConnect = async ()=>{
    try {
      await  mongoose.connect(URI)
        
        console.log("database Connected Successfully")

    } catch (error) {
        console.log(error)
        
    }

}


export default dbConnect