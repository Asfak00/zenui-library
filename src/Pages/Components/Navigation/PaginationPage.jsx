import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Pagination from "../../../Components/Overview/SidebarContent/Content/Navigation/Pagination";

const PaginationPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={17} />
        </div>

        <div className="w-full p-12">
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default PaginationPage;
