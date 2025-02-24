import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  MDBCard,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCardBody,
} from "mdb-react-ui-kit";

const YogaWellnessCard = ({ Yog }) => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleApplyClick = () => {
    if (!token) {
      navigate("/login");
    }
  };

  return (
    <div className="w-full max-w-xs p-5 mb-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition duration-300">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <MDBCardImage
          src={`https://yogaproject-zuhz.onrender.com/${Yog.image}`}
          position="top"
          alt="Yoga Image"
          className="w-full h-full object-cover"
        />
      </div>

      <MDBCardBody className="p-4">
        <MDBCardTitle className="text-lg font-semibold text-gray-900">
          {Yog.title}
        </MDBCardTitle>
        <MDBCardText className="text-gray-700 text-sm">
          <strong>Name:</strong> {Yog.name}
        </MDBCardText>
        <MDBCardText className="text-gray-700 text-sm">
          <strong>Description:</strong> {Yog.YogaDescription}
        </MDBCardText>
      </MDBCardBody>

      <div className="mt-4">
        {token ? (
          <Link to="/applyTherepy">
            <button className="w-full px-4 py-3 text-sm font-medium text-white bg-red-500 rounded-full transition duration-300 hover:bg-red-600">
              Apply Now
            </button>
          </Link>
        ) : (
          <button
            onClick={handleApplyClick}
            className="w-full px-4 py-3 text-sm font-medium text-red-500 border border-red-500 rounded-full transition duration-300 hover:bg-red-500 hover:text-white"
          >
            Login to Apply
          </button>
        )}
      </div>
    </div>
  );
};

export default YogaWellnessCard;
