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

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        return text.slice(0, maxLength) + '...';
    }

  return (
    <aside className="w-full 640px:pl-[2.5rem] px-6 640px:px-10">
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
                    className="bg-gray-50 h-full flex flex-col justify-between rounded-md border border-gray-200"
                >
                    <div>
                        <div className=" relative mb-2 group cursor-pointer">
                            <img
                                src={template.image}
                                alt={template.title}
                                className="w-full h-[150px] rounded-t-md object-cover "
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
                                <h1 className="font-[600] text-gray-700 capitalize text-[1.2rem] flex items-center justify-between">
                                    {truncateText(template.title, 16)}

                                    <p className='py-[1px] px-[10px] rounded-full bg-blue-100 text-blue-500 text-[0.7rem] font-[300] w-max'>
                                        Free
                                    </p>
                                </h1>
                                <p className="text-gray-500 text-[0.9rem] mt-3 font-[400]">
                                    {truncateText(template.description, 70)}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 w-full">
                        <button
                            className={`px-4 uppercase w-full flex items-center justify-center mx-auto py-2 bg-gray-300 rounded-md hover:bg-blue-400 group transition-all duration-300`}
                        >
                            <a href={template.githubLink} target="_blank" className='text-gray-700 group-hover:text-white transition-all duration-300'>
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
