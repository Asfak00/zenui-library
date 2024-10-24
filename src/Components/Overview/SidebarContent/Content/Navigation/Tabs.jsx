import React, {useState} from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import {Helmet} from "react-helmet";

const Tabs = () => {
    // normal button
    const [fullBorderTabPreview, setFullBorderTabPreview] = useState(true);
    const [fullBorderTabCode, setFullBorderTabCode] = useState(false);
    const [contentActiveTab, setContentActiveTab] = useState(0);

    const handleFullBorderPreview = () => {
        setFullBorderTabPreview(true);
        setFullBorderTabCode(false);
    };

    const handleFullBorderCode = () => {
        setFullBorderTabCode(true);
        setFullBorderTabPreview(false);
    };

    // background animated button
    const [bottomBorderPreview, setBottomBorderPreview] = useState(true);
    const [bottomBorderCode, setBottomBorderCode] = useState(false);

    const handleBottomBorderPreview = () => {
        setBottomBorderPreview(true);
        setBottomBorderCode(false);
    };

    const handleBottomBorderCode = () => {
        setBottomBorderCode(true);
        setBottomBorderPreview(false);
    };

    // top border button
    const [topBorderButtonPreview, setTopBorderButtonPreview] = useState(true);
    const [topBorderButtonCode, setTopBorderButtonCode] = useState(false);

    const handleTopBorderButtonPreview = () => {
        setTopBorderButtonPreview(true);
        setTopBorderButtonCode(false);
    };

    const handleTopBorderButtonCode = () => {
        setTopBorderButtonCode(true);
        setTopBorderButtonPreview(false);
    };

    // rounded border button
    const [roundedBorderButtonPreview, setRoundedBorderButtonPreview] =
        useState(true);
    const [roudnedBorderButtonCode, setRoundedBorderButtonCode] = useState(false);

    const handleRoundedBorderButtonPreview = () => {
        setRoundedBorderButtonPreview(true);
        setRoundedBorderButtonCode(false);
    };

    const handleRoundedBorderButtonCode = () => {
        setRoundedBorderButtonCode(true);
        setRoundedBorderButtonPreview(false);
    };

    // box button
    const [boxButtonPreview, setBoxButtonPreview] = useState(true);
    const [boxButtonCode, setBoxButtonCode] = useState(false);

    const handleBoxButtonPreview = () => {
        setBoxButtonPreview(true);
        setBoxButtonCode(false);
    };

    const handleBoxButtonCode = () => {
        setBoxButtonCode(true);
        setBoxButtonPreview(false);
    };

    // animated button
    const [animatedTabPreview, setAnimatedTabPreview] = useState(true);
    const [animatedTabCode, setAnimatedTabCode] = useState(false);

    const handleAnimatedTabPreview = () => {
        setAnimatedTabPreview(true);
        setAnimatedTabCode(false);
    };

    const handleAnimatedTabCode = () => {
        setAnimatedTabCode(true);
        setAnimatedTabPreview(false);
    };

    // toggle button
    const [toggleButtonPreview, setToggleButtonPreview] = useState(true);
    const [toggleButtonCode, setToggleButtonCode] = useState(false);

    const handleToggleButtonPreview = () => {
        setToggleButtonPreview(true);
        setToggleButtonCode(false);
    };

    const handleToggleButtonCode = () => {
        setToggleButtonCode(true);
        setToggleButtonPreview(false);
    };

    // state for full border tab
    const [isActive, setIsActive] = useState(1);

    // bottom border tab
    const [bottomBorderActive, setBottomBorderActive] = useState(1);

    // top border tab
    const [topBorderButtonActive, setTopBorderButtonActive] = useState(1);

    // rounded border tab
    const [roundedBorderButtonAcitve, setRoundedBorderButtonActive] = useState(1);

    // box tab
    const [boxButtonActive, setBoxButtonActive] = useState(1);

    return (
        <>
            <aside className="flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader
                        id="Border_navigation"
                        text={"Border navigation tab"}
                    />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        We see navigation tabs with borders on all sides like this on almost
                        all websites. They are very simple.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${fullBorderTabPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    fullBorderTabPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleFullBorderPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    fullBorderTabCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleFullBorderCode}
                            >
                                Code
                            </button>
                        </div>
                        {fullBorderTabPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <ul className="flex items-center gap-5">
                                    <li
                                        className={`${
                                            isActive === 1 && "bg-primary text-secondary"
                                        } px-6 py-2 border  text-primary transition duration-300 border-primary cursor-pointer`}
                                        onClick={() => setIsActive(1)}
                                    >
                                        Home
                                    </li>
                                    <li
                                        className={`${
                                            isActive === 2 && "bg-primary text-secondary"
                                        } px-6 py-2 border text-primary transition duration-300 border-primary cursor-pointer`}
                                        onClick={() => setIsActive(2)}
                                    >
                                        About
                                    </li>
                                    <li
                                        className={`${
                                            isActive === 3 && "bg-primary text-secondary"
                                        } px-6 py-2 border hidden 425px:block text-primary transition duration-300 border-primary cursor-pointer`}
                                        onClick={() => setIsActive(3)}
                                    >
                                        Support
                                    </li>
                                </ul>
                            </div>
                        )}

                        {fullBorderTabCode && (
                            <Showcode
                                code="
import React, { useState } from 'react';

const BorderTab = () => {

  const [isActive, setIsActive] = useState(1);

  return (
    <ul className='flex items-center gap-5'>
      <li
        className={`${
          isActive === 1 && 'bg-[#3B9DF8] text-[#ffffff]'
        } px-6 py-2 border  text-[#3B9DF8] transition duration-300 border-[#3B9DF8] cursor-pointer`}
        onClick={() => setIsActive(1)}> Home
      </li>
      <li
        className={`${
          isActive === 2 && 'bg-[#3B9DF8] text-[#ffffff]'
        } px-6 py-2 border text-[#3B9DF8] transition duration-300 border-[#3B9DF8] cursor-pointer`}
        onClick={() => setIsActive(2)}> About
      </li>
      <li
        className={`${
          isActive === 3 && 'bg-[#3B9DF8] text-[#ffffff]'
        } px-6 py-2 border text-[#3B9DF8] transition duration-300 border-[#3B9DF8] cursor-pointer`}
        onClick={() => setIsActive(3)}> Support
      </li>
    </ul>
  );
};

export default BorderTab;
"
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="animated_tab" text={"animated tab"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is navigation tabs with sliding animation for smooth and interactive navigation.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedTabPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    animatedTabPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleAnimatedTabPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    animatedTabCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleAnimatedTabCode}
                            >
                                Code
                            </button>
                        </div>
                        {animatedTabPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <ul className="flex items-center bg-[#59bdf738] rounded-full p-1 relative">
                                    <div
                                        className={`${
                                            (boxButtonActive === 1 && "translate-x-[0px]") ||
                                            (boxButtonActive === 2 && "translate-x-[90px]") ||
                                            (boxButtonActive === 3 && "translate-x-[179px] !w-[108px] 425px:!w-[95px] 425px:translate-x-[192px]") ||
                                            (boxButtonActive === 4 &&
                                                "!w-[105px] translate-x-[290px] 640px:translate-x-[295px]")
                                        } !bg-primary absolute !text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full border-transparent cursor-pointer`}
                                    ></div>
                                    <li
                                        className={`${
                                            boxButtonActive === 1 && " !text-[#fff]"
                                        } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                                        onClick={() => setBoxButtonActive(1)}
                                    >
                                        Home
                                    </li>
                                    <li
                                        className={`${
                                            boxButtonActive === 2 && " !text-[#fff]"
                                        } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                                        onClick={() => setBoxButtonActive(2)}
                                    >
                                        About
                                    </li>
                                    <li
                                        className={`${
                                            boxButtonActive === 3 && " !text-[#fff]"
                                        } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                                        onClick={() => setBoxButtonActive(3)}
                                    >
                                        Support
                                    </li>
                                    <li
                                        className={`${
                                            boxButtonActive === 4 && " !text-[#fff]"
                                        } px-6 py-2 hidden 425px:block text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                                        onClick={() => setBoxButtonActive(4)}
                                    >
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        )}

                        {animatedTabCode && (
                            <Showcode
                                code='
import { useState } from "react";

const AnimatedTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <ul className="flex items-center bg-[#59bdf738] rounded-full p-1 relative">
      <div
        className={`${
          (activeTab === 1 && "translate-x-[0px]") ||
          (activeTab === 2 && "translate-x-[90px]") ||
          (activeTab === 3 && "translate-x-[186px]") ||
          (activeTab === 4 && "!w-[100px] translate-x-[290px]")
        } !bg-[#3B9DF8] absolute !text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full border-transparent cursor-pointer`}
      ></div>
      <li
        className={`${
          activeTab === 1 && " !text-[#fff]"
        } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
        onClick={() => setActiveTab(1)}
      >
        Home
      </li>
      <li
        className={`${
          activeTab === 2 && " !text-[#fff]"
        } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
        onClick={() => setActiveTab(2)}
      >
        About
      </li>
      <li
        className={`${
          activeTab === 3 && " !text-[#fff]"
        } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
        onClick={() => setActiveTab(3)}
      >
        Support
      </li>
      <li
        className={`${
          activeTab === 4 && " !text-[#fff]"
        } px-6 py-2  text-[#424242] z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
        onClick={() => setActiveTab(4)}
      >
        Contact
      </li>
    </ul>
  );
};

export default AnimatedTab;
                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader
                            id="bottom_border_navigation"
                            text={"bottom border navigation tab"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is navigation tabs with active tab indication using bottom borders for clarity.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${bottomBorderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    bottomBorderPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBottomBorderPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    bottomBorderCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBottomBorderCode}
                            >
                                Code
                            </button>
                        </div>
                        {bottomBorderPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <ul className="flex flex-wrap items-center gap-5">
                                    <li
                                        className={`${
                                            bottomBorderActive === 1 &&
                                            "!border-primary !text-primary"
                                        } px-6 py-2 border-b  text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setBottomBorderActive(1)}
                                    >
                                        Home
                                    </li>
                                    <li
                                        className={`${
                                            bottomBorderActive === 2 &&
                                            "!border-primary !text-primary"
                                        } px-6 py-2 border-b  text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setBottomBorderActive(2)}
                                    >
                                        About
                                    </li>
                                    <li
                                        className={`${
                                            bottomBorderActive === 3 &&
                                            "!border-primary !text-primary"
                                        } px-6 py-2 border-b hidden 425px:block text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setBottomBorderActive(3)}
                                    >
                                        Support
                                    </li>
                                </ul>
                            </div>
                        )}

                        {bottomBorderCode && (
                            <Showcode
                                code="
import React from 'react';

const BottomBorderTab = () => {

    const [isActive, setIsActive] = useState(1);

  return (
    <ul className='flex items-center gap-5'>
      <li
        className={`${
          isActive === 1 && '!border-[#3B9DF8] !text-[#3B9DF8]'
        } px-6 py-2 border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
        onClick={() => setIsActive(1)}> Home
      </li>
      <li
        className={`${
          isActive === 2 && '!border-[#3B9DF8] !text-[#3B9DF8]'
        } px-6 py-2 border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
        onClick={() => setIsActive(2)}> About
      </li>
      <li
        className={`${
          isActive === 3 && '!border-[#3B9DF8] !text-[#3B9DF8]'
        } px-6 py-2 border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
        onClick={() => setIsActive(3)}> Support
      </li>
    </ul>
  );
};

export default BottomBorderTab; "
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader
                            id="top_border_navigation"
                            text={"top border navigation tab"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is navigation tabs with active tab indication using top borders for clarity and focus.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${topBorderButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    topBorderButtonPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleTopBorderButtonPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    topBorderButtonCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleTopBorderButtonCode}
                            >
                                Code
                            </button>
                        </div>
                        {topBorderButtonPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <ul className="flex flex-wrap items-center">
                                    <li
                                        className={`${
                                            topBorderButtonActive === 1 &&
                                            "!border-primary !text-primary !bg-transparent"
                                        } px-6 py-2 border-t bg-[#d1d1d1] text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setTopBorderButtonActive(1)}
                                    >
                                        Home
                                    </li>
                                    <li
                                        className={`${
                                            topBorderButtonActive === 2 &&
                                            "!border-primary !text-primary !bg-transparent"
                                        } px-6 py-2 border-t bg-[#d1d1d1]  text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setTopBorderButtonActive(2)}
                                    >
                                        About
                                    </li>
                                    <li
                                        className={`${
                                            topBorderButtonActive === 3 &&
                                            "!border-primary !text-primary !bg-transparent"
                                        } px-6 py-2 border-t bg-[#d1d1d1]  text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setTopBorderButtonActive(3)}
                                    >
                                        Support
                                    </li>
                                    <li
                                        className={`${
                                            topBorderButtonActive === 4 &&
                                            "!border-primary !text-primary !bg-transparent"
                                        } px-6 py-2 border-t bg-[#d1d1d1] hidden 425px:block text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setTopBorderButtonActive(4)}
                                    >
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        )}

                        {topBorderButtonCode && (
                            <Showcode
                                code='
import React, { useState } from "react";

const DropDown = () => {
  const [activeTab, setactiveTab] = useState(1);
  return (
    <>
      <div className="p-8 mb-4 flex items-center gap-5 justify-center">
        <ul className="flex items-center">
          <li
            className={`${
              activeTab === 1 &&
              "!border-[#3B9DF8] !text-[#3B9DF8] !bg-transparent"
            } px-6 py-2 border-t bg-[#d1d1d1]   text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setactiveTab(1)}
          >
            Home
          </li>
          <li
            className={`${
              activeTab === 2 &&
              "!border-[#3B9DF8] !text-[#3B9DF8] !bg-transparent"
            } px-6 py-2 border-t bg-[#d1d1d1] text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setactiveTab(2)}
          >
            About
          </li>
          <li
            className={`${
              activeTab === 3 &&
              "!border-[#3B9DF8] !text-[#3B9DF8] !bg-transparent"
            } px-6 py-2 border-t bg-[#d1d1d1] text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setactiveTab(3)}
          >
            Support
          </li>
          <li
            className={`${
              activeTab === 4 &&
              "!border-[#3B9DF8] !text-[#3B9DF8] !bg-transparent"
            } px-6 py-2 border-t bg-[#d1d1d1]  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setactiveTab(4)}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
          '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader
                            id="Squre_border_navigation"
                            text={"Squre border navigation tab"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is navigation tabs with active tab indication using square borders for clear active state
                        visibility.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${roundedBorderButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    roundedBorderButtonPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleRoundedBorderButtonPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    roudnedBorderButtonCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleRoundedBorderButtonCode}
                            >
                                Code
                            </button>
                        </div>
                        {roundedBorderButtonPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <ul className="flex flex-wrap items-center">
                                    <li
                                        className={`${
                                            roundedBorderButtonAcitve === 1 &&
                                            " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
                                        } px-6 py-2 !border-[#d1d1d1] border-b text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setRoundedBorderButtonActive(1)}
                                    >
                                        Home
                                    </li>
                                    <li
                                        className={`${
                                            roundedBorderButtonAcitve === 2 &&
                                            " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
                                        } px-6 py-2 !border-[#d1d1d1] border-b  text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setRoundedBorderButtonActive(2)}
                                    >
                                        About
                                    </li>
                                    <li
                                        className={`${
                                            roundedBorderButtonAcitve === 3 &&
                                            " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
                                        } px-6 py-2 !border-[#d1d1d1] border-b  text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setRoundedBorderButtonActive(3)}
                                    >
                                        Support
                                    </li>
                                    <li
                                        className={`${
                                            roundedBorderButtonAcitve === 4 &&
                                            " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
                                        } px-6 py-2 !border-[#d1d1d1] border-b hidden 425px:block text-text transition duration-300 border-transparent cursor-pointer`}
                                        onClick={() => setRoundedBorderButtonActive(4)}
                                    >
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        )}

                        {roudnedBorderButtonCode && (
                            <Showcode
                                code='
import React, { useState } from "react";

const DropDown = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="p-8 mb-4 flex items-center gap-5 justify-center">
        <ul className="flex items-center">
          <li
            className={`${
              activeTab === 1 &&
              " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
            } px-6 py-2 !border-[#d1d1d1] border-b text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setActiveTab(1)}
          >
            Home
          </li>
          <li
            className={`${
              activeTab === 2 &&
              " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
            } px-6 py-2 !border-[#d1d1d1] border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setActiveTab(2)}
          >
            About
          </li>
          <li
            className={`${
              activeTab === 3 &&
              " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
            } px-6 py-2 !border-[#d1d1d1] border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setActiveTab(3)}
          >
            Support
          </li>
          <li
            className={`${
              activeTab === 4 &&
              " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl"
            } px-6 py-2 !border-[#d1d1d1] border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setActiveTab(4)}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
              '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="box_navigation" text={"box navigation tab"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is navigation tabs with active tab indication using rounded background color for clear
                        active state
                        visibility.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${boxButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    boxButtonPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBoxButtonPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    boxButtonCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBoxButtonCode}
                            >
                                Code
                            </button>
                        </div>
                        {boxButtonPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <ul className="flex flex-wrap items-center bg-[#59bdf738] rounded-full p-1">
                                    <li
                                        className={`${
                                            boxButtonActive === 1 && "!bg-primary !text-[#fff]"
                                        } px-6 py-2  text-text transition duration-300 rounded-full border-transparent cursor-pointer`}
                                        onClick={() => setBoxButtonActive(1)}
                                    >
                                        Home
                                    </li>
                                    <li
                                        className={`${
                                            boxButtonActive === 2 && "!bg-primary !text-[#fff]"
                                        } px-6 py-2  text-text transition duration-300 rounded-full border-transparent cursor-pointer`}
                                        onClick={() => setBoxButtonActive(2)}
                                    >
                                        About
                                    </li>
                                    <li
                                        className={`${
                                            boxButtonActive === 3 && "!bg-primary !text-[#fff]"
                                        } px-6 py-2  text-text transition duration-300 rounded-full border-transparent cursor-pointer`}
                                        onClick={() => setBoxButtonActive(3)}
                                    >
                                        Support
                                    </li>
                                    <li
                                        className={`${
                                            boxButtonActive === 4 && "!bg-primary !text-[#fff]"
                                        } px-6 py-2  text-text hidden 425px:block transition duration-300 rounded-full border-transparent cursor-pointer`}
                                        onClick={() => setBoxButtonActive(4)}
                                    >
                                        Contact
                                    </li>
                                </ul>
                            </div>
                        )}

                        {boxButtonCode && (
                            <Showcode
                                code='
import React, { useState } from "react";

const DropDown = () => {
  const [activeTab, setactiveTab] = useState(1);

  return (
    <>
      <div className="p-8 mb-4 flex items-center gap-5 justify-center">
        <ul className="flex items-center bg-[#59bdf738] rounded-full p-1">
          <li
            className={`${
              activeTab === 1 && "!bg-[#3B9DF8] !text-[#fff]"
            } px-6 py-2  text-[#424242] transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setactiveTab(1)}
          >
            Home
          </li>
          <li
            className={`${
              activeTab === 2 && "!bg-[#3B9DF8] !text-[#fff]"
            } px-6 py-2  text-[#424242] transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setactiveTab(2)}
          >
            About
          </li>
          <li
            className={`${
              activeTab === 3 && "!bg-[#3B9DF8] !text-[#fff]"
            } px-6 py-2  text-[#424242] transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setactiveTab(3)}
          >
            Support
          </li>
          <li
            className={`${
              activeTab === 4 && "!bg-[#3B9DF8] !text-[#fff]"
            } px-6 py-2  text-[#424242] transition duration-300 rounded-full border-transparent cursor-pointer`}
            onClick={() => setactiveTab(4)}
          >
            Contact
          </li>
        </ul>
      </div>
    </>
  );
};

export default DropDown;
              '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader id="toggle_button" text={"Toggle tab"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is navigation tabs with active tab indication using rounded background color for clear
                        active state
                        visibility.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${toggleButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    toggleButtonPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleToggleButtonPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    toggleButtonCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleToggleButtonCode}
                            >
                                Code
                            </button>
                        </div>
                        {toggleButtonPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div class="flex flex-wrap flex-col items-center justify-center">
                                    <div class="z-10 w-full">
                                        <div class="mx-auto mt-6 flex items-center justify-center gap-4">

                                            <label for="transactions">

                                                <div
                                                    class="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-gray-200 py-2.5 pl-3 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-primary has-[:checked]:text-white text-gray-500">
                                                    <div class="flex items-center overflow-hidden">
                                                        <input type="radio" name="radio" id="transactions"
                                                               class="peer appearance-none"/>

                                                        <span
                                                            class="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0">
             <svg class="default absolute inset-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25"
                  height="25" viewBox="0 0 256 256"><path fill="currentColor"
                                                          d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4-74.57a8 8 0 0 1-7.9 6.57H77.22L65.59 72h148.82Z"/></svg>

              <svg class="active absolute inset-0 opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg"
                   width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor"
                                                                      d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>
            </span>
                                                        <span
                                                            class="opacity-0 text-white transition-all peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide">Transactions</span>
                                                    </div>
                                                </div>
                                            </label>
                                            <label for="updates">

                                                <div
                                                    class="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-gray-200 py-2 pl-3.5 pt-3.5 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-primary has-[:checked]:text-white text-gray-500">
                                                    <div class="flex items-center overflow-hidden">
                                                        <input type="radio" name="radio" id="updates"
                                                               class="peer appearance-none"/>

                                                        <span
                                                            class="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0">
             <svg className="default absolute inset-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25"
                  height="25" viewBox="0 0 16 16">
                <g fill="currentColor">
                  <path
                      d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333L6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                  <path
                      d="M5 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/>
                </g>
              </svg>

              <svg className="active absolute inset-0 opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg"
                   width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor"
                                                                    d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm5 4a1 1 0 1 0-2 0a1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>
            </span>
                                                        <span
                                                            class="opacity-0 text-white transition-all mb-1 peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide">Updates</span>
                                                    </div>
                                                </div>
                                            </label>
                                            <label for="promotions">

                                                <div
                                                    class="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-gray-200 py-2.5 pl-3 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-primary has-[:checked]:text-white text-gray-500">
                                                    <div class="flex items-center overflow-hidden">
                                                        <input type="radio" name="radio" id="promotions"
                                                               class="peer appearance-none"/>

                                                        <span
                                                            class="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0">
             <svg className="default absolute inset-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25"
                  height="25" viewBox="0 0 16 16"><path fill="currentColor"
                                                        d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49l-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013a75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975l1.609 3.037l.01.024h.548l-.002-.014l-.443-2.966a68 68 0 0 0-1.722-.082z"/></svg>

              <svg class="active absolute inset-0 opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg"
                   width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor"
                                                                    d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06"/></svg>
            </span>
                                                        <span
                                                            class="opacity-0 text-white transition-all peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide">Promotions</span>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {toggleButtonCode && (
                            <Showcode
                                code='
import React from "react";

const ToggleTab = () => {
  return (
      <div className="flex flex-col items-center justify-center">
          <div className="z-10 w-full">
              <div className="mx-auto mt-6 flex items-center justify-center gap-4">

                  {/* transactions */}
                  <label htmlFor="transactions">
                      <div
                          className="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-gray-200 py-2.5 pl-3 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-primary has-[:checked]:text-white text-gray-500">
                          <div className="flex items-center overflow-hidden">
                              <input type="radio" name="radio" id="transactions"
                                     className="peer appearance-none"/>

                              <span className="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0">
                                   <svg className="default absolute inset-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor"
                                    d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m4-74.57a8 8 0 0 1-7.9 6.57H77.22L65.59 72h148.82Z"/></svg>

                               <svg className="active absolute inset-0 opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="currentColor"
                                d="M230.14 58.87A8 8 0 0 0 224 56H62.68L56.6 22.57A8 8 0 0 0 48.73 16H24a8 8 0 0 0 0 16h18l25.56 140.29a24 24 0 0 0 5.33 11.27a28 28 0 1 0 44.4 8.44h45.42a27.75 27.75 0 0 0-2.71 12a28 28 0 1 0 28-28H91.17a8 8 0 0 1-7.87-6.57L80.13 152h116a24 24 0 0 0 23.61-19.71l12.16-66.86a8 8 0 0 0-1.76-6.56M104 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12"/></svg>
                              </span>
                              <span className="opacity-0 text-white transition-all peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide">Transactions</span>
                          </div>
                      </div>
                  </label>

                  {/* updates */}
                  <label htmlFor="updates">
                      <div className="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-gray-200 py-2 pl-3.5 pt-3.5 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-primary has-[:checked]:text-white text-gray-500">
                          <div className="flex items-center overflow-hidden">
                              <input type="radio" name="radio" id="updates" className="peer appearance-none"/>
                              <span className="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0">
                               <svg className="default absolute inset-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16">
                                <g fill="currentColor">
                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333L6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                                <path d="M5 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/>
                                </g>
                                </svg>

                                <svg className="active absolute inset-0 opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor"
                                 d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm5 4a1 1 0 1 0-2 0a1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></svg>
                                </span>
                              <span className="opacity-0 text-white transition-all mb-1 peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide">Updates</span>
                          </div>
                      </div>
                  </label>

                  {/* promotions */}
                  <label htmlFor="promotions">
                      <div className="flex w-14 items-center justify-center cursor-pointer overflow-hidden rounded-[1.6rem] border-2 border-transparent bg-gray-200 py-2.5 pl-3 shadow transition-all ease-in-out duration-300 has-[:checked]:w-40 has-[:checked]:justify-center has-[:checked]:pl-0 has-[:checked]:bg-primary has-[:checked]:text-white text-gray-500">
                          <div className="flex items-center overflow-hidden">
                              <input type="radio" name="radio" id="promotions"
                                     className="peer appearance-none"/>

                              <span className="relative h-7 w-8 peer-checked:[&_.active]:opacity-100 peer-checked:[&_.default]:opacity-0 shrink-0">
                               <svg className="default absolute inset-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor"
                               d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49l-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013a75 75 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0m-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233q.27.015.537.036c2.568.189 5.093.744 7.463 1.993zm-9 6.215v-4.13a95 95 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A61 61 0 0 1 4 10.065m-.657.975l1.609 3.037l.01.024h.548l-.002-.014l-.443-2.966a68 68 0 0 0-1.722-.082z"/></svg>

                                <svg className="active absolute inset-0 opacity-0 transition-opacity" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16"><path fill="currentColor"
                                 d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06"/></svg>
                                </span>
                              <span className="opacity-0 text-white transition-all peer-checked:opacity-100 ml-1 text-[0.9rem] font-normal tracking-wide">Promotions</span>
                          </div>
                      </div>
                  </label>
              </div>
          </div>
      </div>
  );
};
export default ToggleTab;
              '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/modal' backName='modal' forwardName='skeleton' forwardUrl='/components/skeleton'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#Border_navigation"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Border Navigation
                    </a>
                    <a
                        href="#animated_tab"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Animated Tab
                    </a>
                    <a
                        href="#bottom_border_navigation"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        Bottom Border Navigation
                    </a>
                    <a
                        href="#top_border_navigation"
                        className={`${
                            contentActiveTab === 4 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(4)}
                    >
                        Top Border Navigation
                    </a>

                    <a
                        href="#Squre_border_navigation"
                        className={`${
                            contentActiveTab === 5 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(5)}
                    >
                        Squre Border Navigation
                    </a>

                    <a
                        href="#box_navigation"
                        className={`${
                            contentActiveTab === 6 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(6)}
                    >
                        Box Navigation
                    </a>

                    <a
                        href="#toggle_button"
                        className={`${
                            contentActiveTab === 7 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(7)}
                    >
                        Toggle Navigation
                    </a>
                    <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
                </div>
            </aside>

            <Helmet>
                <title>Navigation - Tabs</title>
            </Helmet>
        </>
    );
};

export default Tabs;
