import React, {useEffect, useState} from "react";

// icons
import {IoIosSearch} from "react-icons/io";

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

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.zenuiSearchComponent') && !event.target.closest('.zenuiSearchInput')) {
            setIsSearchOpen(false)
        }
    })

    document.addEventListener('keydown', function (event) {
        event.stopPropagation();
        if ((event.ctrlKey || event.metaKey) && event.key === 's') {
            event.preventDefault();
            setIsSearchOpen(true)
        } else if (event.key === 'Escape') {
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
            <nav
                className={`border-b border-gray-100 1024px:flex items-center justify-between w-full px-10 backdrop-blur-md sticky top-0 left-0 z-[999] hidden py-3`}>
                <div className="flex items-center gap-8 relative">
                    {
                        getTheRouteName() === '/' && (
                            <div
                                className='w-[100px] h-[300px] bg-[#9A04F5] absolute top-[-140px] opacity-30 left-0 blur-[70px] rotate-[-50deg]'></div>
                        )
                    }

                    <div className='relative mr-6'>
                            <span
                                className='px-2.5 absolute right-[-40px] text-[#a4a4a8] top-0 py-0.5 bg-[#f0f0f1] rounded-full text-[12px]'>
                                v2.0
                            </span>
                        <img
                            src="/darklogo.png"
                            alt="logo"
                            className="w-[70px] cursor-pointer z-10"
                            onClick={() => navigate("/")}
                        />
                    </div>
                    <ul className={`text-gray-600 navUl flex items-center gap-8 font-[500] capitalize text-[1.2rem]`}>
                        <li className=''>
                            <p className={getTheRouteName() === '/about-us' && '!text-[#0FABCA]'}><Link to='/about-us'>About
                                us</Link>
                            </p>
                            <span><Link to='/about-us'>About us</Link> </span>
                        </li>
                        <li className=''>
                            <p className={getTheRouteName() === '/getting-started/templates' && '!text-[#0FABCA]'}><a
                                href='/getting-started/templates'>Templates</a></p>
                            <span><a href='/getting-started/templates'>Templates</a></span>
                        </li>
                        <li className='relative pr-[45px]'>
                            <div
                                className='bg-[#0FABCA] rounded-[2px] text-white animate-pulse text-[0.5rem] px-2 py-0.5 w-max absolute top-[6px] z-50 right-0'>
                                NEW
                                <div
                                    className='w-[8px] h-[8px] bg-[#0FABCA] rotate-[45deg] absolute left-[-4px] top-[0.229rem]'></div>
                            </div>
                            <p className={getTheRouteName() === '/blocks/all-blocks' && '!text-[#0FABCA]'}><a
                                href='/blocks/all-blocks'>Blocks</a></p>
                            <span><a href='/blocks/all-blocks'>Blocks</a></span>
                        </li>

                        <li className='relative pr-[45px]'>
                            <div
                                className='bg-[#0FABCA] rounded-[2px] text-white animate-pulse text-[0.5rem] px-2 py-0.5 w-max absolute top-[6px] z-50 right-0'>
                                NEW

                                <div
                                    className='w-[8px] h-[8px] bg-[#0FABCA] rotate-[45deg] absolute left-[-4px] top-[0.229rem]'></div>
                            </div>
                            <p className={getTheRouteName() === '/icons' && '!text-[#0FABCA]'}><a
                                href='/icons'>Icons</a></p>
                            <span><a href='/icons'>Icons</a></span>
                        </li>

                        <li className='relative pr-[45px]'>
                            <div
                                className='bg-[#0FABCA] rounded-[2px] text-white animate-pulse text-[0.5rem] px-2 py-0.5 w-max absolute top-[6px] z-50 right-0'>
                                NEW

                                <div
                                    className='w-[8px] h-[8px] bg-[#0FABCA] rotate-[45deg] absolute left-[-4px] top-[0.229rem]'></div>
                            </div>
                            <p className={getTheRouteName() === '/opacity-palette' && '!text-[#0FABCA]'}><a
                                href='/opacity-palette'>Opacity Palette</a></p>
                            <span><a href='/opacity-palette'>Opacity Palette</a></span>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-2 w-[30%]">
                    <div className="zenuiSearchInput relative w-full" onClick={handleSearchClick}>
                        <IoIosSearch
                            className={`text-gray-400 absolute left-3 top-[0.6rem] text-[1.5rem]`}/>
                        <input
                            type="search"
                            name=""
                            id=""
                            readOnly={true}
                            placeholder="Search..."
                            className={`py-[0.59rem] pl-10 border w-full bg-transparent border-gray-200 rounded-md focus:ring-0 outline-none`}
                        />
                        <span
                            className={`text-gray-500 bg-gray-50 border-gray-200 px-2 py-1 text-[0.8rem] font-[500] rounded-md h-[75%] absolute right-1.5 border top-[0.35rem] flex items-center justify-center`}>
              Ctrl + S
            </span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <a href='https://discord.gg/qbwytm4WUG' target='_blank'>
                            <RxDiscordLogo
                                className={`text-[2.7rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`}/>
                        </a>

                        <a href='https://github.com/Asfak00/zenui-library' target='_blank'>
                            <FiGithub
                                className={`text-[2.7rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`}/>
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
