import React from "react";

const YogaSection = () => {
  return (
    <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('../../public/YogaImages.jpeg')" }}>
      
    
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

     
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4 py-10 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">Yoga</h1>

        <p className="mt-4 text-base leading-relaxed sm:text-lg md:text-xl">
          “The yoga pose is not the goal. Being flexible or standing on the hands is not the goal.
          <br /><br />
          The goal is to create space where you were once stuck. To unveil layers of protection 
          you’ve built around your heart. To appreciate your body and become aware of the mind and 
          the noise it creates. To make peace with who you are. The goal is to love, well, you.
          Change your focus and your heart will grow.”
        </p>

        <button className="mt-6 px-6 py-3 font-semibold text-black transition-all bg-white shadow-md rounded-xl hover:bg-sky-400">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default YogaSection;
