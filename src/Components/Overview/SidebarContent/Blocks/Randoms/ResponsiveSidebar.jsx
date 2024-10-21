import React, { useState } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import {IoIosArrowDown, IoIosCode, IoIosSearch} from "react-icons/io";
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import {FaPlus} from "react-icons/fa6";
import {
    IoChatbubblesOutline,
    IoFolderOpenOutline, IoMoonOutline,
    IoNewspaperOutline, IoNotificationsOutline,
    IoSettingsOutline, IoSunnyOutline
} from "react-icons/io5";
import {RiAccountCircleLine, RiTeamLine} from "react-icons/ri";
import {
    MdOutlineAnalytics,
    MdOutlinePrivacyTip,
    MdSchedule
} from "react-icons/md";
import { PiShoppingBagLight} from "react-icons/pi";
import {AiOutlineMail} from "react-icons/ai";
import {FiBarChart, FiFlag, FiPieChart} from "react-icons/fi";
import {LuHelpCircle} from "react-icons/lu";
import {GoHome, GoPerson, GoProjectSymlink, GoSidebarCollapse} from "react-icons/go";
import {CiCalendar, CiLogout} from "react-icons/ci";
import {BsThreeDots, BsThreeDotsVertical} from "react-icons/bs";
import {RxDashboard} from "react-icons/rx";
import {TbBrandGoogleAnalytics} from "react-icons/tb";
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";


const ResponsiveSidebar = () => {

    const[sidebar1Preview, setSidebar1Preview] = useState(true)
    const[sidebar1Code, setSidebar1Code] = useState(false)

    const[sidebar2Preview, setSidebar2Preview] = useState(true)
    const[sidebar2Code, setSidebar2Code] = useState(false)

    const[sidebar3Preview, setSidebar3Preview] = useState(true)
    const[sidebar3Code, setSidebar3Code] = useState(false)

    const toggleCardView = useToggleCardView()

    // actions
    const [isCollapse, setIsCollapse] = useState(true)
    const [isCollapse1, setIsCollapse1] = useState(true)
    const [isCollapse2, setIsCollapse2] = useState(true)
    const [isDark, setIsDark] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(true)

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"responsive sidebar 1"} id={"responsive_sidebar_1"} />

                <p className="w-full text-text text-[1rem]">
                    A sidebar that adjusts its layout based on screen size, collapsing or expanding to maintain usability on both mobile and desktop devices.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sidebar1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                sidebar1Code && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={()=> toggleCardView(setSidebar1Preview, setSidebar1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                sidebar1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={()=> toggleCardView(setSidebar1Preview, setSidebar1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {sidebar1Preview && (
                        <div className={` p-8 transition-all duration-300 flex flex-wrap items-center gap-5 overflow-hidden`}>

                            <aside className={`${isCollapse ? 'py-[20px] px-[30px]' : 'py-[15px] px-[10px]'} bg-white boxShadow rounded-md transition-all duration-300 ease`}>
                                {
                                    isCollapse ? (
                                        <img src='https://i.ibb.co/ZHYQ04D/footer-logo.png' alt='logo'
                                             className='w-[130px] cursor-pointer'
                                             onClick={() => setIsCollapse(!isCollapse)}/>
                                    ): (
                                        <img src='https://i.ibb.co/0BZfPq6/darklogo.png' alt='logo'
                                             className='w-[50px] mx-auto cursor-pointer'
                                             onClick={() => setIsCollapse(!isCollapse)}/>
                                    )
                                }

                                {/* search bar */}
                                {
                                    isCollapse ? (
                                        <div className='relative mt-5'>
                                            <input
                                                className='px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary'
                                                placeholder='Search...'/>
                                            <IoIosSearch
                                                className='absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]'/>
                                        </div>
                                    ): (
                                        <div className='w-full relative group'>
                                            <IoIosSearch
                                                className='text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full'/>

                                            {/* tooltip */}
                                            <div className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                   Search
                                                </p>
                                            </div>
                                        </div>
                                    )
                                }

                                {/* general section */}
                                <div className='mt-6'>
                                    <p className={`${isCollapse ? 'text-[1rem]' : 'text-[0.9rem] text-center'} text-gray-500 font-[400]`}>General</p>

                                    <div className='mt-3 flex flex-col gap-[5px]'>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <AiOutlineMail className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Message</p>
                                            </div>
                                            <span
                                                className={`${isCollapse ? 'inline' : 'hidden'} py-[1px] px-[9px] bg-blue-100 text-blue-700 rounded-full text-[0.6rem`}>3</span>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-100px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Message
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <MdSchedule className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Schedule</p>
                                            </div>
                                            <div className='flex items-center gap-[5px]'>
                                                <span
                                                    className={`${isCollapse ? 'inline' : 'hidden'} py-[1px] px-[9px] bg-blue-100 text-blue-700 rounded-full text-[0.6rem`}>3</span>
                                                <FaPlus className={`${isCollapse ? 'inline' : 'hidden'} p-[7px] bg-blue-100 text-blue-700 rounded-full text-[1.6rem]`}/>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-100px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Schedule
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <MdOutlineAnalytics className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Analytics</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-100px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Analytics
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <IoNewspaperOutline className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>News</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-76px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    News
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <PiShoppingBagLight className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Recruitment</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-118px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Recruitment
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <IoFolderOpenOutline className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Projects</p>
                                            </div>
                                            <FaPlus className={`${isCollapse ? 'inline' : 'hidden'} p-[7px] bg-blue-100 text-blue-700 rounded-full text-[1.6rem]`}/>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-93px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Projects
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* myspace section */}
                                <div className='mt-6'>
                                    <p className={`${isCollapse ? 'text-[1rem]' : 'text-[0.9rem] text-center'} text-gray-500 font-[400]`}>Myspace</p>

                                    <div className='mt-3 flex flex-col gap-[5px]'>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <FiFlag className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Activity</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-88px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Activity
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <RiTeamLine className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Shared</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-86px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Shared
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <MdOutlinePrivacyTip className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Privacy</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-87px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Privacy
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* support section */}
                                <div className='mt-6'>
                                    <p className={`${isCollapse ? 'text-[1rem]' : 'text-[0.9rem] text-center'} text-gray-500 font-[400]`}>Support</p>

                                    <div className='mt-3 flex flex-col gap-[5px]'>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <IoSettingsOutline className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Setting</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-87px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Setting
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <LuHelpCircle className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Help!</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-74px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Help!
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <IoChatbubblesOutline className='text-[1.3rem] text-gray-800'/>
                                                <p className={`${isCollapse ? 'inline' : 'hidden'} text-[1.1rem] font-[400] text-gray-800`}>Chat</p>
                                            </div>
                                            <span
                                                className={`${isCollapse ? 'inline' : 'hidden'} py-[1px] px-[9px] bg-blue-100 text-blue-700 rounded-full text-[0.6rem`}>3</span>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse ? 'hidden' : 'inline'} absolute top-0 right-[-72px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Chat
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                        </div>
                    )}

                    {sidebar1Code && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {IoIosSearch} from "react-icons/io";
import {MdOutlineAnalytics, MdOutlinePrivacyTip, MdSchedule} from "react-icons/md";
import {PiShoppingBagLight} from "react-icons/pi";
import {AiOutlineMail} from "react-icons/ai";
import {FaPlus} from "react-icons/fa6";
import {IoChatbubblesOutline, IoFolderOpenOutline, IoNewspaperOutline, IoSettingsOutline} from "react-icons/io5";
import {FiFlag} from "react-icons/fi";
import {RiTeamLine} from "react-icons/ri";
import {LuHelpCircle} from "react-icons/lu";

const ResponsiveSidebar = () => {

    const [isCollapse, setIsCollapse] = useState(true)

    return (

        <aside
            className={`${isCollapse ? "py-[20px] px-[30px]" : "py-[15px] px-[10px]"} bg-white boxShadow rounded-md transition-all duration-300 ease`}>
            {
                isCollapse ? (
                    <img src="https://i.ibb.co/ZHYQ04D/footer-logo.png" alt="logo"
                         className="w-[130px] cursor-pointer"
                         onClick={() => setIsCollapse(!isCollapse)}/>
                ) : (
                    <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo"
                         className="w-[50px] mx-auto cursor-pointer"
                         onClick={() => setIsCollapse(!isCollapse)}/>
                )
            }

            {/* search bar */}
            {
                isCollapse ? (
                    <div className="relative mt-5">
                        <input
                            className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
                            placeholder="Search..."/>
                        <IoIosSearch
                            className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]"/>
                    </div>
                ) : (
                    <div className="w-full relative group">
                        <IoIosSearch
                            className="text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full"/>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Search
                            </p>
                        </div>
                    </div>
                )
            }

            {/* general section */}
            <div className="mt-6">
                <p className={`${isCollapse ? "text-[1rem]" : "text-[0.9rem] text-center"} text-gray-500 font-[400]`}>General</p>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <AiOutlineMail className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Message</p>
                        </div>
                        <span
                            className={`${isCollapse ? "inline" : "hidden"} py-[1px] px-[9px] bg-blue-100 text-blue-700 rounded-full text-[0.6rem`}>3</span>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-100px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Message
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <MdSchedule className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Schedule</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                                                <span
                                                    className={`${isCollapse ? "inline" : "hidden"} py-[1px] px-[9px] bg-blue-100 text-blue-700 rounded-full text-[0.6rem`}>3</span>
                            <FaPlus
                                className={`${isCollapse ? "inline" : "hidden"} p-[7px] bg-blue-100 text-blue-700 rounded-full text-[1.6rem]`}/>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-100px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Schedule
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <MdOutlineAnalytics className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Analytics</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-100px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Analytics
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoNewspaperOutline className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>News</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-76px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                News
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <PiShoppingBagLight className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Recruitment</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-118px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Recruitment
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoFolderOpenOutline className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Projects</p>
                        </div>
                        <FaPlus
                            className={`${isCollapse ? "inline" : "hidden"} p-[7px] bg-blue-100 text-blue-700 rounded-full text-[1.6rem]`}/>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-93px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Projects
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* myspace section */}
            <div className="mt-6">
                <p className={`${isCollapse ? "text-[1rem]" : "text-[0.9rem] text-center"} text-gray-500 font-[400]`}>Myspace</p>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <FiFlag className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Activity</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-88px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Activity
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <RiTeamLine className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Shared</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-86px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Shared
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <MdOutlinePrivacyTip className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Privacy</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-87px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Privacy
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* support section */}
            <div className="mt-6">
                <p className={`${isCollapse ? "text-[1rem]" : "text-[0.9rem] text-center"} text-gray-500 font-[400]`}>Support</p>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoSettingsOutline className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Setting</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-87px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Setting
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <LuHelpCircle className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Help!</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-74px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Help!
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoChatbubblesOutline className="text-[1.3rem] text-gray-800"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1.1rem] font-[400] text-gray-800`}>Chat</p>
                        </div>
                        <span
                            className={`${isCollapse ? "inline" : "hidden"} py-[1px] px-[9px] bg-blue-100 text-blue-700 rounded-full text-[0.6rem`}>3</span>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-72px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Chat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ResponsiveSidebar;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"responsive sidebar 2"} id={"responsive_sidebar_2"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A sidebar that adjusts its layout based on screen size, collapsing or expanding to maintain usability on both mobile and desktop devices.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sidebar2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                sidebar2Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={()=> toggleCardView(setSidebar2Preview, setSidebar2Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                sidebar2Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={()=> toggleCardView(setSidebar2Preview, setSidebar2Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {sidebar2Preview && (
                        <div className={` p-8 pb-[80px] transition-all duration-300 flex flex-wrap items-center gap-5 overflow-hidden`}>

                            <aside className={`bg-white boxShadow rounded-md transition-all duration-300 ease`}>
                                <div className={`mt-5 ${isCollapse1 ? 'px-[20px]' : 'px-[10px]'} transition-all duration-300 ease-in-out`}>
                                    {
                                        isCollapse1 ? (
                                            <div className='flex items-center justify-between'>
                                                <img src='https://i.ibb.co/ZHYQ04D/footer-logo.png' alt='logo'
                                                     className='w-[130px] cursor-pointer'/>
                                                <div className='relative group'>
                                                    <GoSidebarCollapse className='text-[1.5rem] text-gray-600 cursor-pointer' onClick={()=> setIsCollapse1(false)}/>

                                                    {/* tooltip */}
                                                    <div className={`absolute -top-1 right-[-115px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                        <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                            Collapse
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <img src='https://i.ibb.co/0BZfPq6/darklogo.png' alt='logo'
                                                 className='w-[50px] mx-auto cursor-pointer'
                                                 onClick={() => setIsCollapse1(!isCollapse1)}/>
                                        )
                                    }

                                    {/* search bar */}
                                    {
                                        isCollapse1 ? (
                                            <div className='relative mt-5'>
                                                <input
                                                    className='px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary'
                                                    placeholder='Search...'/>
                                                <IoIosSearch
                                                    className='absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]'/>
                                            </div>
                                        ): (
                                            <div className='w-full relative group'>
                                                <IoIosSearch
                                                    className='text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full'/>

                                                {/* tooltip */}
                                                <div className={`${isCollapse1 ? 'hidden' : 'inline'} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                    <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                        Search
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>

                                {/* general section */}
                                <div className={`mt-6 ${isCollapse1 ? 'px-[20px]' : 'px-[10px]'} transition-all duration-300 ease-in-out`}>

                                    <div className='mt-3 flex flex-col gap-[5px]'>
                                        <div
                                            className={`${isCollapse1 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <GoHome className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse1 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Home</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse1 ? 'hidden' : 'inline'} absolute top-0 right-[-80px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Home
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse1 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <CiCalendar className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse1 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Calendar</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse1 ? 'hidden' : 'inline'} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Calendar
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse1 && 'justify-center'} ${isDropdownOpen && 'bg-gray-50'}  flex w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                            <div
                                                className={`${isCollapse1 ? ' justify-between' : 'justify-center'} flex items-center gap-[8px  w-full`}>
                                                <div className='flex items-center gap-[8px]'>
                                                    <GoProjectSymlink className='text-[1.3rem] text-gray-500'/>
                                                    <p className={`${isCollapse1 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Projects</p>
                                                </div>

                                                <IoIosArrowDown
                                                    className={`${isDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'} ${isCollapse1 ? 'inline' : 'hidden'} transition-all duration-300 text-[1rem] text-gray-500`}/>
                                            </div>

                                            {
                                                !isCollapse1 && (
                                                    <>
                                                        {/* hover projects dropdown */}
                                                        <ul className='translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[70px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] text-[1rem] text-gray-500'>
                                                            <li className='hover:bg-gray-50 px-[20px] py-[5px] rounded-md'>Google</li>
                                                            <li className='hover:bg-gray-50 px-[20px] py-[5px] rounded-md'>Facebook</li>
                                                            <li className='hover:bg-gray-50 px-[20px] py-[5px] rounded-md'>Twitter</li>
                                                            <li className='hover:bg-gray-50 px-[20px] py-[5px] rounded-md'>Linkedin</li>
                                                        </ul>
                                                    </>
                                                )
                                            }
                                        </div>

                                        {/* active projects dropdown */}
                                        <ul className={`${isDropdownOpen ? 'h-auto my-3 opacity-100 z-[1]' : 'opacity-0 z-[-1] h-0'} ${isCollapse1 ? 'inline' : 'hidden'} transition-all duration-300 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] text-gray-500`}>
                                            <li className='hover:bg-gray-50 px-[10px] py-[5px] rounded-md'>Google</li>
                                            <li className='hover:bg-gray-50 px-[10px] py-[5px] rounded-md'>Facebook</li>
                                            <li className='hover:bg-gray-50 px-[10px] py-[5px] rounded-md'>Twitter</li>
                                            <li className='hover:bg-gray-50 px-[10px] py-[5px] rounded-md'>Linkedin</li>
                                        </ul>


                                        <div
                                            className={`${isCollapse1 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <FiBarChart className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse1 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Progress</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse1 ? 'hidden' : 'inline'} absolute top-0 right-[-100px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Progress
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse1 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <FiPieChart className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse1 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Goals</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse1 ? 'hidden' : 'inline'} absolute top-0 right-[-76px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Goals
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* setting section */}
                                <div
                                    className={`${isCollapse1 ? 'px-[20px]' : 'px-[10px]'} mt-6 border-t border-gray-200  transition-all duration-300 ease-in-out`}>

                                    <div className='mt-3 flex flex-col gap-[5px]'>
                                        <div
                                            className={`${isCollapse1 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <IoNotificationsOutline className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse1 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Notification</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse1 ? 'hidden' : 'inline'} absolute top-0 right-[-98px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Activity
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className={`${isCollapse1 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <IoSettingsOutline className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse1 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Setting</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse1 ? 'hidden' : 'inline'} absolute top-0 right-[-96px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Setting
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* profile section */}
                                <div className={`${isCollapse1 ? 'justify-between' : 'justify-center'} bg-gray-100 py-3 px-[20px] flex items-center mt-10`}>
                                    <div className='flex items-center gap-[10px]'>
                                        <img
                                            src='https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1724478146~exp=1724481746~hmac=7de91a5b9271ecb4309974122ae6f47d71c01f7fff840c69755f781a03d9e340&w=996'
                                            alt='avatar' className='w-[30px] h-[30px] cursor-pointer rounded-full object-cover'/>
                                        <h3 className={`${isCollapse1 ? 'inline' : 'hidden'} text-[0.9rem] text-gray-800 font-[500]`}>Jhon Deo</h3>
                                    </div>

                                    <div className={`${isCollapse1 ? 'inline' : 'hidden'} relative group`}>
                                        <BsThreeDots className='text-[1.2rem] text-gray-500 cursor-pointer'/>

                                        <ul className='translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[30px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px]'>
                                            <li className='flex items-center gap-[7px] text-[0.9rem] text-gray-600 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer'>
                                                <RiAccountCircleLine/>
                                                Profile
                                            </li>
                                            <li className='flex items-center gap-[7px] text-[0.9rem] text-red-500 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer'>
                                                <CiLogout/>
                                                Logout
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>

                        </div>
                    )}

                    {sidebar2Code && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {IoIosArrowDown, IoIosSearch} from "react-icons/io";
import {
    IoNotificationsOutline,
    IoSettingsOutline
} from "react-icons/io5";
import {FiBarChart, FiPieChart} from "react-icons/fi";
import {RiAccountCircleLine} from "react-icons/ri";
import {GoHome, GoProjectSymlink, GoSidebarCollapse} from "react-icons/go";
import {CiCalendar, CiLogout} from "react-icons/ci";
import {BsThreeDots} from "react-icons/bs";

const ResponsiveSidebar = () => {

    const [isCollapse, setIsCollapse] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState(true)

    return (
        <aside className={`bg-white boxShadow rounded-md transition-all duration-300 ease`}>
            <div className={`mt-5 ${isCollapse ? "px-[20px]" : "px-[10px]"} transition-all duration-300 ease-in-out`}>
                {
                    isCollapse ? (
                        <div className="flex items-center justify-between">
                            <img src="https://i.ibb.co/ZHYQ04D/footer-logo.png" alt="logo"
                                 className="w-[130px] cursor-pointer"/>
                            <div className="relative group">
                                <GoSidebarCollapse className="text-[1.5rem] text-gray-600 cursor-pointer"
                                                   onClick={() => setIsCollapse(false)}/>

                                {/* tooltip */}
                                <div
                                    className={`absolute -top-1 right-[-115px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                    <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                        Collapse
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo"
                             className="w-[50px] mx-auto cursor-pointer"
                             onClick={() => setIsCollapse(!isCollapse)}/>
                    )
                }

                {/* search bar */}
                {
                    isCollapse ? (
                        <div className="relative mt-5">
                            <input
                                className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
                                placeholder="Search..."/>
                            <IoIosSearch
                                className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]"/>
                        </div>
                    ) : (
                        <div className="w-full relative group">
                            <IoIosSearch
                                className="text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full"/>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Search
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* general section */}
            <div className={`mt-6 ${isCollapse ? "px-[20px]" : "px-[10px]"} transition-all duration-300 ease-in-out`}>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <GoHome className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Home</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-80px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Home
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <CiCalendar className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Calendar</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Calendar
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse && "justify-center"} ${isDropdownOpen && "bg-gray-50"}  flex w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <div
                            className={`${isCollapse ? " justify-between" : "justify-center"} flex items-center gap-[8px  w-full`}>
                            <div className="flex items-center gap-[8px]">
                                <GoProjectSymlink className="text-[1.3rem] text-gray-500"/>
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Projects</p>
                            </div>

                            <IoIosArrowDown
                                className={`${isDropdownOpen ? "rotate-[180deg]" : "rotate-0"} ${isCollapse ? "inline" : "hidden"} transition-all duration-300 text-[1rem] text-gray-500`}/>
                        </div>

                        {
                            !isCollapse && (
                                <>
                                    {/* hover projects dropdown */}
                                    <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[70px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] text-[1rem] text-gray-500">
                                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">Google</li>
                                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">Facebook</li>
                                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">Twitter</li>
                                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">Linkedin</li>
                                    </ul>
                                </>
                            )
                        }
                    </div>

                    {/* active projects dropdown */}
                    <ul className={`${isDropdownOpen ? "h-auto my-3 opacity-100 z-[1]" : "opacity-0 z-[-1] h-0"} ${isCollapse ? "inline" : "hidden"} transition-all duration-300 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] text-gray-500`}>
                        <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">Google</li>
                        <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">Facebook</li>
                        <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">Twitter</li>
                        <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">Linkedin</li>
                    </ul>


                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <FiBarChart className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Progress</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-100px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Progress
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <FiPieChart className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Goals</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-76px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Goals
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* setting section */}
            <div
                className={`${isCollapse ? "px-[20px]" : "px-[10px]"} mt-6 border-t border-gray-200  transition-all duration-300 ease-in-out`}>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoNotificationsOutline className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Notification</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-98px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Activity
                            </p>
                        </div>
                    </div>

                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoSettingsOutline className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Setting</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-96px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Setting
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* profile section */}
            <div
                className={`${isCollapse ? "justify-between" : "justify-center"} bg-gray-100 py-3 px-[20px] flex items-center mt-10`}>
                <div className="flex items-center gap-[10px]">
                    <img
                        src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1724478146~exp=1724481746~hmac=7de91a5b9271ecb4309974122ae6f47d71c01f7fff840c69755f781a03d9e340&w=996"
                        alt="avatar" className="w-[30px] h-[30px] cursor-pointer rounded-full object-cover"/>
                    <h3 className={`${isCollapse ? "inline" : "hidden"} text-[0.9rem] text-gray-800 font-[500]`}>Jhon
                        Deo</h3>
                </div>

                <div className={`${isCollapse ? "inline" : "hidden"} relative group`}>
                    <BsThreeDots className="text-[1.2rem] text-gray-500 cursor-pointer"/>

                    <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[30px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px]">
                        <li className="flex items-center gap-[7px] text-[0.9rem] text-gray-600 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
                            <RiAccountCircleLine/>
                            Profile
                        </li>
                        <li className="flex items-center gap-[7px] text-[0.9rem] text-red-500 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
                            <CiLogout/>
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

export default ResponsiveSidebar;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"responsive sidebar 3"} id={"responsive_sidebar_3"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A sidebar that adjusts its layout based on screen size, collapsing or expanding to maintain usability on both mobile and desktop devices.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sidebar3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                sidebar3Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={()=> toggleCardView(setSidebar3Preview, setSidebar3Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                sidebar3Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={()=> toggleCardView(setSidebar3Preview, setSidebar3Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {sidebar3Preview && (
                        <div className={` p-8 pb-[80px] transition-all duration-300 flex flex-wrap items-center gap-5 overflow-hidden`}>

                            <aside className={`bg-white boxShadow rounded-md transition-all duration-300 ease relative`}>
                                <div className={`mt-5 ${isCollapse2 ? 'px-[20px]' : 'px-[10px]'} transition-all duration-300 ease-in-out `}>
                                    {
                                        isCollapse2 ? (
                                            <div className='flex items-center justify-between'>
                                                <img src='https://i.ibb.co/ZHYQ04D/footer-logo.png' alt='logo'
                                                     className='w-[130px] cursor-pointer'/>
                                                <div className='relative group'>
                                                    <BsThreeDotsVertical className='text-[1.9rem] text-gray-500 cursor-pointer p-[5px] rounded-md hover:bg-gray-50'/>
                                                </div>
                                            </div>
                                        ) : (
                                            <img src='https://i.ibb.co/0BZfPq6/darklogo.png' alt='logo'
                                                 className='w-[50px] mx-auto cursor-pointer'/>
                                        )
                                    }

                                    {/* search bar */}
                                    {
                                        isCollapse2 ? (
                                            <div className='relative mt-5'>
                                                <input
                                                    className='px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary'
                                                    placeholder='Search...'/>
                                                <IoIosSearch
                                                    className='absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]'/>
                                            </div>
                                        ): (
                                            <div className='w-full relative group'>
                                                <IoIosSearch
                                                    className='text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full'/>

                                                {/* tooltip */}
                                                <div className={`${isCollapse2 ? 'hidden' : 'inline'} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                    <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                        Search
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>

                                {/* collapse button */}
                                <div className='bg-white notificationShadow p-[5px] rounded-md w-max absolute top-[50px] right-[-20px] cursor-pointer' onClick={()=> setIsCollapse2(!isCollapse2)}>
                                    <IoIosCode className='text-[1.5rem] text-gray-500'/>
                                </div>

                                {/* general section */}
                                <div className={`mt-6 ${isCollapse2 ? 'px-[20px]' : 'px-[10px]'} transition-all duration-300 ease-in-out`}>

                                    <p className={`${isCollapse2 ? 'text-start' : 'text-center'} text-[0.9rem] text-gray-500`}>Main</p>

                                    <div className='mt-3 flex flex-col gap-[5px]'>
                                        <div
                                            className={`${isCollapse2 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <RxDashboard className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse2 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Dashboard</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse2 ? 'hidden' : 'inline'} absolute top-0 right-[-108px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Dashboard
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse2 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <GoPerson className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse2 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Audience</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse2 ? 'hidden' : 'inline'} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Audience
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse2 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <IoNewspaperOutline className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse2 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Posts</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse2 ? 'hidden' : 'inline'} absolute top-0 right-[-76px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Posts
                                                </p>
                                            </div>
                                        </div>
                                        <div
                                            className={`${isCollapse2 && 'justify-center'} ${isDropdownOpen && 'bg-gray-50'}  flex w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                            <div
                                                className={`${isCollapse2 ? ' justify-between' : 'justify-center'} flex items-center gap-[8px  w-full`}>
                                                <div className='flex items-center gap-[8px]'>
                                                    <TbBrandGoogleAnalytics className='text-[1.3rem] text-gray-500'/>
                                                    <p className={`${isCollapse2 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Income</p>
                                                </div>

                                                <IoIosArrowDown
                                                    className={`${isDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'} ${isCollapse2 ? 'inline' : 'hidden'} transition-all duration-300 text-[1rem] text-gray-500`}/>
                                            </div>

                                            {
                                                !isCollapse2 && (
                                                    <>
                                                        {/* hover projects dropdown */}
                                                        <ul className='translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[70px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] text-[1rem] text-gray-500'>
                                                            <li className='hover:bg-gray-50 px-[20px] py-[5px] rounded-md'>Earnings</li>
                                                            <li className='hover:bg-gray-50 px-[20px] py-[5px] rounded-md'>Refunds</li>
                                                            <li className='hover:bg-gray-50 px-[20px] py-[5px] rounded-md'>Declines</li>
                                                            <li className='hover:bg-gray-50 px-[20px] py-[5px] rounded-md'>Payouts</li>
                                                        </ul>
                                                    </>
                                                )
                                            }
                                        </div>

                                        {/* active projects dropdown */}
                                        <ul className={`${isDropdownOpen ? 'h-auto my-3 opacity-100 z-[1]' : 'opacity-0 z-[-1] h-0'} ${isCollapse2 ? 'inline' : 'hidden'} transition-all duration-300 list-none ml-[20px] pl-[10px] border-l border-gray-300 flex flex-col gap-[3px] text-[1rem] text-gray-500`}>
                                            <li className='hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md'>Earnings</li>
                                            <li className='hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md'>Refunds</li>
                                            <li className='hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md'>Declines</li>
                                            <li className='hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md'>Payouts</li>
                                        </ul>

                                    </div>
                                </div>

                                {/* setting section */}
                                <div
                                    className={`${isCollapse2 ? 'px-[20px]' : 'px-[10px]'} mt-4 transition-all duration-300 ease-in-out`}>

                                    <p className={`${isCollapse2 ? 'text-start' : 'text-center'} text-[0.9rem] text-gray-500`}>Settings</p>

                                    <div className='mt-3 flex flex-col gap-[5px]'>
                                        <div
                                            className={`${isCollapse2 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <IoNotificationsOutline className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse2 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Notification</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse2 ? 'hidden' : 'inline'} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Activity
                                                </p>
                                            </div>
                                        </div>

                                        <div
                                            className={`${isCollapse2 ? 'justify-between' : 'justify-center'} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                            <div className='flex items-center gap-[8px]'>
                                                <IoSettingsOutline className='text-[1.3rem] text-gray-500'/>
                                                <p className={`${isCollapse2 ? 'inline' : 'hidden'} text-[1rem] font-[400] text-gray-500`}>Setting</p>
                                            </div>

                                            {/* tooltip */}
                                            <div
                                                className={`${isCollapse2 ? 'hidden' : 'inline'} absolute top-0 right-[-84px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                                    Setting
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* light & dark mode section */}
                                <div className={`${isCollapse2 ? 'justify-between px-[20px]' : 'justify-center px-[10px]'} bg-gray-50 py-3 flex items-center mt-10`}>
                                    <div className={`${isCollapse2 ? 'inline' : 'hidden'} flex items-center bg-gray-200 640px:p-[10px] rounded-md w-full justify-between relative`}>
                                        <div className={`${isDark ? 'w-[50%] translate-x-[94%]': 'w-[50%] translate-x-0'} transition-all duration-300 absolute top-[50%] transform translate-y-[-50%] left-[4px] bg-white rounded-md h-[85%] w-[100px] z-10`}></div>
                                        <button className={`px-[22px] py-[14px] 640px:py-[3px] rounded-md flex items-center gap-[10px] text-[1rem] text-gray-500 z-20`} onClick={()=> setIsDark(false)}>
                                            <IoSunnyOutline className='text-[1.2rem]'/>
                                            Light
                                        </button>
                                        <button className={`px-[25px] py-[14px] 640px:py-[3px] rounded-md flex items-center gap-[10px] text-[1rem] text-gray-500 z-20`} onClick={()=> setIsDark(true)}>
                                            <IoMoonOutline className='text-[1.2rem]'/>
                                            Dark
                                        </button>
                                    </div>

                                    {/* light & dark mode switch */}
                                    <div className={`${isCollapse2 ? 'hidden' : 'inline'} bg-gray-200 w-full rounded-full flex items-center p-[3px] cursor-pointer`} onClick={()=> setIsDark(!isDark)}>
                                           <div className={`${isDark ? 'translate-x-[21px]' : 'translate-x-0'} transition-all duration-300`}>
                                               {
                                                   isDark ? (
                                                       <IoMoonOutline className='text-[1.6rem] cursor-pointer bg-white rounded-full p-[5px]'/>
                                                   ): (
                                                       <IoSunnyOutline className='text-[1.6rem] cursor-pointer bg-white rounded-full p-[5px]'/>
                                                   )
                                               }
                                           </div>
                                    </div>
                                </div>
                            </aside>

                        </div>
                    )}

                    {sidebar3Code && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {IoIosArrowDown, IoIosCode, IoIosSearch} from "react-icons/io";
import {
    IoMoonOutline,
    IoNewspaperOutline,
    IoNotificationsOutline,
    IoSettingsOutline, IoSunnyOutline
} from "react-icons/io5";
import {GoPerson} from "react-icons/go";
import {BsThreeDotsVertical} from "react-icons/bs";
import {RxDashboard} from "react-icons/rx";
import {TbBrandGoogleAnalytics} from "react-icons/tb";

const ResponsiveSidebar = () => {

    const [isCollapse, setIsCollapse] = useState(true)
    const [isDropdownOpen, setIsDropdownOpen] = useState(true)
    const [isDark, setIsDark] = useState(false)

    return (
        <aside className={`bg-white boxShadow rounded-md transition-all duration-300 ease relative`}>
            <div className={`mt-5 ${isCollapse ? "px-[20px]" : "px-[10px]"} transition-all duration-300 ease-in-out `}>
                {
                    isCollapse ? (
                        <div className="flex items-center justify-between">
                            <img src="https://i.ibb.co/ZHYQ04D/footer-logo.png" alt="logo"
                                 className="w-[130px] cursor-pointer"/>
                            <div className="relative group">
                                <BsThreeDotsVertical
                                    className="text-[1.9rem] text-gray-500 cursor-pointer p-[5px] rounded-md hover:bg-gray-50"/>
                            </div>
                        </div>
                    ) : (
                        <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo"
                             className="w-[50px] mx-auto cursor-pointer"/>
                    )
                }

                {/* search bar */}
                {
                    isCollapse ? (
                        <div className="relative mt-5">
                            <input
                                className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
                                placeholder="Search..."/>
                            <IoIosSearch
                                className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]"/>
                        </div>
                    ) : (
                        <div className="w-full relative group">
                            <IoIosSearch
                                className="text-[2rem] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full"/>

                            {/* tooltip */}
                            <div
                                className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                                <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                    Search
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>

            {/* collapse button */}
            <div
                className="bg-white notificationShadow p-[5px] rounded-md w-max absolute top-[50px] right-[-20px] cursor-pointer"
                onClick={() => setIsCollapse(!isCollapse)}>
                <IoIosCode className="text-[1.5rem] text-gray-500"/>
            </div>

            {/* general section */}
            <div className={`mt-6 ${isCollapse ? "px-[20px]" : "px-[10px]"} transition-all duration-300 ease-in-out`}>

                <p className={`${isCollapse ? "text-start" : "text-center"} text-[0.9rem] text-gray-500`}>Main</p>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <RxDashboard className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Dashboard</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-108px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Dashboard
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <GoPerson className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Audience</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-99px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Audience
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoNewspaperOutline className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Posts</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-76px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Posts
                            </p>
                        </div>
                    </div>
                    <div
                        className={`${isCollapse && "justify-center"} ${isDropdownOpen && "bg-gray-50"}  flex w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <div
                            className={`${isCollapse ? " justify-between" : "justify-center"} flex items-center gap-[8px  w-full`}>
                            <div className="flex items-center gap-[8px]">
                                <TbBrandGoogleAnalytics className="text-[1.3rem] text-gray-500"/>
                                <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Income</p>
                            </div>

                            <IoIosArrowDown
                                className={`${isDropdownOpen ? "rotate-[180deg]" : "rotate-0"} ${isCollapse ? "inline" : "hidden"} transition-all duration-300 text-[1rem] text-gray-500`}/>
                        </div>

                        {
                            !isCollapse && (
                                <>
                                    {/* hover projects dropdown */}
                                    <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute top-0 left-[70px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] text-[1rem] text-gray-500">
                                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">Earnings</li>
                                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">Refunds</li>
                                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">Declines</li>
                                        <li className="hover:bg-gray-50 px-[20px] py-[5px] rounded-md">Payouts</li>
                                    </ul>
                                </>
                            )
                        }
                    </div>

                    {/* active projects dropdown */}
                    <ul className={`${isDropdownOpen ? "h-auto my-3 opacity-100 z-[1]" : "opacity-0 z-[-1] h-0"} ${isCollapse ? "inline" : "hidden"} transition-all duration-300 list-none ml-[20px] pl-[10px] border-l border-gray-300 flex flex-col gap-[3px] text-[1rem] text-gray-500`}>
                        <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">Earnings</li>
                        <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">Refunds</li>
                        <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">Declines</li>
                        <li className="hover:bg-gray-50 cursor-pointer px-[10px] py-[5px] rounded-md">Payouts</li>
                    </ul>

                </div>
            </div>

            {/* setting section */}
            <div
                className={`${isCollapse ? "px-[20px]" : "px-[10px]"} mt-4 transition-all duration-300 ease-in-out`}>

                <p className={`${isCollapse ? "text-start" : "text-center"} text-[0.9rem] text-gray-500`}>Settings</p>

                <div className="mt-3 flex flex-col gap-[5px]">
                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoNotificationsOutline className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Notification</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Activity
                            </p>
                        </div>
                    </div>

                    <div
                        className={`${isCollapse ? "justify-between" : "justify-center"} flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                        <div className="flex items-center gap-[8px]">
                            <IoSettingsOutline className="text-[1.3rem] text-gray-500"/>
                            <p className={`${isCollapse ? "inline" : "hidden"} text-[1rem] font-[400] text-gray-500`}>Setting</p>
                        </div>

                        {/* tooltip */}
                        <div
                            className={`${isCollapse ? "hidden" : "inline"} absolute top-0 right-[-84px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}>
                            <p className="text-[0.9rem] w-max bg-gray-600 text-secondary rounded px-3 py-[5px]">
                                Setting
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* light & dark mode section */}
            <div
                className={`${isCollapse ? "justify-between px-[20px]" : "justify-center px-[10px]"} bg-gray-50 py-3 flex items-center mt-10`}>
                <div
                    className={`${isCollapse ? "inline" : "hidden"} flex items-center bg-gray-200 sm:p-[10px] rounded-md w-full justify-between relative`}>
                    <div
                        className={`${isDark ? "w-[50%] translate-x-[94%]" : "w-[50%] translate-x-0"} transition-all duration-300 absolute top-[50%] transform translate-y-[-50%] left-[4px] bg-white rounded-md h-[85%] w-[100px] z-10`}></div>
                    <button
                        className={`px-[22px] py-[14px] sm:py-[3px] rounded-md flex items-center gap-[10px] text-[1rem] text-gray-500 z-20`}
                        onClick={() => setIsDark(false)}>
                        <IoSunnyOutline className="text-[1.2rem]"/>
                        Light
                    </button>
                    <button
                        className={`px-[25px] py-[14px] sm:py-[3px] rounded-md flex items-center gap-[10px] text-[1rem] text-gray-500 z-20`}
                        onClick={() => setIsDark(true)}>
                        <IoMoonOutline className="text-[1.2rem]"/>
                        Dark
                    </button>
                </div>

                {/* light & dark mode switch */}
                <div
                    className={`${isCollapse ? "hidden" : "inline"} bg-gray-200 w-full rounded-full flex items-center p-[3px] cursor-pointer`}
                    onClick={() => setIsDark(!isDark)}>
                    <div className={`${isDark ? "translate-x-[21px]" : "translate-x-0"} transition-all duration-300`}>
                        {
                            isDark ? (
                                <IoMoonOutline className="text-[1.6rem] cursor-pointer bg-white rounded-full p-[5px]"/>
                            ) : (
                                <IoSunnyOutline className="text-[1.6rem] cursor-pointer bg-white rounded-full p-[5px]"/>
                            )
                        }
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default ResponsiveSidebar;
                    '/>
                    }
                </div>

                <BlocksFooter backUrl='/blocks/responsive-search-bar' backName='responsive search bar' isForwardButton={false}/>
            </div>


            <Helmet>
                <title>Blocks - Responsive Sidebar</title>
            </Helmet>
        </aside>
    );
};

export default ResponsiveSidebar;
