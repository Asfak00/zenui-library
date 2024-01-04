import React from "react";

// icons
import { FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full max-w-[1400px] mx-auto px-10 bg-secondary py-3 shadow-sm">
      <div className="flex items-center gap-8">
        <img src="/logo.png" alt="logo" className="w-[50px]" />
        <ul className="navUl flex items-center gap-8 text-text font-[500] capitalize text-[1.2rem]">
          <li>
            <p>docs</p>
            <span>docs</span>
          </li>
          <li>
            <p>About us</p>
            <span>About us</span>
          </li>
          <li>
            <p>blog</p>
            <span>blog</span>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <div className=" relative">
          <IoIosSearch className=" absolute left-3 top-[0.6rem] text-primary text-[1.5rem]" />
          <input
            type="search"
            name=""
            id=""
            placeholder="Search..."
            className="py-2 px-10 border bg-border border-[#c7d0dd] rounded-full focus:outline-none"
          />
          <span className="bg-secondary px-2 py-1 text-[0.9rem] font-[500] rounded-md absolute right-3 border border-[#c7d0dd] top-[0.350rem]">
            ctrl + S
          </span>
        </div>
        <FaGithub className="text-[1.8rem] text-primary cursor-pointer" />
        <BsFillMoonStarsFill className="text-[1.6rem] text-primary cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
