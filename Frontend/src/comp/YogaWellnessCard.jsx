import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MDBCard,MDBCardImage,MDBCardText,MDBCardTitle, MDBCardBody,} from "mdb-react-ui-kit";

const YogaWellnessCard = ({ Yog }) => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);


  const token = localStorage.getItem("token");

  const imageUrl = Yog.image
    ? `https://yogaproject-zuhz.onrender.com/${Yog.image}`
    : "https://via.placeholder.com/300"; 

  const handleApplyClick = () => {
    if (!token) {
      navigate("/login");
    }
  };

  return (
    <div className="max-w-sm p-5 mb-6 text-black bg-white shadow-lg cursor-pointer rounded-xl">
      <MDBCard className="overflow-hidden rounded-lg">
        
        <MDBCardImage
          src={imageUrl}
          position="top"
          alt={Yog.name || "Yoga Therapy"}
          className="w-full h-48 object-cover"
        />
        <MDBCardBody className="p-4">
          <MDBCardTitle className="text-lg font-bold">{Yog.name || "N/A"}</MDBCardTitle>
          <MDBCardText className="text-sm text-gray-600">
            <strong>Title:</strong> {Yog.title || "N/A"}
          </MDBCardText>
          <MDBCardText className="text-sm text-gray-600">
            <strong>Description:</strong> {Yog.YogaDescription || "No description available."}
          </MDBCardText>

          
          <div className="mt-4">
            {token ? (
              <Link to="/applyTherepy">
                <button className="w-full px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600">
                  Apply Now
                </button>
              </Link>
            ) : (
              <button
                onClick={handleApplyClick}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-600"
              >
                Login to Apply
              </button>
            )}
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default YogaWellnessCard;
