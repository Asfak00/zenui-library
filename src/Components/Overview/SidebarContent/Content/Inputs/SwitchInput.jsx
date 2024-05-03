import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const SwitchInput = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // circle switch
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

  // square switch
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
                  circlePreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleCirclePreview}
              >
                Preview
              </button>
              <button
                className={`${
                  circleCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleCircleCode}
              >
                Code
              </button>
            </div>
            {circlePreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div
                  className={`${
                    squareToggle ? " bg-primary" : "bg-[#f0f0f0]"
                  } w-[60px] h-[32px] p-[0.2rem] border transition-colors duration-500 border-border  rounded-full relative`}
                >
                  <div
                    className={`${
                      squareToggle ? " translate-x-[27px]" : "translate-x-[0px]"
                    } w-[24px] h-[24px] pb-1 transition-all duration-500 rounded-full cursor-pointer bg-[#fff]`}
                    style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                    onClick={() => setSquareToggle(!squareToggle)}
                  ></div>
                </div>
              </div>
            )}

            {circleCode && (
              <Showcode
                code='
import { useState } from "react";

const InputSwitch = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[60px] h-[32px] p-[0.2rem] border transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
      >
        <div
          className={`${
            toggle ? " translate-x-[27px]" : "translate-x-[0px]"
          } w-[24px] h-[24px] transition-all duration-500 rounded-full cursor-pointer bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
          onClick={() => setToggle(!toggle)}
        ></div>
      </div>
    </>
  );
};

export default InputSwitch;
                '
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
                  squarePreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleSquarePreview}
              >
                Preview
              </button>
              <button
                className={`${
                  squareCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleSquareCode}
              >
                Code
              </button>
            </div>
            {squarePreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div
                  className={`${
                    toggle ? " bg-primary" : "bg-[#f0f0f0]"
                  } w-[60px] h-[32px] py-[0.230rem] px-2 border transition-colors duration-500 border-border  rounded-full relative`}
                >
                  <div
                    className={`${
                      toggle
                        ? " translate-x-[18px] rotate-[90deg]"
                        : "translate-x-[0px] rotate-[0deg]"
                    } w-[21px] h-[21px] transition-all duration-500 rounded-sm cursor-pointer bg-[#fff]`}
                    style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
                    onClick={() => setToggle(!toggle)}
                  ></div>
                </div>
              </div>
            )}

            {squareCode && (
              <Showcode
                code='
import { useState } from "react";

const InputSwitch = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[60px] h-[32px] py-[0.230rem] px-2 border transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
      >
        <div
          className={`${
            toggle
              ? " translate-x-[18px] rotate-[90deg]"
              : "translate-x-[0px] rotate-[0deg]"
          } w-[21px] h-[21px] transition-all duration-500 rounded-sm cursor-pointer bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
          onClick={() => setToggle(!toggle)}
        ></div>
      </div>
    </>
  );
};

export default InputSwitch;
                '
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
