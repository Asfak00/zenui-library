import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import SelectInput from "../../../Components/Overview/SidebarContent/Content/Inputs/SelectInput";

const InputSelectPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={7} />
        </div>

        <div className="w-full p-12">
          <SelectInput />
        </div>
      </div>
    </>
  );
};

export default InputSelectPage;
