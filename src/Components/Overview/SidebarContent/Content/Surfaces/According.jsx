import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// icons
import { FaChevronDown, FaPlus } from "react-icons/fa6";

const According = () => {
  // defaultAccording
  const [defaultAccordingPreview, setDefaultAccordingPreview] = useState(true);
  const [defaultAccordingCode, setDefaultAccordingCode] = useState(false);
  const [contentActiveTab, setContentActiveTab] = useState(0);

  const handleDefaultAccordingPreview = () => {
    setDefaultAccordingPreview(true);
    setDefaultAccordingCode(false);
  };

  const handleDefaultAccordingCode = () => {
    setDefaultAccordingCode(true);
    setDefaultAccordingPreview(false);
  };

  // borderAccording
  const [borderAccordingPreview, setBorderAccordingPreview] = useState(true);
  const [borderAccordingCode, setBorderAccordingCode] = useState(false);

  const handleBorderAccordingPreview = () => {
    setBorderAccordingPreview(true);
    setBorderAccordingCode(false);
  };

  const handleBorderAccordingCode = () => {
    setBorderAccordingCode(true);
    setBorderAccordingPreview(false);
  };

  // bgAccording
  const [bgAccordingPreview, setBgAccordingPreview] = useState(true);
  const [bgAccordingCode, setBgAccordingCode] = useState(false);

  const handleBgAccordingPreview = () => {
    setBgAccordingPreview(true);
    setBgAccordingCode(false);
  };

  const handleBgAccordingCode = () => {
    setBgAccordingCode(true);
    setBgAccordingPreview(false);
  };

  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design?",
      description:
        "Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.",
    },

    {
      title: "Define the term 'responsive design' in web development.",
      description:
        "Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.",
    },

    {
      title: "What is the significance of color theory in design?",
      description:
        "Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.",
    },
  ];
  const [isAccordingOpen, setIsAccordingOpen] = useState(0);
  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  // seconda according
  const [isPlusAccording, setIsPlusAccording] = useState(null);
  const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));

  // bgAccording
  const [bgAccording, setBgAccording] = useState(null);
  const handleBgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div className="w-full 425px:w-[80%]">
          <ContentHeader id="default_open" text={"default open"} />

          <p className=" text-text text-[1rem]">
            This is a default opened accordion component. Explore content with immediate visibility upon access.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${defaultAccordingPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      defaultAccordingPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleDefaultAccordingPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      defaultAccordingCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleDefaultAccordingCode}
              >
                Code
              </button>
            </div>
            {defaultAccordingPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="flex gap-3 flex-col w-full">
                    {accordingData?.map((according, index) => (
                        <article
                            key={index}
                            className="border-b border-border rounded py-3"
                        >
                          <div
                              className="flex gap-2 cursor-pointer items-center justify-between w-full"
                              onClick={() => handleClick(index)}
                          >
                            <h2 className="text-primary font-[600] text-[1.2rem]">
                              {according.title}
                            </h2>
                            <p>
                              <FaChevronDown
                                  className={`text-[1.2rem] text-text transition-all duration-300 ${
                                      isAccordingOpen === index &&
                                      "rotate-[180deg] !text-primary"
                                  }`}
                              />
                            </p>
                          </div>
                          <div
                              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                                  isAccordingOpen === index
                                      ? "grid-rows-[1fr] opacity-100 mt-4"
                                      : "grid-rows-[0fr] opacity-0"
                              }`}
                          >
                            <p className="text-text text-[0.9rem] overflow-hidden">
                              {according.description}
                            </p>
                          </div>
                        </article>
                    ))}
                  </div>
                </div>
            )}

            {defaultAccordingCode && (
                <Showcode
                    code='
import React from "react";

// icons
import { FaChevronDown } from "react-icons/fa6";

const BorderAccording = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  // according data
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design",
      description: `Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.`,
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description: `Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.`,
    },

    {
      title: `What is the significance of color theory in design`,
      description: `Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.`,
    },
  ];

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col w-full">
      {accordingData?.map((according, index) => (
        <article key={index} className="border-b border-[#e5eaf2] rounded py-3">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full"
            onClick={() => handleClick(index)}>
            <h2 className="text-[#3B9DF8] font-[600] text-[1.2rem]">
              {according.title}
            </h2>
            <p>
              <FaChevronDown
                className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${
                  isAccordingOpen === index && "rotate-[180deg] !text-[#3B9DF8]"
                }`}
              />
            </p>
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
              isAccordingOpen === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}>
            <p className="text-[#424242] text-[0.9rem] overflow-hidden">
              {according.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BorderAccording;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="border_according" text={"Border Accordion"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a border accordion with toggle component. Expand and collapse sections with distinct border styling for clarity.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${borderAccordingPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      borderAccordingPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleBorderAccordingPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      borderAccordingCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleBorderAccordingCode}
              >
                Code
              </button>
            </div>
            {borderAccordingPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="flex gap-3 flex-col w-full">
                    {accordingData?.map((according, index) => (
                        <article
                            key={index}
                            className="border border-border rounded p-3"
                        >
                          <div
                              className="flex gap-2 cursor-pointer items-center justify-between w-full"
                              onClick={() => handleBorderClick(index)}
                          >
                            <h2 className="text-primary font-[600] text-[1.2rem]">
                              {according.title}
                            </h2>
                            <p>
                              <FaPlus
                                  className={`text-[1.3rem] text-text transition-all duration-300 ${
                                      isPlusAccording === index &&
                                      "rotate-[45deg] !text-primary"
                                  }`}
                              />
                            </p>
                          </div>
                          <div
                              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                                  isPlusAccording === index
                                      ? "grid-rows-[1fr] opacity-100 mt-4"
                                      : "grid-rows-[0fr] opacity-0"
                              }`}
                          >
                            <p className="text-text text-[0.9rem] overflow-hidden">
                              {according.description}
                            </p>
                          </div>
                        </article>
                    ))}
                  </div>
                </div>
            )}

            {borderAccordingCode && (
                <Showcode
                    code='
import React from "react";

// icons
import { FaPlus } from "react-icons/fa6";

const BorderAccording = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState(null);

  // according data
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design",
      description:
        `Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.`,
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description:
        `Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.`,
    },

    {
      title: `What is the significance of color theory in design`,
      description:
        `Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.`,
    },
  ];

  const handleBorderClick = (index) =>
    setIsPlusAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col w-full">
      {accordingData?.map((according, index) => (
        <article key={index} className="border border-[#e5eaf2] rounded p-3">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full"
            onClick={() => handleBorderClick(index)}>
            <h2 className="text-[#3B9DF8] font-[600] text-[1.2rem]">
              {according.title}
            </h2>
            <p>
              <FaPlus
                className={`text-[1.3rem] text-[#424242] transition-all duration-300 ${
                  isAccordingOpen === index && "rotate-[45deg] !text-[#3B9DF8]"
                }`}
              />
            </p>
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
              isAccordingOpen === index
                ? "grid-rows-[1fr] opacity-100 mt-4"
                : "grid-rows-[0fr] opacity-0"
            }`}>
            <p className="text-[#424242] text-[0.9rem] overflow-hidden">
              {according.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BorderAccording;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
                id="background_according"
                text={"background Accordion"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a background color accordion with toggle component. Expand and collapse sections with distinct background colors for visual differentiation.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${bgAccordingPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      bgAccordingPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleBgAccordingPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      bgAccordingCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleBgAccordingCode}
              >
                Code
              </button>
            </div>
            {bgAccordingPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="flex gap-3 flex-col w-full">
                    {accordingData?.map((according, index) => (
                        <article key={index} className="bg-border rounded">
                          <div
                              className="flex gap-2 cursor-pointer items-center justify-between w-full bg-gray-700 p-3 rounded"
                              onClick={() => handleBgAccording(index)}
                          >
                            <h2
                                className={` text-secondary font-[600] text-[1.2rem]`}
                            >
                              {according.title}
                            </h2>
                            <svg
                                className="fill-[#ffffff] shrink-0 ml-8"
                                width="16"
                                height="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                  y="7"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  className={`transform origin-center transition duration-200 ease-out ${
                                      bgAccording === index && "!rotate-180"
                                  }`}
                              />
                              <rect
                                  y="7"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                                      bgAccording === index && "!rotate-180"
                                  }`}
                              />
                            </svg>
                          </div>
                          <div
                              className={`grid transition-all duration-300 overflow-hidden ease-in-out bg-gray-100 ${
                                  bgAccording === index
                                      ? "grid-rows-[1fr] opacity-100 p-3"
                                      : "grid-rows-[0fr] opacity-0"
                              }`}
                          >
                            <div className="text-text text-[0.9rem] overflow-hidden">
                              {according.description}
                            </div>
                          </div>
                        </article>
                    ))}
                  </div>
                </div>
            )}

            {bgAccordingCode && (
                <Showcode
                    code='
import React from "react";

const BackgroundAccording = () => {
  const [bgAccording, setBgAccording] = useState(null);

  // according data
  const accordingData = [
    {
      title: "What is the purpose of wireframing in design?",
      description:
        "Wireframing outlines the basic structure and layout of a design, serving as a visual guide before detailed development.",
    },
    {
      title: "Why is user-centered design important?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, enhancing usability and satisfaction.",
    },
    {
      title: "What role does contrast play in graphic design",
      description: `Contrast in graphic design emphasizes differences, making elements stand out and improving visual hierarchy.`,
    },

    {
      title: `Define the term "responsive design" in web development.`,
      description: `Responsive design ensures web pages adapt to various screen sizes, providing an optimal user experience on different devices.`,
    },

    {
      title: `What is the significance of color theory in design`,
      description: `Color theory guides the selection and combination of colors to evoke specific emotions, enhance readability, and create visually appealing designs.`,
    },
  ];

  const handlebgAccording = (index) =>
    setBgAccording((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col w-full">
      {accordingData?.map((according, index) => (
        <article key={index} className="bg-[#e5eaf2] rounded">
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full bg-gray-700 p-3 rounded"
            onClick={() => handlebgAccording(index)}>
            <h2 className={` text-[#ffffff] font-[600] text-[1.2rem]`}>
              {according.title}
            </h2>
            <svg
              className="fill-[#ffffff] shrink-0 ml-8"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center transition duration-200 ease-out ${
                  bgAccording === index && "!rotate-180"
                }`}
              />
              <rect
                y="7"
                width="16"
                height="2"
                rx="1"
                className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                  bgAccording === index && "!rotate-180"
                }`}
              />
            </svg>
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out bg-gray-100 ${
              bgAccording === index
                ? "grid-rows-[1fr] opacity-100 p-3"
                : "grid-rows-[0fr] opacity-0"
            }`}>
            <div className="text-[#424242] text-[0.9rem] overflow-hidden">
              {according.description}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BackgroundAccording;
              '
                />
            )}
          </div>

          <OverviewFooter backUrl='/components/animated-cards' backName='animated cards' forwardName='app bar' forwardUrl='/components/appbar'/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[35%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#default_open"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Default Open
          </a>
          <a
              href="#border_according"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Border Accordion
          </a>
          <a
              href="#background_according"
              className={`${
                  contentActiveTab === 3 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(3)}
          >
            Background Accordion
          </a>
          <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
        </div>
      </aside>
      <Helmet>
        <title>Surfaces - Accordion</title>
      </Helmet>
    </>
  );
};

export default According;
