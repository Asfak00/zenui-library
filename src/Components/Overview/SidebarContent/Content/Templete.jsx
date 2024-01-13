import React from "react";

// icons
import { FaEye } from "react-icons/fa";

// utils style
import utils from "../../../../Utils";

const Templete = () => {
  return (
    <aside>
      <h1 className="font-[600] text-[#000] text-[3rem] capitalize">
        React Component
      </h1>
      <p className="w-[70%] text-text text-[1rem]">
        Browse our collection of free React templates to get started building
        your app with TAILWIND UI, including a React home page, React landing
        page, and more.
      </p>

      <div className="grid grid-cols-3 w-full mt-12 gap-5">
        {[...Array(10)].map((ele, index) => (
          <div
            key={index}
            className=" bg-[#2d81ff13] rounded-md border border-[#2d81ff13]">
            <div className=" relative mb-2 group cursor-pointer">
              <img
                src="https://storage.googleapis.com/website-production/uploads/2016/09/registration-page-mailchimp.png"
                alt="image"
                className="w-full h-[170px] object-cover "
              />

              <div className="w-full absolute hidden top-0 left-0 h-full gap-3 flex-col  group-hover:flex items-center backdrop-blur-md justify-center">
                <FaEye className="text-primary text-[1.5rem]" />
                <h4 className=" capitalize underline text-text">
                  view live preview
                </h4>
              </div>
            </div>

            <div className="p-4 w-full">
              <h1 className="font-[600] text-text capitalize text-[1.2rem]">
                sign up page
              </h1>
              <p className="text-text text-[0.9rem] mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                quaerat ipsum fuga officiis necessitatibus fugiat ad tempore
                soluta nemo doloremque.
              </p>

              <button
                className={`${utils.buttonSecondary} flex items-center justify-center mx-auto mt-3 !py-1.5`}>
                source code
              </button>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Templete;
