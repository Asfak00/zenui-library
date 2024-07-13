import React, {useEffect} from "react";

// utils styles
import utils from "../../Utils";

// react icons
import { MdDashboardCustomize } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { FaFire } from "react-icons/fa";

// import aos animation
import "aos/dist/aos.css";
import AOS from "aos";

// react router dom
import { Link, useNavigate } from "react-router-dom";

import {allComponents} from "../../Utils/AllComponents.js";
import {IoMdNotifications} from "react-icons/io";

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
      <main className="w-full min-h-screen" style={containerStyle}>
        <div className="flex justify-center items-center text-center gap-12 ">
          <div className="1024px:w-[55%] w-full 640px:pl-10 mt-[10rem] 425px:mt-[12rem] relative">

            <div className="gradient-border" data-aos="fade-zoom-in"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="800"
                 data-aos-offset="0">
              <div
                  className="px-4 w-fit mx-auto py-1.5 backdrop-blur-md serviceCard text-[#9caebc] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
                <FaFire className="text-[1.3rem] text-red-500"/>
                ZenUI 2.0 is upcoming
              </div>
            </div>

            <h1 data-aos="zoom-in"
                className="heroText font-[900] text-[2rem] 425px:text-[3rem] 640px:text-[4.5rem] leading-[3rem] 425px:leading-[4.5rem] 640px:leading-[6rem] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#064168] to-[#25A5C3]">
            ZenUI Library
            </h1>
            <h3 data-aos="zoom-in"
                className="text-[0.75rem] 425px:text-[1.120rem] 640px:text-[1.680rem] capitalize font-[500] text-[#9caebc]">
              Free platform, use your favorite components and designs
            </h3>
            <p data-aos="zoom-in"
               className=" text-[#9caebc] w-[82%] 425px:w-[80%] 640px:w-[91%] mx-auto font-[400] text-[0.9rem] mt-3">
              ZenUI is a free platform where you get all the
              components and designs you need to use. So find your favorite design
              or component.
            </p>

            {/* react icon */}
            <div data-aos="fade-left"
                 className="absolute top-[-50px] 425px:top-[-70px] right-[-10px] 425px:right-[10px] 640px:right-[40px] 1024px:right-[-60px]">
              <img src='https://i.ibb.co/vw8FWDF/Untitled-design-5.png'
                   className='w-[60px] 425px:w-[80px] animate-[spin_10s_linear_infinite] duration-1000'/>
            </div>

            {/* tailwind css icon */}
            <div data-aos="fade-right"
                 className="absolute bottom-[50px] 425px:bottom-[20px] 640px:bottom-[0px] left-[-10px] 425px:left-[10px] 640px:left-[40px] 1024px:left-[-0px]">
              <img src='https://i.ibb.co/VLCjn0q/Untitled-design-6.png'
                   className='w-[60px] 425px:w-[80px] animate-pulse'/>
            </div>

            <div data-aos="fade-up"
                 data-aos-anchor-placement="bottom-bottom"
                 className="flex items-center justify-center gap-3 425px:gap-6 mt-12">
              <button
                  className={utils.buttonPrimary}
                  onClick={() => navigate("/getting-started/overview")}
              >
                Get Started
              </button>
              <button className={utils.buttonSecondary}>
                <Link to="/components/all-components">Components</Link>
              </button>
            </div>
          </div>
        </div>

        {/* services */}
        <div
            className="grid grid-cols-1 425px:grid-cols-2 1024px:grid-cols-4 gap-5 px-5 425px:px-10 pt-[5rem] 425px:pt-[9rem] pb-10 425px:pb-20">
          <div data-aos="fade-up" data-aos-duration="700" className="p-4 serviceCard rounded-md backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <MdDashboardCustomize className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2"/>
              <h4 className="text-[#9caebc]  font-[600] text-[1.2rem] ">
                Full Customized
              </h4>
            </div>
            <p className="text-[0.9rem] text-[#7f8f9b]">
              Our Customized Component service offers tailored solutions for unique design needs. Whether it's adapting
              existing components or crafting entirely new ones, our team works closely with clients to bring their
              vision to life.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="p-6 serviceCard rounded-md backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <CgIfDesign className=" text-primary text-[2.7rem] rounded-full bg-[#3b9df827] p-2"/>
              <h4 className="text-[#9caebc]  font-[600] text-[1.2rem] ">
                Modern Design
              </h4>
            </div>
            <p className="text-[0.9rem] text-[#7f8f9b]">
              Our Modern Design collection brings a fresh and contemporary aesthetic to UI development. Featuring sleek
              lines, intuitive layouts, and vibrant visuals, our designs are tailored to elevate user experiences across
              digital platforms.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1300" className="p-6 serviceCard rounded-md backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <FaCubesStacked className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2"/>
              <h4 className="text-[#9caebc]  font-[600] text-[1.2rem] ">
                Stactured Code
              </h4>
            </div>
            <p className="text-[0.9rem] text-[#7f8f9b]">
              Our UI Component Library offers meticulously crafted, structured code for seamless integration into any
              project. Each component is designed with clarity and versatility in mind, empowering developers to
              effortlessly build visually stunning user interfaces.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1600" className="p-6 serviceCard rounded-md backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-3">
              <MdVerifiedUser className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2"/>
              <h4 className="text-[#9caebc] font-[600] text-[1.2rem] ">
                Easy To Use
              </h4>
            </div>
            <p className="text-[0.9rem] text-[#7f8f9b]">
              Our UI components are designed for simplicity and ease of use, enabling developers to effortlessly
              integrate them into their projects. With intuitive APIs and clear documentation, our components streamline
              the development process, allowing for rapid implementation without sacrificing quality.
            </p>
          </div>
        </div>

        <div className='w-full items-center justify-center text-center mb-4 640px:mb-8'>
          <h1 className='font-[900] text-[1.5rem] 425px:text-[2.5rem] text-[#9caebc]'>ZenUI All Components</h1>
        </div>

        <div
            x-data="{}"
            x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-5"
        >
          <ul x-ref="logos"
              className="flex items-center gap-5 w-[50%] 1404px:w-[20%] mx-auto justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none allComponentSliderLeft">
            {
              allComponents?.map((item, index) => (
                  <a href={item.url}
                     className={`py-2 px-6 bg-[#0b1a43] capitalize border border-[#0b1a43] text-[#9caebc] rounded font-[500] min-w-fit`}
                     key={index}>{item.title}</a>
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
            className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-10 640px:mb-20"
        >
          <ul x-ref="logos"
              className="flex items-center gap-5 w-[50%] 1404px:w-[20%] mx-auto justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none allComponentSliderRight">
            {
              allComponents?.map((item, index) => (
                  <a href={item.url}
                     className={`py-2 px-6 bg-[#0b1a43] capitalize border border-[#0b1a43] text-[#9caebc] rounded font-[500] min-w-fit`}
                     key={index}>{item.title}</a>
              ))
            }

          </ul>
        </div>
      </main>
  )
      ;
};

export default Hero;
