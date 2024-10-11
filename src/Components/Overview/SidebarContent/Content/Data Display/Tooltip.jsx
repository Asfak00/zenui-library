import React, {useState} from "react";

// react helmet
import {Helmet} from "react-helmet";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";

// icons
import {SlInfo} from "react-icons/sl";
import {FaGithubSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {FiMessageCircle} from "react-icons/fi";
import {useToggleCardView} from "../../../../../Utils/ButtonToggle.js";

const Tooltip = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    const toggleCardView = useToggleCardView()

    // actions
    const [roundedTooltipPreview, setRoundedTooltipPreview] = useState(true);
    const [roundedTooltipCode, setRoundedTooltipCode] = useState(false);

    const [arrowTooltipPreview, setArrowTooltipPreview] = useState(true);
    const [arrowTooltipCode, setArrowTooltipCode] = useState(false);

    const [relativeAnimationPreview, setRelativeAnimationPreview] = useState(true);
    const [relativeAnimationCode, setRelativeAnimationCode] = useState(false);

    const [profileTooltipPreview, setProfileTooltipPreview] = useState(true);
    const [profileTooltipCode, setProfileTooltipCode] = useState(false);

    const [clickedTooltipPreview, setClickedTooltipPreview] = useState(true);
    const [clickedTooltipCode, setClickedTooltipCode] = useState(false);


    const [isProfileHovered, setIsProfileHovered] = useState(false);
    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);
    const [topClicked, setTopClicked] = useState(false);
    const [bottomClicked, setBottomClicked] = useState(false);

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.top_button')) {
            setTopClicked(false)
        }
        if (!event.target.closest('.left_button')) {
            setLeftClicked(false)
        }
        if (!event.target.closest('.right_button')) {
            setRightClicked(false)
        }
        if (!event.target.closest('.bottom_button')) {
            setBottomClicked(false)
        }
    })

    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div className="w-full 425px:w-[80%]">
                    <div
                        className="p-4 flex gap-2 w-full 425px:w-[80%] bg-[#d18f0011] border border-[#d18e00]  rounded mb-8">
                        <p>
                            <SlInfo className="text-[#d17d00] text-[1.2rem]"/>
                        </p>
                        <p className="text-[#d18e00] text-[0.9rem]">
                            You can style it yourself if you want. And after copying the code
                            you " z-index " check a little. And since the tooltip is only
                            coming up on hovering over a button to show the demo, you'll need
                            to set it up well in your project when you get this code.
                        </p>
                    </div>
                    <ContentHeader text={"rounded tooltip"} id={"rounded_tooltip"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a tooltip component. Provide contextual information with a brief, hover-triggered
                        tooltip.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${roundedTooltipPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    roundedTooltipPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setRoundedTooltipPreview, setRoundedTooltipCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    roundedTooltipCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setRoundedTooltipPreview, setRoundedTooltipCode, false)}
                            >
                                Code
                            </button>
                        </div>
                        {roundedTooltipPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className=" relative group">
                                    <button className="px-3 py-2 border border-gray-800 rounded text-gray-800">
                                        Rounded Tooltip
                                    </button>

                                    <div
                                        className=" absolute bottom-[-90%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                      Rounded Tooltip
                    </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {roundedTooltipCode && (
                            <Showcode
                                code='
import React from "react";

const RoundedTooltip = () => {
  return (
    <div className=" relative group">
      <button className="px-3 py-2 border border-primary rounded text-primary ">
        Rounded Tooltip
      </button>

      <div className=" absolute bottom-[-90%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
        <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
          Rounded Tooltip
        </span>
      </div>
    </div>
  );
};

export default RoundedTooltip;
              '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"arrow tooltip"} id={"arrow_tooltip"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is a tooltip component with an arrow indicator for clear element association on hover.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${arrowTooltipPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    arrowTooltipPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setArrowTooltipPreview, setArrowTooltipCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    arrowTooltipCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setArrowTooltipPreview, setArrowTooltipCode, false)}
                            >
                                Code
                            </button>
                        </div>
                        {arrowTooltipPreview && (
                            <div className="p-8 pb-12 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="flex items-center gap-6">
                                    <div className=" relative group">
                                        <button className="px-3 py-2 border border-gray-800 rounded text-gray-800 ">
                                            Left
                                        </button>

                                        <div
                                            className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-[1] scale-[0.7] transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-[1%] before:rotate-[40deg] before:rounded-b-3xl">
                      <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                        Left
                      </span>
                                        </div>
                                    </div>

                                    <div className=" relative group">
                                        <button className="px-3 py-2 border border-gray-800 rounded text-gray-800 ">
                                            Center
                                        </button>

                                        <div
                                            className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-[1] scale-[0.7] transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-1/3 before:rotate-[45deg] before:rounded-b-3xl">
                      <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                        Center
                      </span>
                                        </div>
                                    </div>
                                    <div className=" relative group">
                                        <button className="px-3 py-2 border border-gray-800 rounded text-gray-800 ">
                                            Right
                                        </button>

                                        <div
                                            className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-[1] scale-[0.7] transition-all duration-300 before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:right-[1%] before:rotate-[45deg] before:rounded-r-3xl">
                      <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                        Right
                      </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {arrowTooltipCode && (
                            <Showcode
                                code='
import React from "react";

const ArrowTooltip = () => {
  return (
    <div className="flex items-center gap-6">
      <div className=" relative group">
        {/* left */}
        <button className="px-3 py-2 border border-primary rounded text-primary ">
          Left
        </button>

        <div className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1] scale-[0.7] before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-[1%] before:rotate-[40deg] before:rounded-b-3xl">
          <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
            Left
          </span>
        </div>
      </div>

      {/* center */}
      <div className=" relative group">
        <button className="px-3 py-2 border border-primary rounded text-primary ">
          Center
        </button>

        <div className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1] scale-[0.7] before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:left-1/3 before:rotate-[45deg] before:rounded-b-3xl">
          <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
            Center
          </span>
        </div>
      </div>

      {/* right */}
      <div className=" relative group">
        <button className="px-3 py-2 border border-primary rounded text-primary ">
          Right
        </button>

        <div className=" absolute bottom-[-100%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1] scale-[0.7] before:w-[20px] before:h-[20px] before:bg-[#8d8d8d] before:z-[-1] before:absolute before:top-[-35%] before:right-[1%] before:rotate-[45deg] before:rounded-r-3xl">
          <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
            Right
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArrowTooltip;
              '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"Relative Animation"} id={"relative_animation"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A tooltip system that can appear in any position..left, right, top, or bottom—relative to the
                        element,
                        offering flexible placement based on user interaction or design needs.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${relativeAnimationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    relativeAnimationPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setRelativeAnimationPreview, setRelativeAnimationCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    relativeAnimationCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setRelativeAnimationPreview, setRelativeAnimationCode, false)}
                            >
                                Code
                            </button>
                        </div>
                        {relativeAnimationPreview && (
                            <div className="p-8 pb-20 mb-4 pt-20 flex items-center flex-col gap-5 justify-center">
                                <div className="flex items-center gap-6 flex-wrap">


                                    <div className=" relative group">
                                        <button className="px-3 py-2 border border-gray-800 rounded text-gray-800 ">
                                            Left
                                        </button>

                                        <div
                                            className=" absolute top-0.5 left-[-100px] translate-x-[-20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                                            <p className="text-[0.9rem] w-max bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                                                Left Tooltip
                                            </p>
                                        </div>
                                    </div>


                                    <div className=" relative group">
                                        <button className="px-3 py-2 border border-gray-800 rounded text-gray-800 ">
                                            Top
                                        </button>

                                        <div
                                            className=" absolute top-[-45px] left-[-23px] translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                                            <p className="text-[0.9rem] w-max bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                                                Top Tooltip
                                            </p>
                                        </div>
                                    </div>


                                    <div className=" relative group">
                                        <button className="px-3 py-2 border border-gray-800 rounded text-gray-800 ">
                                            Bottom
                                        </button>

                                        <div
                                            className=" absolute bottom-[-45px] left-[-20px] translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                                            <p className="text-[0.9rem] w-max bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                                                Bottom Tooltip
                                            </p>
                                        </div>
                                    </div>


                                    <div className=" relative group">
                                        <button className="px-3 py-2 border border-gray-800 rounded text-gray-800 ">
                                            Right
                                        </button>

                                        <div
                                            className=" absolute top-0.5 right-[-110px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                                            <p className="text-[0.9rem] w-max bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                                                Right Tooltip
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {relativeAnimationCode && (
                            <Showcode
                                code='
import React from "react";

const Tooltip = () => {

    return (
        <>
            {/* left tooltip */}
            <div className="flex items-center gap-6 flex-wrap">
                <div className=" relative group">
                    <button className="px-3 py-2 border border-primary rounded text-primary ">
                        Left
                    </button>

                    <div
                        className=" absolute top-0.5 left-[-100px] translate-x-[-20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                        <p className="text-[0.9rem] w-max bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                            Left Tooltip
                        </p>
                    </div>
                </div>

                {/* top tooltip */}
                <div className=" relative group">
                    <button className="px-3 py-2 border border-primary rounded text-primary ">
                        Top
                    </button>

                    <div
                        className=" absolute top-[-45px] left-[-23px] translate-y-[-20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                        <p className="text-[0.9rem] w-max bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                            Top Tooltip
                        </p>
                    </div>
                </div>

                {/* bottom tooltip */}
                <div className=" relative group">
                    <button className="px-3 py-2 border border-primary rounded text-primary ">
                        Bottom
                    </button>

                    <div
                        className=" absolute bottom-[-45px] left-[-20px] translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                        <p className="text-[0.9rem] w-max bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                            Bottom Tooltip
                        </p>
                    </div>
                </div>

                {/* right tooltip */}
                <div className=" relative group">
                    <button className="px-3 py-2 border border-primary rounded text-primary ">
                        Right
                    </button>

                    <div
                        className=" absolute top-0.5 right-[-110px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1000] transition-all duration-500">
                        <p className="text-[0.9rem] w-max bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
                            Right Tooltip
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tooltip;
              '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"profile tooltip"} id={"profile_tooltip"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A small pop-up displaying key details about a user's profile when hovered or clicked.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${profileTooltipPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    profileTooltipPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setProfileTooltipPreview, setProfileTooltipCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    profileTooltipCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setProfileTooltipPreview, setProfileTooltipCode, false)}
                            >
                                Code
                            </button>
                        </div>
                        {profileTooltipPreview && (
                            <div className="p-8 pb-20 mb-4 pt-20 flex items-center flex-col gap-5 justify-center">
                                <div className='relative w-fit h-full flex items-center justify-center'
                                     onMouseEnter={() => setIsProfileHovered(true)}
                                     onMouseLeave={() => setIsProfileHovered(false)}
                                >
                                    {/*  initial profile picture  */}
                                    <img
                                        src='https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1728581066~exp=1728584666~hmac=c785e2973d4e19d11d12cc36cebeb3b7b698e37c64f6b207db6d5823938dd597&w=900'
                                        alt='profile'
                                        className='w-[50px] h-[50px] rounded-full object-cover border-[3px] cursor-pointer border-primary'/>

                                    {/*  tooltip  */}
                                    <div
                                        className={` ${isProfileHovered ? 'opacity-100 z-20 translate-y-0' : 'opacity-0 z-[-1] translate-y-[20px]'} absolute top-[-270px] left-[50%] transform translate-x-[-50%] bg-white w-[250px] rounded-md p-[15px] shadow-md transition-all duration-300`}>

                                        {/*  socials  */}
                                        <div
                                            className='flex items-center justify-between border-b border-gray-200 pb-[7px]'>
                                            <p className='text-[1rem] font-[600] text-gray-700'>Socials</p>
                                            <div className='flex items-center gap-[8px]'>
                                                <a href='https://zenui.net'>
                                                    <FaLinkedin
                                                        className='text-[1.3rem] text-gray-700 hover:text-primary cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out'/>
                                                </a>
                                                <a href='https://zenui.net'>
                                                    <FaGithubSquare
                                                        className='text-[1.3rem] text-gray-700 hover:text-primary cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out'/>
                                                </a>
                                                <a href='https://zenui.net'>
                                                    <FaInstagramSquare
                                                        className='text-[1.3rem] text-gray-700 hover:text-primary cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out'/>
                                                </a>
                                            </div>
                                        </div>

                                        {/*  account details  */}
                                        <div className='flex items-center justify-center flex-col mt-5'>
                                            <div className='relative'>
                                                <img
                                                    src='https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1728581066~exp=1728584666~hmac=c785e2973d4e19d11d12cc36cebeb3b7b698e37c64f6b207db6d5823938dd597&w=900'
                                                    alt='profile'
                                                    className='w-[80px] h-[80px] rounded-full object-cover'/>
                                                <div
                                                    className='w-[10px] h-[10px] rounded-full bg-green-400 absolute top-[7px] right-[8px] border-[2px] border-white'></div>
                                            </div>
                                            <h4 className='text-[1.1rem] font-[600] text-gray-700 mt-2'>Evelyn
                                                Adson</h4>
                                            <p className='text-[0.8rem] text-gray-600'>Programmer</p>
                                        </div>

                                        {/*  send message  */}
                                        <button
                                            className='flex mx-auto hover:underline items-center gap-[8px] font-[500] text-[0.9rem] text-primary mt-4'>
                                            <FiMessageCircle className='text-[1.1rem]'/>
                                            Send Message
                                        </button>

                                        {/*  bottom arrow  */}
                                        <div
                                            className='bg-white w-[15px] h-[15px] rotate-[45deg] absolute bottom-[-7px] left-[50%] transform translate-x-[-50%]'></div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {profileTooltipCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {FaGithubSquare, FaInstagramSquare, FaLinkedin} from "react-icons/fa";
import {FiMessageCircle} from "react-icons/fi";

const ProfileTooltip = () => {
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    return (
        <div className="relative w-fit h-full flex items-center justify-center"
             onMouseEnter={() => setIsProfileHovered(true)}
             onMouseLeave={() => setIsProfileHovered(false)}
        >
            {/*  initial profile picture  */}
            <img
                src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1728581066~exp=1728584666~hmac=c785e2973d4e19d11d12cc36cebeb3b7b698e37c64f6b207db6d5823938dd597&w=900"
                alt="profile"
                className="w-[50px] h-[50px] rounded-full object-cover border-[3px] cursor-pointer border-[#3B9DF8]"/>

            {/*  tooltip  */}
            <div
                className={` ${isProfileHovered ? "opacity-100 z-20 translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute top-[-270px] left-[50%] transform translate-x-[-50%] bg-white w-[250px] rounded-md p-[15px] shadow-md transition-all duration-300`}>

                {/*  socials  */}
                <div
                    className="flex items-center justify-between border-b border-gray-200 pb-[7px]">
                    <p className="text-[1rem] font-[600] text-gray-700">Socials</p>
                    <div className="flex items-center gap-[8px]">
                        <a href="https://zenui.net">
                            <FaLinkedin
                                className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"/>
                        </a>
                        <a href="https://zenui.net">
                            <FaGithubSquare
                                className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"/>
                        </a>
                        <a href="https://zenui.net">
                            <FaInstagramSquare
                                className="text-[1.3rem] text-gray-700 hover:text-[#3B9DF8] cursor-pointer hover:scale-[1.2] transition-all duration-200 ease-out"/>
                        </a>
                    </div>
                </div>

                {/*  account details  */}
                <div className="flex items-center justify-center flex-col mt-5">
                    <div className="relative">
                        <img
                            src="https://img.freepik.com/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148138.jpg?t=st=1728581066~exp=1728584666~hmac=c785e2973d4e19d11d12cc36cebeb3b7b698e37c64f6b207db6d5823938dd597&w=900"
                            alt="profile"
                            className="w-[80px] h-[80px] rounded-full object-cover"/>
                        <div
                            className="w-[10px] h-[10px] rounded-full bg-green-400 absolute top-[7px] right-[8px] border-[2px] border-white"></div>
                    </div>
                    <h4 className="text-[1.1rem] font-[600] text-gray-700 mt-2">Evelyn
                        Adson</h4>
                    <p className="text-[0.8rem] text-gray-600">Programmer</p>
                </div>

                {/*  send message  */}
                <button
                    className="flex mx-auto hover:underline items-center gap-[8px] font-[500] text-[0.9rem] text-[#3B9DF8] mt-4">
                    <FiMessageCircle className="text-[1.1rem]"/>
                    Send Message
                </button>

                {/*  bottom arrow  */}
                <div
                    className="bg-white w-[15px] h-[15px] rotate-[45deg] absolute bottom-[-7px] left-[50%] transform translate-x-[-50%]"></div>
            </div>
        </div>
    );
};

export default ProfileTooltip;
              '
                            />
                        )}
                    </div>


                    <div className="mt-8">
                        <ContentHeader text={"clicked tooltip"} id={"clicked_tooltip"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A brief pop-up providing additional information when clicked, typically used for clarifying or
                        expanding on specific content.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${clickedTooltipPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    clickedTooltipPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setClickedTooltipPreview, setClickedTooltipCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    clickedTooltipCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setClickedTooltipPreview, setClickedTooltipCode, false)}
                            >
                                Code
                            </button>
                        </div>
                        {clickedTooltipPreview && (
                            <div className="p-8 pb-20 mb-4 pt-20 flex items-center flex-col gap-5 justify-center">
                                <div className='flex items-center gap-[10px] justify-center flex-wrap'>

                                    {/*  left  */}
                                    <div className='relative'>
                                        <button onClick={() => setLeftClicked(true)}
                                                className='left_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800'>Left
                                        </button>

                                        {/* tooltip */}
                                        <p className={`${leftClicked ? 'opacity-100 z-[100] translate-x-0' : 'opacity-0 z-[-1] translate-x-[20px]'} absolute top-[50%] transform translate-y-[-50%] left-[-130px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                            Left Tooltip

                                            {/* arrow */}
                                            <span
                                                className='w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] right-[-3%]'></span>
                                        </p>
                                    </div>

                                    {/*  top  */}
                                    <div className='relative'>
                                        <button onClick={() => setTopClicked(true)}
                                                className='top_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800'>Top
                                        </button>

                                        {/* tooltip */}
                                        <p className={`${topClicked ? 'opacity-100 z-[100] translate-y-0' : 'opacity-0 z-[-1] translate-y-[20px]'} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                            Top Tooltip

                                            {/* arrow */}
                                            <span
                                                className='w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]'></span>
                                        </p>
                                    </div>

                                    {/*  bottom  */}
                                    <div className='relative'>
                                        <button onClick={() => setBottomClicked(true)}
                                                className='bottom_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800'>Bottom
                                        </button>

                                        {/* tooltip */}
                                        <p className={`${bottomClicked ? 'opacity-100 z-[100] translate-y-0' : 'opacity-0 z-[-1] translate-y-[-20px]'} absolute left-[50%] transform translate-x-[-50%] bottom-[-50px] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                            Bottom Tooltip

                                            {/* arrow */}
                                            <span
                                                className='w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] top-[-13%]'></span>
                                        </p>
                                    </div>

                                    {/*  right  */}
                                    <div className='relative'>
                                        <button onClick={() => setRightClicked(true)}
                                                className='right_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800'>Right
                                        </button>

                                        {/* tooltip */}
                                        <p className={`${rightClicked ? 'opacity-100 z-[100] translate-x-0' : 'opacity-0 z-[-1] translate-x-[-20px]'} absolute top-[50%] transform translate-y-[-50%] right-[-140px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                                            Right Tooltip

                                            {/* arrow */}
                                            <span
                                                className='w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] left-[-3%]'></span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {clickedTooltipCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const ClickedTooltip = () => {

    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);
    const [topClicked, setTopClicked] = useState(false);
    const [bottomClicked, setBottomClicked] = useState(false);

    return (
        <div className="flex items-center gap-[10px] justify-center flex-wrap">

            {/*  left  */}
            <div className="relative">
                <button onClick={() => setLeftClicked(true)}
                        className="left_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800">Left
                </button>

                {/* tooltip */}
                <p className={`${leftClicked ? "opacity-100 z-[100] translate-x-0" : "opacity-0 z-[-1] translate-x-[20px]"} absolute top-[50%] transform translate-y-[-50%] left-[-130px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                    Left Tooltip

                    {/* arrow */}
                    <span
                        className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] right-[-3%]"></span>
                </p>
            </div>

            {/*  top  */}
            <div className="relative">
                <button onClick={() => setTopClicked(true)}
                        className="top_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800">Top
                </button>

                {/* tooltip */}
                <p className={`${topClicked ? "opacity-100 z-[100] translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                    Top Tooltip

                    {/* arrow */}
                    <span
                        className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                </p>
            </div>

            {/*  bottom  */}
            <div className="relative">
                <button onClick={() => setBottomClicked(true)}
                        className="bottom_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800">Bottom
                </button>

                {/* tooltip */}
                <p className={`${bottomClicked ? "opacity-100 z-[100] translate-y-0" : "opacity-0 z-[-1] translate-y-[-20px]"} absolute left-[50%] transform translate-x-[-50%] bottom-[-50px] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                    Bottom Tooltip

                    {/* arrow */}
                    <span
                        className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] top-[-13%]"></span>
                </p>
            </div>

            {/*  right  */}
            <div className="relative">
                <button onClick={() => setRightClicked(true)}
                        className="right_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800">Right
                </button>

                {/* tooltip */}
                <p className={`${rightClicked ? "opacity-100 z-[100] translate-x-0" : "opacity-0 z-[-1] translate-x-[-20px]"} absolute top-[50%] transform translate-y-[-50%] right-[-140px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                    Right Tooltip

                    {/* arrow */}
                    <span
                        className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] left-[-3%]"></span>
                </p>
            </div>
        </div>
    );
};

export default ClickedTooltip;
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
                        href="#rounded_tooltip"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Rounded Tooltip
                    </a>
                    <a
                        href="#arrow_tooltip"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Arrow Tooltip
                    </a>
                    <a
                        href="#relative_animation"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        Relative Animation
                    </a>
                    <a
                        href="#profile_tooltip"
                        className={`${
                            contentActiveTab === 4 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(4)}
                    >
                        Profile Tooltip
                    </a>
                    <a
                        href="#clicked_tooltip"
                        className={`${
                            contentActiveTab === 5 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(5)}
                    >
                        Clicked Tooltip
                    </a>
                </div>
            </aside>
            <Helmet>
                <title>Data Display - Tooltip</title>
            </Helmet>
        </>
    );
};

export default Tooltip;
