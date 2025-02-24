import mongoose from 'mongoose';

const YogSchema = new mongoose.Schema({

name:{
    type:String
},


  title: {
    type: String,
  },

 

YogaDescription: {
    type: String,
  },


  image:{
    type:String
  },


  postedBy : {type : Date , default : Date.now()},





 





 
  
 
});

const Yog = mongoose.model('Yog', YogSchema);

export default Yog;
