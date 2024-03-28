import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import TextInput from "../../../Components/Overview/SidebarContent/Content/Inputs/TextInput";

const InputTextPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={4} />
        </div>

        <div className="w-full p-12">
          <TextInput />
        </div>
      </div>
    </>
  );
};

export default InputTextPage;
