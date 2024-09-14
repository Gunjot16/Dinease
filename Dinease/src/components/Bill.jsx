// src/components/BillingAndKOT.jsx
import React from 'react';

const Bill = () => {
  return (
    <div id="page4" className="flex flex-col lg:flex-row justify-around items-center p-4 h-screen bg-black">
      {/* Bill Container */}
      <div id="bill-container" className="w-full lg:w-1/2 p-4 m-2 border border-yellow-500 bg-black bg-opacity-70 rounded-lg text-white">
        <div id="bill-div" className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Your Bill is:</h1>
        </div>
        <div id="bill-details" className="mb-6 text-lg">Loading</div>
        <button id="print" className="py-2 px-4 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">
          Print Bill
        </button>
      </div>

      {/* KOT Container */}
      <div id="kot-container" className="w-full lg:w-1/2 p-4 m-2 border border-yellow-500 bg-black bg-opacity-70 rounded-lg text-white">
        <div id="kot-div" className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Kitchen Order Ticket:</h1>
        </div>
        <div id="kot-details" className="mb-6 text-lg">Loading</div>
        <button id="send" className="py-2 px-4 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600">
          Send KOT
        </button>
      </div>
    </div>
  );
};

export default Bill;
