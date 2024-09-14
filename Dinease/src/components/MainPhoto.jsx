import React from 'react';
import mainPhoto from '../content/mainPhoto.jpg'; // Import your image

const MainPhoto = () => {
  return (
    <div className="absolute inset-0 z-[-1]"> {/* Position it absolutely to cover the whole viewport */}
      <img 
        src={mainPhoto} 
        alt="Main" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};

export default MainPhoto;
