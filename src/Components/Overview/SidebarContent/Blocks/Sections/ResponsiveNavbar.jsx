import React, { useState } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import { FaDiscord } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import {MdKeyboardArrowDown} from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import {BsArrowRight} from "react-icons/bs";


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

    // basic navbar actions
    const [basicNavbarOpen, setBasicNavbarOpen] = useState(false)


    // megemenu dropdown actions
    const [aboutHover, setAboutHover] = useState(false)
    const [serviceHover, setServiceHover] = useState(false)
    const [megamenuNavbarOpen, setMegamenuNavbarOpen] = useState(false)


    const handleServiceHover = () => {
        setServiceHover(true)
        setAboutHover(false)
    }
    const handleAboutHover = () => {
        setAboutHover(true)
        setServiceHover(false)
    }


    return (
        <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
            <div>
                <ContentHeader text={"basic navbar"} id={"basic_navbar"} />

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${basicNavbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                basicNavbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleBasicNavbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                basicNavbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleBasicNavbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {basicNavbarPreview && (
                        <div className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <nav className='flex items-center justify-between w-full relative'>
                                <img src='/logo.png' alt='logo' className='w-[60px] '/>
                                <ul className='items-center gap-[20px] text-[1rem] text-text 1024px:flex hidden'>
                                    <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-primary capitalize'>home</li>
                                    <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-primary capitalize'>about us</li>
                                    <li className='hover:border-b-primary border-b-[2px] border-transparent transition-all duration-500 cursor-pointer hover:text-primary capitalize'>services</li>
                                </ul>

                                <div className='flex items-center gap-[10px]'>
                                    <div className='relative 1024px:flex hidden'>
                                        <input className='py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-primary' placeholder='Search...'/>
                                        <IoIosSearch className='absolute top-[9px] left-3 text-text text-[1.3rem]'/>
                                    </div>

                                    <FaDiscord className='text-[1.6rem] text-textc cursor-pointer hover:text-primary transition-all duration-500 '/>
                                    <TbBrandGithubFilled className='text-[1.6rem] text-textc cursor-pointer hover:text-primary transition-all duration-500'/>

                                    <CiMenuFries className='text-[1.6rem] text-textc cursor-pointer 1024px:hidden flex' onClick={()=> setBasicNavbarOpen(!basicNavbarOpen)}/>
                                </div>

                                <aside className={` ${basicNavbarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} 1024px:hidden bg-primary p-4 text-center absolute top-[45px] right-0 w-[300px] rounded-md transition-all duration-300`}>
                                    <div className='relative mb-5'>
                                        <input
                                            className='py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-primary'
                                            placeholder='Search...'/>
                                        <IoIosSearch className='absolute top-[9px] left-5 text-text text-[1.3rem]'/>
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
<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
      Click Me
</button>

<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
    Click Me
</button>
          '/>}
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"mega menu navbar"} id={"megamenu_navbar"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${megaMenuNavbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                megaMenuNavbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleMegaMenuNavbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                megaMenuNavbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleMegaMenuNavbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {megaMenuNavbarPreview && (
                        <div className={` pb-[40rem] p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <nav className='flex items-center justify-between w-full relative h-auto'>
                                <img src='/logo.png' alt='logo' className='w-[60px] '/>
                                <ul className='items-center gap-[20px] text-[1rem] text-text 1024px:flex hidden'>
                                    <li className='transition-all duration-500 cursor-pointer hover:text-primary capitalize'>home</li>
                                    <li className=' transition-all duration-500 cursor-pointer hover:text-primary capitalize flex items-center gap-[3px] group relative' onMouseOver={()=> setAboutHover(true)} onMouseLeave={()=> setAboutHover(false)}>
                                        about us
                                        <MdKeyboardArrowDown className='text-[1.5rem] text-text group-hover:text-primary transition-all duration-500 group-hover:rotate-[180deg]'/>

                                        <article className='p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300'>

                                            <div className='grid grid-cols-2'>
                                                <ul className='flex flex-col gap-[7px] text-text'>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-text text-[0.9rem]'/> Company
                                                        Details
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-text text-[0.9rem]'/>Company
                                                        Location
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-text text-[0.9rem]'/>Team Members
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-text text-[0.9rem]'/> Office Tour
                                                    </li>
                                                </ul>

                                                <div
                                                    className='flex flex-col gap-[10px] border-l border-border pl-[30px]'>
                                                    <div className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                        <MdDashboardCustomize
                                                            className='bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]'/>
                                                        Full Customize
                                                    </div>

                                                    <div className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                        <CgIfDesign
                                                            className='bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]'/>
                                                        Modern Design
                                                    </div>

                                                    <div className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                        <FaCubesStacked
                                                            className='bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]'/>
                                                        Well Stacktured
                                                    </div>
                                                </div>
                                            </div>

                                            <img src='/heroImg.png' alt='image' className='w-full object-cover mt-4 rounded-sm h-[150px]'/>
                                        </article>
                                    </li>
                                    <li className='transition-all duration-500 cursor-pointer hover:text-primary capitalize group relative flex items-center gap-[3px]'>
                                        services
                                        <MdKeyboardArrowDown className='text-[1.5rem] text-text group-hover:text-primary transition-all duration-500 group-hover:rotate-[180deg]'/>


                                        <article
                                            className='p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-150px] group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300'>

                                            <div className='grid grid-cols-2'>
                                                <ul className='flex flex-col gap-[7px] text-text'>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-text text-[0.9rem]'/> Company
                                                        Details
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-text text-[0.9rem]'/>Company
                                                        Location
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-text text-[0.9rem]'/>Team Members
                                                    </li>
                                                    <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                        <BsArrowRight className='text-text text-[0.9rem]'/> Office Tour
                                                    </li>
                                                </ul>

                                                <div
                                                    className='flex flex-col gap-[10px] border-l border-border pl-[30px]'>
                                                    <div className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                        <MdDashboardCustomize
                                                            className='bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]'/>
                                                        Full Customize
                                                    </div>

                                                    <div className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                        <CgIfDesign
                                                            className='bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]'/>
                                                        Modern Design
                                                    </div>

                                                    <div className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                        <FaCubesStacked
                                                            className='bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]'/>
                                                        Well Stacktured
                                                    </div>
                                                </div>
                                            </div>

                                            <img src='/heroImg.png' alt='image'
                                                 className='w-full object-cover mt-4 rounded-sm h-[150px]'/>
                                        </article>
                                    </li>
                                </ul>

                                <div className='flex items-center gap-[10px]'>
                                    <div className='relative 1024px:flex hidden'>
                                        <input
                                            className='py-1.5 pr-4 border border-text pl-10 rounded-full outline-none focus:border-primary'
                                            placeholder='Search...'/>
                                        <IoIosSearch className='absolute top-[9px] left-3 text-text text-[1.3rem]'/>
                                    </div>

                                    <FaDiscord
                                        className='text-[1.6rem] text-textc cursor-pointer hover:text-primary transition-all duration-500 '/>
                                    <TbBrandGithubFilled
                                        className='text-[1.6rem] text-textc cursor-pointer hover:text-primary transition-all duration-500'/>

                                    <CiMenuFries className='text-[1.6rem] text-textc cursor-pointer 1024px:hidden flex'
                                                 onClick={() => setMegamenuNavbarOpen(!megamenuNavbarOpen)}/>
                                </div>

                                <aside
                                    className={` ${megamenuNavbarOpen ? "translate-x-0 opacity-100 z-20" : "translate-x-[200px] opacity-0 z-[-1]"} 1024px:hidden bg-primary p-4 text-center absolute top-[45px] right-0 w-[95%] 425px:w-[60%] 1024px:w-[40%] h-auto rounded-md transition-all duration-300`}>
                                    <div className='relative mb-5 w-[250px] mx-auto'>
                                        <input
                                            className='py-1.5 w-full pr-4 border border-text pl-10 rounded-full outline-none focus:border-primary'
                                            placeholder='Search...'/>
                                        <IoIosSearch className='absolute top-[9px] left-3 text-text text-[1.3rem]'/>
                                    </div>
                                    <ul className='items-center gap-[20px] text-[1rem] text-white flex flex-col 1024px:hidden'>
                                        <li className='transition-all duration-500 cursor-pointer hover:text-primary capitalize'>home</li>
                                        <li className=' transition-all duration-500 cursor-pointer capitalize flex items-center gap-[3px] group relative w-full justify-center flex-col'
                                            onMouseOver={handleAboutHover}
                                            onMouseLeave={() => setAboutHover(false)}>
                                            <div className='flex items-center gap-[3px]'>
                                                about us
                                                <MdKeyboardArrowDown
                                                    className='text-[1.5rem] text-white transition-all duration-500 group-hover:rotate-[180deg]'/>
                                            </div>

                                            <article
                                                className={`${aboutHover ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 hidden"} p-6 bg-white rounded-md boxShadow w-full transition-all duration-300`}>

                                                <div className='grid grid-cols-1 gap-[20px]'>
                                                    <ul className='flex flex-col gap-[7px] text-text'>
                                                        <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                            <BsArrowRight className='text-text text-[0.9rem]'/> Company
                                                            Details
                                                        </li>
                                                        <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                            <BsArrowRight className='text-text text-[0.9rem]'/>Company
                                                            Location
                                                        </li>
                                                        <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                            <BsArrowRight className='text-text text-[0.9rem]'/>Team
                                                            Members
                                                        </li>
                                                        <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                            <BsArrowRight className='text-text text-[0.9rem]'/> Office
                                                            Tour
                                                        </li>
                                                    </ul>

                                                    <div
                                                        className='flex flex-col gap-[10px]'>
                                                        <div
                                                            className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                            <MdDashboardCustomize
                                                                className='bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]'/>
                                                            Full Customize
                                                        </div>

                                                        <div
                                                            className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                            <CgIfDesign
                                                                className='bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]'/>
                                                            Modern Design
                                                        </div>

                                                        <div
                                                            className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                            <FaCubesStacked
                                                                className='bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]'/>
                                                            Well Stacktured
                                                        </div>
                                                    </div>
                                                </div>

                                                <img src='/heroImg.png' alt='image'
                                                     className='w-full object-cover mt-4 rounded-sm h-[120px]'/>
                                            </article>
                                        </li>
                                        <li className='transition-all duration-500 cursor-pointer capitalize group relative flex items-center gap-[3px] w-full justify-center flex-col' onMouseOver={handleServiceHover} onMouseLeave={() => setServiceHover(false)}>
                                            <div className='flex items-center gap-[3px]'>
                                                services
                                                <MdKeyboardArrowDown
                                                    className='text-[1.5rem] text-white transition-all duration-500 group-hover:rotate-[180deg]'/>
                                            </div>


                                            <article
                                                className={`${serviceHover ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 hidden"} p-6 bg-white rounded-md boxShadow w-full transition-all duration-300`}>

                                                <div className='grid grid-cols-1 gap-[20px]'>
                                                    <ul className='flex flex-col gap-[7px] text-text '>
                                                        <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                            <BsArrowRight className='text-text text-[0.9rem]'/> Company
                                                            Details
                                                        </li>
                                                        <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                            <BsArrowRight className='text-text text-[0.9rem]'/>Company
                                                            Location
                                                        </li>
                                                        <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                            <BsArrowRight className='text-text text-[0.9rem]'/>Team
                                                            Members
                                                        </li>
                                                        <li className='flex items-center gap-[7px] hover:text-primary transition-all duration-300'>
                                                            <BsArrowRight className='text-text text-[0.9rem]'/> Office
                                                            Tour
                                                        </li>
                                                    </ul>

                                                    <div
                                                        className='flex flex-col gap-[10px]'>
                                                        <div
                                                            className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                            <MdDashboardCustomize
                                                                className='bg-blue-200 text-blue-900 p-1.5 rounded-full text-[2rem]'/>
                                                            Full Customize
                                                        </div>

                                                        <div
                                                            className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                            <CgIfDesign
                                                                className='bg-orange-200 text-orange-800 p-1.5 rounded-full text-[2rem]'/>
                                                            Modern Design
                                                        </div>

                                                        <div
                                                            className='flex items-center gap-[10px] text-[1rem] text-text'>
                                                            <FaCubesStacked
                                                                className='bg-yellow-200 text-yellow-800 p-1.5 rounded-full text-[2rem]'/>
                                                            Well Stacktured
                                                        </div>
                                                    </div>
                                                </div>

                                                <img src='/heroImg.png' alt='image'
                                                     className='w-full object-cover mt-4 rounded-sm h-[120px]'/>
                                            </article>
                                        </li>
                                    </ul>
                                </aside>
                            </nav>
                        </div>
                    )}

                    {megaMenuNavbarCode && <BlocksShowCode code='
<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
      Click Me
</button>

<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
    Click Me
</button>
          '/>}
                </div>

                <BlocksFooter/>
            </div>


            <Helmet>
                <title>Blocks - Responsive Navbar</title>
            </Helmet>
        </aside>
    );
};

export default ResponsiveNavbar;
