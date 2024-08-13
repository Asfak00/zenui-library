import React, { useState } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import {FaDiscord, FaPlay} from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";


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

    // basic navbar actions
    const [basicNavbarOpen, setBasicNavbarOpen] = useState(false)



    return (
        <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
            <div>
                <ContentHeader text={"Hero Section 1"} id={"hero_section_1"} />

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
                            <div className='w-full bg-[#DED3CA] h-full p-8 rounded-md'>

                                {/* navbar */}
                                <nav className='flex items-center justify-between gap-[100px]'>
                                    <h3 className='text-[1.3rem] font-semibold'>Barner Glasses</h3>
                                    <ul className='list-none flex items-center gap-[15px] text-[16px]'>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>Home</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>About</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>Features</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>Trending</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>Collection</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>Contact</li>
                                        <button className='py-2 px-4 bg-black text-white rounded-full hover:bg-transparent hover:border-black hover:text-black transition-all duration-200 border'>Try for Free</button>
                                    </ul>
                                </nav>

                                {/* header */}
                                <header className='flex items-center mt-12'>
                                    <div>
                                        <h1 className='text-[60px] leading-[65px]'>Be fashionable with Barner Glasses</h1>
                                        <p className='text-[16px] mt-2'>Revolutionizing the eyewear industry in the country with its omni-channel approach.</p>

                                        <div className='flex items-center gap-[20px] mt-6'>
                                            <button
                                                className="px-6 py-[1px] bg-black rounded-md flex items-center gap-[12px]">
                                                <img src='https://i.ibb.co/Tgmf5Nr/images-3.png'
                                                     alt='apple logo'
                                                     className='w-[28px]'/>
                                                <div>
                                                    <span className='text-[0.6rem] font-[500] text-secondary'>Download on the</span>
                                                    <h3 className='text-[1.2rem] font-[500] leading-[20px] mb-2 text-secondary'>AppStore</h3>
                                                </div>
                                            </button>

                                            <button
                                                className="px-4 py-1.5 bg-black rounded-md flex items-center gap-[15px]">
                                                <img src='https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png'
                                                     alt='playstore logo'
                                                     className='w-[25px]'/>
                                                <div className='flex items-start flex-col'>
                                                    <span className='text-[0.6rem] font-[500] text-secondary'>Get it on</span>
                                                    <h3 className='text-[1.2rem] font-[500] leading-[20px] mb-2 text-secondary'>Google
                                                        Play</h3>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    {/* image */}
                                    <img src='https://i.ibb.co/JRRBNHr/Group-144.png' alt='image' className='w-[55%]'/>
                                </header>
                            </div>
                        </div>
                    )}

                    {basicNavbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Hero Section 2"} id={"hero_section_2"} />
                </div>

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
                            <div className='w-full h-full rounded-md' style={{backgroundImage: "url('https://i.ibb.co/x1rvpZs/0f-Y6ep3cd1c.png')"}}>

                                {/* navbar */}
                                <nav className='flex items-center justify-between gap-[100px] p-8'>
                                    <h3 className='text-[1.3rem] font-semibold'>Aolt.</h3>
                                    <ul className='list-none flex items-center gap-[15px] text-[16px]'>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>Home</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>About</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>Services</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>Pricing</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>How it works</li>
                                        <li className='hover:text-primary transition-all duration-200 cursor-pointer'>Contact</li>
                                        <button className='py-2 px-4 bg-black text-white rounded-full hover:bg-transparent hover:border-black hover:text-black transition-all duration-200 border'>Try for Free</button>
                                    </ul>
                                </nav>

                                {/* header */}
                                <header className='flex items-center mt-3'>
                                    <div className='px-8 w-[50%]'>
                                        <h1 className='text-[60px] leading-[65px] font-[500]'>Helping you sell
                                            your products
                                            faster</h1>
                                        <p className='text-[16px] mt-2'>You can read this text, but it doesn’t matter. It’s concept, not important for your life or life your friends</p>

                                        <div className='flex items-center gap-[20px] mt-6'>
                                            <button className='py-2 px-6 bg-black text-white rounded-full hover:bg-transparent hover:border-black hover:text-black transition-all duration-200 border'>Get Started</button>

                                            <button className='bg-gray-200 rounded-full py-1.5 px-2 flex items-center gap-[10px] '>
                                                <FaPlay className='text-white bg-black rounded-full py-2 text-[2rem]'/>
                                                How to set up a shop
                                            </button>
                                        </div>
                                    </div>

                                    {/* image */}
                                    <div className='w-[50%]'>
                                        <img
                                            src='https://i.ibb.co/kGnQZJ5/free-iphone-12-mini-mockup-scene-1-removebg-preview.png'
                                            alt='image' className='w-full'/>
                                    </div>
                                </header>
                            </div>
                        </div>
                    )}

                    {basicNavbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Hero Section 3"} id={"hero_section_3"} />
                </div>

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
                            <div className='w-full h-full rounded-md' style={{backgroundImage: "url('https://i.ibb.co/N1n4Pd0/michael-frattaroli-207280-unsplash.png')", backgroundSize: 'cover'}}>

                                {/* navbar */}
                                <nav className='flex items-center justify-between gap-[100px] p-8'>
                                    <h3 className='text-[1.3rem] font-semibold'>Browk Shop</h3>
                                    <ul className='list-none flex items-center gap-[15px] text-[16px]'>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>Catalog</li>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>About us</li>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>Delivery</li>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>Payment</li>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>Contact</li>
                                    </ul>

                                    <div className='flex items-center gap-[15px]'>
                                        <button className='bg-gray-300 text-black rounded-full py-1.5 px-4'>Sign In</button>
                                        <button className='bg-[#64BCAE] text-white rounded-full py-1.5 px-4'>Join Now</button>
                                    </div>
                                </nav>

                                {/* header */}
                                <header className='flex items-center mt-3'>
                                    <div className='p-8 pb-[100px] w-[50%]'>
                                        <h1 className='text-[60px] leading-[65px] font-[500]'>Be fashionable this summer</h1>
                                        <p className='text-[16px] mt-2'>We arranged a liquidation before the start of the season. Buy summer clothes now with a 50% discount</p>

                                        <div className='flex items-center gap-[20px] mt-6'>
                                            <button className='py-2 px-6 bg-[#64BCAE] text-white rounded-full hover:bg-transparent hover:border-[#64BCAE] hover:text-[#64BCAE] transition-all duration-200 border'>Catalog</button>

                                            <button className='bg-gray-200 rounded-full py-1.5 px-2 flex items-center gap-[10px] '>
                                                <FaPlay className='text-white bg-[#64BCAE] rounded-full py-2 text-[2rem]'/>
                                                See video about collection
                                            </button>
                                        </div>
                                    </div>
                                </header>
                            </div>
                        </div>
                    )}

                    {basicNavbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Hero Section 3"} id={"hero_section_3"} />
                </div>

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
                            <div className='w-full h-full bg-[#EAFCFC] rounded-md' style={{backgroundImage: "url('https://i.ibb.co/ZN2tbvw/Happy-smiling-man-riding-kick-scooter-on-sidewalk-1.png')", backgroundSize: 'cover'}}>

                                {/* navbar */}
                                <nav className='flex items-center justify-between gap-[100px] p-8'>
                                    <img src='https://i.ibb.co/bJXn5dk/Group-144.png' alt='logo' />
                                    <ul className='list-none flex items-center gap-[15px] text-[16px]'>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>Home</li>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>About
                                            us
                                        </li>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>Features</li>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>How
                                            it's work
                                        </li>
                                        <li className='hover:text-[#64BCAE] transition-all duration-200 cursor-pointer'>Support</li>
                                        <button className='bg-[#CFEBF9] hover:bg-[#3C8F7C] hover:text-white transition-all duration-200 text-black rounded-full py-2 px-5'>Login or
                                            create Account
                                        </button>
                                    </ul>
                                </nav>

                                {/* header */}
                                <header className='flex items-center justify-center flex-col mt-12 pb-[300px]'>
                                    <div className='relative w-[80%]'>
                                        <input placeholder='Type your destination' className='bg-white shadow-md w-full py-3 pl-4 rounded-md outline-none pr-[100px]'/>
                                        <button className='py-2 px-4 bg-[#3C8F7C] text-white rounded-md absolute top-[4px] right-1 hover:text-[#3C8F7C] hover:bg-transparent hover:border-[#3C8F7C] border transition-all duration-200'>Search</button>
                                    </div>

                                    <h1 className='text-[30px] font-[500] text-[#3C8F7C] mt-7'>
                                        Exploring a new city is easier now
                                    </h1>
                                </header>
                            </div>
                        </div>
                    )}

                    {basicNavbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <BlocksFooter width='full'/>
            </div>


            <Helmet>
                <title>Blocks - Hero Section</title>
            </Helmet>
        </aside>
    );
};

export default ResponsiveNavbar;
