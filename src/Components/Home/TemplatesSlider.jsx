import React, {useEffect} from 'react';
import {allComponents} from "../../Utils/AllComponents.js";
import {templatesData} from "../../Utils/TemplatesData.js";
import {FaEye, FaRegEye} from "react-icons/fa";
import {HiOutlineTemplate} from "react-icons/hi";
import {HomeTemplatesData1, HomeTemplatesData2} from "../../Utils/HomeTemplatesData.js";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";

const TemplatesSlider = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }

    return (
        <>
            <div data-aos="fade-zoom-in" className='w-full items-center justify-center text-center mb-4 640px:mb-[4rem] mt-24'>

                <div className='gradient-border !rounded-md hover:rotate-0 transition-all duration-300 rotate-[10deg]'>
                    <div className='bg-white h-full !rounded-md'>
                        <p className='bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-[1.5rem]'>20+</p>
                    </div>
                </div>

                <h1 className='text-[1.5rem] 425px:text-[2.2rem] text-text font-[600]'>Templates</h1>
                <p className='text-[1.1rem] text-gray-500 w-[35%] mx-auto'>Free, ready-to-use templates to build your projects at lightning speed, perfect for anyone looking to save time without sacrificing quality.</p>
            </div>

            <div
                x-data="{}"
                x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_300px,_black_calc(100%-300px),transparent_100%)] mb-5"
            >
                <ul x-ref="logos"
                    className="flex items-center gap-5 w-[50%] 1404px:w-[20%] mx-auto justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none allComponentSliderLeft">
                    {
                        HomeTemplatesData1?.map((template, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 h-full min-w-fit flex flex-col justify-between rounded-md border border-gray-200 group relative overflow-hidden"
                            >
                               <img
                                   src={template.image}
                                   alt={template.title}
                                   className="w-[400px] h-[250px] rounded-md object-cover "
                                 />

                                <div className='translate-y-[300px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-20 transition-all duration-300 cursor-pointer bg-gradient-to-b absolute flex items-end justify-center top-0 left-0  from-transparent to-[#0FABCA] w-full h-full pb-[40px] gap-[10px]'>
                                    <a href={template?.liveLink} className='bg-[#9A04F5] text-white px-[12px] py-[8px] rounded-md flex items-center gap-[5px] text-[1rem] hover:scale-[1.05] transition-all duration-300'> <FaRegEye/> View</a>
                                    <a href={template?.githubLink} className='bg-[#9A04F5] text-white px-[12px] py-[8px] rounded-md flex items-center gap-[5px] text-[1rem] hover:scale-[1.05] transition-all duration-300'>
                                        <HiOutlineTemplate className='text-[1.1rem]'/> Get Template</a>
                                </div>

                            </div>
                        ))
                    }

                </ul>
            </div>

            <div
                x-data="{}"
                x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_300px,_black_calc(100%-300px),transparent_100%)] mb-10 640px:mb-20"
            >
                <ul x-ref="logos"
                    className="flex items-center gap-5 w-[50%] 1404px:w-[20%] mx-auto justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none allComponentSliderRight">
                    {
                        HomeTemplatesData2?.map((template, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 h-full min-w-fit flex flex-col justify-between rounded-md border border-gray-200 group relative"
                            >
                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-[400px] h-[250px] rounded-md object-cover "
                                />

                                <div
                                    className='translate-y-[300px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-20 transition-all duration-300 cursor-pointer bg-gradient-to-b absolute flex items-end justify-center top-0 left-0  from-transparent to-[#0FABCA] w-full h-full pb-[40px] gap-[10px]'>
                                    <a href={template?.liveLink}
                                       className='bg-[#9A04F5] text-white px-[12px] py-[8px] rounded-md flex items-center gap-[5px] text-[1rem] hover:scale-[1.05] transition-all duration-300'>
                                        <FaRegEye/> View</a>
                                    <a href={template?.githubLink}
                                       className='bg-[#9A04F5] text-white px-[12px] py-[8px] rounded-md flex items-center gap-[5px] text-[1rem] hover:scale-[1.05] transition-all duration-300'>
                                        <HiOutlineTemplate className='text-[1.1rem]'/> Get Template</a>
                                </div>
                            </div>
                        ))
                    }

                </ul>
            </div>
        </>
    );
};

export default TemplatesSlider;
