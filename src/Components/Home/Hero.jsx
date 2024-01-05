import React from "react";

// utils styles
import utils from "../../Utils";

// react router dom
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <main className="w-full h-[85vh] max-w-[1400px] mx-auto px-10 flex flex-col justify-center items-center gap-6 mb-12">
      <h1 className="font-[900] text-[5.150rem] text-primary uppercase leading-[2rem]">
        react-tailwind UI
      </h1>
      <h3 className="text-[1.8rem] capitalize font-[500] text-text">
        Free platform, use your favorite components and designs
      </h3>
      <p className=" text-text font-[400] text-[0.9rem] w-[60%] text-center">
        React-Tailwind UI is a free platform where you get all the components
        and designs you need to use. So find your favorite design or component.
      </p>

      <div className="flex items-center gap-6 mt-12">
        <button
          className={utils.buttonPrimary}
          onClick={() => navigate("/getting-started")}>
          Get Started
        </button>
        <button className={utils.buttonSecondary}>Documentation</button>
      </div>
    </main>
  );
};

export default Hero;
