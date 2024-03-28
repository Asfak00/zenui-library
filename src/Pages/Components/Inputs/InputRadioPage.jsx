import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import RadioInput from "../../../Components/Overview/SidebarContent/Content/Inputs/RadioInput";

const InputRadioPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={8} />
        </div>

        <div className="w-full p-12">
          <RadioInput />
        </div>
      </div>
    </>
  );
};

export default InputRadioPage;
