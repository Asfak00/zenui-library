import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Tooltip from "../../../Components/Overview/SidebarContent/Content/Data Display/Tooltip";

const TooltipPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={29} />
        </div>

        <div className="w-full p-12">
          <Tooltip />
        </div>
      </div>
    </>
  );
};

export default TooltipPage;
