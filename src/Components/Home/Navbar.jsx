import React, { useEffect, useState } from "react";

// icons
import { FaGithub } from "react-icons/fa";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
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

  // light and dark mood
  const [toggle, setToggle] = useState(
    JSON.parse(localStorage.getItem("theme"))
      ? JSON.parse(localStorage.getItem("theme"))
      : false
  );

  const element = document.documentElement;

  localStorage.setItem("theme", JSON.stringify(toggle));

  useEffect(() => {
    if (toggle) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [toggle]);

  return (
    <>
      <nav className="flex items-center justify-between w-full px-10 bg-secondary dark:bg-[#060024]  py-3 shadow-sm dark:shadow-[#9a9ea1] sticky top-0 left-0 z-50">
        <div className="flex items-center gap-8">
          {toggle ? (
            <img
              src="/darklogo.jpg"
              alt="logo"
              className="w-[70px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          ) : (
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-[70px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          )}
          <ul className="navUl flex items-center gap-8 text-text font-[500] capitalize text-[1.2rem] dark:text-[#D9EEFF]">
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
              placeholder="Search..."
              className="py-2 px-10 border bg-border dark:bg-[#1c173bfb] border-[#c7d0dd] dark:border-[#9a9ea1] rounded-full focus:outline-none"
            />
            <span className="bg-secondary px-2 py-1 text-[0.9rem] font-[500] rounded-full absolute right-1.5 border text-text border-[#c7d0dd] dark:bg-[#353058fb] dark:text-[#D9EEFF] dark:border-none top-[0.350rem]">
              Ctrl + S
            </span>
          </div>
          <FaGithub className="text-[1.8rem] dark:text-[#D9EEFF] text-primary cursor-pointer" />
          {toggle ? (
            <BsSunFill
              className="text-[1.6rem] dark:text-[#D9EEFF] text-primary cursor-pointer"
              onClick={() => setToggle(false)}
            />
          ) : (
            <BsFillMoonStarsFill
              className="text-[1.6rem] dark:text-[#D9EEFF] text-primary cursor-pointer"
              onClick={() => setToggle(true)}
            />
          )}
        </div>
      </nav>

      {isSearchOpen && <Search />}
    </>
  );
};

export default Navbar;
