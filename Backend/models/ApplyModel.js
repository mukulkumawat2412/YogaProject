import mongoose from "mongoose"


const applySchema = new mongoose.Schema({

    name: {
        type: String
    },

    therepyname: {
        type: String
    },

    age: {
        type: String

    },

    gender: {
        type: String
    },

    date: {
        type: Date
    },


    postedBy: {
        type: Date,
        default: Date.now()
    },

})



const Apply = mongoose.model("Apply", applySchema)

export default Apply;