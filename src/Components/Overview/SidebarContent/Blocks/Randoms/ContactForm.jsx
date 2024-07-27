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


const ContactForm = () => {

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
                <ContentHeader text={"Send Message"} id={"send_message"} />

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

                            <section className='w-full'>

                                {/* title */}
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <h1 className='text-[2rem] font-bold text-primary leading-[36px]'>Contact Us</h1>
                                    <p className='text-[1rem] text-text'>This is an animated button on click component.</p>
                                </div>

                                {/* form area */}
                                <form className='w-full mt-[50px]'>
                                    <div className='flex items-center gap-[10px]'>
                                        <div className='flex flex-col gap-[5px] w-[50%]'>
                                            <label htmlFor='name' className='text-[1rem] text-text'>Name</label>
                                            <input type='text' id='name' placeholder='Your Name'
                                                   className='py-3 px-4 border-border border focus:border-primary transition-all duration-300 outline-none rounded-md'/>
                                        </div>

                                        <div className='flex flex-col gap-[5px] w-[50%]'>
                                            <label htmlFor='email' className='text-[1rem] text-text'>Email</label>
                                            <input type='email' id='email' placeholder='Email Address'
                                                   className='py-3 px-4 border-border border focus:border-primary transition-all duration-300 outline-none rounded-md'/>
                                        </div>
                                    </div>

                                    <textarea className='py-3 px-4 border-border border focus:border-primary transition-all duration-300 outline-none rounded-md mt-[10px] w-full min-h-[200px]' placeholder='Write Message...'>

                                    </textarea>


                                    <button type='submit' className={`${utils.buttonPrimary} mt-[10px]`}>Submit</button>

                                </form>
                            </section>

                        </div>
                    )}

                    {sendMessageCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Send Message animated input"} id={"send_message_animated_input"} />
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

export default ContactForm;
