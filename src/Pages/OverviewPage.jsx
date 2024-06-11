import React, { useState } from "react";

// Components
import Navbar from "../Components/Home/Navbar";
import Sidebar from "../Components/Overview/Sidebar";
import Overview from "../Components/Overview/SidebarContent/Content/Overview";

const OverviewPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={0} />
        </div>

        <div className="w-full min-h-screen p-12">
          <Overview />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
