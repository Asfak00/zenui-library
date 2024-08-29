import React, {useState} from 'react';


import {IconsData} from "../Utils/IconsData.js";
import IconSidebar from "./IconSidebar.jsx";
import sidebar from "../Components/Overview/Sidebar/index.jsx";
import {FaHamburger} from "react-icons/fa";
import NoSearchFoundIcon from "../SvgIcons/NoSearchFoundIcon.jsx";
import CopyIcon from "../SvgIcons/CopyIcon.jsx";
import GoLinkIcon from "../SvgIcons/GoLinkIcon.jsx";
import DrawIcon from "../SvgIcons/DrawIcon.jsx";
import DeleteIcon from "../SvgIcons/DeleteIcon.jsx";
import CursorIcon from "../SvgIcons/CursorIcon.jsx";
import SoundIcon from "../SvgIcons/SoundIcon.jsx";
import ShareIcon from "../SvgIcons/ShareIcon.jsx";
import LikeIcon from "../SvgIcons/LikeIcon.jsx";
import CodeIcon from "../SvgIcons/CodeIcon.jsx";

const Icons = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false)
    const [selectedIcon,setSelectedIcon] = useState({})
    const [searchInputValue, setSearchInputValue] = useState("");
    const [filteredIcons, setFilteredIcons] = useState(IconsData);

    const handleIconClick = (data) => {
        setSidebarOpen(true)
        setSelectedIcon(data)
    }

    const handleIconSearch = (e) => {
        const value = e.target.value;

        setSearchInputValue(value);

        const filter = IconsData?.filter((icon)=> icon.name.toLowerCase().includes(value.toLowerCase()));

        setFilteredIcons(filter);
    }

    return (
        <>
            <section className='min-h-screen w-full pt-[9.5rem] 1024px:pt-[7rem] !px-5 425px:!px-10 relative'>

                    <div className='absolute top-[120px] opacity-20 right-[30px]'>
                        <CopyIcon/>
                    </div>
                    <div className='absolute top-[290px] opacity-20 right-[70px]'>
                        <GoLinkIcon/>
                    </div>
                    <div className='absolute top-[120px] opacity-20 right-[300px]'>
                        <DrawIcon/>
                    </div>
                    <div className='absolute top-[220px] opacity-20 right-[200px]'>
                        <DeleteIcon/>
                    </div>
                    <div className='absolute top-[280px] opacity-20 right-[400px]'>
                        <CursorIcon/>
                    </div>
                    <div className='absolute top-[210px] opacity-20 right-[330px]'>
                        <SoundIcon/>
                    </div>
                    <div className='absolute top-[320px] opacity-20 right-[220px]'>
                        <LikeIcon/>
                    </div>
                    <div className='absolute top-[120px] opacity-20 right-[160px]'>
                        <CodeIcon/>
                    </div>

                    <div className='absolute top-[200px] opacity-20 right-[60px]'>
                        <ShareIcon/>
                    </div>

                {/*<div className='w-[90px] h-[400px] bg-gradient-to-b from-purple-400 to-blue-400 absolute right-[180px] top-[0px] rotate-[60deg] blur-[90px]'></div>*/}
                <h2 className="font-[600] text-[#0FABCA] uppercase text-[2rem] 425px:text-[2.5rem]">
                    ZenUI Icons
                </h2>
                <p className="text-text text-[0.9rem]">
                    Explore and Enjoy ZenUI Library’s Collection of Icons Free to Use, Customize, and Download for Any Project
                </p>

                <p className="text-text text-[0.9rem] mt-6 w-[70%]">
                    Discover a diverse collection of over 400 icons. You can easily find and customize your favorite icon by adjusting its color, size, and other properties. Whether you need the icon in SVG or PNG format, you can download it directly or copy the SVG code for quick integration into your projects. Explore and personalize to fit your needs!
                </p>

                {/*  search area  */}
                <div className='mt-6'>
                    <input className='w-[40%] rounded-md border border-border py-3 px-4 focus:outline-2 focus:outline-primary'
                        placeholder='Search icon...' maxLength='50' onInput={handleIconSearch}/>
                </div>
                {
                    filteredIcons?.length <= 0 && (
                        <div className='flex items-center justify-center w-full flex-col mt-20'>
                            <NoSearchFoundIcon/>
                            <h3 className='text-[1.3rem] font-semibold mt-2'>No Icon Found!</h3>
                            <p className='text-[0.9rem]  text-text mt-2'>Please check the spelling or try alternative keyword</p>
                        </div>
                    )
                }

                {/*  icons area  */}
                <div className='flex gap-[10px] mt-12 flex-wrap mb-[7rem]'>
                    {
                        filteredIcons?.map((icon, index) => (
                            <div onClick={()=> handleIconClick(icon)} key={index} className={`${selectedIcon.id === icon.id ? 'border-b-primary border-primary shadow-md': ''} px-5 py-4 cursor-pointer bg-white border border-border border-b-[5px] hover:border-b-primary hover:shadow-md transition-all duration-200 rounded-md hover:border-primary icon w-[150px] text-center flex items-center justify-center flex-col`}>
                                <div className='iconContainer' dangerouslySetInnerHTML={{ __html: icon.iconCode }}></div>
                                <h4 className='text-[0.7rem] mt-5 text-[#2d2d2d]'>{icon.name}</h4>
                            </div>
                        ))
                    }
                </div>
            </section>

            <IconSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} iconData={selectedIcon}
                         setSelectedIconData={setSelectedIcon}/>
        </>
    );
};

export default Icons;
