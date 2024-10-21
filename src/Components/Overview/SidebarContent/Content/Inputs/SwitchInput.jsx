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

  // animated switch
  const [animatedSwitchPreview, setAnimatedSwitchPreview] = useState(true);
  const [animatedSwitchCode, setAnimatedSwitchCode] = useState(false);

  const handleAnimatedSwitchPreview = () => {
    setAnimatedSwitchPreview(true);
    setAnimatedSwitchCode(false);
  };

  const handleAnimatedSwitchCode = () => {
    setAnimatedSwitchCode(true);
    setAnimatedSwitchPreview(false);
  };

  // actions
  const [toggle, setToggle] = useState(false);
  const [squareToggle, setSquareToggle] = useState(false);
  const [animatedSwitch, setAnimatedSwitch] = useState(false);
  const [widthIncrease, setWidthIncrease] = useState(false);

  const handleAnimatedSwitch = () => {
    setWidthIncrease(true)
    setTimeout(()=> {
      setWidthIncrease(false)
      setAnimatedSwitch(!animatedSwitch);
    }, 300)
  }

  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div>
          <ContentHeader text={"circle switch"} id={"circle_switch"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a circle switch button component. Toggle options with a simple tap on the sleek, circular design.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${circlePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
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
                <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">
                  <div
                      className={`${
                          squareToggle ? " bg-primary" : "bg-[#f0f0f0]"
                      } w-[70px] h-[40px] p-[0.140rem] border transition-colors cursor-pointer duration-500 border-border  rounded-full relative`}
                      onClick={() => setSquareToggle(!squareToggle)}
                  >
                    <div
                        className={`${
                            squareToggle ? " translate-x-[29px]" : "translate-x-[0px]"
                        } w-[32px] h-[32px] pb-1 transition-all duration-500 rounded-full bg-[#fff]`}
                        style={{boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)"}}
                    ></div>
                  </div>

                  <div
                      className={`${
                          squareToggle ? " bg-primary" : "bg-[#f0f0f0]"
                      } w-[65px] h-[36px] p-[0.170rem] cursor-pointer border transition-colors duration-500 border-border  rounded-full relative`}
                      onClick={() => setSquareToggle(!squareToggle)}
                  >
                    <div
                        className={`${
                            squareToggle ? " translate-x-[27px]" : "translate-x-[0px]"
                        } w-[28px] h-[28px] pb-1 transition-all duration-500 rounded-full bg-[#fff]`}
                        style={{boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)"}}

                    ></div>
                  </div>

                  <div
                      className={`${
                          squareToggle ? " bg-primary" : "bg-[#f0f0f0]"
                      } w-[60px] h-[33px] p-[0.180rem] border transition-colors cursor-pointer duration-500 border-border  rounded-full relative`}
                      onClick={() => setSquareToggle(!squareToggle)}
                  >
                    <div
                        className={`${
                            squareToggle ? " translate-x-[25px]" : "translate-x-[0px]"
                        } w-[25px] h-[25px] pb-1 transition-all duration-500 rounded-full bg-[#fff]`}
                        style={{boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)"}}
                    ></div>
                  </div>

                  <div
                      className={`${
                          squareToggle ? " bg-primary" : "bg-[#f0f0f0]"
                      } w-[57px] h-[30px] px-[0.150rem] cursor-pointer py-[0.160rem] border transition-colors duration-500 border-border  rounded-full relative`}
                      onClick={() => setSquareToggle(!squareToggle)}
                  >
                    <div
                        className={`${
                            squareToggle ? " translate-x-[27px]" : "translate-x-[0px]"
                        } w-[23px] h-[23px] pb-1 transition-all duration-500 rounded-full bg-[#fff]`}
                        style={{boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)"}}
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
      {/* large */}
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[70px] h-[40px] p-[0.140rem] border cursor-pointer transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
        onClick={() => setToggle(!toggle)}
      >
        <div
          className={`${
            toggle ? " translate-x-[29px]" : "translate-x-[0px]"
          } w-[32px] h-[32px] pb-1 transition-all duration-500 rounded-full bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
        ></div>
      </div>

      {/* medium */}
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[65px] h-[36px] p-[0.170rem] border transition-colors cursor-pointer duration-500 border-[#e5eaf2]  rounded-full relative`}
          onClick={() => setToggle(!toggle)}
      >
        <div
          className={`${
            toggle ? " translate-x-[27px]" : "translate-x-[0px]"
          } w-[28px] h-[28px] pb-1 transition-all duration-500 rounded-full bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
        ></div>
      </div>

      {/* small */}
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[60px] h-[33px] p-[0.180rem] border transition-colors cursor-pointer duration-500 border-[#e5eaf2]  rounded-full relative`}
          onClick={() => setToggle(!toggle)}
      >
        <div
          className={`${
            toggle ? " translate-x-[25px]" : "translate-x-[0px]"
          } w-[25px] h-[25px] pb-1 transition-all duration-500 rounded-full bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
        ></div>
      </div>

      {/* smallest */}
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[57px] h-[30px] px-[0.150rem] py-[0.160rem] cursor-pointer border transition-colors duration-500 border-[#e5eaf2]  rounded-full relative`}
          onClick={() => setToggle(!toggle)}
      >
        <div
          className={`${
            toggle ? " translate-x-[27px]" : "translate-x-[0px]"
          } w-[23px] h-[23px] pb-1 transition-all duration-500 rounded-full bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
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
            <ContentHeader text={"Square Switch"} id={"square_switch"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a square switch button component. Toggle options with a tap on the modern, square design.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${squarePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
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
                <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">
                  <div
                      className={`${
                          toggle ? " bg-primary" : "bg-[#f0f0f0]"
                      } w-[70px] h-[40px] py-[0.210rem] px-[0.209rem] cursor-pointer border transition-colors duration-500 border-border  rounded-lg relative`}
                      onClick={() => setToggle(!toggle)}
                  >
                    <div
                        className={`${
                            toggle
                                ? " translate-x-[29px] rotate-[90deg]"
                                : "translate-x-[0px] rotate-[0deg]"
                        } w-[31px] h-[31px] transition-all duration-500 rounded-md bg-[#fff]`}
                        style={{boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)"}}
                    ></div>
                  </div>

                  <div
                      className={`${
                          toggle ? " bg-primary" : "bg-[#f0f0f0]"
                      } w-[65px] h-[38px] py-[0.210rem] px-[0.230rem] cursor-pointer border transition-colors duration-500 border-border  rounded-lg relative`}
                      onClick={() => setToggle(!toggle)}
                  >
                    <div
                        className={`${
                            toggle
                                ? " translate-x-[26px] rotate-[90deg]"
                                : "translate-x-[0px] rotate-[0deg]"
                        } w-[29px] h-[29px] transition-all duration-500 rounded-md bg-[#fff]`}
                        style={{boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)"}}
                    ></div>
                  </div>

                  <div
                      className={`${
                          toggle ? " bg-primary" : "bg-[#f0f0f0]"
                      } w-[65px] h-[34px] py-[0.138rem] px-[0.200rem] cursor-pointer border transition-colors duration-500 border-border  rounded-lg relative`}
                      onClick={() => setToggle(!toggle)}
                  >
                    <div
                        className={`${
                            toggle
                                ? " translate-x-[30px] rotate-[90deg]"
                                : "translate-x-[0px] rotate-[0deg]"
                        } w-[26px] h-[27px] transition-all duration-500 rounded-md bg-[#fff]`}
                        style={{boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)"}}
                    ></div>
                  </div>

                  <div
                      className={`${
                          toggle ? " bg-primary" : "bg-[#f0f0f0]"
                      } w-[55px] h-[30px] py-[0.100rem] px-[0.200rem] cursor-pointer border transition-colors duration-500 border-border  rounded-lg relative`}
                      onClick={() => setToggle(!toggle)}
                  >
                    <div
                        className={`${
                            toggle
                                ? " translate-x-[24px] rotate-[90deg]"
                                : "translate-x-[0px] rotate-[0deg]"
                        } w-[23px] h-[25px] transition-all duration-500 rounded-md bg-[#fff]`}
                        style={{boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)"}}
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
      {/* large */}
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[70px] h-[40px] py-[0.210rem] px-[0.209rem] border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`}
      >
        <div
          className={`${
            toggle
              ? " translate-x-[29px] rotate-[90deg]"
              : "translate-x-[0px] rotate-[0deg]"
          } w-[31px] h-[31px] transition-all duration-500 rounded-md cursor-pointer bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
          onClick={() => setToggle(!toggle)}
        ></div>
      </div>

      {/* medium */}
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[65px] h-[38px] py-[0.210rem] px-[0.230rem] border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`}
      >
        <div
          className={`${
            toggle
              ? " translate-x-[26px] rotate-[90deg]"
              : "translate-x-[0px] rotate-[0deg]"
          } w-[29px] h-[29px] transition-all duration-500 rounded-md cursor-pointer bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
          onClick={() => setToggle(!toggle)}
        ></div>
      </div>

      {/* small */}
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[65px] h-[34px] py-[0.138rem] px-[0.200rem] border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`}
      >
        <div
          className={`${
            toggle
              ? " translate-x-[28px] rotate-[90deg]"
              : "translate-x-[0px] rotate-[0deg]"
          } w-[26px] h-[27px] transition-all duration-500 rounded-md cursor-pointer bg-[#fff]`}
          style={{ boxShadow: "1px 2px 5px 2px rgb(0,0,0,0.1)" }}
          onClick={() => setToggle(!toggle)}
        ></div>
      </div>

      {/* smallest */}
      <div
        className={`${
          toggle ? " bg-[#3B9DF8]" : "bg-[#f0f0f0]"
        } w-[55px] h-[30px] py-[0.100rem] px-[0.200rem] border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`}
      >
        <div
          className={`${
            toggle
              ? " translate-x-[24px] rotate-[90deg]"
              : "translate-x-[0px] rotate-[0deg]"
          } w-[23px] h-[25px] transition-all duration-500 rounded-md cursor-pointer bg-[#fff]`}
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


          <div className='mt-8'>
            <ContentHeader text={"animated switch"} id={"animated_switch"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Animated switch that provides a smooth transition between on and off states for a visually dynamic toggle experience.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedSwitchPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      animatedSwitchPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleAnimatedSwitchPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      animatedSwitchCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleAnimatedSwitchCode}
              >
                Code
              </button>
            </div>
            {animatedSwitchPreview && (
                <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">

                  <div className={`${animatedSwitch ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[70px] cursor-pointer transition-all h-[40px] duration-200`} onClick={handleAnimatedSwitch}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`${animatedSwitch ? 'translate-x-[15px]' : 'translate-x-[-15px]'} ${widthIncrease ? '!w-[37px]' : '!w-[30px]'} w-[30px] h-[30px] rounded-full bg-white transition-all duration-200`}>
                  </div>
                  </div>
                </div>
                  <div className={`${animatedSwitch ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[65px] cursor-pointer transition-all h-[37px] duration-200`} onClick={handleAnimatedSwitch}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`${animatedSwitch ? 'translate-x-[13px]' : 'translate-x-[-13px]'} ${widthIncrease ? '!w-[35px]' : '!w-[28px]'} w-[28px] h-[28px] rounded-full bg-white transition-all duration-200`}>
                  </div>
                  </div>
                </div>
                  <div className={`${animatedSwitch ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[60px] cursor-pointer transition-all h-[33px] duration-200`} onClick={handleAnimatedSwitch}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`${animatedSwitch ? 'translate-x-[13px]' : 'translate-x-[-13px]'} ${widthIncrease ? '!w-[29px]' : '!w-[25px]'} w-[25px] h-[25px] rounded-full bg-white transition-all duration-200`}>
                  </div>
                  </div>
                </div>
                  <div className={`${animatedSwitch ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[55px] cursor-pointer transition-all h-[30px] duration-200`} onClick={handleAnimatedSwitch}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`${animatedSwitch ? 'translate-x-[13px]' : 'translate-x-[-13px]'} ${widthIncrease ? '!w-[25px]' : '!w-[22px]'} w-[22px] h-[22px] rounded-full bg-white transition-all duration-200`}>
                  </div>
                  </div>
                </div>
              </div>
              )}

            {animatedSwitchCode && (
                <Showcode
                    code="
import React, {useState} from 'react';

const SwitchInput = () => {

    const [isToggle, setIsToggle] = useState(false);
    const [widthIncrease, setWidthIncrease] = useState(false);

    const handleSwitchChange = () => {
        setWidthIncrease(true)
        setTimeout(()=> {
            setWidthIncrease(false)
            setIsToggle(!isToggle);
        }, 300)
    }

    return (
        <>
            {/* large */}
            <div
                className={`${isToggle ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[70px] cursor-pointer transition-all h-[40px] duration-200`}
                onClick={handleSwitchChange}>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div
                        className={`${isToggle ? 'translate-x-[15px]' : 'translate-x-[-15px]'} ${widthIncrease ? '!w-[37px]' : '!w-[30px]'} w-[30px] h-[30px] rounded-full bg-white transition-all duration-200`}>
                    </div>
                </div>
            </div>

            {/* medium */}
            <div
                className={`${isToggle ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[65px] cursor-pointer transition-all h-[37px] duration-200`}
                onClick={handleSwitchChange}>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div
                        className={`${isToggle ? 'translate-x-[13px]' : 'translate-x-[-13px]'} ${widthIncrease ? '!w-[35px]' : '!w-[28px]'} w-[28px] h-[28px] rounded-full bg-white transition-all duration-200`}>
                    </div>
                </div>
            </div>

            {/* small */}
            <div
                className={`${isToggle ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[60px] cursor-pointer transition-all h-[33px] duration-200`}
                onClick={handleSwitchChange}>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div
                        className={`${isToggle ? 'translate-x-[13px]' : 'translate-x-[-13px]'} ${widthIncrease ? '!w-[29px]' : '!w-[25px]'} w-[25px] h-[25px] rounded-full bg-white transition-all duration-200`}>
                    </div>
                </div>
            </div>

            {/* smallest */}
            <div
                className={`${isToggle ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[55px] cursor-pointer transition-all h-[30px] duration-200`}
                onClick={handleSwitchChange}>
                <div className='absolute inset-0 flex items-center justify-center'>
                    <div
                        className={`${isToggle ? 'translate-x-[13px]' : 'translate-x-[-13px]'} ${widthIncrease ? '!w-[25px]' : '!w-[22px]'} w-[22px] h-[22px] rounded-full bg-white transition-all duration-200`}>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SwitchInput;
                    "
                />
            )}
          </div>

          <OverviewFooter backUrl='/components/input-checkbox' backName='checkbox' forwardName='strong password' forwardUrl='/components/strong-password'/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#circle_switch"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Circle Switch
          </a>
          <a
              href="#square_switch"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Square Switch
          </a>
          <a
              href="#animated_switch"
              className={`${
                  contentActiveTab === 3 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(3)}
          >
            Animated Switch
          </a>
          <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - Switch</title>
      </Helmet>
    </>
  );
};

export default SwitchInput;
