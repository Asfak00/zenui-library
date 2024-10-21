import React, { useState } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import {FaDiscord, FaTasks} from "react-icons/fa";
import {IoIosArrowDown, IoIosArrowUp, IoIosSearch} from "react-icons/io";
import {TbBrandGithubFilled, TbLogout2, TbUsersGroup} from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import {MdKeyboardArrowDown, MdLaptopMac, MdOutlineArrowRightAlt, MdOutlineKeyboardArrowRight} from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import {BsArrowRight, BsBuildings, BsCalendar2Date} from "react-icons/bs";
import {AiOutlineFire} from "react-icons/ai";
import {BiSupport} from "react-icons/bi";
import {FiUser} from "react-icons/fi";
import {IoSettingsOutline} from "react-icons/io5";
import {SlInfo} from "react-icons/sl";


const ResponsiveNavbar = () => {

    // basic navbar
    const [basicNavbarPreview, setBasicNavbarPreview] = useState(true);
    const [basicNavbarCode, setBasicNavbarCode] = useState(false);

    const handleBasicNavbarPreview = () => {
        setBasicNavbarPreview(true)
        setBasicNavbarCode(false);
    }

    const handleBasicNavbarCode = () => {
        setBasicNavbarCode(true);
        setBasicNavbarPreview(false);
    }

    // mega menu with account navbar
    const [megamenuWithAccountPreview, setMegamenuWithAccountPreview] = useState(true);
    const [megamenuWithAccountCode, setMegamenuWithAccountCode] = useState(false);

    const handleMegamenuWithAccountPreview = () => {
        setMegamenuWithAccountPreview(true)
        setMegamenuWithAccountCode(false);
    }

    const handleMegamenuWithAccountCode = () => {
        setMegamenuWithAccountCode(true);
        setMegamenuWithAccountPreview(false);
    }

    // mega menu navbar
    const [megaMenuNavbarPreview, setMegaMenuNavbarPreview] = useState(true);
    const [megaMenuNavbarCode, setMegaMenuNavbarCode] = useState(false);

    const handleMegaMenuNavbarPreview = () => {
        setMegaMenuNavbarPreview(true)
        setMegaMenuNavbarCode(false);
    }

    const handleMegaMenuNavbarCode = () => {
        setMegaMenuNavbarCode(true);
        setMegaMenuNavbarPreview(false);
    }

    // stander navbar
    const [standerNavbarPreview, setStanderNavbarPreview] = useState(true);
    const [standerNavbarCode, setStanderNavbarCode] = useState(false);

    const handleStanderNavbarPreview = () => {
        setStanderNavbarPreview(true)
        setStanderNavbarCode(false);
    }

    const handleStanderNavbarCode = () => {
        setStanderNavbarCode(true);
        setStanderNavbarPreview(false);
    }

    // basic navbar actions
    const [basicNavbarOpen, setBasicNavbarOpen] = useState(false)


    // megemenu dropdown actions
    const [aboutHover, setAboutHover] = useState(false)
    const [serviceHover, setServiceHover] = useState(false)
    const [megamenuNavbarOpen, setMegamenuNavbarOpen] = useState(false)

    // mega menu with account dropdown
    const [accountMenuOpen, setAccountMenuOpen] = useState(false)
    const [isProductHover, setIsProductHover] = useState(false)
    const [megaMenuOpen, setMegaMenuOpen] = useState(false)
    const [isMegaMenuCollapse, setIsMegaMenuCollapse] = useState(false)
    const [megaMenuSubItemsOpen, setMegaMenuSubItemsOpen] = useState('')
    const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false)
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false)

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <div
                    className="p-4 flex gap-2 w-full bg-[#d18f0011] border border-[#d18e00]  rounded mb-8">
                    <p>
                        <SlInfo className="text-[#d17d00] text-[1.2rem]"/>
                    </p>
                    <p className="text-[#d18e00] text-[0.9rem]">
                        In this implementation, the navbar and sidebar are positioned using position: absolute for demonstration purposes in the mobile view. However, when using this in your project, it's recommended to use position: fixed to ensure better performance and consistent behavior, especially when scrolling the page. Using position: fixed will keep the navbar and sidebar visible even as the user scrolls through the content.
                    </p>
                </div>

                <ContentHeader text={"basic navbar"} id={"basic_navbar"}/>

                <p className="w-full text-[#424242] text-[1rem]">
                    A simple navigation bar with links to different sections or pages, typically placed at the top of a
                    website for easy navigation.
                </p>

                <div className="w-full border border-[#e5eaf2] rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${basicNavbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                basicNavbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-[#424242] border-[#e5eaf2]`}
                            onClick={handleBasicNavbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                basicNavbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-[#424242] border-b rounded-br border-[#e5eaf2]`}
                            onClick={handleBasicNavbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {basicNavbarPreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <nav className='flex items-center justify-between w-full relative'>
                                <img src='https://i.ibb.co/0BZfPq6/darklogo.png' alt='logo' className='w-[60px] '/>
                                <ul className='items-center gap-[20px] text-[1rem] text-[#424242] 1024px:flex hidden'>
                                    <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-primary capitalize'>home</li>
                                    <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-primary capitalize'>about
                                        us
                                    </li>
                                    <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-primary capitalize'>services</li>
                                </ul>

                                <div className='flex items-center gap-[10px]'>
                                    <div className='relative 1024px:flex hidden'>
                                        <input
                                            className='py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-primary'
                                            placeholder='Search...'/>
                                        <IoIosSearch className='absolute top-[9px] left-3 text-[#424242] text-[1.3rem]'/>
                                    </div>

                                    <FaDiscord
                                        className='text-[1.6rem] text-[#424242]c cursor-pointer hover:text-primary transition-all duration-500 '/>
                                    <TbBrandGithubFilled
                                        className='text-[1.6rem] text-[#424242]c cursor-pointer hover:text-primary transition-all duration-500'/>

                                    <CiMenuFries className='text-[1.6rem] text-[#424242]c cursor-pointer 1024px:hidden flex'
                                                 onClick={() => setBasicNavbarOpen(!basicNavbarOpen)}/>
                                </div>

                                <aside
                                    className={` ${basicNavbarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} 1024px:hidden bg-primary p-4 text-center absolute top-[60px] right-0 w-full 640px:w-[300px] rounded-md transition-all duration-300`}>
                                    <div className='w-full relative mb-5'>
                                        <input
                                            className='py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-primary'
                                            placeholder='Search...'/>
                                        <IoIosSearch className='absolute top-[9px] left-5 text-[#424242] text-[1.3rem]'/>
                                    </div>
                                    <ul className='items-center gap-[20px] text-[1rem] text-white flex flex-col'>
                                        <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize'>home</li>
                                        <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize'>about
                                            us
                                        </li>
                                        <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize'>services</li>
                                    </ul>
                                </aside>
                            </nav>
                        </div>
                    )}

                    {basicNavbarCode && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {FaDiscord} from "react-icons/fa";
import {IoIosSearch} from "react-icons/io";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";

const ResponsiveNavbar = () => {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between w-full relative">
            <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[60px] "/>
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">home</li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">about
                    us
                </li>
                <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">services</li>
            </ul>

            <div className="flex items-center gap-[10px]">
                <div className="relative lg:flex hidden">
                    <input
                        className="py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[9px] left-3 text-[#424242] text-[1.3rem]"/>
                </div>

                <FaDiscord
                    className="text-[1.6rem] text-[#424242]c cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 "/>
                <TbBrandGithubFilled
                    className="text-[1.6rem] text-[#424242]c cursor-pointer hover:text-[#3B9DF8] transition-all duration-500"/>

                <CiMenuFries className="text-[1.6rem] text-[#424242]c cursor-pointer lg:hidden flex"
                             onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-[#3B9DF8] p-4 text-center absolute top-[60px] right-0 w-full sm:w-[300px] rounded-md transition-all duration-300`}>
                <div className="w-full relative mb-5">
                    <input
                        className="py-1.5 pr-4 pl-12 w-full rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[9px] left-5 text-[#424242] text-[1.3rem]"/>
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-white flex flex-col">
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">about
                        us
                    </li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">services</li>
                </ul>
            </aside>
        </nav>
    );
};

export default ResponsiveNavbar;
          '
                    />}
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"mega menu navbar with account dropdown"}
                                   id={"mega_menu_navbar_with_account_dropdown"}/>
                </div>

                <p className="w-full text-[#424242] text-[1rem]">
                    A mega menu navbar featuring large dropdown menus with multiple sections, alongside an account
                    dropdown for user profile management and settings.
                </p>

                <div className="w-full border border-[#e5eaf2] rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${megaMenuNavbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                megaMenuNavbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-[#424242] border-[#e5eaf2]`}
                            onClick={handleMegaMenuNavbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                megaMenuNavbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-[#424242] border-b rounded-br border-[#e5eaf2]`}
                            onClick={handleMegaMenuNavbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {megaMenuNavbarPreview && (
                        <div
                            className={`${isProductHover && 'pb-[45rem]'} ${megaMenuOpen && 'pb-[25rem]'} ${accountMenuOpen && 'pb-[14rem]'} transition-all duration-300 p-8 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <nav
                                className='flex items-center justify-between w-full relative'>
                                <img src='https://i.ibb.co/0BZfPq6/darklogo.png' alt='logo' className='w-[55px] '/>
                                <ul className='items-center gap-[20px] text-[1rem] text-[#424242] 1024px:flex hidden'>
                                    <li className={`${isProductHover ? 'text-primary' : 'text-gray-600'} flex items-center gap-[5px] cursor-pointer`}
                                        onMouseEnter={() => setIsProductHover(true)}
                                        onMouseLeave={() => setIsProductHover(false)}>
                                        <MdLaptopMac className='text-[1.1rem]'/>
                                        Products
                                        <IoIosArrowUp
                                            className={`${isProductHover ? 'rotate-0' : 'rotate-[-180deg]'} transition-all duration-300`}/>

                                        {/* mega menu */}
                                        <div
                                            className={`${isProductHover ? 'translate-y-0 opacity-100 z-30' : 'translate-y-[20px] opacity-0 z-[-1]'} bg-white rounded-md w-full absolute top-[40px] left-0 p-[30px] transition-all duration-300 boxShadow flex flex-wrap gap-[30px]`}>

                                            <div className='grid grid-cols-2 gap-[30px]'>
                                                <div className='flex flex-col gap-[20px]'>

                                                    <h3 className='text-[1.2rem] text-gray-500 font-[500]'>More
                                                        Products</h3>

                                                    <div className='flex float-start gap-[10px] group'>
                                                        <img src='https://i.ibb.co/LQBDJGD/icon-logo-container.png'
                                                             alt='image' className='w-[30px] h-[30px]'/>

                                                        <div>
                                                            <h1 className='text-[1rem] text-gray-600 font-[500]'>Demo
                                                                App</h1>
                                                            <p className='text-[0.9rem] text-gray-400 font-[300]'>Lorem
                                                                ipsum dolor sit amet, consect adipiscing elit</p>

                                                            <button
                                                                className='text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]'>
                                                                Call to action
                                                                <MdOutlineArrowRightAlt
                                                                    className='text-[1.4rem] group-hover:ml-[5px] transition-all duration-300'/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='flex float-start gap-[10px] group'>
                                                        <img src='https://i.ibb.co/Y8cRWRj/icon-logo-container-1.png'
                                                             alt='image' className='w-[30px] h-[30px]'/>

                                                        <div>
                                                            <h1 className='text-[1rem] text-gray-600 font-[500]'>CRM</h1>
                                                            <p className='text-[0.9rem] text-gray-400 font-[300]'>Lorem
                                                                ipsum dolor sit amet, consect adipiscing elit</p>

                                                            <button
                                                                className='text-[#FE9239] mt-2 flex items-center gap-[4px] text-[0.9rem]'>
                                                                Call to action
                                                                <MdOutlineArrowRightAlt
                                                                    className='text-[1.4rem] group-hover:ml-[5px] transition-all duration-300'/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='flex float-start gap-[10px] group'>
                                                        <img src='https://i.ibb.co/6bGWgp6/icon-logo-container-2.png'
                                                             alt='image' className='w-[30px] h-[30px]'/>

                                                        <div>
                                                            <h1 className='text-[1rem] text-gray-600 font-[500]'>CMS</h1>
                                                            <p className='text-[0.9rem] text-gray-400 font-[300]'>Lorem
                                                                ipsum dolor sit amet, consect adipiscing elit</p>

                                                            <button
                                                                className='text-[#8B5CF6] mt-2 flex items-center gap-[4px] text-[0.9rem]'>
                                                                Call to action
                                                                <MdOutlineArrowRightAlt
                                                                    className='text-[1.4rem] group-hover:ml-[5px] transition-all duration-300'/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col gap-[20px]'>

                                                    <h3 className='text-[1.2rem] text-gray-500 font-[500]'>Ecosystem</h3>

                                                    <div className='flex float-start gap-[10px]'>
                                                        <BsBuildings className='text-[1.4rem] text-gray-600'/>

                                                        <div>
                                                            <h1 className='text-[1rem] text-gray-600 font-[500]'>Directory</h1>
                                                            <p className='text-[0.9rem] text-gray-400 font-[300]'>Lorem
                                                                ipsum dolor sit amet, consect adipiscing elit</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex float-start gap-[10px]'>
                                                        <BsCalendar2Date className='text-[1.4rem] text-gray-600'/>

                                                        <div>
                                                            <h1 className='text-[1rem] text-gray-600 font-[500] '>Bookings</h1>
                                                            <p className='text-[0.9rem] text-gray-400 font-[300]'>Lorem
                                                                ipsum dolor sit amet, consect adipiscing elit</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex float-start gap-[10px]'>
                                                        <TbUsersGroup className='text-[1.4rem] text-gray-600'/>

                                                        <div>
                                                            <h1 className='text-[1rem] text-gray-600 font-[500]'>User
                                                                feedback</h1>
                                                            <p className='text-[0.9rem] text-gray-400 font-[300]'>Lorem
                                                                ipsum dolor sit amet, consect adipiscing elit</p>
                                                        </div>
                                                    </div>
                                                    <div className='flex float-start gap-[10px]'>
                                                        <FaTasks className='text-[1.4rem] text-gray-600'/>

                                                        <div>
                                                            <h1 className='text-[1rem] text-gray-600 font-[500]'>Task
                                                                Manager</h1>
                                                            <p className='text-[0.9rem] text-gray-400 font-[300]'>Lorem
                                                                ipsum dolor sit amet, consect adipiscing elit</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className='flex flex-col gap-[20px] bg-gray-50 rounded-md p-[20px] w-full'>
                                                <div className='flex float-start gap-[10px] group'>
                                                    <img src='https://i.ibb.co/VTqw5rY/img-container.png'
                                                         alt='image' className='w-[100px]'/>

                                                    <div>
                                                        <div className='mb-2 flex items-center gap-[5px]'>
                                                            <h1 className='text-[1rem] text-gray-600 font-[500]'>Check
                                                                the new app</h1>
                                                            <p className='py-[3px] px-[8px] text-[0.6rem] text-gray-500 border border-gray-300 rounded-full text-center'>
                                                                Featured
                                                            </p>
                                                        </div>
                                                        <p className='text-[0.9rem] text-gray-400 font-[300]'>Lorem
                                                            ipsum dolor sit amet, consect adipiscing elit</p>

                                                        <button
                                                            className='text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]'>
                                                            Call to action
                                                            <MdOutlineArrowRightAlt
                                                                className='text-[1.4rem] group-hover:ml-[5px] transition-all duration-300'/>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className='flex float-start gap-[10px] group'>
                                                    <img src='https://i.ibb.co/V2b5xnK/img-container-1.png'
                                                         alt='image' className='w-[100px]'/>

                                                    <div>
                                                        <h1 className='text-[1rem] text-gray-600 font-[500]'>Check our
                                                            newsletter</h1>
                                                        <p className='text-[0.9rem] text-gray-400 font-[300]'>Lorem
                                                            ipsum dolor sit amet, consect adipiscing elit</p>

                                                        <button
                                                            className='text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]'>
                                                            Call to action
                                                            <MdOutlineArrowRightAlt
                                                                className='text-[1.4rem] group-hover:ml-[5px] transition-all duration-300'/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className='flex items-center gap-[5px] cursor-pointer'>
                                        <AiOutlineFire className='text-[1.1rem] text-gray-600'/>
                                        Features
                                    </li>
                                    <li className='flex items-center gap-[5px] cursor-pointer'>
                                        <BiSupport className='text-[1.1rem] text-gray-600'/>
                                        Support
                                    </li>

                                </ul>

                                <div className='flex items-center gap-[15px]'>
                                    <div className='flex items-center gap-[10px] cursor-pointer relative'
                                         onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                                        <div className='relative'>
                                            <img
                                                src='https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740'
                                                alt='avatar' className='w-[35px] h-[35px] rounded-full object-cover'/>
                                            <div
                                                className='w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white'></div>
                                        </div>

                                        <h1 className='text-[1rem] font-[400] text-gray-600 640px:block hidden'>Dhon
                                            Deo</h1>

                                        <div
                                            className={`${accountMenuOpen ? 'translate-y-0 opacity-100 z-[1]' : 'translate-y-[10px] opacity-0 z-[-1]'} bg-white w-max rounded-md boxShadow absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                                            <p className='flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50'>
                                                <FiUser/>
                                                View Profile
                                            </p>
                                            <p className='flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50'>
                                                <IoSettingsOutline/>
                                                Settings
                                            </p>
                                            <p className='flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50'>
                                                <FiUser/>
                                                View Profile
                                            </p>

                                            <div className='mt-3 border-t border-gray-200 pt-[5px]'>
                                                <p className='flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50'>
                                                    <TbLogout2/>
                                                    Logout
                                                </p>
                                            </div>

                                        </div>

                                        <IoIosArrowUp
                                            className={`${accountMenuOpen ? 'rotate-0' : 'rotate-[180deg]'} transition-all duration-300 text-gray-600 640px:block hidden`}/>

                                    </div>

                                    <CiMenuFries onClick={()=> setMegaMenuOpen(!megaMenuOpen)}
                                        className='text-[1.8rem] text-[#424242]c cursor-pointer 1024px:hidden flex'/>
                                </div>

                                <aside
                                    className={` ${megaMenuOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} 1024px:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 640px:w-[300px] w-full rounded-md transition-all duration-300`}>
                                    <ul className='items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col'>
                                        <li onClick={() => setIsMegaMenuCollapse(!isMegaMenuCollapse)}
                                            className='hover:text-primary group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]'>
                                            Products
                                            <IoIosArrowDown
                                                className={`${isMegaMenuCollapse ? 'rotate-0' : 'rotate-[180deg]'} text-gray-600 group-hover:text-primary transition-all duration-300`}/>
                                        </li>

                                        {/* product mega menu */}
                                            <div onClick={()=> setMegaMenuSubItemsOpen('more_product')} className={`${isMegaMenuCollapse ? 'hidden' : 'block'} group font-[500] ml-6`}>
                                                <h4 className='text-left flex items-center gap-[5px]'>
                                                    More Products
                                                    <MdOutlineKeyboardArrowRight className='text-[1.2rem]'/>
                                                </h4>

                                                <ul className={`${megaMenuSubItemsOpen === 'more_product' ? 'flex' : 'hidden'} pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}>
                                                    <li className='hover:text-primary transition-all duration-500 cursor-poin ter capitalize'>Demo App</li>
                                                    <li className='hover:text-primary transition-all duration-500 cursor-poin ter capitalize'>CRM</li>
                                                    <li className='hover:text-primary transition-all duration-500 cursor-poin ter capitalize'>CMS</li>
                                                </ul>
                                            </div>

                                            <div onClick={()=> setMegaMenuSubItemsOpen('ecosystem')} className={`${isMegaMenuCollapse ? 'hidden' : 'block'} font-[500] ml-6`}>
                                                <h4 className='text-left flex items-center gap-[5px]'>
                                                    Ecosystem
                                                    <MdOutlineKeyboardArrowRight className='text-[1.2rem]'/>
                                                </h4>

                                                <ul className={`${megaMenuSubItemsOpen === 'ecosystem' ? 'flex' : 'hidden'} pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}>
                                                    <li className='hover:text-primary transition-all duration-500 cursor-poin ter capitalize'>Directory</li>
                                                    <li className='hover:text-primary transition-all duration-500 cursor-poin ter capitalize'>Bookings</li>
                                                    <li className='hover:text-primary transition-all duration-500 cursor-poin ter capitalize'>User feedback</li>
                                                    <li className='hover:text-primary transition-all duration-500 cursor-poin ter capitalize'>Task Manager</li>
                                                </ul>
                                            </div>

                                        <li className='hover:text-primary transition-all duration-500 cursor-poin ter capitalize'>Features
                                        </li>
                                        <li className='hover:text-primary transition-all duration-500 cursor-pointer capitalize'>Support</li>
                                    </ul>
                                </aside>
                            </nav>
                        </div>
                    )}

                    {megaMenuNavbarCode && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {FaTasks} from "react-icons/fa";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {TbLogout2, TbUsersGroup} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import {MdLaptopMac, MdOutlineArrowRightAlt, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {BsBuildings, BsCalendar2Date} from "react-icons/bs";
import {AiOutlineFire} from "react-icons/ai";
import {BiSupport} from "react-icons/bi";
import {FiUser} from "react-icons/fi";
import {IoSettingsOutline} from "react-icons/io5";

const ResponsiveNavbar = () => {

    const [accountMenuOpen, setAccountMenuOpen] = useState(false)
    const [isProductHover, setIsProductHover] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [productMobileMegaMenu, setProductMobileMegaMenu] = useState(false)
    const [megaMenuSubItem, setMegaMenuSubItem] = useState("")

    return (
        <nav
            className="flex items-center justify-between w-full relative">
            <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[55px] "/>
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                <li className={`${isProductHover ? "text-[#3B9DF8]" : "text-gray-600"} flex items-center gap-[5px] cursor-pointer`}
                    onMouseEnter={() => setIsProductHover(true)}
                    onMouseLeave={() => setIsProductHover(false)}>
                    <MdLaptopMac className="text-[1.1rem]"/>
                    Products
                    <IoIosArrowUp
                        className={`${isProductHover ? "rotate-0" : "rotate-[-180deg]"} transition-all duration-300`}/>

                    {/* mega menu */}
                    <div
                        className={`${isProductHover ? "translate-y-0 opacity-100 z-30" : "translate-y-[20px] opacity-0 z-[-1]"} bg-white rounded-md w-full absolute top-[40px] left-0 p-[30px] transition-all duration-300 boxShadow flex flex-wrap gap-[30px]`}>

                        <div className="grid grid-cols-2 gap-[30px]">
                            <div className="flex flex-col gap-[20px]">

                                <h3 className="text-[1.2rem] text-gray-500 font-[500]">More
                                    Products</h3>

                                <div className="flex float-start gap-[10px] group">
                                    <img src="https://i.ibb.co/LQBDJGD/icon-logo-container.png"
                                         alt="image" className="w-[30px] h-[30px]"/>

                                    <div>
                                        <h1 className="text-[1rem] text-gray-600 font-[500]">Demo
                                            App</h1>
                                        <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
                                            ipsum dolor sit amet, consect adipiscing elit</p>

                                        <button
                                            className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                                            Call to action
                                            <MdOutlineArrowRightAlt
                                                className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex float-start gap-[10px] group">
                                    <img src="https://i.ibb.co/Y8cRWRj/icon-logo-container-1.png"
                                         alt="image" className="w-[30px] h-[30px]"/>

                                    <div>
                                        <h1 className="text-[1rem] text-gray-600 font-[500]">CRM</h1>
                                        <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
                                            ipsum dolor sit amet, consect adipiscing elit</p>

                                        <button
                                            className="text-[#FE9239] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                                            Call to action
                                            <MdOutlineArrowRightAlt
                                                className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex float-start gap-[10px] group">
                                    <img src="https://i.ibb.co/6bGWgp6/icon-logo-container-2.png"
                                         alt="image" className="w-[30px] h-[30px]"/>

                                    <div>
                                        <h1 className="text-[1rem] text-gray-600 font-[500]">CMS</h1>
                                        <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
                                            ipsum dolor sit amet, consect adipiscing elit</p>

                                        <button
                                            className="text-[#8B5CF6] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                                            Call to action
                                            <MdOutlineArrowRightAlt
                                                className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[20px]">

                                <h3 className="text-[1.2rem] text-gray-500 font-[500]">Ecosystem</h3>

                                <div className="flex float-start gap-[10px]">
                                    <BsBuildings className="text-[1.4rem] text-gray-600"/>

                                    <div>
                                        <h1 className="text-[1rem] text-gray-600 font-[500]">Directory</h1>
                                        <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
                                            ipsum dolor sit amet, consect adipiscing elit</p>
                                    </div>
                                </div>
                                <div className="flex float-start gap-[10px]">
                                    <BsCalendar2Date className="text-[1.4rem] text-gray-600"/>

                                    <div>
                                        <h1 className="text-[1rem] text-gray-600 font-[500] ">Bookings</h1>
                                        <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
                                            ipsum dolor sit amet, consect adipiscing elit</p>
                                    </div>
                                </div>
                                <div className="flex float-start gap-[10px]">
                                    <TbUsersGroup className="text-[1.4rem] text-gray-600"/>

                                    <div>
                                        <h1 className="text-[1rem] text-gray-600 font-[500]">User
                                            feedback</h1>
                                        <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
                                            ipsum dolor sit amet, consect adipiscing elit</p>
                                    </div>
                                </div>
                                <div className="flex float-start gap-[10px]">
                                    <FaTasks className="text-[1.4rem] text-gray-600"/>

                                    <div>
                                        <h1 className="text-[1rem] text-gray-600 font-[500]">Task
                                            Manager</h1>
                                        <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
                                            ipsum dolor sit amet, consect adipiscing elit</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="flex flex-col gap-[20px] bg-gray-50 rounded-md p-[20px] w-full">
                            <div className="flex float-start gap-[10px] group">
                                <img src="https://i.ibb.co/VTqw5rY/img-container.png"
                                     alt="image" className="w-[100px]"/>

                                <div>
                                    <div className="mb-2 flex items-center gap-[5px]">
                                        <h1 className="text-[1rem] text-gray-600 font-[500]">Check
                                            the new app</h1>
                                        <p className="py-[3px] px-[8px] text-[0.6rem] text-gray-500 border border-gray-300 rounded-full text-center">
                                            Featured
                                        </p>
                                    </div>
                                    <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
                                        ipsum dolor sit amet, consect adipiscing elit</p>

                                    <button
                                        className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                                        Call to action
                                        <MdOutlineArrowRightAlt
                                            className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
                                    </button>
                                </div>
                            </div>
                            <div className="flex float-start gap-[10px] group">
                                <img src="https://i.ibb.co/V2b5xnK/img-container-1.png"
                                     alt="image" className="w-[100px]"/>

                                <div>
                                    <h1 className="text-[1rem] text-gray-600 font-[500]">Check our
                                        newsletter</h1>
                                    <p className="text-[0.9rem] text-gray-400 font-[300]">Lorem
                                        ipsum dolor sit amet, consect adipiscing elit</p>

                                    <button
                                        className="text-[#FF5E5E] mt-2 flex items-center gap-[4px] text-[0.9rem]">
                                        Call to action
                                        <MdOutlineArrowRightAlt
                                            className="text-[1.4rem] group-hover:ml-[5px] transition-all duration-300"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="flex items-center gap-[5px] cursor-pointer">
                    <AiOutlineFire className="text-[1.1rem] text-gray-600"/>
                    Features
                </li>
                <li className="flex items-center gap-[5px] cursor-pointer">
                    <BiSupport className="text-[1.1rem] text-gray-600"/>
                    Support
                </li>

            </ul>

            <div className="flex items-center gap-[15px]">
                <div className="flex items-center gap-[10px] cursor-pointer relative"
                     onClick={() => setAccountMenuOpen(!accountMenuOpen)}>
                    <div className="relative">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724605498~exp=1724609098~hmac=7f6fc106bae2c17b0c93af1b2e5483d9d8368f3e51284aaec7c7d50590d2bae5&w=740"
                            alt="avatar" className="w-[35px] h-[35px] rounded-full object-cover"/>
                        <div
                            className="w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-[0px] right-0 border-2 border-white"></div>
                    </div>

                    <h1 className="text-[1rem] font-[400] text-gray-600 sm:block hidden">Dhon
                        Deo</h1>

                    <div
                        className={`${accountMenuOpen ? "translate-y-0 opacity-100 z-[1]" : "translate-y-[10px] opacity-0 z-[-1]"} bg-white w-max rounded-md boxShadow absolute top-[45px] right-0 p-[10px] flex flex-col transition-all duration-300 gap-[5px]`}>
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                            <FiUser/>
                            View Profile
                        </p>
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                            <IoSettingsOutline/>
                            Settings
                        </p>
                        <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-gray-600 hover:bg-gray-50">
                            <FiUser/>
                            View Profile
                        </p>

                        <div className="mt-3 border-t border-gray-200 pt-[5px]">
                            <p className="flex items-center gap-[5px] rounded-md p-[8px] pr-[45px] py-[3px] text-[1rem] text-red-500 hover:bg-red-50">
                                <TbLogout2/>
                                Logout
                            </p>
                        </div>

                    </div>

                    <IoIosArrowUp
                        className={`${accountMenuOpen ? "rotate-0" : "rotate-[180deg]"} transition-all duration-300 text-gray-600 sm:block hidden`}/>

                </div>

                <CiMenuFries onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                             className="text-[1.8rem] text-[#424242]c cursor-pointer lg:hidden flex"/>
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
                <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                    <li onClick={() => setProductMobileMegaMenu(!productMobileMegaMenu)}
                        className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        Products
                        <IoIosArrowDown
                            className={`${productMobileMegaMenu ? "rotate-0" : "rotate-[180deg]"} text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}/>
                    </li>

                    {/* product mega menu */}
                    <div onClick={() => setMegaMenuSubItem("more_product")}
                         className={`${productMobileMegaMenu ? "hidden" : "block"} group font-[500] ml-6`}>
                        <h4 className="text-left flex items-center gap-[5px]">
                            More Products
                            <MdOutlineKeyboardArrowRight className="text-[1.2rem]"/>
                        </h4>

                        <ul className={`${megaMenuSubItem === "more_product" ? "flex" : "hidden"} pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}>
                            <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Demo
                                App
                            </li>
                            <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">CRM</li>
                            <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">CMS</li>
                        </ul>
                    </div>

                    <div onClick={() => setMegaMenuSubItem("ecosystem")}
                         className={`${productMobileMegaMenu ? "hidden" : "block"} font-[500] ml-6`}>
                        <h4 className="text-left flex items-center gap-[5px]">
                            Ecosystem
                            <MdOutlineKeyboardArrowRight className="text-[1.2rem]"/>
                        </h4>

                        <ul className={`${megaMenuSubItem === "ecosystem" ? "flex" : "hidden"} pl-6 mt-3 font-[400] items-start flex-col gap-[10px] text-gray-600`}>
                            <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Directory</li>
                            <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Bookings</li>
                            <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">User
                                feedback
                            </li>
                            <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Task
                                Manager
                            </li>
                        </ul>
                    </div>

                    <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-poin ter capitalize">Features
                    </li>
                    <li className="hover:text-[#3B9DF8] transition-all duration-500 cursor-pointer capitalize">Support</li>
                </ul>
            </aside>
        </nav>
    );
};

export default ResponsiveNavbar;
                    '
                    />}
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"mega menu navbar"} id={"megamenu_navbar"}/>
                </div>

                <p className="w-full text-[#424242] text-[1rem]">
                    A navigation bar with a mega menu, providing large dropdowns that display multiple links,
                    categories, or content sections in an organized layout.
                </p>

                <div className="w-full border border-[#e5eaf2] rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${megamenuWithAccountPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                megamenuWithAccountPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-[#424242] border-[#e5eaf2]`}
                            onClick={handleMegamenuWithAccountPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                megamenuWithAccountCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-[#424242] border-b rounded-br border-[#e5eaf2]`}
                            onClick={handleMegamenuWithAccountCode}
                        >
                            Code
                        </button>
                    </div>
                    {megamenuWithAccountPreview && (
                        <div
                            className={`${(serviceHover || aboutHover) && 'pb-[23rem]'} ${megamenuNavbarOpen && 'pb-[45rem]'} p-8 transition-all duration-300 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <nav className='flex items-center justify-between w-full relative h-auto'>
                                <img src='https://i.ibb.co/0BZfPq6/darklogo.png' alt='logo' className='w-[60px] '/>
                                <ul className='items-center gap-[20px] text-[1rem] text-[#424242] 1024px:flex hidden'>
                                    <li className='transition-all duration-500 cursor-pointer hover:text-primary capitalize'>home</li>
                                    <li className=' transition-all duration-500 cursor-pointer hover:text-primary capitalize flex items-center gap-[3px] group relative'
                                        onMouseOver={() => setAboutHover(true)}
                                        onMouseLeave={() => setAboutHover(false)}>
                                        about us
                                        <MdKeyboardArrowDown
                                            className='text-[1.5rem] text-[#424242] group-hover:text-primary transition-all duration-500 group-hover:rotate-[180deg]'/>

                                        <article
                                            className='p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300'>

                                            <div className='grid grid-cols-2'>
                                                <ul className='flex flex-col gap-[7px] text-[#424242]'>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-[#424242] text-[0.9rem]'/> Company
                                                        Details
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-[#424242] text-[0.9rem]'/>Company
                                                        Location
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-[#424242] text-[0.9rem]'/>Team Members
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-[#424242] text-[0.9rem]'/> Office Tour
                                                    </li>
                                                </ul>

                                                <div
                                                    className='flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]'>
                                                    <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                        <MdDashboardCustomize
                                                            className='bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]'/>
                                                        Full Customize
                                                    </div>

                                                    <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                        <CgIfDesign
                                                            className='bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]'/>
                                                        Modern Design
                                                    </div>

                                                    <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                        <FaCubesStacked
                                                            className='bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]'/>
                                                        Well Stacktured
                                                    </div>
                                                </div>
                                            </div>

                                            <img src='https://i.ibb.co/YRgsrsh/AD22-04.png' alt='image'
                                                 className='w-full object-cover mt-4 rounded-sm h-[150px]'/>
                                        </article>
                                    </li>
                                    <li className='transition-all duration-500 cursor-pointer hover:text-primary capitalize group relative flex items-center gap-[3px]'
                                        onMouseOver={() => setServiceHover(true)}
                                        onMouseLeave={() => setServiceHover(false)}>
                                        services
                                        <MdKeyboardArrowDown
                                            className='text-[1.5rem] text-[#424242] group-hover:text-primary transition-all duration-500 group-hover:rotate-[180deg]'/>


                                        <article
                                            className='p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-150px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300'>

                                            <div className='grid grid-cols-2'>
                                                <ul className='flex flex-col gap-[7px] text-[#424242]'>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-[#424242] text-[0.9rem]'/> Company
                                                        Details
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-[#424242] text-[0.9rem]'/>Company
                                                        Location
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-[#424242] text-[0.9rem]'/>Team Members
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-[#424242] text-[0.9rem]'/> Office Tour
                                                    </li>
                                                </ul>

                                                <div
                                                    className='flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]'>
                                                    <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                        <MdDashboardCustomize
                                                            className='bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]'/>
                                                        Full Customize
                                                    </div>

                                                    <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                        <CgIfDesign
                                                            className='bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]'/>
                                                        Modern Design
                                                    </div>

                                                    <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                        <FaCubesStacked
                                                            className='bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]'/>
                                                        Well Stacktured
                                                    </div>
                                                </div>
                                            </div>

                                            <img src='https://i.ibb.co/XJJ4mNY/AD21-03.png' alt='image'
                                                 className='w-full object-cover mt-4 rounded-sm h-[150px]'/>
                                        </article>
                                    </li>
                                </ul>

                                <div className='flex items-center gap-[10px]'>
                                    <div className='relative 1024px:flex hidden'>
                                        <input
                                            className='py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-primary'
                                            placeholder='Search...'/>
                                        <IoIosSearch className='absolute top-[9px] left-3 text-[#424242] text-[1.3rem]'/>
                                    </div>

                                    <FaDiscord
                                        className='text-[1.6rem] text-[#424242]c cursor-pointer hover:text-primary transition-all duration-500 '/>
                                    <TbBrandGithubFilled
                                        className='text-[1.6rem] text-[#424242]c cursor-pointer hover:text-primary transition-all duration-500'/>

                                    <CiMenuFries className='text-[1.6rem] text-[#424242]c cursor-pointer 1024px:hidden flex'
                                                 onClick={() => setMegamenuNavbarOpen(!megamenuNavbarOpen)}/>
                                </div>

                                <aside
                                    className={` ${megamenuNavbarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} 1024px:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 640px:w-[300px] w-full rounded-md transition-all duration-300`}>
                                    <ul className='items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col'>

                                        <li className='hover:text-primary group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]'>
                                            Home
                                        </li>

                                        <li onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
                                            className='hover:text-primary group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]'>
                                            About Us
                                            <IoIosArrowDown
                                                className={`${mobileAboutUsOpen ? 'rotate-[180deg]' : 'rotate-0'} text-gray-600 group-hover:text-primary transition-all duration-300`}/>
                                        </li>

                                        {/* about us mega menu */}
                                        <div className={`${mobileAboutUsOpen ? 'block' : 'hidden'} group font-[500] ml-6`}>

                                            <ul className='flex flex-col gap-[7px] text-[#424242]'>
                                                <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                    <BsArrowRight className='text-[#424242] text-[0.9rem]'/> Company
                                                    Details
                                                </li>
                                                <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                    <BsArrowRight className='text-[#424242] text-[0.9rem]'/>Company
                                                    Location
                                                </li>
                                                <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                    <BsArrowRight className='text-[#424242] text-[0.9rem]'/>Team Members
                                                </li>
                                                <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                    <BsArrowRight className='text-[#424242] text-[0.9rem]'/> Office Tour
                                                </li>
                                            </ul>

                                            <div
                                                className='flex flex-col gap-[10px] mt-4'>
                                                <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                    <MdDashboardCustomize
                                                        className='bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]'/>
                                                    Full Customize
                                                </div>

                                                <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                    <CgIfDesign
                                                        className='bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]'/>
                                                    Modern Design
                                                </div>

                                                <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                    <FaCubesStacked
                                                        className='bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]'/>
                                                    Well Stacktured
                                                </div>
                                            </div>
                                        </div>


                                        <li onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                                            className='hover:text-primary group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]'>
                                            Service
                                            <IoIosArrowDown
                                                className={`${mobileServiceOpen ? 'rotate-0' : 'rotate-[180deg]'} text-gray-600 group-hover:text-primary transition-all duration-300`}/>
                                        </li>

                                        {/* service mega menu */}
                                        <div className={`${mobileServiceOpen ? 'hidden' : 'block'} font-[500] ml-6`}>

                                            <ul className='flex flex-col gap-[7px] text-[#424242]'>
                                                <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                    <BsArrowRight className='text-[#424242] text-[0.9rem]'/> Company
                                                    Details
                                                </li>
                                                <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                    <BsArrowRight className='text-[#424242] text-[0.9rem]'/>Company
                                                    Location
                                                </li>
                                                <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                    <BsArrowRight className='text-[#424242] text-[0.9rem]'/>Team Members
                                                </li>
                                                <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                    <BsArrowRight className='text-[#424242] text-[0.9rem]'/> Office Tour
                                                </li>
                                            </ul>

                                            <div
                                                className='flex flex-col gap-[10px] mt-4'>
                                                <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                    <MdDashboardCustomize
                                                        className='bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]'/>
                                                    Full Customize
                                                </div>

                                                <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                    <CgIfDesign
                                                        className='bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]'/>
                                                    Modern Design
                                                </div>

                                                <div className='flex items-center gap-[10px] text-[1rem] text-[#424242]'>
                                                    <FaCubesStacked
                                                        className='bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]'/>
                                                    Well Stacktured
                                                </div>
                                            </div>
                                        </div>
                                    </ul>
                                </aside>
                            </nav>
                        </div>
                    )}

                    {megamenuWithAccountCode && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {FaDiscord} from "react-icons/fa";
import {IoIosArrowDown, IoIosSearch} from "react-icons/io";
import {TbBrandGithubFilled} from "react-icons/tb";
import {CiMenuFries} from "react-icons/ci";
import {MdDashboardCustomize, MdKeyboardArrowDown} from "react-icons/md";
import {BsArrowRight} from "react-icons/bs";
import {CgIfDesign} from "react-icons/cg";
import {FaCubesStacked} from "react-icons/fa6";

const ResponsiveNavbar = () => {

    const [aboutHover, setAboutHover] = useState(false)
    const [serviceHover, setServiceHover] = useState(false)
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
    const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false)
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between w-full relative h-auto">
            <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[60px] "/>
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize">home</li>
                <li className=" transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative"
                    onMouseOver={() => setAboutHover(true)}
                    onMouseLeave={() => setAboutHover(false)}>
                    about us
                    <MdKeyboardArrowDown
                        className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]"/>

                    <article
                        className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

                        <div className="grid grid-cols-2">
                            <ul className="flex flex-col gap-[7px] text-[#424242]">
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Company
                                    Details
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Company
                                    Location
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Team Members
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Office Tour
                                </li>
                            </ul>

                            <div
                                className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <MdDashboardCustomize
                                        className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/>
                                    Full Customize
                                </div>

                                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <CgIfDesign
                                        className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]"/>
                                    Modern Design
                                </div>

                                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <FaCubesStacked
                                        className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]"/>
                                    Well Stacktured
                                </div>
                            </div>
                        </div>

                        <img src="https://i.ibb.co/YRgsrsh/AD22-04.png" alt="image"
                             className="w-full object-cover mt-4 rounded-sm h-[150px]"/>
                    </article>
                </li>
                <li className="transition-all duration-500 cursor-pointer hover:text-[#3B9DF8] capitalize group relative flex items-center gap-[3px]"
                    onMouseOver={() => setServiceHover(true)}
                    onMouseLeave={() => setServiceHover(false)}>
                    services
                    <MdKeyboardArrowDown
                        className="text-[1.5rem] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]"/>


                    <article
                        className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-150px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">

                        <div className="grid grid-cols-2">
                            <ul className="flex flex-col gap-[7px] text-[#424242]">
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Company
                                    Details
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Company
                                    Location
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Team Members
                                </li>
                                <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                    <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Office Tour
                                </li>
                            </ul>

                            <div
                                className="flex flex-col gap-[10px] border-l border-[#e5eaf2] pl-[30px]">
                                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <MdDashboardCustomize
                                        className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/>
                                    Full Customize
                                </div>

                                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <CgIfDesign
                                        className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]"/>
                                    Modern Design
                                </div>

                                <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                    <FaCubesStacked
                                        className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]"/>
                                    Well Stacktured
                                </div>
                            </div>
                        </div>

                        <img src="https://i.ibb.co/XJJ4mNY/AD21-03.png" alt="image"
                             className="w-full object-cover mt-4 rounded-sm h-[150px]"/>
                    </article>
                </li>
            </ul>

            <div className="flex items-center gap-[10px]">
                <div className="relative lg:flex hidden">
                    <input
                        className="py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[9px] left-3 text-[#424242] text-[1.3rem]"/>
                </div>

                <FaDiscord
                    className="text-[1.6rem] text-[#424242]c cursor-pointer hover:text-[#3B9DF8] transition-all duration-500 "/>
                <TbBrandGithubFilled
                    className="text-[1.6rem] text-[#424242]c cursor-pointer hover:text-[#3B9DF8] transition-all duration-500"/>

                <CiMenuFries className="text-[1.6rem] text-[#424242]c cursor-pointer lg:hidden flex"
                             onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}>
                <ul className="items-start gap-[20px] text-[1rem] text-gray-600 flex flex-col">

                    <li className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        Home
                    </li>

                    <li onClick={() => setMobileAboutUsOpen(!mobileAboutUsOpen)}
                        className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        About Us
                        <IoIosArrowDown
                            className={`${mobileAboutUsOpen ? "rotate-[180deg]" : "rotate-0"} text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}/>
                    </li>

                    {/* about us mega menu */}
                    <div className={`${mobileAboutUsOpen ? "block" : "hidden"} group font-[500] ml-6`}>

                        <ul className="flex flex-col gap-[7px] text-[#424242]">
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Company
                                Details
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Company
                                Location
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Team Members
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Office Tour
                            </li>
                        </ul>

                        <div
                            className="flex flex-col gap-[10px] mt-4">
                            <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <MdDashboardCustomize
                                    className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/>
                                Full Customize
                            </div>

                            <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <CgIfDesign
                                    className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]"/>
                                Modern Design
                            </div>

                            <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <FaCubesStacked
                                    className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]"/>
                                Well Stacktured
                            </div>
                        </div>
                    </div>


                    <li onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                        className="hover:text-[#3B9DF8] group transition-all duration-500 cursor-pointer capitalize flex items-center gap-[10px]">
                        Service
                        <IoIosArrowDown
                            className={`${mobileServiceOpen ? "rotate-0" : "rotate-[180deg]"} text-gray-600 group-hover:text-[#3B9DF8] transition-all duration-300`}/>
                    </li>

                    {/* service mega menu */}
                    <div className={`${mobileServiceOpen ? "hidden" : "block"} font-[500] ml-6`}>

                        <ul className="flex flex-col gap-[7px] text-[#424242]">
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Company
                                Details
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Company
                                Location
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/>Team Members
                            </li>
                            <li className="flex items-center gap-[7px] hover:text-[#3B9DF8] transition-all duration-300">
                                <BsArrowRight className="text-[#424242] text-[0.9rem]"/> Office Tour
                            </li>
                        </ul>

                        <div
                            className="flex flex-col gap-[10px] mt-4">
                            <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <MdDashboardCustomize
                                    className="bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]"/>
                                Full Customize
                            </div>

                            <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <CgIfDesign
                                    className="bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]"/>
                                Modern Design
                            </div>

                            <div className="flex items-center gap-[10px] text-[1rem] text-[#424242]">
                                <FaCubesStacked
                                    className="bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]"/>
                                Well Stacktured
                            </div>
                        </div>
                    </div>
                </ul>
            </aside>
        </nav>
    );
};

export default ResponsiveNavbar;
          '/>}
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"standard navbar"} id={"standard_navbar"}/>
                </div>

                <p className="w-full text-[#424242] text-[1rem]">
                    A clean and simple navigation bar with minimal styling, containing standard links for basic website
                    navigation.
                </p>

                <div className="w-full border border-[#e5eaf2] rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${standerNavbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                standerNavbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-[#424242] border-[#e5eaf2]`}
                            onClick={handleStanderNavbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                standerNavbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-[#424242] border-b rounded-br border-[#e5eaf2]`}
                            onClick={handleStanderNavbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {standerNavbarPreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-[20rem]' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <nav
                                className='flex items-center justify-between w-full relative bg-white boxShadow rounded-full px-[10px] py-[8px]'>
                                <img src='https://i.ibb.co/0BZfPq6/darklogo.png' alt='logo' className='w-[55px] '/>
                                <ul className='items-center gap-[20px] text-[1rem] text-[#424242] 1024px:flex hidden'>
                                    <li className='before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize'>home</li>
                                    <li className='before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize'>features</li>
                                    <li className='before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize'>blogs</li>
                                    <li className='before:w-0 hover:before:w-full before:bg-primary before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-primary transition-all duration-300 before:left-0 cursor-pointer capitalize'>shop</li>
                                </ul>

                                <div className='items-center gap-[10px] flex'>
                                    <button
                                        className='py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-primary transition-all duration-300 640px:flex hidden'>Sign
                                        in
                                    </button>
                                    <button
                                        className='py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-primary text-white hover:bg-blue-400 transition-all duration-300 640px:flex hidden'>Sign
                                        up
                                    </button>

                                    <CiMenuFries className='text-[1.8rem] mr-1 text-[#424242]c cursor-pointer 1024px:hidden flex'
                                                 onClick={() => setBasicNavbarOpen(!basicNavbarOpen)}/>
                                </div>

                                <aside
                                    className={` ${basicNavbarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} 1024px:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                                    <div className='relative mb-5'>
                                        <input
                                            className='py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-primary'
                                            placeholder='Search...'/>
                                        <IoIosSearch className='absolute top-[8px] left-3 text-gray-500 text-[1.3rem]'/>
                                    </div>
                                    <ul className='items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col'>
                                        <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize'>home</li>
                                        <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize'>Features
                                        </li>
                                        <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize'>Blogs</li>
                                        <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize'>Shop</li>
                                    </ul>
                                </aside>
                            </nav>
                        </div>
                    )}

                    {standerNavbarCode && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {IoIosSearch} from "react-icons/io";
import {CiMenuFries} from "react-icons/ci";

const ResponsiveNavbar = () => {

    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

    return (
        <nav
            className="flex items-center justify-between w-full relative bg-white boxShadow rounded-full px-[10px] py-[8px]">
            <img src="https://i.ibb.co/0BZfPq6/darklogo.png" alt="logo" className="w-[55px] "/>
            <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">home</li>
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">features</li>
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">blogs</li>
                <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">shop</li>
            </ul>

            <div className="items-center gap-[10px] flex">
                <button
                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize hover:text-[#3B9DF8] transition-all duration-300 sm:flex hidden">Sign
                    in
                </button>
                <button
                    className="py-[7px] text-[1rem] px-[16px] rounded-full capitalize bg-[#3B9DF8] text-white hover:bg-blue-400 transition-all duration-300 sm:flex hidden">Sign
                    up
                </button>

                <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242]c cursor-pointer lg:hidden flex"
                             onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}/>
            </div>

            <aside
                className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                <div className="relative mb-5">
                    <input
                        className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                        placeholder="Search..."/>
                    <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]"/>
                </div>
                <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">Features
                    </li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Blogs</li>
                    <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Shop</li>
                </ul>
            </aside>
        </nav>
    );
};

export default ResponsiveNavbar;
          '/>}
                </div>

                <BlocksFooter backUrl='/blocks/all-blocks' backName='all blocks' forwardName='hero section' forwardUrl='/blocks/hero-section'/>
            </div>


            <Helmet>
                <title>Blocks - Responsive Navbar</title>
            </Helmet>
        </aside>
    );
};

export default ResponsiveNavbar;
