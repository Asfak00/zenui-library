import React from "react";

// components
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Home/Footer";
import Sponser from "../Components/Home/Sponser.jsx";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
        <Sponser/>
      <Footer />
    </>
  );
};

export default HomePage;
