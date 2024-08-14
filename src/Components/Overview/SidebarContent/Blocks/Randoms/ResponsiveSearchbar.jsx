import React, { useState,useEffect } from "react";

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


const ResponsiveSearchbar = () => {

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



    return (
        <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
            <div>
                <ContentHeader text={"Search bar"} id={"search_bar"} />

                <p className="w-full text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon clicking.
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
                        <div className={` ${basicNavbarOpen ? 'pb-56' : 'pb-8'} p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className="relative w-[80%]">
                                <input className='px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none focus:border-primary' placeholder='Search...' onChange={(e)=>setInputText(e.target.value)} onFocus={()=>setInputFocus(true)} onMouseLeave={()=> setInputFocus(false)}/>
                                <IoIosSearch className='absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]'/>

                                {
                                    inputFocus && (
                                        <div className='bg-white boxShadow py-3 w-full px-4 mt-1 rounded-md'>
                                            {
                                                filteredData?.map((data, index) => (
                                                    <p className='text-[1rem] text-text' key={index}>{data}</p>
                                                ))
                                            }
                                            {
                                                inputText === '' && (
                                                    <p className='text-[0.9rem] text-[#a0a0a0] text-center'>Search your
                                                        mind!</p>
                                                )
                                            }
                                            {
                                                filteredData.length <= 0 && inputText !== '' && (
                                                    <p className='text-[0.9rem] text-[#a0a0a0] text-center'>No search
                                                        matched!</p>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>

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

export default ResponsiveSearchbar;
