

import User from "../models/userModel.js"

import { comparePassword } from "../utils/password.js"
import { generateToken } from "../utils/jwt.js"





const Register = async (req, res) => {
   try {
      const {email} = req.body

      const ExistingUser = await User.findOne({email})
    

      if(ExistingUser){
        res.status(404).json({
            message:"User already exists"
        })
      }


    const user =  await User.create(req.body)

      console.log(user)
    if(user){
      res.status(201).json({
         message:"user Register success",
         data:user
      })
    }

 
      

      
   } catch (error) {
      res.status(404).json({
         error:error.message
      })
      
   }


}




const Login =  async(req, res) => {
  
  try {
    const {email,password} = req.body
  

  const ExistingUser = await User.findOne({ email });

  if (!ExistingUser) {
    return res.status(400).json({
      message: 'User is not registered'
    });
  }

  
  const MatchPassword = await comparePassword(password, ExistingUser.password);

  if (!MatchPassword) {
    return res.status(400).json({
      message: 'Password does not match , Please enter correct password',
    });
  }


   const token = generateToken({role: ExistingUser.role, id: ExistingUser._id,  name: ExistingUser.name,});


 res.status(200).json({
    message: 'Login Successfull',
    token,
  });
    
  } catch (error) {
    res.status(404).json({
      message:error.message
    })
    
  }
  
};










  





  export { Register, Login };
  
  