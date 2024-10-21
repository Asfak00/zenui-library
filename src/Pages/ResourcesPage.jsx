import React, { useState } from "react";

// Components
import Navbar from "../Components/Home/Navbar";
import Sidebar from "../Components/Overview/Sidebar";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../Components/Overview/Sidebar/MobileSidebar.jsx";
import Resources from "../Components/Overview/SidebarContent/Content/Resources/Resouces.jsx";

const OverviewPage = () => {
    return (
        <>
            <Navbar />
            <MobileNavbar/>
            <div className="flex w-full mx-auto max-w-[1700px]">
                <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[18%] 1024px:mr-[3rem]">
                    <Sidebar startContent={85} />
                </div>

                <div className="w-full max-h-[89vh] min-h-[89vh] overflow-y-auto pt-[5rem] 640px:pt-[5rem] 640px:py-[10rem] 1024px:py-[2rem] 1024px:px-[0.5rem] relative" style={{scrollbarWidth: 'none'}}>
                    <MobileSidebar startContent={85} />
                    <Resources />
                </div>
            </div>
        </>
    );
};

export default OverviewPage;
