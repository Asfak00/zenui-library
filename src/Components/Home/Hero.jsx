import React, {useEffect} from "react";

// react icons
import {CgTemplate} from "react-icons/cg";
import {FaGithub, FaReact} from "react-icons/fa";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";

// react router dom
import {useNavigate} from "react-router-dom";

import {BiLogoTailwindCss} from "react-icons/bi";
import {TbBrandNextjs, TbIcons} from "react-icons/tb";
import ComponentsSlider from "./ComponentsSlider.jsx";
import FeaturesCard from "./FeaturesCard.jsx";

import {motion} from "framer-motion";
import {LuLayoutTemplate} from "react-icons/lu";
import CountUp from "react-countup";
import {FaArrowRightLong} from "react-icons/fa6";

// components
import AnimatedCard from "../HomePageComponents/AnimatedCard.jsx";
import SwitchCard from "../HomePageComponents/Switch.jsx";
import TabCard from "../HomePageComponents/Tab.jsx";
import SelectCard from "../HomePageComponents/Select.jsx";
import RatingCard from "../HomePageComponents/Rating.jsx";
import RadioCard from "../HomePageComponents/Radio.jsx";
import TooltipCard from "../HomePageComponents/Tooltip.jsx";
import LoaderCard from "../HomePageComponents/Loader.jsx";
import BadgeCard from "../HomePageComponents/Badge.jsx";
import AnimatedButtonCard from "../HomePageComponents/AnimatedButton.jsx";
import ChipCard from "../HomePageComponents/Chip.jsx";
import StrongPasswordCard from "../HomePageComponents/StrongPasswordCard.jsx";

const Hero = () => {

    const FADE_DOWN_ANIMATION_VARIANTS = {
        hidden: {opacity: 0, y: -10},
        show: {opacity: 1, y: 0, transition: {type: "spring"}},
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const navigate = useNavigate();

    return (
        <main className="w-full min-h-screen">

            {/* hero section */}
            <div
                className="flex 1024px:flex-row flex-col items-center justify-between gap-12 px-8 640px:px-12 640px:pl-12 mt-[3rem] 425px:mt-[4rem] max-w-[1700px] mx-auto">

                <motion.div className="1024px:w-[50%] w-full relative" initial="hidden"
                            animate="show"
                            viewport={{once: true}}
                            variants={{
                                hidden: {},
                                show: {
                                    transition: {
                                        staggerChildren: 0.15,
                                    },
                                },
                            }}>

                    <a href="https://github.com/Asfak00/zenui-library" target="_blank" className='flex items-center gap-[8px] bg-[#9A04F59E] hover:bg-[#9A04F5D2] transition-all duration-200 w-max py-[5px] px-[12px] text-white rounded-[6px] absolute top-[-10px] z-30 left-0 text-[1rem] cursor-pointer'>
                      <FaGithub/>
                       Star us on Github
                      <FaArrowRightLong/>
                    </a>

                    <div
                        className='w-[100px] h-[400px] bg-[#96E8F8] absolute opacity-50 640px:opacity-100 bottom-[0px] 640px:bottom-[-150px] right-12 blur-[70px] rotate-[-60deg] animate-pulse'></div>
                    <div
                        className='w-[100px] h-[300px] bg-[#9A04F5] absolute top-[-200px] animate-pulse opacity-30 left-8 blur-[70px] rotate-[-50deg]'></div>

                    {/*<div className="gradient-border" data-aos="fade-zoom-in"*/}
                    {/*     data-aos-easing="ease-in-back"*/}
                    {/*     data-aos-delay="800"*/}
                    {/*     data-aos-offset="0">*/}
                    {/*  <div*/}
                    {/*      className="px-4 w-fit mx-auto text-[0.6rem] 1024px:py-1.5 backdrop-blur-md rounded-full 1024px:text-[0.9rem] font-[500] flex items-center gap-2">*/}
                    {/*    <FaFire className="text-[0.8rem] 1024px:text-[1.3rem] text-red-500"/>*/}
                    {/*    <p className='bg-gradient-to-r from-[#FF0096FF] to-[#00CCFFFF] bg-clip-text text-transparent'>ZenUI 2.0 is released</p>*/}
                    {/*  </div>*/}
                    {/*</div>*/}

                    <motion.h1
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className="text-[2.4rem] font-[600] 425px:text-[3rem] 640px:text-[2.8rem] leading-[3rem] 425px:leading-[4.5rem] mt-8 640px:leading-[1.25] text-text">
                        <span className='heroText text-[#0FABCA] font-[500]'>ZenUI</span> Open-Source Free UI Components & Templates
                        Library
                    </motion.h1>

                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className='my-4 640px:my-6'>
                        <div className='flex flex-wrap items-center gap-y-[10px] gap-x-[20px] 640px:gap-[20px]'>
                            <h3 className='text-[1.1rem] text-gray-600 font-[500]'>Compatible with:</h3>
                            <div className='flex items-center gap-[5px]'>
                                <FaReact className='text-[1.4rem] text-gray-500'/>
                                <p className='text-[1.1rem] text-gray-500'>React</p>
                            </div>
                            <div className='flex items-center gap-[5px]'>
                                <BiLogoTailwindCss className='text-[1.8rem] text-gray-500'/>
                                <p className='text-[1.1rem] text-gray-500'>Tailwind CSS</p>
                            </div>
                            <div className='flex items-center gap-[5px]'>
                                <TbBrandNextjs className='text-[1.5rem] text-gray-500'/>
                                <p className='text-[1.1rem] text-gray-500'>Next JS</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.p
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className=" text-gray-500 w-full 425px:w-[80%] 640px:w-[91%] font-[400] text-[1.1rem]">
                        ZenUI Library is an Tailwind CSS components library for any needs. Comes with UI examples &
                        blocks,
                        templates, Icons, Color Palette and more.
                    </motion.p>

                    <motion.div
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className="flex items-center gap-3 425px:gap-6 mt-8">
                        <button
                            className='py-3 px-6 640px:px-8 bg-[#0FABCA] text-white rounded-md hover:bg-[#1cbedb] transition-all duration-300'
                            onClick={() => navigate("/getting-started/overview")}
                        >
                            Get Started
                        </button>
                        <button
                            className='py-[11px] z-10 px-6 640px:px-8 border-2 border-[#0FABCA] text-[#0FABCA] rounded-md transition-all duration-300'
                            onClick={() => navigate('/components/all-components')}>
                            Components
                        </button>
                    </motion.div>

                    <motion.div
                        variants={FADE_DOWN_ANIMATION_VARIANTS}
                        className="flex items-center flex-wrap gap-x-[20px] 640px:gap-3 425px:gap-6 mt-6">
                        <div title='Components'
                             className='flex items-center gap-[1px] text-[2.4rem] 640px:text-[2.5rem] font-[600] bg-gradient-to-r from-[#0FABCA] to-[#DB06F9] bg-clip-text text-transparent'>
                            <LuLayoutTemplate className='text-[2rem] 640px:text-[2.2rem] text-[#0FABCA] mr-1.5'/>
                            <CountUp start={0} end={600} duration={5} ></CountUp>
                            <p className='mb-1'>+</p>
                        </div>
                        <div title='Icons'
                             className='flex items-center gap-[1px] text-[2.4rem] 640px:text-[2.5rem] font-[600] bg-gradient-to-r from-[#0FABCA] to-[#DB06F9] bg-clip-text text-transparent'>
                            <TbIcons className='text-[2rem] 640px:text-[2.2rem] text-[#0FABCA] mr-1.5'/>
                            <CountUp start={0} end={500} duration={5} ></CountUp>
                            <p className='mb-1'>+</p>
                        </div>
                        <div title='Templates'
                             className='flex items-center gap-[1px] text-[2.4rem] 640px:text-[2.5rem] font-[600] bg-gradient-to-r from-[#0FABCA] to-[#DB06F9] bg-clip-text text-transparent'>
                            <CgTemplate className='text-[2rem] 640px:text-[2.4rem] text-[#0FABCA] mr-1.5'/>
                            <CountUp start={0} end={20} duration={5} ></CountUp>
                            <p className='mb-1'>+</p>
                        </div>
                    </motion.div>
                </motion.div>

                <div data-aos="fade-left"
                     className='w-full relative hidden 1024px:block 1024px:w-[53.5%] 1360px:w-[50%] h-[200px] 640px:h-[500px] z-30'>
                    <div className='animation-bounce1 absolute top-[-10px] left-[10px]'>
                        <SwitchCard/>
                    </div>
                    <div className='animation-bounce2 absolute top-[85px] left-[30px]' >
                        <RadioCard/>
                    </div>
                    <div className='animation-bounce1 absolute top-[35%] transform translate-y-[-50%] left-[-20px]'>
                        <TooltipCard/>
                    </div>
                    <div
                        className='animation-bounce2 absolute top-[55%] transform translate-y-[-50%] left-[0px] 1260px:left-[30px]'>
                        <AnimatedButtonCard/>
                    </div>
                    <div className='animation-bounce1 absolute top-[70%] transform translate-y-[-50%] left-[-120px]'>
                        <StrongPasswordCard/>
                    </div>
                    <div
                        className='animation-bounce2 absolute top-[-20px] left-[17%] 1260px:left-[25%] transform translate-x-[-50%]'>
                        <TabCard/>
                    </div>
                    <div className='animation-bounce2 absolute top-[-30px] right-[-20px] 1404px:right-5'>
                        <BadgeCard/>
                    </div>
                    <div className='animation-bounce2 absolute top-[80px] left-[35%] transform translate-x-[-50%]'>
                        <SelectCard/>
                    </div>
                    <div
                        className='animation-bounce1 absolute top-[35%] left-[33%] transform translate-y-[-50%] translate-x-[-50%]'>
                        <AnimatedCard/>
                    </div>
                    <div
                        className='animation-bounce2 absolute top-[28%] right-[-20px] 1260px:right-12 transform translate-y-[-50%] translate-x-[-50%]'>
                        <LoaderCard/>
                    </div>
                    <div
                        className='animation-bounce absolute top-[65%] right-[-50px] 1260px:right-[-20px] 1404px:right-[10px] transform translate-y-[-50%] translate-x-[-50%]'>
                        <ChipCard/>
                    </div>
                    <div className='animation-bounce1 absolute top-[70px] right-0'>
                        <RatingCard/>
                    </div>
                </div>
            </div>
            <FeaturesCard/>
            <ComponentsSlider/>
        </main>
    )
        ;
};

export default Hero;
