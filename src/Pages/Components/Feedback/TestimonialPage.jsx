import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import Testimonial from "../../../Components/Overview/SidebarContent/Content/Feedback/Testimonial";

const TestimonialPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={15} />
        </div>

        <div className="w-full p-12">
          <Testimonial />
        </div>
      </div>
    </>
  );
};

export default TestimonialPage;
