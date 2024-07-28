import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Skeleton from "../../../Components/Overview/SidebarContent/Content/Feedback/Skeleton";
import MobileNavbar from "../../../Components/Home/MobileNavbar.jsx";
import MobileSidebar from "../../../Components/Overview/Sidebar/MobileSidebar.jsx";

const SkeletonPage = () => {
  return (
    <>
      <Navbar />
        <MobileNavbar/>
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={31} />
        </div>

        <div className="w-full 1024px:p-12 min-h-screen">
            <MobileSidebar startContent={31}/>
          <Skeleton />
        </div>
      </div>
    </>
  );
};

export default SkeletonPage;
