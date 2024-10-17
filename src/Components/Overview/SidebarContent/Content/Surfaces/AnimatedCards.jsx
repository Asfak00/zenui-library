import React, {useRef, useState} from "react";

// react helmet
import {Helmet} from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// icons
import {FaArrowRightLong, FaXTwitter} from "react-icons/fa6";
import {ImFacebook2} from "react-icons/im";
import {FaDribbble, FaRegHeart} from "react-icons/fa";
import {MdOutlineTimer} from "react-icons/md";
import {useToggleCardView} from "../../../../../Utils/ButtonToggle.js";

const AnimatedCards = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);
    const [hovered, setHovered] = useState(null);

    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const toggleCardView = useToggleCardView()

    // actions
    const [animatedCard1Preview, setAnimatedCard1Preview] = useState(true);
    const [animatedCard1Code, setAnimatedCard1Code] = useState(false);

    const [animatedCard2Preview, setAnimatedCard2Preview] = useState(true);
    const [animatedCard2Code, setAnimatedCard2Code] = useState(false);

    const [animatedCard3Preview, setAnimatedCard3Preview] = useState(true);
    const [animatedCard3Code, setAnimatedCard3Code] = useState(false);

    const [animatedCard4Preview, setAnimatedCard4Preview] = useState(true);
    const [animatedCard4Code, setAnimatedCard4Code] = useState(false);

    const [animatedCard5Preview, setAnimatedCard5Preview] = useState(true);
    const [animatedCard5Code, setAnimatedCard5Code] = useState(false);

    const [animatedCard6Preview, setAnimatedCard6Preview] = useState(true);
    const [animatedCard6Code, setAnimatedCard6Code] = useState(false);

    const [animatedCard7Preview, setAnimatedCard7Preview] = useState(true);
    const [animatedCard7Code, setAnimatedCard7Code] = useState(false);

    const [animatedCard8Preview, setAnimatedCard8Preview] = useState(true);
    const [animatedCard8Code, setAnimatedCard8Code] = useState(false);

    const [animatedCard9Preview, setAnimatedCard9Preview] = useState(true);
    const [animatedCard9Code, setAnimatedCard9Code] = useState(false);

    const [animatedCard10Preview, setAnimatedCard10Preview] = useState(true);
    const [animatedCard10Code, setAnimatedCard10Code] = useState(false);

    const [animatedCard11Preview, setAnimatedCard11Preview] = useState(true);
    const [animatedCard11Code, setAnimatedCard11Code] = useState(false);


    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div className="w-full 425px:w-[80%]">
                    <ContentHeader id="hover-animated-card-1" text={"hover animated card 1"}/>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard1Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard1Preview, setAnimatedCard1Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard1Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard1Preview, setAnimatedCard1Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard1Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div
                                    className='w-full 640px:w-[80%] 1024px:w-[60%] h-[350px] relative overflow-hidden group cursor-pointer rounded-md'>

                                    {/*  image  */}
                                    <img
                                        src='https://img.freepik.com/free-photo/close-up-adorable-kitten-couch_23-2150782439.jpg?t=st=1728056952~exp=1728060552~hmac=6c6249502066e36b15e7d040c623af0bc46dd1dbda0274440f8a8de2b85288ca&w=360'
                                        alt='animated_card'
                                        className='w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700'/>

                                    {/*  text  */}
                                    <div
                                        className='absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col'>
                                        <h1 className='text-[1.5rem] font-bold text-white text-center capitalize'>domestic
                                            cat</h1>
                                        <p className='text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]'>Lorem
                                            Ipsum is simply dummy text of the printing and typesetting
                                            industry.</p>
                                        <button
                                            className='bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]'>View
                                            Details
                                        </button>
                                    </div>

                                    {/*  bottom shadow  */}
                                    <div
                                        className='w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0'></div>
                                </div>

                            </div>
                        )}

                        {animatedCard1Code && (
                            <Showcode
                                code='
        <div
            className="w-full sm:w-[80%] lg:w-[60%] h-[350px] relative overflow-hidden group cursor-pointer rounded-md">

            {/*  image  */}
            <img
                src="https://img.freepik.com/free-photo/close-up-adorable-kitten-couch_23-2150782439.jpg?t=st=1728056952~exp=1728060552~hmac=6c6249502066e36b15e7d040c623af0bc46dd1dbda0274440f8a8de2b85288ca&w=360"
                alt="animated_card"
                className="w-full h-full object-cover group-hover:scale-[1.1] transition-all duration-700"/>

            {/*  text  */}
            <div
                className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                <h1 className="text-[1.5rem] font-bold text-white text-center capitalize">domestic
                    cat</h1>
                <p className="text-center z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 transition-all duration-700 text-white text-[0.9rem]">Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.</p>
                <button
                    className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]">View
                    Details
                </button>
            </div>

            {/*  bottom shadow  */}
            <div
                className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
        </div>
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-2" text={"hover animated card 2"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard2Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard2Preview, setAnimatedCard2Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard2Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard2Preview, setAnimatedCard2Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard2Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div
                                    className='w-full 640px:w-[90%] 1024px:w-[70%] bg-[#f2f8f9] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[38] before:transition-all before:ease-out before:duration-[300ms] z-[0]'>

                                    {/*  arrow icon  */}
                                    <FaArrowRightLong className='absolute top-2 z-20 right-2 text-[1rem] text-white'/>

                                    {/*  text  */}
                                    <h3 className='text-[1.5rem] font-bold transition-all duration-500 group-hover:text-white ease-out'>ZenUI
                                        Library</h3>
                                    <p className='text-[0.9rem] text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-white'>ZenUI
                                        Library is an Tailwind CSS components library for any needs. Comes with UI
                                        examples & blocks, templates, Icons, Color Palette and more.</p>

                                </div>

                            </div>
                        )}

                        {animatedCard2Code && (
                            <Showcode
                                code='
        <div
            className="w-full sm:w-[90%] lg:w-[70%] bg-[#f2f8f9] px-[20px] py-[30px] relative overflow-hidden group cursor-pointer rounded-md before:bg-[#00838d] before:w-[38px] before:h-[38px] before:absolute before:top-0 before:right-0 before:rounded-bl-[35px] before:z-[-1] hover:before:scale-[31] before:transition-all before:ease-out before:duration-[300ms] z-[0]">

            {/*  arrow icon  */}
            <FaArrowRightLong className="absolute top-2 z-20 right-2 text-[1rem] text-white"/>

            {/*  text  */}
            <h3 className="text-[1.5rem] font-bold transition-all duration-500 group-hover:text-white ease-out">ZenUI
                Library</h3>
            <p className="text-[0.9rem] text-gray-500 transition-all ease-out duration-500 mt-1 group-hover:text-white">ZenUI
                Library is an Tailwind CSS components library for any needs. Comes with UI
                examples & blocks, templates, Icons, Color Palette and more.</p>

        </div>
                                '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-3" text={"hover animated card 3"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard3Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard3Preview, setAnimatedCard3Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard3Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard3Preview, setAnimatedCard3Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard3Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div
                                    className='w-full 640px:w-[80%] 1024px:w-[60%] rounded-md relative group overflow-hidden'>

                                    {/*  image  */}
                                    <img
                                        src='https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1728139729~exp=1728143329~hmac=dd0870841ecbe138afdb639fee17206241a94b02b17e1e681ad16eba38f0bd7b&w=996'
                                        alt='animated_cards' className='w-full h-[350px] object-cover'/>

                                    {/*  texts  */}
                                    <div
                                        className='flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden'>
                                        <h3 className='text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100'>Jack
                                            Leo</h3>
                                        <p className='text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100'>Product
                                            Designer</p>

                                        {/*  socials icons  */}
                                        <div className='flex items-center gap-[20px] mt-[15px]'>
                                            <div
                                                className='translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100'>
                                                <ImFacebook2
                                                    className='text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200'/>
                                            </div>
                                            <div
                                                className='translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100'>
                                                <FaXTwitter
                                                    className='text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200'/>
                                            </div>
                                            <div
                                                className='translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100'>
                                                <FaDribbble
                                                    className='text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}

                        {animatedCard3Code && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {FaXTwitter} from "react-icons/fa6";
import {ImFacebook2} from "react-icons/im";
import {FaDribbble} from "react-icons/fa";

const AnimatedHoverCard = () => {

    return (
        <div
            className="w-full sm:w-[80%] lg:w-[60%] rounded-md relative group overflow-hidden">

            {/*  image  */}
            <img
                src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1728139729~exp=1728143329~hmac=dd0870841ecbe138afdb639fee17206241a94b02b17e1e681ad16eba38f0bd7b&w=996"
                alt="animated_cards" className="w-full h-[350px] object-cover"/>

            {/*  texts  */}
            <div
                className="flex flex-col items-center justify-center backdrop-blur-md text-white absolute bottom-0 w-full pt-[15px] pb-[30px] translate-y-[200px] group-hover:translate-y-0 transition-all duration-[400ms] overflow-hidden">
                <h3 className="text-[1.7rem] translate-y-[-50px] group-hover:translate-y-0 transition-all duration-700 font-bold tracking-[5px] leading-[30px] opacity-0 group-hover:opacity-100">Jack
                    Leo</h3>
                <p className="text-[1rem] translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">Product
                    Designer</p>

                {/*  socials icons  */}
                <div className="flex items-center gap-[20px] mt-[15px]">
                    <div
                        className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        <ImFacebook2
                            className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200"/>
                    </div>
                    <div
                        className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[800ms] opacity-0 group-hover:opacity-100">
                        <FaXTwitter
                            className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200"/>
                    </div>
                    <div
                        className="translate-y-[100px] group-hover:translate-y-0 transition-all duration-[1100ms] opacity-0 group-hover:opacity-100">
                        <FaDribbble
                            className="text-[1.3rem] text-white cursor-pointer hover:scale-[1.3] transition-all duration-200"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimatedHoverCard;
              '
                            />
                        )}
                    </div>


                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-4" text={"hover animated card 4"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard11Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard11Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard11Preview, setAnimatedCard11Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard11Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard11Preview, setAnimatedCard11Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard11Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div onMouseMove={handleMouseMove}
                                     onMouseEnter={() => setIsHovering(true)}
                                     onMouseLeave={() => setIsHovering(false)}
                                     ref={cardRef}
                                     className='w-full border relative overflow-hidden border-gray-200 rounded-lg p-[25px] cursor-pointer'>

                                    <h2 className='text-[1.5rem] font-bold text-[#DB06F9]'>Web Developer</h2>
                                    <p className='text-gray-600 text-[1rem] mt-2'>A web developer builds and maintains websites, ensuring they are functional, user-friendly, and visually appealing. They use coding languages like HTML, CSS, and JavaScript to bring designs to life and create seamless online experiences.</p>

                                    <img src='https://i.ibb.co.com/Gx5pzCs/Programmer-working-remotely-with-cat-by-his-side.png' alt='animated_card' className='w-[140px] mt-3 float-right'/>

                                    {isHovering && (
                                        <div
                                            className="absolute inset-0 pointer-events-none blur-[50px]"
                                            style={{
                                                background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
                                            }}
                                        />
                                    )}

                                </div>

                            </div>
                        )}

                        {animatedCard11Code && (
                            <Showcode
                                code='
import React, {useRef, useState} from "react";

const AnimatedHoverCard = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    // handle mouse move
    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <div onMouseMove={handleMouseMove}
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}
             ref={cardRef}
             className="w-full border relative overflow-hidden border-gray-200 rounded-lg p-[25px] cursor-pointer">

            {/*  contents  */}
            <h2 className="text-[1.5rem] font-bold text-[#DB06F9]">Web Developer</h2>
            <p className="text-gray-600 text-[1rem] mt-2">A web developer builds and maintains websites, ensuring they
                are functional, user-friendly, and visually appealing. They use coding languages like HTML, CSS, and
                JavaScript to bring designs to life and create seamless online experiences.</p>

            {/*  image  */}
            <img src="https://i.ibb.co.com/Gx5pzCs/Programmer-working-remotely-with-cat-by-his-side.png"
                 alt="animated_card" className="w-[140px] mt-3 float-right"/>

            {/*  hovered color shadow  */}
            {isHovering && (
                <div
                    className="absolute inset-0 pointer-events-none blur-[50px]"
                    style={{
                        background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
                    }}
                />
            )}

        </div>
    );
};

export default AnimatedHoverCard;
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-5" text={"hover animated card 5"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard4Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard4Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard4Preview, setAnimatedCard4Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard4Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard4Preview, setAnimatedCard4Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard4Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div
                                    className="group [perspective:1000px] w-full 640px:w-[80%] 1024px:w-[60%] h-[350px]">
                                    <div
                                        className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                                        {/* Front Side */}
                                        <div
                                            className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
                                            <img
                                                src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg?t=st=1728142095~exp=1728145695~hmac=01edb1d4b68f37689510f834a442804bd4fb7bf68d8f795d7d30f7cc87f79a8b&w=996"
                                                alt="animated_card"
                                                className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
                                            />
                                            <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">Marketing
                                                Strategy</h2>
                                        </div>

                                        {/* Back Side */}
                                        <div
                                            className="absolute w-full h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
                                            <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4">Marketing
                                                Strategy</h2>
                                            <p className="text-gray-600">A marketing strategy is a plan to reach target
                                                customers, promote products, and grow business. It uses tools like ads,
                                                social media, and content to build brand awareness and drive sales.</p>
                                            <a href="https://zenui.net"
                                               className="inline-block mt-4 text-blue-500 hover:underline">Learn
                                                More</a>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        )}

                        {animatedCard4Code && (
                            <Showcode
                                code='
        <div
            className="group [perspective:1000px] w-full sm:w-[80%] lg:w-[60%] h-[350px]">
            <div
                className="relative w-full h-full transition-transform duration-[600ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front Side */}
                <div
                    className="absolute w-full h-full backface-hidden [backface-visibility:hidden]">
                    <img
                        src="https://img.freepik.com/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063136.jpg?t=st=1728142095~exp=1728145695~hmac=01edb1d4b68f37689510f834a442804bd4fb7bf68d8f795d7d30f7cc87f79a8b&w=996"
                        alt="animated_card"
                        className="w-full h-full cursor-pointer object-cover rounded-lg shadow-lg"
                    />
                    <h2 className="text-[1.5rem] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)] font-bold text-white absolute bottom-5 left-5">Marketing
                        Strategy</h2>
                </div>

                {/* Back Side */}
                <div
                    className="absolute w-full h-full bg-white rounded-lg shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden] p-[25px]">
                    <h2 className="text-[1.2rem] font-semibold text-gray-800 mb-4">Marketing
                        Strategy</h2>
                    <p className="text-gray-600">A marketing strategy is a plan to reach target
                        customers, promote products, and grow business. It uses tools like ads,
                        social media, and content to build brand awareness and drive sales.</p>
                    <a href="https://zenui.net"
                       className="inline-block mt-4 text-blue-500 hover:underline">Learn
                        More</a>
                </div>
            </div>
        </div>
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-6" text={"hover animated card 6"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard5Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard5Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard5Preview, setAnimatedCard5Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard5Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard5Preview, setAnimatedCard5Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard5Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div
                                    className='w-full 640px:w-[80%] 1024px:w-[60%] h-[350px] overflow-hidden rounded-md relative cursor-pointer group'>

                                    {/*  image  */}
                                    <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample9.jpg'
                                         alt='animated_card'
                                         className='w-full h-full object-cover group-hover:scale-[1.15] group-hover:rotate-[8deg] transition-all duration-300 ease-out'/>

                                    {/*  texts  */}
                                    <div className='absolute bottom-0 left-0 py-[10px] px-[20px]'>
                                        <h3 className="text-[2rem] font-bold text-white">The</h3>
                                        <h3 className="text-[2rem] font-bold text-yellow-500">Winter</h3>
                                        <h3 className="text-[2rem] font-bold text-white">Collection</h3>
                                    </div>
                                </div>

                            </div>
                        )}

                        {animatedCard5Code && (
                            <Showcode
                                code='
        <div
            className="w-full sm:w-[80%] lg:w-[60%] h-[350px] overflow-hidden rounded-md relative cursor-pointer group">

            {/*  image  */}
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/pr-sample9.jpg"
                 alt="animated_card"
                 className="w-full h-full object-cover group-hover:scale-[1.15] group-hover:rotate-[8deg] transition-all duration-300 ease-out"/>

            {/*  texts  */}
            <div className="absolute bottom-0 left-0 py-[10px] px-[20px]">
                <h3 className="text-[2rem] font-bold text-white">The</h3>
                <h3 className="text-[2rem] font-bold text-yellow-500">Winter</h3>
                <h3 className="text-[2rem] font-bold text-white">Collection</h3>
            </div>
        </div>
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-7" text={"hover animated card 7"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard6Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard6Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard6Preview, setAnimatedCard6Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard6Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard6Preview, setAnimatedCard6Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard6Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div
                                    className='w-full 640px:w-[80%] 1024px:w-[60%] shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group'>

                                    {/*  icons  */}
                                    <div
                                        className='absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]'>
                                        <FaRegHeart className='text-[1.1rem] text-gray-600'/>
                                        <div className='flex items-center gap-[5px]'>
                                            <MdOutlineTimer className='text-orange-700 text-[1.1rem]'/>
                                            <p className='text-[1rem] text-orange-700'>5 min</p>
                                        </div>
                                    </div>

                                    {/*  image  */}
                                    <img
                                        src='https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                                        alt='animated_card'
                                        className='w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out'/>

                                    {/*  texts  */}
                                    <div className='absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full'>
                                        <p className="text-[1rem] uppercase text-gray-600">Travel</p>
                                        <h3 className="text-[1.4rem] font-bold text-gray-900">Discover the sea</h3>
                                        <p className="text-[0.9rem] text-gray-600 mt-2">by Jhon Doe</p>
                                    </div>
                                </div>

                            </div>
                        )}

                        {animatedCard6Code && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {FaRegHeart} from "react-icons/fa";
import {MdOutlineTimer} from "react-icons/md";

const AnimatedHoverCard = () => {

    return (
        <div
            className="w-full sm:w-[80%] lg:w-[60%] shadow-md h-[350px] hover:scale-[1.05] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">

            {/*  icons  */}
            <div
                className="absolute top-0 left-0 opacity-100 z-[-1] group-hover:opacity-100 group-hover:z-[1] ease-out transition-all duration-300 flex items-center justify-between w-full p-[15px]">
                <FaRegHeart className="text-[1.1rem] text-gray-600"/>
                <div className="flex items-center gap-[5px]">
                    <MdOutlineTimer className="text-orange-700 text-[1.1rem]"/>
                    <p className="text-[1rem] text-orange-700">5 min</p>
                </div>
            </div>

            {/*  image  */}
            <img
                src="https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="animated_card"
                className="w-full h-[60%] object-cover group-hover:opacity-40 group-hover:h-full transition-all duration-300 ease-out"/>

            {/*  texts  */}
            <div className="absolute bottom-0 left-0 py-[20px] pb-[40px] px-[20px] w-full">
                <p className="text-[1rem] uppercase text-gray-600">Travel</p>
                <h3 className="text-[1.4rem] font-bold text-gray-900">Discover the sea</h3>
                <p className="text-[0.9rem] text-gray-600 mt-2">by Jhon Doe</p>
            </div>
        </div>
    );
};

export default AnimatedHoverCard;
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-8" text={"hover animated card 8"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard7Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard7Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard7Preview, setAnimatedCard7Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard7Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard7Preview, setAnimatedCard7Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard7Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div
                                    className='w-full 640px:w-[80%] 1024px:w-[60%] shadow-md hover:shadow-none z-0 bg-white rounded-md relative cursor-pointer group before:absolute before:top-0 hover:before:top-[10px] before:left-0 hover:before:left-[-10px] before:w-full before:h-full before:rounded-md before:bg-[#c0e6ed] before:transition-all before:duration-300 before:z-[-1] after:w-full after:h-full after:absolute after:top-0 hover:after:top-[20px] after:left-0 hover:after:left-[-20px] after:rounded-md after:bg-[#d4f2f7] after:z-[-2] after:transition-all after:duration-500'>

                                    {/*  image  */}
                                    <img
                                        src='https://img.freepik.com/free-vector/futuristic-science-lab-background_23-2148495020.jpg?t=st=1728229546~exp=1728233146~hmac=5d458a6b808e0c510548aef0446697c3d452564def915e03e892d0ab604ca1ad&w=996'
                                        alt='animated_card' className='w-full h-[200px] rounded-t-md object-cover'/>

                                    {/*  contents  */}
                                    <div className='p-[18px] pt-2.5 bg-white rounded-b-md'>
                                        <h3 className='text-[1.5rem] font-bold text-[#0FABCA]'>Science</h3>
                                        <p className='text-[1rem] font-[400] text-gray-600'>The science of today is the
                                            technology of tomorrow – Edward Teller</p>

                                        <button
                                            className='w-full py-2 px-4 hover:bg-[#c0e6ed] hover:text-black text-[1rem] transition-all duration-300 bg-[#0FABCA] text-white rounded-md mt-5'>Explore
                                        </button>
                                    </div>

                                </div>

                            </div>
                        )}

                        {animatedCard7Code && (
                            <Showcode
                                code='
        <div
            className="w-full sm:w-[80%] lg:w-[60%] shadow-md hover:shadow-none z-0 bg-white rounded-md relative cursor-pointer group before:absolute before:top-0 hover:before:top-[10px] before:left-0 hover:before:left-[-10px] before:w-full before:h-full before:rounded-md before:bg-[#c0e6ed] before:transition-all before:duration-300 before:z-[-1] after:w-full after:h-full after:absolute after:top-0 hover:after:top-[20px] after:left-0 hover:after:left-[-20px] after:rounded-md after:bg-[#d4f2f7] after:z-[-2] after:transition-all after:duration-500">

            {/*  image  */}
            <img
                src="https://img.freepik.com/free-vector/futuristic-science-lab-background_23-2148495020.jpg?t=st=1728229546~exp=1728233146~hmac=5d458a6b808e0c510548aef0446697c3d452564def915e03e892d0ab604ca1ad&w=996"
                alt="animated_card" className="w-full h-[200px] rounded-t-md object-cover"/>

            {/*  contents  */}
            <div className="p-[18px] pt-2.5 bg-white rounded-b-md">
                <h3 className="text-[1.5rem] font-bold text-[#0FABCA]">Science</h3>
                <p className="text-[1rem] font-[400] text-gray-600">The science of today is the
                    technology of tomorrow – Edward Teller</p>

                <button
                    className="w-full py-2 px-4 hover:bg-[#c0e6ed] hover:text-black text-[1rem] transition-all duration-300 bg-[#0FABCA] text-white rounded-md mt-5">Explore
                </button>
            </div>
        </div>
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-9" text={"hover animated card 9"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard8Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard8Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard8Preview, setAnimatedCard8Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard8Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard8Preview, setAnimatedCard8Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard8Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div className="grid grid-cols-2 gap-6 w-full 1024px:w-[70%]">
                                    {[1, 2, 3, 4].map((item, index) => (

                                        // card container
                                        <div
                                            key={index}
                                            className={`relative transition-all w-full h-[200px] cursor-pointer duration-300 ease-in-out transform ${
                                                hovered !== null && hovered !== index
                                                    ? "blur-sm scale-95"
                                                    : "scale-100"
                                            } hover:scale-105 hover:z-10 hover:blur-none`}
                                            onMouseEnter={() => setHovered(index)}
                                            onMouseLeave={() => setHovered(null)}
                                        >

                                            {/*  image  */}
                                            <img
                                                src='https://img.freepik.com/free-photo/adorable-portrait-pet-surrounded-by-flowers_23-2151850055.jpg?t=st=1728230076~exp=1728233676~hmac=0d7901eef3fdf37539e5917e58b01344816e629ab705497179741fbf82f0038e&w=360'
                                                alt='animated_card' className='w-full h-full rounded-md object-cover'/>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}

                        {animatedCard8Code && (
                            <Showcode
                                code='
import React, {useState} from "react";

const AnimatedHoverCard = () => {

    const [hovered, setHovered] = useState(null);

    return (
        <div className="grid grid-cols-2 gap-6 w-full lg:w-[70%]">
            {[1, 2, 3, 4].map((item, index) => (

                // card container
                <div
                    key={index}
                    className={`relative transition-all w-full h-[200px] cursor-pointer duration-300 ease-in-out transform ${
                        hovered !== null && hovered !== index
                            ? "blur-sm scale-95"
                            : "scale-100"
                    } hover:scale-105 hover:z-10 hover:blur-none`}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                >

                    {/*  image  */}
                    <img
                        src="https://img.freepik.com/free-photo/adorable-portrait-pet-surrounded-by-flowers_23-2151850055.jpg?t=st=1728230076~exp=1728233676~hmac=0d7901eef3fdf37539e5917e58b01344816e629ab705497179741fbf82f0038e&w=360"
                        alt="animated_card" className="w-full h-full rounded-md object-cover"/>
                </div>
            ))}
        </div>
    );
};

export default AnimatedHoverCard;
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-10" text={"hover animated card 10"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard9Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard9Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard9Preview, setAnimatedCard9Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard9Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard9Preview, setAnimatedCard9Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard9Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div
                                    className='w-full 640px:w-[80%] 1024px:w-[60%] shadow-md h-[350px] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group'>

                                    <img
                                        src='https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498366.jpg?t=st=1728230691~exp=1728234291~hmac=4670c1df1a791e3506bdebcdc7aecc5d09bfd2ed8fff51551b39ad3f5f237899&w=996'
                                        alt='animated_card'
                                        className='w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300'/>

                                    <div
                                        className='w-full h-full absolute top-0 left-0 backdrop-blur-lg flex items-center justify-center flex-col px-[20px] opacity-0 transition-all duration-300 group-hover:opacity-100'>
                                        <h2 className='text-[1.5rem] text-white font-bold text-center leading-[30px] capitalize'>Beautiful
                                            rainbow in nature</h2>
                                        <p className='text-[1rem] text-white text-center mt-3 opacity-85'>Lorem ipsum
                                            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet</p>
                                    </div>

                                </div>

                            </div>
                        )}

                        {animatedCard9Code && (
                            <Showcode
                                code='
        <div
            className="w-full sm:w-[80%] lg:w-[60%] shadow-md h-[350px] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group">

            <img
                src="https://img.freepik.com/free-photo/beautiful-rainbow-nature_23-2151498366.jpg?t=st=1728230691~exp=1728234291~hmac=4670c1df1a791e3506bdebcdc7aecc5d09bfd2ed8fff51551b39ad3f5f237899&w=996"
                alt="animated_card"
                className="w-full h-full object-cover group-hover:scale-[1.2] transition-all duration-300"/>

            <div
                className="w-full h-full absolute top-0 left-0 backdrop-blur-lg flex items-center justify-center flex-col px-[20px] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <h2 className="text-[1.5rem] text-white font-bold text-center leading-[30px] capitalize">Beautiful
                    rainbow in nature</h2>
                <p className="text-[1rem] text-white text-center mt-3 opacity-85">Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet</p>
            </div>
        </div>
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader id="hover-animated-card-11" text={"hover animated card 11"}/>
                    </div>

                    <p className=" text-text text-[1rem]">
                        This is a hover-animated card. Hover to reveal dynamic effects and animations.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCard10Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCard10Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setAnimatedCard10Preview, setAnimatedCard10Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCard10Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setAnimatedCard10Preview, setAnimatedCard10Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCard10Preview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div
                                    className='w-full 640px:w-[80%] 1024px:w-[60%] shadow-md h-[350px] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group flex items-center justify-center flex-col gap-[10px]'>

                                    {/*  scalable background and image  */}
                                    <div
                                        className='w-[100px] relative z-0 h-[100px] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[-1] group-hover:before:scale-[20] before:transition-all before:duration-700 before:rounded-full before:bg-blue-200 flex items-center justify-center'>
                                        <img src='https://i.ibb.co.com/0BZfPq6/darklogo.png' alt='animated_card'
                                             className='w-[80px]'/>
                                    </div>

                                    {/*  the title  */}
                                    <h3 className='text-[1.5rem] font-bold z-20'>ZenUI Library</h3>

                                </div>

                            </div>
                        )}

                        {animatedCard10Code && (
                            <Showcode
                                code='
        <div
            className="w-full sm:w-[80%] lg:w-[60%] shadow-md h-[350px] transition-all duration-300 overflow-hidden rounded-md relative cursor-pointer group flex items-center justify-center flex-col gap-[10px]">

            {/*  scalable background and image  */}
            <div
                className="w-[100px] relative z-0 h-[100px] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:z-[-1] group-hover:before:scale-[20] before:transition-all before:duration-700 before:rounded-full before:bg-blue-200 flex items-center justify-center">
                <img src="https://i.ibb.co.com/0BZfPq6/darklogo.png" alt="animated_card"
                     className="w-[80px]"/>
            </div>

            {/*  the title  */}
            <h3 className="text-[1.5rem] font-bold z-20">ZenUI Library</h3>
        </div>
              '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/cards' backName='cards' forwardName='accordion' forwardUrl='/components/according'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[35%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <div className="flex flex-col gap-4 overflow-y-auto h-[90vh] pb-[120px]"
                         style={{scrollbarWidth: 'none'}}>
                        <a
                            href="#hover-animated-card-1"
                            className={`${
                                contentActiveTab === 1 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(1)}
                        >
                            Hover Animated Card 1
                        </a>
                        <a
                            href="#hover-animated-card-2"
                            className={`${
                                contentActiveTab === 2 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(2)}
                        >
                            Hover Animated Card 2
                        </a>
                        <a
                            href="#hover-animated-card-3"
                            className={`${
                                contentActiveTab === 3 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(3)}
                        >
                            Hover Animated Card 3
                        </a>
                        <a
                            href="#hover-animated-card-4"
                            className={`${
                                contentActiveTab === 4 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(4)}
                        >
                            Hover Animated Card 4
                        </a>
                        <a
                            href="#hover-animated-card-5"
                            className={`${
                                contentActiveTab === 5 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(5)}
                        >
                            Hover Animated Card 5
                        </a>
                        <a
                            href="#hover-animated-card-6"
                            className={`${
                                contentActiveTab === 6 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(6)}
                        >
                            Hover Animated Card 6
                        </a>
                        <a
                            href="#hover-animated-card-7"
                            className={`${
                                contentActiveTab === 7 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(7)}
                        >
                            Hover Animated Card 7
                        </a>
                        <a
                            href="#hover-animated-card-8"
                            className={`${
                                contentActiveTab === 8 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(8)}
                        >
                            Hover Animated Card 8
                        </a>
                        <a
                            href="#hover-animated-card-9"
                            className={`${
                                contentActiveTab === 9 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(9)}
                        >
                            Hover Animated Card 9
                        </a>
                        <a
                            href="#hover-animated-card-10"
                            className={`${
                                contentActiveTab === 10 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(10)}
                        >
                            Hover Animated Card 10
                        </a>
                        <a
                            href="#hover-animated-card-11"
                            className={`${
                                contentActiveTab === 11 && "!text-primary !border-primary"
                            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                            onClick={() => setContentActiveTab(11)}
                        >
                            Hover Animated Card 11
                        </a>
                        <div data-ea-publisher="zenuinet" className='w-full' data-ea-type="image"></div>
                    </div>
                </div>
            </aside>
            <Helmet>
                <title>Surfaces - Animated Cards</title>
            </Helmet>
        </>
    );
};

export default AnimatedCards;
