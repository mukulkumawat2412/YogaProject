import Yog from "../models/YogModel.js";
import { sendSuccess } from "../utils/response.js";


const createYoga = async (req, res) => {
  try {
    const { name, title, YogaDescription } = req.body

    const image = req.file.filename

    const yog = await Yog.create({ name, title, YogaDescription, image });
    
    console.log(yog)

    if (!yog){

      return res.status(400).json({
        message: 'Something went wrong',
      });

    }

    sendSuccess('Naturopathy is succesfully created', yog, res);

  } catch (error) {

    console.log(error);
    return res.status(400).json({

      message: error.message,
    });
  }
};




const getYoga = async (req, res) => {

  try {

    const Yoga = await Yog.find().sort({postedBy:-1}).skip(2).limit(5)

   
    sendSuccess('Yoga fetched successfully', { Yoga }, res);


  } catch (error) {
    res.status(404).json({
      error: error.message
    })
  }



}






const updateIdData = async (req, res) => {

  const id = req.params.yogId
  try {
    const myIdData = await Yog.findById(id)

    res.status(200).json({
      myIdData
    })




  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }




}



const updateAllData = async (req, res) => {

  const id = req.params.id
  const { yname, ydesc, ytitle } = req.body

  const filename = req.file.filename

  console.log(req.file)

  try {

    if (req.file) {

      const updateData = await Yog.findByIdAndUpdate(id, { name: yname, title: ydesc, YogaDescription: ytitle, image: filename })


      res.status(200).json({
        message: "successfully Updated",
        updateData

      })



    } else {

      await Yog.findByIdAndUpdate(id, {name: yname, title: ydesc, YogaDescription: ytitle})

    }



  } catch (error) {
    res.status(404).json({
      error: error.message
    })

  }



}







const DeleteYogData = async (req, res) => {

  const id = req.params.id

  console.log(id)

  try {


    await Yog.findByIdAndDelete(id)


    res.json({
      status: 200,
      message: "Successfully Deleted"

    })
  } catch (error) {
    res.json({
      status: 400,

    })


  }

}














export { createYoga, getYoga, updateIdData, updateAllData, DeleteYogData };