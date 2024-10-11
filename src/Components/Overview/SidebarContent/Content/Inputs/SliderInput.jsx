import React, { useState, useEffect } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { IoChevronDown } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const SliderInput = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // slider input
    const [sliderPreview, setSliderPreview] = useState(true);
    const [sliderCode, setSliderCode] = useState(false);

    const handleSliderPreview = () => {
        setSliderPreview(true);
        setSliderCode(false);
    };

    const handleSliderCode = () => {
        setSliderCode(true);
        setSliderPreview(false);
    };

    // slider input
    const [breakPointSliderPreview, setBreakPointSliderPreview] = useState(true);
    const [breakPointSliderCode, setBreakPointSliderCode] = useState(false);

    const handleBreakPointSliderPreview = () => {
        setBreakPointSliderPreview(true);
        setBreakPointSliderCode(false);
    };

    const handleBreakPointSliderCode = () => {
        setBreakPointSliderCode(true);
        setBreakPointSliderPreview(false);
    };

    const [value, setValue] = useState(0); // Initial value

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = (event) => {
        const slider = event.target.getBoundingClientRect();
        const newValue = ((event.clientX - slider.left) / slider.width) * 100;
        setValue(Math.min(Math.max(newValue, 0), 100));
    };

    const breakpoints = [0, 25, 50, 75, 100];
    const [value1, setValue1] = useState(50); // Start at a specific breakpoint (e.g., 50%)

    // Function to find the nearest breakpoint
    const findNearestBreakpoint = (value) => {
        return breakpoints.reduce((prev, curr) =>
            Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
        );
    };

    // Handle changes in the slider thumb position
    const handleChange1 = (event) => {
        const newValue = Number(event.target.value);
        const nearestBreakpoint = findNearestBreakpoint(newValue);
        setValue1(nearestBreakpoint);
    };

    // Handle click on the slider track
    const handleClick1 = (event) => {
        const slider = event.target.getBoundingClientRect();
        const clickPosition = ((event.clientX - slider.left) / slider.width) * 100;
        const nearestBreakpoint = findNearestBreakpoint(clickPosition);
        setValue1(nearestBreakpoint);
    };

    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader text={"slider"} id={"slider"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Adjustable slider for selecting a value or range, offering smooth control with a draggable handle.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${sliderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    sliderPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleSliderPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    sliderCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleSliderCode}
                            >
                                Code
                            </button>
                        </div>
                        {sliderPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="flex items-center justify-center">
                                    <div
                                        className="relative w-64 h-3 bg-gray-300 rounded-full cursor-pointer"
                                        onClick={handleClick}
                                    >
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={value}
                                            onChange={handleChange}
                                            className="absolute w-full h-3 top-0 z-20 opacity-0 cursor-pointer"
                                        />
                                        <div
                                            className="absolute top-0 h-3 bg-[#108476] rounded-full"
                                            style={{
                                                width: `${value}%`,
                                            }}
                                        />
                                        <div
                                            className="absolute top-[50%] w-[22px] h-[22px] transform bg-[#108476] rounded-full -translate-x-1/2 translate-y-[-50%] cursor-pointer transition-transform duration-150 ease-in-out border-2 border-white"
                                            style={{
                                                left: `${value}%`,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {sliderCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const InputSlider = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleClick = (event) => {
        const slider = event.target.getBoundingClientRect();
        const newValue = ((event.clientX - slider.left) / slider.width) * 100;
        setValue(Math.min(Math.max(newValue, 0), 100));
    };

    return (
        <div className="flex items-center justify-center">
            <div
                className="relative w-64 h-3 bg-gray-300 rounded-full cursor-pointer"
                onClick={handleClick}
            >
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={handleChange}
                    className="absolute w-full h-3 top-0 z-20 opacity-0 cursor-pointer"
                />
                <div
                    className="absolute top-0 h-3 bg-[#108476] rounded-full"
                    style={{
                        width: `${value}%`,
                    }}
                />
                <div
                    className="absolute top-[50%] w-[22px] h-[22px] transform bg-[#108476] rounded-full -translate-x-1/2 translate-y-[-50%] cursor-pointer transition-transform duration-150 ease-in-out border-2 border-white"
                    style={{
                        left: `${value}%`,
                    }}
                />
            </div>
        </div>
    );
};

export default InputSlider;
                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader text={"breakpoint range slider"} id={"breakpoint_range_slider"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A range slider with breakpoints, allowing users to select values within defined intervals for more precise control.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${breakPointSliderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    breakPointSliderPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBreakPointSliderPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    breakPointSliderCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBreakPointSliderCode}
                            >
                                Code
                            </button>
                        </div>
                        {breakPointSliderPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="flex flex-col items-center justify-center">
                                    <div
                                        className="relative w-64 h-3 bg-gray-300 rounded-full cursor-pointer"
                                        onClick={handleClick1}
                                    >
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={value1}
                                            onChange={handleChange1}
                                            className="absolute w-full h-3 top-0 z-20 opacity-0 cursor-pointer"
                                        />
                                        <div
                                            className="absolute top-0 h-3 bg-[#108476] rounded-full"
                                            style={{
                                                width: `${value1}%`,
                                            }}
                                        />
                                        <div
                                            className="absolute top-[50%] w-[22px] h-[22px] transform bg-[#108476] rounded-full -translate-x-1/2 translate-y-[-50%] cursor-pointer transition-transform duration-150 ease-in-out border-2 border-white"
                                            style={{
                                                left: `${value1}%`,
                                            }}
                                        />
                                        {/* Breakpoint markers */}
                                        {breakpoints.map((point, index) => (
                                            <div
                                                key={index}
                                                className="absolute top-[50%] w-[10px] h-[10px] transform -translate-x-1/2 translate-y-[-50%] bg-white rounded-full border border-gray-500"
                                                style={{
                                                    left: `${point}%`,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* parentage showing */}
                                    <div className="flex justify-between w-64 mt-2">
                                        {breakpoints.map((point, index) => (
                                            <span key={index} className="text-sm text-gray-700">
                                                {point}%
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {breakPointSliderCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const InputSlider = () => {

    const breakpoints = [0, 25, 50, 75, 100];
    const [value, setValue] = useState(50);

    const findNearestBreakpoint = (value) => {
        return breakpoints.reduce((prev, curr) =>
            Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
        );
    };

    const handleSliderChange = (event) => {
        const newValue = Number(event.target.value);
        const nearestBreakpoint = findNearestBreakpoint(newValue);
        setValue(nearestBreakpoint);
    };

    const handleClick = (event) => {
        const slider = event.target.getBoundingClientRect();
        const clickPosition = ((event.clientX - slider.left) / slider.width) * 100;
        const nearestBreakpoint = findNearestBreakpoint(clickPosition);
        setValue(nearestBreakpoint);
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div
                className="relative w-64 h-3 bg-gray-300 rounded-full cursor-pointer"
                onClick={handleClick}
            >
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={handleSliderChange}
                    className="absolute w-full h-3 top-0 z-20 opacity-0 cursor-pointer"
                />
                <div
                    className="absolute top-0 h-3 bg-[#108476] rounded-full"
                    style={{
                        width: `${value}%`,
                    }}
                />
                <div
                    className="absolute top-[50%] w-[22px] h-[22px] transform bg-[#108476] rounded-full -translate-x-1/2 translate-y-[-50%] cursor-pointer transition-transform duration-150 ease-in-out border-2 border-white"
                    style={{
                        left: `${value}%`,
                    }}
                />
                {/* Breakpoint markers */}
                {breakpoints.map((point, index) => (
                    <div
                        key={index}
                        className="absolute top-[50%] w-[10px] h-[10px] transform -translate-x-1/2 translate-y-[-50%] bg-white rounded-full border border-gray-500"
                        style={{
                            left: `${point}%`,
                        }}
                    />
                ))}
            </div>

            {/* parentage showing */}
            <div className="flex justify-between w-64 mt-2">
                {breakpoints.map((point, index) => (
                    <span key={index} className="text-sm text-gray-700"> {point}% </span>
                ))}
            </div>
        </div>
    );
};

export default InputSlider;
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
                        href="#sider"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Slider
                    </a>
                    <a
                        href="#breakpoint_range_slider"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Breakpoint Range Slider
                    </a>
                </div>
            </aside>
            <Helmet>
                <title>Inputs - Slider</title>
            </Helmet>
        </>
    );
};

export default SliderInput;
