import React from "react";

// components
import Navbar from "../../Components/Home/Navbar";
import Sidebar from "../../Components/Overview/Sidebar";
import MobileNavbar from "../../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../../Components/Overview/Sidebar/MobileSidebar.jsx";
import AllBlocks from "../../Components/Overview/SidebarContent/Blocks/AllBlocks.jsx";

const AllBlocksPage = () => {
    return (
        <>
            <Navbar />
            <MobileNavbar/>
            <div className="flex w-full mx-auto">
                <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
                    <Sidebar startContent={41} />
                </div>

                <div className="w-full min-h-screen 1024px:p-12">
                    <MobileSidebar startContent={41}/>
                    <AllBlocks />
                </div>
            </div>
        </>
    );
};

export default AllBlocksPage;
