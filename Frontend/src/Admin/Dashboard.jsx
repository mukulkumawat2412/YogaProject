import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getYoga } from '../redux/slices/YogaSlice';
import { Link, useNavigate } from "react-router-dom";
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import Left from './Left';

function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { Yoga } = useSelector((state) => state.Yog);
    
    useEffect(() => {
        dispatch(getYoga());
    }, [dispatch]);

    function handleDelete(id) {
        axios.delete(`https://yogaproject-zuhz.onrender.com/api/deleteyogData/${id}`)
            .then((data) => {
                if (data.status === 200) {
                    navigate("/dashboard");
                }
            });
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row">
               
                <div className="md:w-1/4">
                    <Left />
                </div>

              
                <div className="md:w-3/4 mt-4 md:mt-0">
                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 shadow-md">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="p-3 border">Image</th>
                                    <th className="p-3 border">Name</th>
                                    <th className="p-3 border">Title</th>
                                    <th className="p-3 border">Description</th>
                                    <th className="p-3 border">Update</th>
                                    <th className="p-3 border">Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Yoga.map((item) => (
                                    <tr key={item._id} className="text-center border border-gray-300 hover:bg-gray-100">
                                        <td className="p-3 border">
                                            <img src={`https://yogaproject-zuhz.onrender.com/${item.image}`} 
                                                alt="yoga" className="w-20 h-20 object-cover rounded-lg" />
                                        </td>
                                        <td className="p-3 border">{item.name}</td>
                                        <td className="p-3 border">{item.title}</td>
                                        <td className="p-3 border">{item.YogaDescription}</td>
                                        <td className="p-3 border">
                                            <Link to={`/yogupdate/${item._id}`}>
                                                <FiEdit2 size={25} className="text-blue-500" />
                                            </Link>
                                        </td>
                                        <td className="p-3 border">
                                            <button onClick={() => handleDelete(item._id)}>
                                                <RiDeleteBin5Line size={26} className="text-red-500" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
