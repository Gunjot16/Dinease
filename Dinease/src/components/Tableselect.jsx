import React, { useState } from 'react';
import backgroundImage from '../content/pxfuel.jpg';

const TableSelection = ({ onSelectTable }) => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableClick = (tableNumber) => {
    setSelectedTable(tableNumber);
    onSelectTable(tableNumber); // Pass the selected table number to the Menu component
    scrollToWorkspace();
  };

  const scrollToWorkspace = () => {
    const workspace = document.getElementById('workspace');
    if (workspace) {
      workspace.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="main32"
      className="relative w-full h-screen flex flex-col justify-start bg-gradient-to-b from-gray-900 to-black bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <h1 id="tselect" className="text-5xl font-extrabold mt-16 ml-4 text-white">
        Select <span className="text-yellow-300">Table</span>
      </h1>
      <div id="page32" className="w-full flex flex-col">
        <div id="tables" className="flex flex-wrap mt-8">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              id={`table${num}`}
              className={`h-32 w-32 m-2 bg-gray-800 text-white flex items-center justify-center text-xl font-bold rounded-lg shadow-md cursor-pointer ${
                selectedTable === num ? 'bg-yellow-500' : ''
              }`}
              onClick={() => handleTableClick(num)}
            >
              Table {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSelection;
