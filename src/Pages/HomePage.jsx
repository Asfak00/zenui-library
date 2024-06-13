import React from "react";

// components
import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Footer from "../Components/Home/Footer";
import Sponser from "../Components/Home/Sponser.jsx";


import AnimatedCursor from "react-animated-cursor";


const HomePage = () => {

    const getTheRouteName = () => {
        return window.location.pathname
    }

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Hero />
        <Sponser/>
      <Footer />

        {
            getTheRouteName() === '/' && (
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    showSystemCursor={getTheRouteName() === '/' ? false : true}
                    hasBlendMode={true}
                    innerStyle={{
                        backgroundColor: '#1c8aaa'
                    }}
                    outerStyle={{
                        border: '3px solid #1c8aaa'
                    }}
                />
            )
        }

    </div>
  );
};

export default HomePage;
