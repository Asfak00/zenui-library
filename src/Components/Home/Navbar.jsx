import React, { useEffect, useState } from "react";

// icons
import { FaDiscord } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";

// react router dom
import {Link, useNavigate} from "react-router-dom";
import Search from "./Search";
import {FiGithub} from "react-icons/fi";
import {RxDiscordLogo} from "react-icons/rx";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const navigate = useNavigate();

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

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`shadow-sm shadow-gray-200 1024px:flex items-center justify-between w-full px-10 backdrop-blur-md fixed  top-0 left-0 z-50 hidden py-3`}>
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
          <ul className={`text-gray-600 navUl flex items-center gap-8 font-[500] capitalize text-[1.2rem]`}>
            {/*<li>*/}
            {/*  <p>docs</p>*/}
            {/*  <span>docs</span>*/}
            {/*</li>*/}
            <li className=''>
              <p className={getTheRouteName() === '/about-us' && '!text-primary'}><Link to='/about-us'>About us</Link>
              </p>
              <span><Link to='/about-us'>About us</Link> </span>
            </li>
            <li className=''>
              <p className={getTheRouteName() === '/getting-started/templates' && '!text-primary'}><a
                  href='/getting-started/templates'>Templates</a></p>
              <span><a href='/getting-started/templates'>Templates</a></span>
            </li>
            <li className='relative pr-[45px]'>
              <div
                  className='bg-[#0FABCA] rounded-[2px] text-white animate-pulse text-[0.5rem] px-2 py-0.5 w-max absolute top-[6px] z-50 right-0'>
                NEW

                <div className='w-[8px] h-[8px] bg-[#0FABCA] rotate-[45deg] absolute left-[-4px] top-[0.229rem]'></div>
              </div>
              <p className={getTheRouteName() === '/components/all-blocks' && '!text-primary'}><a
                  href='/blocks/all-blocks'>Blocks</a></p>
              <span><a href='/blocks/all-blocks'>Blocks</a></span>
            </li>

            <li className='relative pr-[45px]'>
              <div
                  className='bg-[#0FABCA] rounded-[2px] text-white animate-pulse text-[0.5rem] px-2 py-0.5 w-max absolute top-[6px] z-50 right-0'>
                NEW

                <div className='w-[8px] h-[8px] bg-[#0FABCA] rotate-[45deg] absolute left-[-4px] top-[0.229rem]'></div>
              </div>
              <p className={getTheRouteName() === '/icons' && '!text-primary'}><a
                  href='/icons'>Icons</a></p>
              <span><a href='/icons'>Icons</a></span>
            </li>

            <li className='relative pr-[45px]'>
              <div
                  className='bg-[#0FABCA] rounded-[2px] text-white animate-pulse text-[0.5rem] px-2 py-0.5 w-max absolute top-[6px] z-50 right-0'>
                NEW

                <div className='w-[8px] h-[8px] bg-[#0FABCA] rotate-[45deg] absolute left-[-4px] top-[0.229rem]'></div>
              </div>
              <p className={getTheRouteName() === '/opacity-palette' && '!text-primary'}><a
                  href='/opacity-palette'>Opacity Palette</a></p>
              <span><a href='/opacity-palette'>Opacity Palette</a></span>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 w-[30%]">
          <div className="zenuiSearchInput relative w-full" onClick={handleSearchClick}>
            <IoIosSearch
                className={`text-gray-400 absolute left-3 top-[0.8rem] text-[1.5rem]`}/>
            <input
                type="search"
                name=""
                id=""
                readOnly={true}
                placeholder="Search..."
                className={`py-3 pl-10 border w-full bg-transparent border-gray-200 rounded-md focus:ring-0 outline-none`}
            />
            <span className={`text-gray-500 bg-gray-50 border-gray-200 px-2 py-1 text-[0.9rem] font-[500] rounded-md h-[75%] absolute right-1.5 border top-[0.4rem] flex items-center justify-center`}>
              Ctrl + S
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <a href='https://discord.gg/qbwytm4WUG' target='_blank'>
              <RxDiscordLogo className={`text-[2.7rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`} />
            </a>
            
            <a href='https://github.com/Asfak00/zenui-library' target='_blank'>
              <FiGithub className={`text-[2.7rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`} />
            </a>
          </div>
          {/*{toggle ? (*/}
          {/*  <BsSunFill*/}
          {/*    className="text-[1.6rem] text-primary cursor-pointer"*/}
          {/*    onClick={() => setToggle(false)}*/}
          {/*  />*/}
          {/*) : (*/}
          {/*  <BsFillMoonStarsFill*/}
          {/*    className="text-[1.6rem] text-primary cursor-pointer"*/}
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
