import React, { useState } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader.jsx";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import utils from "../../../../../Utils/index.jsx";
import {IoLocationOutline} from "react-icons/io5";
import {MdOutlineCall, MdOutlineEmail} from "react-icons/md";
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

// toggle card view
import {useToggleCardView} from "../../../../../Utils/ButtonToggle.js";


const ContactForm = () => {

    const[contactForm1Preview, setContactForm1Preview] = useState(true)
    const[contactForm1Code, setContactForm1Code] = useState(false)

    const[contactForm2Preview, setContactForm2Preview] = useState(true)
    const[contactForm2Code, setContactForm2Code] = useState(false)

    const[contactForm3Preview, setContactForm3Preview] = useState(true)
    const[contactForm3Code, setContactForm3Code] = useState(false)

    const[contactForm4Preview, setContactForm4Preview] = useState(true)
    const[contactForm4Code, setContactForm4Code] = useState(false)

    const toggleCardView = useToggleCardView()

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"Contact form 1"} id={"contact_form_1"} />

                <p className="w-full text-text text-[1rem]">
                    A form where users can submit inquiries or messages, typically including fields for name, email, and a message.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${contactForm1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                contactForm1Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setContactForm1Preview, setContactForm1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                contactForm1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setContactForm1Preview, setContactForm1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {contactForm1Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full'>

                                {/* title */}
                                <div className='w-full flex flex-col items-center justify-center'>
                                    <h1 className='text-[2rem] font-bold text-primary leading-[36px]'>Contact Us</h1>
                                    <p className='text-[1rem] text-text'>This is an animated button on click component.</p>
                                </div>

                                {/* form area */}
                                <form className='w-full mt-[50px]'>
                                    <div className='flex flex-col 640px:flex-row items-center gap-[20px]'>
                                        <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
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

                                        <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
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

                    {contactForm1Code && <BlocksShowCode code='
import React from "react";

const ContactForm = () => {

    return (
        <section className="w-full">

            {/* title */}
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className="text-[2rem] font-bold text-primary leading-[36px]">Contact Us</h1>
                <p className="text-[1rem] text-text">This is an animated button on click component.</p>
            </div>

            {/* form area */}
            <form className="w-full mt-[50px]">
                <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
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

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
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

                <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                    <label className="relative w-full">
                                            <textarea
                                                className="peer min-h-[200px] border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
                                            ></textarea>
                        <span
                            className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                                    Write Message
                                                </span>
                    </label>
                </div>


                <button type="submit" className={`py-3 px-4 border border-blue-500 rounded-md outline-none mt-[10px]`}>Submit</button>

            </form>
        </section>
    );
};

export default ContactForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Contact form 3"} id={"contact_form_3"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A form where users can submit inquiries or messages, typically including fields for name, email, and a message.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${contactForm2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                contactForm2Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setContactForm2Preview, setContactForm2Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                contactForm2Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setContactForm2Preview, setContactForm2Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {contactForm2Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full 1260px:flex-row flex items-center gap-[30px] flex-col justify-between bg-[#0A0D17] p-[40px] rounded-xl'>

                                {/* form area */}
                                <form className='1260px:w-[60%] w-full'>

                                    <div className='1260px:w-[80%] w-full mx-auto'>
                                        <div className='text-white'>
                                            <h1 className='text-[1.7rem] font-[600] leading-[35px]'>Let’s connect constellations</h1>
                                            <p className='text-[0.9rem] mt-2 mb-8'>Let's align our constellations! Reach out and
                                                let the magic of collaboration illuminate our skies.</p>
                                        </div>

                                        <div className='flex 640px:flex-row flex-col items-center gap-[20px]'>
                                            <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
                                                    <input type="text"
                                                           placeholder='Your name'
                                                           className="peer border-[#383844] border rounded-md outline-none px-4 py-3 w-full bg-[#22222f] text-gray-400 transition-colors duration-300"
                                                    />
                                            </div>

                                            <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
                                                    <input type="email"
                                                           placeholder='Email address'
                                                           className="peer border-[#383844] border rounded-md outline-none px-4 py-3 w-full bg-[#22222f] text-gray-400 transition-colors duration-300"
                                                    />
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-[5px] w-full mt-[20px]'>
                                            <textarea
                                                placeholder='Write message'
                                                className="peer min-h-[200px] border-[#383844] border rounded-md outline-none px-4 bg-[#22222f] py-3 w-full text-gray-400 transition-colors duration-300"
                                            ></textarea>
                                        </div>


                                        <button type='submit' className={`py-2.5 px-6 bg-gradient-to-r from-[#763AF5] to-[#A604F2] text-white rounded-md text-[1rem] mt-[10px] w-full`}>Send it to the moon
                                        </button>

                                    </div>

                                </form>

                                {/*  image  */}
                                <div className=''>
                                    <img src='https://i.ibb.co/h7rjVJS/Image.png' alt='image' className='w-full'/>
                                </div>
                            </section>
                        </div>
                    )}

                    {contactForm2Code && <BlocksShowCode code='
import React from "react";

const ContactForm = () => {

    return (
        <section
            className="w-full lg:flex-row flex items-center gap-[30px] flex-col justify-between bg-[#0A0D17] p-[40px] rounded-xl">

            {/* form area */}
            <form className="lg:w-[60%] w-full">

                <div className="lg:w-[80%] w-full mx-auto">
                    <div className="text-white">
                        <h1 className="text-[1.7rem] font-[600] leading-[35px]">Let’s connect constellations</h1>
                        <p className="text-[0.9rem] mt-2 mb-8">Let"s align our constellations! Reach out and
                            let the magic of collaboration illuminate our skies.</p>
                    </div>

                    <div className="flex sm:flex-row flex-col items-center gap-[20px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <input type="text"
                                   placeholder="Your name"
                                   className="peer border-[#383844] border rounded-md outline-none px-4 py-3 w-full bg-[#22222f] text-gray-400 transition-colors duration-300"
                            />
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <input type="email"
                                   placeholder="Email address"
                                   className="peer border-[#383844] border rounded-md outline-none px-4 py-3 w-full bg-[#22222f] text-gray-400 transition-colors duration-300"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                                            <textarea
                                                placeholder="Write message"
                                                className="peer min-h-[200px] border-[#383844] border rounded-md outline-none px-4 bg-[#22222f] py-3 w-full text-gray-400 transition-colors duration-300"
                                            ></textarea>
                    </div>


                    <button type="submit"
                            className={`py-2.5 px-6 bg-gradient-to-r from-[#763AF5] to-[#A604F2] text-white rounded-md text-[1rem] mt-[10px] w-full`}>Send
                        it to the moon
                    </button>

                </div>

            </form>

            {/*  image  */}
            <div className="">
                <img src="https://i.ibb.co/h7rjVJS/Image.png" alt="image" className="w-full"/>
            </div>
        </section>
    );
};

export default ContactForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Contact form 4"} id={"contact_form_4"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A form where users can submit inquiries or messages, typically including fields for name, email, and a message.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${contactForm3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                contactForm3Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setContactForm3Preview, setContactForm3Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                contactForm3Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setContactForm3Preview, setContactForm3Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {contactForm3Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full grid grid-cols-1 1260px:grid-cols-2 gap-[30px] boxShadow p-[40px] rounded-xl'>

                                {/* form area */}
                                <form className='w-full'>

                                        <div className='text-gray-800'>
                                            <h1 className='text-[2rem] font-[600] leading-[35px]'>Get in <span className='text-green-400'>touch</span> </h1>
                                            <p className='text-[0.9rem] mt-2 mb-8'>Let's align our constellations! Reach out and
                                                let the magic of collaboration illuminate our skies.</p>
                                        </div>

                                        <div className='flex 640px:flex-row flex-col items-center gap-[20px]'>
                                            <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
                                                    <input type="text"
                                                           placeholder='Your name'
                                                           className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
                                                    />
                                            </div>

                                            <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
                                                    <input type="email"
                                                           placeholder='Email address'
                                                           className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
                                                    />
                                            </div>
                                        </div>

                                        <div className='flex flex-col gap-[5px] w-full mt-[20px]'>
                                            <textarea
                                                placeholder='Write message'
                                                className="peer min-h-[200px] border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
                                            ></textarea>
                                        </div>


                                        <button type='submit' className={`py-2.5 px-6 bg-gray-800 text-white rounded-md text-[1rem] mt-[10px] w-full`}>Submit
                                        </button>

                                </form>

                                {/*  image  */}
                                <div className=' h-full'>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583821205!2d91.81983571134349!3d24.900058347354335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1723916219404!5m2!1sen!2sbd" allowFullScreen="" loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade" className='w-full h-full rounded-md'></iframe>
                                </div>
                            </section>
                        </div>
                    )}

                    {contactForm3Code && <BlocksShowCode code='
import React from "react";

const ContactForm = () => {

    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[30px] boxShadow p-[40px] rounded-xl">

            {/* form area */}
            <form className="w-full">

                <div className="text-gray-800">
                    <h1 className="text-[2rem] font-[600] leading-[35px]">Get in <span
                        className="text-green-400">touch</span></h1>
                    <p className="text-[0.9rem] mt-2 mb-8">Let"s align our constellations! Reach out and
                        let the magic of collaboration illuminate our skies.</p>
                </div>

                <div className="flex sm:flex-row flex-col items-center gap-[20px]">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <input type="text"
                               placeholder="Your name"
                               className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <input type="email"
                               placeholder="Email address"
                               className="peer border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                                            <textarea
                                                placeholder="Write message"
                                                className="peer min-h-[200px] border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition-colors duration-300"
                                            ></textarea>
                </div>


                <button type="submit"
                        className={`py-2.5 px-6 bg-gray-800 text-white rounded-md text-[1rem] mt-[10px] w-full`}>Submit
                </button>

            </form>

            {/*  image  */}
            <div className=" h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583821205!2d91.81983571134349!3d24.900058347354335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1723916219404!5m2!1sen!2sbd"
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" className="w-full h-full rounded-md"></iframe>
            </div>
        </section>
    );
};

export default ContactForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Contact form 5"} id={"contact_form_5"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A form where users can submit inquiries or messages, typically including fields for name, email, and a message.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${contactForm4Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                contactForm4Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setContactForm4Preview, setContactForm4Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                contactForm4Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setContactForm4Preview, setContactForm4Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {contactForm4Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <section className='w-full grid grid-cols-1 1260px:grid-cols-2 gap-[35px] boxShadow p-[30px] rounded-xl'>

                                {/*  informations  */}
                                <aside className='w-full bg-gray-800 flex flex-col justify-between p-[25px] rounded-md'>

                                    <div>
                                        <h1 className='text-[2rem] font-[600] leading-[35px] text-white'>Contact
                                            Information</h1>
                                        <p className='text-[0.9rem] mt-1 mb-8 text-white'>Say something to start a live
                                            chat!</p>
                                    </div>

                                    <div className='flex flex-col gap-[20px] text-gray-300'>
                                        <p className='flex items-center gap-[8px]'>
                                        <MdOutlineCall />
                                            +8801305282768
                                        </p>
                                        <p className='flex items-center break-all gap-[8px]'>
                                            <MdOutlineEmail />
                                            zenuilibrary@gmail.com
                                        </p>
                                        <p className='flex items-center gap-[8px]'>
                                            <IoLocationOutline/>
                                            Kulaura, Moulvibazar, Sylhet
                                        </p>
                                    </div>

                                    <div className='flex gap-[15px] flex-wrap text-black mt-8'>
                                        <a className='text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow'>
                                            <CgFacebook/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow'>
                                            <BsTwitter/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow'>
                                            <BsInstagram/>
                                        </a>
                                        <a className='text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow'>
                                            <BsLinkedin/>
                                        </a>
                                    </div>
                                </aside>

                                {/* form area */}
                                <form className='pt-[20px]'>
                                    <div className='flex flex-col 640px:flex-row items-center gap-[30px]'>
                                        <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
                                            <label className='text-[1rem] text-gray-700'>First Name</label>
                                            <input type="text"
                                                   className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                                            />
                                        </div>

                                        <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
                                            <label className='text-[1rem] text-gray-700'>Last Name</label>
                                            <input type="text"
                                                   className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className='flex flex-col 640px:flex-row items-center gap-[30px] mt-10'>
                                        <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
                                            <label className='text-[1rem] text-gray-700'>Email Address</label>
                                            <input type="email"
                                                   className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                                            />
                                        </div>

                                        <div className='flex flex-col gap-[5px] w-full 640px:w-[50%]'>
                                            <label className='text-[1rem] text-gray-700'>Phone Number</label>
                                            <input type="number"
                                                   className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-[5px] w-full mt-10'>
                                        <label className='text-[1rem] text-gray-700'>Write Message</label>
                                        <textarea
                                            className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-primary duration-300"
                                        ></textarea>
                                    </div>


                                    <div className='w-full flex items-center 640px:items-end justify-center 640px:justify-end mt-5'>
                                    <button type='submit'
                                                className={`py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-[1rem] mt-[10px] w-max`}>Send
                                            Message
                                        </button>
                                    </div>

                                </form>
                            </section>
                        </div>
                    )}

                    {contactForm4Code && <BlocksShowCode code='
import React from "react";

// react icons
import {MdOutlineCall, MdOutlineEmail} from "react-icons/md";
import {IoLocationOutline} from "react-icons/io5";
import {CgFacebook} from "react-icons/cg";
import {BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

const ContactForm = () => {

    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[35px] boxShadow p-[30px] rounded-xl">

            {/*  informations  */}
            <aside className="w-full bg-gray-800 flex flex-col justify-between p-[25px] rounded-md">

                <div>
                    <h1 className="text-[2rem] font-[600] leading-[35px] text-white">Contact
                        Information</h1>
                    <p className="text-[0.9rem] mt-1 mb-8 text-white">Say something to start a live
                        chat!</p>
                </div>

                <div className="flex flex-col gap-[20px] text-gray-300">
                    <p className="flex items-center gap-[8px]">
                        <MdOutlineCall />
                        +8801305282768
                    </p>
                    <p className="flex items-center break-all gap-[8px]">
                        <MdOutlineEmail />
                        zenuilibrary@gmail.com
                    </p>
                    <p className="flex items-center gap-[8px]">
                        <IoLocationOutline/>
                        Kulaura, Moulvibazar, Sylhet
                    </p>
                </div>

                <div className="flex gap-[15px] flex-wrap text-black mt-8">
                    <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow">
                        <CgFacebook/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow">
                        <BsTwitter/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow">
                        <BsInstagram/>
                    </a>
                    <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow">
                        <BsLinkedin/>
                    </a>
                </div>
            </aside>

            {/* form area */}
            <form className="pt-[20px]">
                <div className="flex flex-col sm:flex-row items-center gap-[30px]">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="text-[1rem] text-gray-700">First Name</label>
                        <input type="text"
                               className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="text-[1rem] text-gray-700">Last Name</label>
                        <input type="text"
                               className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="text-[1rem] text-gray-700">Email Address</label>
                        <input type="email"
                               className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>

                    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                        <label className="text-[1rem] text-gray-700">Phone Number</label>
                        <input type="number"
                               className="peer border-gray-300 border-b outline-none focus:border-primary w-full text-gray-400 transition-colors duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-[5px] w-full mt-10">
                    <label className="text-[1rem] text-gray-700">Write Message</label>
                    <textarea
                        className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-primary duration-300"
                    ></textarea>
                </div>


                <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
                    <button type="submit"
                            className={`py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-[1rem] mt-[10px] w-max`}>Send
                        Message
                    </button>
                </div>

            </form>
        </section>
    );
};

export default ContactForm;
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
