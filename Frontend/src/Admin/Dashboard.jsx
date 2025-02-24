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
    const { Yoga } = useSelector((state) => state.yog); 

    useEffect(() => {
        dispatch(getYoga());
    }, [dispatch, Yoga]); 

    function handleDelete(id) {
        axios.delete(`https://yogaproject-zuhz.onrender.com/api/deleteyogData/${id}`)
        .then((data) => {
            if (data.status === 200) {
                dispatch(getYoga()); 
            }
        });
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="row">
                    <Left />
                    <div className="col-md-3"></div>
                    <div className="col-md-9">
                        <table className="justify-center table m-auto mt-3">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Yoga && Yoga.length > 0 ? (
                                    Yoga.map((item) => (
                                        <tr key={item._id} className="border-2">
                                            <td><img src={`https://yogaproject-zuhz.onrender.com/${item.image}`} alt="img" id="myimg" width="100" height="100"/></td>
                                            <td>{item.name}</td>
                                            <td>{item.title}</td>
                                            <td>{item.YogaDescription}</td>
                                            <td>
                                                <Link to={`/yogupdate/${item._id}`}>
                                                    <FiEdit2 size={25} className="text-blue-500" />
                                                </Link>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(item._id)}>
                                                    <RiDeleteBin5Line size={26} className="text-red-500" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center">No Data Available</td>
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
