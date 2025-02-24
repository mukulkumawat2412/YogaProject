import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MDBBtn, MDBCard, MDBCardImage, MDBCardText, MDBCardTitle,MDBCardBody } from "mdb-react-ui-kit"



const YogaWellnessCard = ({ Yog }) => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.auth);
  console.log(loading);
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem('token');

  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);



  const handleApplyClick = (e) => {
    if (!token){
      navigate('/login');
      
    }
  };


  return (

    <div style={{ width: "300px", height: "400px" }} className="w-2/3 p-5 mb-6 text-black bg-white shadow-md cursor-pointer drop-shadow-sm hover:bg-opacity-50 bg-opacity-70 rounded-xl">
      <span className="absolute px-3 py-1 text-xs font-semibold text-black rounded-lg top-3 right-3">

      </span>
      


      <div className="mt-3 col-md-4" id="usercard">




        <MDBCard id="userProductImage">
          <MDBCardImage src={`http://localhost:7000/${Yog.image}`} position='top' alt='...' className='w-full h-full '

          />
          <MDBCard>
          <MDBCardText>
              <p>Name:- {Yog.name}</p>

            </MDBCardText>
            <MDBCardTitle>Title:- {Yog.title}</MDBCardTitle>
          
            <MDBCardText>
              <p>Description:- {Yog.YogaDescription}</p>

            </MDBCardText>

            {/* <MDBBtn>Add To Cart</MDBBtn> */}

          </MDBCard>
        </MDBCard>


      </div>



      <div className="mt-4">
        {token ? (
         <Link to={"/applyTherepy"}><button className="w-full px-4 py-3 text-sm font-medium text-black transition duration-300 bg-red-500 bg-opacity-50 border rounded-full hover:border-none hover:bg-red">
            Apply Now
          </button></Link> 
        ) : (
          <button
            onClick={handleApplyClick}
            className="w-full px-4 py-3 text-sm font-medium text-black transition duration-300 bg-opacity-50 border border-red-500 rounded-full hover: hover:bg-red hover:bg-opacity-100"
          >
            Login to Apply
          </button>
        )}

      </div>
      
    </div>



  );
};

export default YogaWellnessCard;














