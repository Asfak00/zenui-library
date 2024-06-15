import React, { useEffect, useState } from "react";

// icons
import { FaDiscord } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";

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

  const getTheRouteName = () => {
    return window.location.pathname
  }

  document.addEventListener('click', (event)=>{
    if(!event.target.closest('.zenuiSearchComponent') && !event.target.closest('.zenuiSearchInput')){
      setIsSearchOpen(false)
    }
  })

  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'z') {
      setIsSearchOpen(true)
    }else if (event.key === 'Escape') {
      setIsSearchOpen(false)
    }
  });

  return (
    <>
      <nav className="flex items-center justify-between w-full px-10 backdrop-blur-md dark:bg-[#060024]  py-3 shadow-sm dark:shadow-[#9a9ea1] fixed shadow-shadowColor top-0 left-0 z-50">
        <div className="flex items-center gap-8">
          {toggle ? (
            <img
              src="/darklogo.png"
              alt="logo"
              className="w-[70px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          ) : (
            <img
              src="/darklogo.png"
              alt="logo"
              className="w-[70px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          )}
          <ul className={`${getTheRouteName() !== '/' && 'text-text'} navUl flex items-center gap-8 text-[#9caebc] font-[500] capitalize text-[1.2rem] dark:text-[#D9EEFF]`}>
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
          <div className="zenuiSearchInput relative" onClick={handleSearchClick}>
            <IoIosSearch className={`${getTheRouteName() === '/' ? 'text-primary ':'text-text' } absolute left-3 top-[0.6rem] text-[1.5rem]`} />
            <input
              type="search"
              name=""
              id=""
              readOnly={true}
              placeholder="Search..."
              className={`${getTheRouteName() === '/' ? 'placeholder:text-[#024C92] border-[#024C92] bg-[#0471d6] text-[#024C92]' : 'placeholder:text-text border-[#c7d0dd] bg-border text-[#024C92]' } py-2 px-10 border dark:bg-[#1c173bfb] dark:border-[#9a9ea1] rounded-full focus:outline-none`}
            />
            <span className={`${getTheRouteName() === '/' ? 'border-[#024C92] bg-[#024C92] text-primary' : 'text-text border-[#c7d0dd] bg-secondary' } px-2 py-1 text-[0.9rem] font-[500] rounded-full absolute right-1.5 border dark:bg-[#353058fb] dark:text-[#D9EEFF] dark:border-none top-[0.350rem]`}>
              Ctrl + Z
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <FaDiscord className={`${getTheRouteName() === '/' ? 'text-[#131558] bg-primary' : 'text-text bg-border'} text-[1.8rem] dark:text-[#D9EEFF] rounded-full p-1 cursor-pointer`} />
            <TbBrandGithubFilled className={`${getTheRouteName() === '/' ? 'text-[#131558] bg-primary' : 'text-text bg-border'} text-[1.8rem] dark:text-[#D9EEFF] rounded-full p-1 cursor-pointer`} />
          </div>
          {/*{toggle ? (*/}
          {/*  <BsSunFill*/}
          {/*    className="text-[1.6rem] dark:text-[#D9EEFF] text-primary cursor-pointer"*/}
          {/*    onClick={() => setToggle(false)}*/}
          {/*  />*/}
          {/*) : (*/}
          {/*  <BsFillMoonStarsFill*/}
          {/*    className="text-[1.6rem] dark:text-[#D9EEFF] text-primary cursor-pointer"*/}
          {/*    onClick={() => setToggle(true)}*/}
          {/*  />*/}
          {/*)}*/}
        </div>
      </nav>

      <div className={`${isSearchOpen ? 'visible z-[100]' : 'invisible z-[-1]'} transition-all duration-500`}>
        <Search isSearchOpen={isSearchOpen}/>
      </div>
    </>
  );
};

export default Navbar;
