import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Skeleton from "../../../Components/Overview/SidebarContent/Content/Feedback/Skeleton";

const SkeletonPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={22} />
        </div>

        <div className="w-full p-12">
          <Skeleton />
        </div>
      </div>
    </>
  );
};

export default SkeletonPage;
