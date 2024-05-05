import React, { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

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
      <aside className="flex items-start gap-6 justify-between">
        <div>
          <ContentHeader
            id="Border_navigation"
            text={"Border navigation tab"}
          />

          <p className="w-[80%] text-text text-[1rem]">
            We see navigation tabs with borders on all sides like this on almost
            all websites. They are very simple.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  fullBorderTabPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleFullBorderPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  fullBorderTabCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
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
                    } px-6 py-2 border text-primary transition duration-300 border-primary cursor-pointer`}
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
            <ContentHeader id="animated_tab" text={"animated tab"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            Many times it is seen that only the bottom of the bar does not come
            from all sides, that is the tab of the bottom bar.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  animatedTabPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleAnimatedTabPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  animatedTabCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
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
                      (boxButtonActive === 3 && "translate-x-[186px]") ||
                      (boxButtonActive === 4 &&
                        "!w-[100px] translate-x-[290px]")
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
                    } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
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

          <p className="w-[80%] text-text text-[1rem]">
            Many times it is seen that only the bottom of the bar does not come
            from all sides, that is the tab of the bottom bar.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  bottomBorderPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleBottomBorderPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  bottomBorderCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleBottomBorderCode}
              >
                Code
              </button>
            </div>
            {bottomBorderPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <ul className="flex items-center gap-5">
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
                    } px-6 py-2 border-b  text-text transition duration-300 border-transparent cursor-pointer`}
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

          <p className="w-[80%] text-text text-[1rem]">
            Many times it is seen that only the bottom of the bar does not come
            from all sides, that is the tab of the bottom bar.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  topBorderButtonPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleTopBorderButtonPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  topBorderButtonCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleTopBorderButtonCode}
              >
                Code
              </button>
            </div>
            {topBorderButtonPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <ul className="flex items-center">
                  <li
                    className={`${
                      topBorderButtonActive === 1 &&
                      "!border-primary !text-primary !bg-transparent"
                    } px-6 py-2 border-t bg-[#d1d1d1]   text-text transition duration-300 border-transparent cursor-pointer`}
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
                    } px-6 py-2 border-t bg-[#d1d1d1]  text-text transition duration-300 border-transparent cursor-pointer`}
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

          <p className="w-[80%] text-text text-[1rem]">
            Many times it is seen that only the bottom of the bar does not come
            from all sides, that is the tab of the bottom bar.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  roundedBorderButtonPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleRoundedBorderButtonPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  roudnedBorderButtonCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleRoundedBorderButtonCode}
              >
                Code
              </button>
            </div>
            {roundedBorderButtonPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <ul className="flex items-center">
                  <li
                    className={`${
                      roundedBorderButtonAcitve === 1 &&
                      " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-md"
                    } px-6 py-2 !border-[#d1d1d1] border-b text-text transition duration-300 border-transparent cursor-pointer`}
                    onClick={() => setRoundedBorderButtonActive(1)}
                  >
                    Home
                  </li>
                  <li
                    className={`${
                      roundedBorderButtonAcitve === 2 &&
                      " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-md"
                    } px-6 py-2 !border-[#d1d1d1] border-b  text-text transition duration-300 border-transparent cursor-pointer`}
                    onClick={() => setRoundedBorderButtonActive(2)}
                  >
                    About
                  </li>
                  <li
                    className={`${
                      roundedBorderButtonAcitve === 3 &&
                      " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-md"
                    } px-6 py-2 !border-[#d1d1d1] border-b  text-text transition duration-300 border-transparent cursor-pointer`}
                    onClick={() => setRoundedBorderButtonActive(3)}
                  >
                    Support
                  </li>
                  <li
                    className={`${
                      roundedBorderButtonAcitve === 4 &&
                      " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-md"
                    } px-6 py-2 !border-[#d1d1d1] border-b  text-text transition duration-300 border-transparent cursor-pointer`}
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
              " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-md"
            } px-6 py-2 !border-[#d1d1d1] border-b text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setActiveTab(1)}
          >
            Home
          </li>
          <li
            className={`${
              activeTab === 2 &&
              " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-md"
            } px-6 py-2 !border-[#d1d1d1] border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setActiveTab(2)}
          >
            About
          </li>
          <li
            className={`${
              activeTab === 3 &&
              " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-md"
            } px-6 py-2 !border-[#d1d1d1] border-b  text-[#424242] transition duration-300 border-transparent cursor-pointer`}
            onClick={() => setActiveTab(3)}
          >
            Support
          </li>
          <li
            className={`${
              activeTab === 4 &&
              " !border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-md"
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
            <ContentHeader id="box_navigation" text={"box navigation tab"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            Many times it is seen that only the bottom of the bar does not come
            from all sides, that is the tab of the bottom bar.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  boxButtonPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleBoxButtonPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  boxButtonCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleBoxButtonCode}
              >
                Code
              </button>
            </div>
            {boxButtonPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <ul className="flex items-center bg-[#59bdf738] rounded-full p-1">
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
                    } px-6 py-2  text-text transition duration-300 rounded-full border-transparent cursor-pointer`}
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

          <OverviewFooter />
        </div>

        <div className="flex flex-col gap-4 sticky top-20 right-0 w-[30%]">
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
        </div>
      </aside>

      <Helmet>
        <title>Navigation - Tabs</title>
      </Helmet>
    </>
  );
};

export default Tabs;
