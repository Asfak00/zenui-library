import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { MdDone } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const ProgressBar = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // basic progress bar
    const [basicProgressBarPreview, setBasicProgressBarPreview] = useState(true);
    const [basicProgressBarCode, setBasicProgressBarCode] = useState(false);

    const handleBasicProgressBarPreview = () => {
        setBasicProgressBarPreview(true);
        setBasicProgressBarCode(false);
    };

    const handleBasicProgressBarCode = () => {
        setBasicProgressBarCode(true);
        setBasicProgressBarPreview(false);
    };

    // progress with tooltip
    const [progressBarWithTooltipPreview, setProgressBarWithTooltipPreview] = useState(true);
    const [progressBarWithTooltipCode, setProgressBarWithTooltipCode] = useState(false);

    const handleProgressBarWithTooltipPreview = () => {
        setProgressBarWithTooltipPreview(true);
        setProgressBarWithTooltipCode(false);
    };

    const handleProgressBarWithTooltipCode = () => {
        setProgressBarWithTooltipCode(true);
        setProgressBarWithTooltipPreview(false);
    };

    // icon chip
    const [iconChipPreview, setIconChipPreview] = useState(true);
    const [iconChipCode, setIconChipCode] = useState(false);

    const handleIconChipPreview = () => {
        setIconChipPreview(true);
        setIconChipCode(false);
    };

    const handleIconChipCode = () => {
        setIconChipCode(true);
        setIconChipPreview(false);
    };

    // avatar chip
    const [avatarChipPreview, setAvatarChipPreview] = useState(true);
    const [avatarChipCode, setAvatarChipCode] = useState(false);

    const handleAvatarChipPreview = () => {
        setAvatarChipPreview(true);
        setAvatarChipCode(false);
    };

    const handleAvatarChipCode = () => {
        setAvatarChipCode(true);
        setAvatarChipPreview(false);
    };

    return (
        <>
            <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
                <div>
                    <ContentHeader text={"basic progress bar"} id={"basic_progress_bar"} />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a basic chip component. Use it to display concise information or tags in a compact form.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${basicProgressBarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    basicProgressBarPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBasicProgressBarPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    basicProgressBarCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBasicProgressBarCode}
                            >
                                Code
                            </button>
                        </div>
                        {basicProgressBarPreview && (
                            <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">
                               <div className='relative bg-gray-200 w-[80%] h-[15px] rounded-full'>
                                   <div className='absolute top-0 left-0 bg-primary w-[80%] h-full rounded-full'></div>
                               </div>
                            </div>
                        )}

                        {basicProgressBarCode && (
                            <Showcode
                                code=''
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"progress bar with tooltip"} id={"progress_bar_with_tooltip"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a chip component with multiple variants like bordered and background
                        color options for versatile styling.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${progressBarWithTooltipPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    progressBarWithTooltipPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleProgressBarWithTooltipPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    progressBarWithTooltipCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleProgressBarWithTooltipCode}
                            >
                                Code
                            </button>
                        </div>
                        {progressBarWithTooltipPreview && (
                            <div className="p-8 mb-4 mt-8 flex flex-wrap items-start gap-5 justify-center">
                                <div className='relative bg-gray-200 w-[80%] h-[15px] rounded-full'>
                                    <div className='bg-primary rounded-[5px] absolute top-[-40px] text-white px-2 py-0.5 right-[20%] before:w-[8px] before:h-[8px] before:bg-primary before:absolute before:bottom-[-4px] before:left-[20px] before:rotate-[45deg]'>
                                        80%
                                    </div>
                                    <div className='absolute top-0 left-0 bg-primary w-[80%] h-full rounded-full'></div>
                                </div>
                            </div>
                        )}

                        {progressBarWithTooltipCode && (
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
                        href="#basic_progress_bar"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Basic Progress Bar
                    </a>
                    <a
                        href="#progress_bar_with_tooltip"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Progress Bar With Tooltip
                    </a>
                </div>
            </aside>
            <Helmet>
                <title>Navigation - Progress Bar</title>
            </Helmet>
        </>
    );
};

export default ProgressBar;
