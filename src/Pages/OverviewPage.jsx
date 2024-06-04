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
        <div className="w-[400px]">
          <Sidebar startContent={0} />
        </div>

        <div className="w-full p-12 bg-gradient-to-r from-[#012D57] to-[#0471D6]">
          <Overview />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
