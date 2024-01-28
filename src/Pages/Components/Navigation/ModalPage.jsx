import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Modals from "../../../Components/Overview/SidebarContent/Content/Navigation/Modals";

const TabsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={12} />
        </div>

        <div className="w-full p-12">
          <Modals />
        </div>
      </div>
    </>
  );
};

export default TabsPage;
