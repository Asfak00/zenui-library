import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const RadioInput = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // circle radio
  const [circlePreview, setCirclePreview] = useState(true);
  const [circleCode, setCircleCode] = useState(false);

  const handleCirclePreview = () => {
    setCirclePreview(true);
    setCircleCode(false);
  };

  const handleCircleCode = () => {
    setCircleCode(true);
    setCirclePreview(false);
  };

  // square radio
  const [squarePreview, setSquarePreview] = useState(true);
  const [squareCode, setSquareCode] = useState(false);

  const handleSquarePreview = () => {
    setSquarePreview(true);
    setSquareCode(false);
  };

  const handleSquareCode = () => {
    setSquareCode(true);
    setSquarePreview(false);
  };

  // actions
  const [toggle, setToggle] = useState(false);
  const [squareToggle, setSquareToggle] = useState(false);

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pl-[5rem] pt-[4.5rem] ">
        <div>
          <ContentHeader text={"circle radio"} id={"circle_radio"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${circlePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      circlePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleCirclePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      circleCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleCircleCode}
              >
                Code
              </button>
            </div>
            {circlePreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div
                      className={` w-[35px] h-[35px] border border-primary  rounded-full flex items-center justify-center cursor-pointer `}
                      onClick={() => setSquareToggle(!squareToggle)}
                  >
                    <div
                        className={`${
                            squareToggle
                                ? "bg-primary scale-[1]"
                                : "bg-transparent scale-[0.8]"
                        } w-[21px] h-[21px] transition-all duration-500 rounded-full`}
                    ></div>
                  </div>
                </div>
            )}

            {circleCode && (
                <Showcode
                    code='
import { useState } from "react";

const InputRadio = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={` w-[35px] h-[35px] border border-[#3B9DF8]  rounded-full flex items-center justify-center cursor-pointer `}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`${
            toggle ? "bg-[#3B9DF8] scale-[1]" : "bg-transparent scale-[0.8]"
          } w-[21px] h-[21px] transition-all duration-500 rounded-full`}
        ></div>
      </div>
    </>
  );
};

export default InputRadio;
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"Square Radio"} id={"square_radio"}/>
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${squarePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      squarePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleSquarePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      squareCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleSquareCode}
              >
                Code
              </button>
            </div>
            {squarePreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div
                      className={` w-[35px] h-[35px] border border-primary  rounded-md flex items-center justify-center cursor-pointer `}
                      onClick={() => setToggle(!toggle)}
                  >
                    <div
                        className={`${
                            toggle
                                ? "bg-primary scale-[1]"
                                : "bg-transparent scale-[0.8]"
                        } w-[21px] h-[21px] transition-all duration-500 rounded-md`}
                    ></div>
                  </div>
                </div>
            )}

            {squareCode && (
                <Showcode
                    code='
import { useState } from "react";

const InputRadio = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={` w-[35px] h-[35px] border border-[#3B9DF8]  rounded-md flex items-center justify-center cursor-pointer `}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`${
            toggle ? "bg-[#3B9DF8] scale-[1]" : "bg-transparent scale-[0.8]"
          } w-[21px] h-[21px] transition-all duration-500 rounded-md`}
        ></div>
      </div>
    </>
  );
};

export default InputRadio;
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
              href="#circle_radio"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Circle Radio
          </a>
          <a
              href="#square_radio"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Square Radio
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - Radio</title>
      </Helmet>
    </>
  );
};

export default RadioInput;
