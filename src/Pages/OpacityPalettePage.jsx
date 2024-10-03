import React from 'react';

// components
import OpacityPalette from "../OpacityPalette/Index.jsx";
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";

const OpacityPalettePage = () => {
    return (
        <>
            <Navbar/>
            <MobileNavbar/>
           <OpacityPalette />
            <Footer/>
        </>
    );
};

export default OpacityPalettePage;
