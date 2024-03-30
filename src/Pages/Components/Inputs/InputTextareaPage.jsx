import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import TextareaInput from "../../../Components/Overview/SidebarContent/Content/Inputs/TextareaInput";

const InputTextareaPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={5} />
        </div>

        <div className="w-full p-12">
          <TextareaInput />
        </div>
      </div>
    </>
  );
};

export default InputTextareaPage;
