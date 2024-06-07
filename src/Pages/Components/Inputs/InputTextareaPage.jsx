import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import TextareaInput from "../../../Components/Overview/SidebarContent/Content/Inputs/TextareaInput";

const InputTextareaPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={5} />
        </div>

        <div className="w-full min-h-screen p-12 bg-gradient-to-r from-[#012D57] to-[#0471D6]">
          <TextareaInput />
        </div>
      </div>
    </>
  );
};

export default InputTextareaPage;
