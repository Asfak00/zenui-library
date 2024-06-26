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
        </div>
    );
};

export default AboutUsPage;
