import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import {MdKeyboardArrowDown} from "react-icons/md";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const Breadcrumb = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // non clickable
    const [nonClickablePreview, setNonClickablePreview] = useState(true);
    const [nonClickableCode, setNonClickableCode] = useState(false);

    const handleNonClickablePreview = () => {
        setNonClickablePreview(true);
        setNonClickableCode(false);
    };

    const handleNonClickableCode = () => {
        setNonClickableCode(true);
        setNonClickablePreview(false);
    };

    // clickable
    const [clickablePreview, setClickablePreview] = useState(true);
    const [clickableCode, setClickableCode] = useState(false);

    const handleClickablePreview = () => {
        setClickablePreview(true);
        setClickableCode(false);
    };

    const handleClickableCode = () => {
        setClickableCode(true);
        setClickablePreview(false);
    };

    const handleAvatarChipCode = () => {
        setAvatarChipCode(true);
        setAvatarChipPreview(false);
    };

    // dropdown breadcrumb
    const [dropdownBreadcrumbPreview, setDropdownBreadcrumbPreview] = useState(true);
    const [dropdownBreadcrumbCode, setDropdownBreadcrumbCode] = useState(false);

    const handleDropdownBreadcrumbPreview = () => {
        setDropdownBreadcrumbPreview(true);
        setDropdownBreadcrumbCode(false);
    };

    const handleDropdownBreadcrumbCode = () => {
        setDropdownBreadcrumbCode(true);
        setDropdownBreadcrumbPreview(false);
    };

    // customizable breadcrumb
    const [customizableBreadcrumbPreview, setCustomizableBreadcrumbPreview] = useState(true);
    const [customizableBreadcrumbCode, setCustomizableBreadcrumbCode] = useState(false);

    const handleCustomizableBreadcrumbPreview = () => {
        setCustomizableBreadcrumbPreview(true);
        setCustomizableBreadcrumbCode(false);
    };

    const handleCustomizableBreadcrumbCode = () => {
        setCustomizableBreadcrumbCode(true);
        setCustomizableBreadcrumbPreview(false);
    };

    const nonClickableItems = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Category',
            path: '/category'
        },
        {
            label: 'Sub Category',
            path: '/sub-category'
        },
        {
            label: 'Current Page',
            path: '/current-page'
        },

    ]

    const dropdownBreadcrumbArray = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Category',
            path: '/category'
        },
        {
            label: 'Sub Category',
            path: '/sub-category'
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        },
        {
            label: 'Current Page',
            path: '/current-page'
        },

    ]

    const [dropdownOpen, setDropdownOpen] = useState(false)

    document.addEventListener('click', (e)=> {
        if(!e.target.closest('.dropdownModal') && !e.target.closest('.dropdownButton')){
            setDropdownOpen(false)
        }
    })

    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader text={"non clickable breadcrumb"} id={"non_clickable_breadcrumb"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A breadcrumb navigation that displays the user's path but with non-clickable links, serving as a visual guide without interactive functionality.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${nonClickablePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    nonClickablePreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleNonClickablePreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    nonClickableCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleNonClickableCode}
                            >
                                Code
                            </button>
                        </div>
                        {nonClickablePreview && (
                            <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">
                                <ol className='flex items-center gap-[5px]'>
                                    {
                                        nonClickableItems?.map((item, index) => (
                                            <>
                                                <li key={index}
                                                    className={`text-[0.9rem] text-text ${index === nonClickableItems.length - 1 && '!text-primary'}`}>{item.label}</li>
                                                {
                                                    index !== nonClickableItems.length - 1 && (
                                                        <MdKeyboardArrowDown className='rotate-[-90deg] text-[0.9rem]'/>
                                                    )
                                                }
                                            </>
                                        ))
                                    }
                                </ol>
                            </div>
                        )}

                        {nonClickableCode && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {MdKeyboardArrowDown} from "react-icons/md";

const Breadcrumb = () => {

    const breadcrumbItems = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Category",
            path: "/category"
        },
        {
            label: "Sub Category",
            path: "/sub-category"
        },
        {
            label: "Current Page",
            path: "/current-page"
        },

    ]

    return (
        <ol className="flex items-center gap-[5px]">
            {
                breadcrumbItems?.map((item, index) => (
                    <>
                        <li key={index}
                            className={`text-[0.9rem] text-text ${index === breadcrumbItems.length - 1 && "!text-primary"}`}>{item.label}</li>
                        {
                            index !== breadcrumbItems.length - 1 && (
                                <MdKeyboardArrowDown className="rotate-[-90deg] text-[0.9rem]"/>
                            )
                        }
                    </>
                ))
            }
        </ol>
    );
};

export default Breadcrumb;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={"clickable breadcrumb"} id={"clickable_breadcrumb"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A breadcrumb navigation with clickable links, allowing users to easily navigate back to previous pages or sections.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${clickablePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    clickablePreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleClickablePreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    clickableCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleClickableCode}
                            >
                                Code
                            </button>
                        </div>
                        {clickablePreview && (
                            <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">
                                <div className='flex items-center gap-[5px]'>
                                    {
                                        nonClickableItems?.map((item, index) => (
                                            <>
                                                <a key={index} href={item.path}
                                                   className={`text-[0.9rem] text-text hover:underline ${index === nonClickableItems.length - 1 && '!text-primary'}`}>{item.label}</a>
                                                {
                                                    index !== nonClickableItems.length - 1 && (
                                                        <MdKeyboardArrowDown className='rotate-[-90deg] text-[0.9rem]'/>
                                                    )
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {clickableCode && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {MdKeyboardArrowDown} from "react-icons/md";

const Breadcrumb = () => {

    const breadcrumbItems = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Category",
            path: "/category"
        },
        {
            label: "Sub Category",
            path: "/sub-category"
        },
        {
            label: "Current Page",
            path: "/current-page"
        },

    ]

    return (
        <div className="flex items-center gap-[5px]">
            {
                breadcrumbItems?.map((item, index) => (
                    <>
                        <a key={index} href={item.path}
                           className={`text-[0.9rem] text-text hover:underline ${index === breadcrumbItems.length - 1 && "!text-primary"}`}>{item.label}</a>
                        {
                            index !== breadcrumbItems.length - 1 && (
                                <MdKeyboardArrowDown className="rotate-[-90deg] text-[0.9rem]"/>
                            )
                        }
                    </>
                ))
            }
        </div>
    );
};

export default Breadcrumb;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={"dropdown breadcrumb"} id={"dropdown_breadcrumb"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A breadcrumb navigation with a dropdown that appears after a certain number of links, allowing users to access additional navigation options from the dropdown menu.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dropdownBreadcrumbPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    dropdownBreadcrumbPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleDropdownBreadcrumbPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    dropdownBreadcrumbCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleDropdownBreadcrumbCode}
                            >
                                Code
                            </button>
                        </div>
                        {dropdownBreadcrumbPreview && (
                            <div className={`${dropdownOpen ? 'mb-[8rem]' : 'mb-4'} p-8 flex flex-wrap items-center gap-5 justify-center transition-all duration-300`}>
                                <div className='flex items-center gap-[5px]'>
                                    {
                                        dropdownBreadcrumbArray?.slice(0,3)?.map((item, index) => (
                                            <>
                                                <a key={index} href={item.path}
                                                   className={`text-[0.9rem] text-text hover:underline ${index === nonClickableItems.length - 1 && '!text-primary'}`}>{item.label}</a>
                                                {
                                                    index !== nonClickableItems.length - 1 && (
                                                        <MdKeyboardArrowDown
                                                            className='rotate-[-90deg] text-[0.9rem]'/>
                                                    )
                                                }

                                            </>
                                        ))
                                    }

                                    <div className='relative'>
                                        <p className='dropdownButton cursor-pointer' onClick={() => setDropdownOpen(!dropdownOpen)}>....</p>

                                        <div
                                            className={`${dropdownOpen ? 'translate-y-0 opacity-100 z-30' : 'translate-y-[-20px] opacity-0 z-[-1]'} flex flex-col text-[0.8rem] bg-white boxShadow dropdownModal transition-all duration-300 rounded-md py-1 absolute top-[25px] left-[-20px] w-max`}>
                                            {
                                                dropdownBreadcrumbArray?.slice(3, dropdownBreadcrumbArray.length).map((item, index) => (
                                                    <a href={item.path} key={index} className='w-full hover:bg-gray-100 px-8 py-2 cursor-pointer'>{item.label}</a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {dropdownBreadcrumbCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {MdKeyboardArrowDown} from "react-icons/md";

const Breadcrumb = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false)

    const breadcrumbItems = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Category",
            path: "/category"
        },
        {
            label: "Sub Category",
            path: "/sub-category"
        },
        {
            label: "About Us",
            path: "/about-us"
        },
        {
            label: "Contact Us",
            path: "/contact-us"
        },
        {
            label: "Current Page",
            path: "/current-page"
        },

    ];

    document.addEventListener("click", (e)=> {
        if(!e.target.closest(".dropdownModal") && !e.target.closest(".dropdownButton")){
            setDropdownOpen(false)
        }
    })

    return (
        <div className="flex items-center gap-[5px]">
            {
                breadcrumbItems?.slice(0, 3)?.map((item, index) => (
                    <>
                        <a key={index} href={item.path}
                           className={`text-[0.9rem] text-text hover:underline ${index === breadcrumbItems.length - 1 && "!text-primary"}`}>{item.label}</a>
                        {
                            index !== breadcrumbItems.length - 1 && (
                                <MdKeyboardArrowDown
                                    className="rotate-[-90deg] text-[0.9rem]"/>
                            )
                        }

                    </>
                ))
            }

            <div className="relative">
                <p className="dropdownButton cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>....</p>

                <div
                    className={`${dropdownOpen ? "translate-y-0 opacity-100 z-30" : "translate-y-[-20px] opacity-0 z-[-1]"} flex flex-col text-[0.8rem] bg-white boxShadow dropdownModal transition-all duration-300 rounded-md py-1 absolute top-[25px] left-[-20px] w-max`}>
                    {
                        breadcrumbItems?.slice(3, breadcrumbItems.length).map((item, index) => (
                            <a href={item.path} key={index}
                               className="w-full hover:bg-gray-100 px-8 py-2 cursor-pointer">{item.label}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={"customizable breadcrumb"} id={"customizable_breadcrumb"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a basic chip component. Use it to display concise information or tags in a compact form.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${customizableBreadcrumbPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    customizableBreadcrumbPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleCustomizableBreadcrumbPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    customizableBreadcrumbCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleCustomizableBreadcrumbCode}
                            >
                                Code
                            </button>
                        </div>
                        {customizableBreadcrumbPreview && (
                            <div
                                className={`${dropdownOpen ? 'mb-[8rem]' : 'mb-4'} p-8 flex flex-wrap items-center gap-5 justify-center transition-all duration-300`}>
                                <div className='flex flex-col gap-[10px]'>
                                    <ol className='flex items-center gap-[5px] bg-blue-50 py-2.5 px-3 rounded-md'>
                                        {
                                            nonClickableItems?.map((item, index) => (
                                                <>
                                                    <li key={index}
                                                        className={`text-[0.9rem] text-blue-900 ${index === nonClickableItems.length - 1 && 'font-bold'}`}>{item.label}</li>
                                                    {
                                                        index !== nonClickableItems.length - 1 && (
                                                            <MdKeyboardArrowDown
                                                                className='rotate-[-90deg] text-blue-900 text-[0.9rem]'/>
                                                        )
                                                    }
                                                </>
                                            ))
                                        }
                                    </ol>

                                    <ol className='flex items-center gap-[5px] bg-orange-50 py-2.5 px-3 rounded-md'>
                                        {
                                            nonClickableItems?.map((item, index) => (
                                                <>
                                                    <li key={index}
                                                        className={`text-[0.9rem] text-orange-900 ${index === nonClickableItems.length - 1 && 'font-bold'}`}>{item.label}</li>
                                                    {
                                                        index !== nonClickableItems.length - 1 && (
                                                            <MdKeyboardArrowDown
                                                                className='rotate-[-90deg] text-orange-900 text-[0.9rem]'/>
                                                        )
                                                    }
                                                </>
                                            ))
                                        }
                                    </ol>

                                    <ol className='flex items-center gap-[5px] bg-green-50 py-2.5 px-3 rounded-md'>
                                        {
                                            nonClickableItems?.map((item, index) => (
                                                <>
                                                    <li key={index}
                                                        className={`text-[0.9rem] text-green-900 ${index === nonClickableItems.length - 1 && 'font-bold'}`}>{item.label}</li>
                                                    {
                                                        index !== nonClickableItems.length - 1 && (
                                                            <MdKeyboardArrowDown
                                                                className='rotate-[-90deg] text-green-900 text-[0.9rem]'/>
                                                        )
                                                    }
                                                </>
                                            ))
                                        }
                                    </ol>
                                </div>
                            </div>
                        )}

                        {customizableBreadcrumbCode && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {MdKeyboardArrowDown} from "react-icons/md";

const Breadcrumb = () => {

    const breadcrumbItems = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Category",
            path: "/category"
        },
        {
            label: "Sub Category",
            path: "/sub-category"
        },
        {
            label: "Current Page",
            path: "/current-page"
        },

    ]

    return (
        <div className="flex flex-col gap-[10px]">
            <ol className="flex items-center gap-[5px] bg-blue-50 py-2.5 px-3 rounded-md">
                {
                    breadcrumbItems?.map((item, index) => (
                        <>
                            <li key={index}
                                className={`text-[0.9rem] text-blue-900 ${index === breadcrumbItems.length - 1 && "font-bold"}`}>{item.label}</li>
                            {
                                index !== breadcrumbItems.length - 1 && (
                                    <MdKeyboardArrowDown
                                        className="rotate-[-90deg] text-blue-900 text-[0.9rem]"/>
                                )
                            }
                        </>
                    ))
                }
            </ol>

            <ol className="flex items-center gap-[5px] bg-orange-50 py-2.5 px-3 rounded-md">
                {
                    breadcrumbItems?.map((item, index) => (
                        <>
                            <li key={index}
                                className={`text-[0.9rem] text-orange-900 ${index === breadcrumbItems.length - 1 && "font-bold"}`}>{item.label}</li>
                            {
                                index !== breadcrumbItems.length - 1 && (
                                    <MdKeyboardArrowDown
                                        className="rotate-[-90deg] text-orange-900 text-[0.9rem]"/>
                                )
                            }
                        </>
                    ))
                }
            </ol>

            <ol className="flex items-center gap-[5px] bg-green-50 py-2.5 px-3 rounded-md">
                {
                    breadcrumbItems?.map((item, index) => (
                        <>
                            <li key={index}
                                className={`text-[0.9rem] text-green-900 ${index === breadcrumbItems.length - 1 && "font-bold"}`}>{item.label}</li>
                            {
                                index !== breadcrumbItems.length - 1 && (
                                    <MdKeyboardArrowDown
                                        className="rotate-[-90deg] text-green-900 text-[0.9rem]"/>
                                )
                            }
                        </>
                    ))
                }
            </ol>
        </div>
    );
};

export default Breadcrumb;
                                '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/chip' backName='chip' forwardName='rating' forwardUrl='/components/rating'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#non_clickable_breadcrumb"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Non Clickable Breadcrumb
                    </a>
                    <a
                        href="#clickable_breadcrumb"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Clickable Breadcrumb
                    </a>
                    <a
                        href="#dropdown_breadcrumb"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        Dropdown Breadcrumb
                    </a>
                    <a
                        href="#customizable_breadcrumb"
                        className={`${
                            contentActiveTab === 4 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(4)}
                    >
                        Customizable Breadcrumb
                    </a>
                    <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
                </div>
            </aside>
            <Helmet>
                <title>Navigation - Breadcrumb</title>
            </Helmet>
        </>
    );
};

export default Breadcrumb;
