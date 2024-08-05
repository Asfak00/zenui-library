import React, {useState} from 'react';


import {IconsData} from "../Utils/IconsData.js";
import IconSidebar from "./IconSidebar.jsx";
import sidebar from "../Components/Overview/Sidebar/index.jsx";
import {FaHamburger} from "react-icons/fa";

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
                <div className='w-[90px] h-[400px] bg-gradient-to-b from-purple-400 to-blue-400 absolute right-[180px] top-[0px] rotate-[60deg] blur-[90px]'></div>
                <h2 className="font-[600] text-[#0471d6] uppercase text-[2rem] 425px:text-[2.5rem]">
                    ZenUI Icons
                </h2>
                <p className="text-text text-[0.9rem]">
                    Every ZenUI Library component available for free.
                </p>

                <p className="text-text text-[0.9rem] mt-6 w-[70%]">
                    ZenUI is a website where you can get all the component designs you
                    want and they are completely free. You can copy and use them in your
                    own projects from here. All the guidelines are given very nicely on
                    the website so that you can understand everything well. Our components
                    are developed following professional coding so you can use them with
                    confidence.
                </p>

                {/*  search area  */}
                <div className='mt-6'>
                    <input className='w-[40%] rounded-md border border-border py-3 px-4 focus:outline-2 focus:outline-primary'
                        placeholder='Search icon...' maxLength='50' onInput={handleIconSearch}/>
                </div>

                {
                    filteredIcons?.length <= 0 && (
                        <div className='flex items-center justify-center w-full flex-col mt-20'>
                            <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M48.3068 48.6932C48.9658 49.3523 50.0342 49.3523 50.6932 48.6932C51.3523 48.0342 51.3523 46.9658 50.6932 46.3068L48.3068 48.6932ZM42.9068 43.2932L48.3068 48.6932L50.6932 46.3068L45.2932 40.9068L42.9068 43.2932ZM48.4875 32.65C48.4875 25.0078 42.2922 18.8125 34.65 18.8125V22.1875C40.4283 22.1875 45.1125 26.8717 45.1125 32.65H48.4875ZM34.65 18.8125C27.0078 18.8125 20.8125 25.0078 20.8125 32.65H24.1875C24.1875 26.8717 28.8717 22.1875 34.65 22.1875V18.8125ZM20.8125 32.65C20.8125 40.2922 27.0078 46.4875 34.65 46.4875V43.1125C28.8717 43.1125 24.1875 38.4283 24.1875 32.65H20.8125ZM34.65 46.4875C42.2922 46.4875 48.4875 40.2922 48.4875 32.65H45.1125C45.1125 38.4283 40.4283 43.1125 34.65 43.1125V46.4875Z"
                                    fill="#141B34"></path>
                                <path opacity="0.4" d="M4.5 22.75L15.75 22.7501" stroke="#141B34" stroke-width="3.375"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M4.5 38.5H15.75" stroke="#141B34" stroke-width="3.375" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                                <path opacity="0.4" d="M4.5 7H42.75" stroke="#141B34" stroke-width="3.375"
                                      stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            <h3 className='text-[1.3rem] font-semibold mt-2'>No Icon Found!</h3>
                            <p className='text-[0.9rem]  text-text mt-2'>Please check the spelling or try alternative keyword</p>
                        </div>
                    )
                }

                {/*  icons area  */}
                <div className='flex gap-[10px] mt-12 flex-wrap mb-[7rem]'>
                    {
                        filteredIcons?.map((icon, index) => (
                            <div onClick={()=> handleIconClick(icon)} key={index} className={`${selectedIcon.name === icon.name ? 'border-b-primary border-primary shadow-md': ''} px-5 py-4 cursor-pointer bg-white border border-border border-b-[5px] hover:border-b-primary hover:shadow-md transition-all duration-200 rounded-md hover:border-primary icon w-[150px] text-center flex items-center justify-center flex-col`}>
                                <div className='iconContainer' dangerouslySetInnerHTML={{ __html: icon.iconCode }}></div>
                                <h4 className='text-[0.9rem] mt-5 text-[#2d2d2d]'>{icon.name}</h4>
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
