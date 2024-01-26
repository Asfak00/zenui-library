import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import AnimatedButton from "../../../Components/Overview/SidebarContent/Content/Buttons/AnimatedButton";

const AnimatedButtonPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={6} />
        </div>

        <div className="w-full p-12">
          <AnimatedButton />
        </div>
      </div>
    </>
  );
};

export default AnimatedButtonPage;
