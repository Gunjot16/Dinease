import React, { useEffect } from 'react';
import Navbar from './Navbar'; // Import your Navbar component
import MainPhoto from './MainPhoto'; // Import your MainPhoto component
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const MainPage = () => {
  useEffect(() => {
    // GSAP animations with ScrollTrigger
    gsap.to("#nav", {
      background: "#000", 
      duration: 0.5,
      height: "50px",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
      }
    });

    gsap.to("#main", {
      backgroundColor: "#000",
      scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -50%",
        scrub: 2
      }
    });

  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div id="main" className="relative h-screen w-full flex items-center justify-center flex-col text-center">
      <MainPhoto /> {/* Background photo */}
      <Navbar /> {/* Navbar on top of the photo */}
      <div id="main2" className="relative z-[10] flex items-center justify-center flex-col text-center pb-10"> 
        <h1 className="text-white text-[60px] font-bold">Streamline. Organize. Optimize.</h1>
        <h2 className="text-white text-[20px] font-bold">Welcome to DineEase, Revolutionizing Restaurant Management</h2>
      </div>
    </div>
  );
};

export default MainPage;
