import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Dialog from "../../../Components/Overview/SidebarContent/Content/Feedback/Dialog";

const DialogPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={16} />
        </div>

        <div className="w-full p-12">
          <Dialog />
        </div>
      </div>
    </>
  );
};

export default DialogPage;
