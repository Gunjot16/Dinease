import React from 'react';
import backgroundImage from '../content/shape-2.png'; // Import your background image

const Menu = () => {
  return (
    <div
      id="main3"
      className="relative w-full min-h-screen bg-black bg-cover bg-center bg-no-repeat p-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain', // Adjusts image size to fit within the container
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
    >
      {/* Background Image */}
      <div
        id="backg-img3"
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain', // Ensures the image fits within its container
          backgroundPosition: 'center', // Centers the background image
        }}
      ></div>

      {/* Main Content */}
      <div id="content" className="relative z-10 mt-10"> {/* Added margin to top */}
        <h1 id="head" className="text-3xl font-extrabold text-white mb-6 ml-2">
          Work<span className="text-yellow-300">Space</span>
        </h1>
        
        {/* Flex Container for Menu and Order */}
        <div id="page3" className="flex flex-col lg:flex-row mt-4 lg:mt-8 h-[60vh] w-full justify-center lg:justify-between items-start gap-4"> {/* Adjusted margin */}
          
          {/* Menu Items */}
          <div id="menu-items" className="w-full max-w-xs p-3 border border-yellow-400 rounded-lg text-sm font-medium bg-gray-800 text-white shadow-md">
            {[
              'Spaghetti Carbonara',
              'Chicken Tikka Masala',
              'Margherita Pizza',
              'Sushi Rolls',
              'Beef Bourguignon',
              'Pad Thai',
              'Caesar Salad',
              'Hamburger',
              'Fish and Chips',
              'Veggie Stir Fry'
            ].map((item, index) => (
              <div
                key={index}
                className="menu-item mb-2 p-1 rounded bg-gray-700 hover:bg-yellow-500 text-sm transition duration-200 ease-in-out cursor-pointer"
              >
                {index + 1}: {item}
              </div>
            ))}
          </div>

          {/* Order Container */}
          <div id="order-container" className="w-full max-w-sm p-4 bg-gradient-to-br from-black to-gray-900 border border-yellow-400 rounded-lg text-white shadow-md">
            <h2 className="text-lg font-bold mb-4 text-yellow-400">Order Details</h2>
            
            {/* Order Form */}
            <div className="space-y-3">
              <div>
                <label htmlFor="dish" className="block text-sm mb-1">Selected Dish:</label>
                <input
                  type="text"
                  id="dish"
                  name="dish"
                  placeholder="Enter dish name"
                  className="w-full p-1 mb-2 border border-yellow-400 rounded bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div>
                <label htmlFor="table" className="block text-sm mb-1">Table Number:</label>
                <input
                  type="text"
                  id="table"
                  name="table"
                  placeholder="Enter table number"
                  className="w-full p-1 mb-2 border border-yellow-400 rounded bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <div>
                <label htmlFor="quantity" className="block text-sm mb-1">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  placeholder="Enter quantity"
                  className="w-full p-1 mb-2 border border-yellow-400 rounded bg-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-4">
              <button
                id="add-item-btn"
                className="w-full py-1 px-2 bg-yellow-500 text-black text-sm font-bold rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Add Item
              </button>
              <button
                id="calculate-btn"
                className="w-full py-1 px-2 bg-yellow-500 text-black text-sm font-bold rounded-md hover:bg-yellow-600 transition duration-200"
              >
                Calculate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
