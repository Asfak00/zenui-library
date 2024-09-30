import React, {useEffect} from "react";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";

// animation tilt
import Tilt from 'react-parallax-tilt';

// react router dom
import { useNavigate } from "react-router-dom";
import {FaFacebook, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import {SiGmail} from "react-icons/si";

// components
import Team from "./Team.jsx";

const Hero = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const navigate = useNavigate();
    return (
        <>
        <section className='w-full min-h-screen pt-[2rem] 1024px:pt-[4rem] pb-[5rem] px-8 640px:px-10'>
            <article className='max-w-[1300px] w-full mx-auto flex 1024px:flex-row flex-col gap-[30px] 1024px:flex-row-[60px]'>
                <Tilt>
                    <div data-aos="fade-right" className='1024px:w-[500px] w-full relative'>
                        <img src='/asfak_ahmed_ceo_of_zenui.jpg' className='w-full rounded-[12px]' alt='Asfak Ahmed'/>
                    </div>
                </Tilt>

                <div data-aos="fade-left" className='1024px:w-[70%] w-full'>
                    <h1 className='font-bold text-gray-800 text-[2.3rem] 1024px:text-[3rem] leading-[40px]'>Asfak
                        Ahmed</h1>
                    <h4 className='text-[1rem] text-[#0FABCA] mt-2'>Founder & CEO</h4>

                    <p className='mt-5'>
                        <p className=' text-[1rem] text-gray-500'>
                            Welcome to ZenUI, a premier React and Tailwind CSS UI components library dedicated to
                            providing developers with the tools they need to create stunning, responsive websites
                            effortlessly. Founded by Asfak Ahmed, ZenUI aims to simplify the development process by
                            offering a comprehensive collection of pre-built UI components, website templates, and more.
                        </p>

                        <p className='mt-3 text-[1rem] text-gray-500'>
                            Our mission is to empower developers to build beautiful, functional web applications without
                            the hassle of designing from scratch. At ZenUI, we believe that great design and seamless
                            functionality should be accessible to everyone. That's why we've meticulously crafted a
                            library of UI components that are not only visually appealing but also highly customizable
                            and easy to integrate.
                        </p>

                        <p className='mt-3 text-[1rem] text-gray-500'>
                            Each component is designed with a focus on user experience, ensuring that your applications
                            look great and perform flawlessly across all devices. Beyond our extensive library of UI
                            components and pre-built website templates, we also provide a rich collection of free icons
                            with customization accessibility, essential blocks, and a versatile color palette. These
                            additional resources are thoughtfully designed to give developers the creative freedom to
                            bring their vision to life, making ZenUI the go-to choice for modern web development.
                        </p>
                    </p>

                    <div className="flex items-center gap-4 mt-5">
                        {/*<a href="">*/}
                        {/*  <FaGithub className="text-[#9caebc] text-[1.5rem]" />*/}
                        {/*</a>*/}

                        <a href="https://web.facebook.com/asfak00" target='_blank'>
                            <FaFacebook
                                className="text-[#9caebc] text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
                        </a>

                        <a href="https://www.linkedin.com/in/asfakahmed/" target='_blank'>
                            <FaLinkedin
                                className="text-[#9caebc] text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
                        </a>

                        <a href="https://x.com/asfak00" target='_blank'>
                            <FaXTwitter
                                className="text-[#9caebc] text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
                        </a>

                        <a href="mailto:asfakahmed680@gmail.com">
                            <SiGmail
                                className="text-[#9caebc] text-[1.4rem] hover:text-[#0FABCA] transition-colors duration-300"/>
                        </a>
                    </div>

                </div>
            </article>

            {/*  meet with team  */}
            <Team/>
        </section>
        </>
    )
        ;
};

export default Hero;
