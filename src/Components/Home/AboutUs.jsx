import React, {useEffect} from "react";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";

// animation tilt
import Tilt from 'react-parallax-tilt';

// react router dom
import { useNavigate } from "react-router-dom"; 

const Hero = () => {

    const containerStyle = {
        backgroundImage: 'url(/heroImg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const navigate = useNavigate();
    return (
        <>
        <section className='w-full min-h-screen pt-[10rem] pb-[5rem] px-10' style={containerStyle}>
            <article className='max-w-[1200px] w-full mx-auto flex gap-[60px]'>
                <Tilt>
                    <div data-aos="fade-right" className='w-[350px] relative'>
                        <img src='/asfak_ahmed_ceo_of_zenui.jpg' className='w-full rounded-[12px]' alt='Asfak Ahmed'/>
                        {/*<img src='/zenui_founder_blur.png' alt='blur image' className='absolute bottom-[-30px] w-full left-0 right-0'/>*/}
                    </div>
                </Tilt>

                <div data-aos="fade-left" className='w-[70%]'>
                    <h1 className='font-bold text-border text-[3rem] leading-[40px]'>Asfak Ahmed</h1>
                    <h4 className='text-[1rem] text-primary mt-2'>Founder & CEO</h4>

                    <p className='text-[#dbdde0] text-[1rem] mt-5'>
                    Welcome to ZenUI, a premier React and Tailwind CSS UI components library dedicated to providing developers with the tools they need to create stunning, responsive websites effortlessly. Founded by Asfak Ahmed, ZenUI aims to simplify the development process by offering a comprehensive collection of pre-built UI components and website templates. Our mission is to empower developers to build beautiful, functional web applications without the hassle of designing from scratch.

                        At ZenUI, we believe that great design and seamless functionality should be accessible to everyone. That's why we've meticulously crafted a library of UI components that are not only visually appealing but also highly customizable and easy to integrate. Each component is designed with a focus on user experience, ensuring that your applications look great and perform flawlessly across all devices.

                        In addition to our extensive library of UI components, ZenUI also offers a range of pre-built website templates.

                        {/*These templates are designed to cater to various industries and use cases, providing a solid foundation for your projects. Whether you're building a personal portfolio, an e-commerce site, or a corporate website, our templates are crafted to help you get started quickly and efficiently.*/}
                    </p>
                </div>
            </article>
            <article className='max-w-[1200px] w-full mx-auto flex gap-[60px] mt-32'>

                <div data-aos="fade-right" className='w-[70%]'>
                    <h1 className='font-bold text-border text-[3rem] leading-[40px] text-right'>Pritue Mondal</h1>
                    <h4 className='text-[1rem] text-primary mt-2 text-right'>ZenUI Template Designer</h4>

                    <p className='text-[#dbdde0] text-[1rem] mt-5 text-right'>
                        Meet Pritue Mondal, the artistic soul behind the captivating designs within the ZenUI Library. With an innate passion for harmonizing aesthetics and functionality, Pritue weaves digital magic into every pixel, crafting templates that are not just visually stunning but also intuitively user-friendly.

                        Drawing inspiration from the dynamic interplay of modern trends and timeless elegance, Pritue's designs breathe life into websites and applications alike. Each template in the ZenUI Library reflects Pritue's meticulous attention to detail and dedication to creating experiences that resonate seamlessly with users across the globe.

                        Whether you're seeking sleek minimalism, bold expressions of creativity, or sophisticated simplicity, Pritue Mondal's designs offer a versatile spectrum to suit every project's needs. From vibrant color palettes that evoke emotion to layouts that effortlessly guide user journeys, Pritue ensures that every component serves a purpose and tells a story.
                    </p>
                </div>

                <Tilt>
                    <div data-aos="fade-left" className='w-[350px] relative'>
                        <img src='/zenui_designer.jpg' className='w-full h-full rounded-[12px]' alt='Pritue Mondal'/>
                        {/*<img src='/zenui_designer_blur.png' alt='blur image' className='absolute bottom-[-30px] w-full left-0 right-0'/>*/}
                    </div>
                </Tilt>

            </article>
        </section>
        </>
    )
        ;
};

export default Hero;
