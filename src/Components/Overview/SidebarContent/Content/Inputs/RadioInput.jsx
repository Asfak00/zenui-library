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
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div>
          <ContentHeader text={"circle radio"} id={"circle_radio"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a circle radio button component. Select options with a click on the elegant circular design.
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
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className='flex items-center gap-[10px]'>
                    <div
                        className={` w-[35px] h-[35px] border border-primary  rounded-full flex items-center justify-center cursor-pointer `}
                        onClick={() => setSquareToggle(!squareToggle)}
                    >
                      <div
                          className={`${
                              squareToggle
                                  ? "bg-primary scale-[1]"
                                  : "bg-transparent scale-[0.7]"
                          } w-[25px] h-[25px] transition-all duration-200 rounded-full`}
                      ></div>
                    </div>
                    <p className='text-[1.2rem] font-bold text-text cursor-pointer' onClick={() => setSquareToggle(!squareToggle)}>Toggle</p>
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
      <div className="flex items-center gap-[10px]">
          <div className={` w-[35px] h-[35px] border border-[#3B9DF8]  rounded-full flex items-center justify-center cursor-pointer `}
           onClick={() => setToggle(!toggle)}>
            <div className={`${
            toggle ? "bg-[#3B9DF8] scale-[1]" : "bg-transparent scale-[0.7]"} w-[21px] h-[21px] transition-all duration-200 rounded-full`}></div>
            </div>

            <p className="text-[1.2rem] font-bold text-text cursor-pointer" onClick={() => setToggle(!toggle)}>Toggle</p>
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

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a square radio button component. Choose options by clicking on the modern, square design.
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
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className='flex items-center gap-[10px]'>
                    <div
                        className={` w-[32px] h-[32px] border border-primary  rounded-md flex items-center justify-center cursor-pointer `}
                        onClick={() => setToggle(!toggle)}
                    >
                      <div
                          className={`${
                              toggle
                                  ? "bg-primary scale-[1]"
                                  : "bg-transparent scale-[0.7]"
                          } w-[25px] h-[25px] transition-all duration-200 rounded-md`}
                      ></div>
                    </div>

                    <p className='text-[1.2rem] font-bold text-text cursor-pointer'
                       onClick={() => setToggle(!toggle)}>Toggle</p>
                  </div>
                </div>
            )}

            {squareCode && (
                <Showcode
                    code='
import React, { useState } from "react";

const InputRadio = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="flex items-center gap-[10px]">
              <div
              className={` w-[32px] h-[32px] border border-primary  rounded-md flex items-center justify-center cursor-pointer `}
              onClick={() => setToggle(!toggle)}
              >
              <div
              className={`${
              toggle
              ? "bg-primary scale-[1]"
              : "bg-transparent scale-[0.7]"
            } w-[25px] h-[25px] transition-all duration-200 rounded-md`}
              ></div>
              </div>

              <p className="text-[1.2rem] font-bold text-text cursor-pointer"
              onClick={() => setToggle(!toggle)}>Toggle</p>
        </div>
      </>
      );
      };

export default InputRadio;
                '
                />
            )}
          </div>

          <OverviewFooter backUrl='/components/input-select' backName='select' forwardName='range' forwardUrl='/components/input-range'/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
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
          <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
        </div>
      </aside>
      <Helmet>
        <title>Form - Radio</title>
      </Helmet>
    </>
  );
};

export default RadioInput;
