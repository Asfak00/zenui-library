import React, { useState } from "react";

// Components
import Navbar from "../Components/Home/Navbar";
import Sidebar from "../Components/Overview/Sidebar";
import Overview from "../Components/Overview/SidebarContent/Content/Overview";

const OverviewPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={0} />
        </div>

        <div className="w-full p-12">
          <Overview />
        </div>
      </div>
    </>
  );
};

export default OverviewPage;
