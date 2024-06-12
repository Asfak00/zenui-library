import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ShowCode from "../../../../../Shared/ShowCode";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

const AnimatedButton = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // rgb border
  const [rgbBorderPreview, setRgbBorderPreview] = useState(true);
  const [rgbBorderCode, setRgbBorderCode] = useState(false);

  const handleRgbBorderPreview = () => {
    setRgbBorderPreview(true);
    setRgbBorderCode(false);
  };

  const handleRgbBorderCode = () => {
    setRgbBorderCode(true);
    setRgbBorderPreview(false);
  };

  // animated border
  const [animatedBorderPreview, setAnimatedBorderPreview] = useState(true);
  const [animatedBorderCode, setAnimatedBorderCode] = useState(false);

  const handleAnimatedBorderPreview = () => {
    setAnimatedBorderPreview(true);
    setAnimatedBorderCode(false);
  };

  const handldeAnimatedBorderCode = () => {
    setAnimatedBorderCode(true);
    setAnimatedBorderPreview(false);
  };

  // animation border
  const [animationBorderPreview, setAnimationBorderPreview] = useState(true);
  const [animationBorderCode, setAnimationBorderCode] = useState(false);

  const handleAnimationBorderPreview = () => {
    setAnimationBorderPreview(true);
    setAnimationBorderCode(false);
  };

  const handleAnimationBorderCode = () => {
    setAnimationBorderCode(true);
    setAnimationBorderPreview(false);
  };
  return (
    <aside className="flex items-start justify-between gap-6 pl-[5rem] pt-[4.5rem]">
      <div>
        <ContentHeader text={"click animation"} id={"click_animation"} />

        <p className="w-[80%] text-text text-[1rem]">
          Buttons like this are used a lot on our websites and are very easy to
          create but you can copy the codes from here to save your time.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${rgbBorderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
            <button
                className={`${
                    rgbBorderPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleRgbBorderPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    rgbBorderCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleRgbBorderCode}
            >
              Code
            </button>
          </div>
          {rgbBorderPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <button
                    className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
                  Click Me
                </button>

                <button
                    className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
                  Click Me
                </button>
              </div>
          )}

          {rgbBorderCode && <ShowCode code='
<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
      Click Me
</button>

<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
    Click Me
</button>
          '/>}
        </div>

        <div className="mt-8">
          <ContentHeader
              text={"border hover animation"}
              id={"border_hover_animation"}
          />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Here we are animating from bottom, right and left over the button's
          background color via position.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
                className={`${
                    animatedBorderPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleAnimatedBorderPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    animatedBorderCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handldeAnimatedBorderCode}
            >
              Code
            </button>
          </div>
          {animatedBorderPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center"></div>
          )}

          {animatedBorderCode && <ShowCode code="" />}
        </div>

        <OverviewFooter />
      </div>

      <div className="flex flex-col gap-4 sticky top-20 right-0 w-[40%]">
        <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
          CONTENTS
        </h2>
        <a
          href="#click_animation"
          className={`${
            contentActiveTab === 1 && "!text-primary !border-primary"
          } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
          onClick={() => setContentActiveTab(1)}
        >
          Click Animation
        </a>
        <a
          href="#border_hover_animation"
          className={`${
            contentActiveTab === 2 && "!text-primary !border-primary"
          } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
          onClick={() => setContentActiveTab(2)}
        >
          Border Animation
        </a>
      </div>
      <Helmet>
        <title>Buttons - Animated Button</title>
      </Helmet>
    </aside>
  );
};

export default AnimatedButton;
