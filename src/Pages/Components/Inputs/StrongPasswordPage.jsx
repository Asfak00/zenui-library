import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import MobileNavbar from "../../../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../../../Components/Overview/Sidebar/MobileSidebar.jsx";
import StrongPassword from "../../../Components/Overview/SidebarContent/Content/Inputs/StrongPassword.jsx";

const StrongPasswordPage = () => {
    return (
        <>
            <Navbar />
            <MobileNavbar/>
            <div className="flex w-full mx-auto">
                <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
                    <Sidebar startContent={60} />
                </div>

                <div className="w-full min-h-screen 1024px:p-12">
                    <MobileSidebar startContent={60}/>
                    <StrongPassword />
                </div>
            </div>
        </>
    );
};

export default StrongPasswordPage;
