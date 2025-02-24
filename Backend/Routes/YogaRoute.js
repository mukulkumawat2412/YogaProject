import express from 'express' ;

export const router = express.Router()
import {createYoga,DeleteYogData,getYoga, updateAllData, updateIdData} from "../Controllers/YogController.js"


import multer from "multer"


const Storage = multer.diskStorage({
    destination:(req,file, cb)=>{
       cb(null,"./public/upload");

    },


    filename: function (req,file,cb){
        cb(null, Date.now()+file.originalname);
    }



})


    let upload =  multer({
        storage:Storage,
        limits:{
            fileSize:20*1024*1024

        }

    })
    







router.post('/createYoga',upload.single("image"), createYoga)
router.get('/Yoga', getYoga)
router.get("/yogUpdateData/:yogId",updateIdData) 
router.put("/yogUpdate/:id",upload.single("yimage"),updateAllData)
router.delete("/deleteyogData/:id",DeleteYogData)


