import Apply from "../models/ApplyModel.js"
import { sendSuccess } from "../utils/response.js";



const createTherepy = async (req, res) => {
    try {
      const { name, age, gender , date, therepyname} = req.body
  
      
  
      const Therepy = await Apply.create({name,age,gender,date,therepyname});
  
      console.log(Therepy)
  
      if (!Therepy) {
  
        return res.status(400).json({
          message: 'Something went wrong',
        });
  
      }
  
      sendSuccess('User Details is succesfully created', Therepy, res);
  
    } catch (error) {
  
      console.log(error);
      return res.status(400).json({
  
        message: error.message,
      });
    }
  };





  const getTherepy = async (req, res) => {

    try {
  
      const Therepy = await Apply.find().sort({postedBy:-1})
  
     
      sendSuccess('User Details fetched successfully', { Therepy }, res);
  
  
    } catch (error) {
      res.status(404).json({
        error: error.message
      })
    }
  
  
  
  }
  

















  
export { createTherepy , getTherepy };

