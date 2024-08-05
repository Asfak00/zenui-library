import React from "react";

// icons
import { FaEye } from "react-icons/fa";

// utils style
import utils from "../../../../Utils";
import { Helmet } from "react-helmet";

// animation tilt
import Tilt from 'react-parallax-tilt';

// templates data
import { templatesData } from "../../../../Utils/TemplatesData";

const Templete = () => {
  return (
    <aside className="pt-[9.5rem] 1024px:pt-[4.5rem] 1024px:!pl-[5rem] !px-5 425px:!px-10">
      <h1 className="font-[600] text-[#0471d6] text-[2rem] 425px:text-[2.5rem] 1024px:text-[3rem] capitalize">
        ZenUI Templates
      </h1>
      <p className="w-full 425px:w-[70%] text-text text-[1rem]">
        Browse our collection of React templates to get started building
        your app with ZenUI, including a React home page, React landing page,
        and more.
      </p>

      <div className="grid grid-cols-1 425px:grid-cols-2 640px:grid-cols-3 1024px:w-[950px] mt-12 gap-5">
        {templatesData?.map((template, index) => (
            <Tilt>
                <div
                    key={index}
                    className=" bg-[#2d81ff13] h-full flex flex-col justify-between rounded-md border border-[#2d81ff13]"
                >
                    <div>
                        <div className=" relative mb-2 group cursor-pointer">
                            <img
                                src={template.image}
                                alt={template.title}
                                className="w-full h-[120px] rounded-t-md object-cover "
                            />

                            <div
                                className="w-full absolute hidden top-0 left-0 h-full gap-3 flex-col  group-hover:flex items-center backdrop-blur-sm justify-center">
                                <FaEye className="text-primary text-[1.5rem]"/>
                                <h4 className=" capitalize underline text-text">
                                    <a href={template.liveLink} target="_blank">
                                        view preview
                                    </a>
                                </h4>
                            </div>
                        </div>

                        <div className="p-4 w-full">
                            <div>
                                <h1 className="font-[600] text-text capitalize text-[1.2rem]">
                                    {template.title}
                                </h1>
                                <p className="text-text text-[0.9rem] mt-2 ">
                                    {template.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 w-full">
                        <button
                            className={`${utils.buttonPrimary} uppercase !w-full flex items-center justify-center mx-auto mt-3 !py-1.5`}
                        >
                            <a href={template.githubLink} target="_blank" >
                                Get Template
                            </a>
                        </button>
                    </div>
                </div>
            </Tilt>
        ))}
      </div>

        <Helmet>
            <title>Get-Started - Templete</title>
        </Helmet>
    </aside>
  );
};

export default Templete;
