
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTherepy } from '../redux/slices/ApplytherepySlice';

function UserDetails() {
  const dispatch = useDispatch();
  const { ApplyTherepy } = useSelector((state) => state.Therepy);
  console.log(ApplyTherepy)

  useEffect(() => {
    dispatch(getTherepy());
  }, [dispatch]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full mt-6">
        <div className="w-11/12 p-6 text-white bg-gray-900 rounded-lg shadow-lg lg:w-10/12 xl:w-9/12">
          <h1 className="mb-4 text-3xl font-bold text-center text-white">User Details</h1>

          <div className="overflow-x-auto">
            <table className="w-full border border-collapse border-gray-600 shadow-md">
              <thead>
                <tr className="text-gray-300 bg-gray-800">
                  <th className="p-3 border">User Name</th>
                  <th className="p-3 border">User Age</th>
                  <th className="p-3 border">User Gender</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">TherepyName</th>
                </tr>
              </thead>
              <tbody>
              
                {ApplyTherepy.map((item, index) => (
                  <tr key={index} className="text-center border border-gray-700 hover:bg-gray-700">
                    <td className="p-3 border">{item.name}</td>
                    <td className="p-3 border">{item.age}</td>
                    <td className="p-3 border">{item.gender}</td>
                    <td className="p-3 border">{item.date.split('T')[0]}</td>
                    <td className="p-3 border">{item.therepyname}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;





