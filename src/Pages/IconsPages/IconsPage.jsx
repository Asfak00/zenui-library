import React from 'react';

// components
import Icons from "../../Icons/Icons.jsx"
import Navbar from "../../Components/Home/Navbar.jsx";
import Footer from "../../Components/Home/Footer.jsx";
import MobileNavbar from "../../Components/Home/MobileNavbar.jsx";

const IconsPage = () => {
    return (
        <div className='relative'>
            <MobileNavbar/>
            <Navbar/>
            <Icons/>
            <Footer/>
        </div>
    );
};

export default IconsPage;
