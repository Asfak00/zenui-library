import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Card from "../../../Components/Overview/SidebarContent/Content/Surfaces/Card";

const CardPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={13} />
        </div>

        <div className="w-full p-12 min-h-screen">
          <Card />
        </div>
      </div>
    </>
  );
};

export default CardPage;
