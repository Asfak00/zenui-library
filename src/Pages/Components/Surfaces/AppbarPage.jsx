import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Appbar from "../../../Components/Overview/SidebarContent/Content/Surfaces/Appbar";
import MobileNavbar from "../../../Components/Home/MobileNavbar.jsx";

const CardPage = () => {
  return (
    <>
      <Navbar />
        <MobileNavbar/>
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={15} />
        </div>

        <div className="w-full p-12 min-h-screen">
          <Appbar />
        </div>
      </div>
    </>
  );
};

export default CardPage;
