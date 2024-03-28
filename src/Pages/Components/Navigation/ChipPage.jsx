import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Chip from "../../../Components/Overview/SidebarContent/Content/Navigation/Chip";

const ChipPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={19} />
        </div>

        <div className="w-full p-12">
          <Chip />
        </div>
      </div>
    </>
  );
};

export default ChipPage;
