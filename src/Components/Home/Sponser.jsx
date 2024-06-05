import React, {useEffect} from "react";

// react icons
import { FaHeart } from "react-icons/fa";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";
import utils from "../../Utils/index.jsx";

const Sponser = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const containerStyle = {
        backgroundImage: 'url(/sponsorbg.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    };

    return (
        <>
            <section className="flex justify-between px-10 py-20 gap-[4rem]" style={containerStyle}>
                <div className='w-[30%]'>
                    <h1 data-aos="zoom-in" className="font-[900] flex items-center gap-5 text-[3rem] text-[#0471d6]">
                        Support ZenUI <FaHeart className='text-red-600 heartIcon'/>
                    </h1>
                    <p data-aos="zoom-in" data-aos-duration="1300"
                       className=" text-[#9caebc] mx-auto font-[400] dark:text-[#D9EEFF] text-[0.9rem] mt-1 capitalize">
                        Your sponsorship helps us maintain and expand ZenUI, ensuring it remains a cutting-edge UI component library. By supporting ZenUI, you contribute to the development of innovative features, improved performance, and comprehensive documentation, empowering developers worldwide to create exceptional user experiences. Join us in fostering a vibrant community and advancing the future of web development.
                    </p>
                </div>

                <div className='flex items-start gap-8 mt-6 w-[60%]'>
                    <div data-aos="fade-right" data-aos-duration="1500"
                         className='flex flex-col items-center justify-center backdrop-blur-md sponsorCard px-8 pb-5 rounded-md'>
                        <img src='/golden.png' alt='zenui golden sponser' className='w-[140px] pt-[1rem]'/>
                        <h2 className='font-[900] flex items-center gap-5 text-[1.5rem] text-[#dcb867] pt-[1rem]'>Golden Sponsor</h2>
                        <p className='text-[1rem] text-[#9caebc] mt-6'>
                            As a Golden Sponsor, your <span className='text-[#dcb867] capitalize'>company's name</span> and <span className='text-[#dcb867] capitalize'>logo</span> will be prominently featured on our ZenUI website and all social platforms. This premium visibility highlights your commitment to supporting cutting-edge web development tools. Your sponsorship directly contributes to the growth and enhancement of ZenUI, ensuring we continue to provide top-quality UI components to developers worldwide.
                        </p>
                        <button className={`${utils.buttonPrimary} mt-5`}><a href='mailto:zenuilibrary@gmail.com'>Contact Us</a></button>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1500"
                         className='flex flex-col items-center mt-[12rem] justify-center backdrop-blur-md px-8 pb-5 rounded-md sponsorCard'>
                        <img src='/silver.png' alt='zenui golden sponser' className='w-[160px] pt-[0.5rem]'/>
                        <h2 className='font-[900] flex items-center gap-5 text-[1.5rem] text-[#9caebc] pt-[0rem]'>Silver
                            Sponsor</h2>
                        <p className='text-[1rem] text-[#9caebc] mt-6'>
                            As a Silver Sponsor, we will proudly display your <span className='text-[#9caebc] font-extrabold capitalize'>company's name</span> on our ZenUI website. This
                            recognition highlights your support and contribution to our project, helping us continue to
                            develop and refine our UI component library. Your sponsorship plays a crucial role in
                            empowering developers worldwide with the tools they need to create exceptional web
                            applications.
                        </p>
                        <button className={`${utils.buttonPrimary} mt-5`}><a href='mailto:zenuilibrary@gmail.com'>Contact Us</a></button>

                    </div>
                </div>

            </section>
        </>
    );
};

export default Sponser;
