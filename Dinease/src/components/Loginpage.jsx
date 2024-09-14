// src/components/LoginPage.jsx
import React from 'react';
import backgroundImage from '../content/shape-5.png'; // Import your image

const LoginPage = () => {
  return (
    <div id="main2" className="relative w-full h-screen flex items-center justify-center">
      <div id="content" className="relative w-full h-full flex">
        <img
          id="background-image"
          src={backgroundImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover bg-black"
        />
        <div id="page2" className="relative z-10 flex items-center justify-center p-4 bg-black bg-opacity-60 text-gray-200">
          <div id="login-box" className="bg-[#161616] p-4 rounded-lg shadow-md w-full max-w-xs">
            <h1 className="text-2xl font-semibold mb-3 text-yellow-500">Login</h1>
            <form>
              <label htmlFor="username" className="block text-base mb-1">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-1.5 mb-3 rounded bg-gray-600 border border-gray-500 text-gray-200 text-sm"
              />
              <label htmlFor="password" className="block text-base mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-1.5 mb-3 rounded bg-gray-600 border border-gray-500 text-gray-200 text-sm"
              />
              <input
                id="login-btn"
                type="submit"
                value="Login"
                className="w-full py-1.5 px-3 rounded bg-yellow-500 hover:bg-yellow-600 text-gray-800 cursor-pointer text-sm"
              />
            </form>
          </div>
          <div id="restaurant-info" className="mt-6 text-center">
            <h1 className="text-3xl font-semibold mb-3 text-yellow-500">
              Welcome to <span>DineEase</span>
            </h1>
            <p className="text-base">
              At DineEase, we understand the challenges of running a restaurant. Our innovative platform offers comprehensive solutions to streamline your operations and enhance your guest experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
