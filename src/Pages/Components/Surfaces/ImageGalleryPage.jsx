import React from "react";

// components
import Navbar from "../../../Components/Home/Navbar";
import Sidebar from "../../../Components/Overview/Sidebar";
import ImageGallery from "../../../Components/Overview/SidebarContent/Content/Surfaces/ImageGallery";

const ImageGalleryPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full max-w-[1400px] mx-auto">
        <div className="w-[450px]">
          <Sidebar startContent={11} />
        </div>

        <div className="w-full p-12">
          <ImageGallery />
        </div>
      </div>
    </>
  );
};

export default ImageGalleryPage;
