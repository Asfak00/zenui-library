import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Snippet from "../../../Components/Overview/SidebarContent/Content/Randoms/Snippet";

const SnippetPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={31} />
        </div>

        <div className="w-full p-12">
          <Snippet />
        </div>
      </div>
    </>
  );
};

export default SnippetPage;
