import React, { useState } from "react";

// icons
import { FiMenu } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const AppbarWithIcons = () => {
  return (
    <>
      <div className="px-4 py-2 bg-primary w-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
            <h2 className="text-[1.3rem] text-secondary font-[600]">Logo</h2>
          </div>
          <div className="relative">
            <input
              type="search"
              className="pl-10 py-2 bg-[#104c853d] border-none outline-none text-secondary placeholder:text-[#ffffffa8] "
              placeholder="Search..."
            />
            <CiSearch className=" absolute top-2 left-3 text-secondary text-[1.4rem]" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <IoCartOutline className="text-[1.8rem] text-[#ffffff]" />
            <div className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
              <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                10
              </span>
            </div>
          </div>

          <div className="relative">
            <IoIosNotifications className="text-[1.8rem] text-[#ffffff]" />
            <div className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
              <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                10
              </span>
            </div>
          </div>
          <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]" />
        </div>
      </div>
    </>
  );
};

export default AppbarWithIcons;
