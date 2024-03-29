import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import According from "../../../Components/Overview/SidebarContent/Content/Surfaces/According";

const AccordingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={14} />
        </div>

        <div className="w-full p-12">
          <According />
        </div>
      </div>
    </>
  );
};

export default AccordingPage;
