import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Loader from "../../../Components/Overview/SidebarContent/Content/Feedback/Loader";

const LoaderPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={26} />
        </div>

        <div className="w-full p-12">
          <Loader />
        </div>
      </div>
    </>
  );
};

export default LoaderPage;
