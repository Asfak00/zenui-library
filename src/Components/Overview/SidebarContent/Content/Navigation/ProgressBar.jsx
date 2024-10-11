import React, { useState, useEffect } from "react";

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
import utils from "../../../../../Utils/index.jsx";

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

    // counting progress bar
    const [countingPreview, setCountingPreview] = useState(true);
    const [countingCode, setCountingCode] = useState(false);

    const handleCountingPreview = () => {
        setCountingPreview(true);
        setCountingCode(false);
    };

    const handleCountingCode = () => {
        setCountingCode(true);
        setCountingPreview(false);
    };

    // circle progress bar
    const [circlePreview, setCirclePreview] = useState(true);
    const [circleCode, setCircleCode] = useState(false);

    const handleCirclePreview = () => {
        setCirclePreview(true);
        setCircleCode(false);
    };

    const handleCircleCode = () => {
        setCircleCode(true);
        setCirclePreview(false);
    };

    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let interval;

        if (isLoading) {
            interval = setInterval(() => {
                setProgress(prevProgress => {
                    if (prevProgress >= 90) {
                        clearInterval(interval);
                        setIsLoading(false);
                        return 90;
                    }
                    return prevProgress + 1;
                });
            }, 30);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isLoading]);

    const handleStartLoading = () => {
        if (isLoading) {
            setProgress(0);
            setIsLoading(false);
        }

        setProgress(0);
        setIsLoading(true);
    };

    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader text={"basic progress bar"} id={"basic_progress_bar"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A simple progress bar that visually represents the completion percentage of a task or process.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${basicProgressBarPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
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
                                    <div className='absolute top-0 left-0 bg-primary h-full rounded-full'
                                         style={{width: `${progress}%`}}></div>
                                </div>

                                <button onClick={handleStartLoading}
                                        className={`${utils.buttonSecondary} text-[0.8rem] !px-2 !py-1`}>Start Loading
                                </button>
                            </div>
                        )}

                        {basicProgressBarCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleStartLoading = () => {
        if (isLoading) {
            setProgress(0);
            setIsLoading(false);
        }

        setProgress(0);
        setIsLoading(true);
    };

    return (
        <>
            <div className="relative bg-gray-200 w-[80%] h-[15px] rounded-full">
                <div className="absolute top-0 left-0 bg-primary h-full rounded-full"
                     style={{width: `${progress}%`}}></div>
            </div>

            <button onClick={handleStartLoading}
                    className={`text-[0.8rem] px-2 py-1 bg-blue-500 rounded-md`}>Start Loading
            </button>
        </>
    );
};

export default ProgressBar;
                                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"progress bar with tooltip"} id={"progress_bar_with_tooltip"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A progress bar that displays the completion percentage within a tooltip when hovered over, providing precise progress information.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${progressBarWithTooltipPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
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
                                    {
                                        progress !== 0 && (
                                            <div
                                                style={{left: `calc(${progress}% - 40px)`}}
                                                className={`left-[${progress}%] bg-primary rounded-[5px] absolute top-[-40px] text-white px-2 py-0.5 before:w-[8px] before:h-[8px] before:bg-primary before:absolute before:bottom-[-4px] before:left-[35%] before:transform before:translate-x-1/2 before:rotate-[45deg]`}>
                                                {progress}%
                                            </div>
                                        )
                                    }
                                    <div className='absolute top-0 left-0 bg-primary h-full rounded-full'
                                         style={{width: `${progress}%`}}></div>
                                </div>

                                <button onClick={handleStartLoading}
                                        className={`${utils.buttonSecondary} text-[0.8rem] !px-2 !py-1`}>Start Loading
                                </button>
                            </div>
                        )}

                        {progressBarWithTooltipCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleStartLoading = () => {
        if (isLoading) {
            setProgress(0);
            setIsLoading(false);
        }

        setProgress(0);
        setIsLoading(true);
    };

    return (
        <>
            <div className="relative bg-gray-200 w-[80%] h-[15px] rounded-full">
                {
                    progress !== 0 && (
                        <div
                            style={{left: `calc(${progress}% - 40px)`}}
                            className={`left-[${progress}%] bg-primary rounded-[5px] absolute top-[-40px] text-white px-2 py-0.5 before:w-[8px] before:h-[8px] before:bg-primary before:absolute before:bottom-[-4px] before:left-[35%] before:transform before:translate-x-1/2 before:rotate-[45deg]`}>
                            {progress}%
                        </div>
                    )
                }
                <div className="absolute top-0 left-0 bg-primary h-full rounded-full"
                     style={{width: `${progress}%`}}></div>
            </div>

            <button onClick={handleStartLoading}
                    className={`bg-blue-500 rounded-md text-[0.8rem] px-2 py-1`}>Start Loading
            </button>
        </>
    );
};

export default ProgressBar;
                                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"progress bar with showing percentage"} id={"progress_bar_with_showing_percentage"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A progress bar that visibly shows the completion percentage directly on the bar, giving a clear indication of progress.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${countingPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    countingPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleCountingPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    countingCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleCountingCode}
                            >
                                Code
                            </button>
                        </div>
                        {countingPreview && (
                            <div className="p-8 mb-4 mt-8 flex flex-wrap items-start gap-5 justify-center">
                                <div className='flex flex-col items-center justify-center w-full gap-[10px]'>
                                    <div className='relative bg-gray-200 w-[80%] h-[15px] rounded-full'>
                                        <div className='absolute top-0 left-0 bg-primary h-full rounded-full'
                                             style={{width: `${progress}%`}}></div>
                                    </div>

                                    <p>Loading: <b>{progress}%</b></p>
                                </div>

                                <button onClick={handleStartLoading}
                                        className={`${utils.buttonSecondary} text-[0.8rem] !px-2 !py-1`}>Start Loading
                                </button>
                            </div>
                        )}

                        {countingCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleStartLoading = () => {
        if (isLoading) {
            setProgress(0);
            setIsLoading(false);
        }

        setProgress(0);
        setIsLoading(true);
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center w-full gap-[10px]">
                <div className="relative bg-gray-200 w-[80%] h-[15px] rounded-full">
                    <div className="absolute top-0 left-0 bg-primary h-full rounded-full"
                         style={{width: `${progress}%`}}></div>
                </div>

                <p>Loading: <b>{progress}%</b></p>
            </div>

            <button onClick={handleStartLoading}
                    className={`bg-blue-500 rounded-md text-[0.8rem] px-2 py-1`}>Start Loading
            </button>
        </>
    );
};

export default ProgressBar;
                                '
                            />
                        )}
                    </div>


                    <div className="mt-8">
                        <ContentHeader text={"circle progress bar"} id={"circle_progress_bar"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A circular progress bar that displays the completion percentage in the center of the circle, offering a visually appealing way to track progress.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${circlePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    circlePreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleCirclePreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    circleCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleCircleCode}
                            >
                                Code
                            </button>
                        </div>
                        {circlePreview && (
                            <div className="p-8 mb-4 mt-8 flex flex-col items-start gap-5 justify-center">
                                <div className="relative w-[150px] h-[150px] mx-auto">
                                    <svg className="w-full h-full" viewBox="0 0 100 100">
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            className="text-gray-200"
                                            strokeWidth="10"
                                            fill="none"
                                        />

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            stroke="#e2e2e2"
                                            strokeWidth="10"
                                            fill="none"
                                            strokeDasharray="282.6"
                                            strokeDashoffset={0}
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                        />

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            className="text-gray-200"
                                            strokeWidth="10"
                                            fill="none"
                                        />

                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            stroke="#3B9DF8"
                                            strokeWidth="10"
                                            fill="none"
                                            strokeDasharray="282.6"
                                            strokeDashoffset={(1 - progress / 100) * 282.6}
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                        />
                                    </svg>

                                    <p className='absolute top-[35%] left-[30%] translate-x-1/2 transform translate-y-1/2'>{progress}%</p>
                                </div>

                                <button onClick={handleStartLoading}
                                        className={`${utils.buttonSecondary} text-[0.8rem] !px-2 !py-1 mx-auto`}>Start Loading
                                </button>
                            </div>
                        )}

                        {circleCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const handleStartLoading = () => {
        if (isLoading) {
            setProgress(0);
            setIsLoading(false);
        }

        setProgress(0);
        setIsLoading(true);
    };

    return (
        <>
            <div className="relative w-[150px] h-[150px] mx-auto">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="text-gray-200"
                        strokeWidth="10"
                        fill="none"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#e2e2e2"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset={0}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        className="text-gray-200"
                        strokeWidth="10"
                        fill="none"
                    />

                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke="#3B9DF8"
                        strokeWidth="10"
                        fill="none"
                        strokeDasharray="282.6"
                        strokeDashoffset={(1 - progress / 100) * 282.6}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                    />
                </svg>

                <p className="absolute top-[35%] left-[30%] translate-x-1/2 transform translate-y-1/2">{progress}%</p>
            </div>

            <button onClick={handleStartLoading}
                    className={`bg-blue-500 rounded-md text-[0.8rem] px-2 py-1 mx-auto`}>Start Loading
            </button>
        </>
    );
};

export default ProgressBar;
                                '
                            />
                        )}
                    </div>

                    <OverviewFooter/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
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
                    <a
                        href="#progress_bar_with_showing_percentage"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        Progress Bar With Showing Percentage
                    </a>
                    <a
                        href="#circle_progress_bar"
                        className={`${
                            contentActiveTab === 4 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(4)}
                    >
                        Circle Progress Bar
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
