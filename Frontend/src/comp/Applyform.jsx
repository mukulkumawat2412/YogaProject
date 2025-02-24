




import { Box, TextField } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { ApplyTherepy } from '../redux/slices/ApplytherepySlice'
import { useNavigate } from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';












function Applyform() {
    const { handleSubmit, register,setValue } = useForm()
    const dispatch = useDispatch()
    const nevigate = useNavigate()









    const onSubmit = async (data) => {
        console.log(data)
        dispatch(ApplyTherepy(data))
        nevigate("/postDetails")
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center w-full px-6 mt-4'>
                <div className='w-11/12 mt-4 md:w-8/12 lg:w-4/12'>
                    <h1 className='text-3xl font-bold text-center text-purple-400'>User Details</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{
                                '& > :not(style)': {},
                                display: 'flex',
                                alignItems: "center",
                                flexDirection: "column",
                                mt: "12px",
                                width: "100%"
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField className='w-full' {...register("name")}
                                id="outlined-basic" label="User Name" variant="outlined" sx={{ mb: "7px" }} />

                            <TextField className='w-full' {...register("age")}
                                id="outlined-basic" label="User Age" variant="outlined" sx={{ mb: "7px" }} />



                            <FormControl className='w-full' variant="outlined" sx={{ mb: "7px" }}>
                                <InputLabel>User Gender</InputLabel>
                                <Select
                                    {...register("gender")}
                                   
                                    onChange={(e) => setValue("gender", e.target.value)}
                                    label="User Gender"
                                >
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>





                            <TextField className='w-full' {...register("date")} type='date'
                                id="outlined-basic" variant="outlined" sx={{ mb: "7px" }} />

                            <TextField className='w-full' {...register("therepyname")}
                                id="outlined-basic" label="Therapy Name" variant="outlined" sx={{ mb: "7px" }} />

                            <button type="submit" className="w-full p-2 mt-3 text-white rounded-lg bg-sky-500">
                                Add Details
                            </button>
                        </Box>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Applyform;
