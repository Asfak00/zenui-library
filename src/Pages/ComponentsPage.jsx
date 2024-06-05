import React, { useState } from "react";

// components
import Navbar from "../Components/Home/Navbar";
import Sidebar from "../Components/Overview/Sidebar";
import SidebarContent from "../Components/Overview/SidebarContent";

const ComponentsPage = () => {
  const [startContent, setStartContent] = useState(0);
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="1024px:w-[32%] 1260px:w-[28%] 1404px:w-[19%] 2000px:w-[15%]">
          <Sidebar
            startContent={startContent}
            setStartContent={setStartContent}
          />
        </div>

        <div className="w-full min-h-screen p-12 bg-gradient-to-r from-[#012D57] to-[#0471D6]">
          <SidebarContent startContent={startContent} />
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
