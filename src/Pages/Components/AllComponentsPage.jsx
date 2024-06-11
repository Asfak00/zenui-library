import React from "react";

// components
import Navbar from "../../Components/Home/Navbar";
import Sidebar from "../../Components/Overview/Sidebar";
import AllComponents from "../../Components/Overview/SidebarContent/Content/AllComponents";

const AllComponentsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar startContent={3} />
        </div>

        <div className="w-full min-h-screen p-12">
          <AllComponents />
        </div>
      </div>
    </>
  );
};

export default AllComponentsPage;
