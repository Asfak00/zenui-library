import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Notification from "../../../Components/Overview/SidebarContent/Content/Feedback/Notification";
import MobileNavbar from "../../../Components/Home/MobileNavbar.jsx";

const NotificationPage = () => {
  return (
    <>
      <Navbar />
        <MobileNavbar/>
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={27} />
        </div>

        <div className="w-full p-12 min-h-screen">
          <Notification />
        </div>
      </div>
    </>
  );
};

export default NotificationPage;
