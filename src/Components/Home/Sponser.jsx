import React, {useEffect} from "react";

// react icons
import { FaHeart } from "react-icons/fa";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";

const Sponser = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <>
            <section className="flex flex-col bg-[#060f26] items-center justify-center py-10">
                <h1 data-aos="zoom-in" className="font-[900] flex items-center gap-5 text-[3rem] text-[#0471d6]">
                    Support ZenUI <FaHeart className='text-red-600 heartIcon'/>
                </h1>
                <p data-aos="zoom-in" data-aos-duration="1300" className=" text-[#9caebc] w-[90%] mx-auto font-[400] dark:text-[#D9EEFF] text-[0.9rem] mt-1 capitalize text-center">contribute with Zenui to grow your or your agency profile and audience</p>

                <div className='flex items-center gap-8 mt-6'>
                    <div data-aos="fade-right" data-aos-duration="1500" className='flex flex-col items-center justify-center backdrop-blur-2xl bg-[#081742] serviceCard px-5 pb-5 rounded-md'>
                        <img src='/golden.png' alt='zenui golden sponser' className='w-[175px] pt-[1rem]'/>
                        <h2 className='font-[900] flex items-center gap-5 text-[1.5rem] text-[#dcb867] pt-[1rem]'>Golden Sponsor</h2>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500" className='flex flex-col items-center justify-center backdrop-blur-2xl bg-[#081742] serviceCard px-3 pb-5 rounded-md'>
                        <img src='/silver.png' alt='zenui golden sponser' className='w-[200px] pt-[0.5rem]'/>
                        <h2 className='font-[900] flex items-center gap-5 text-[1.5rem] text-[#9caebc] pt-[0rem]'>Silver Sponsor</h2>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Sponser;
