import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "sonner";

const initialState = {
  loading: false,
  error: null,
  Yoga: [],
};

// ✅ Get Yoga API (Fetch Data)
export const getYoga = createAsyncThunk("/Yoga", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("https://yogaproject-zuhz.onrender.com/api/Yoga");
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

// ✅ Create Yoga API (Save Data to Database)
export const createYoga = createAsyncThunk("/get/createYoga", async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      "https://yogaproject-zuhz.onrender.com/api/createYoga",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } } // ✅ Correct Headers for File Upload
    );

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
});

const YogaSlice = createSlice({
  name: "yog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ✅ Fetch Yoga Data Cases
      .addCase(getYoga.pending, (state) => {
        state.loading = true;
      })
      .addCase(getYoga.fulfilled, (state, action) => {
        state.loading = false;
        state.Yoga = action.payload?.data?.Yoga || [];
      })
      .addCase(getYoga.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch data";
      })

      // ✅ Create Yoga Cases
      .addCase(createYoga.pending, (state) => {
        state.loading = true;
        state.toastId = toast.loading("Creating Naturopathy...");
      })
      .addCase(createYoga.fulfilled, (state, action) => {
        state.loading = false;
        toast.dismiss(state.toastId);
        toast.success("Therapy Successfully Created!");

        // ✅ Update State After Creating a New Yoga Therapy
        state.Yoga.push(action.payload?.data || {});
      })
      .addCase(createYoga.rejected, (state, action) => {
        state.loading = false;
        toast.dismiss(state.toastId);
        toast.error(action.payload?.message || "Failed to create therapy");
        state.error = action.payload?.message || "Error occurred";
      });
  },
});

export default YogaSlice.reducer;
