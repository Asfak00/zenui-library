import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Notification from "../../../Components/Overview/SidebarContent/Content/Feedback/Notification";

const NotificationPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={27} />
        </div>

        <div className="w-full p-12">
          <Notification />
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
