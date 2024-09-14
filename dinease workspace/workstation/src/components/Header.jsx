import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
      <div className="text-xl font-bold text-red-600">Dinease</div>
      <div className="text-sm text-gray-600">Your POS Subscription expires in 1 day...</div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">🛎️</span>
        <span className="text-sm text-gray-600">Call For Support: 07969 223344</span>
      </div>
    </header>
  );
};

export default Header;