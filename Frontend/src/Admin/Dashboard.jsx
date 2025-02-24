import React, { useEffect } from 'react';
import Left from './Left';
import { useDispatch, useSelector } from 'react-redux';
import { getYoga } from '../redux/slices/YogaSlice';
import { Link } from "react-router-dom";
import { FiEdit2 } from 'react-icons/fi';
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";

function Dashboard() {
    const dispatch = useDispatch();
    
    const {Yoga} = useSelector((state)=>state.Yog)

    useEffect(() => {
        dispatch(getYoga());
    }, [dispatch]); // ✅ Removed Yoga from dependency array to prevent infinite loop

    function handleDelete(id) {
        axios.delete(`https://yogaproject-zuhz.onrender.com/api/deleteyogData/${id}`)
        .then((data) => {
            if (data.status === 200) {
                dispatch(getYoga()); // ✅ Redux Store Refresh
            }
        }).catch((error) => {
            console.error("Error deleting data:", error);
        });
    }

    return (
        <>
            <div className="container mx-auto mt-5 p-5">
                <div className="row">
                    <div className="col-md-3">
                        <Left />
                    </div>
                    <div className="col-md-9">
                        <h2 className="text-xl font-bold mb-4">Dashboard</h2>

                        {loading && <p className="text-center text-blue-500">Loading...</p>}
                        {error && <p className="text-center text-red-500">Error: {error}</p>}

                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="border p-2">Image</th>
                                    <th className="border p-2">Name</th>
                                    <th className="border p-2">Title</th>
                                    <th className="border p-2">Description</th>
                                    <th className="border p-2">Update</th>
                                    <th className="border p-2">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Yoga && Yoga.length > 0 ? (
                                    Yoga.map((item) => (
                                        <tr key={item._id} className="border">
                                            <td className="border p-2">
                                                <img src={`https://yogaproject-zuhz.onrender.com/${item.image}`} 
                                                     alt="Yoga" className="w-20 h-20 object-cover rounded"/>
                                            </td>
                                            <td className="border p-2">{item.name}</td>
                                            <td className="border p-2">{item.title}</td>
                                            <td className="border p-2">{item.YogaDescription}</td>
                                            <td className="border p-2 text-center">
                                                <Link to={`/yogupdate/${item._id}`}>
                                                    <FiEdit2 size={20} className="text-blue-500 hover:text-blue-700" />
                                                </Link>
                                            </td>
                                            <td className="border p-2 text-center">
                                                <button onClick={() => handleDelete(item._id)}>
                                                    <RiDeleteBin5Line size={22} className="text-red-500 hover:text-red-700" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center p-4 text-gray-500">
                                            No Data Available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
