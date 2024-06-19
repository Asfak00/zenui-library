import React from "react";

// components
import AboutUs from "../Components/Home/AboutUs.jsx";

import AnimatedCursor from "react-animated-cursor";
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import PrivacyPolicy from "../Components/Home/PrivacyPolicy.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";


const AboutUsPage = () => {

    const getTheRouteName = () => {
        return window.location.pathname
    }

    console.log(getTheRouteName())

    return (
        <div className='overflow-x-hidden'>
            <Navbar/>
            <MobileNavbar/>
            <PrivacyPolicy/>
            <Footer/>

            {
                getTheRouteName() === '/privacy-policy' && (
                    <AnimatedCursor
                        innerSize={8}
                        outerSize={35}
                        innerScale={1}
                        outerScale={2}
                        outerAlpha={0}
                        showSystemCursor={getTheRouteName() === '/privacy-policy' ? false : true}
                        hasBlendMode={true}
                        innerStyle={{
                            backgroundColor: '#1c8aaa',
                            zIndex: '20000'
                        }}
                        outerStyle={{
                            border: '3px solid #1c8aaa',
                            zIndex: '20000'
                        }}
                    />
                )
            }

        </div>
    );
};

export default AboutUsPage;
