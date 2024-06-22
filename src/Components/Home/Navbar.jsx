import React, { useEffect, useState } from "react";

// icons
import { FaDiscord } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";

// react router dom
import {Link, useNavigate} from "react-router-dom";
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
      <nav className="1024px:flex items-center justify-between w-full px-10 backdrop-blur-md  py-3 shadow-sm fixed shadow-shadowColor top-0 left-0 z-50 hidden ">
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
          <ul className={`${getTheRouteName() !== '/' || getTheRouteName() !== '/about-us' || getTheRouteName() !== '/privacy-policy' && '!text-text'} navUl flex items-center gap-8 !text-[#9caebc] font-[500] capitalize text-[1.2rem]`}>
            {/*<li>*/}
            {/*  <p>docs</p>*/}
            {/*  <span>docs</span>*/}
            {/*</li>*/}
            <li>
              <p className={getTheRouteName() === '/about-us' && '!text-primary'}>About us</p>
              <span><Link to='/about-us'>About us</Link> </span>
            </li>
            <li>
              <p className={getTheRouteName() === '/getting-started/templates'  && '!text-primary'}>Templates</p>
              <span><a href='/getting-started/templates'>Templates</a></span>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="zenuiSearchInput relative" onClick={handleSearchClick}>
            <IoIosSearch className={`${getTheRouteName() === '/' || getTheRouteName() === '/about-us' || getTheRouteName() === '/privacy-policy' ? 'text-primary ':'text-text' } absolute left-3 top-[0.6rem] text-[1.5rem]`} />
            <input
              type="search"
              name=""
              id=""
              readOnly={true}
              placeholder="Search..."
              className={`${getTheRouteName() === '/' || getTheRouteName() === '/about-us' || getTheRouteName() === '/privacy-policy' ? 'placeholder:text-[#024C92] border-[#024C92] bg-[#0471d6] text-[#024C92]' : 'placeholder:text-text border-[#c7d0dd] bg-border text-[#024C92]' } py-2 px-10 border rounded-full focus:outline-none`}
            />
            <span className={`${getTheRouteName() === '/' || getTheRouteName() === '/about-us' || getTheRouteName() === '/privacy-policy' ? 'border-[#024C92] bg-[#024C92] text-primary' : 'text-text border-[#c7d0dd] bg-secondary' } px-2 py-1 text-[0.9rem] font-[500] rounded-full absolute right-1.5 border top-[0.350rem]`}>
              Ctrl + Z
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <a href='https://discord.gg/qbwytm4WUG' target='_blank'>
              <FaDiscord className={`${getTheRouteName() === '/' || getTheRouteName() === '/about-us' || getTheRouteName() === '/privacy-policy' ? 'text-[#131558] bg-primary' : 'text-text bg-border'} text-[1.8rem] rounded-full p-1 cursor-pointer`} />
            </a>
            
            <TbBrandGithubFilled className={`${getTheRouteName() === '/' || getTheRouteName() === '/about-us' || getTheRouteName() === '/privacy-policy' ? 'text-[#131558] bg-primary' : 'text-text bg-border'} text-[1.8rem] rounded-full p-1 cursor-pointer`} />
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
