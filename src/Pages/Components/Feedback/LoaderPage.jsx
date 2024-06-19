import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Loader from "../../../Components/Overview/SidebarContent/Content/Feedback/Loader";
import MobileNavbar from "../../../Components/Home/MobileNavbar.jsx";

const LoaderPage = () => {
  return (
    <>
      <Navbar />
        <MobileNavbar/>
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={26} />
        </div>

        <div className="w-full p-12 min-h-screen">
          <Loader />
        </div>
      </div>
    </>
  );
};

export default LoaderPage;
