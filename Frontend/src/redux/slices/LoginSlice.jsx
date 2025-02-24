import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"
import {jwtDecode} from "jwt-decode"
import { toast } from "sonner"


export const login = createAsyncThunk("/login",async(loginData,{rejectWithValue})=>{
    try {
        
    const data =  await axios.post("http://localhost:7000/api/login",loginData)
    console.log(data)
        return data
    } catch (error) {
        rejectWithValue(error)
        
    }

})




const initialState = {
    loading:false,
    error:null,
    token:null,
    role:null
}



export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state)=>{
            state.token = null,
            state.role = null,
            localStorage.removeItem("token")
            localStorage.removeItem("role")
            localStorage.removeItem("id")

        }

    },

    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.loading = true

        }).addCase(login.fulfilled,(state,action)=>{
            console.log(action)
            state.loading = false
            const {token} = action.payload.data
            console.log(token)
            const {role,id,name} = jwtDecode(token)
            state.token = token
            state.role = role,

      
            

            localStorage.setItem('token',token)
            localStorage.setItem('role',role)
            localStorage.setItem('id',id)
        
            toast.success("login Successful")
           
        }).addCase(login.rejected,(state,action)=>{

            console.log(action)

            state.loading = false,
            state.error = action.payload.data.message
            toast.error(action.payload.data.message)

        })

    }
    
})





export const {logout} = authSlice.actions
export default authSlice.reducer;