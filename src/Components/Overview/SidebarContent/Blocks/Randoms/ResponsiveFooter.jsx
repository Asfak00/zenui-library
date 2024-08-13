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
                    <ContentHeader text={"Send Message animated input"} id={"send_message_animated_input"}/>
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
                        <div className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <section className='w-full'>

                                {/* title */}
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <h1 className='text-[2rem] font-bold text-primary leading-[36px]'>Contact Us</h1>
                                    <p className='text-[1rem] text-text'>This is an animated button on click component.</p>
                                </div>

                                {/* form area */}
                                <form className='w-full mt-[50px]'>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='flex flex-col gap-[5px] w-[50%]'>
                                            <label className="relative">
                                                <input type="text"
                                                       className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                                                />
                                                <span
                                                    className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                                    Your name
                                                </span>
                                            </label>
                                        </div>

                                        <div className='flex flex-col gap-[5px] w-[50%]'>
                                            <label className="relative">
                                                <input type="email"
                                                       className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                                                />
                                                <span
                                                    className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                                    Email Address
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-[5px] w-full mt-[20px]'>
                                        <label className="relative w-full">
                                            <textarea  className="peer min-h-[200px] border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                                            ></textarea>
                                            <span
                                                className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                                    Write Message
                                                </span>
                                        </label>
                                    </div>


                                    <button type='submit' className={`${utils.buttonSecondary} mt-[10px]`}>Submit</button>

                                </form>
                            </section>

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
