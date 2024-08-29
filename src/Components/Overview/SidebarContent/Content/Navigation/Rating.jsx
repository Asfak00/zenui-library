import React, {useState} from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import {Helmet} from "react-helmet";
import {FaHeart, FaStar} from "react-icons/fa";
import {RxCross1} from "react-icons/rx";
import utils from "../../../../../Utils/index.jsx";
import {PiShareFatLight} from "react-icons/pi";
import {GoHome} from "react-icons/go";

const Tabs = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // click navigation
    const [clickNavigationPreview, setClickNavigationPreview] = useState(true);
    const [clickNavigationCode, setClickNavigationCode] = useState(false);


    const handleClickNavigationPreview = () => {
        setClickNavigationPreview(true);
        setClickNavigationCode(false);
    };

    const handleClickNavigationCode = () => {
        setClickNavigationCode(true);
        setClickNavigationPreview(false);
    };

    // click navigation
    const [hoverNavigationPreview, setHoverNavigationPreview] = useState(true);
    const [hoverNavigationCode, setHoverNavigationCode] = useState(false);


    const handleHoverNavigationPreview = () => {
        setHoverNavigationPreview(true);
        setHoverNavigationCode(false);
    };

    const handleHoverNavigationCode = () => {
        setHoverNavigationCode(true);
        setHoverNavigationPreview(false);
    };

    // background animated button
    const [bottomBorderPreview, setBottomBorderPreview] = useState(true);
    const [bottomBorderCode, setBottomBorderCode] = useState(false);

    const handleBottomBorderPreview = () => {
        setBottomBorderPreview(true);
        setBottomBorderCode(false);
    };

    const handleBottomBorderCode = () => {
        setBottomBorderCode(true);
        setBottomBorderPreview(false);
    };

    // top border button
    const [topBorderButtonPreview, setTopBorderButtonPreview] = useState(true);
    const [topBorderButtonCode, setTopBorderButtonCode] = useState(false);

    const handleTopBorderButtonPreview = () => {
        setTopBorderButtonPreview(true);
        setTopBorderButtonCode(false);
    };

    const handleTopBorderButtonCode = () => {
        setTopBorderButtonCode(true);
        setTopBorderButtonPreview(false);
    };

    // rounded border button
    const [roundedBorderButtonPreview, setRoundedBorderButtonPreview] =
        useState(true);
    const [roudnedBorderButtonCode, setRoundedBorderButtonCode] = useState(false);

    const handleRoundedBorderButtonPreview = () => {
        setRoundedBorderButtonPreview(true);
        setRoundedBorderButtonCode(false);
    };

    const handleRoundedBorderButtonCode = () => {
        setRoundedBorderButtonCode(true);
        setRoundedBorderButtonPreview(false);
    };

    // box button
    const [boxButtonPreview, setBoxButtonPreview] = useState(true);
    const [boxButtonCode, setBoxButtonCode] = useState(false);

    const handleBoxButtonPreview = () => {
        setBoxButtonPreview(true);
        setBoxButtonCode(false);
    };

    const handleBoxButtonCode = () => {
        setBoxButtonCode(true);
        setBoxButtonPreview(false);
    };

    // animated button
    const [animatedTabPreview, setAnimatedTabPreview] = useState(true);
    const [animatedTabCode, setAnimatedTabCode] = useState(false);

    const handleAnimatedTabPreview = () => {
        setAnimatedTabPreview(true);
        setAnimatedTabCode(false);
    };

    const handleAnimatedTabCode = () => {
        setAnimatedTabCode(true);
        setAnimatedTabPreview(false);
    };

    // toggle button
    const [toggleButtonPreview, setToggleButtonPreview] = useState(true);
    const [toggleButtonCode, setToggleButtonCode] = useState(false);

    const handleToggleButtonPreview = () => {
        setToggleButtonPreview(true);
        setToggleButtonCode(false);
    };

    const handleToggleButtonCode = () => {
        setToggleButtonCode(true);
        setToggleButtonPreview(false);
    };

    // state for full border tab
    const [isActive, setIsActive] = useState(1);

    // bottom border tab
    const [bottomBorderActive, setBottomBorderActive] = useState(1);

    // top border tab
    const [topBorderButtonActive, setTopBorderButtonActive] = useState(1);

    // rounded border tab
    const [roundedBorderButtonAcitve, setRoundedBorderButtonActive] = useState(1);

    // box tab
    const [boxButtonActive, setBoxButtonActive] = useState(1);

    const [rating, setRating] = useState(0); // Current rating state
    const [hover, setHover] = useState(null);

    return (
        <>
            <aside className="flex items-start gap-6 justify-between pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
                <div>
                    <ContentHeader
                        id="click_navigation"
                        text={"click navigation"}
                    />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        We see navigation tabs with borders on all sides like this on almost
                        all websites. They are very simple.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${clickNavigationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    clickNavigationPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleClickNavigationPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    clickNavigationCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleClickNavigationCode}
                            >
                                Code
                            </button>
                        </div>
                        {clickNavigationPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, index) => {
                                        const starRating = index + 1;
                                        return (
                                            <FaStar
                                                key={starRating}
                                                className={`cursor-pointer ${
                                                    starRating <= rating ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                                size={24}
                                                onClick={() => setRating(starRating)}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {clickNavigationCode && (
                            <Showcode
                                code=""
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="hover_navigation" text={"hover navigation"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is navigation tabs with sliding animation for smooth and interactive navigation.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${hoverNavigationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    hoverNavigationPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleHoverNavigationPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    hoverNavigationCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleHoverNavigationCode}
                            >
                                Code
                            </button>
                        </div>
                        {hoverNavigationPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div className="flex items-center space-x-1">
                                    {[...Array(5)].map((_, index) => {
                                        const starRating = index + 1;
                                        return (
                                            <FaStar
                                                key={starRating}
                                                className={`cursor-pointer ${
                                                    starRating <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                                                }`}
                                                size={24}
                                                onClick={() => setRating(starRating)}
                                                onMouseEnter={() => setHover(starRating)}
                                                onMouseLeave={() => setHover(null)}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {hoverNavigationCode && (
                            <Showcode
                                code='
                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="rating_modal" text={"rating_modal"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is navigation tabs with sliding animation for smooth and interactive navigation.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${hoverNavigationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    hoverNavigationPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleHoverNavigationPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    hoverNavigationCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleHoverNavigationCode}
                            >
                                Code
                            </button>
                        </div>
                        {hoverNavigationPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">

                                <div
                                    className='bg-white boxShadow rounded-md border border-gray-200 w-[80%] p-4 text-center'>
                                    <RxCross1
                                        className='float-right py-1.5 text-[1.6rem] text-[#333333] hover:bg-gray-200 rounded-full cursor-pointer'/>

                                    <h3 className='text-[24px] font-semibold text-[#333333] mt-[40px]'>How many stars
                                        would you give to them?</h3>
                                    <p className='text-[16px] font-[400] mt-[10px]'>
                                        Jonah Noah delivered your order from <b>Nanica Homemade Pies</b>, today at 19:47
                                        (7 min ahead schedule).
                                    </p>

                                    <div className="flex items-center space-x-1 justify-center mt-[15px] mb-[10px]">
                                        {[...Array(5)].map((_, index) => {
                                            const starRating = index + 1;
                                            return (
                                                <FaStar
                                                    key={starRating}
                                                    className={`cursor-pointer ${
                                                        starRating <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                                                    }`}
                                                    size={26}
                                                    onClick={() => setRating(starRating)}
                                                    onMouseEnter={() => setHover(starRating)}
                                                    onMouseLeave={() => setHover(null)}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        )}

                        {hoverNavigationCode && (
                            <Showcode
                                code='
                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="rating_modal" text={"rating_modal"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is navigation tabs with sliding animation for smooth and interactive navigation.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${hoverNavigationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    hoverNavigationPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleHoverNavigationPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    hoverNavigationCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleHoverNavigationCode}
                            >
                                Code
                            </button>
                        </div>
                        {hoverNavigationPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">

                                <div
                                    className='bg-white boxShadow rounded-md border border-gray-200 w-full p-8'>

                                    <h3 className='text-[24px] font-semibold text-[#333333] text-center'>Session feedback</h3>
                                    <p className='text-[14px] font-[400] text-gray-500 text-center'>
                                        Please rate your experience below
                                    </p>

                                    <div className='flex items-center space-x-12 w-full my-[20px] justify-center'>
                                        <div className="flex items-center space-x-6 justify-center mb-[10px]">
                                            {[...Array(5)].map((_, index) => {
                                                const starRating = index + 1;
                                                return (
                                                    <FaStar
                                                        key={starRating}
                                                        className={`cursor-pointer ${
                                                            starRating <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
                                                        }`}
                                                        size={26}
                                                        onClick={() => setRating(starRating)}
                                                        onMouseEnter={() => setHover(starRating)}
                                                        onMouseLeave={() => setHover(null)}
                                                    />
                                                );
                                            })}
                                        </div>
                                        <span className='text-gray-500'>4/5 stars</span>
                                    </div>

                                    <label className='text-gray-500 '>Additional feedback</label>
                                    <textarea placeholder='My feedback!!' className='w-full border-gray-400 resize-none outline-none focus:border-primary border rounded-md p-2 min-h-[100px]'></textarea>

                                    <button className={`${utils.buttonPrimary} w-full mt-[10px]`}>Submit feedback</button>

                                    <div className='flex items-center my-[10px]'>
                                        <div className='h-[1px] w-full bg-gray-200'></div>
                                        <span className='text-gray-500'>or</span>
                                        <div className='h-[1px] w-full bg-gray-200'></div>
                                    </div>

                                    <div className='flex items-center justify-between gap-[15px]'>
                                        <button className={`${utils.buttonSecondary} w-full flex items-center justify-center gap-[10px]`}>
                                            <GoHome className='text-[1.3rem]'/>
                                            Home
                                        </button>
                                        <button className={`${utils.buttonSecondary} w-full flex items-center justify-center gap-[10px]`}>
                                            <PiShareFatLight className='text-[1.3rem]'/>
                                            Rejoin session
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {hoverNavigationCode && (
                            <Showcode
                                code='
                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="rating_modal" text={"rating_modal"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is navigation tabs with sliding animation for smooth and interactive navigation.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${hoverNavigationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    hoverNavigationPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleHoverNavigationPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    hoverNavigationCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleHoverNavigationCode}
                            >
                                Code
                            </button>
                        </div>
                        {hoverNavigationPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">

                                <div
                                    className='bg-white boxShadow rounded-[30px] border border-gray-200 w-[80%] p-8'>

                                    <div className='p-4 bg-blue-100 w-max rounded-full'>
                                        <FaHeart className='text-[1.5rem] text-blue-800'/>
                                    </div>

                                    <h3 className='text-[24px] font-semibold text-[#333333] mt-[20px]'>Hey Drop some Rating!</h3>
                                    <p className='text-[14px] font-[400] text-gray-500 mt-[10px]'>
                                        hb sdjbchjbhjbsdjh jhb  hj hj hj jh hbhujbhb hb hjbhjbh jbhujb hbsdfdsv sdv sdvsd vsvdvvdvsdv <sdvsdvv className=""></sdvsdvv>
                                    </p>

                                    <div className='flex items-center justify-between mt-[25px]'>
                                        <div className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            1
                                        </div>
                                        <div className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            2
                                        </div>
                                        <div className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            3
                                        </div>
                                        <div className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            4
                                        </div>
                                        <div className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            5
                                        </div>
                                    </div>

                                    <button className={`${utils.buttonPrimary} w-full mt-[25px] rounded-full !py-3 text-[1.2rem]`}>Submit</button>

                                </div>
                            </div>
                        )}

                        {hoverNavigationCode && (
                            <Showcode
                                code='
                '
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
                        href="#Border_navigation"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Border Navigation
                    </a>
                    <a
                        href="#animated_tab"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Animated Tab
                    </a>
                </div>
            </aside>

            <Helmet>
                <title>Navigation - Tabs</title>
            </Helmet>
        </>
    );
};

export default Tabs;
