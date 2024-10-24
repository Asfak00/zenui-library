import React, { useState } from "react";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import BlocksShowCode from "../../../../../Shared/BlocksShowCode.jsx";
import BlocksFooter from "../../../../../Shared/BlocksFooter.jsx";
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";


const Empty = () => {

    const[emptyPage1Preview, setEmptyPage1Preview] = useState(true);
    const[emptyPage1Code, setEmptyPage1Code] = useState(false);

    const[emptyPage2Preview, setEmptyPage2Preview] = useState(true);
    const[emptyPage2Code, setEmptyPage2Code] = useState(false);

    const[emptyPage3Preview, setEmptyPage3Preview] = useState(true);
    const[emptyPage3Code, setEmptyPage3Code] = useState(false);

    const[emptyPage4Preview, setEmptyPage4Preview] = useState(true);
    const[emptyPage4Code, setEmptyPage4Code] = useState(false);

    const[emptyPage5Preview, setEmptyPage5Preview] = useState(true);
    const[emptyPage5Code, setEmptyPage5Code] = useState(false);

    const[emptyPage6Preview, setEmptyPage6Preview] = useState(true);
    const[emptyPage6Code, setEmptyPage6Code] = useState(false);

    const[emptyPage7Preview, setEmptyPage7Preview] = useState(true);
    const[emptyPage7Code, setEmptyPage7Code] = useState(false);

    const[emptyPage8Preview, setEmptyPage8Preview] = useState(true);
    const[emptyPage8Code, setEmptyPage8Code] = useState(false);

    const[emptyPage9Preview, setEmptyPage9Preview] = useState(true);
    const[emptyPage9Code, setEmptyPage9Code] = useState(false);

    const toggleCardView = useToggleCardView()

    return (
        <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
            <div>
                <ContentHeader text={"empty page 1"} id={"empty_page_1"} />

                <p className="w-full text-text text-[1rem]">
                    An empty page design features minimal content, often with a message or icon indicating no data is available, alongside a call-to-action button or navigation to help users proceed.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${emptyPage1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                emptyPage1Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setEmptyPage1Preview, setEmptyPage1Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                emptyPage1Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setEmptyPage1Preview, setEmptyPage1Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {emptyPage1Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow p-6 640px:px-20 640px:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/z8VbyRc/Charco-Mobile-Life.png' alt='empty/image' className='w-full 640px:w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>No transactions yet</h1>

                                <p className='text-[0.9rem] text-gray-500'> Make Your First Transfer</p>
                            </div>

                        </div>
                    )}

                    {emptyPage1Code && <BlocksShowCode code='
import React from "react";

const EmptyPage = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/z8VbyRc/Charco-Mobile-Life.png" alt="empty/image"
                 className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-6 font-[500] text-black">No transactions yet</h1>

            <p className="text-[0.9rem] text-gray-500"> Make Your First Transfer</p>
        </div>
    );
};

export default EmptyPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 2"} id={"empty_page_2"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    An empty page design features minimal content, often with a message or icon indicating no data is available, alongside a call-to-action button or navigation to help users proceed.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${emptyPage2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                emptyPage2Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setEmptyPage2Preview, setEmptyPage2Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                emptyPage2Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setEmptyPage2Preview, setEmptyPage2Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {emptyPage2Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow p-6 640px:px-20 640px:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/ZfTb1sJ/Amigos-Standing.png' alt='empty/image' className='w-full w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>No tasks left</h1>

                                <p className='text-[0.9rem] text-gray-500'>You’ve done a great job</p>
                            </div>

                        </div>
                    )}

                    {emptyPage2Code && <BlocksShowCode code='
import React from "react";

const EmptyPage = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/ZfTb1sJ/Amigos-Standing.png" alt="empty/image" className="w-full w-[200px]"/>

            <h1 className="text-[1.4rem] mt-6 font-[500] text-black">No tasks left</h1>

            <p className="text-[0.9rem] text-gray-500">You’ve done a great job</p>
        </div>
    );
};

export default EmptyPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 3"} id={"empty_page_3"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    An empty page design features minimal content, often with a message or icon indicating no data is available, alongside a call-to-action button or navigation to help users proceed.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${emptyPage3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                emptyPage3Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setEmptyPage3Preview, setEmptyPage3Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                emptyPage3Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setEmptyPage3Preview, setEmptyPage3Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {emptyPage3Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow p-6 640px:px-20 640px:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/X3P0nnK/Group-1.png' alt='empty/image' className='w-full 640px:w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>Empty Playlist</h1>

                                <p className='text-[0.9rem] text-gray-500'>You haven't added any song yet</p>
                            </div>

                        </div>
                    )}

                    {emptyPage3Code && <BlocksShowCode code='
import React from "react";

const EmptyPage = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/X3P0nnK/Group-1.png" alt="empty/image" className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-6 font-[500] text-black">Empty Playlist</h1>

            <p className="text-[0.9rem] text-gray-500">You haven"t added any song yet</p>
        </div>
    );
};

export default EmptyPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 4"} id={"empty_page_4"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    An empty page design features minimal content, often with a message or icon indicating no data is available, alongside a call-to-action button or navigation to help users proceed.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${emptyPage4Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                emptyPage4Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setEmptyPage4Preview, setEmptyPage4Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                emptyPage4Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setEmptyPage4Preview, setEmptyPage4Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {emptyPage4Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow p-6 640px:px-20 640px:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/m5DrBt1/Group-2.png' alt='empty/image' className='w-full 640px:w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>No Result</h1>

                                <p className='text-[0.9rem] text-gray-500'>Please Login to view more updates</p>
                            </div>

                        </div>
                    )}

                    {emptyPage4Code && <BlocksShowCode code='
import React from "react";

const EmptyPage = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/m5DrBt1/Group-2.png" alt="empty/image" className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-6 font-[500] text-black">No Result</h1>

            <p className="text-[0.9rem] text-gray-500">Please Login to view more updates</p>
        </div>
    );
};

export default EmptyPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 5"} id={"empty_page_5"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    An empty page design features minimal content, often with a message or icon indicating no data is available, alongside a call-to-action button or navigation to help users proceed.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${emptyPage5Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                emptyPage5Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setEmptyPage5Preview, setEmptyPage5Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                emptyPage5Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setEmptyPage5Preview, setEmptyPage5Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {emptyPage5Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow p-6 640px:px-20 640px:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/JrfVWx9/Message.png' alt='empty/image' className='w-full 640px:w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>No Messages</h1>

                                <p className='text-[0.9rem] text-gray-500'>When you have messages you’ll see them here</p>
                            </div>

                        </div>
                    )}

                    {emptyPage5Code && <BlocksShowCode code='
import React from "react";

const EmptyPage = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/JrfVWx9/Message.png" alt="empty/image" className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-6 font-[500] text-black">No Messages</h1>

            <p className="text-[0.9rem] text-gray-500">When you have messages you’ll see them here</p>
        </div>
    );
};

export default EmptyPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 6"} id={"empty_page_6"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    An empty page design features minimal content, often with a message or icon indicating no data is available, alongside a call-to-action button or navigation to help users proceed.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${emptyPage6Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                emptyPage6Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setEmptyPage6Preview, setEmptyPage6Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                emptyPage6Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setEmptyPage6Preview, setEmptyPage6Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {emptyPage6Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow p-6 640px:px-20 640px:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/cgfgxGH/Illustrations.png' alt='empty/image' className='w-full 640px:w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-6 font-[500] text-black'>Result Not Found</h1>

                                <p className='text-[0.9rem] text-gray-500'>Whoops ... this information is not available for a moment</p>
                            </div>

                        </div>
                    )}

                    {emptyPage6Code && <BlocksShowCode code='
import React from "react";

const EmptyPage = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/cgfgxGH/Illustrations.png" alt="empty/image" className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-6 font-[500] text-black">Result Not Found</h1>

            <p className="text-[0.9rem] text-gray-500">Whoops ... this information is not available for a moment</p>
        </div>
    );
};

export default EmptyPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 7"} id={"empty_page_7"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    An empty page design features minimal content, often with a message or icon indicating no data is available, alongside a call-to-action button or navigation to help users proceed.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${emptyPage7Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                emptyPage7Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setEmptyPage7Preview, setEmptyPage7Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                emptyPage7Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setEmptyPage7Preview, setEmptyPage7Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {emptyPage7Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow p-6 640px:px-20 640px:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/nmSDvYj/Illustrations-1.png' alt='empty/image' className='w-full 640px:w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-3 font-[500] text-black'>Your inbox is empty</h1>

                                <p className='text-[0.9rem] text-gray-500'>Pick a person from left menu and start your conversation</p>
                            </div>

                        </div>
                    )}

                    {emptyPage7Code && <BlocksShowCode code='
import React from "react";

const EmptyPage = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/nmSDvYj/Illustrations-1.png" alt="empty/image"
                 className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-3 font-[500] text-black">Your inbox is empty</h1>

            <p className="text-[0.9rem] text-gray-500">Pick a person from left menu and start your conversation</p>
        </div>
    );
};

export default EmptyPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 8"} id={"empty_page_8"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    An empty page design features minimal content, often with a message or icon indicating no data is available, alongside a call-to-action button or navigation to help users proceed.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${emptyPage8Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                emptyPage8Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setEmptyPage8Preview, setEmptyPage8Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                emptyPage8Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setEmptyPage8Preview, setEmptyPage8Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {emptyPage8Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow p-6 640px:px-20 640px:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/6nSHrGp/Favorite-illustration.png' alt='empty/image' className='w-full 640px:w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-3 font-[500] text-black'>No Favourites</h1>

                                <p className='text-[0.9rem] text-gray-500'>You can add an item to your favourites by clicking “Star Icon”</p>
                            </div>

                        </div>
                    )}

                    {emptyPage8Code && <BlocksShowCode code='
import React from "react";

const EmptyPage = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/6nSHrGp/Favorite-illustration.png" alt="empty/image"
                 className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-3 font-[500] text-black">No Favourites</h1>

            <p className="text-[0.9rem] text-gray-500">You can add an item to your favourites by clicking “Star
                Icon”</p>
        </div>
    );
};

export default EmptyPage;
                    '/>
                    }
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"empty page 9"} id={"empty_page_9"} />
                </div>

                <p className="w-full text-text text-[1rem]">
                    An empty page design features minimal content, often with a message or icon indicating no data is available, alongside a call-to-action button or navigation to help users proceed.
                </p>

                <div className="w-full border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${emptyPage9Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                        <button
                            className={`${
                                emptyPage9Preview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={() => toggleCardView(setEmptyPage9Preview, setEmptyPage9Code, true)}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                emptyPage9Code && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={() => toggleCardView(setEmptyPage9Preview, setEmptyPage9Code, false)}
                        >
                            Code
                        </button>
                    </div>
                    {emptyPage9Preview && (
                        <div className={`p-8  flex flex-wrap items-center gap-5 justify-center overflow-hidden`}>

                            <div className='boxShadow p-6 640px:px-20 640px:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl'>
                                <img src='https://i.ibb.co/qW8ztPd/Successful-illustration.png' alt='empty/image' className='w-full 640px:w-[200px]'/>

                                <h1 className='text-[1.4rem] mt-3 font-[500] text-black'>Successful</h1>

                                <p className='text-[0.9rem] text-gray-500'>Your changes were made successfully</p>
                            </div>

                        </div>
                    )}

                    {emptyPage9Code && <BlocksShowCode code='
import React from "react";

const EmptyPage = () => {

    return (
        <div
            className="boxShadow p-6 sm:px-20 sm:py-14 flex items-center justify-center flex-col gap-[4px] rounded-xl">
            <img src="https://i.ibb.co/qW8ztPd/Successful-illustration.png" alt="empty/image"
                 className="w-full sm:w-[200px]"/>

            <h1 className="text-[1.4rem] mt-3 font-[500] text-black">Successful</h1>

            <p className="text-[0.9rem] text-gray-500">Your changes were made successfully</p>
        </div>
    );
};

export default EmptyPage;
                    '/>
                    }
                </div>

                <BlocksFooter backUrl='/blocks/404-page' backName='404 page' forwardName='responsive search bar' forwardUrl='/blocks/responsive-search-bar'/>
            </div>


            <Helmet>
                <title>Blocks - Empty Page</title>
            </Helmet>
        </aside>
    );
};

export default Empty;
