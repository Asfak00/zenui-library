import React from "react";

// components
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Home/Footer";
import Sponser from "../Components/Home/Sponser.jsx";


import AnimatedCursor from "react-animated-cursor";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";


const HomePage = () => {

    const getTheRouteName = () => {
        return window.location.pathname
    }

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
        <MobileNavbar/>
      <Hero />
        <Sponser/>
      <Footer />
    </div>
  );
};

export default HomePage;
