import React from "react";

// utils styles
import utils from "../../Utils";

// react icons
import { MdDashboardCustomize } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";

// react router dom
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {

  const containerStyle = {
    backgroundImage: 'url(https://i.ibb.co/4NV9RbT/Purple-Blue-Illustration-Digital-Course-Blog-Banner.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  };

  const navigate = useNavigate();
  return (
    <main className="w-full min-h-screen" style={containerStyle}>
      <div className="flex justify-center items-center text-center gap-12 ">
        <div className="w-[50%] pl-10 mt-[8rem] relative">
          <h1 className="font-[900] text-[5.7rem] text-[#0471d6] uppercase leading-[6rem]">
            ZenUI Library
          </h1>
          <h3 className="text-[1.8rem] dark:text-[#D9EEFF] capitalize font-[500] text-[#9caebc]">
            Free platform, use your favorite components and designs
          </h3>
          <p className=" text-[#9caebc] w-[90%] mx-auto font-[400] dark:text-[#D9EEFF] text-[0.9rem] mt-3">
            ZenUI is a free platform where you get all the
            components and designs you need to use. So find your favorite design
            or component.
          </p>

          {/* react icon */}
          <div className="absolute top-[-70px] right-[-90px]">
            <img src='https://i.ibb.co/vw8FWDF/Untitled-design-5.png' className='w-[80px] animate-[spin_10s_linear_infinite] duration-1000'/>
          </div>

          {/* tailwind css icon */}
          <div className="absolute bottom-[0px] left-[-20px]">
            <img src='https://i.ibb.co/VLCjn0q/Untitled-design-6.png' className='w-[80px] animate-pulse'/>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              className={utils.buttonPrimary}
              onClick={() => navigate("/getting-started")}
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
      <div className="grid grid-cols-4 gap-5 px-10 pt-[9rem] pb-[2rem]">
        <div className="p-4 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <MdDashboardCustomize className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#9caebc]  font-[600] text-[1.2rem] ">
              Full Customized
            </h4>
          </div>
          <p className="text-[0.9rem] text-[#7f8f9b]">
            Our Customized Component service offers tailored solutions for unique design needs. Whether it's adapting existing components or crafting entirely new ones, our team works closely with clients to bring their vision to life.
          </p>
        </div>
        <div className="p-6 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <CgIfDesign className=" text-primary text-[2.7rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#9caebc]  font-[600] text-[1.2rem] ">
              Modern Design
            </h4>
          </div>
          <p className="text-[0.9rem] text-[#7f8f9b]">
            Our Modern Design collection brings a fresh and contemporary aesthetic to UI development. Featuring sleek lines, intuitive layouts, and vibrant visuals, our designs are tailored to elevate user experiences across digital platforms.
          </p>
        </div>
        <div className="p-6 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <FaCubesStacked className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#9caebc]  font-[600] text-[1.2rem] ">
              Stactured Code
            </h4>
          </div>
          <p className="text-[0.9rem] text-[#7f8f9b]">
            Our UI Component Library offers meticulously crafted, structured code for seamless integration into any project. Each component is designed with clarity and versatility in mind, empowering developers to effortlessly build visually stunning user interfaces.
          </p>
        </div>
        <div className="p-6 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <MdVerifiedUser className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#9caebc] font-[600] text-[1.2rem] ">
              Easy To Use
            </h4>
          </div>
          <p className="text-[0.9rem] text-[#7f8f9b]">
            Our UI components are designed for simplicity and ease of use, enabling developers to effortlessly integrate them into their projects. With intuitive APIs and clear documentation, our components streamline the development process, allowing for rapid implementation without sacrificing quality.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
