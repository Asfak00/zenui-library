import React, { useState} from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";
import {SlInfo} from "react-icons/sl";

const OtpInput = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // normal checkbox
    const [normalCheckboxPreview, setNormalCheckboxPreview] = useState(true);
    const [normalCheckboxCode, setNormalCheckboxCode] = useState(false);

    const handleNormalCheckboxPreview = () => {
        setNormalCheckboxPreview(true);
        setNormalCheckboxCode(false);
    };

    const handleNormalCheckboxCode = () => {
        setNormalCheckboxCode(true);
        setNormalCheckboxPreview(false);
    };

    // animated checkbox
    const [animatedCheckboxPreview, setAnimatedCheckboxPreview] = useState(true);
    const [animatedCheckboxCode, setAnimatedCheckboxCode] = useState(false);

    const handleAnimatedCheckboxPreview = () => {
        setAnimatedCheckboxPreview(true);
        setAnimatedCheckboxCode(false);
    };

    const handleAnimatedCheckboxCode = () => {
        setAnimatedCheckboxCode(true);
        setAnimatedCheckboxPreview(false);
    };

    // checkbox group
    const [checkboxGroupPreview, setCheckboxGroupPreview] = useState(true);
    const [checkboxGroupCode, setCheckboxGroupCode] = useState(false);

    const handleCheckboxGroupPreview = () => {
        setCheckboxGroupPreview(true);
        setCheckboxGroupCode(false);
    };

    const handleCheckboxGroupCode = () => {
        setCheckboxGroupCode(true);
        setCheckboxGroupPreview(false);
    };

    // actions

    // actions
    const [check1Change, setCheck1Change] = useState(false)

    const handleCheckbox1Change = (event) => {
        if(event.target.checked){
            setCheck1Change(true)
        }else {
            setCheck1Change(false)
        }
    }

        const [selected, setSelected] = useState(null);

        const handleChange = (value) => {
            setSelected(value);
        };


    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>

                    <div
                        className="p-4 flex gap-2 w-full 425px:w-[80%] bg-[#d18f0011] border border-[#d18e00]  rounded mb-8">
                        <p>
                            <SlInfo className="text-[#d17d00] text-[1.2rem]"/>
                        </p>
                        <p className="text-[#d18e00] text-[0.9rem]">
                            Customize your checkboxes by changing their colors and sizes. Adjust the <b>background-color</b> for the unchecked state and <b>accent-color</b> for the checked state. Resize them using <b>width</b> and <b>height</b> properties.
                        </p>
                    </div>

                    <ContentHeader text={"normal checkbox"} id={"normal_checkbox"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Standard checkbox for selecting or deselecting options.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${normalCheckboxPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    normalCheckboxPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleNormalCheckboxPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    normalCheckboxCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleNormalCheckboxCode}
                            >
                                Code
                            </button>
                        </div>
                        {normalCheckboxPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <label className='flex items-center gap-[10px] cursor-pointer'>
                                    <input type='checkbox' className='hidden' onChange={handleCheckbox1Change}/>
                                    {
                                        check1Change ? (
                                            <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g id="Group 335">
                                                    <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                                                          height="20" rx="4" className="fill-[#3B9DF8]"
                                                          stroke="#3B9DF8"></rect>
                                                    <path id="Vector"
                                                          d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                                          fill="white"></path>
                                                </g>
                                            </svg>
                                        ) : (
                                            <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g id="Group 335">
                                                    <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                                                          height="20" rx="4" className="fill-transparent"
                                                          stroke="#ccc"></rect>
                                                </g>
                                            </svg>
                                        )
                                    }

                                    <span className='text-[1.2rem] text-text'>ZenUI Library</span>
                                </label>
                            </div>
                        )}

                        {normalCheckboxCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const CheckboxInput = () => {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event) => {
        if(event.target.checked){
            setIsChecked(true)
        }else {
            setIsChecked(false)
        }
    }

    return (
        <label className="flex items-center gap-[10px] cursor-pointer">
                            <input type="checkbox" className="hidden" onChange={handleCheckboxChange}/>
                        {
                            isChecked ? (
                            <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 335">
                            <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                            height="20" rx="4" className="fill-[#3B9DF8]"
                            stroke="#3B9DF8"></rect>
                            <path id="Vector"
                            d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                            fill="white"></path>
                            </g>
                            </svg>
                            ) : (
                            <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 335">
                            <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                            height="20" rx="4" className="fill-transparent"
                            stroke="#ccc"></rect>
                            </g>
                            </svg>
                            )
                        }

                            <span className="text-[1.2rem] text-[#424242]">ZenUI Library</span>
                            </label>
                            );
                        };

export default CheckboxInput;
                                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"animated checkbox"} id={"animated_checkbox"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Checkbox with smooth animations for a visually engaging selection experience.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedCheckboxPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedCheckboxPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleAnimatedCheckboxPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedCheckboxCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleAnimatedCheckboxCode}
                            >
                                Code
                            </button>
                        </div>
                        {animatedCheckboxPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <label className='flex items-center gap-[10px] cursor-pointer'>
                                    <input type='checkbox' className='hidden' onChange={handleCheckbox1Change}/>
                                    <div className='relative'>
                                        <span
                                            className={`${check1Change ? 'opacity-100 z-20 scale-[1]' : 'opacity-0 scale-[0.4] z-[-1]'} transition-all duration-200 absolute top-0 left-0`}>
                                        <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                                <g id="Group 335">
                                                    <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                                                          height="20" rx="4" className="fill-[#3B9DF8]"
                                                          stroke="#3B9DF8"></rect>
                                                    <path id="Vector"
                                                          d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                                          fill="white"></path>
                                                </g>
                                            </svg>
                                    </span>

                                        <span
                                            className={`${!check1Change ? 'opacity-100 z-20 scale-[1]' : 'opacity-0 scale-[0.4] z-[-1]'} transition-all duration-200`}>
                                        <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                                <g id="Group 335">
                                                    <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                                                          height="20" rx="4" className="fill-transparent"
                                                          stroke="#ccc"></rect>
                                                </g>
                                            </svg>
                                    </span>
                                    </div>

                                    <span className='text-[1.2rem] text-text'>ZenUI Library</span>
                                </label>
                            </div>
                        )}

                        {animatedCheckboxCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const CheckboxInput = () => {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event) => {
        if(event.target.checked){
            setIsChecked(true)
        }else {
            setIsChecked(false)
        }
    }

    return (
        <label className="flex items-center gap-[10px] cursor-pointer">
                            <input type="checkbox" className="hidden" onChange={handleCheckboxChange}/>
                            <div className="relative">
                            <span
                            className={`${isChecked ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200 absolute top-0 left-0`}>
                        <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="Group 335">
                                <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                                      height="20" rx="4" className="fill-[#3B9DF8]"
                                      stroke="#3B9DF8"></rect>
                                <path id="Vector"
                                      d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                      fill="white"></path>
                            </g>
                        </svg>
                    </span>

                    <span
                        className={`${!isChecked ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200`}>
                                        <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                                <g id="Group 335">
                                                    <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20"
                                                          height="20" rx="4" className="fill-transparent"
                                                          stroke="#ccc"></rect>
                                                </g>
                                            </svg>
                                    </span>
                </div>

                <span className="text-[1.2rem] text-[#424242]">ZenUI Library</span>
            </label>
            );
            };

export default CheckboxInput;
                '
                            />
                        )}
                    </div>


                    <div className="mt-8">
                        <ContentHeader text={"checkbox group"} id={"checkbox_group"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A group of checkboxes enabling users to select multiple options from a list, ideal for selecting several items or preferences at once.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${checkboxGroupPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    checkboxGroupPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleCheckboxGroupPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    checkboxGroupCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleCheckboxGroupCode}
                            >
                                Code
                            </button>
                        </div>
                        {checkboxGroupPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className='flex flex-col gap-[10px]'>
                                    {[1, 2, 3].map((item) => (
                                        <label key={item} className='flex items-center gap-[10px] cursor-pointer'>
                                            <input
                                                type='radio'
                                                name='checkboxGroup'
                                                value={item}
                                                checked={selected === item}
                                                onChange={() => handleChange(item)}
                                                className='hidden'
                                            />
                                            <div className='relative'>
                        <span
                            className={`${selected === item ? 'opacity-100 z-20 scale-[1]' : 'opacity-0 scale-[0.4] z-[-1]'} transition-all duration-200 absolute top-0 left-0`}
                        >
                            <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 335">
                                    <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20" height="20"
                                          rx="4" className="fill-[#3B9DF8]" stroke="#3B9DF8"></rect>
                                    <path id="Vector"
                                          d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                          fill="white"></path>
                                </g>
                            </svg>
                        </span>

                                                <span
                                                    className={`${selected !== item ? 'opacity-100 z-20 scale-[1]' : 'opacity-0 scale-[0.4] z-[-1]'} transition-all duration-200`}
                                                >
                            <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 335">
                                    <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20" height="20"
                                          rx="4" className="fill-transparent" stroke="#ccc"></rect>
                                </g>
                            </svg>
                        </span>
                                            </div>
                                            <span className='text-[1.2rem] text-text'>ZenUI Library</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {checkboxGroupCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

const CheckboxInput = () => {

    const [isChecked, setIsChecked] = useState(null);

    const handleCheckboxChange = (value) => {
        setIsChecked(value);
    };

    return (
        <div className="flex flex-col gap-[10px]">
                        {[1, 2, 3].map((item) => (
                            <label key={item} className="flex items-center gap-[10px] cursor-pointer">
                        <input
                            type="radio"
                            name="checkboxGroup"
                            value={item}
                            checked={isChecked === item}
                            onChange={() => handleCheckboxChange(item)}
                            className="hidden"
                        />
                        <div className="relative">
                        <span
                            className={`${isChecked === item ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200 absolute top-0 left-0`}
                        >
                            <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 335">
                                    <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20" height="20"
                                          rx="4" className="fill-[#3B9DF8]" stroke="#3B9DF8"></rect>
                                    <path id="Vector"
                                          d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                          fill="white"></path>
                                </g>
                            </svg>
                        </span>

                            <span
                                className={`${isChecked !== item ? "opacity-100 z-20 scale-[1]" : "opacity-0 scale-[0.4] z-[-1]"} transition-all duration-200`}
                            >
                            <svg width="21" height="21" viewBox="0 0 20 20" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 335">
                                    <rect id="Rectangle 331" x="-0.00012207" y="6.10352e-05" width="20" height="20"
                                          rx="4" className="fill-transparent" stroke="#ccc"></rect>
                                </g>
                            </svg>
                        </span>
                        </div>
                        <span className="text-[1.2rem] text-[#424242]">ZenUI Library</span>
                    </label>
                    ))}
                </div>
                );
                };

export default CheckboxInput;
                '
                            />
                        )}
                    </div>


                    <OverviewFooter/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[55%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#normal_checkbox"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Normal Checkbox
                    </a>
                    <a
                        href="#animated_checkbox"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Animated Checkbox
                    </a>
                    <a
                        href="#checkbox_group"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        Checkbox Group
                    </a>
                </div>
            </aside>
            <Helmet>
                <title>Inputs - Checkbox</title>
            </Helmet>
        </>
    );
};

export default OtpInput;
