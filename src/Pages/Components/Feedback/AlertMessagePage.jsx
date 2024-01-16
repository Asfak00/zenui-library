import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import AlertMessage from "../../../Components/Overview/SidebarContent/Content/Feedback/AlertMessage";

const AlertMessagePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={13} />
        </div>

        <div className="w-full p-12">
          <AlertMessage />
        </div>
      </div>
    </>
  );
};

export default AlertMessagePage;
