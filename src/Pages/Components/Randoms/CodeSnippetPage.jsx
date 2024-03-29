import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Code from "../../../Components/Overview/SidebarContent/Content/Randoms/Code";

const CodeSnippetPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={30} />
        </div>

        <div className="w-full p-12">
          <Code />
        </div>
      </div>
    </>
  );
};

export default CodeSnippetPage;
