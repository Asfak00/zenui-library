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
            <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem] ">
                <div>
                    <ContentHeader text={"mini number input"} id={"mini_number_input"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a circle radio button component. Select options with a click on the elegant circular
                        design.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${miniInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
                                code='
                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"rounded button"} id={"rounded_button"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a square radio button component. Choose options by clicking on the modern, square
                        design.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${roundedButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
                                code='
                '
                            />
                        )}
                    </div>


                    <div className="mt-8">
                        <ContentHeader text={"rounded button position"} id={"rounded_button"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a square radio button component. Choose options by clicking on the modern, square
                        design.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${roundedButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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

                        {roundedButtonCode && (
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
                </div>
            </aside>
            <Helmet>
                <title>Inputs - OTP Input</title>
            </Helmet>
        </>
    );
};

export default OtpInput;
