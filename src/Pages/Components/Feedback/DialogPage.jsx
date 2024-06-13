import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Dialog from "../../../Components/Overview/SidebarContent/Content/Feedback/Dialog";

const DialogPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={24} />
        </div>

        <div className="w-full p-12 min-h-screen">
          <Dialog />
        </div>
      </div>
    </>
  );
};

export default DialogPage;
