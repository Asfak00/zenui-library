import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import RgbButton from "../../../Components/Overview/SidebarContent/Content/Buttons/RgbButton";

const RgbButtonPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={11} />
        </div>

        <div className="w-full p-12">
          <RgbButton />
        </div>
      </div>
    </>
  );
};

export default RgbButtonPage;
