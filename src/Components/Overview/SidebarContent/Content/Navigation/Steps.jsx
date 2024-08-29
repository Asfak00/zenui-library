import React, {useState} from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import {Helmet} from "react-helmet";

const Steps = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // Number Step
    const [numberStepPreview, setNumberStepPreview] = useState(true);
    const [numberStepCode, setNumberStepCode] = useState(false);


    const handleNumberStepPreview = () => {
        setNumberStepPreview(true);
        setNumberStepCode(false);
    };

    const handleNumberStepCode = () => {
        setNumberStepCode(true);
        setNumberStepPreview(false);
    };

    return (
        <>
            <aside className="flex items-start gap-6 justify-between pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
                <div>
                    <ContentHeader
                        id="number_stepper"
                        text={"number stepper"}
                    />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        We see navigation tabs with borders on all sides like this on almost
                        all websites. They are very simple.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${numberStepPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    numberStepPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleNumberStepPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    numberStepCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleNumberStepCode}
                            >
                                Code
                            </button>
                        </div>
                        {numberStepPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div className='flex items-center gap-[15px] justify-center w-full'>
                                    <p className='w-[35px] h-[35px] flex items-center justify-center bg-primary rounded-full text-white text-[1rem]'>1</p>
                                    <div className='flex items-center gap-[3px]'>
                                        <span className='text-[0.9rem] text-primary'>Cart items</span>
                                    </div>
                                    <p className='w-[35px] h-[35px] flex items-center justify-center border border-primary rounded-full text-primary text-[1rem]'>2</p>
                                    <div className='flex items-center gap-[3px]'>
                                        <span className='text-[0.9rem]'>Payment process</span>
                                    </div>
                                    <p className='w-[35px] h-[35px] flex items-center justify-center border border-primary rounded-full text-primary text-[1rem]'>3</p>
                                    <div className='flex items-center gap-[3px]'>
                                        <span className='text-[0.9rem]'>Success</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {numberStepCode && (
                            <Showcode
                                code=""
                            />
                        )}
                    </div>


                    <div className='mt-8'>
                        <ContentHeader
                            id="no_text_stepper"
                            text={"no text stepper"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        We see navigation tabs with borders on all sides like this on almost
                        all websites. They are very simple.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${numberStepPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    numberStepPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleNumberStepPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    numberStepCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleNumberStepCode}
                            >
                                Code
                            </button>
                        </div>
                        {numberStepPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div className='flex items-center gap-[15px] justify-center w-full'>
                                    <div className='flex items-center w-[35%]'>
                                        <p className='w-[35px] h-[35px] flex items-center justify-center bg-primary rounded-full text-white text-[1rem]'>1</p>
                                        <hr className='w-[80%] border-primary'/>
                                    </div>
                                    <div className='flex items-center w-[35%]'>
                                        <p className='w-[35px] h-[35px] flex items-center justify-center border border-primary rounded-full text-primary text-[1rem]'>2</p>
                                        <hr className='w-[80%]'/>
                                    </div>
                                        <p className='w-[35px] h-[35px] flex items-center justify-center border border-primary rounded-full text-primary text-[1rem]'>3</p>
                                </div>
                            </div>
                        )}

                        {numberStepCode && (
                            <Showcode
                                code=""
                            />
                        )}
                    </div>


                    <div className='mt-8'>
                        <ContentHeader
                            id="vertical_stepper"
                            text={"vertical stepper"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        We see navigation tabs with borders on all sides like this on almost
                        all websites. They are very simple.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${numberStepPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    numberStepPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleNumberStepPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    numberStepCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleNumberStepCode}
                            >
                                Code
                            </button>
                        </div>
                        {numberStepPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div className='flex flex-col items-center gap-[10px] justify-center w-full'>
                                    <div className='flex items-start gap-[20px]'>
                                        <div className='flex flex-col items-center'>
                                            <p className='w-[35px] h-[35px] flex items-center justify-center bg-primary rounded-full text-white text-[1rem]'>1</p>
                                            <div className='w-[2px] h-[50px] bg-primary mt-[10px]'></div>
                                        </div>

                                        <div>
                                            <h1 className='text-[1.1rem] text-gray-700'>Step Title</h1>
                                            <p className='text-[0.9rem] text-gray-500'>Step Descriptions</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-[20px]'>
                                        <div className='flex flex-col items-center'>
                                            <p className='w-[35px] h-[35px] flex items-center justify-center bg-primary outline-2 outline outline-offset-[3px] outline-primary rounded-full text-white text-[1rem]'>2</p>
                                            <div className='w-[2px] h-[50px] bg-primary mt-[10px]'></div>
                                        </div>

                                        <div>
                                            <h1 className='text-[1.1rem] text-gray-700'>Step Title</h1>
                                            <p className='text-[0.9rem] text-gray-500'>Step Descriptions</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-[20px]'>
                                        <div className='flex flex-col items-center'>
                                            <p className='w-[35px] h-[35px] flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-[1rem]'>3</p>
                                            <div className='w-[2px] h-[50px] bg-gray-300 mt-[10px]'></div>
                                        </div>

                                        <div>
                                            <h1 className='text-[1.1rem] text-gray-700'>Step Title</h1>
                                            <p className='text-[0.9rem] text-gray-500'>Step Descriptions</p>
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-[20px]'>
                                        <div className='flex flex-col items-center'>
                                            <p className='w-[35px] h-[35px] flex items-center justify-center bg-gray-200 rounded-full text-gray-500 text-[1rem]'>4</p>
                                        </div>

                                        <div>
                                            <h1 className='text-[1.1rem] text-gray-700'>Step Title</h1>
                                            <p className='text-[0.9rem] text-gray-500'>Step Descriptions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {numberStepCode && (
                            <Showcode
                                code=""
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
                        href="#number_step"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Number Step
                    </a>
                    <a
                        href="#no_text_step"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        No Text Step
                    </a>
                </div>
            </aside>

            <Helmet>
                <title>Navigation - Stepper</title>
            </Helmet>
        </>
    );
};

export default Steps;
