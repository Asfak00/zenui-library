import React, {useEffect} from 'react';
import {feedbackData} from "../../Utils/FeedbackData.js";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";

const Feedback = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <section className='relative mt-12'>

            <div className='absolute bottom-[-120px] left-[-120px] opacity-40 rotate-[-240deg] w-[550px]'>
                <img src='https://i.ibb.co/VxXFnSz/abstract-wavy-line-removebg-preview.png' alt='vector'
                     className='animation-bounce'/>
            </div>

            <div data-aos="fade-zoom-in">
                <h1 className='text-[1.5rem] 425px:text-[2.2rem] text-text font-[600] text-center'>The Wall of Love</h1>
                <p className='text-[1.1rem] text-gray-500 w-full mx-auto text-center'>Thoughts from those who've
                    experienced <span className='text-[#0FABCA] heroText'>ZenUI</span> in action.</p>
            </div>

            <div data-aos="fade-up"
                 className='w-full px-5 425px:px-10 py-8 mt-6 grid grid-cols-3 gap-[20px]'>

                <div className='flex flex-col gap-[20px]'>
                    {
                        feedbackData?.slice(0,2)?.map((feedback, index) => (
                            <div key={index} className={`w-full h-max p-4 rounded-md border border-gray-200`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-[10px]'>
                                        <img
                                            src={feedback?.avatar}
                                            alt='avatar/image'
                                            className='w-[40px] h-[40px] outline outline-gray-100 rounded-full object-cover'/>
                                        <h1 className='text-[1.1rem] font-[600] text-gray-600'>{feedback?.name}</h1>
                                    </div>

                                    {
                                        feedback?.source === 'product_hunt' && (
                                            <img src='https://cdn.worldvectorlogo.com/logos/product-hunt.svg'
                                                 alt='platform/logo'
                                                 className='w-[20px] h-[20px] rounded-full'/>
                                        )
                                    }
                                    {
                                        feedback?.source === 'linkedin' && (
                                            <img
                                                src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
                                                alt='platform/logo'
                                                className='w-[20px] h-[20px] rounded-full'/>
                                        )
                                    }
                                </div>

                                <p className='text-[1rem] text-gray-600 mt-4'>{feedback?.review}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex flex-col gap-[20px]'>
                    {
                        feedbackData?.slice(2,4)?.map((feedback, index) => (
                            <div key={index} className={`w-full h-max p-4 rounded-md border border-gray-200`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-[10px]'>
                                        <img
                                            src={feedback?.avatar}
                                            alt='avatar/image'
                                            className='w-[40px] h-[40px] outline outline-gray-100 rounded-full object-cover'/>
                                        <h1 className='text-[1.1rem] font-[600] text-gray-600'>{feedback?.name}</h1>
                                    </div>

                                    {
                                        feedback?.source === 'product_hunt' && (
                                            <img src='https://cdn.worldvectorlogo.com/logos/product-hunt.svg'
                                                 alt='platform/logo'
                                                 className='w-[20px] h-[20px] rounded-full'/>
                                        )
                                    }
                                    {
                                        feedback?.source === 'linkedin' && (
                                            <img
                                                src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
                                                alt='platform/logo'
                                                className='w-[20px] h-[20px] rounded-full'/>
                                        )
                                    }
                                </div>

                                <p className='text-[1rem] text-gray-600 mt-4'>{feedback?.review}</p>
                            </div>
                        ))
                    }
                </div>

                <div className='flex flex-col gap-[20px]'>
                    {
                        feedbackData?.slice(3,6)?.map((feedback, index) => (
                            <div key={index} className={`w-full h-max p-4 rounded-md border border-gray-200`}>
                                <div className='flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-[10px]'>
                                        <img
                                            src={feedback?.avatar}
                                            alt='avatar/image'
                                            className='w-[40px] h-[40px] outline outline-gray-100 rounded-full object-cover'/>
                                        <h1 className='text-[1.1rem] font-[600] text-gray-600'>{feedback?.name}</h1>
                                    </div>

                                    {
                                        feedback?.source === 'product_hunt' && (
                                            <img src='https://cdn.worldvectorlogo.com/logos/product-hunt.svg'
                                                 alt='platform/logo'
                                                 className='w-[20px] h-[20px] rounded-full'/>
                                        )
                                    }
                                    {
                                        feedback?.source === 'linkedin' && (
                                            <img
                                                src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png'
                                                alt='platform/logo'
                                                className='w-[20px] h-[20px] rounded-full'/>
                                        )
                                    }
                                </div>

                                <p className='text-[1rem] text-gray-600 mt-4'>{feedback?.review}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Feedback;
