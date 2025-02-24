import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {getToken} from "../../lib/utils.js"
import { toast } from "sonner";

const initialState = {
  loading: false,
  error: null,
  Yoga: [],


};

export const getYoga = createAsyncThunk('/Yoga', async (_,{ rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:7000/api/Yoga',{
    
    });

    return response.data;

  } catch (error) {
    
    return rejectWithValue(error);
  }
}
);




export const createYoga = createAsyncThunk('/get/createYoga', async (jobPayload, { rejectWithValue }) => {
  
  try {
    const response = await axios.post('http://localhost:7000/api/createYoga', jobPayload,
      
    );
    return response.data;

  } catch (error) {

    return rejectWithValue(error);
  }
}
);




const YogaSlice = createSlice({
  name: 'yog',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getYoga.pending, (state, action) => {
        state.loading = true;

      })
      .addCase(getYoga.fulfilled, (state, action) => {
        console.log(action.payload);
        (state.loading = false),
          (state.Yoga = action.payload.data.Yoga);
      
      })
      .addCase(getYoga.rejected, (state, action) => {
        console.log(action.payload.message);
        (state.loading = false), (state.error = action.payload.message);

      }).addCase(createYoga.pending, (state, action) => {
        state.loading = true;
        const loadingId = toast.loading('Create Naturopathy....');
        state.toastId = loadingId;

      }).addCase(createYoga.fulfilled, (state, action) => {
        (state.loading = false), toast.dismiss(state.toastId);
        toast.success(action.payload.message);

      }).addMatcher((action)=>action.type.endsWith('/rejected'),(state,action)=>{
        state.loading = false,
        toast.dismiss(state.toastId)
        toast.error(action.payload?.data?.message)
        state.error = action.payload?.data?.message
      })
  },


})

console.log(YogaSlice)

export default YogaSlice.reducer