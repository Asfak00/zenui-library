import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import FileInput from "../../../Components/Overview/SidebarContent/Content/Inputs/FileInput";

const InputFilePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={9} />
        </div>

        <div className="w-full p-12">
          <FileInput />
        </div>
      </div>
    </>
  );
};

export default InputFilePage;
