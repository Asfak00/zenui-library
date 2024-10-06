import React, {useState} from "react";

// icons
import {CiMenuFries} from "react-icons/ci";
import {IoIosSearch} from "react-icons/io";
import {RxCross2, RxDiscordLogo} from "react-icons/rx";
import {FiGithub} from "react-icons/fi";

// react router dom
import {Link, useNavigate} from "react-router-dom";
import Search from "./Search";

const MobileNavbar = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigate = useNavigate();

    const handleSearchClick = () => {
        setIsSearchOpen(true);
    };

    const getTheRouteName = () => {
        return window.location.pathname
    }

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.zenuiSearchComponent') && !event.target.closest('.zenuiSearchInput')) {
            setIsSearchOpen(false)
        }

        if (!event.target.closest('.mobileSidebar') && !event.target.closest('.mobileSidebarButton')) {
            setSidebarOpen(false)
        }
    })

    return (
        <>
            <nav
                className="flex 1024px:hidden items-center justify-between w-full px-5 425px:px-10 backdrop-blur-md  py-3 shadow-sm sticky shadow-shadowColor top-0 left-0 z-50">
                <div className="flex items-center gap-8 relative">
                    <div
                        className='w-[100px] h-[300px] bg-[#9A04F5] absolute top-[-150px] opacity-30 left-0 blur-[70px] rotate-[-50deg]'></div>

                    <div className='relative'>
                        <span
                            className='px-2 absolute right-[-33px] text-[#a4a4a8] top-1 py-[1px] bg-[#f0f0f1] rounded-full text-[10px]'>
                            v2.0
                        </span>
                        <img
                            src="/darklogo.png"
                            alt="logo"
                            className="w-[60px] 1024px:w-[70px] z-20 cursor-pointer"
                            onClick={() => navigate("/")}
                        />
                    </div>
                </div>

                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-2'>
                        <a href='https://discord.gg/qbwytm4WUG' target='_blank'>
                            <RxDiscordLogo
                                className={`text-[2.3rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`}/>
                        </a>

                        <a href='https://github.com/Asfak00/zenui-library' target='_blank'>
                            <FiGithub
                                className={`text-[2.3rem] text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer`}/>
                        </a>
                    </div>

                    <CiMenuFries onClick={() => setSidebarOpen(!sidebarOpen)}
                                 className="text-[2.3rem] mobileSidebarButton text-gray-400 rounded-md p-[6px] border border-gray-200 cursor-pointer"/>
                </div>
            </nav>

            {/*  sidebar  */}
            <aside
                className={`${sidebarOpen ? 'translate-x-0 opacity-100 z-[999]' : 'translate-x-[200px] opacity-0 z-[-1]'} fixed top-0 mobileSidebar right-0 py-5 px-[1.3rem] w-[80%] block 1024px:hidden 425px:w-[50%] h-screen transition-all duration-500 bg-white toastshadow`}>

                <RxCross2 className='text-[1.3rem] text-gray-700 mb-[20px] absolute left-[15px]' onClick={()=> setSidebarOpen(false)}/>

                <div className="zenuiSearchInput mt-[45px] relative w-full" onClick={handleSearchClick}>
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
                <ul className="text-gray-600 navUl flex flex-col mt-5 items-start gap-8 font-[500] capitalize text-[1.2rem]">
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
                        <p className={getTheRouteName() === '/components/all-blocks' && '!text-[#0FABCA]'}><a
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
                            href='/color-palette'>Color Palette</a></p>
                        <span><a href='/color-palette'>Color Palette</a></span>
                    </li>
                </ul>
            </aside>

            <div className={`${isSearchOpen ? 'visible z-[100]' : 'invisible z-[-1]'} transition-all duration-500`}>
                <Search isSearchOpen={isSearchOpen}/>
            </div>
        </>
    );
};

export default MobileNavbar;
