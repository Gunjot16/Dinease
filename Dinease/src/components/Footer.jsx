// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 text-white py-6">
      {/* Top Border */}
      <div id="border" className="w-full border-t-2 border-yellow-500 mb-4"></div>
      
      {/* Contact Details */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="contact-details text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p>Email: info@dineease.com</p>
          <p>Phone: +91 9852-598525</p>
          <p>Address: Chandigarh University, Mohali</p>
        </div>
        
        {/* Footer Ending */}
        <div className="ending text-center md:text-right">
          <p>&copy; 2024 DineEase Restaurant Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
