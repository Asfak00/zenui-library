import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import {MdDone, MdKeyboardArrowDown} from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";
import {BsArrowRight} from "react-icons/bs";
import {FiArrowRight} from "react-icons/fi";

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

    const handleAvatarChipCode = () => {
        setAvatarChipCode(true);
        setAvatarChipPreview(false);
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

    return (
        <>
            <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
                <div>
                    <ContentHeader text={"non clickable breadcrumb"} id={"non_clickable_breadcrumb"} />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a basic chip component. Use it to display concise information or tags in a compact form.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${nonClickablePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
                                onClick={handleAvatarChipCode}
                            >
                                Code
                            </button>
                        </div>
                        {nonClickablePreview && (
                            <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">
                                <ol className='flex items-center gap-[5px]'>
                                    {
                                        nonClickableItems?.map((item, index)=> (
                                            <>
                                                <li key={index} className={`text-[0.9rem] text-text ${index === nonClickableItems.length - 1 && '!text-primary'}`}>{item.label}</li>
                                                {
                                                    index > 0 && index !== nonClickableItems.length - 1 && (
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
                                code=''
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={"clickable breadcrumb"} id={"clickable_breadcrumb"} />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a basic chip component. Use it to display concise information or tags in a compact form.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${nonClickablePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
                                onClick={handleAvatarChipCode}
                            >
                                Code
                            </button>
                        </div>
                        {nonClickablePreview && (
                            <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">
                                <div className='flex items-center gap-[5px]'>
                                    {
                                        nonClickableItems?.map((item, index)=> (
                                            <>
                                                <a key={index} href={item.path} className={`text-[0.9rem] text-text ${index === nonClickableItems.length - 1 && '!text-primary'}`}>{item.label}</a>
                                                {
                                                    index > 0 && index !== nonClickableItems.length - 1 && (
                                                        <MdKeyboardArrowDown className='rotate-[-90deg] text-[0.9rem]'/>
                                                    )
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        )}

                        {nonClickableCode && (
                            <Showcode
                                code=''
                            />
                        )}
                    </div>

                    <OverviewFooter/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[40%]">
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
                </div>
            </aside>
            <Helmet>
                <title>Navigation - Chip</title>
            </Helmet>
        </>
    );
};

export default Breadcrumb;
