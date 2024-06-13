import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Skeleton from "../../../Components/Overview/SidebarContent/Content/Feedback/Skeleton";

const SkeletonPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={22} />
        </div>

        <div className="w-full p-12 min-h-screen">
          <Skeleton />
        </div>
      </div>
    </>
  );
};

export default SkeletonPage;
