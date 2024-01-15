import React, { useState } from "react";

// icons
import { FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";

// react router dom
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const onKeyboardPress = () => {};

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  return (
    <>
      <nav className="flex items-center justify-between w-full px-10 bg-secondary py-3 shadow-sm sticky top-0 left-0 z-50">
        <div className="flex items-center gap-8">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[50px] cursor-pointer"
            onClick={() => navigate("/")}
          />
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
          <div className=" relative" onClick={handleSearchClick}>
            <IoIosSearch className=" absolute left-3 top-[0.6rem] text-primary text-[1.5rem]" />
            <input
              type="search"
              name=""
              id=""
              disabled
              placeholder="Search..."
              className="py-2 px-10 border bg-border border-[#c7d0dd] rounded-full focus:outline-none"
            />
            <span className="bg-secondary px-2 py-1 text-[0.9rem] font-[500] rounded-full absolute right-1.5 border text-text border-[#c7d0dd] top-[0.350rem]">
              Ctrl + S
            </span>
          </div>
          <FaGithub className="text-[1.8rem] text-primary cursor-pointer" />
          <BsFillMoonStarsFill className="text-[1.6rem] text-primary cursor-pointer" />
        </div>
      </nav>

      {isSearchOpen && <Search />}
    </>
  );
};

export default Navbar;
