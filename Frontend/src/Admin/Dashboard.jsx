import React, { useEffect } from 'react'
import Left from './Left'
import { useDispatch, useSelector } from 'react-redux'
import { getYoga } from '../redux/slices/YogaSlice'

import { Link, useNavigate, useParams } from "react-router-dom"

import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios"


function Dashboard() {

    const dispatch = useDispatch()
    const nevigate = useNavigate()
   
    
    const { Yoga } = useSelector((state) => state.Yog)
    console.log(Yoga)

    useEffect(() => {
        dispatch(getYoga())
    }, [dispatch])


   

    function handleDelete(id){
        
        axios.delete(`http://localhost:7000/api/deleteyogData/${id}`).then((data)=>{
            console.log(data)
            if(data.status===200){
                nevigate("/dashboard")
            }
            
        })
    

    }





    


    return (
        <>
            <div className="container mx-auto">
                <div className="row">
                    <Left />
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-9">
                        <table className="justify-center table m-auto mt-3">
                            <thead>


                                <tr>
                                    <th>Naturopathy & Neurotherapy Image</th>
                                    <th>Naturopathy & Neurotherapy Name</th>
                                    <th>Naturopathy & Neurotherapy Title</th>
                                    <th>Naturopathy & Neurotherapy Description</th>
                                    <th>Update</th>
                                    <th style={{paddingLeft:"10px"}}>Delete</th>



                                </tr>
                            </thead>


                            {
                                Yoga.map((item) => (
                                    <>
                                    <tbody>
                                    
                                        <tr className="border-2 ">
                                            <td><img src={`http://localhost:7000/${item.image}`} alt="img" id="myimg" /></td>
                                            <td>{item.name}</td>

                                            <td>{item.title}</td>
                                            <td>{item.YogaDescription}</td>

                                            <td><Link to={`/yogupdate/${item._id}`}> <FiEdit2  size={25} className="text-blue-500" /></Link></td>
                                            <td><Link to={`/yogDelete/${item._id}`}><RiDeleteBin5Line onClick={()=>{handleDelete(item._id)}} size={26} className='text-red-500' /></Link></td>



                                        </tr>
                                        
                                    </tbody>
                                    </>

                                ))
                            }







                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard





