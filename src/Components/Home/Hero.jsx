import React from "react";

// utils styles
import utils from "../../Utils";

// react icons
import { MdDashboardCustomize } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";

// react router dom
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {

  const containerStyle = {
    backgroundImage: 'url(https://i.ibb.co/4NV9RbT/Purple-Blue-Illustration-Digital-Course-Blog-Banner.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '110vh',
  };

  const navigate = useNavigate();
  return (
    <main className="w-full" style={containerStyle}>
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
      <div className="grid grid-cols-4 gap-5 px-10 mt-[9rem]">
        <div className="p-4 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <MdDashboardCustomize className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#9caebc]  font-[600] text-[1.2rem] ">
              Full Customized
            </h4>
          </div>
          <p className="text-[0.9rem] text-[#7f8f9b]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            odio alias deleniti suscipit inventore. Delectus, dolores expedita
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            odio alias deleniti suscipit inventore. Delectus, dolores expedita
          </p>
        </div>
        <div className="p-6 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <MdDashboardCustomize className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#9caebc]  font-[600] text-[1.2rem] ">
              Stactured Code
            </h4>
          </div>
          <p className="text-[0.9rem] text-[#7f8f9b]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            odio alias deleniti suscipit inventore. Delectus, dolores expedita
          </p>
        </div>
        <div className="p-6 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <MdDashboardCustomize className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#9caebc] font-[600] text-[1.2rem] ">
              Easy To Use
            </h4>
          </div>
          <p className="text-[0.9rem] text-[#7f8f9b]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            odio alias deleniti suscipit inventore. Delectus, dolores expedita
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
