import Navbar from '../comp/Navbar';
import Footer from '../comp/Footer';
import myImg from "../../public/beautiful-girls-are-playing-yoga-park.jpg"

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import YogaSection from './YogaSection';
import YogaWellnessCard from '../comp/YogaWellnessCard';
import { useDispatch, useSelector } from 'react-redux';
import { getYoga } from '../redux/slices/YogaSlice';

function Home() {
  const dispatch = useDispatch();
  const { Yoga } = useSelector((state) => state.Yog);

  useEffect(() => {
    dispatch(getYoga());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-opacity-50 h-[800px] flex items-center justify-center">
        <div
          className="absolute top-0 left-0 z-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${myImg})` }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50 z-1"></div>

        <div className="relative z-10 px-4 text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Our Site!</h1>
          <p className="mt-4 text-lg">Find your Naturopathy & Neurotherapy here.</p>
        </div>
      </div>

 
      
      <div className="pl-6 mx-auto w-3/2">
        <div className="mb-6">
          <h1 className="text-2xl text-black font-[900]">Naturopathy & Neurotherapy Listings</h1>
          <p className="text-sm font-medium text-black">Find your next Naturopathy & Neurotherapy</p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-black">
            Available Naturopathy & Neurotherapy
          </h2>

       
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Yoga.map((Yog) => (
              <YogaWellnessCard key={Yog.id} Yog={Yog} />
            ))}
          </div>
        </div>
      </div>

      <YogaSection />
      <Footer />
    </>
  );
}

export default Home;
