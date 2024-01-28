import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import DropDown from "../../../Components/Overview/SidebarContent/Content/Navigation/DropDown";

const TabsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={11} />
        </div>

        <div className="w-full p-12">
          <DropDown />
        </div>
      </div>
    </>
  );
};

export default TabsPage;
