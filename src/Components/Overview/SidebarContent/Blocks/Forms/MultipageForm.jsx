import React, { useState } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader.jsx";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import {IoSearchOutline} from "react-icons/io5";
import {MdDone} from "react-icons/md";
import {BsCashStack} from "react-icons/bs";
import {HiOutlineUpload} from "react-icons/hi";
import {SlLocationPin} from "react-icons/sl";

// card toggle view
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";


const MultipageForm = () => {

    const[multiStepForm1Preview, setMultiStepForm1Preview] = useState(true);
    const[multiStepForm1Code, setMultiStepForm1Code] = useState(false);

    const[multiStepForm2Preview, setMultiStepForm2Preview] = useState(true);
    const[multiStepForm2Code, setMultiStepForm2Code] = useState(false);

    // actions
    const [step, setStep] = useState(1)

    const nextStep = () => {
        if(step < 3) {
            setStep(step + 1)
        }
    };
    const prevStep = () => setStep(step - 1);

    const toggleCardView = useToggleCardView()

    const steps = [
        {
            id: 1,
            name: 'account type'
        },
        {
            id: 2,
            name: 'personal info'
        },
        {
            id: 3,
            name: 'profile data'
        },
    ]

    const [step1, setStep1] = useState(1)

    const nextStep1 = () => {
        if(step1 < 4) {
            setStep1(step1 + 1)
        }
    };
    const prevStep1 = () => setStep1(step1 - 1);

    const steps1 = [
        {
            id: 1,
            name: 'account type'
        },
        {
            id: 2,
            name: 'personal info'
        },
        {
            id: 3,
            name: 'profile data'
        },
    ]

    const [selectedPostionCardId, setSelectedPositionCardId] = useState(false);

    const positionCards = [
        {
            id: 1,
            title: 'Front-End Developer',
            description: 'remove a border style that was applied at a smaller breakpoint.',
            from_start: 50,
        },
        {
            id: 2,
            title: 'Back-End Developer',
            description: 'remove a border style that was applied at a smaller breakpoint.',
            from_start: 100,
        },
        {
            id: 3,
            title: 'Laravel Developer',
            description: 'remove a border style that was applied at a smaller breakpoint.',
            from_start: 80,
        },
        {
            id: 4,
            title: 'Mern Stack Developer',
            description: 'remove a border style that was applied at a smaller breakpoint.',
            from_start: 110,
        }
    ]


    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"multi step form 1"} id={"multi_step_form_1"} />


                <p className="w-full text-text text-[1rem]">
                    A form divided into multiple steps, guiding users through sections one at a time for a more streamlined data entry process.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${multiStepForm1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                multiStepForm1Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setMultiStepForm1Preview, setMultiStepForm1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                multiStepForm1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setMultiStepForm1Preview, setMultiStepForm1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {multiStepForm1Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <div className='w-full 640px:w-[90%] max-w-[700px] mx-auto'>
                                <div className='w-full 640px:flex-row flex-col flex items-center gap-[20px] 640px:gap-[10px]'>
                                    {
                                        steps1?.map((stepItem, index)=> (
                                            <p key={index} className='flex items-center w-full gap-[10px]'>
                                                {
                                                    step1 <= stepItem.id && (
                                                        <p className={`w-[30px] h-[30px] p-[20px] text-gray-500 flex items-center justify-center text-[1.2rem] rounded-full bg-gray-50`}>{stepItem?.id}</p>
                                                    )
                                                }

                                                {
                                                step1 >= (stepItem.id + 1) && (
                                                        <div className='p-[10px] h-[40px] w-[40px] rounded-full bg-blue-500 text-white flex items-center justify-center'>
                                                            <MdDone className='text-[3rem]'/>
                                                        </div>
                                                    )
                                                }

                                                <p className={`${step1 > stepItem.id ? 'text-blue-500' : 'text-gray-600'} text-[0.9rem] font-[400] 640px:w-[75%] min-w-fit`}>{stepItem?.name}</p>

                                                {
                                                    index < steps1?.length - 1 && (
                                                        <div className={`${
                                                            step1 >= (stepItem.id + 1) ? 'bg-blue-500' : 'bg-gray-300'
                                                        } w-full h-[5px] rounded-full`}></div>
                                                    )
                                                }
                                            </p>
                                        ))
                                    }
                                </div>

                                <form className='mt-16 w-full'>
                                    {
                                        step1 === 1 && (
                                            <div className='flex flex-col w-full'>
                                                <div className='w-full relative'>
                                                    <label className='text-[1rem] text-gray-600'>Location</label> <br/>
                                                    <input type='text' placeholder='City, area...'
                                                           className='py-2.5 pl-4 pr-[40px] border border-gray-300 mt-1 w-full rounded-md outline-none'/>
                                                    <SlLocationPin className='absolute top-[42px] right-3 text-gray-500'/>
                                                </div>

                                                <p className='text-[1rem] font-[400] text-gray-500 mt-8'>Suggestions</p>
                                                <div className='flex items-center gap-[10px] flex-wrap mt-3'>
                                                    <p className='py-2 px-4 text-[0.9rem] text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer'>Moulvibazar</p>
                                                    <p className='py-2 px-4 text-[0.9rem] text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer'>Sylhet</p>
                                                    <p className='py-2 px-4 text-[0.9rem] text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer'>Juri</p>
                                                    <p className='py-2 px-4 text-[0.9rem] text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer'>BuwaiBazar</p>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        step1 === 2 && (
                                            <div className='flex flex-col gap-[20px] w-full'>
                                                <div className='w-full relative'>
                                                    <label className='text-[1rem] text-gray-600'>Roles</label> <br/>
                                                    <input type='text' placeholder='Job title, position'
                                                           className='py-2.5 pl-4 pr-[40px] border border-gray-300 mt-1 w-full rounded-md outline-none'/>
                                                    <IoSearchOutline
                                                        className='absolute text-[1.2rem] top-[40px] right-3 text-gray-500'/>
                                                </div>

                                                <p className='text-[1rem] font-[400] text-gray-500 mt-8'>Suggestions</p>

                                                <div className='grid grid-cols-1 640px:grid-cols-2 gap-[10px]'>
                                                    {
                                                        positionCards?.map((card,index)=> (
                                                            <div key={index}
                                                                 onClick={() => setSelectedPositionCardId(card?.id)}
                                                                className={`${selectedPostionCardId === card?.id ? 'border-primary' : 'border-gray-300'} border cursor-pointer rounded-md p-[15px]`}>
                                                                <div
                                                                    className='flex items-center gap-[10px] justify-between w-full'>
                                                                    <h1 className='text-[1.1rem] font-[500]'>{card?.title}</h1>
                                                                    <div
                                                                        className={` ${selectedPostionCardId === card?.od && 'border-primary'} w-[21px] h-[21px] border border-gray-300  rounded-full flex items-center justify-center cursor-pointer `}>
                                                                        <div className={`${
                                                                            selectedPostionCardId === card?.id ? "bg-[#3B9DF8] scale-[1]" : "bg-transparent scale-[0.7]"} w-[11px] h-[11px] transition-all duration-200 rounded-full`}></div>
                                                                    </div>
                                                                </div>
                                                                <p className='text-[0.9rem] text-gray-500 font-[300] mt-1'>{card?.description}</p>

                                                                <p className='flex items-center gap-[10px] mt-3 text-[0.8rem] text-gray-700 bg-gray-100 py-[5px] px-[10px] w-max'>
                                                                    <BsCashStack/>
                                                                    from ${card?.from_start} per hour
                                                                </p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        step1 === 3 && (
                                            <div className='flex flex-col gap-[20px] w-full'>
                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Location</label> <br/>
                                                    <input type='text' placeholder='e.g. Juri, Moulvibazar'
                                                           className='py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none'/>
                                                </div>
                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Roles</label> <br/>
                                                    <input type='text' placeholder='e.g. 360 operator, steel fixer'
                                                           className='py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none'/>
                                                </div>
                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Name</label> <br/>
                                                    <input type='text' placeholder='e.g. Jhon Deo'
                                                           className='py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none'/>
                                                </div>

                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Phone</label> <br/>
                                                    <input type='number' placeholder='e.g. +8801305282768'
                                                           className='py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none'/>
                                                </div>

                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Certification <span
                                                        className='text-gray-300 font-[400] text-[0.9rem]'>(optional)</span></label>
                                                    <br/>
                                                    <label
                                                        className='w-full h-[200px] border-2 border-dashed border-gray-300 flex items-center flex-col justify-center rounded-md mt-1'>
                                                        <HiOutlineUpload className='text-[2.7rem] text-blue-300'/>
                                                        <p className='flex 640px:flex-row flex-col items-center gap-[5px] text-[1rem] mt-2'>
                                                            <a className='underline text-gray-700 font-bold '>Click
                                                                to upload</a>
                                                            or drag & drop
                                                        </p>
                                                        <input type='file'
                                                               className='py-2.5 px-4 bg-gray-50 mt-1 rounded-md outline-none hidden'/>
                                                    </label>
                                                </div>
                                            </div>
                                        )
                                    }

                                    {
                                        step1 === 4 && (
                                            <div className='flex items-center justify-center w-full flex-col'>
                                                <img src='https://i.ibb.co/LC1yhZG/Prize-cup-for-the-first-place-removebg-preview.png' alt='vector' className='w-[200px]'/>

                                                <h1 className='text-[1.4rem] font-[600] mt-4'>We've receive your application!</h1>
                                                <p className='text-gray-500 text-[1rem] font-[400] mt-1'>We will process it and reach out to you in a days.</p>
                                            </div>
                                        )
                                    }

                                    <div className='w-full flex items-end justify-end mt-12'>
                                        <button disabled={step1 <= 1} type='button' onClick={prevStep1}
                                                className={`${step1 <= 1 && 'cursor-not-allowed'} text-[1rem] text-gray-500 px-6 py-2.5`}>Previous
                                        </button>
                                        <button disabled={step1 > 3} type='button' onClick={nextStep1}
                                                className={`${step1 > 3 && '!bg-blue-300 cursor-not-allowed'} bg-blue-500 py-2.5 px-6 rounded-md text-white`}>
                                            {step1 > 2 ? 'Submit' : 'Next'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {multiStepForm1Code && <BlocksShowCode code='
import React, {useState} from "react";

// react icons
import {MdDone} from "react-icons/md";
import {IoSearchOutline} from "react-icons/io5";
import {BsCashStack} from "react-icons/bs";
import {SlLocationPin} from "react-icons/sl";
import {HiOutlineUpload} from "react-icons/hi";

const MultiStepForm = () => {

    const [step, setStep] = useState(1)

    const handleNextStep = () => {
        if(step < 4) {
            setStep(step + 1)
        }
    };
    const handlePrevStep = () => setStep(step - 1);

    const steps = [
        {
            id: 1,
            name: "account type"
        },
        {
            id: 2,
            name: "personal info"
        },
        {
            id: 3,
            name: "profile data"
        },
    ]

    const [selectedPostionCardId, setSelectedPositionCardId] = useState(false);

    const positionCards = [
        {
            id: 1,
            title: "Front-End Developer",
            description: "remove a border style that was applied at a smaller breakpoint.",
            from_start: 50,
        },
        {
            id: 2,
            title: "Back-End Developer",
            description: "remove a border style that was applied at a smaller breakpoint.",
            from_start: 100,
        },
        {
            id: 3,
            title: "Laravel Developer",
            description: "remove a border style that was applied at a smaller breakpoint.",
            from_start: 80,
        },
        {
            id: 4,
            title: "Mern Stack Developer",
            description: "remove a border style that was applied at a smaller breakpoint.",
            from_start: 110,
        }
    ]

    return (
        <div className="w-full sm:w-[90%] max-w-[700px] mx-auto">
            <div className="w-full sm:flex-row flex-col flex items-center gap-[20px] sm:gap-[10px]">
                {
                    steps?.map((stepItem, index) => (
                        <p key={index} className="flex items-center w-full gap-[10px]">
                            {
                                step <= stepItem.id && (
                                    <p className={`w-[30px] h-[30px] p-[20px] text-gray-500 flex items-center justify-center text-[1.2rem] rounded-full bg-gray-50`}>{stepItem?.id}</p>
                                )
                            }

                            {
                                step >= (stepItem.id + 1) && (
                                    <div
                                        className="p-[10px] h-[40px] w-[40px] rounded-full bg-blue-500 text-white flex items-center justify-center">
                                        <MdDone className="text-[3rem]"/>
                                    </div>
                                )
                            }

                            <p className={`${step > stepItem.id ? "text-blue-500" : "text-gray-600"} text-[0.9rem] font-[400] sm:w-[75%] min-w-fit`}>{stepItem?.name}</p>

                            {
                                index < steps?.length - 1 && (
                                    <div className={`${
                                        step >= (stepItem.id + 1) ? "bg-blue-500" : "bg-gray-300"
                                    } w-full h-[5px] rounded-full`}></div>
                                )
                            }
                        </p>
                    ))
                }
            </div>

            <form className="mt-16 w-full">
                {
                    step === 1 && (
                        <div className="flex flex-col w-full">
                            <div className="w-full relative">
                                <label className="text-[1rem] text-gray-600">Location</label> <br/>
                                <input type="text" placeholder="City, area..."
                                       className="py-2.5 pl-4 pr-[40px] border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                                <SlLocationPin className="absolute top-[42px] right-3 text-gray-500"/>
                            </div>

                            <p className="text-[1rem] font-[400] text-gray-500 mt-8">Suggestions</p>
                            <div className="flex items-center gap-[10px] flex-wrap mt-3">
                                <p className="py-2 px-4 text-[0.9rem] text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer">Moulvibazar</p>
                                <p className="py-2 px-4 text-[0.9rem] text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer">Sylhet</p>
                                <p className="py-2 px-4 text-[0.9rem] text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer">Juri</p>
                                <p className="py-2 px-4 text-[0.9rem] text-gray-500 border border-gray-300 rounded-md hover:bg-gray-100 cursor-pointer">BuwaiBazar</p>
                            </div>
                        </div>
                    )
                }

                {
                    step === 2 && (
                        <div className="flex flex-col gap-[20px] w-full">
                            <div className="w-full relative">
                                <label className="text-[1rem] text-gray-600">Roles</label> <br/>
                                <input type="text" placeholder="Job title, position"
                                       className="py-2.5 pl-4 pr-[40px] border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                                <IoSearchOutline
                                    className="absolute text-[1.2rem] top-[40px] right-3 text-gray-500"/>
                            </div>

                            <p className="text-[1rem] font-[400] text-gray-500 mt-8">Suggestions</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[10px]">
                                {
                                    positionCards?.map((card, index) => (
                                        <div key={index}
                                             onClick={() => setSelectedPositionCardId(card?.id)}
                                             className={`${selectedPostionCardId === card?.id ? "border-primary" : "border-gray-300"} border cursor-pointer rounded-md p-[15px]`}>
                                            <div
                                                className="flex items-center gap-[10px] justify-between w-full">
                                                <h1 className="text-[1.1rem] font-[500]">{card?.title}</h1>
                                                <div
                                                    className={` ${selectedPostionCardId === card?.od && "border-primary"} w-[21px] h-[21px] border border-gray-300  rounded-full flex items-center justify-center cursor-pointer `}>
                                                    <div className={`${
                                                        selectedPostionCardId === card?.id ? "bg-[#3B9DF8] scale-[1]" : "bg-transparent scale-[0.7]"} w-[11px] h-[11px] transition-all duration-200 rounded-full`}></div>
                                                </div>
                                            </div>
                                            <p className="text-[0.9rem] text-gray-500 font-[300] mt-1">{card?.description}</p>

                                            <p className="flex items-center gap-[10px] mt-3 text-[0.8rem] text-gray-700 bg-gray-100 py-[5px] px-[10px] w-max">
                                                <BsCashStack/>
                                                from ${card?.from_start} per hour
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }

                {
                    step === 3 && (
                        <div className="flex flex-col gap-[20px] w-full">
                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Location</label> <br/>
                                <input type="text" placeholder="e.g. Juri, Moulvibazar"
                                       className="py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            </div>
                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Roles</label> <br/>
                                <input type="text" placeholder="e.g. 360 operator, steel fixer"
                                       className="py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            </div>
                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Name</label> <br/>
                                <input type="text" placeholder="e.g. Jhon Deo"
                                       className="py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            </div>

                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Phone</label> <br/>
                                <input type="number" placeholder="e.g. +8801305282768"
                                       className="py-2.5 px-4 border border-gray-300 mt-1 w-full rounded-md outline-none"/>
                            </div>

                            <div className="w-full">
                                <label className="text-[1rem] text-gray-600">Certification <span
                                    className="text-gray-300 font-[400] text-[0.9rem]">(optional)</span></label>
                                <br/>
                                <label
                                    className="w-full h-[200px] border-2 border-dashed border-gray-300 flex items-center flex-col justify-center rounded-md mt-1">
                                    <HiOutlineUpload className="text-[2.7rem] text-blue-300"/>
                                    <p className="flex sm:flex-row flex-col items-center gap-[5px] text-[1rem] mt-2">
                                        <a className="underline text-gray-700 font-bold ">Click
                                            to upload</a>
                                        or drag & drop
                                    </p>
                                    <input type="file"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 rounded-md outline-none hidden"/>
                                </label>
                            </div>
                        </div>
                    )
                }

                {
                    step === 4 && (
                        <div className="flex items-center justify-center w-full flex-col">
                            <img src="https://i.ibb.co/LC1yhZG/Prize-cup-for-the-first-place-removebg-preview.png"
                                 alt="vector" className="w-[200px]"/>

                            <h1 className="text-[1.4rem] font-[600] mt-4">We"ve receive your application!</h1>
                            <p className="text-gray-500 text-[1rem] font-[400] mt-1">We will process it and reach out to you
                                in a days.</p>
                        </div>
                    )
                }

                <div className="w-full flex items-end justify-end mt-12">
                    <button disabled={step <= 1} type="button" onClick={handlePrevStep}
                            className={`${step <= 1 && "cursor-not-allowed"} text-[1rem] text-gray-500 px-6 py-2.5`}>Previous
                    </button>
                    <button disabled={step > 3} type="button" onClick={handleNextStep}
                            className={`${step > 3 && "!bg-blue-300 cursor-not-allowed"} bg-blue-500 py-2.5 px-6 rounded-md text-white`}>
                        {step > 2 ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"multi step form 2"} id={"multi_step_form_2"}/>
                </div>


                <p className="w-full text-text text-[1rem]">
                    A form divided into multiple steps, guiding users through sections one at a time for a more streamlined data entry process.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${multiStepForm2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                multiStepForm2Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setMultiStepForm2Preview, setMultiStepForm2Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                multiStepForm2Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setMultiStepForm2Preview, setMultiStepForm2Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {multiStepForm2Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>
                            <div className='w-full 640px:w-[70%] mx-auto'>
                                <div className='w-full 640px:flex-row flex-col flex items-center gap-[20px] 640px:gap-[10px]'>
                                    {
                                        steps?.map((stepItem, index) => (
                                            <p key={index} className='flex items-center gap-[10px] w-full'>
                                                <p className={` ${
                                                    step >= stepItem.id ? 'bg-blue-500 text-white' : 'bg-gray-50 text-gray-500'
                                                } w-[30px] h-[30px] p-[20px] flex items-center justify-center text-[1.2rem] rounded-full bg-blue-500`}>{stepItem?.id}</p>
                                                {
                                                    index < steps?.length - 1 && (
                                                        <div className={`${
                                                            step >= (stepItem.id + 1) ? 'bg-blue-500' : 'bg-gray-300'
                                                        } w-full h-[5px] rounded-full`}></div>
                                                    )
                                                }
                                            </p>
                                        ))
                                    }
                                </div>

                                <form className='mt-16 w-full'>
                                    {
                                        step === 1 && (
                                            <>
                                                <p className='text-[0.9rem] text-gray-500'>Choose your account type</p>

                                                <div className='mt-6 flex 640px:flex-row flex-col 640px:items-center gap-[20px]'>
                                                    <img src='https://i.ibb.co/tzxHppd/Group-11.png' alt='vector'
                                                         className='w-[60px]'/>
                                                    <div>
                                                        <h1 className='text-[15px] font-[600]'>Personal Account</h1>
                                                        <p className='text-[0.9rem] font-[300] text-gray-400 w-full 640px:w-[80%] mt-1'>Lorem
                                                            ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>

                                                <div className='mt-6 640px:flex-row flex-col flex 640px:items-center gap-[20px]'>
                                                    <img src='https://i.ibb.co/RBtVH0D/Group-11-1.png' alt='vector'
                                                         className='w-[60px]'/>
                                                    <div>
                                                        <h1 className='text-[15px] font-[600]'>Business Account</h1>
                                                        <p className='text-[0.9rem] font-[300] text-gray-400 w-full 640px:w-[80%] mt-1'>Lorem
                                                            ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }

                                    {
                                        step === 2 && (
                                            <>
                                            <div className='flex flex-col gap-[25px] w-full'>
                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Name</label> <br/>
                                                    <input type='text' placeholder='Jhon Deo' className='py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none'/>
                                                </div>
                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Email</label> <br/>
                                                    <input type='email' placeholder='example@gmail.com' className='py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none'/>
                                                </div>
                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Password</label> <br/>
                                                    <input type='password' placeholder='*********' className='py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none'/>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    }

                                    {
                                        step === 3 && (
                                            <>
                                            <div className='flex flex-col gap-[25px]'>
                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Age</label> <br/>
                                                    <input type='number' placeholder='20' className='py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none'/>
                                                </div>
                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Area of interest</label> <br/>
                                                    <input type='text' placeholder='Frontend' className='py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none'/>
                                                </div>
                                                <div className='w-full'>
                                                    <label className='text-[1rem] text-gray-600'>Bio / Description</label> <br/>
                                                    <input type='password' placeholder='Lorem ipsum' className='py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none'/>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    }

                                    <div className='w-full flex items-end justify-end mt-12'>
                                        <button disabled={step <= 1} type='button' onClick={prevStep}
                                                className={`${step <= 1 && 'cursor-not-allowed'} text-[1rem] text-gray-500 px-6 py-2.5`}>Previous
                                        </button>
                                        <button type='button' onClick={nextStep}
                                                className='bg-blue-500 py-2.5 px-6 rounded-md text-white'>
                                            {step > 2 ? 'Submit' : 'Next'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {multiStepForm2Code && <BlocksShowCode code='
import React, {useState} from "react";

const MultiStepForm = () => {

    const [step, setStep] = useState(1)

    const handleNextStep = () => {
        if(step < 3) {
            setStep(step + 1)
        }
    };
    const handlePrevStep = () => setStep(step - 1);

    const steps = [
        {
            id: 1,
            name: "account type"
        },
        {
            id: 2,
            name: "personal info"
        },
        {
            id: 3,
            name: "profile data"
        },
    ]

    return (
        <div className="w-full sm:w-[70%] mx-auto">
            <div className="w-full sm:flex-row flex-col flex items-center gap-[20px] sm:gap-[10px]">
                {
                    steps?.map((stepItem, index) => (
                        <p key={index} className="flex items-center gap-[10px] w-full">
                            <p className={` ${
                                step >= stepItem.id ? "bg-blue-500 text-white" : "bg-gray-50 text-gray-500"
                            } w-[30px] h-[30px] p-[20px] flex items-center justify-center text-[1.2rem] rounded-full bg-blue-500`}>{stepItem?.id}</p>
                            {
                                index < steps?.length - 1 && (
                                    <div className={`${
                                        step >= (stepItem.id + 1) ? "bg-blue-500" : "bg-gray-300"
                                    } w-full h-[5px] rounded-full`}></div>
                                )
                            }
                        </p>
                    ))
                }
            </div>

            <form className="mt-16 w-full">
                {
                    step === 1 && (
                        <>
                            <p className="text-[0.9rem] text-gray-500">Choose your account type</p>

                            <div className="mt-6 flex sm:flex-row flex-col sm:items-center gap-[20px]">
                                <img src="https://i.ibb.co/tzxHppd/Group-11.png" alt="vector"
                                     className="w-[60px]"/>
                                <div>
                                    <h1 className="text-[15px] font-[600]">Personal Account</h1>
                                    <p className="text-[0.9rem] font-[300] text-gray-400 w-full sm:w-[80%] mt-1">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>

                            <div className="mt-6 sm:flex-row flex-col flex sm:items-center gap-[20px]">
                                <img src="https://i.ibb.co/RBtVH0D/Group-11-1.png" alt="vector"
                                     className="w-[60px]"/>
                                <div>
                                    <h1 className="text-[15px] font-[600]">Business Account</h1>
                                    <p className="text-[0.9rem] font-[300] text-gray-400 w-full sm:w-[80%] mt-1">Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    step === 2 && (
                        <>
                            <div className="flex flex-col gap-[25px] w-full">
                                <div className="w-full">
                                    <label className="text-[1rem] text-gray-600">Name</label> <br/>
                                    <input type="text" placeholder="Jhon Deo"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none"/>
                                </div>
                                <div className="w-full">
                                    <label className="text-[1rem] text-gray-600">Email</label> <br/>
                                    <input type="email" placeholder="example@gmail.com"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none"/>
                                </div>
                                <div className="w-full">
                                    <label className="text-[1rem] text-gray-600">Password</label> <br/>
                                    <input type="password" placeholder="*********"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none"/>
                                </div>
                            </div>
                        </>
                    )
                }

                {
                    step === 3 && (
                        <>
                            <div className="flex flex-col gap-[25px]">
                                <div className="w-full">
                                    <label className="text-[1rem] text-gray-600">Age</label> <br/>
                                    <input type="number" placeholder="20"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none"/>
                                </div>
                                <div className="w-full">
                                    <label className="text-[1rem] text-gray-600">Area of interest</label> <br/>
                                    <input type="text" placeholder="Frontend"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none"/>
                                </div>
                                <div className="w-full">
                                    <label className="text-[1rem] text-gray-600">Bio / Description</label> <br/>
                                    <input type="password" placeholder="Lorem ipsum"
                                           className="py-2.5 px-4 bg-gray-50 mt-1 w-full rounded-md outline-none"/>
                                </div>
                            </div>
                        </>
                    )
                }

                <div className="w-full flex items-end justify-end mt-12">
                    <button disabled={step <= 1} type="button" onClick={handlePrevStep}
                            className={`${step <= 1 && "cursor-not-allowed"} text-[1rem] text-gray-500 px-6 py-2.5`}>Previous
                    </button>
                    <button type="button" onClick={handleNextStep}
                            className="bg-blue-500 py-2.5 px-6 rounded-md text-white">
                        {step > 2 ? "Submit" : "Next"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MultiStepForm;
                    '/>
                    }
                </div>

                <BlocksFooter backUrl='/blocks/contact-form' backName='contact form' forwardName='newsletter form' forwardUrl='/blocks/newsletter-form'/>
            </div>


            <Helmet>
                <title>Blocks - Multi-Step Form</title>
            </Helmet>
        </aside>
    );
};

export default MultipageForm;
