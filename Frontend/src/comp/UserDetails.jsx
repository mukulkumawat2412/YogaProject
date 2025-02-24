import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTherepy } from "../redux/slices/ApplytherepySlice";

function UserDetails() {
  const dispatch = useDispatch();
  const { ApplyTherepy } = useSelector((state) => state.Therepy);

  useEffect(() => {
    dispatch(getTherepy());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-6 px-4">
      <div className="w-full max-w-6xl p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-center text-white">
          User Details
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border border-gray-600 shadow-md">
            <thead>
              <tr className="text-gray-300 bg-gray-800">
                <th className="p-3 border">User Name</th>
                <th className="p-3 border">User Age</th>
                <th className="p-3 border">User Gender</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Therepy Name</th>
              </tr>
            </thead>
            <tbody>
              {ApplyTherepy.map((item, index) => (
                <tr
                  key={index}
                  className="text-center border border-gray-700 hover:bg-gray-700"
                >
                  <td className="p-3 border">{item.name}</td>
                  <td className="p-3 border">{item.age}</td>
                  <td className="p-3 border">{item.gender}</td>
                  <td className="p-3 border">{item.date.split("T")[0]}</td>
                  <td className="p-3 border">{item.therepyname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
