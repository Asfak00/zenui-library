import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import SelectInput from "../../../Components/Overview/SidebarContent/Content/Inputs/SelectInput";
import MobileNavbar from "../../../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../../../Components/Overview/Sidebar/MobileSidebar.jsx";

const InputSelectPage = () => {
  return (
    <>
      <Navbar />
        <MobileNavbar/>
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={8} />
        </div>

        <div className="w-full 1024px:p-12 min-h-screen">
            <MobileSidebar startContent={8}/>
          <SelectInput />
        </div>
      </div>
    </>
  );
};

export default InputSelectPage;
