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
import {FaArrowLeftLong} from "react-icons/fa6";


const urlErrorPage = () => {

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
                <ContentHeader text={"404 page 1"} id={"empty_page_1"} />

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

                            <div className='boxShadow px-10 w-full min-h-[600px] py-16 flex flex-col justify-center rounded-xl' style={{background: "url('https://i.ibb.co/02DvRcV/404.jpg')", backgroundSize: 'cover'}}>

                                <h1 className='text-[3rem] font-[600] text-white w-[50%]'>Go Home , You’re Drunk!</h1>

                                <button className='py-3 px-8 w-max rounded-full bg-[#92E3A9] hover:bg-[#4ec46f] text-white mt-5'>BACK TO HOME</button>

                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"404 page 2"} id={"empty_page_2"} />
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

                            <div className='boxShadow px-10 w-full flex items-center justify-evenly py-20 rounded-xl'>

                                <div className='w-[40%]'>
                                    <img src='https://i.ibb.co/HdHH4Pb/Frame-6.png' alt='illustration'
                                         className='w-full'/>
                                </div>

                                <div className='w-[30%]'>
                                    <h1 className='text-[4rem] font-[800] text-[#566FA7] leading-[80px]'>OOPS!</h1>

                                    <h3 className='text-[#8093B8] text-[1.2rem]'>Looks like big foot has broken the link</h3>

                                    <button className='py-3 px-8 rounded-full bg-[#566FA7] text-white mt-8'>Back to
                                        homepage
                                    </button>
                                </div>

                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"404 page 3"} id={"empty_page_3"} />
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

                            <div className='boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl'>

                                    <img src='https://i.ibb.co/SVMTKPy/Frame-5.png' alt='illustration'
                                         className='w-[400px]'/>
                                    <p className='text-[#73718A] text-[1.2rem] w-[55%] text-center mt-4'>The page cannot be found. The requested
                                        URL was not found on this server.</p>

                                    <button className='py-3 px-8 rounded-full bg-[#4538FF] text-white mt-8'>Back to
                                        home
                                    </button>

                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"404 page 4"} id={"empty_page_4"} />
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

                            <div className='boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl bg-[#00543A]'>

                                    <img src='https://i.ibb.co/LvLq6d3/Group-29.png' alt='illustration'
                                         className='w-[400px]'/>
                                    <p className='text-[#fff] text-[1.2rem] w-[55%] text-center'>Oops it seems you follow backlink</p>

                                    <button className='py-3 px-8 rounded-full bg-[#fff] text-black mt-4 flex items-center gap-[10px]'>
                                        <FaArrowLeftLong /> Back to home
                                    </button>

                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"404 page 5"} id={"empty_page_5"} />
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

                            <div className='boxShadow px-10 w-full flex items-center flex-col justify-center pb-[50px] rounded-xl'>

                                    <img src='https://i.ibb.co/nP1Cngw/Error-Server-1.png' alt='illustration'
                                         className='w-[500px]'/>
                                    <h1 className='text-[#1C3177] text-[2.5rem] font-[800] mt-3 w-[55%] text-center'>Thunder 404 </h1>

                                    <button className='py-3 px-8 rounded-full bg-[#fff] text-[#1C3177] border border-[#1C3177] mt-4 flex items-center gap-[10px]'>
                                        <FaArrowLeftLong /> Back to home
                                    </button>

                            </div>

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

export default urlErrorPage;
