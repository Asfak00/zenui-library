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

const SelectInput = () => {
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

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pl-[5rem] pt-[4.5rem] ">
        <div>
          <ContentHeader text={"Select"} id={"select"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${selectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      selectPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleSelectPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      selectCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleSelectCode}
              >
                Code
              </button>
            </div>
            {selectPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <button
                      className="bg-[#fff] border border-[#d1d1d1] rounded-xl w-[200px] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
                      onClick={() => setIsActive(!isActive)}
                  >
                    {content}
                    <IoChevronDown
                        className={`${
                            isActive ? " rotate-[180deg]" : " rotate-0"
                        } transition-all duration-300 text-[1.2rem]`}
                    />
                    <div
                        className={`${
                            isActive
                                ? " z-[1] opacity-100 scale-[1]"
                                : " z-[-1] opacity-0 scale-[0.8]"
                        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
                        style={{
                          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                      {optionArray?.map((option, index) => (
                          <p
                              className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200"
                              key={index}
                              onClick={(e) => setContent(e.target.textContent)}
                          >
                            {option}
                          </p>
                      ))}
                    </div>
                  </button>
                </div>
            )}

            {selectCode && (
                <Showcode
                    code='
// icons
import { IoChevronDown } from "react-icons/io5";

const Select = () => {
  // close the dropdown is clicked outside
  document.addEventListener("click", function (event) {
    let target = event.target;

    if (!target.closest(".dropdown")) {
      setIsActive(false);
    }
  });

  // actions
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select Option");

  const optionArray = ["Football", "Cricket", "Tennis", "Badminton"];
  return (
    <button
      className="bg-[#fff] border border-[#d1d1d1] rounded-xl w-[200px] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
      onClick={() => setIsActive(!isActive)}
    >
      {content}
      <IoChevronDown
        className={`${
          isActive ? " rotate-[180deg]" : " rotate-0"
        } transition-all duration-300 text-[1.2rem]`}
      />
      <div
        className={`${
          isActive ? " opacity-100 scale-[1]" : " opacity-0 scale-[0.8]"
        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
        }}
      >
        {optionArray?.map((option, index) => (
          <p
            className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200"
            key={index}
            onClick={(e) => setContent(e.target.textContent)}
          >
            {option}
          </p>
        ))}
      </div>
    </button>
  );
};

export default Select;
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"Select with icon"} id={"select_with_icon"}/>
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${iconSelectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      iconSelectPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleIconSelectPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      iconSelectCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleIconSelectCode}
              >
                Code
              </button>
            </div>
            {iconSelectPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <button
                      className="bg-[#fff] border border-[#d1d1d1] rounded-xl w-[200px] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
                      onClick={() => setIsActive2(!isActive2)}
                  >
                    {content2}
                    <IoChevronDown
                        className={`${
                            isActive2 ? " rotate-[180deg]" : " rotate-0"
                        } transition-all duration-300 text-[1.2rem]`}
                    />
                    <div
                        className={`${
                            isActive2
                                ? "z-[1] opacity-100 scale-[1]"
                                : "z-[-1] opacity-0 scale-[0.8]"
                        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
                        style={{
                          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                      {optionArray2?.map((option, index) => (
                          <p
                              className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
                              key={index}
                              onClick={(e) => setContent2(e.target.textContent)}
                          >
                            {option.icon}
                            {option.title}
                          </p>
                      ))}
                    </div>
                  </button>
                </div>
            )}

            {iconSelectCode && (
                <Showcode
                    code='
// icons
import { IoChevronDown } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";

const Select = () => {
  // close the dropdown is clicked outside
  document.addEventListener("click", function (event) {
    let target = event.target;

    if (!target.closest(".dropdown")) {
      setIsActive(false);
    }
  });

  // actions
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select Option");

  const optionArray = [
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

  return (
    <button
      className="bg-[#fff] border border-[#d1d1d1] rounded-xl w-[200px] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
      onClick={() => setIsActive(!isActive)}
    >
      {content}
      <IoChevronDown
        className={`${
          isActive ? " rotate-[180deg]" : " rotate-0"
        } transition-all duration-300 text-[1.2rem]`}
      />
      <div
        className={`${
          isActive ? " opacity-100 scale-[1]" : " opacity-0 scale-[0.8]"
        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
        }}
      >
        {optionArray?.map((option, index) => (
          <p
            className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
            key={index}
            onClick={(e) => setContent(e.target.textContent)}
          >
            {option.icon}
            {option.title}
          </p>
        ))}
      </div>
    </button>
  );
};

export default Select;
                '
                />
            )}
          </div>

          <OverviewFooter/>
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
            Select
          </a>
          <a
              href="#select_with_icon"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Select With Icon
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - Select</title>
      </Helmet>
    </>
  );
};

export default SelectInput;
