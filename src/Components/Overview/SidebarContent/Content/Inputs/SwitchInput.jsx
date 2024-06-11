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
      <aside className="flex items-start justify-between gap-6 pl-[5rem] pt-[4.5rem] ">
        <div>
          <ContentHeader text={"circle switch"} id={"circle_switch"} />

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
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
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
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
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
                      } w-[65px] h-[34px] py-[0.120rem] px-[0.220rem] cursor-pointer border transition-colors duration-500 border-border  rounded-lg relative`}
                      onClick={() => setToggle(!toggle)}
                  >
                    <div
                        className={`${
                            toggle
                                ? " translate-x-[28px] rotate-[90deg]"
                                : "translate-x-[0px] rotate-[0deg]"
                        } w-[27px] h-[27px] transition-all duration-500 rounded-md bg-[#fff]`}
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
                        } w-[23px] h-[23px] transition-all duration-500 rounded-md bg-[#fff]`}
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
        } w-[65px] h-[34px] py-[0.120rem] px-[0.220rem] border transition-colors duration-500 border-[#e5eaf2]  rounded-lg relative`}
      >
        <div
          className={`${
            toggle
              ? " translate-x-[28px] rotate-[90deg]"
              : "translate-x-[0px] rotate-[0deg]"
          } w-[27px] h-[27px] transition-all duration-500 rounded-md cursor-pointer bg-[#fff]`}
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
          } w-[23px] h-[23px] transition-all duration-500 rounded-md cursor-pointer bg-[#fff]`}
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
