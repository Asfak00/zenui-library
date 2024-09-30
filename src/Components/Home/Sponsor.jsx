import React from 'react';
import {FaHeart} from "react-icons/fa";

const Sponsor = () => {
    return (
        <section className='bg-[#0FABCA] w-full px-10 p-12 gap-[50px] 640px:gap-0 flex 640px:flex-row flex-col 640px:items-center 640px:justify-evenly'>
            <div className='flex flex-col gap-[30px]'>
                <div className='flex items-end'>
                    <h1 className='text-[2rem] 640px:text-[2.4rem] 1024px:text-[2.6rem] font-[600] text-white leading-[45px] 640px:leading-[55px]'>
                        Become A <br/>
                        Sponsor
                    </h1>
                    <FaHeart className='text-[3rem] text-red-500'/>
                </div>

                    <a className='py-[11px] px-[40px] bg-white text-[#0FABCA] text-center rounded-md text-[1.4rem] font-[600]' href='mailto:zenuilibrary@gmail.com'>Be Our Sponsor</a>
            </div>

            <div className='w-full 640px:w-[27%]'>
                <img src="https://i.ibb.co/ZMWkDzW/Crowdfunding-or-raising-money-for-startup.png"
                     alt="Crowdfunding-or-raising-money-for-startup" className='w-full'/>
            </div>
        </section>
    );
};

export default Sponsor;
