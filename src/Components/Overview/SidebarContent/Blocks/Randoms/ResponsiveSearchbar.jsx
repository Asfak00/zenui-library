import React, { useState,useEffect } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import {IoIosSearch, IoMdContact} from "react-icons/io";
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import {GoLinkExternal} from "react-icons/go";
import {RxCross2} from "react-icons/rx";
import {FaPlus} from "react-icons/fa6";
import {IoAnalytics} from "react-icons/io5";
import {BsThreeDotsVertical} from "react-icons/bs";
import {SlDirections} from "react-icons/sl";
import {RiComputerLine} from "react-icons/ri";
import {MdOutlineEmail, MdOutlineExplore, MdOutlineFindInPage} from "react-icons/md";
import {GrSchedule} from "react-icons/gr";
import {FaRegFile} from "react-icons/fa";
import {PiBuildings} from "react-icons/pi";

// toggle card view
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";


const ResponsiveSearchbar = () => {

    const[productSearchbarPreview, setProductSearchbarPreview] = useState(true)
    const[productSearchbarCode, setProductSearchbarCode] = useState(false)

    const[searchbarWithActionPreview, setSearchbarWithActionPreview] = useState(true)
    const[searchbarWithActionCode, setSearchbarWithActionCode] = useState(false)

    const[keypressOpenSearchbarPreview, setKeypressOpenSearchbarPreview] = useState(true)
    const[keypressOpenSearchbarCode, setKeypressOpenSearchbarCode] = useState(false)

    const toggleCardView = useToggleCardView()

    const productsData = [
        {
            id: 1,
            name: 'Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"',
            image: 'https://i.ibb.co/d4jgmFW/01.png',
            productLink:''
        },
        {
            id: 2,
            name: 'Mobile Phone Nokia 8210, Dual SIM, 4G',
            image: 'https://i.ibb.co/fCpcnhM/02.png',
            productLink:''
        },
        {
            id: 3,
            name: 'SONY SRSXV900, Wireless Party Speaker, MEGA BASS',
            image: 'https://i.ibb.co/2dYkwd3/03-1.png',
            productLink:''
        },
        {
            id: 4,
            name: 'Headphones, Noise cancelling, Bluetooth 5.0',
            image: 'https://i.ibb.co/f8xPk0G/04-1.png',
            productLink:''
        },
        {
            id: 5,
            name: 'D-SLR Canon EOS R10, 4k, DIGIC X, RF-S 18-45mm',
            image: 'https://i.ibb.co/dg7FmKY/05-1.png',
            productLink:''
        },
    ]

    const [filteredData, setFilteredData] = useState(productsData)
    const [inputText, setInputText] = useState('')
    const [inputFocus, setInputFocus] = useState(true)


    useEffect(() => {
        const filtered = productsData?.filter((product)=> {
            if(inputText === ''){
                return productsData
            }else {
                return product?.name.toLowerCase().includes(inputText)
            }
        })

        setFilteredData(filtered)

    }, [inputText]);

    document.addEventListener('click', (event)=> {
        if(!event.target.closest('.product_search_bar') && !event.target.closest('.product_search_input')){
            setInputFocus(false)
            setActionSearch(false)
            setKeyPressOpen(false)
        }
    })


    function truncate(text, maxLength, ellipsis = '...') {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength - ellipsis?.length) + ellipsis;
    }

    // search with actions
    const [actionSearch, setActionSearch] = useState(true)

    const recentsData = [
        {
            title: 'Marketing & Strategy Analytics',
            icon: <IoAnalytics/>,
            tag: 'Article',
            background_color: 'bg-red-100',
            text_color: 'text-red-500'
        },
        {
            title: 'Direction to XYZ location',
            icon: <SlDirections/>,
            tag: 'Location',
            background_color: 'bg-orange-100',
            text_color: 'text-orange-500'
        },
        {
            title: 'Upcoming meeting details',
            icon: <RiComputerLine/>,
            tag: 'Meeting',
            background_color: 'bg-green-100',
            text_color: 'text-green-500'
        },
        {
            title: 'Contact Jhon Deo',
            icon: <IoMdContact/>,
            tag: 'Articles',
            background_color: 'bg-blue-100',
            text_color: 'text-blue-500'
        },
    ]


    // search open with key press

    const [keyPressOpen, setKeyPressOpen] = useState(true)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'e') {
                event.preventDefault(); // Prevent browser's default search bar opening
                setKeyPressOpen(true);
            }
        };

        window.addEventListener('keydown', handleKeyDown, { capture: true }); // Capture phase added

        return () => {
            window.removeEventListener('keydown', handleKeyDown, { capture: true });
        };
    }, [keyPressOpen]);


    const allPeoples = [
        {
            name: 'Emily Johnson',
            picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1724422719~exp=1724426319~hmac=0ef6c552041a747907df66c476c3e7785bd05b39e09c2f54fa04367876376dfa&w=996',
            email: 'emily.johnson@example.com',
            emailCount: 12,
            fileCount: null
        },
        {
            name: 'Michael Brown',
            picture: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724422850~exp=1724426450~hmac=7a97c16dbec9136ae629c05ef06d0c108c5f768493a2cd105ed06e1e059ffca2&w=740',
            email: 'michael.brown@example.com',
            emailCount: 6,
            fileCount: 3
        },
        {
            name: 'Sophia Williams',
            picture: 'https://img.freepik.com/free-photo/front-view-smiley-business-man_23-2148479583.jpg?t=st=1724422909~exp=1724426509~hmac=dbbbe6ba54c4c4fd7201076106decb3439f1beb48102a69ce2880283680ee650&w=826',
            email: 'sophia.williams@example.com',
            emailCount: 24,
            fileCount: 10
        },
        {
            name: 'James Smith',
            picture: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1724422836~exp=1724426436~hmac=170d19af0485e5196848d41f6a7298d320fec8ce665445c9f37ac9ee537bedfc&w=826',
            email: 'james.smith@example.com',
            emailCount: 5,
            fileCount: null
        },
        {
            name: 'Olivia Davis',
            picture: 'https://img.freepik.com/free-photo/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755.jpg?t=st=1724423006~exp=1724426606~hmac=616b0852a84a45ed1da08a2100bb732bc690b807d840e4cf02a0880aff3d7e68&w=996',
            email: 'olivia.davis@example.com',
            emailCount: 1,
            fileCount: 12
        },
    ]

    const locationArray = [
        { streetName: "Maple Avenue", fullLocation: "San Francisco, CA" },
        { streetName: "Elm Street", fullLocation: "Chicago, IL" },
        { streetName: "Oakwood Drive", fullLocation: "Austin, TX" },
        { streetName: "Pine Street", fullLocation: "Seattle, WA" },
        { streetName: "Cedar Lane", fullLocation: "Denver, CO" },
        { streetName: "Birch Road", fullLocation: "Miami, FL" }
    ];

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"product Search bar"} id={"product_search_bar"} />

                <p className="w-full text-text text-[1rem]">
                    A search bar designed for finding products, allowing users to enter keywords or filters to quickly locate specific items in an online store or catalog.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${productSearchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                productSearchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={()=> toggleCardView(setProductSearchbarPreview, setProductSearchbarCode, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                productSearchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={()=> toggleCardView(setProductSearchbarPreview, setProductSearchbarCode, false)}
                        >
                            Code
                        </button>
                    </div>
                    {productSearchbarPreview && (
                        <div className={` ${inputFocus ? 'pb-18' : 'pb-8'} p-8 transition-all duration-300 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className="relative w-full 640px:w-[80%] product_search_input">
                                <input className='px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary' placeholder='Search...' onChange={(e)=>setInputText(e.target.value)} onClick={()=>setInputFocus(true)}/>
                                <IoIosSearch className='absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]'/>

                                        <div className={`${inputFocus ? 'opacity-100 h-auto translate-y-0 mt-2' : 'translate-y-[-10px] opacity-0 h-0'} product_search_bar bg-white boxShadow w-full transition-all duration-500 overflow-hidden flex flex-col rounded-md`}>

                                            {
                                                filteredData?.map((product)=> (
                                                    <div key={product?.id}
                                                        className='flex items-center justify-between w-full px-6 py-4 hover:bg-gray-50 cursor-pointer rounded-md'>
                                                        <div className='flex items-center gap-[10px]'>
                                                            <img src={product?.image}
                                                                 alt='product/image'
                                                                 className='w-[30px] h-[30px] object-cover'/>
                                                            <h1 className='text-[0.9rem] 640px:text-[1.1rem] text-gray-700 font-[400]'>{truncate(product?.name, 60)}</h1>
                                                        </div>
                                                        <GoLinkExternal className='text-[1.3rem] text-gray-400'/>
                                                    </div>
                                                ))
                                            }

                                            {
                                                !filteredData?.length && (
                                                    <p className='text-[0.9rem] py-3 text-[#a0a0a0] text-center'>No search matched!</p>
                                                )
                                            }

                                        </div>
                            </div>

                        </div>
                    )}

                    {productSearchbarCode && <BlocksShowCode code='
import React, {useEffect, useState} from "react";

// react icons
import {IoIosSearch} from "react-icons/io";
import {GoLinkExternal} from "react-icons/go";

const ResponsiveSearchbar = () => {

    const productsData = [
        {
            id: 1,
            name: "Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"",
            image: "https://i.ibb.co/d4jgmFW/01.png",
            productLink:""
        },
        {
            id: 2,
            name: "Mobile Phone Nokia 8210, Dual SIM, 4G",
            image: "https://i.ibb.co/fCpcnhM/02.png",
            productLink:""
        },
        {
            id: 3,
            name: "SONY SRSXV900, Wireless Party Speaker, MEGA BASS",
            image: "https://i.ibb.co/2dYkwd3/03-1.png",
            productLink:""
        },
        {
            id: 4,
            name: "Headphones, Noise cancelling, Bluetooth 5.0",
            image: "https://i.ibb.co/f8xPk0G/04-1.png",
            productLink:""
        },
        {
            id: 5,
            name: "D-SLR Canon EOS R10, 4k, DIGIC X, RF-S 18-45mm",
            image: "https://i.ibb.co/dg7FmKY/05-1.png",
            productLink:""
        },
    ]

    const [filteredData, setFilteredData] = useState(productsData)
    const [inputText, setInputText] = useState("")
    const [inputFocus, setInputFocus] = useState(true)

    useEffect(() => {
        const filtered = productsData?.filter((product)=> {
            if(inputText === ""){
                return productsData
            }else {
                return product?.name.toLowerCase().includes(inputText)
            }
        })

        setFilteredData(filtered)

    }, [inputText]);


    function truncate(text, maxLength, ellipsis = "...") {
        if (text?.length <= maxLength) {
            return text;
        }
        return text?.slice(0, maxLength - ellipsis?.length) + ellipsis;
    }


    return (
        <div className="relative w-full sm:w-[80%] product_search_input">
            <input
                className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
                placeholder="Search..." onChange={(e) => setInputText(e.target.value)}
                onClick={() => setInputFocus(true)}/>
            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]"/>

            <div
                className={`${inputFocus ? "opacity-100 h-auto translate-y-0 mt-2" : "translate-y-[-10px] opacity-0 h-0"} product_search_bar bg-white boxShadow w-full transition-all duration-500 overflow-hidden flex flex-col rounded-md`}>

                {
                    filteredData?.map((product) => (
                        <div key={product?.id}
                             className="flex items-center justify-between w-full px-6 py-4 hover:bg-gray-50 cursor-pointer rounded-md">
                            <div className="flex items-center gap-[10px]">
                                <img src={product?.image}
                                     alt="product/image"
                                     className="w-[30px] h-[30px] object-cover"/>
                                <h1 className="text-[0.9rem] sm:text-[1.1rem] text-gray-700 font-[400]">{truncate(product?.name, 60)}</h1>
                            </div>
                            <GoLinkExternal className="text-[1.3rem] text-gray-400"/>
                        </div>
                    ))
                }

                {
                    !filteredData?.length && (
                        <p className="text-[0.9rem] py-3 text-[#a0a0a0] text-center">No search matched!</p>
                    )
                }

            </div>
        </div>
    );
};

export default ResponsiveSearchbar;
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"Search bar with actions"} id={"search_bar_with_actions"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A search bar that includes additional action buttons, such as filters or submit, enabling users to refine their search or trigger specific actions.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${searchbarWithActionPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                searchbarWithActionPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={()=> toggleCardView(setSearchbarWithActionPreview, setSearchbarWithActionCode, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                searchbarWithActionCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={()=> toggleCardView(setSearchbarWithActionPreview, setSearchbarWithActionCode, false)}
                        >
                            Code
                        </button>
                    </div>
                    {searchbarWithActionPreview && (
                        <div className={` ${inputFocus ? 'pb-18' : 'pb-8'} p-8 transition-all duration-300 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className="relative w-full 640px:w-[80%] product_search_input">
                                <input className='px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary' placeholder='Search...' onClick={()=>setActionSearch(true)}/>
                                <IoIosSearch className='absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]'/>

                                <div className={`${actionSearch ? 'opacity-100 h-auto translate-y-0 mt-2' : 'translate-y-[-10px] opacity-0 h-0'} product_search_bar bg-white boxShadow w-full transition-all duration-500 overflow-hidden flex flex-col rounded-md`}>

                                    <div>

                                        <div className='p-4'>
                                            {/* searching for section */}
                                            <p className='text-[0.9rem] text-gray-500'>Searching for</p>
                                            <div className='flex items-center gap-[10px] flex-wrap mt-2'>
                                                <div className='py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer'>
                                                    <p>Articles</p>
                                                    <RxCross2 className='cursor-pointer hover:text-red-500'/>
                                                </div>
                                                <div className='py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer'>
                                                    <p>Locations</p>
                                                    <RxCross2 className='cursor-pointer hover:text-red-500'/>
                                                </div>
                                                <div className='py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer'>
                                                    <p>Contacts</p>
                                                    <RxCross2 className='cursor-pointer hover:text-red-500'/>
                                                </div>
                                                <div className='py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer'>
                                                    <p>Add new</p>
                                                    <FaPlus className='cursor-pointer hover:text-green-500'/>
                                                </div>
                                            </div>

                                            {/* recent search section */}
                                            <div className='border-t border-gray-200 mt-5 pt-[15px]'>
                                                <p className='text-[0.9rem] text-gray-500'>Recent</p>

                                                <div className='mt-4'>
                                                    {
                                                        recentsData?.map((data,index)=> (
                                                            <div key={index}
                                                                 className='flex items-center justify-between w-full hover:bg-gray-50 p-[8px] rounded-md cursor-pointer'>
                                                                <div className='flex items-center gap-[10px]'>
                                                                    <div className={`${data?.background_color} ${data?.text_color} rounded-full p-[13px] text-[1rem]`}>
                                                                        {data?.icon}
                                                                    </div>
                                                                    <h3 className='text-[0.9rem] 640px:text-[1rem]'>{data?.title}</h3>
                                                                    <div
                                                                        className='py-[2px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.6rem] flex items-center gap-[5px]'>
                                                                        <p>{data?.tag}</p>
                                                                    </div>
                                                                </div>
                                                                <BsThreeDotsVertical
                                                                    className='text-gray-500 text-[1.7rem] cursor-pointer p-[5px] hover:bg-gray-100 rounded-full'/>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* bottom section */}
                                        <div className='p-[10px] bg-gray-100 flex items-center gap-[15px] flex-wrap'>
                                            <div className='flex items-center gap-[10px] cursor-pointer'>
                                                <MdOutlineExplore className='p-[5px] text-[2rem] text-gray-500 rounded-full border border-gray-300 bg-white'/>
                                                <h3 className='text-[1rem] text-gray-700'>Explore trending topics</h3>
                                            </div>
                                            <div className='flex items-center gap-[10px] cursor-pointer'>
                                                <GrSchedule className='p-[5px] text-[2rem] text-gray-500 rounded-full border border-gray-300 bg-white'/>
                                                <h3 className='text-[1rem] text-gray-700'>Schedule appointment</h3>
                                            </div>
                                            <div className='flex items-center gap-[10px] cursor-pointer'>
                                                <MdOutlineFindInPage className='p-[5px] text-[2rem] text-gray-500 rounded-full border border-gray-300 bg-white'/>
                                                <h3 className='text-[1rem] text-gray-700'>Find a contact</h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )}

                    {searchbarWithActionCode && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {IoIosSearch, IoMdContact} from "react-icons/io";
import {RxCross2} from "react-icons/rx";
import {FaPlus} from "react-icons/fa6";
import {BsThreeDotsVertical} from "react-icons/bs";
import {MdOutlineExplore, MdOutlineFindInPage} from "react-icons/md";
import {GrSchedule} from "react-icons/gr";
import {IoAnalytics} from "react-icons/io5";
import {SlDirections} from "react-icons/sl";
import {RiComputerLine} from "react-icons/ri";

const ResponsiveSearchbar = () => {

    const [inputFocus, setInputFocus] = useState(true)

    const recentsData = [
        {
            title: "Marketing & Strategy Analytics",
            icon: <IoAnalytics/>,
            tag: "Article",
            background_color: "bg-red-100",
            text_color: "text-red-500"
        },
        {
            title: "Direction to XYZ location",
            icon: <SlDirections/>,
            tag: "Location",
            background_color: "bg-orange-100",
            text_color: "text-orange-500"
        },
        {
            title: "Upcoming meeting details",
            icon: <RiComputerLine/>,
            tag: "Meeting",
            background_color: "bg-green-100",
            text_color: "text-green-500"
        },
        {
            title: "Contact Jhon Deo",
            icon: <IoMdContact/>,
            tag: "Articles",
            background_color: "bg-blue-100",
            text_color: "text-blue-500"
        },
    ]


    return (
        <div className="relative w-full sm:w-[80%] product_search_input">
            <input
                className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary"
                placeholder="Search..." onClick={() => setInputFocus(true)}/>
            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]"/>

            <div
                className={`${inputFocus ? "opacity-100 h-auto translate-y-0 mt-2" : "translate-y-[-10px] opacity-0 h-0"} product_search_bar bg-white boxShadow w-full transition-all duration-500 overflow-hidden flex flex-col rounded-md`}>

                <div>

                    <div className="p-4">
                        {/* searching for section */}
                        <p className="text-[0.9rem] text-gray-500">Searching for</p>
                        <div className="flex items-center gap-[10px] flex-wrap mt-2">
                            <div
                                className="py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer">
                                <p>Articles</p>
                                <RxCross2 className="cursor-pointer hover:text-red-500"/>
                            </div>
                            <div
                                className="py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer">
                                <p>Locations</p>
                                <RxCross2 className="cursor-pointer hover:text-red-500"/>
                            </div>
                            <div
                                className="py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer">
                                <p>Contacts</p>
                                <RxCross2 className="cursor-pointer hover:text-red-500"/>
                            </div>
                            <div
                                className="py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer">
                                <p>Add new</p>
                                <FaPlus className="cursor-pointer hover:text-green-500"/>
                            </div>
                        </div>

                        {/* recent search section */}
                        <div className="border-t border-gray-200 mt-5 pt-[15px]">
                            <p className="text-[0.9rem] text-gray-500">Recent</p>

                            <div className="mt-4">
                                {
                                    recentsData?.map((data, index) => (
                                        <div key={index}
                                             className="flex items-center justify-between w-full hover:bg-gray-50 p-[8px] rounded-md cursor-pointer">
                                            <div className="flex items-center gap-[10px]">
                                                <div
                                                    className={`${data?.background_color} ${data?.text_color} rounded-full p-[13px] text-[1rem]`}>
                                                    {data?.icon}
                                                </div>
                                                <h3 className="text-[0.9rem] sm:text-[1rem]">{data?.title}</h3>
                                                <div
                                                    className="py-[2px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.6rem] flex items-center gap-[5px]">
                                                    <p>{data?.tag}</p>
                                                </div>
                                            </div>
                                            <BsThreeDotsVertical
                                                className="text-gray-500 text-[1.7rem] cursor-pointer p-[5px] hover:bg-gray-100 rounded-full"/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* bottom section */}
                    <div className="p-[10px] bg-gray-100 flex items-center gap-[15px] flex-wrap">
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <MdOutlineExplore
                                className="p-[5px] text-[2rem] text-gray-500 rounded-full border border-gray-300 bg-white"/>
                            <h3 className="text-[1rem] text-gray-700">Explore trending topics</h3>
                        </div>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <GrSchedule
                                className="p-[5px] text-[2rem] text-gray-500 rounded-full border border-gray-300 bg-white"/>
                            <h3 className="text-[1rem] text-gray-700">Schedule appointment</h3>
                        </div>
                        <div className="flex items-center gap-[10px] cursor-pointer">
                            <MdOutlineFindInPage
                                className="p-[5px] text-[2rem] text-gray-500 rounded-full border border-gray-300 bg-white"/>
                            <h3 className="text-[1rem] text-gray-700">Find a contact</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResponsiveSearchbar;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Search bar open with keypress"} id={"search_bar_open_with_keypress"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A search bar that activates or expands when a key is pressed, allowing users to quickly access search functionality without clicking.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${keypressOpenSearchbarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                keypressOpenSearchbarPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={()=> toggleCardView(setKeypressOpenSearchbarPreview, setKeypressOpenSearchbarCode, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                keypressOpenSearchbarCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={()=> toggleCardView(setKeypressOpenSearchbarPreview, setKeypressOpenSearchbarCode, false)}
                        >
                            Code
                        </button>
                    </div>
                    {keypressOpenSearchbarPreview && (
                        <div className={` ${inputFocus ? 'pb-18' : 'pb-8'} p-8 transition-all duration-300 flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className="relative w-full 640px:w-[80%] product_search_input">
                                <input className='px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none' placeholder='Search...' onClick={()=>setKeyPressOpen(true)}/>
                                <IoIosSearch className='absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]'/>

                                {/* shortcut hint */}
                                <div className='absolute top-[5px] right-1.5 text-[0.6rem] font-bold border border-gray-100 p-[8px] rounded-md text-gray-500'>
                                    Ctrl + E
                                </div>

                                <div className={`${keyPressOpen ? 'opacity-100 h-auto translate-y-0 mt-2' : 'translate-y-[-10px] opacity-0 h-0'} product_search_bar bg-white border border-gray-200 w-full transition-all duration-500 overflow-hidden flex flex-col rounded-md`}>

                                    <div>
                                        <div className='p-4'>

                                            {/* last search section */}
                                            <p className='text-[0.9rem] text-gray-500'>Last Search</p>
                                            <div className='flex items-center gap-[10px] flex-wrap mt-2'>
                                                <div className='py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer'>
                                                    <p>Programming</p>
                                                    <RxCross2 className='cursor-pointer hover:text-red-500'/>
                                                </div>
                                                <div className='py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer'>
                                                    <p>ZenUI Library</p>
                                                    <RxCross2 className='cursor-pointer hover:text-red-500'/>
                                                </div>
                                                <div className='py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer'>
                                                    <p>Templates</p>
                                                    <RxCross2 className='cursor-pointer hover:text-red-500'/>
                                                </div>
                                                <div className='py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer'>
                                                    <p>Blocks</p>
                                                    <RxCross2 className='cursor-pointer hover:text-red-500'/>
                                                </div>
                                            </div>

                                            {/* peoples section */}
                                            <div className='border-t border-gray-200 mt-5 pt-[15px]'>
                                                <p className='text-[0.9rem] text-gray-500'>Peoples <span className='text-[0.8rem] text-gray-400'>(8)</span></p>

                                                <div className='mt-4 h-[300px] overflow-y-auto'>
                                                    {
                                                        allPeoples?.map((people, index)=> (
                                                            <div key={index}
                                                                className='flex flex-wrap gap-[10px] items-center justify-between w-full hover:bg-gray-100 p-[10px] cursor-pointer rounded-md group'>
                                                                <div className='flex items-center gap-[15px]'>
                                                                    <img
                                                                        src={people.picture}
                                                                        alt='avatar'
                                                                        className='w-[50px] h-[50px] rounded-full object-cover'/>
                                                                    <div>
                                                                        <h3 className='text-[1.1rem] font-[500] text-gray-800'>{people.name}</h3>
                                                                        <p className='text-[0.8rem] break-all text-gray-500'>{people.email}</p>
                                                                    </div>
                                                                </div>

                                                                <div
                                                                    className='flex items-center gap-[10px] z-[-1] opacity-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-300'>
                                                                    <div
                                                                        className='flex items-center gap-[5px] rounded-full bg-white border py-[2px] cursor-pointer px-2 border-gray-200 text-[0.8rem] text-gray-500'>
                                                                        <MdOutlineEmail className='text-[1rem]'/>
                                                                        {people.emailCount}
                                                                    </div>
                                                                    {
                                                                        people.fileCount && (
                                                                            <div
                                                                                className='flex items-center gap-[5px] rounded-full bg-white border py-[2px] cursor-pointer px-2 border-gray-200 text-[0.8rem] text-gray-500'>
                                                                                <FaRegFile className='text-[0.9rem]'/>
                                                                                {people.fileCount}
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        {/* Listing section */}
                                        <div className='border-t border-gray-200 mt-3 pt-[15px] p-[20px]'>
                                            <p className='text-[0.9rem] text-gray-500'>Listing <span className='text-[0.8rem] text-gray-400'>(5)</span></p>

                                            <div className='mt-4 h-[200px] overflow-y-auto'>
                                                {
                                                    locationArray?.map((location, index)=> (
                                                        <div key={index}
                                                             className='flex items-center justify-between w-full hover:bg-gray-100 p-[10px] cursor-pointer rounded-md group'>
                                                            <div className='flex items-center gap-[15px]'>
                                                                <div className='w-[40px] h-[40px] rounded-full border border-gray-300 flex items-center justify-center'>
                                                                    <PiBuildings className='text-[1.4rem] text-gray-600'/>
                                                                </div>
                                                                <div>
                                                                    <h3 className='text-[1.1rem] font-[500] text-gray-800'>{location.streetName}</h3>
                                                                    <p className='text-[0.8rem] text-gray-500'>{location.fullLocation}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    )}

                    {keypressOpenSearchbarCode && <BlocksShowCode code='
import React, {useEffect, useState} from "react";

// react icons
import {IoIosSearch} from "react-icons/io";
import {RxCross2} from "react-icons/rx";
import {MdOutlineEmail} from "react-icons/md";
import {FaRegFile} from "react-icons/fa";
import {PiBuildings} from "react-icons/pi";

const ResponsiveSearchbar = () => {

    const [inputFocus, setInputFocus] = useState(true)

    const allPeoples = [
        {
            name: "Emily Johnson",
            picture: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1724422719~exp=1724426319~hmac=0ef6c552041a747907df66c476c3e7785bd05b39e09c2f54fa04367876376dfa&w=996",
            email: "emily.johnson@example.com",
            emailCount: 12,
            fileCount: null
        },
        {
            name: "Michael Brown",
            picture: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1724422850~exp=1724426450~hmac=7a97c16dbec9136ae629c05ef06d0c108c5f768493a2cd105ed06e1e059ffca2&w=740",
            email: "michael.brown@example.com",
            emailCount: 6,
            fileCount: 3
        },
        {
            name: "Sophia Williams",
            picture: "https://img.freepik.com/free-photo/front-view-smiley-business-man_23-2148479583.jpg?t=st=1724422909~exp=1724426509~hmac=dbbbe6ba54c4c4fd7201076106decb3439f1beb48102a69ce2880283680ee650&w=826",
            email: "sophia.williams@example.com",
            emailCount: 24,
            fileCount: 10
        },
        {
            name: "James Smith",
            picture: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?t=st=1724422836~exp=1724426436~hmac=170d19af0485e5196848d41f6a7298d320fec8ce665445c9f37ac9ee537bedfc&w=826",
            email: "james.smith@example.com",
            emailCount: 5,
            fileCount: null
        },
        {
            name: "Olivia Davis",
            picture: "https://img.freepik.com/free-photo/indoor-studio-shot-attractive-beautiful-pretty-young-woman-wearing-eyeglasses-yellow-sweatshirt-having-long-fair-hair-posing-isolated-pink-wall-people-emotions-concept_176532-6755.jpg?t=st=1724423006~exp=1724426606~hmac=616b0852a84a45ed1da08a2100bb732bc690b807d840e4cf02a0880aff3d7e68&w=996",
            email: "olivia.davis@example.com",
            emailCount: 1,
            fileCount: 12
        },
    ]

    const locationArray = [
        { streetName: "Maple Avenue", fullLocation: "San Francisco, CA" },
        { streetName: "Elm Street", fullLocation: "Chicago, IL" },
        { streetName: "Oakwood Drive", fullLocation: "Austin, TX" },
        { streetName: "Pine Street", fullLocation: "Seattle, WA" },
        { streetName: "Cedar Lane", fullLocation: "Denver, CO" },
        { streetName: "Birch Road", fullLocation: "Miami, FL" }
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === "e") {
                event.preventDefault(); // Prevent browser"s default search bar opening
                setInputFocus(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown, { capture: true }); // Capture phase added

        return () => {
            window.removeEventListener("keydown", handleKeyDown, { capture: true });
        };
    }, [inputFocus]);

    return (
        <div className="relative w-full sm:w-[80%] product_search_input">
            <input className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none"
                   placeholder="Search..." onClick={() => setInputFocus(true)}/>
            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]"/>

            {/* shortcut hint */}
            <div
                className="absolute top-[5px] right-1.5 text-[0.6rem] font-bold border border-gray-100 p-[8px] rounded-md text-gray-500">
                Ctrl + E
            </div>

            <div
                className={`${inputFocus ? "opacity-100 h-auto translate-y-0 mt-2" : "translate-y-[-10px] opacity-0 h-0"} product_search_bar bg-white border border-gray-200 w-full transition-all duration-500 overflow-hidden flex flex-col rounded-md`}>

                <div>
                    <div className="p-4">

                        {/* last search section */}
                        <p className="text-[0.9rem] text-gray-500">Last Search</p>
                        <div className="flex items-center gap-[10px] flex-wrap mt-2">
                            <div
                                className="py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer">
                                <p>Programming</p>
                                <RxCross2 className="cursor-pointer hover:text-red-500"/>
                            </div>
                            <div
                                className="py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer">
                                <p>ZenUI Library</p>
                                <RxCross2 className="cursor-pointer hover:text-red-500"/>
                            </div>
                            <div
                                className="py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer">
                                <p>Templates</p>
                                <RxCross2 className="cursor-pointer hover:text-red-500"/>
                            </div>
                            <div
                                className="py-[5px] px-[10px] rounded-full border border-gray-300 text-gray-500 text-[0.7rem] flex items-center gap-[5px] hover:hover:bg-gray-50 cursor-pointer">
                                <p>Blocks</p>
                                <RxCross2 className="cursor-pointer hover:text-red-500"/>
                            </div>
                        </div>

                        {/* peoples section */}
                        <div className="border-t border-gray-200 mt-5 pt-[15px]">
                            <p className="text-[0.9rem] text-gray-500">Peoples <span
                                className="text-[0.8rem] text-gray-400">(8)</span></p>

                            <div className="mt-4 h-[300px] overflow-y-auto">
                                {
                                    allPeoples?.map((people, index) => (
                                        <div key={index}
                                             className="flex flex-wrap gap-[10px] items-center justify-between w-full hover:bg-gray-100 p-[10px] cursor-pointer rounded-md group">
                                            <div className="flex items-center gap-[15px]">
                                                <img
                                                    src={people.picture}
                                                    alt="avatar"
                                                    className="w-[50px] h-[50px] rounded-full object-cover"/>
                                                <div>
                                                    <h3 className="text-[1.1rem] font-[500] text-gray-800">{people.name}</h3>
                                                    <p className="text-[0.8rem] break-all text-gray-500">{people.email}</p>
                                                </div>
                                            </div>

                                            <div
                                                className="flex items-center gap-[10px] z-[-1] opacity-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-300">
                                                <div
                                                    className="flex items-center gap-[5px] rounded-full bg-white border py-[2px] cursor-pointer px-2 border-gray-200 text-[0.8rem] text-gray-500">
                                                    <MdOutlineEmail className="text-[1rem]"/>
                                                    {people.emailCount}
                                                </div>
                                                {
                                                    people.fileCount && (
                                                        <div
                                                            className="flex items-center gap-[5px] rounded-full bg-white border py-[2px] cursor-pointer px-2 border-gray-200 text-[0.8rem] text-gray-500">
                                                            <FaRegFile className="text-[0.9rem]"/>
                                                            {people.fileCount}
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    {/* Listing section */}
                    <div className="border-t border-gray-200 mt-3 pt-[15px] p-[20px]">
                        <p className="text-[0.9rem] text-gray-500">Listing <span
                            className="text-[0.8rem] text-gray-400">(5)</span></p>

                        <div className="mt-4 h-[200px] overflow-y-auto">
                            {
                                locationArray?.map((location, index) => (
                                    <div key={index}
                                         className="flex items-center justify-between w-full hover:bg-gray-100 p-[10px] cursor-pointer rounded-md group">
                                        <div className="flex items-center gap-[15px]">
                                            <div
                                                className="w-[40px] h-[40px] rounded-full border border-gray-300 flex items-center justify-center">
                                                <PiBuildings className="text-[1.4rem] text-gray-600"/>
                                            </div>
                                            <div>
                                                <h3 className="text-[1.1rem] font-[500] text-gray-800">{location.streetName}</h3>
                                                <p className="text-[0.8rem] text-gray-500">{location.fullLocation}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ResponsiveSearchbar;
                    '/>
                    }
                </div>

                <BlocksFooter backUrl='/blocks/empty-page' backName='empty page' forwardName='responsive sidebar' forwardUrl='/blocks/responsive-sidebar'/>
            </div>


            <Helmet>
                <title>Blocks - Responsive Searchbar</title>
            </Helmet>
        </aside>
    );
};

export default ResponsiveSearchbar;
