

import React from "react";
import "./Footer.css"// Create this file for the styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-container">
        <div className="logo">
          <div className="crescent">
            <div className="sunflower"></div>
          </div>
        </div>
        <h1 className="brand">
          Prakriti <span>WELLNESS</span>
        </h1>
      </div>
      <div className="contact-info">
        <p>YogKripa164@gmail.com India</p>
        <button className="contact-button">CONTACT RENEE</button>
      </div>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="">
          <i className="fas fa-envelope"></i>
          
        </a>
      </div>
    </div>
  );
};

export default Footer;

  
