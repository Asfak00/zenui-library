import React, { useState,useEffect } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import {AiOutlineMail} from "react-icons/ai";
import {MdOutlineMail} from "react-icons/md";
import {useToggleCardView} from "../../../../../Utils/ButtonToggle.js";


const NewsletterSection = () => {

    const[newsletter1Preview, setNewsletter1Preview] = useState(true);
    const[newsletter1Code, setNewsletter1Code] = useState(false);

    const[newsletter2Preview, setNewsletter2Preview] = useState(true);
    const[newsletter2Code, setNewsletter2Code] = useState(false);

    const[newsletter3Preview, setNewsletter3Preview] = useState(true);
    const[newsletter3Code, setNewsletter3Code] = useState(false);

    const[newsletter4Preview, setNewsletter4Preview] = useState(true);
    const[newsletter4Code, setNewsletter4Code] = useState(false);

    const[newsletter5Preview, setNewsletter5Preview] = useState(true);
    const[newsletter5Code, setNewsletter5Code] = useState(false);

    const[newsletter6Preview, setNewsletter6Preview] = useState(true);
    const[newsletter6Code, setNewsletter6Code] = useState(false);

    const[newsletter7Preview, setNewsletter7Preview] = useState(true);
    const[newsletter7Code, setNewsletter7Code] = useState(false);

    const[newsletter8Preview, setNewsletter8Preview] = useState(true);
    const[newsletter8Code, setNewsletter8Code] = useState(false);

    const toggleCardView = useToggleCardView()

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"newsletter form 1"} id={"newsletter_form_1"}/>

                <p className="w-full text-text text-[1rem]">
                    A section on a website inviting users to subscribe to updates or a newsletter, typically with an
                    email input field and a call-to-action button.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${newsletter1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                newsletter1Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setNewsletter1Preview, setNewsletter1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                newsletter1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setNewsletter1Preview, setNewsletter1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {newsletter1Preview && (
                        <div
                            className={`p-8 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full rounded-xl 640px:p-[20px]'>
                                <div className='flex 1260px:flex-row flex-col items-center justify-between gap-[20px]'>
                                    <div className='w-full 640px:w-[80%] 1260px:w-[50%]'>
                                        <img src='https://i.ibb.co/sKzp64h/undraw-Newsletter-re-wrob-1.png' alt='image'
                                             className='w-full'/>
                                    </div>

                                    <div className='w-full 1260px:w-[45%]'>
                                        <b className='text-[1.3rem] 640px:text-[2rem]'>Get our weekly</b>
                                        <h1 className='text-[2.1rem] 640px:text-[3.2rem] font-[800] uppercase text-[#FF354D] leading-[50px]'>newsletter</h1>
                                        <p className='text-[1rem] 640px:text-[1.3rem] mt-5 640px:mt-8'>Get weekly
                                            updates on the newest design
                                            stories, case studies and tips right
                                            in your mailbox. <b>Subscribe now!</b></p>
                                    </div>
                                </div>

                                <div className='relative mt-10 w-full 640px:w-[85%] mx-auto'>
                                    <input placeholder="Email Address"
                                           className='py-3 px-4 pr-[130px] border border-border rounded-l-md outline-none focus:ring-0 focus:border-[#FF354D] w-full'/>
                                    <button
                                        className='py-3 px-6 h-full absolute top-0 right-0 hover:bg-[#ea253c] bg-[#FF354D] text-white rounded-r-md'>Subscribe
                                    </button>
                                </div>
                            </section>
                        </div>
                    )}

                    {newsletter1Code && <BlocksShowCode code='
import React from "react";

const NewsletterForm = () => {

    return (
        <section className="w-full rounded-xl sm:p-[20px]">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[20px]">
                <div className="w-full sm:w-[80%] lg:w-[50%]">
                    <img src="https://i.ibb.co/sKzp64h/undraw-Newsletter-re-wrob-1.png" alt="image"
                         className="w-full"/>
                </div>

                <div className="w-full lg:w-[45%]">
                    <b className="text-[1.3rem] sm:text-[2rem]">Get our weekly</b>
                    <h1 className="text-[2.1rem] sm:text-[3.2rem] font-[800] uppercase text-[#FF354D] leading-[50px]">newsletter</h1>
                    <p className="text-[1rem] sm:text-[1.3rem] mt-5 sm:mt-8">Get weekly
                        updates on the newest design
                        stories, case studies and tips right
                        in your mailbox. <b>Subscribe now!</b></p>
                </div>
            </div>

            <div className="relative mt-10 w-full sm:w-[85%] mx-auto">
                <input placeholder="Email Address"
                       className="py-3 px-4 pr-[130px] border border-border rounded-l-md outline-none focus:ring-0 focus:border-[#FF354D] w-full"/>
                <button
                    className="py-3 px-6 h-full absolute top-0 right-0 hover:bg-[#ea253c] bg-[#FF354D] text-white rounded-r-md">Subscribe
                </button>
            </div>
        </section>
    );
};

export default NewsletterForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter form 2"} id={"newsletter_form_2"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    A section on a website inviting users to subscribe to updates or a newsletter, typically with an
                    email input field and a call-to-action button.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${newsletter2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                newsletter2Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setNewsletter2Preview, setNewsletter2Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                newsletter2Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setNewsletter2Preview, setNewsletter2Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {newsletter2Preview && (
                        <div
                            className={`p-8 640px:p-12 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full rounded-xl p-[30px] 640px:p-[50px] bg-[#303456] relative'>

                                {/* left vector */}
                                <img src='https://i.ibb.co/kK9kStP/Group-5.png' alt='vector'
                                     className='w-[80px] 640px:w-[150px] absolute top-[-20px] left-[-20px]'/>

                                <div className='w-full flex-col flex items-center justify-center'>
                                    <h1 className='text-[1rem] 640px:text-[2rem] 1260px:text-[3rem] text-white text-center relative w-max'>
                                        Subscribe and Get 25% Off!
                                        <img src='https://i.ibb.co/5hLC2fx/Vector-1.png' alt='vector'
                                             className='w-[100px] 640px:w-[200px] absolute bottom-0 right-0'/>
                                    </h1>
                                    <p className='text-[0.8rem] 640px:text-[0.9rem] text-gray-400 w-full 640px:w-[50%] mx-auto mt-4 text-center'>Get
                                        weekly update about our product on your email, no spam guaranteed we promise
                                        ✌️</p>
                                </div>

                                <div
                                    className='flex 1260px:flex-row flex-col items-center justify-between gap-[20px] w-full 640px:w-[65%] mx-auto mt-12'>
                                    <input placeholder='Enter your email...'
                                           className='py-4 px-4 w-full bg-[#6C6F87] border-2 border-gray-400 outline-none'/>

                                    <button className='w-full 1260px:w-fit py-4 px-12 bg-white text-black'>submit
                                    </button>
                                </div>

                                {/* right vector */}
                                <img src='https://i.ibb.co/ZJJBctq/Group-4.png' alt='vector'
                                     className='w-[80px] 640px:w-[150px] absolute bottom-[-20px] right-[-20px]'/>
                            </section>
                        </div>
                    )}

                    {newsletter2Code && <BlocksShowCode code='
import React from "react";

const NewsletterForm = () => {

    return (
        <section className="w-full rounded-xl p-[30px] sm:p-[50px] bg-[#303456] relative">

            {/* left vector */}
            <img src="https://i.ibb.co/kK9kStP/Group-5.png" alt="vector"
                 className="w-[80px] sm:w-[150px] absolute top-[-20px] left-[-20px]"/>

            <div className="w-full flex-col flex items-center justify-center">
                <h1 className="text-[1rem] sm:text-[2rem] lg:text-[3rem] text-white text-center relative w-max">
                    Subscribe and Get 25% Off!
                    <img src="https://i.ibb.co/5hLC2fx/Vector-1.png" alt="vector"
                         className="w-[100px] sm:w-[200px] absolute bottom-0 right-0"/>
                </h1>
                <p className="text-[0.8rem] sm:text-[0.9rem] text-gray-400 w-full sm:w-[50%] mx-auto mt-4 text-center">Get
                    weekly update about our product on your email, no spam guaranteed we promise
                    ✌️</p>
            </div>

            <div
                className="flex lg:flex-row flex-col items-center justify-between gap-[20px] w-full sm:w-[65%] mx-auto mt-12">
                <input placeholder="Enter your email..."
                       className="py-4 px-4 w-full bg-[#6C6F87] border-2 border-gray-400 outline-none"/>

                <button className="w-full lg:w-fit py-4 px-12 bg-white text-black">submit
                </button>
            </div>

            {/* right vector */}
            <img src="https://i.ibb.co/ZJJBctq/Group-4.png" alt="vector"
                 className="w-[80px] sm:w-[150px] absolute bottom-[-20px] right-[-20px]"/>
        </section>
    );
};

export default NewsletterForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter form 3"} id={"newsletter_form_3"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    A section on a website inviting users to subscribe to updates or a newsletter, typically with an
                    email input field and a call-to-action button.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${newsletter3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                newsletter3Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setNewsletter3Preview, setNewsletter3Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                newsletter3Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setNewsletter3Preview, setNewsletter3Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {newsletter3Preview && (
                        <div
                            className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full rounded-xl p-[20px]'>

                                <h1 className='capitalize text-[1.5rem] 640px:text-[2rem] font-[600] text-center text-[#FF354D]'>Subscribe
                                    to our newsletter</h1>

                                <div className='relative mt-6 w-full 640px:w-[70%] mx-auto'>
                                    <input placeholder="Email Address"
                                           className='py-4 pl-6 pr-[130px] border rounded-full outline-none focus:ring-0 border-[#FF354D] w-full'/>
                                    <button
                                        className='py-3 px-6 absolute top-[50%] translate-y-[-50%] transform right-1.5 hover:bg-[#ea253c] bg-[#FF354D] text-white rounded-full'>Subscribe
                                    </button>
                                </div>
                            </section>
                        </div>
                    )}

                    {newsletter3Code && <BlocksShowCode code='
import React from "react";

const NewsletterForm = () => {

    return (
        <section className="w-full rounded-xl p-[20px]">

            <h1 className="capitalize text-[1.5rem] sm:text-[2rem] font-[600] text-center text-[#FF354D]">Subscribe
                to our newsletter</h1>

            <div className="relative mt-6 w-full sm:w-[70%] mx-auto">
                <input placeholder="Email Address"
                       className="py-4 pl-6 pr-[130px] border rounded-full outline-none focus:ring-0 border-[#FF354D] w-full"/>
                <button
                    className="py-3 px-6 absolute top-[50%] translate-y-[-50%] transform right-1.5 hover:bg-[#ea253c] bg-[#FF354D] text-white rounded-full">Subscribe
                </button>
            </div>
        </section>
    );
};

export default NewsletterForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter form 4"} id={"newsletter_form_4"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    A section on a website inviting users to subscribe to updates or a newsletter, typically with an
                    email input field and a call-to-action button.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${newsletter4Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                newsletter4Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setNewsletter4Preview, setNewsletter4Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                newsletter4Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setNewsletter4Preview, setNewsletter4Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {newsletter4Preview && (
                        <div
                            className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full rounded-xl p-[20px]'>
                                <div className='flex 1260px:flex-row flex-col items-center justify-between gap-[20px]'>
                                    <div className='w-full 640px:w-[80%] 1260px:w-[50%]'>
                                        <img src='https://i.ibb.co/WkhTsW1/undraw-Mailbox-re-dvds.png' alt='image'
                                             className='w-full'/>
                                    </div>

                                    <div className='w-full 1260px:w-[50%]'>
                                        <b className='text-[1rem] 640px:text-[1.8rem] text-text'>Subscribe to our</b>
                                        <h1 className='text-[2rem] 640px:text-[3rem] font-[800] capitalize text-text leading-[50px]'>newsletter</h1>
                                        <p className='text-[1.1rem] mt-3'>Get weekly updates on the newest design
                                            stories, case studies and tips right
                                            in your mailbox. <b>Subscribe now!</b></p>

                                        <form className='mt-5'>
                                            <div className='relative'>
                                                <input placeholder='Email Address'
                                                       className='w-full py-3 pr-4 pl-14 outline-none focus:ring-0 border rounded-md border-[#00b0ff]'/>
                                                <AiOutlineMail
                                                    className='absolute top-[50%] transform translate-y-[-50%] left-3 text-[#00b0ff] text-[1.7rem]'/>
                                            </div>

                                            <button
                                                className='w-full py-3 rounded-md bg-[#00b0ff] hover:bg-[#029de0] text-white mt-4'>Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {newsletter4Code && <BlocksShowCode code='
import React from "react";

// react icons
import {AiOutlineMail} from "react-icons/ai";

const NewsletterForm = () => {

    return (
        <section className="w-full rounded-xl p-[20px]">
            <div className="flex lg:flex-row flex-col items-center justify-between gap-[20px]">
                <div className="w-full sm:w-[80%] lg:w-[50%]">
                    <img src="https://i.ibb.co/WkhTsW1/undraw-Mailbox-re-dvds.png" alt="image"
                         className="w-full"/>
                </div>

                <div className="w-full lg:w-[50%]">
                    <b className="text-[1rem] sm:text-[1.8rem] text-text">Subscribe to our</b>
                    <h1 className="text-[2rem] sm:text-[3rem] font-[800] capitalize text-text leading-[50px]">newsletter</h1>
                    <p className="text-[1.1rem] mt-3">Get weekly updates on the newest design
                        stories, case studies and tips right
                        in your mailbox. <b>Subscribe now!</b></p>

                    <form className="mt-5">
                        <div className="relative">
                            <input placeholder="Email Address"
                                   className="w-full py-3 pr-4 pl-14 outline-none focus:ring-0 border rounded-md border-[#00b0ff]"/>
                            <AiOutlineMail
                                className="absolute top-[50%] transform translate-y-[-50%] left-3 text-[#00b0ff] text-[1.7rem]"/>
                        </div>

                        <button
                            className="w-full py-3 rounded-md bg-[#00b0ff] hover:bg-[#029de0] text-white mt-4">Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter form 5"} id={"newsletter_form_5"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    A section on a website inviting users to subscribe to updates or a newsletter, typically with an
                    email input field and a call-to-action button.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${newsletter5Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                newsletter5Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setNewsletter5Preview, setNewsletter5Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                newsletter5Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setNewsletter5Preview, setNewsletter5Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {newsletter5Preview && (
                        <div
                            className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full rounded-xl p-[20px] bg-gray-700 relative'>

                                {/* email icon */}
                                <div
                                    className='rounded-full absolute top-[-30px] border-[3px] border-white left-[50%] transform translate-x-[-50%] bg-gradient-to-t from-blue-500 to-purple-500 p-1.5 w-max'>
                                    <MdOutlineMail
                                        className='border border-white p-1.5 rounded-full text-[3rem] text-white'/>
                                </div>

                                {/* content */}
                                <div className='640px:w-[70%] w-full 1260px:w-[50%] mx-auto'>
                                    <h1 className='text-[2rem] 640px:text-[3rem] mt-8 font-[800] capitalize text-blue-500 leading-[50px] text-center'>newsletter</h1>
                                    <p className='text-[1.1rem] mt-2 text-center text-gray-200 font-[300]'>Stay updated
                                        with our latest news and products.</p>

                                    <form
                                        className='mt-12 640px:flex-row flex-col flex items-end 640px:items-center justify-between gap-[15px]'>
                                        <input placeholder='Email Address'
                                               className='w-full py-3 px-4 outline-none focus:ring-0 rounded-md '/>

                                        <button
                                            className='w-max px-8 py-3 rounded-md bg-blue-500 text-white'>Submit
                                        </button>
                                    </form>

                                    <p className='text-[0.9rem] text-gray-500 text-center mt-8'>Your email is safe with
                                        us, we don't spam</p>
                                </div>
                            </section>
                        </div>
                    )}

                    {newsletter5Code && <BlocksShowCode code='
import React from "react";

// react icons
import {MdOutlineMail} from "react-icons/md";

const NewsletterForm = () => {

    return (
        <section className="w-full rounded-xl p-[20px] bg-gray-700 relative">

            {/* email icon */}
            <div
                className="rounded-full absolute top-[-30px] border-[3px] border-white left-[50%] transform translate-x-[-50%] bg-gradient-to-t from-blue-500 to-purple-500 p-1.5 w-max">
                <MdOutlineMail
                    className="border border-white p-1.5 rounded-full text-[3rem] text-white"/>
            </div>

            {/* content */}
            <div className="sm:w-[70%] w-full lg:w-[50%] mx-auto">
                <h1 className="text-[2rem] sm:text-[3rem] mt-8 font-[800] capitalize text-blue-500 leading-[50px] text-center">newsletter</h1>
                <p className="text-[1.1rem] mt-2 text-center text-gray-200 font-[300]">Stay updated
                    with our latest news and products.</p>

                <form
                    className="mt-12 sm:flex-row flex-col flex items-end sm:items-center justify-between gap-[15px]">
                    <input placeholder="Email Address"
                           className="w-full py-3 px-4 outline-none focus:ring-0 rounded-md "/>

                    <button
                        className="w-max px-8 py-3 rounded-md bg-blue-500 text-white">Submit
                    </button>
                </form>

                <p className="text-[0.9rem] text-gray-500 text-center mt-8">Your email is safe with
                    us, we don"t spam</p>
            </div>
        </section>
    );
};

export default NewsletterForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter form 6"} id={"newsletter_form_6"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    A section on a website inviting users to subscribe to updates or a newsletter, typically with an
                    email input field and a call-to-action button.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${newsletter6Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                newsletter6Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setNewsletter6Preview, setNewsletter6Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                newsletter6Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setNewsletter6Preview, setNewsletter6Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {newsletter6Preview && (
                        <div
                            className={`p-8 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full rounded-xl p-[20px]'>
                                <div
                                    className='flex 1260px:flex-row flex-col items-center justify-between gap-[50px] 1260px:gap-[20px]'>
                                    <div className='w-full 640px:w-[80%] 1260px:w-[50%]'>
                                        <img src='https://i.ibb.co/vPgN7fq/dizzy-messages-1.png' alt='image'
                                             className='w-full'/>
                                    </div>

                                    <div className='w-full 1260px:w-[50%]'>
                                        <h1 className='text-[2rem] 640px:text-[3rem] font-[500] capitalize text-text leading-[50px]'>Join
                                            Us!</h1>
                                        <p className='text-[1.1rem] mt-3'>Subscribe to our weekly newsletter and be a
                                            part of our journey to self discovery and love.</p>

                                        <form className=' mt-12 relative'>
                                            <input placeholder='Email Address'
                                                   className='w-full py-4 pl-4 pr-[120px] outline-none focus:ring-0 border rounded-full border-[#00b0ff]'/>

                                            <button
                                                className='px-8 py-3 absolute top-0 right-0 h-full rounded-full rounded-tl-[0px] hover:bg-[#02aaf2] bg-[#00b0ff] text-white'>Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {newsletter6Code && <BlocksShowCode code='
import React from "react";

const NewsletterForm = () => {

    return (
        <section className="w-full rounded-xl p-[20px]">
            <div
                className="flex lg:flex-row flex-col items-center justify-between gap-[50px] lg:gap-[20px]">
                <div className="w-full sm:w-[80%] lg:w-[50%]">
                    <img src="https://i.ibb.co/vPgN7fq/dizzy-messages-1.png" alt="image"
                         className="w-full"/>
                </div>

                <div className="w-full lg:w-[50%]">
                    <h1 className="text-[2rem] sm:text-[3rem] font-[500] capitalize text-text leading-[50px]">Join
                        Us!</h1>
                    <p className="text-[1.1rem] mt-3">Subscribe to our weekly newsletter and be a
                        part of our journey to self discovery and love.</p>

                    <form className=" mt-12 relative">
                        <input placeholder="Email Address"
                               className="w-full py-4 pl-4 pr-[120px] outline-none focus:ring-0 border rounded-full border-[#00b0ff]"/>

                        <button
                            className="px-8 py-3 absolute top-0 right-0 h-full rounded-full rounded-tl-[0px] hover:bg-[#02aaf2] bg-[#00b0ff] text-white">Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter form 7"} id={"newsletter_form_7"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    A section on a website inviting users to subscribe to updates or a newsletter, typically with an
                    email input field and a call-to-action button.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${newsletter7Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                newsletter7Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setNewsletter7Preview, setNewsletter7Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                newsletter7Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setNewsletter7Preview, setNewsletter7Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {newsletter7Preview && (
                        <div
                            className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section
                                className='w-full rounded-xl py-[20px] 640px:py-[40px] px-[40px] 640px:px-[80px] bg-gradient-to-br from-[#161819] to-[#5C26B5] relative overflow-hidden'>
                                <div className='w-full 640px:w-[60%]'>
                                    <div className='w-full 640px:w-[60%]'>
                                        <h1 className='text-[2rem] 640px:text-[2.8rem] text-[#71ECD2] font-[400] leading-[45px]'>Subscibe
                                            to Our
                                            Newsletter</h1>
                                        <p className='text-[0.9rem] text-[#CBCBCB] mt-5'>Get weekly update about our
                                            product
                                            on your email, no spam guaranteed we promise ✌️</p>
                                    </div>

                                    <div className='relative mt-12 mb-6'>
                                        <input className='py-3 pr-4 pl-12 w-full outline-none'
                                               placeholder='Email Address'/>
                                        <MdOutlineMail
                                            className='p-1.5 bg-[#F8F8F8] text-[#6C777C] text-[2rem] absolute top-[50%] left-2 transform translate-y-[-50%]'/>

                                        <button
                                            className='absolute bottom-[-20px] right-[-20px] bg-[#825FF1] hover:bg-[#7755e8] text-white py-3 px-8'>subscribe
                                        </button>
                                    </div>
                                </div>

                                <MdOutlineMail
                                    className='text-[30rem] absolute top-[-100px] right-[-100px] text-white opacity-10 rotate-[-30deg]'/>
                            </section>
                        </div>
                    )}

                    {newsletter7Code && <BlocksShowCode code='
import React from "react";
import {MdOutlineMail} from "react-icons/md";

const NewsletterForm = () => {

    return (
        <section
            className="w-full rounded-xl py-[20px] sm:py-[40px] px-[40px] sm:px-[80px] bg-gradient-to-br from-[#161819] to-[#5C26B5] relative overflow-hidden">
            <div className="w-full sm:w-[60%]">
                <div className="w-full sm:w-[60%]">
                    <h1 className="text-[2rem] sm:text-[2.8rem] text-[#71ECD2] font-[400] leading-[45px]">Subscibe
                        to Our
                        Newsletter</h1>
                    <p className="text-[0.9rem] text-[#CBCBCB] mt-5">Get weekly update about our
                        product
                        on your email, no spam guaranteed we promise ✌️</p>
                </div>

                <div className="relative mt-12 mb-6">
                    <input className="py-3 pr-4 pl-12 w-full outline-none"
                           placeholder="Email Address"/>
                    <MdOutlineMail
                        className="p-1.5 bg-[#F8F8F8] text-[#6C777C] text-[2rem] absolute top-[50%] left-2 transform translate-y-[-50%]"/>

                    <button
                        className="absolute bottom-[-20px] right-[-20px] bg-[#825FF1] hover:bg-[#7755e8] text-white py-3 px-8">subscribe
                    </button>
                </div>
            </div>

            <MdOutlineMail
                className="text-[30rem] absolute top-[-100px] right-[-100px] text-white opacity-10 rotate-[-30deg]"/>
        </section>
    );
};

export default NewsletterForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter form 8"} id={"newsletter_form_8"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    A section on a website inviting users to subscribe to updates or a newsletter, typically with an
                    email input field and a call-to-action button.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${newsletter8Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                newsletter8Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setNewsletter8Preview, setNewsletter8Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                newsletter8Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setNewsletter8Preview, setNewsletter8Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {newsletter8Preview && (
                        <div
                            className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section
                                className='w-full rounded-xl py-[20px] 640px:py-[40px] px-[40px] 640px:px-[80px] bg-gradient-to-br from-[#fff] via-[#fff] to-[#6D96FF] boxShadow'>
                                <h1 className='text-[2rem] 640px:text-[3.5rem] w-full 640px:w-[60%] text-[#161819] font-[400] leading-[45px] 640px:leading-[70px]'>Subscibe
                                    to Our
                                    Newsletter</h1>

                                <div
                                    className='w-full 1260px:flex-row flex-col flex items-start mt-12 justify-between gap-[30px]'>
                                    <p className='text-[0.9rem] text-[#555555]'>Get weekly update about our
                                        product
                                        on your email, no spam guaranteed we promise ✌️</p>

                                    <div className='relative mb-6 w-full 640px:w-[80%]'>
                                        <input className='py-3 pr-4 pl-12 w-full outline-none'
                                               placeholder='Email Address'/>
                                        <MdOutlineMail
                                            className='p-1.5 bg-[#F8F8F8] text-[#6C777C] text-[2rem] absolute top-[50%] left-2 transform translate-y-[-50%]'/>

                                        <button
                                            className='absolute bottom-[-20px] right-[-20px] bg-[#161819] hover:bg-[#161819] text-white py-3 px-8'>subscribe
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {newsletter8Code && <BlocksShowCode code='
import React from "react";

// react icons
import {MdOutlineMail} from "react-icons/md";

const NewsletterForm = () => {

    return (
        <section
            className="w-full rounded-xl py-[20px] sm:py-[40px] px-[40px] sm:px-[80px] bg-gradient-to-br from-[#fff] via-[#fff] to-[#6D96FF] boxShadow">
            <h1 className="text-[2rem] sm:text-[3.5rem] w-full sm:w-[60%] text-[#161819] font-[400] leading-[45px] sm:leading-[70px]">Subscibe
                to Our
                Newsletter</h1>

            <div
                className="w-full 1260px:flex-row flex-col flex items-start mt-12 justify-between gap-[30px]">
                <p className="text-[0.9rem] text-[#555555]">Get weekly update about our
                    product
                    on your email, no spam guaranteed we promise ✌️</p>

                <div className="relative mb-6 w-full sm:w-[80%]">
                    <input className="py-3 pr-4 pl-12 w-full outline-none"
                           placeholder="Email Address"/>
                    <MdOutlineMail
                        className="p-1.5 bg-[#F8F8F8] text-[#6C777C] text-[2rem] absolute top-[50%] left-2 transform translate-y-[-50%]"/>

                    <button
                        className="absolute bottom-[-20px] right-[-20px] bg-[#161819] hover:bg-[#161819] text-white py-3 px-8">subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterForm;
                    '/>
                    }
                </div>

                <BlocksFooter/>
            </div>


            <Helmet>
                <title>Blocks - Newsletter Form</title>
            </Helmet>
        </aside>
    );
};

export default NewsletterSection;
