import React from 'react';
import logo from '../content/logo.png';

const Navbar = () => {
  const scrollToLoginPage = () => {
    const loginPage = document.getElementById('loginPage');
    if (loginPage) {
      const startPosition = window.pageYOffset;
      const targetPosition = loginPage.getBoundingClientRect().top + startPosition;
      const duration = 1000; // Duration in milliseconds
      const startTime = performance.now();

      const scroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        window.scrollTo({
          top: startPosition + (targetPosition - startPosition) * progress,
          behavior: 'auto', // Disable built-in smooth scroll
        });

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  };

  return (
    <div
      id="nav"
      className="flex items-center justify-start gap-[20px] w-full h-[40px] px-[30px] bg-transparent text-[10px] text-white shadow-md"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <img src={logo} alt="DineEase Logo" className="h-[45px]" />
      <a href="#home" className="text-sm font-medium hover:text-blue-600">Home</a>
      <a href="#page2" onClick={scrollToLoginPage} className="text-sm font-medium hover:text-blue-600">Main Page</a>
      <a href="#lets-go" className="text-sm font-medium hover:text-blue-600">Let's Go</a>
      <a href="#about-us" className="text-sm font-medium hover:text-blue-600">About Us</a>
    </div>
  );
};

export default Navbar;
