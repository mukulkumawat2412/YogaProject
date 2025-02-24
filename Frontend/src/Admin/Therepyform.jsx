import { Box, TextField } from "@mui/material";


import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {createYoga} from "../redux/slices/YogaSlice"
import { useNavigate } from "react-router-dom";




function Therepyform() {

    

    const { handleSubmit, register } = useForm()

    const dispatch = useDispatch()
    const nevigate = useNavigate()

    const onSubmit = async(data) => {
        console.log(data)
        nevigate("/dashboard")
        
        const formData = new FormData()
       
        formData.append("name",data.name)
        formData.append("title",data.title)
        formData.append("YogaDescription",data.YogaDescription)
        formData.append("image",data.image[0])

        
     dispatch(createYoga(formData))
     






    }







    return (
        <>
            <div className='flex flex-col justify-center w-full mt-4'>
                <div className='w-full mt-4 '>
                    <h1 className='text-3xl font-bold text-center text-purple-400'>Add Yoga Therepy</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{ '& > :not(style)': {}, display: 'flex', alignItems: "center", flexDirection: "column", mt: "12px" }}
                            noValidate
                            autoComplete="off"
                        >

                            <TextField className='w-11/12 ' {...register("name")}
                                id="outlined-basic" label="Naturopathy & Neurotherapy Name" variant="outlined" sx={{ mb: "7px" }} />

                            <TextField className='w-11/12 ' {...register("title")}
                                id="outlined-basic" label=" Naturopathy & Neurotherapy title" variant="outlined" sx={{ mb: "7px" }} />

                            <TextField className='w-11/12 '{...register("YogaDescription")}
                                id="outlined-basic" label=" Naturopathy & Neurotherapy description" variant="outlined" sx={{ mb: "7px" }} />

                          
                            
                            <label>Image</label>    
                            <input className="input_field" type="file"{...register('image')} placeholder="Enter price"/>
                        
                            <button type="submit" className="p-2 mt-3 text-white bg-orange-500 rounded-lg">Add Therepy</button>

                        </Box>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Therepyform;




