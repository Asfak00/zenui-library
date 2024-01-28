import React from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = () => {
  return (
    <>
      <nav className="w-full px-4 flex items-center justify-between bg-primary relative mb-24">
        <h2 className="text-[#ffffff] font-[600] text-[1.3rem]">Logo</h2>
        <ul className="flex items-center gap-5 text-secondary">
          <li className=" cursor-pointer py-2">Home</li>
          <li className="cursor-pointer group py-2 flex items-center gap-1">
            Categories
            <MdKeyboardArrowDown className="text-[1.5rem] group-hover:rotate-[180deg] transition-all duration-300" />
            <div className=" hidden group-hover:block absolute top-[100%] left-[50%] bg-secondary shadow-2xl p-4">
              <ul className="text-[#000]">
                <li className="hover:text-primary hover:tracking-widest transition-all duration-300">
                  item 1
                </li>
                <li className="hover:text-primary hover:tracking-widest transition-all duration-300">
                  item 2
                </li>
                <li className="hover:text-primary hover:tracking-widest transition-all duration-300">
                  item 3
                </li>
                <li className="hover:text-primary hover:tracking-widest transition-all duration-300">
                  item 4
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]" />
      </nav>
    </>
  );
};

export default DropDown;
