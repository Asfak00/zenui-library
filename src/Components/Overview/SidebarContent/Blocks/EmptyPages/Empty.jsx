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


const Empty = () => {

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
                <ContentHeader text={"empty page 1"} id={"empty_page_1"} />

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

                            <div className='boxShadow px-20 py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/z8VbyRc/Charco-Mobile-Life.png' alt='empty/image' className='w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>No transactions yet</h1>

                                <p className='text-[0.9rem] text-gray-500'> Make Your First Transfer</p>
                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 2"} id={"empty_page_2"} />
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

                            <div className='boxShadow px-20 py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/ZfTb1sJ/Amigos-Standing.png' alt='empty/image' className='w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>No tasks left</h1>

                                <p className='text-[0.9rem] text-gray-500'>You’ve done a great job</p>
                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 3"} id={"empty_page_3"} />
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

                            <div className='boxShadow px-20 py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/X3P0nnK/Group-1.png' alt='empty/image' className='w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>Empty Playlist</h1>

                                <p className='text-[0.9rem] text-gray-500'>You haven't added any song yet</p>
                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 4"} id={"empty_page_4"} />
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

                            <div className='boxShadow px-20 py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/m5DrBt1/Group-2.png' alt='empty/image' className='w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>No Result</h1>

                                <p className='text-[0.9rem] text-gray-500'>Please Login to view more updates</p>
                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 5"} id={"empty_page_5"} />
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

                            <div className='boxShadow px-20 py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/JrfVWx9/Message.png' alt='empty/image' className='w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>No Messages</h1>

                                <p className='text-[0.9rem] text-gray-500'>When you have messages you’ll see them here</p>
                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 6"} id={"empty_page_6"} />
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

                            <div className='boxShadow px-10 py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/cgfgxGH/Illustrations.png' alt='empty/image' className='w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>Result Not Found</h1>

                                <p className='text-[0.9rem] text-gray-500'>Whoops ... this information is not available for a moment</p>
                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 7"} id={"empty_page_7"} />
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

                            <div className='boxShadow px-10 py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/nmSDvYj/Illustrations-1.png' alt='empty/image' className='w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-3 font-[500] text-black'>Your inbox is empty</h1>

                                <p className='text-[0.9rem] text-gray-500'>Pick a person from left menu and start your conversation</p>
                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 8"} id={"empty_page_8"} />
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

                            <div className='boxShadow px-10 py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/6nSHrGp/Favorite-illustration.png' alt='empty/image' className='w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-3 font-[500] text-black'>No Favourites</h1>

                                <p className='text-[0.9rem] text-gray-500'>You can add an item to your favourites by clicking “Star Icon”</p>
                            </div>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 9"} id={"empty_page_9"} />
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

                            <div className='boxShadow px-10 py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/qW8ztPd/Successful-illustration.png' alt='empty/image' className='w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-3 font-[500] text-black'>Successful</h1>

                                <p className='text-[0.9rem] text-gray-500'>Your changes were made successfully</p>
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

export default Empty;
