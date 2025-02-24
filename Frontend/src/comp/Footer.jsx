import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 rounded-full">
            <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
          </div>
          <h1 className="text-xl font-bold">
            Prakriti <span className="text-yellow-400">WELLNESS</span>
          </h1>
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm">YogKripa164@gmail.com | India</p>
          <button className="mt-2 px-4 py-2 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition">
            CONTACT RENEE
          </button>
        </div>

    
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-500">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-pink-500">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a href="mailto:YogKripa164@gmail.com" className="text-gray-400 hover:text-red-500">
            <i className="fas fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
