import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import {getToken} from "../../lib/utils.js"
import { toast } from "sonner";

const initialState = {
  loading: false,
  error: null,
  ApplyTherepy: [],


};

export const getTherepy = createAsyncThunk('/Therepy', async (_,{ rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:7000/api/Therepy',{
    
    });

    return response.data;

  } catch (error) {
    
    return rejectWithValue(error);
  }
}
);




export const ApplyTherepy = createAsyncThunk('/get/createTherepy', async (jobPayload, { rejectWithValue }) => {
  
  try {
    const response = await axios.post('http://localhost:7000/api/createTherepy', jobPayload,
      
    );
    return response.data;

  } catch (error) {

    return rejectWithValue(error);
  }
}
);




const ApplySlice = createSlice({
  name: 'therepy',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(getTherepy.pending, (state, action) => {
        state.loading = true;

      })
      .addCase(getTherepy.fulfilled, (state, action) => {
        console.log(action.payload);
        (state.loading = false),
          (state.ApplyTherepy = action.payload.data.Therepy);
      
      })
      .addCase(getTherepy.rejected, (state, action) => {
        console.log(action.payload.message);
        (state.loading = false), (state.error = action.payload.message);

      }).addCase(ApplyTherepy.pending, (state, action) => {
        state.loading = true;
        const loadingId = toast.loading('Create User Details....');
        state.toastId = loadingId;

      }).addCase(ApplyTherepy.fulfilled, (state, action) => {
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

console.log(ApplySlice)

export default ApplySlice.reducer