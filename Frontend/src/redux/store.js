import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../redux/slices/LoginSlice"
import YogaReducer from "../redux/slices/YogaSlice"
import TherepyReducer from "../redux/slices/ApplytherepySlice"




const store = configureStore({
    reducer:{
        auth:AuthReducer,
        Yog:YogaReducer,
        Therepy:TherepyReducer
      
        
    }
})



export default store