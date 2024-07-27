import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ShowCode from "../../../../../Shared/ShowCode";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import {MdKeyboardArrowDown} from "react-icons/md";

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

    // animated border
    const [animatedBorderPreview, setAnimatedBorderPreview] = useState(true);
    const [animatedBorderCode, setAnimatedBorderCode] = useState(false);

    const handleAnimatedBorderPreview = () => {
        setAnimatedBorderPreview(true);
        setAnimatedBorderCode(false);
    };

    const handldeAnimatedBorderCode = () => {
        setAnimatedBorderCode(true);
        setAnimatedBorderPreview(false);
    };

    // animation border
    const [animationBorderPreview, setAnimationBorderPreview] = useState(true);
    const [animationBorderCode, setAnimationBorderCode] = useState(false);

    const handleAnimationBorderPreview = () => {
        setAnimationBorderPreview(true);
        setAnimationBorderCode(false);
    };

    const handleAnimationBorderCode = () => {
        setAnimationBorderCode(true);
        setAnimationBorderPreview(false);
    };

    // publish button actions
    const [publishButtonActive, setPublishButtonActive] = useState(false);
    const [publishButtonText, setPublishButtonText] = useState('Publish');

    const publishButtonContent = [
        'Publish', 'Set as draft'
    ]

    const handlePublishButtonClick = (item) => {
        setPublishButtonText(item)
        setPublishButtonActive(false)
    }

    document.addEventListener('click', (event)=>{
        if(!event.target.closest('.publishButtonOptions') && !event.target.closest('.publishButton')){
            setPublishButtonActive(false)
        }
    })

    return (
        <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
            <div>
                <ContentHeader text={"Publish Button"} id={"publish_button"} />

                <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon clicking.
                </p>

                <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${publishPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
                        <div className={`p-8 ${publishButtonActive ? 'mb-20' : 'mb-4'} flex flex-wrap items-center gap-5 justify-center`}>
                            <div className='flex items-center rounded bg-primary border-none outline-none text-secondary justify-between relative'>
                                <button
                                    className=" text-[1rem] px-6 py-1.5 transition-all duration-500 cursor-auto">
                                    {publishButtonText}
                                </button>

                                <div onClick={()=> setPublishButtonActive(!publishButtonActive)} className='bg-[#005fb2] w-[50px] py-1.5 flex items-center justify-center cursor-pointer rounded-r publishButton'>
                                    <MdKeyboardArrowDown className='text-[2rem]'/>
                                </div>

                                <ul className={`${publishButtonActive ? 'opacity-100 z-20 translate-y-0' : ' opacity-0 z-[-1] translate-y-[-5px]'} publishButtonOptions transition-all duration-500 flex flex-col serviceCard bg-white absolute top-[46px] rounded right-0 text-text text-[0.9rem]`}>
                                    {
                                        publishButtonContent?.map((item, index)=> (
                                            <li className='py-2 px-6 hover:bg-gray-50 rounded-t cursor-pointer' key={index} onClick={()=> handlePublishButtonClick(item)}>{item}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    )}

                    {publishCode && <ShowCode code='
<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
      Click Me
</button>

<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
    Click Me
</button>
          '/>}
                </div>

                <div className="mt-8">
                    <ContentHeader
                        text={"border hover animation"}
                        id={"border_hover_animation"}
                    />
                </div>

                <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is a border hover animated button component. Experience dynamic border animations on hover for engaging interaction.
                </p>

                <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                    <div className="">
                        <button
                            className={`${
                                animatedBorderPreview && "bg-border"
                            } px-6 py-2 border-r border-b roudned border-border`}
                            onClick={handleAnimatedBorderPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                animatedBorderCode && "bg-border"
                            } px-6 py-2 border-r border-b rounded border-border`}
                            onClick={handldeAnimatedBorderCode}
                        >
                            Code
                        </button>
                    </div>
                    {animatedBorderPreview && (
                        <div className="p-8 mb-4 flex items-center gap-5 justify-center"></div>
                    )}

                    {animatedBorderCode && <ShowCode code="" />}
                </div>

                <OverviewFooter />
            </div>

            <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[40%]">
                <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                    CONTENTS
                </h2>
                <a
                    href="#click_animation"
                    className={`${
                        contentActiveTab === 1 && "!text-primary !border-primary"
                    } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                    onClick={() => setContentActiveTab(1)}
                >
                    Click Animation
                </a>
                <a
                    href="#border_hover_animation"
                    className={`${
                        contentActiveTab === 2 && "!text-primary !border-primary"
                    } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                    onClick={() => setContentActiveTab(2)}
                >
                    Border Animation
                </a>
            </div>
            <Helmet>
                <title>Buttons - Dropdown Button</title>
            </Helmet>
        </aside>
    );
};

export default DropdownButton;
