import React from "react";

// utils styles
import utils from "../../Utils";

// react icons
import { MdDashboardCustomize } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";

// react router dom
import { Link, useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full max-w-[1400px] mx-auto mb-12 ">
      <div className="flex justify-between mt-[3rem] gap-12 overflow-hidden">
        <div className="w-[50%] pl-10 mt-[2rem]">
          <h1 className="font-[900] text-[5.150rem] text-primary uppercase leading-[6rem]">
            ZenUI Library
          </h1>
          <h3 className="text-[1.8rem] dark:text-[#D9EEFF] capitalize font-[500] text-text">
            Free platform, use your favorite components and designs
          </h3>
          <p className=" text-text font-[400] dark:text-[#D9EEFF] text-[0.9rem] mt-3">
            React-Tailwind UI is a free platform where you get all the
            components and designs you need to use. So find your favorite design
            or component.
          </p>

          <div className="flex items-center gap-6 mt-12">
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

        <div className="w-[50%] object-cover">
          <img
            src="https://i.ibb.co/z7nHgSz/5741225-removebg.png"
            alt="hero image"
            className="w-[1200px] object-cover rotate-[-6deg]"
          />
        </div>
      </div>

      {/* services */}
      <div className="grid grid-cols-4 gap-5 px-10 mt-[9rem]">
        <div className="p-4 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <MdDashboardCustomize className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#000]  font-[600] text-[1.2rem] ">
              Full Customized
            </h4>
          </div>
          <p className="text-[0.9rem] text-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            odio alias deleniti suscipit inventore. Delectus, dolores expedita
          </p>
        </div>
        <div className="p-6 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <CgIfDesign className=" text-primary text-[2.7rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#000]  font-[600] text-[1.2rem] ">
              Modern Design
            </h4>
          </div>
          <p className="text-[0.9rem] text-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            odio alias deleniti suscipit inventore. Delectus, dolores expedita
          </p>
        </div>
        <div className="p-6 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <MdDashboardCustomize className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#000]  font-[600] text-[1.2rem] ">
              Stactured Code
            </h4>
          </div>
          <p className="text-[0.9rem] text-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            odio alias deleniti suscipit inventore. Delectus, dolores expedita
          </p>
        </div>
        <div className="p-6 serviceCard rounded-md">
          <div className="flex items-center gap-3 mb-3">
            <MdDashboardCustomize className=" text-primary text-[2.5rem] rounded-full bg-[#3b9df827] p-2" />
            <h4 className="text-[#000] font-[600] text-[1.2rem] ">
              Easy To Use
            </h4>
          </div>
          <p className="text-[0.9rem] text-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            odio alias deleniti suscipit inventore. Delectus, dolores expedita
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
