import React, { useState } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";

// icons
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import {FaArrowLeftLong} from "react-icons/fa6";

// toggle card view
import {useToggleCardView} from "../../../../../Utils/ButtonToggle.js";


const urlErrorPage = () => {

    const[wrongRoute1Preview, setWrongRoute1Preview] = useState(true);
    const[wrongRoute1Code, setWrongRoute1Code] = useState(false);

    const[wrongRoute2Preview, setWrongRoute2Preview] = useState(true);
    const[wrongRoute2Code, setWrongRoute2Code] = useState(false);

    const[wrongRoute3Preview, setWrongRoute3Preview] = useState(true);
    const[wrongRoute3Code, setWrongRoute3Code] = useState(false);

    const[wrongRoute4Preview, setWrongRoute4Preview] = useState(true);
    const[wrongRoute4Code, setWrongRoute4Code] = useState(false);

    const[wrongRoute5Preview, setWrongRoute5Preview] = useState(true);
    const[wrongRoute5Code, setWrongRoute5Code] = useState(false);

    const toggleCardView = useToggleCardView()

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"404 page 1"} id={"empty_page_1"} />

                <p className="w-full text-text text-[1rem]">
                    A 404 page is a custom error page that informs users the requested page is not found, often offering navigation links to guide them back to the homepage or other sections.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${wrongRoute1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                wrongRoute1Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setWrongRoute1Preview, setWrongRoute1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                wrongRoute1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setWrongRoute1Preview, setWrongRoute1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {wrongRoute1Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow px-10 w-full 1260px:min-h-[600px] py-16 flex flex-col justify-center rounded-xl' style={{background: "url('https://i.ibb.co/02DvRcV/404.jpg')", backgroundSize: 'cover'}}>

                                <h1 className='text-[2rem] 640px:text-[3rem] font-[600] text-white w-full 1260px:w-[50%]'>Go Home , You’re Drunk!</h1>

                                <button className='py-3 px-8 w-max rounded-full bg-[#92E3A9] hover:bg-[#4ec46f] text-white mt-5'>BACK TO HOME</button>

                            </div>

                        </div>
                    )}

                    {wrongRoute1Code && <BlocksShowCode code='
import React from "react";

const Page404 = () => {

    return (
        <div className="boxShadow px-10 w-full lg:min-h-[600px] py-16 flex flex-col justify-center rounded-xl"
             style={{background: "url("https://i.ibb.co/02DvRcV/404.jpg")", backgroundSize: "cover"}}>

            <h1 className="text-[2rem] sm:text-[3rem] font-[600] text-white w-full lg:w-[50%]">Go Home , You’re
                Drunk!</h1>

            <button className="py-3 px-8 w-max rounded-full bg-[#92E3A9] hover:bg-[#4ec46f] text-white mt-5">BACK TO
                HOME
            </button>

        </div>
    );
};

export default Page404;
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"404 page 2"} id={"empty_page_2"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A 404 page is a custom error page that informs users the requested page is not found, often offering navigation links to guide them back to the homepage or other sections.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${wrongRoute2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                wrongRoute2Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setWrongRoute2Preview, setWrongRoute2Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                wrongRoute2Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setWrongRoute2Preview, setWrongRoute2Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {wrongRoute2Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow px-10 w-full 1260px:flex-row gap-[30px] 1260px:gap-0 flex-col flex items-center justify-evenly py-20 rounded-xl'>

                                <div className='w-[80%] 1260px:w-[40%]'>
                                    <img src='https://i.ibb.co/HdHH4Pb/Frame-6.png' alt='illustration'
                                         className='w-full'/>
                                </div>

                                <div className='w-full 1260px:w-[30%] text-center 1260px:text-start'>
                                    <h1 className='text-[2.5rem] 640px:text-[4rem] font-[800] text-[#566FA7] leading-[80px]'>OOPS!</h1>

                                    <h3 className='text-[#8093B8] text-[0.9rem] 640px:text-[1.2rem]'>Looks like big foot has broken the link</h3>

                                    <button className='py-3 px-6 640px:px-8 text-[0.9rem] 640px:text-[1rem] rounded-full bg-[#566FA7] text-white mt-8'>Back to
                                        homepage
                                    </button>
                                </div>
                            </div>

                        </div>
                    )}

                    {wrongRoute2Code && <BlocksShowCode code='
import React from "react";

const Page404 = () => {

    return (
        <div className="boxShadow px-10 w-full lg:flex-row gap-[30px] lg:gap-0 flex-col flex items-center justify-evenly py-20 rounded-xl">

            <div className="w-[80%] lg:w-[40%]">
                <img src="https://i.ibb.co/HdHH4Pb/Frame-6.png" alt="illustration"
                     className="w-full"/>
            </div>

            <div className="w-full lg:w-[30%] text-center lg:text-start">
                <h1 className="text-[2.5rem] sm:text-[4rem] font-[800] text-[#566FA7] leading-[80px]">OOPS!</h1>

                <h3 className="text-[#8093B8] text-[0.9rem] sm:text-[1.2rem]">Looks like big foot has broken the link</h3>

                <button className="py-3 px-6 sm:px-8 text-[0.9rem] sm:text-[1rem] rounded-full bg-[#566FA7] text-white mt-8">Back to
                    homepage
                </button>
            </div>
        </div>
    );
};

export default Page404;
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"404 page 3"} id={"empty_page_3"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A 404 page is a custom error page that informs users the requested page is not found, often offering navigation links to guide them back to the homepage or other sections.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${wrongRoute3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                wrongRoute3Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setWrongRoute3Preview, setWrongRoute3Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                wrongRoute3Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setWrongRoute3Preview, setWrongRoute3Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {wrongRoute3Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl'>
                                    <img src='https://i.ibb.co/SVMTKPy/Frame-5.png' alt='illustration'
                                         className='w-full 1260px:w-[400px]'/>
                                    <p className='text-[#73718A] text-[0.9rem] 640px:text-[1.2rem] w-full 1260px:w-[55%] text-center mt-10 1260px:mt-4'>The page cannot be found. The requested
                                        URL was not found on this server.</p>

                                    <button className='py-3 px-8 rounded-full bg-[#4538FF] text-white mt-8'>Back to
                                        home
                                    </button>
                            </div>

                        </div>
                    )}

                    {wrongRoute3Code && <BlocksShowCode code='
import React from "react";

const Page404 = () => {

    return (
        <div className="boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl">
            <img src="https://i.ibb.co/SVMTKPy/Frame-5.png" alt="illustration"
                 className="w-full lg:w-[400px]"/>
            <p className="text-[#73718A] text-[0.9rem] sm:text-[1.2rem] w-full lg:w-[55%] text-center mt-10 lg:mt-4">The
                page cannot be found. The requested
                URL was not found on this server.</p>

            <button className="py-3 px-8 rounded-full bg-[#4538FF] text-white mt-8">Back to
                home
            </button>
        </div>
    );
};

export default Page404;
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"404 page 4"} id={"empty_page_4"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A 404 page is a custom error page that informs users the requested page is not found, often offering navigation links to guide them back to the homepage or other sections.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${wrongRoute4Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                wrongRoute4Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setWrongRoute4Preview, setWrongRoute4Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                wrongRoute4Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setWrongRoute4Preview, setWrongRoute4Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {wrongRoute4Preview && (
                        <div className={` p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl bg-[#00543A]'>
                                    <img src='https://i.ibb.co/LvLq6d3/Group-29.png' alt='illustration'
                                         className='w-full 1260px:w-[400px]'/>
                                    <p className='text-[#fff] text-[1.2rem] w-full 1260px:w-[55%] text-center'>Oops it seems you follow backlink</p>

                                    <button className='py-3 px-6 640px:px-8 rounded-full bg-[#fff] text-black mt-4 flex items-center gap-[10px]'>
                                        <FaArrowLeftLong /> Back to home
                                    </button>
                            </div>

                        </div>
                    )}

                    {wrongRoute4Code && <BlocksShowCode code='
import React from "react";

// react icons
import {FaArrowLeftLong} from "react-icons/fa6";

const Page404 = () => {

    return (
        <div className="boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl bg-[#00543A]">
            <img src="https://i.ibb.co/LvLq6d3/Group-29.png" alt="illustration"
                 className="w-full lg:w-[400px]"/>
            <p className="text-[#fff] text-[1.2rem] w-full lg:w-[55%] text-center">Oops it seems you follow
                backlink</p>

            <button
                className="py-3 px-6 sm:px-8 rounded-full bg-[#fff] text-black mt-4 flex items-center gap-[10px]">
                <FaArrowLeftLong/> Back to home
            </button>
        </div>
    );
};

export default Page404;
                    '/>
                    }
                </div>


                <div className='mt-8'>
                    <ContentHeader text={"404 page 5"} id={"empty_page_5"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    A 404 page is a custom error page that informs users the requested page is not found, often offering navigation links to guide them back to the homepage or other sections.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${wrongRoute5Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                wrongRoute5Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setWrongRoute5Preview, setWrongRoute5Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                wrongRoute5Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setWrongRoute5Preview, setWrongRoute5Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {wrongRoute5Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow px-10 w-full flex items-center flex-col justify-center pb-[50px] rounded-xl'>
                                    <img src='https://i.ibb.co/nP1Cngw/Error-Server-1.png' alt='illustration'
                                         className='w-full 1260px:w-[500px]'/>
                                    <h1 className='text-[#1C3177] text-[1.8rem] 640px:text-[2.5rem] font-[800] mt-3 w-full 1260px:w-[55%] text-center'>Thunder 404 </h1>

                                    <button className='py-3 px-6 640px:px-8 rounded-full bg-[#fff] text-[#1C3177] border border-[#1C3177] mt-4 flex items-center gap-[10px]'>
                                        <FaArrowLeftLong /> Back to home
                                    </button>
                            </div>

                        </div>
                    )}

                    {wrongRoute5Code && <BlocksShowCode code='
import React from "react";

// react icons
import {FaArrowLeftLong} from "react-icons/fa6";

const Page404 = () => {

    return (
        <div className="boxShadow px-10 w-full flex items-center flex-col justify-center pb-[50px] rounded-xl">
            <img src="https://i.ibb.co/nP1Cngw/Error-Server-1.png" alt="illustration"
                 className="w-full lg:w-[500px]"/>
            <h1 className="text-[#1C3177] text-[1.8rem] sm:text-[2.5rem] font-[800] mt-3 w-full lg:w-[55%] text-center">Thunder
                404 </h1>

            <button
                className="py-3 px-6 sm:px-8 rounded-full bg-[#fff] text-[#1C3177] border border-[#1C3177] mt-4 flex items-center gap-[10px]">
                <FaArrowLeftLong/> Back to home
            </button>
        </div>
    );
};

export default Page404;
                    '/>
                    }
                </div>

                <BlocksFooter backUrl='/blocks/newsletter-form' backName='newsletter form' forwardUrl='/blocks/empty-page' forwardName='empty page'/>
            </div>


            <Helmet>
                <title>Blocks - 404 Page</title>
            </Helmet>
        </aside>
    );
};

export default urlErrorPage;
