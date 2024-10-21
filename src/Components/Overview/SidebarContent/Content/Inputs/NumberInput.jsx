import React, { useState , useRef} from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";
import {FiMinus, FiPlus} from "react-icons/fi";

const OtpInput = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // mini input
    const [miniInputPreview, setMiniInputPreview] = useState(true);
    const [miniInputCode, setMiniInputCode] = useState(false);

    const handleMiniInputPreview = () => {
        setMiniInputPreview(true);
        setMiniInputCode(false);
    };

    const handleMiniInputCode = () => {
        setMiniInputCode(true);
        setMiniInputPreview(false);
    };

    // rounded button
    const [roundedButtonPreview, setRoundedButtonPreview] = useState(true);
    const [roundedButtonCode, setRoundedButtonCode] = useState(false);

    const handleRoundedButtonPreview = () => {
        setRoundedButtonPreview(true);
        setRoundedButtonCode(false);
    };

    const handleRoundedButtonCode = () => {
        setRoundedButtonCode(true);
        setRoundedButtonPreview(false);
    };

    // rounded button position
    const [roundedButtonPositionPreview, setRoundedButtonPositionPreview] = useState(true);
    const [roundedButtonPositionCode, setRoundedButtonPositionCode] = useState(false);

    const handleRoundedButtonPositionPreview = () => {
        setRoundedButtonPositionPreview(true);
        setRoundedButtonPositionCode(false);
    };

    const handleRoundedButtonPositionCode = () => {
        setRoundedButtonPositionCode(true);
        setRoundedButtonPositionPreview(false);
    };

    // actions

    // mini input
    const [miniInputValue, setMiniInputValue] = useState(0);

    const handleMiniIncrement = () => {
        setMiniInputValue(prevValue => prevValue + 1);
    }

    const handleMiniDecrement = () => {
        setMiniInputValue(prevValue => prevValue - 1);
    }

    const handleMiniInputValueChange = (e) => {
        setMiniInputValue(Number(e.target.value));
    }

    // rounded button input
    const [roundedInputValue, setRoundedInputValue] = useState(0);

    const handleRoundedIncrement = () => {
        setRoundedInputValue(prevValue => prevValue + 1);
    }

    const handleRoundedDecrement = () => {
        setRoundedInputValue(prevValue => prevValue - 1);
    }

    const handleRoundedInputValueChange = (e) => {
        setRoundedInputValue(Number(e.target.value));
    }

    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader text={"mini number input"} id={"mini_number_input"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a mini number input field designed for entering small numerical values. It ensures precise input with a compact design.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${miniInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    miniInputPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleMiniInputPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    miniInputCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleMiniInputCode}
                            >
                                Code
                            </button>
                        </div>
                        {miniInputPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className='flex items-center mx-auto border border-gray-200 rounded-md'>
                                    <button className='bg-gray-100 p-[15px] rounded-l-md text-gray-700 text-[1.1rem]'
                                            onClick={handleMiniDecrement}><FiMinus/></button>
                                    <input type='number' value={miniInputValue}
                                           className='w-[70px] py-2.5 outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                                           onInput={handleMiniInputValueChange}/>
                                    <button className='bg-gray-100 p-[15px] rounded-r-md text-gray-700 text-[1.1rem]'
                                            onClick={handleMiniIncrement}><FiPlus/></button>
                                </div>
                            </div>
                        )}

                        {miniInputCode && (
                            <Showcode
                                code="
import React, {useState} from 'react';

// react icon
import {FiMinus, FiPlus} from 'react-icons/fi';

const NumberInput = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevValue => prevValue + 1);
    }

    const handleDecrement = () => {
        setCount(prevValue => prevValue - 1);
    }

    const handleInputValueChange = (e) => {
        setCount(Number(e.target.value));
    }

    return (
        <div className='flex items-center mx-auto border border-gray-200 rounded-md'>
            <button className='bg-gray-100 p-[15px] rounded-l-md text-gray-700 text-[1.1rem]'
                    onClick={handleDecrement}><FiMinus/></button>
            <input type='number' value={count}
                   className='w-[70px] py-2.5 outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                   onInput={handleInputValueChange}/>
            <button className='bg-gray-100 p-[15px] rounded-r-md text-gray-700 text-[1.1rem]'
                    onClick={handleIncrement}><FiPlus/></button>
        </div>
    );
};

export default NumberInput;
                                "
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"rounded button"} id={"rounded_button"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a rounded button number input that allows you to increment or decrement numerical values using buttons with smooth, curved edges. It provides a user-friendly and stylish way to adjust numbers.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${roundedButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    roundedButtonPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleRoundedButtonPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    roundedButtonCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleRoundedButtonCode}
                            >
                                Code
                            </button>
                        </div>
                        {roundedButtonPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div
                                    className='flex px-2 py-0.5 items-center mx-auto border border-gray-200 rounded-md'>
                                    <button className='bg-gray-100 p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                                            onClick={handleRoundedDecrement}><FiMinus/></button>
                                    <input type='number' value={roundedInputValue}
                                           className='w-[70px] py-2.5 outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                                           onInput={handleRoundedInputValueChange}/>
                                    <button className='bg-gray-100 p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                                            onClick={handleRoundedIncrement}><FiPlus/></button>
                                </div>
                            </div>
                        )}

                        {roundedButtonCode && (
                            <Showcode
                                code="
import React, {useState} from 'react';

// react icon
import {FiMinus, FiPlus} from 'react-icons/fi';

const NumberInput = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevValue => prevValue + 1);
    }

    const handleDecrement = () => {
        setCount(prevValue => prevValue - 1);
    }

    const handleInputValueChange = (e) => {
        setCount(Number(e.target.value));
    }

    return (
        <div
            className='flex px-2 py-0.5 items-center mx-auto border border-gray-200 rounded-md'>
            <button className='bg-gray-100 p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                    onClick={handleDecrement}><FiMinus/></button>
            <input type='number' value={count}
                   className='w-[70px] py-2.5 outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                   onInput={handleInputValueChange}/>
            <button className='bg-gray-100 p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                    onClick={handleIncrement}><FiPlus/></button>
        </div>
    );
};

export default NumberInput;
                                "
                            />
                        )}
                    </div>


                    <div className="mt-8">
                        <ContentHeader text={"rounded button position"} id={"rounded_button_position"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Rounded button number input with flexible button positioning for customizable numerical adjustments.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${roundedButtonPositionPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    roundedButtonPositionPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleRoundedButtonPositionPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    roundedButtonPositionCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleRoundedButtonPositionCode}
                            >
                                Code
                            </button>
                        </div>
                        {roundedButtonPositionPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div
                                    className='flex px-2 py-0.5 items-center mx-auto border border-gray-200 rounded-md'>
                                    <button className='bg-gray-100 p-[10px] mr-2 rounded-full text-gray-700 text-[1.1rem]'
                                            onClick={handleRoundedDecrement}><FiMinus/></button>
                                    <button className='bg-gray-100 p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                                            onClick={handleRoundedIncrement}><FiPlus/></button>

                                    <input type='number' value={roundedInputValue}
                                           className='w-[70px] px-2 py-2.5 outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                                           onInput={handleRoundedInputValueChange}/>

                                </div>

                                <div
                                    className='flex px-2 py-0.5 items-center mx-auto border border-gray-200 rounded-md'>
                                    <input type='number' value={roundedInputValue}
                                           className='w-[70px] px-2 py-2.5 outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                                           onInput={handleRoundedInputValueChange}/>
                                    <button className='bg-gray-100 p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                                            onClick={handleRoundedDecrement}><FiMinus/></button>
                                    <button className='bg-gray-100 p-[10px] rounded-full ml-2 text-gray-700 text-[1.1rem]'
                                            onClick={handleRoundedIncrement}><FiPlus/></button>
                                </div>
                            </div>
                        )}

                        {roundedButtonPositionCode && (
                            <Showcode
                                code="
import React, {useState} from 'react';

// react icon
import {FiMinus, FiPlus} from 'react-icons/fi';

const NumberInput = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevValue => prevValue + 1);
    }

    const handleDecrement = () => {
        setCount(prevValue => prevValue - 1);
    }

    const handleInputValueChange = (e) => {
        setCount(Number(e.target.value));
    }

    return (
        <>
            {/* button left position */}
            <div
                className='flex px-2 py-0.5 items-center mx-auto border border-gray-200 rounded-md'>
                <button className='bg-gray-100 p-[10px] mr-2 rounded-full text-gray-700 text-[1.1rem]'
                        onClick={handleDecrement}><FiMinus/></button>
                <button className='bg-gray-100 p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                        onClick={handleIncrement}><FiPlus/></button>

                <input type='number' value={count}
                       className='w-[70px] px-2 py-2.5 outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                       onInput={handleInputValueChange}/>

            </div>

            {/* button right position */}
            <div
                className='flex px-2 py-0.5 items-center mx-auto border border-gray-200 rounded-md'>
                <input type='number' value={count}
                       className='w-[70px] px-2 py-2.5 outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                       onInput={handleInputValueChange}/>
                <button className='bg-gray-100 p-[10px] rounded-full text-gray-700 text-[1.1rem]'
                        onClick={handleDecrement}><FiMinus/></button>
                <button className='bg-gray-100 p-[10px] rounded-full ml-2 text-gray-700 text-[1.1rem]'
                        onClick={handleIncrement}><FiPlus/></button>
            </div>
        </>
    );
};

export default NumberInput;
                                "
                            />
                        )}
                    </div>


                    <OverviewFooter backUrl='/components/input-textarea' backName='textarea' forwardUrl='/components/input-checkbox' forwardName='checkbox'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[55%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#mini_number_input"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Mini Number Input
                    </a>
                    <a
                        href="#rounded_button"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Rounded Button
                    </a>
                    <a
                        href="#rounded_button_position"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        Rounded Button Position
                    </a>
                    <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
                </div>
            </aside>
            <Helmet>
                <title>Inputs - Number</title>
            </Helmet>
        </>
    );
};

export default OtpInput;
