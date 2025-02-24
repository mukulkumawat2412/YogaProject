import React from "react";

const YogaSection = () => {
  return (
    <div 
      className="relative w-full h-screen bg-center bg-cover" 
      style={{ backgroundImage: "url('/YogaImages.jpeg')" }} 
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

 
      <div className="absolute inset-0 flex flex-col items-start justify-center px-8 text-white sm:px-16 md:px-24 lg:px-32">
        <h1 className="mb-6 text-5xl font-bold">Yoga</h1>
        <p className="mb-8 text-lg leading-relaxed md:text-xl">
          “The yoga pose is not the goal. Being flexible or standing on the hands is not the goal.
          <br /><br />
          The goal is to create space where you were once stuck. To unveil layers of protection you’ve built around your heart.
          To appreciate your body and become aware of the mind and the noise it creates. To make peace with who you are.
          The goal is to love, well, you. Change your focus and your heart will grow.”
        </p>
        <button className="px-6 py-3 font-semibold text-black transition-all bg-white shadow-md rounded-xl hover:bg-sky-400">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default YogaSection;
