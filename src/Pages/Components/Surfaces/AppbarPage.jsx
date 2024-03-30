import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Appbar from "../../../Components/Overview/SidebarContent/Content/Surfaces/Appbar";

const CardPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={15} />
        </div>

        <div className="w-full p-12">
          <Appbar />
        </div>
      </div>
    </>
  );
};

export default CardPage;
