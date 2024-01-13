import React, { useState } from "react";

// Components
import Navbar from "../Components/Home/Navbar";
import Sidebar from "../Components/Overview/Sidebar";
import Usage from "../Components/Overview/SidebarContent/Content/Usage";

const UsagesPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={1} />
        </div>

        <div className="w-full p-12">
          <Usage />
        </div>
      </div>
    </>
  );
};

export default UsagesPage;
