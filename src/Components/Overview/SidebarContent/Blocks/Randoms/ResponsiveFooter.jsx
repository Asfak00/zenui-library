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
import utils from "../../../../../Utils/index.jsx";
import {AiOutlineFacebook} from "react-icons/ai";
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";
import {IoLocationOutline} from "react-icons/io5";
import {MdOutlineEmail, MdOutlineLocalPhone} from "react-icons/md";
import {SlArrowUp} from "react-icons/sl";


const ResponsiveFooter = () => {

    // send message
    const [sendMesssagePreview, setSendMessagePreview] = useState(true);
    const [sendMessageCode, setSendMessageCode] = useState(false);

    const handleSendMessagePreview = () => {
        setSendMessagePreview(true)
        setSendMessageCode(false);
    }

    const handleSendMessageCode = () => {
        setSendMessageCode(true);
        setSendMessagePreview(false);
    }

    // basic navbar actions
    const [basicNavbarOpen, setBasicNavbarOpen] = useState(false)



    return (
        <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
            <div>
                <ContentHeader text={"Responsive footer 1"} id={"responsive_footer_1"} />

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sendMesssagePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                sendMesssagePreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSendMessagePreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                sendMessageCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSendMessageCode}
                        >
                            Code
                        </button>
                    </div>
                    {sendMesssagePreview && (
                        <div className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <footer className='bg-blue-950 rounded-xl w-full p-6 1024px:p-9'>
                                <div className='flex justify-between gap-[30px] flex-wrap w-full'>
                                    <div className='1024px:w-[25%]'>
                                        <h3 className='text-[1.2rem] font-semibold text-white mb-2'>About The Store</h3>
                                        <div className='flex flex-col gap-[8px] text-white'>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Home</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Become a customer</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>About us</a></span>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>FAQ</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Return policy</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Contact us</a></span>
                                        </div>
                                    </div>

                                    <div className='1024px:w-[45%]'>
                                        <h3 className='text-[1.2rem] font-semibold text-white mb-2'>Language</h3>
                                        <div className='flex text-white flex-wrap'>
                                            <button className='text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md'>English</button>
                                            <button className='text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md'>Bengali</button>
                                            <button className='text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md'>Italian</button>
                                            <button className='text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md'>Hindi</button>
                                            <button className='text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md'>English</button>
                                            <button className='text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md'>Bengali</button>
                                            <button className='text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md'>Italian</button>
                                            <button className='text-[0.9rem] py-1.5 px-3 hover:bg-blue-400 rounded-md'>Hindi</button>
                                        </div>
                                    </div>

                                    <div className='1024px:w-[20%]'>
                                        <h3 className='text-[1.2rem] font-semibold text-white mb-2'>Get in touch</h3>
                                        <div className='flex gap-[7px] text-white'>
                                            <a className='text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400'>
                                                <CgFacebook/>
                                            </a>
                                            <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400'>
                                                <BsTwitter/>
                                            </a>
                                            <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400'>
                                                <BsInstagram/>
                                            </a>
                                            <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400'>
                                                <BsLinkedin/>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className='1024px:flex-row flex-col flex items-center gap-[15px] w-full justify-center mt-8'>
                                    <a className='text-gray-400 cursor-pointer text-[0.8rem]'>Terms of purchase</a>
                                    <a className='text-gray-400 cursor-pointer text-[0.8rem]'>Security and privacy</a>
                                    <a className='text-gray-400 cursor-pointer text-[0.8rem]'>Newsletter</a>
                                </div>
                            </footer>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"responsive footer 2"} id={"responsive_footer_2"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sendMesssagePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                sendMesssagePreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSendMessagePreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                sendMessageCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSendMessageCode}
                        >
                            Code
                        </button>
                    </div>
                    {sendMesssagePreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <footer className='bg-white boxShadow rounded-xl w-full p-6 1024px:p-9'>
                                <div className='flex justify-between gap-[30px] flex-wrap w-full'>
                                    <div className='1024px:w-[25%] '>
                                        <img src='https://i.ibb.co/ZHYQ04D/footer-logo.png' alt='logo'
                                             className='w-[150px] mb-[20px]'/>
                                        <div className='flex flex-col gap-[20px] text-primary'>
                                            <span><a
                                                className='text-[0.9rem] flex items-center gap-[8px] cursor-pointer'>
                                                <IoLocationOutline className='text-[1.2rem]'/>
                                                Kulaura, Moulvibazar, Sylhet
                                            </a></span>
                                            <span><a
                                                className='text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer'>
                                                <MdOutlineEmail className='text-[1.1rem]'/>
                                                zenuilibrary@gmail.com
                                            </a></span>
                                            <span><a
                                                className='text-[0.9rem] flex items-center gap-[8px] hover:text-blue-400 cursor-pointer'>
                                                <MdOutlineLocalPhone className='text-[1.1rem]'/>
                                                +8801305282768
                                            </a></span>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Services</h3>
                                        <div className='flex text-black flex-col gap-[10px]'>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>UI
                                                Components</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Website
                                                Templates</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Icons</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Opacity
                                                Palette</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Blocks</p>
                                        </div>
                                    </div>


                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Company</h3>
                                        <div className='flex text-black flex-col gap-[10px]'>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Service</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Features</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Our Team</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Portfolio</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Blog</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Contact Us</p>
                                        </div>
                                    </div>


                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Our Social Media</h3>
                                        <div className='flex text-black flex-col gap-[10px]'>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Dribbble</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Behance</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Medium</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Instagram</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Facebook</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Twitter</p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Join a Newsletter</h3>
                                        <div className='flex gap-[2px] flex-col text-text relative'>
                                            <label className='text-[0.9rem]'>Your Email</label>
                                            <input type='email' className='py-3 px-4 pr-[90px] rounded-md border border-primary outline-none' placeholder='Email address'/>

                                            <button className='px-4 h-[67%] rounded-r-md bg-primary text-white absolute top-[24px] right-0'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"responsive footer 3"} id={"responsive_footer_3"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sendMesssagePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                sendMesssagePreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSendMessagePreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                sendMessageCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSendMessageCode}
                        >
                            Code
                        </button>
                    </div>
                    {sendMesssagePreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <footer className='bg-white boxShadow rounded-xl w-full p-6 1024px:p-9'>
                                <div className='flex justify-between gap-[30px] flex-wrap w-full'>

                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Services</h3>
                                        <div className='flex text-black flex-col gap-[10px]'>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>UI
                                                Components</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Website
                                                Templates</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Icons</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Opacity
                                                Palette</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Blocks</p>
                                        </div>
                                    </div>


                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Company</h3>
                                        <div className='flex text-black flex-col gap-[10px]'>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Service</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Features</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Our Team</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Portfolio</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Blog</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Contact Us</p>
                                        </div>
                                    </div>


                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Our Social Media</h3>
                                        <div className='flex text-black flex-col gap-[10px]'>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Dribbble</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Behance</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Medium</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Instagram</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Facebook</p>
                                            <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Twitter</p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Join a Newsletter</h3>
                                        <div className='flex gap-[2px] flex-col text-text relative'>
                                            <label className='text-[0.9rem]'>Your Email</label>
                                            <input type='email' className='py-3 px-4 pr-[90px] rounded-md border border-primary outline-none' placeholder='Email address'/>

                                            <button className='px-4 h-[67%] rounded-r-md bg-primary text-white absolute top-[24px] right-0'>Submit</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='border-t border-gray-200 pt-[20px] mt-[40px] flex items-center justify-between w-full flex-wrap gap-[20px]'>
                                    <img src='https://i.ibb.co/ZHYQ04D/footer-logo.png' alt='logo' className='w-[130px]'/>

                                    <p className='text-[0.9rem] text-gray-600'>© 2024 ZenUI Library. All Rights Reserved. </p>

                                    <div className='flex items-center gap-[10px] text-text'>
                                        <a className='text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300'>
                                            <CgFacebook/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300'>
                                            <BsTwitter/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300'>
                                            <BsInstagram/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300'>
                                            <BsLinkedin/>
                                        </a>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"responsive footer 4"} id={"responsive_footer_4"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sendMesssagePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                sendMesssagePreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSendMessagePreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                sendMessageCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSendMessageCode}
                        >
                            Code
                        </button>
                    </div>
                    {sendMesssagePreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <footer className='bg-white boxShadow rounded-xl w-full p-6 1024px:p-9'>
                                <div className='flex justify-center gap-[30px] flex-wrap w-full 640px:px-32'>
                                    <div className='flex justify-center 640px:justify-between gap-[30px] w-full flex-wrap'>
                                        <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Service</p>
                                        <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Features</p>
                                        <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Our
                                            Team</p>
                                        <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Portfolio</p>
                                        <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Blog</p>
                                        <p className='text-[0.9rem] text-text hover:text-primary cursor-pointer transition-all duration-200'>Contact
                                            Us</p>
                                    </div>

                                    <div className='flex items-center gap-[10px] text-text'>
                                        <a className='text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300'>
                                            <CgFacebook/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300'>
                                            <BsTwitter/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300'>
                                            <BsInstagram/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:text-white hover:bg-primary transition-all duration-300'>
                                            <BsLinkedin/>
                                        </a>
                                    </div>


                                    <div className='border-t border-gray-200 pt-[20px] flex items-center w-full flex-wrap gap-[20px] justify-center'>
                                        <p className='text-[0.9rem] text-gray-600'>© 2024 ZenUI Library. All Rights
                                            Reserved. </p>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"Responsive footer 5"} id={"responsive_footer_5"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sendMesssagePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                sendMesssagePreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSendMessagePreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                sendMessageCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSendMessageCode}
                        >
                            Code
                        </button>
                    </div>
                    {sendMesssagePreview && (
                        <div className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <footer className='bg-white boxShadow rounded-xl w-full p-6 1024px:p-9'>
                                <div className='flex justify-between gap-[30px] flex-wrap w-full'>
                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>About The Store</h3>
                                        <div className='flex flex-col gap-[8px] text-black'>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Home</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Become a customer</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>About us</a></span>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>FAQ</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Return policy</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Contact us</a></span>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Use Cases</h3>
                                        <div className='flex flex-col gap-[8px] text-black'>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Use Cases</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Web-designers</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Marketers</a></span>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Small Business</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Website Builder</a></span>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Resources</h3>
                                        <div className='flex flex-col gap-[8px] text-black'>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Resources</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Academy</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Blog</a></span>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Themes</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Hosting</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Developers</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Support</a></span>
                                        </div>
                                    </div>


                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Company</h3>
                                        <div className='flex flex-col gap-[8px] text-black'>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>About Us</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Careers</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>FAQs</a></span>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Teams</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Contact Us</a></span>
                                        </div>
                                    </div>

                                    <div className=''>
                                        <h3 className='text-[1.2rem] font-semibold text-text mb-2'>Get in touch</h3>
                                        <div className='flex gap-[7px] text-black'>
                                            <a className='text-[1.3rem] p-1.5 cursor-pointer hover:text-white transition-all duration-300 rounded-full hover:bg-blue-400'>
                                                <CgFacebook/>
                                            </a>
                                            <a className='text-[1.2rem] p-1.5 cursor-pointer hover:text-white transition-all duration-300 rounded-full hover:bg-blue-400'>
                                                <BsTwitter/>
                                            </a>
                                            <a className='text-[1.2rem] p-1.5 cursor-pointer hover:text-white transition-all duration-300 rounded-full hover:bg-blue-400'>
                                                <BsInstagram/>
                                            </a>
                                            <a className='text-[1.2rem] p-1.5 cursor-pointer hover:text-white transition-all duration-300 rounded-full hover:bg-blue-400'>
                                                <BsLinkedin/>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className='1024px:flex-row border-t border-gray-200 pt-[20px] flex-col flex items-center gap-[15px] w-full justify-between mt-8'>

                                        <div className='flex gap-[15px] text-gray-400'>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Privacy Policy</a></span>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Terms of Use</a></span>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Sales and Refunds</a></span>
                                            <span><a
                                                className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Legal</a></span>
                                            <span><a className='text-[0.9rem] hover:text-blue-400 cursor-pointer'>Site Map</a></span>
                                        </div>

                                    <p className='text-gray-400 cursor-pointer text-[0.8rem]'>© 2024 All Rights Reserved.</p>
                                </div>
                            </footer>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Responsive footer 6"} id={"responsive_footer_6"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sendMesssagePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                sendMesssagePreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSendMessagePreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                sendMessageCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSendMessageCode}
                        >
                            Code
                        </button>
                    </div>
                    {sendMesssagePreview && (
                        <div className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <footer className='bg-white boxShadow rounded-xl w-full p-3 1024px:p-4 relative'>

                                <div className='w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]'>
                                    <img src='https://i.ibb.co/ZHYQ04D/footer-logo.png' alt='logo' className='w-[150px]'/>

                                    <p className='text-[0.9rem] text-gray-600'>High level experience in web design and development knowledge, producing quality work.
                                    </p>

                                    <button className='py-3 px-6 rounded-full bg-primary text-white'>Contact Us</button>

                                    <div className='flex gap-[15px] text-black mt-4'>
                                        <a className='text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow'>
                                            <CgFacebook/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow'>
                                            <BsTwitter/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow'>
                                            <BsInstagram/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-white text-text boxShadow'>
                                            <BsLinkedin/>
                                        </a>
                                    </div>
                                </div>

                                <div className='z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full'>
                                    <p className='text-[0.9rem] text-gray-300'>© 2021 All Rights Reserved</p>

                                    <SlArrowUp className='p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300'/>
                                </div>

                                <img src='https://i.ibb.co/zNk7XT4/Rectangle-97.png' alt='background/image'
                                     className='absolute bottom-0 left-0 right-0 z-10 rounded-b-xl'/>
                                <img src='https://i.ibb.co/0mp2FwS/Rectangle-95.png'
                                     alt='background/image' className='absolute bottom-0 left-0 right-0 z-10 rounded-b-xl'/>
                            </footer>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <BlocksFooter/>
            </div>


            <Helmet>
                <title>Blocks - Contact Form</title>
            </Helmet>
        </aside>
    );
};

export default ResponsiveFooter;
