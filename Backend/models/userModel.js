import mongoose from "mongoose"
import validator from "validator"
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({

    name: {
        type: String,
      
    },


    email:{
        type:String,
    
    },


    password: {
        type: String,

        validate: {

            validator: function (value) {
                return validator.isStrongPassword(value, { minLength: 8, minSymbols: 1, minNumbers: 1, minUppercase: 1 })
            },
            message: "Password must contain 1 special Character , 1 Uppercase , 1 Lowercase"
        }
    },


    role: {
        type: String,
        enum: ['admin', 'user'],
         default: 'admin'
    },









});







userSchema.pre('save', async function(){
    console.log('doc save')
    if(this.isModified('password') )
    {
        this.password = await bcrypt.hash(this.password , 12)
    }
    
    
   
})




const User = mongoose.model("User",userSchema)

export default User