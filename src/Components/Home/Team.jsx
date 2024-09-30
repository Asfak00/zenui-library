import React from 'react';
import {FaBehance} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {FiFigma, FiLinkedin} from "react-icons/fi";
import {TeamData} from "../../Utils/TeamData.js";

const Team = () => {
    return (
        <section>
            <div className='flex flex-col items-center justify-center mt-16 640px:mt-24'>
                <h3 className='text-[2rem] 640px:text-[2.4rem] font-[600] text-gray-800'><span className='text-[#9A04F5]'>Design</span> Credits Goes</h3>
                <p className='w-full 1404px:w-[60%] mx-auto 640px:text-center text-[1rem] text-gray-600'>Our design contributors provide the creative foundation for our components and blocks, helping us innovate and expand ZenUI’s offerings with their unique insights and designs.</p>
            </div>

            <div className='mt-16 flex flex-wrap gap-[40px] justify-center'>
                {
                    TeamData?.map((member,index)=> (
                        <div className='flex flex-col justify-center items-center' key={index}>
                            <img
                                src={member?.image}
                                alt='profile/image' className='w-[200px] h-[200px] overflow-hidden hover:scale-[1.1] transition-all duration-300 rounded-full'/>

                            <h3 className='text-[1.3rem] font-[600] text-gray-700 leading-[25px] mt-5'>{member?.name}</h3>
                            <p className='text-[1rem] text-gray-500 font-[300]'>{member?.title}</p>

                            <div className='flex items-center gap-[10px] mt-4'>
                                {
                                    member?.behanceLink && (
                                        <a href={member?.behanceLink}>
                                            <FaBehance className='text-[1.4rem] text-gray-400 hover:text-[#0FABCA] cursor-pointer'/>
                                        </a>
                                    )
                                }
                                {
                                    member?.linkedinLink && (
                                        <a href={member?.linkedinLink}>
                                            <FiLinkedin className='text-[1.5rem] text-gray-400 hover:text-[#0FABCA] cursor-pointer'/>
                                        </a>
                                    )
                                }
                                {
                                    member?.twitterLink && (
                                        <a href={member?.twitterLink}>
                                            <FaXTwitter className='text-[1.4rem] text-gray-400 hover:text-[#0FABCA] cursor-pointer'/>
                                        </a>
                                    )
                                }
                                {
                                    member?.figmaLink && (
                                        <a href={member?.figmaLink}>
                                            <FiFigma className='text-[1.4rem] text-gray-400 hover:text-[#0FABCA] cursor-pointer'/>
                                        </a>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Team;
