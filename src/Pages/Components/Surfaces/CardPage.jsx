import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Card from "../../../Components/Overview/SidebarContent/Content/Surfaces/Card";

const CardPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={7} />
        </div>

        <div className="w-full p-12">
          <Card />
        </div>
      </div>
    </>
  );
};

export default CardPage;
