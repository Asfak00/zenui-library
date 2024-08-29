import React, { useState } from "react";

// Components
import Navbar from "../Components/Home/Navbar";
import Sidebar from "../Components/Overview/Sidebar";
import Overview from "../Components/Overview/SidebarContent/Content/Overview";
import MobileNavbar from "../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../Components/Overview/Sidebar/MobileSidebar.jsx";

const OverviewPage = () => {
  return (
    <>
      <Navbar />
        <MobileNavbar/>
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={0} />
        </div>

        <div className="w-full min-h-screen 1024px:p-12 relative">
            <MobileSidebar startContent={0} />
          <Overview />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
