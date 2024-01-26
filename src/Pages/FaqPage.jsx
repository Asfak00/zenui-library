import React, { useState } from "react";

// Components
import Navbar from "../Components/Home/Navbar";
import Sidebar from "../Components/Overview/Sidebar";
import Faq from "../Components/Overview/SidebarContent/Content/Faq";

const FaqPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={2} />
        </div>

        <div className="w-full p-12">
          <Faq />
        </div>
      </div>
    </>
  );
};

export default FaqPage;
