import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { IoChevronDown } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const SwitchInput = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // code
  const [selectPreview, setSelectPreview] = useState(true);
  const [selectCode, setSelectCode] = useState(false);

  const handleSelectPreview = () => {
    setSelectPreview(true);
    setSelectCode(false);
  };

  const handleSelectCode = () => {
    setSelectCode(true);
    setSelectPreview(false);
  };

  // select with icon
  const [iconSelectPreview, setIconSelectPreview] = useState(true);
  const [iconSelectCode, setIconSelectCode] = useState(false);

  const handleIconSelectPreview = () => {
    setIconSelectPreview(true);
    setIconSelectCode(false);
  };

  const handleIconSelectCode = () => {
    setIconSelectCode(true);
    setIconSelectPreview(false);
  };

  // actions
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [content, setContent] = useState("Select Option");
  const [content2, setContent2] = useState("Select Option");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const optionArray = ["Football", "Cricket", "Tennis", "Badminton"];
  const optionArray2 = [
    {
      icon: <IoMdFootball />,
      title: "Football",
    },
    {
      icon: <MdOutlineSportsCricket />,
      title: "Cricket",
    },
    {
      icon: <MdOutlineSportsTennis />,
      title: "Tennis",
    },
    {
      icon: <GiTennisRacket />,
      title: "Badminton",
    },
  ];

  document.addEventListener("click", function (event) {
    let target = event.target;

    if (!target.closest(".dropdown")) {
      setIsActive(false);
      setIsActive2(false);
      setIsActive3(false);
    }
  });

  const handleGetContent = (content) => {
    selectedOptions.push(content);
  };

  const handleDeleteOption = (index) => {
    selectedOptions.splice(index, 1);
  };

  const [toggle, setToggle] = useState(false);
  const [squareToggle, setSquareToggle] = useState(false);

  return (
    <>
      <aside className="flex items-start justify-between gap-6">
        <div>
          <ContentHeader text={"circle switch"} id={"circle_switch"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  selectPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleSelectPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  selectCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleSelectCode}
              >
                Code
              </button>
            </div>
            {selectPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div
                  className={`${
                    squareToggle ? " bg-primary" : "bg-[#f0f0f0]"
                  } w-[70px] h-[32px] p-1 border transition-colors duration-500 border-border  rounded-full relative`}
                >
                  <div
                    className={`${
                      squareToggle ? " translate-x-[36px]" : "translate-x-[0px]"
                    } w-[21px] h-[21px] transition-all duration-500 rounded-full cursor-pointer bg-[#fff]`}
                    style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                    onClick={() => setSquareToggle(!squareToggle)}
                  ></div>
                </div>
              </div>
            )}

            {selectCode && (
              <Showcode
                code="
                "
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"Square Switch"} id={"square_switch"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  iconSelectPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleIconSelectPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  iconSelectCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleIconSelectCode}
              >
                Code
              </button>
            </div>
            {iconSelectPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div
                  className={`${
                    toggle ? " bg-primary" : "bg-[#f0f0f0]"
                  } w-[70px] h-[32px] py-1.5 px-2 border transition-colors duration-500 border-border  rounded-full relative`}
                >
                  <div
                    className={`${
                      toggle
                        ? " translate-x-[30px] rotate-[90deg]"
                        : "translate-x-[0px] rotate-[0deg]"
                    } w-[19px] h-[19px] transition-all duration-500 rounded-sm cursor-pointer bg-[#fff]`}
                    style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                    onClick={() => setToggle(!toggle)}
                  ></div>
                </div>
              </div>
            )}

            {iconSelectCode && (
              <Showcode
                code="
                "
              />
            )}
          </div>

          <OverviewFooter />
        </div>

        <div className="flex flex-col gap-4 sticky top-20 right-0 w-[20%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
            href="#select"
            className={`${
              contentActiveTab === 1 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(1)}
          >
            Circle Switch
          </a>
          <a
            href="#select_with_icon"
            className={`${
              contentActiveTab === 2 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(2)}
          >
            Square Switch
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - Switch</title>
      </Helmet>
    </>
  );
};

export default SwitchInput;
