import React, { useState } from "react";

// Components
import Navbar from "../Components/Home/Navbar";
import Sidebar from "../Components/Overview/Sidebar";
import Templete from "../Components/Overview/SidebarContent/Content/Templete";

const TempletePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={2} />
        </div>

        <div className="w-full p-12">
          <Templete />
        </div>
      </div>
    </>
  );
};

export default TempletePage;
