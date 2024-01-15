import React from "react";

// components
import Navbar from "../../Components/Home/Navbar";
import Sidebar from "../../Components/Overview/Sidebar";
import AllComponents from "../../Components/Overview/SidebarContent/Content/AllComponents";

const AllComponentsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={4} />
        </div>

        <div className="w-full p-12">
          <AllComponents />
        </div>
      </div>
    </>
  );
};

export default AllComponentsPage;
