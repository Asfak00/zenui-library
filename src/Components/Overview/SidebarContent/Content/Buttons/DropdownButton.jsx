import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ShowCode from "../../../../../Shared/ShowCode";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import {MdDone, MdKeyboardArrowDown} from "react-icons/md";
import {BiCopy, BiEdit} from "react-icons/bi";
import {AiOutlineDelete, AiOutlineSchedule} from "react-icons/ai";
import {LuSaveAll} from "react-icons/lu";

const DropdownButton = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // publish buttons
    const [publishPreview, setPublishPreview] = useState(true);
    const [publishCode, setPublishCode] = useState(false);

    const handlePublishPreview = () => {
        setPublishPreview(true);
        setPublishCode(false);
    };

    const handlePublishCode = () => {
        setPublishCode(true);
        setPublishPreview(false);
    };

    // action button
    const [actionButtonPreview, setActionButtonPreview] = useState(true);
    const [actionButtonCode, setActionButtonCode] = useState(false);

    const handleActionButtonPreview = () => {
        setActionButtonPreview(true);
        setActionButtonCode(false);
    };

    const handleActionButtonCode = () => {
        setActionButtonCode(true);
        setActionButtonPreview(false);
    };

    // action button
    const [arrowSendButtonPreview, setArrowSendButtonPreview] = useState(true);
    const [arrowSendButtonCode, setArrowSendButtonCode] = useState(false);

    const handleArrowSendButtonPreview = () => {
        setArrowSendButtonPreview(true);
        setArrowSendButtonCode(false);
    };

    const handleArrowSendButtonCode = () => {
        setArrowSendButtonCode(true);
        setArrowSendButtonPreview(false);
    };

    // publish button actions
    const [publishButtonActive, setPublishButtonActive] = useState(false);
    const [actionButtonActive, setActionButtonActive] = useState(false);
    const [actionButtonActive2, setActionButtonActive2] = useState(false);
    const [publishButtonText, setPublishButtonText] = useState('Publish');
    const [actionButtonText, setActionButtonText] = useState('Mark as read');
    const [sendButtonText, setSendButtonText] = useState('Send');

    const publishButtonContent = [
        'Publish', 'Set as draft'
    ]
    const actionContents = [
        {
            label: 'Mark as read',
            icon: <MdDone/>
        },{
            label: 'Copy',
            icon: <BiCopy/>
        },{
            label: 'Edit',
            icon: <BiEdit/>
        },
    ]

    const sendButtonContent = [
        {
            label: 'Schedule for later',
            icon: <AiOutlineSchedule/>
        },{
            label: 'Save draft',
            icon: <LuSaveAll/>
        },{
            label: 'Delete',
            icon: <AiOutlineDelete/>
        },
    ]

    const handlePublishButtonClick = (item) => {
        setPublishButtonText(item)
        setPublishButtonActive(false)
    }

    const handleActionButtonClick = (item) => {
        setActionButtonText(item)
        setActionButtonActive(false)
    }

    const handleSendButtonClick = (item) => {
        setSendButtonText(item)
        setActionButtonActive2(false)
    }

    document.addEventListener('click', (event)=>{
        if(!event.target.closest('.publishButtonOptions') && !event.target.closest('.publishButton')){
            setPublishButtonActive(false)
            setActionButtonActive(false)
        }
    })

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"Publish Button"} id={"publish_button"} />

                <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    Dropdown menu with a publish button, offering various publishing options for content management.
                </p>

                <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${publishPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                        <button
                            className={`${
                                publishPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handlePublishPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                publishCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handlePublishCode}
                        >
                            Code
                        </button>
                    </div>
                    {publishPreview && (
                        <div className={`p-8 ${publishButtonActive ? 'mb-20' : 'mb-4'} flex flex-wrap items-center gap-5 justify-center transition-all duration-300`}>
                            <div className='flex items-center rounded bg-primary border-none outline-none text-secondary justify-between relative'>
                                <button
                                    className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
                                    {publishButtonText}
                                </button>

                                <div onClick={()=> setPublishButtonActive(!publishButtonActive)} className='bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton'>
                                    <MdKeyboardArrowDown className='text-[2rem]'/>
                                </div>

                                <ul className={`${publishButtonActive ? 'opacity-100 z-20 translate-y-0' : ' opacity-0 z-[-1] translate-y-[-5px]'} publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white absolute top-[46px] rounded right-0 text-text text-[0.9rem]`}>
                                    {
                                        publishButtonContent?.map((item, index)=> (
                                            <li className='py-2 px-6 hover:bg-gray-50 rounded-t cursor-pointer' key={index} onClick={()=> handlePublishButtonClick(item)}>{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    )}

                    {publishCode &&
                        <ShowCode code='
import React, {useState} from "react";
import {MdKeyboardArrowDown} from "react-icons/md";

const DropdownButton = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [buttonText, setButtonText] = useState("Publish");

    const dropdownList = [
        "Publish", "Set as draft"
    ]

    const handleOptionClick = (item) => {
        setButtonText(item)
        setIsButtonActive(false)
    }

    return (
        <div
            className="flex items-center rounded bg-primary border-none outline-none text-secondary justify-between relative">
            <button
                className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
                {buttonText}
            </button>

            <div onClick={() => setIsButtonActive(!isButtonActive)}
                 className="bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">
                <MdKeyboardArrowDown className="text-[2rem]"/>
            </div>

            <ul className={`${isButtonActive ? "opacity-100 z-20 translate-y-0" : " opacity-0 z-[-1] translate-y-[-5px]"} publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white absolute top-[46px] rounded right-0 text-text text-[0.9rem]`}>
                { dropdownList?.map((item, index) => (
                        <li className="py-2 px-6 hover:bg-gray-50 rounded-t cursor-pointer" key={index}
                            onClick={() => handleOptionClick(item)}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default DropdownButton;
                    '
                    />}
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"action Button"} id={"action_button"} />
                </div>

                <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    Dropdown menu with an action button, providing a range of selectable actions for quick task execution.
                </p>

                <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${actionButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                        <button
                            className={`${
                                actionButtonPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleActionButtonPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                actionButtonCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleActionButtonCode}
                        >
                            Code
                        </button>
                    </div>
                    {actionButtonPreview && (
                        <div className={`p-8 ${actionButtonActive ? 'mb-28' : 'mb-4'} flex flex-wrap items-center gap-5 justify-center transition-all duration-300`}>
                            <div className='flex items-center rounded bg-primary border-none outline-none text-secondary justify-between relative'>
                                <button
                                    className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
                                    {actionButtonText}
                                </button>

                                <div onClick={()=> setActionButtonActive(!actionButtonActive)} className='bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton'>
                                    <MdKeyboardArrowDown className='text-[2rem]'/>
                                </div>

                                <ul className={`${actionButtonActive ? 'opacity-100 z-20 translate-y-0' : ' opacity-0 z-[-1] translate-y-[-5px]'} publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-full absolute top-[46px] rounded right-0 text-text text-[0.9rem]`}>
                                    {
                                        actionContents?.map((item, index)=> (
                                            <li className='py-2 px-3 flex items-center gap-[5px] hover:bg-gray-50 rounded-t cursor-pointer' key={index} onClick={()=> handleActionButtonClick(item.label)}>
                                                {item.icon}
                                                {item.label}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    )}

                    {actionButtonCode &&
                        <ShowCode code='
import React, {useState} from "react";
import {MdDone, MdKeyboardArrowDown} from "react-icons/md";
import {BiCopy, BiEdit} from "react-icons/bi";

const DropdownButton = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [buttonText, setButtonText] = useState("Publish");

    const actionContents = [
        {
            label: "Mark as read",
            icon: <MdDone/>
        },{
            label: "Copy",
            icon: <BiCopy/>
        },{
            label: "Edit",
            icon: <BiEdit/>
        },
    ]

    const handleOptionClick = (item) => {
        setButtonText(item)
        setIsButtonActive(false)
    }

    return (
        <div
            className="flex items-center rounded bg-primary border-none outline-none text-secondary justify-between relative">
            <button
                className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
                {buttonText}
            </button>

            <div onClick={() => setIsButtonActive(!isButtonActive)}
                 className="bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">
                <MdKeyboardArrowDown className="text-[2rem]"/>
            </div>

            <ul className={`${isButtonActive ? "opacity-100 z-20 translate-y-0" : " opacity-0 z-[-1] translate-y-[-5px]"} publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-full absolute top-[46px] rounded right-0 text-text text-[0.9rem]`}>
                {
                    actionContents?.map((item, index) => (
                        <li className="py-2 px-3 flex items-center gap-[5px] hover:bg-gray-50 rounded-t cursor-pointer"
                            key={index} onClick={() => handleOptionClick(item.label)}>
                            {item.icon}
                            {item.label}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default DropdownButton;
                    '
                    />}
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"send Button with arrow"} id={"send_button_with_arrow"} />
                </div>

                <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    Dropdown menu with a send button and arrow, allowing users to choose from multiple sending options.
                </p>

                <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${arrowSendButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                        <button
                            className={`${
                                arrowSendButtonPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleArrowSendButtonPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                arrowSendButtonCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleArrowSendButtonCode}
                        >
                            Code
                        </button>
                    </div>
                    {arrowSendButtonPreview && (
                        <div className={`p-8 ${actionButtonActive2 ? 'mb-32' : 'mb-4'} flex flex-wrap items-center gap-5 justify-center transition-all duration-300`}>
                            <div className='flex items-center rounded bg-primary border-none outline-none text-secondary justify-between relative'>
                                <button
                                    className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
                                    {sendButtonText}
                                </button>

                                <div onClick={()=> setActionButtonActive2(!actionButtonActive2)} className='bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton'>
                                    <MdKeyboardArrowDown className='text-[2rem]'/>
                                </div>

                                <ul className={`${actionButtonActive2 ? 'opacity-100 z-20 translate-y-4' : ' opacity-0 z-[-1] translate-y-[-20px]'} publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-max w-full absolute top-[46px] rounded border border-[#e6e6e6] right-0 text-text text-[0.9rem]`}>
                                    <div className='absolute -top-[8px] right-3 border-l border-b border-[#e6e6e6] bg-white w-[15px] h-[15px] rotate-[135deg]'></div>
                                    {
                                        sendButtonContent?.map((item, index)=> (
                                            <li className='z-20 py-2 px-3 flex items-center gap-[8px] hover:bg-gray-50 rounded-t cursor-pointer' key={index} onClick={()=> handleSendButtonClick(item.label)}>
                                                <span className='text-primary'>{item.icon}</span>
                                                {item.label}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    )}

                    {arrowSendButtonCode &&
                        <ShowCode code='
import React, {useState} from "react";

import {MdKeyboardArrowDown} from "react-icons/md";
import {AiOutlineDelete, AiOutlineSchedule} from "react-icons/ai";
import {LuSaveAll} from "react-icons/lu";

const DropdownButton = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);
    const [buttonText, setButtonText] = useState("Publish");

    const sendButtonContent = [
        {
            label: "Schedule for later",
            icon: <AiOutlineSchedule/>
        },{
            label: "Save draft",
            icon: <LuSaveAll/>
        },{
            label: "Delete",
            icon: <AiOutlineDelete/>
        },
    ]

    const handleOptionClick = (item) => {
        setButtonText(item)
        setIsButtonActive(false)
    }

    return (
        <div
            className="flex items-center rounded bg-primary border-none outline-none text-secondary justify-between relative">
            <button
                className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
                {buttonText}
            </button>

            <div onClick={() => setIsButtonActive(!isButtonActive)}
                 className="bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton">
                <MdKeyboardArrowDown className="text-[2rem]"/>
            </div>

            <ul className={`${isButtonActive ? "opacity-100 z-20 translate-y-4" : " opacity-0 z-[-1] translate-y-[-20px]"} publishButtonOptions transition-all duration-500 flex flex-col boxShadow bg-white py-1 w-max w-full absolute top-[46px] rounded border border-[#e6e6e6] right-0 text-text text-[0.9rem]`}>
                <div
                    className="absolute -top-[8px] right-3 border-l border-b border-[#e6e6e6] bg-white w-[15px] h-[15px] rotate-[135deg]"></div>
                {
                    sendButtonContent?.map((item, index) => (
                        <li className="z-20 py-2 px-3 flex items-center gap-[8px] hover:bg-gray-50 rounded-t cursor-pointer"
                            key={index} onClick={() => handleOptionClick(item.label)}>
                            <span className="text-primary">{item.icon}</span>
                            {item.label}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default DropdownButton;
                    '
                    />}
                </div>

                <OverviewFooter backUrl='/components/login-buttons' backName='login button' forwardUrl='/components/animated-button' forwardName='animated button'/>
            </div>

            <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
                <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                    CONTENTS
                </h2>
                <a
                    href="#publish_button"
                    className={`${
                        contentActiveTab === 1 && "!text-primary !border-primary"
                    } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                    onClick={() => setContentActiveTab(1)}
                >
                    Publish Button
                </a>
                <a
                    href="#action_button"
                    className={`${
                        contentActiveTab === 2 && "!text-primary !border-primary"
                    } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                    onClick={() => setContentActiveTab(2)}
                >
                    Action Button
                </a>
                <a
                    href="#send_button_with_arrow"
                    className={`${
                        contentActiveTab === 3 && "!text-primary !border-primary"
                    } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                    onClick={() => setContentActiveTab(3)}
                >
                    Send Button With Arrow
                </a>
                <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
            </div>
            <Helmet>
                <title>Buttons - Dropdown Button</title>
            </Helmet>
        </aside>
    );
};

export default DropdownButton;
