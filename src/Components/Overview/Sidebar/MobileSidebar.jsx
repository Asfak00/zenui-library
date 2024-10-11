import React, { useState } from "react";

// icons
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";

// react router dom
import { Link, useNavigate } from "react-router-dom";
import UpdateBadge from "../../../Shared/UpdateBadge.jsx";
import NewBadge from "../../../Shared/NewBadge.jsx";

const MobileSidebar = ({ startContent, setStartContent }) => {
    const [start, setStart] = useState(true);
    const [components, setComponents] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [blocks, setBlocks] = useState(true);


    document.addEventListener('click', (event)=>{
        if(!event.target.closest('.mobileSidebar') && !event.target.closest('.mobilesidebarIcon')){
            setSidebarOpen(false)
        }
    })

    return (
        <>
            <div className='w-full 1024px:hidden bg-border mt-[4.9rem] 425px:mt-[4.3rem] py-3 fixed 425px:top-0 top-[-10px] px-5 425px:px-10 z-30'>
                <CiMenuFries className='text-[1.7rem] rotate-[180deg] text-text mobilesidebarIcon' onClick={()=>setSidebarOpen(true)}/>
            </div>
            <aside className={` ${sidebarOpen ? 'translate-x-0 opacity-100 z-40' : 'translate-x-[-200px] opacity-0 z-[-1]'} py-6 pt-[6rem] px-6 640px:px-10 border-r h-[100vh] border-border flex-col gap-4 overflow-y-scroll fixed top-0 left-0 w-[80%] 640px:w-[320px] bg-secondary z-20 flex mobileSidebar transition-all duration-500`}>
                {/*  get starts  */}
                <div>
                    <h3
                        className={`${start ? 'text-[#0471d6]' : 'text-gray-500'} flex items-center justify-between gap-1 text-[1rem] font-[500] capitalize cursor-pointer `}
                        onClick={() => setStart(!start)}
                    >
                        getting-started

                        <MdKeyboardArrowRight
                            className={`${
                                start && "rotate-[90deg] !text-[#0471d6]"
                            } text-[1.5rem] text-gray-500 transition-all duration-300`}
                        />
                    </h3>
                    <div
                        className={`grid overflow-hidden transition-all duration-500 ${
                            start ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
                        }`}
                    >
                        <ul
                            className={`flex flex-col ml-2 mt-3 overflow-hidden pl-4`}
                        >
                            <Link
                                to="/getting-started/overview"
                                className={`${
                                    startContent === 0 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] !text-secondary font-[500]"
                                }  text-text border-l border-[#9caebc]`}
                                onClick={() => setStartContent(0)}
                            >
                                Overview
                            </Link>
                            <Link
                                to="/getting-started/templates"
                                className={`${
                                    startContent === 1 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] !text-secondary font-[500]"
                                }   border-l text-text border-[#9caebc] flex items-center gap-3`}
                                onClick={() => setStartContent(1)}
                            >
                                templates
                                {/*<span*/}
                                {/*    className="py-1 px-3 rounded-[20px] text-[12px] flex items-center gap-2 font-[600] text-red-800 bg-red-50">*/}
                                {/*  <img src="/hotIcon.png" alt="hot Icon" className="w-[10px]"/>*/}
                                {/*  HOT*/}
                                {/*</span>*/}

                            </Link>
                            {/*<Link*/}
                            {/*  to="/getting-started/faq"*/}
                            {/*  className={`${*/}
                            {/*    startContent === 2 &&*/}
                            {/*    "border-l border-primary bg-[#f3f6f9] font-[500]"*/}
                            {/*  } rounded  border-l border-border`}*/}
                            {/*  onClick={() => setStartContent(2)}*/}
                            {/*>*/}
                            {/*  faq*/}
                            {/*</Link>*/}
                        </ul>
                    </div>
                </div>

                {/*  components  */}
                <div>
                    <h3
                        className={`${components ? 'text-[#0471d6]' : 'text-gray-500'} flex items-center justify-between gap-1 text-[1rem]  font-[500] capitalize cursor-pointer`}
                        onClick={() => setComponents(!components)}
                    >
                        Components

                        <MdKeyboardArrowRight
                            className={`${
                                components && "rotate-[90deg] !text-[#0471d6]"
                            } text-[1.5rem] text-gray-500 transition-all duration-300`}
                        />
                    </h3>

                    <div
                        className={`grid overflow-hidden transition-all duration-500 ${
                            components ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
                        }`}
                    >
                        <ul
                            className={`flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4`}
                        >
                            <Link
                                to={"/components/all-components"}
                                className={`${
                                    startContent === 2 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(2)}
                            >
                                All Components
                            </Link>

                            {/* inputs */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                            >
                                Inputs
                            </Link>

                            <Link
                                to={"/components/input-text"}
                                className={`${
                                    startContent === 3 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(3)}
                            >
                                Input

                            </Link>
                            <Link
                                to={"/components/input-textarea"}
                                className={`${
                                    startContent === 4 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(4)}
                            >
                                Textarea
                            </Link>
                            <Link
                                to={"/components/input-number"}
                                className={`${
                                    startContent === 5 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(5)}
                            >
                                Number

                            </Link>
                            <Link
                                to={"/components/input-checkbox"}
                                className={`${
                                    startContent === 6 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(6)}
                            >
                                Checkbox

                            </Link>
                            <Link
                                to={"/components/input-switch"}
                                className={`${
                                    startContent === 7 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(7)}
                            >
                                Switch
                            </Link>
                            <Link
                                to={"/components/strong-password"}
                                className={`${
                                    startContent === 8 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(8)}
                            >
                                Strong Password

                            </Link>
                            <Link
                                to={"/components/input-select"}
                                className={`${
                                    startContent === 9 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(9)}
                            >
                                Select

                            </Link>
                            <Link
                                to={"/components/input-radio"}
                                className={`${
                                    startContent === 10 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(10)}
                            >
                                Radio
                            </Link>
                            <Link
                                to={"/components/input-range"}
                                className={`${
                                    startContent === 11 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(11)}
                            >
                                Range

                            </Link>
                            {/*<Link*/}
                            {/*  to={"/components/input-radio-group"}*/}
                            {/*  className={`${*/}
                            {/*    startContent === 11 &&*/}
                            {/*    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
                            {/*  }   border-l border-[#9caebc] flex items-center gap-[10px]`}*/}
                            {/*  onClick={() => setStartContent(11)}*/}
                            {/*>*/}
                            {/*  Radio Group*/}

                            {/*  <NewBadge/>*/}
                            {/*</Link>*/}
                            <Link
                                to={"/components/input-file"}
                                className={`${
                                    startContent === 12 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(12)}
                            >
                                File
                            </Link>
                            <Link
                                to={"/components/otp-input"}
                                className={`${
                                    startContent === 13 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(13)}
                            >
                                OTP Input

                            </Link>

                            {/* buttons */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest  font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                            >
                                Buttons
                            </Link>
                            <Link
                                to={"/components/normal-button"}
                                className={`${
                                    startContent === 14 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(14)}
                            >
                                normal button

                            </Link>
                            <Link
                                to={"/components/login-buttons"}
                                className={`${
                                    startContent === 15 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(15)}
                            >
                                login Button

                            </Link>
                            <Link
                                to={"/components/dropdown-button"}
                                className={`${
                                    startContent === 16 &&
                                    "border-l rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(16)}
                            >
                                Dropdown Button

                            </Link>
                            <Link
                                to={"/components/animated-button"}
                                className={`${
                                    startContent === 17 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(17)}
                            >
                                animated button

                            </Link>

                            {/* SURFACES */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase border-l border-border !text-[0.750rem] `}
                            >
                                SURFACES
                            </Link>
                            <Link
                                to={"/components/cards"}
                                className={`${
                                    startContent === 18 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(18)}
                            >
                                Cards

                            </Link>
                            <Link
                                to={"/components/animated-cards"}
                                className={`${
                                    startContent === 53 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(53)}
                            >
                                Animated Cards

                                <NewBadge/>
                            </Link>
                            <Link
                                to={"/components/according"}
                                className={`${
                                    startContent === 19 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(19)}
                            >
                                Accordion
                            </Link>
                            {/*<Link*/}
                            {/*    to={"/components/resizable-card"}*/}
                            {/*    className={`${*/}
                            {/*        startContent === 20 &&*/}
                            {/*        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
                            {/*    }   border-l border-[#9caebc] flex items-center gap-[10px]`}*/}
                            {/*    onClick={() => setStartContent(20)}*/}
                            {/*>*/}
                            {/*  Resizable Card*/}

                            {/*  <NewBadge/>*/}
                            {/*</Link>*/}
                            <Link
                                to={"/components/appbar"}
                                className={`${
                                    startContent === 20 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(20)}
                            >
                                App bar
                            </Link>
                            <Link
                                to={"/components/image-gallery"}
                                className={`${
                                    startContent === 21 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(21)}
                            >
                                Image Gallery
                            </Link>

                            {/* navigation */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase border-l border-border !text-[0.750rem] `}
                            >
                                navigation
                            </Link>
                            <Link
                                to={"/components/pagination"}
                                className={`${
                                    startContent === 22 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(22)}
                            >
                                Pagination
                            </Link>
                            <Link
                                to={"/components/progress-bar"}
                                className={`${
                                    startContent === 23 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(23)}
                            >
                                Progress Bar

                            </Link>
                            <Link
                                to={"/components/chip"}
                                className={`${
                                    startContent === 24 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(24)}
                            >
                                Chip

                            </Link>
                            <Link
                                to={"/components/breadcrumb"}
                                className={`${
                                    startContent === 25 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(25)}
                            >
                                Breadcrumb

                            </Link>
                            <Link
                                to={"/components/rating"}
                                className={`${
                                    startContent === 26 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(26)}
                            >
                                Rating

                            </Link>
                            <Link
                                to={"/components/stepper"}
                                className={`${
                                    startContent === 27 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(27)}
                            >
                                Stepper

                            </Link>
                            <Link
                                to={"/components/modal"}
                                className={`${
                                    startContent === 28 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(28)}
                            >
                                modal

                            </Link>
                            <Link
                                to={"/components/tabs"}
                                className={`${
                                    startContent === 29 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(29)}
                            >
                                tabs
                            </Link>

                            {/* FEEDBACK */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase border-l border-border !text-[0.750rem] `}
                            >
                                feedback
                            </Link>
                            <Link
                                to={"/components/skeleton"}
                                className={`${
                                    startContent === 30 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(30)}
                            >
                                skeleton

                            </Link>
                            <Link
                                to={"/components/alert-message"}
                                className={`${
                                    startContent === 31 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(31)}
                            >
                                alert message
                            </Link>
                            <Link
                                to={"/components/dialog-message"}
                                className={`${
                                    startContent === 32 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(32)}
                            >
                                dialog
                            </Link>
                            <Link
                                to={"/components/testimonials"}
                                className={`${
                                    startContent === 33 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(33)}
                            >
                                Testimonial
                            </Link>
                            <Link
                                to={"/components/loader"}
                                className={`${
                                    startContent === 34 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(34)}
                            >
                                Loader
                            </Link>
                            <Link
                                to={"/components/notification"}
                                className={`${
                                    startContent === 35 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(35)}
                            >
                                Notification

                            </Link>

                            {/* data display */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                            >
                                data display
                            </Link>
                            <Link
                                to={"/components/badge"}
                                className={`${
                                    startContent === 36 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(36)}
                            >
                                Badge

                            </Link>
                            <Link
                                to={"/components/tooltip"}
                                className={`${
                                    startContent === 37 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(37)}
                            >
                                tooltip

                                <UpdateBadge/>
                            </Link>
                            {/*<Link*/}
                            {/*  to={"/components/chart"}*/}
                            {/*  className={`${*/}
                            {/*    startContent === 38 &&*/}
                            {/*    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
                            {/*  }   border-l border-[#9caebc] flex items-center gap-[10px]`}*/}
                            {/*  onClick={() => setStartContent(38)}*/}
                            {/*>*/}
                            {/*  Pie Chart*/}

                            {/*  <NewBadge/>*/}
                            {/*</Link>*/}
                            <Link
                                to={"/components/timeline"}
                                className={`${
                                    startContent === 38 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(38)}
                            >
                                timeline

                            </Link>

                            {/* Randoms */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                            >
                                Randoms
                            </Link>

                            <Link
                                to={"/components/code"}
                                className={`${
                                    startContent === 39 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(39)}
                            >
                                Code
                            </Link>
                            <Link
                                to={"/components/snippet"}
                                className={`${
                                    startContent === 40 &&
                                    "border-l rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(40)}
                            >
                                Snippet
                            </Link>
                        </ul>
                    </div>
                </div>

                {/*  blocks  */}
                <div>
                    <h3
                        className={`${blocks ? 'text-[#0471d6]' : 'text-gray-500'} flex items-center justify-between gap-1 text-[1rem] font-[500] capitalize cursor-pointer`}
                        onClick={() => setBlocks(!blocks)}
                    >
                        <div className='flex items-center gap-[10px]'>
                            Blocks
                            <NewBadge/>
                        </div>

                        <MdKeyboardArrowRight
                            className={`${
                                blocks && "rotate-[90deg] !text-[#0471d6]"
                            } text-[1.5rem] text-gray-500 transition-all duration-300`}
                        />
                    </h3>

                    <div
                        className={`grid overflow-hidden transition-all duration-500 ${
                            blocks ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
                        }`}
                    >
                        <ul
                            className={`flex flex-col ml-2 text-text mt-3 overflow-hidden pl-4`}
                        >
                            <Link
                                to={"/blocks/all-blocks"}
                                className={`${
                                    startContent === 41 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] `}
                                onClick={() => setStartContent(41)}
                            >
                                All Blocks
                            </Link>

                            {/* sections */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                            >
                                Sections
                            </Link>

                            <Link
                                to={"/blocks/responsive-navbar"}
                                className={`${
                                    startContent === 42 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(42)}
                            >
                                Responsive Navbar
                            </Link>
                            <Link
                                to={"/blocks/hero-section"}
                                className={`${
                                    startContent === 43 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(43)}
                            >
                                Hero Section
                            </Link>
                            <Link
                                to={"/blocks/pricing-section"}
                                className={`${
                                    startContent === 44 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(44)}
                            >
                                Pricing Section
                            </Link>
                            <Link
                                to={"/blocks/responsive-footer"}
                                className={`${
                                    startContent === 45 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(45)}
                            >
                                Responsive Footer
                            </Link>
                            {/*<Link*/}
                            {/*    to={"/blocks/testimonial-section"}*/}
                            {/*    className={`${*/}
                            {/*        startContent === 46 &&*/}
                            {/*        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
                            {/*    }   border-l border-[#9caebc]`}*/}
                            {/*    onClick={() => setStartContent(46)}*/}
                            {/*>*/}
                            {/*  Testimonial Section*/}
                            {/*</Link>*/}

                            {/* Forms */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                            >
                                Forms
                            </Link>

                            <Link
                                to={"/blocks/contact-form"}
                                className={`${
                                    startContent === 46 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(46)}
                            >
                                Contact Form
                            </Link>
                            {/*<Link*/}
                            {/*    to={"/blocks/form-validation"}*/}
                            {/*    className={`${*/}
                            {/*        startContent === 43 &&*/}
                            {/*        "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"*/}
                            {/*    }   border-l border-[#9caebc]`}*/}
                            {/*    onClick={() => setStartContent(43)}*/}
                            {/*>*/}
                            {/*  Form Validation*/}
                            {/*</Link>*/}
                            <Link
                                to={"/blocks/multi-step-form"}
                                className={`${
                                    startContent === 47 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(47)}
                            >
                                Multi-Step Form
                            </Link>
                            <Link
                                to={"/blocks/newsletter-form"}
                                className={`${
                                    startContent === 48 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(48)}
                            >
                                Newsletter Form
                            </Link>

                            {/* empty pages */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                            >
                                Empty Pages
                            </Link>

                            <Link
                                to={"/blocks/404-page"}
                                className={`${
                                    startContent === 49 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(49)}
                            >
                                404 Page
                            </Link>
                            <Link
                                to={"/blocks/empty-page"}
                                className={`${
                                    startContent === 50 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(50)}
                            >
                                Empty Page
                            </Link>

                            {/* Randoms */}
                            <Link
                                to={""}
                                className={`sectionHeader tracking-widest  font-[500] hover:font-[500] relative mt-4 uppercase  border-l border-border !text-[0.750rem] `}
                            >
                                random
                            </Link>
                            <Link
                                to={"/blocks/responsive-search-bar"}
                                className={`${
                                    startContent === 51 &&
                                    "border-l rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc] flex items-center gap-[10px]`}
                                onClick={() => setStartContent(51)}
                            >
                                Responsive Search Bar
                            </Link>
                            <Link
                                to={"/blocks/responsive-sidebar"}
                                className={`${
                                    startContent === 52 &&
                                    "border-l  rounded-tr rounded-br border-primary bg-[#3B9DF8] text-secondary font-[500]"
                                }   border-l border-[#9caebc]`}
                                onClick={() => setStartContent(52)}
                            >
                                Responsive Sidebar
                            </Link>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default MobileSidebar;
