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

    // hover navigation
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


    // rating modal
    const [ratingModalPreview, setRatingModalPreview] = useState(true);
    const [ratingModalCode, setRatingModalCode] = useState(false);


    const handleRatingModalPreview = () => {
        setRatingModalPreview(true);
        setRatingModalCode(false);
    };

    const handleRatingModalCode = () => {
        setRatingModalCode(true);
        setRatingModalPreview(false);
    };


    // rating with feedback modal
    const [ratingFeedbackModalPreview, setRatingFeedbackModalPreview] = useState(true);
    const [ratingFeedbackModalCode, setRatingFeedbackModalCode] = useState(false);


    const handleRatingFeedbackModalPreview = () => {
        setRatingFeedbackModalPreview(true);
        setRatingFeedbackModalCode(false);
    };

    const handleRatingFeedbackModalCode = () => {
        setRatingFeedbackModalCode(true);
        setRatingFeedbackModalPreview(false);
    };

    // rate via count
    const [rateCountPreview, setRateCountPreview] = useState(true);
    const [rateCountCode, setRateCountCode] = useState(false);


    const handleRateCountPreview = () => {
        setRateCountPreview(true);
        setRateCountCode(false);
    };

    const handleRateCountCode = () => {
        setRateCountCode(true);
        setRateCountPreview(false);
    };

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return (
        <>
            <aside className="flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader
                        id="click_navigation"
                        text={"click navigation"}
                    />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A rating system with clickable stars or icons, allowing users to select a rating by clicking and
                        navigating through the options.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${clickNavigationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
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
                                code='
import React, {useState} from "react";

// react icons
import {FaStar} from "react-icons/fa";

const Rating = () => {

    const [rating, setRating] = useState(0);

    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => {
                const starRating = index + 1;
                return (
                    <FaStar
                        key={starRating}
                        className={`cursor-pointer ${
                            starRating <= rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        size={24}
                        onClick={() => setRating(starRating)}
                    />
                );
            })}
        </div>
    );
};

export default Rating;
                                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="hover_navigation" text={"hover navigation"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A rating system with hover navigation, allowing users to preview and select a rating as they
                        hover over stars or icons before clicking.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${hoverNavigationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
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
import React, {useState} from "react";

// react icons
import {FaStar} from "react-icons/fa";

const Rating = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => {
                const starRating = index + 1;
                return (
                    <FaStar
                        key={starRating}
                        className={`cursor-pointer ${
                            starRating <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                        }`}
                        size={24}
                        onClick={() => setRating(starRating)}
                        onMouseEnter={() => setHover(starRating)}
                        onMouseLeave={() => setHover(null)}
                    />
                );
            })}
        </div>
    );
};

export default Rating;
                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="rating_modal" text={"rating modal"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A modal window that allows users to submit a rating, often including stars or icons for rating
                        and a form for additional feedback.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${ratingModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    ratingModalPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleRatingModalPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    ratingModalCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleRatingModalCode}
                            >
                                Code
                            </button>
                        </div>
                        {ratingModalPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div
                                    className='bg-white boxShadow rounded-md border border-gray-200 w-full 1024px:w-[80%] p-4 text-center'>
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

                        {ratingModalCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {FaStar} from "react-icons/fa";
import {RxCross1} from "react-icons/rx";

const Rating = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return (
        <div
            className="bg-white boxShadow rounded-md border border-gray-200 w-[80%] p-4 text-center">
            <RxCross1
                className="float-right py-1.5 text-[1.6rem] text-[#333333] hover:bg-gray-200 rounded-full cursor-pointer"/>

            <h3 className="text-[24px] font-semibold text-[#333333] mt-[40px]">How many stars
                would you give to them?</h3>
            <p className="text-[16px] font-[400] mt-[10px]">
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
                                starRating <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
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
    );
};

export default Rating;
                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="rating_with_feedback" text={"rating with feedback"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A rating system that includes a feedback section, allowing users to submit both a rating (e.g.,
                        stars) and written comments or suggestions.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${ratingFeedbackModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    ratingFeedbackModalPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleRatingFeedbackModalPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    ratingFeedbackModalCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleRatingFeedbackModalCode}
                            >
                                Code
                            </button>
                        </div>
                        {ratingFeedbackModalPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div
                                    className='bg-white boxShadow rounded-md border border-gray-200 w-full p-4 640px:p-8'>

                                    <h3 className='text-[24px] font-semibold text-[#333333] text-center'>Session
                                        feedback</h3>
                                    <p className='text-[14px] font-[400] text-gray-500 text-center'>
                                        Please rate your experience below
                                    </p>

                                    <div
                                        className='flex items-center 640px:flex-row flex-col 640px:space-x-12 w-full my-[20px] justify-center'>
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
                                    <textarea placeholder='My feedback!!'
                                              className='w-full border-gray-400 resize-none outline-none focus:border-primary border rounded-md p-2 min-h-[100px]'></textarea>

                                    <button className={`${utils.buttonPrimary} w-full mt-[10px]`}>Submit feedback
                                    </button>

                                    <div className='flex items-center my-[10px]'>
                                        <div className='h-[1px] w-full bg-gray-200'></div>
                                        <span className='text-gray-500'>or</span>
                                        <div className='h-[1px] w-full bg-gray-200'></div>
                                    </div>

                                    <div
                                        className='flex 640px:flex-row flex-col items-center justify-between gap-[15px]'>
                                        <button
                                            className={`${utils.buttonSecondary} w-full flex items-center justify-center gap-[10px]`}>
                                            <GoHome className='text-[1.3rem]'/>
                                            Home
                                        </button>
                                        <button
                                            className={`${utils.buttonSecondary} w-full flex items-center justify-center gap-[10px]`}>
                                            <PiShareFatLight className='text-[1.3rem]'/>
                                            Rejoin session
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {ratingFeedbackModalCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {FaStar} from "react-icons/fa";
import {GoHome} from "react-icons/go";
import {PiShareFatLight} from "react-icons/pi";

const Rating = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(null);

    return (
        <div
            className="bg-white boxShadow rounded-md border border-gray-200 w-full p-4 sm:p-8">

            <h3 className="text-[24px] font-semibold text-[#333333] text-center">Session
                feedback</h3>
            <p className="text-[14px] font-[400] text-gray-500 text-center">
                Please rate your experience below
            </p>

            <div
                className="flex items-center sm:flex-row flex-col sm:space-x-12 w-full my-[20px] justify-center">
                <div className="flex items-center space-x-6 justify-center mb-[10px]">
                    {[...Array(5)].map((_, index) => {
                        const starRating = index + 1;
                        return (
                            <FaStar
                                key={starRating}
                                className={`cursor-pointer ${
                                    starRating <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                                }`}
                                size={26}
                                onClick={() => setRating(starRating)}
                                onMouseEnter={() => setHover(starRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        );
                    })}
                </div>
                <span className="text-gray-500">4/5 stars</span>
            </div>

            <label className="text-gray-500 ">Additional feedback</label>
            <textarea placeholder="My feedback!!"
                      className="w-full border-gray-400 resize-none outline-none focus:border-primary border rounded-md p-2 min-h-[100px]"></textarea>

            <button className={`py-2 px-4 border border-r-blue-400 rounded-md w-full mt-[10px]`}>Submit feedback
            </button>

            <div className="flex items-center my-[10px]">
                <div className="h-[1px] w-full bg-gray-200"></div>
                <span className="text-gray-500">or</span>
                <div className="h-[1px] w-full bg-gray-200"></div>
            </div>

            <div
                className="flex sm:flex-row flex-col items-center justify-between gap-[15px]">
                <button
                    className={`py-1.5 px-4 border border-r-blue-400 rounded-md w-full flex items-center justify-center gap-[10px]`}>
                    <GoHome className="text-[1.3rem]"/>
                    Home
                </button>
                <button
                    className={`py-1.5 px-4 border border-r-blue-400 rounded-md w-full flex items-center justify-center gap-[10px]`}>
                    <PiShareFatLight className="text-[1.3rem]"/>
                    Rejoin session
                </button>
            </div>
        </div>
    );
};

export default Rating;
                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="rate_via_count" text={"rate via count"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A rating system where users can select a rating based on a numerical count, typically using stars or icons to represent the total rating value.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${rateCountPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    rateCountPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleRateCountPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    rateCountCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleRateCountCode}
                            >
                                Code
                            </button>
                        </div>
                        {rateCountPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div
                                    className='bg-white boxShadow rounded-[30px] border border-gray-200 w-full 640px:w-[80%] p-8'>

                                    <div className='p-4 bg-blue-100 w-max rounded-full'>
                                        <FaHeart className='text-[1.5rem] text-blue-800'/>
                                    </div>

                                    <h3 className='text-[24px] font-semibold text-[#333333] mt-[20px]'>Hey Drop some
                                        Rating!</h3>
                                    <p className='text-[14px] font-[400] text-gray-500 mt-[10px]'>
                                        hb sdjbchjbhjbsdjh jhb hj hj hj jh hbhujbhb hb hjbhjbh jbhujb hbsdfdsv sdv sdvsd
                                        vsvdvvdvsdv
                                    </p>

                                    <div className='flex 640px:flex-nowrap flex-wrap items-center 640px:gap-0 gap-[10px] 640px:justify-between mt-[25px]'>
                                        <div
                                            className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            1
                                        </div>
                                        <div
                                            className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            2
                                        </div>
                                        <div
                                            className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            3
                                        </div>
                                        <div
                                            className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            4
                                        </div>
                                        <div
                                            className='w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200'>
                                            5
                                        </div>
                                    </div>

                                    <button
                                        className={`${utils.buttonPrimary} w-full mt-[25px] rounded-full !py-3 text-[1.2rem]`}>Submit
                                    </button>

                                </div>
                            </div>
                        )}

                        {rateCountCode && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {FaHeart} from "react-icons/fa";

const Rating = () => {

    return (
        <div
            className="bg-white boxShadow rounded-[30px] border border-gray-200 w-full 640px:w-[80%] p-8">

            <div className="p-4 bg-blue-100 w-max rounded-full">
                <FaHeart className="text-[1.5rem] text-blue-800"/>
            </div>

            <h3 className="text-[24px] font-semibold text-[#333333] mt-[20px]">Hey Drop some
                Rating!</h3>
            <p className="text-[14px] font-[400] text-gray-500 mt-[10px]">
                hb sdjbchjbhjbsdjh jhb hj hj hj jh hbhujbhb hb hjbhjbh jbhujb hbsdfdsv sdv sdvsd
                vsvdvvdvsdv
            </p>

            <div
                className="flex 640px:flex-nowrap flex-wrap items-center 640px:gap-0 gap-[10px] 640px:justify-between mt-[25px]">
                <div
                    className="w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200">
                    1
                </div>
                <div
                    className="w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200">
                    2
                </div>
                <div
                    className="w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200">
                    3
                </div>
                <div
                    className="w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200">
                    4
                </div>
                <div
                    className="w-[55px] h-[55px] text-[1.5rem] bg-blue-100 flex items-center justify-center rounded-full text-blue-800 hover:bg-blue-800 hover:text-white cursor-pointer transition-all duration-200">
                    5
                </div>
            </div>

            <button
                className={`py-3 px-4 border border-r-blue-400 w-full mt-[25px] rounded-full text-[1.2rem]`}>Submit
            </button>

        </div>
    );
};

export default Rating;
                '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/breadcrumb' backName='breadcrumb' forwardName='stepper' forwardUrl='/components/stepper'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#click_navigation"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] capitalize border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        click navigation
                    </a>
                    <a
                        href="#hover_navigation"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] capitalize border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        hover navigation
                    </a>
                    <a
                        href="#rating_modal"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] capitalize border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        rating modal
                    </a>
                    <a
                        href="#rating_with_feedback"
                        className={`${
                            contentActiveTab === 4 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] capitalize border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(4)}
                    >
                        rating with feedback
                    </a>
                    <a
                        href="#rate_via_count"
                        className={`${
                            contentActiveTab === 5 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] capitalize border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(5)}
                    >
                        rate via count
                    </a>
                    <div data-ea-publisher="zenuinet" className='w-full' data-ea-type="image"></div>
                </div>
            </aside>

            <Helmet>
                <title>Navigation - Rating</title>
            </Helmet>
        </>
    );
};

export default Tabs;
