import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-60 bg-gray-100  pl-2 pt-2 overflow-y-auto " >
      <ul className="space-y-4">
        <li className="hover:text-red-600 cursor-pointer border-b border-gray-600">Billing</li>
        <li className="hover:text-red-600 cursor-pointer border-b border-gray-600">Operations</li>
        <li className="hover:text-red-600 cursor-pointer border-b border-gray-600">Reports</li>
        <li className="hover:text-red-600 cursor-pointer border-b border-gray-600">Live View</li>
        <li className="hover:text-red-600 cursor-pointer border-b border-gray-600">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;