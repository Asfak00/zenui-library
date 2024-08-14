import React from 'react';

// components
import OpacityPalette from "../OpacityPalette/Index.jsx";
import Navbar from "../Components/Home/Navbar.jsx";
import Footer from "../Components/Home/Footer.jsx";

const OpacityPalettePage = () => {
    return (
        <>
            <Navbar/>
           <OpacityPalette />
            <Footer/>
        </>
    );
};

export default OpacityPalettePage;
