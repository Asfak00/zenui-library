import React, { useState } from "react";

// components
import Navbar from "../Components/Home/Navbar";
import Sidebar from "../Components/Overview/Sidebar";
import SidebarContent from "../Components/Overview/SidebarContent";

const ComponentsPage = () => {
  const [startContent, setStartContent] = useState(0);
  const [componentContent, setComponentContent] = useState(null);
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar
            startContent={startContent}
            setComponentContent={setComponentContent}
            setStartContent={setStartContent}
            componentContent={componentContent}
          />
        </div>

        <div className="w-full p-12">
          <SidebarContent
            startContent={startContent}
            componentContent={componentContent}
          />
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
