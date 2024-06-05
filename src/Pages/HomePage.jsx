import React from "react";

// components
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Home/Footer";
import Sponser from "../Components/Home/Sponser.jsx";

const HomePage = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
        <Sponser/>
      <Footer />
    </div>
  );
};

export default HomePage;
