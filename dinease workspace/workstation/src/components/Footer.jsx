import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-end p-2 bg-gray-100">
      <button className="bg-blue-400 text-white py-1 px-3 rounded hover:bg-blue-600 text-sm mr-2">
        Save
      </button>
      <button className="bg-blue-400 text-white py-1 px-3 rounded hover:bg-blue-600 text-sm mr-2">
        Print & Edit
      </button>
      <button className="bg-gray-400 text-white py-1 px-3 rounded hover:bg-gray-600 text-sm mr-2">
        Reset
      </button>
      <button className="bg-green-400 text-white py-1 px-3 rounded hover:bg-green-600 text-sm">
        KOT
      </button>
    </footer>
  );
};

export default Footer;
