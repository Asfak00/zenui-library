import React, { useState,useEffect } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import {AiOutlineMail} from "react-icons/ai";
import {MdOutlineMail} from "react-icons/md";


const NewsletterSection = () => {

    // search bar
    const [searchbarPreview, setSearchbarPreview] = useState(true);
    const [searchbarCode, setSearchbarCode] = useState(false);

    const handleSearchbarPreview = () => {
        setSearchbarPreview(true)
        setSearchbarCode(false);
    }

    const handleSearchbarCode = () => {
        setSearchbarCode(true);
        setSearchbarPreview(false);
    }

    const content = [
        'website',
        'programming',
        'zenui',
        'component',
        'template',
    ]

    const [filteredData, setFilteredData] = useState([])
    const [inputText, setInputText] = useState('')
    const [inputFocus, setInputFocus] = useState(false)

    useEffect(() => {
        const filtered = content?.filter((text)=> {
            if(inputText !== ''){
                return text.toLowerCase().includes(inputText)
            }
        })

        setFilteredData(filtered)

    }, [inputText]);


    // basic navbar actions
    const [basicNavbarOpen, setBasicNavbarOpen] = useState(false)
    const [toggle, setToggle] = useState(false)

    const [pricing1, setPricing1] = useState(false)

    return (
        <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
            <div>
                <ContentHeader text={"newsletter section 1"} id={"newsletter    _section_1"}/>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${searchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                searchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSearchbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                searchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSearchbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {searchbarPreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <section className='w-full rounded-xl p-[20px]'>
                                <div className='flex items-center justify-between gap-[20px]'>
                                    <div className='w-[50%]'>
                                        <img src='https://i.ibb.co/sKzp64h/undraw-Newsletter-re-wrob-1.png' alt='image'
                                             className='w-full'/>
                                    </div>

                                    <div className='w-[45%]'>
                                        <b className='text-[2rem]'>Get our weekly</b>
                                        <h1 className='text-[3.2rem] font-[800] uppercase text-[#FF354D] leading-[50px]'>newsletter</h1>
                                        <p className='text-[1.3rem] mt-8'>Get weekly updates on the newest design
                                            stories, case studies and tips right
                                            in your mailbox. <b>Subscribe now!</b></p>
                                    </div>
                                </div>

                                <div className='relative mt-10 w-[85%] mx-auto'>
                                    <input placeholder="Email Address"
                                           className='py-3 px-4 pr-[130px] border border-border rounded-l-md outline-none focus:ring-0 focus:border-[#FF354D] w-full'/>
                                    <button
                                        className='py-3 px-6 h-full absolute top-0 right-0 hover:bg-[#ea253c] bg-[#FF354D] text-white rounded-r-md'>Subscribe
                                    </button>
                                </div>
                            </section>

                        </div>
                    )}

                    {searchbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter section 2"} id={"newsletter_section_2"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${searchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                searchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSearchbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                searchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSearchbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {searchbarPreview && (
                        <div
                            className={`p-16 pb-16  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <section className='w-full rounded-xl p-[50px] bg-[#303456] relative'>

                                {/* left vector */}
                                <img src='https://i.ibb.co/kK9kStP/Group-5.png' alt='vector' className='w-[150px] absolute top-[-20px] left-[-20px]'/>

                                <div className='w-full flex-col flex items-center justify-center'>
                                    <h1 className='text-[3rem] text-white text-center relative w-max'>
                                        Subscribe and Get 25% Off!
                                        <img src='https://i.ibb.co/5hLC2fx/Vector-1.png' alt='vector'
                                             className='w-[200px] absolute bottom-0 right-0'/>
                                    </h1>
                                    <p className='text-[0.9rem] text-gray-400 w-[50%] mx-auto mt-4 text-center'>Get
                                        weekly update about our product on your email, no spam guaranteed we promise
                                        ✌️</p>
                                </div>

                                <div className='flex items-center justify-between gap-[20px] w-[65%] mx-auto mt-12'>
                                    <input placeholder='Enter your email...'
                                           className='py-4 px-4 w-full bg-[#6C6F87] border-2 border-gray-400 outline-none'/>

                                    <button className='py-4 px-12 bg-white text-black'>submit</button>
                                </div>

                                {/* right vector */}
                                <img src='https://i.ibb.co/ZJJBctq/Group-4.png' alt='vector' className='w-[150px] absolute bottom-[-20px] right-[-20px]'/>
                            </section>

                        </div>
                    )}

                    {searchbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter section 3"} id={"newsletter_section_3"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${searchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                searchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSearchbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                searchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSearchbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {searchbarPreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <section className='w-full rounded-xl p-[20px]'>

                                <h1 className='capitalize text-[2rem] font-[600] text-center text-[#FF354D]'>Subscribe
                                    to our newsletter</h1>

                                <div className='relative mt-6 w-[70%] mx-auto'>
                                    <input placeholder="Email Address"
                                           className='py-4 pl-6 pr-[130px] border rounded-full outline-none focus:ring-0 border-[#FF354D] w-full'/>
                                    <button
                                        className='py-3 px-6 absolute top-[50%] translate-y-[-50%] transform right-1.5 hover:bg-[#ea253c] bg-[#FF354D] text-white rounded-full'>Subscribe
                                    </button>
                                </div>
                            </section>

                        </div>
                    )}

                    {searchbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter section 4"} id={"newsletter_section_4"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${searchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                searchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSearchbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                searchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSearchbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {searchbarPreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <section className='w-full rounded-xl p-[20px]'>
                                <div className='flex items-center justify-between gap-[20px]'>
                                    <div className='w-[50%]'>
                                        <img src='https://i.ibb.co/WkhTsW1/undraw-Mailbox-re-dvds.png' alt='image'
                                             className='w-full'/>
                                    </div>

                                    <div className='w-[50%]'>
                                        <b className='text-[1.8rem] text-text'>Subscribe to our</b>
                                        <h1 className='text-[3rem] font-[800] capitalize text-text leading-[50px]'>newsletter</h1>
                                        <p className='text-[1.1rem] mt-3'>Get weekly updates on the newest design
                                            stories, case studies and tips right
                                            in your mailbox. <b>Subscribe now!</b></p>

                                        <form className=' mt-5'>
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

                    {searchbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter section 5"} id={"newsletter_section_5"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${searchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                searchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSearchbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                searchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSearchbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {searchbarPreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <section className='w-full rounded-xl p-[20px] bg-gray-700 relative'>

                                {/* email icon */}
                                <div
                                    className='rounded-full absolute top-[-30px] border-[3px] border-white left-[50%] transform translate-x-[-50%] bg-gradient-to-t from-blue-500 to-purple-500 p-1.5 w-max'>
                                    <MdOutlineMail
                                        className='border border-white p-1.5 rounded-full text-[3rem] text-white'/>
                                </div>

                                {/* content */}
                                <div className='w-[50%] mx-auto'>
                                    <h1 className='text-[3rem] mt-8 font-[800] capitalize text-blue-500 leading-[50px] text-center'>newsletter</h1>
                                    <p className='text-[1.1rem] mt-2 text-center text-gray-200 font-[300]'>Stay updated
                                        with our latest news and products.</p>

                                    <form className='mt-12 flex items-center justify-between gap-[15px]'>
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

                    {searchbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter section 6"} id={"newsletter_section_6"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${searchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                searchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSearchbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                searchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSearchbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {searchbarPreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <section className='w-full rounded-xl p-[20px]'>
                                <div className='flex items-center justify-between gap-[20px]'>
                                    <div className='w-[50%]'>
                                        <img src='https://i.ibb.co/vPgN7fq/dizzy-messages-1.png' alt='image'
                                             className='w-full'/>
                                    </div>

                                    <div className='w-[50%]'>
                                        <h1 className='text-[3rem] font-[500] capitalize text-text leading-[50px]'>Join Us!</h1>
                                        <p className='text-[1.1rem] mt-3'>Subscribe to our weekly newsletter and be a part of our journey to self discovery and love.</p>

                                        <form className=' mt-12 relative'>
                                            <input placeholder='Email Address' className='w-full py-4 pl-4 pr-[120px] outline-none focus:ring-0 border rounded-full border-[#00b0ff]'/>

                                            <button className='px-8 py-3 absolute top-0 right-0 h-full rounded-full rounded-tl-[0px] hover:bg-[#02aaf2] bg-[#00b0ff] text-white'>Submit
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </section>

                        </div>
                    )}

                    {searchbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter section 7"} id={"newsletter_section_7"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${searchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                searchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSearchbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                searchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSearchbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {searchbarPreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <section className='w-full rounded-xl py-[40px] px-[80px] bg-gradient-to-br from-[#161819] to-[#5C26B5] relative overflow-hidden'>
                                <div className='w-[60%]'>
                                    <div className='w-[60%]'>
                                        <h1 className='text-[2.8rem] text-[#71ECD2] font-[400] leading-[45px]'>Subscibe to Our
                                            Newsletter</h1>
                                        <p className='text-[0.9rem] text-[#CBCBCB] mt-5'>Get weekly update about our product
                                            on your email, no spam guaranteed we promise ✌️</p>
                                    </div>

                                    <div className='relative mt-12 mb-6'>
                                        <input className='py-3 pr-4 pl-12 w-full outline-none'
                                               placeholder='Email Address'/>
                                        <MdOutlineMail className='p-1.5 bg-[#F8F8F8] text-[#6C777C] text-[2rem] absolute top-[50%] left-2 transform translate-y-[-50%]'/>

                                        <button className='absolute bottom-[-20px] right-[-20px] bg-[#825FF1] hover:bg-[#7755e8] text-white py-3 px-8'>subscribe</button>
                                    </div>
                                </div>

                                <MdOutlineMail className='text-[30rem] absolute top-[-100px] right-[-100px] text-white opacity-10 rotate-[-30deg]'/>
                            </section>

                        </div>
                    )}

                    {searchbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"newsletter section 8"} id={"newsletter_section_8"}/>
                </div>

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations
                    upon clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${searchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                searchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleSearchbarPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                searchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleSearchbarCode}
                        >
                            Code
                        </button>
                    </div>
                    {searchbarPreview && (
                        <div
                            className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <section className='w-full rounded-xl py-[40px] px-[80px] bg-gradient-to-br from-[#fff] via-[#fff] to-[#6D96FF] boxShadow'>
                                    <h1 className='text-[3.5rem] w-[60%] text-[#161819] font-[400] leading-[70px]'>Subscibe to Our
                                            Newsletter</h1>

                                    <div className='w-full flex items-start mt-12 justify-between gap-[30px]'>
                                        <p className='text-[0.9rem] text-[#555555]'>Get weekly update about our
                                            product
                                            on your email, no spam guaranteed we promise ✌️</p>

                                        <div className='relative mb-6 w-[80%]'>
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

                    {searchbarCode && <BlocksShowCode code='
                    '/>
                    }
                </div>

                <BlocksFooter/>
            </div>


            <Helmet>
                <title>Blocks - Responsive Searchbar</title>
            </Helmet>
        </aside>
    );
};

export default NewsletterSection;
