import React from "react";

// icons
import { FaEye } from "react-icons/fa";

// utils style
import utils from "../../../../Utils";
import { Helmet } from "react-helmet";

// templates data
import { templatesData } from "../../../../Utils/TemplatesData";

const Templete = () => {
  return (
    <aside className="dark:text-[#D9EEFF]">
      <h1 className="font-[600] text-[#000] dark:text-[#D9EEFF] text-[3rem] capitalize">
        React Templates
      </h1>
      <p className="w-[70%] text-text text-[1rem] dark:text-[#D9EEFF]">
        Browse our collection of free React templates to get started building
        your app with TAILWIND UI, including a React home page, React landing
        page, and more.
      </p>

      <div className="grid grid-cols-3 w-full mt-12 gap-5">
        {templatesData?.map((template, index) => (
          <div
            key={index}
            className=" bg-[#2d81ff13] rounded-md border border-[#2d81ff13]"
          >
            <div className=" relative mb-2 group cursor-pointer">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-[120px] object-cover "
              />

              <div className="w-full absolute hidden top-0 left-0 h-full gap-3 flex-col  group-hover:flex items-center backdrop-blur-md justify-center">
                <FaEye className="text-primary text-[1.5rem]" />
                <h4 className=" capitalize underline text-text">
                  <a href={template.liveLink} target="_blank">
                    view live preview
                  </a>
                </h4>
              </div>
            </div>

            <div className="p-4 w-full">
              <h1 className="font-[600] dark:text-[#D9EEFF] text-text capitalize text-[1.2rem]">
                {template.title}
              </h1>
              <p className="text-text text-[0.9rem] mt-2 dark:text-[#D9EEFF]">
                {template.description}
              </p>

              <button
                className={`${utils.buttonSecondary} !w-full flex items-center justify-center mx-auto mt-3 !py-1.5`}
              >
                <a href={template.githubLink} target="_blank">
                  source code
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <Helmet>
        <title>Get-Started - Templete</title>
      </Helmet>
    </aside>
  );
};

export default Templete;
