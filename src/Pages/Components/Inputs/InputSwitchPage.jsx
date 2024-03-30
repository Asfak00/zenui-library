import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import SwitchInput from "../../../Components/Overview/SidebarContent/Content/Inputs/SwitchInput";

const InputSwitchPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={6} />
        </div>

        <div className="w-full p-12">
          <SwitchInput />
        </div>
      </div>
    </>
  );
};

export default InputSwitchPage;
