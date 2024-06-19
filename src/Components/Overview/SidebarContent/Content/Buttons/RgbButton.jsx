import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ShowCode from "../../../../../Shared/ShowCode";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

const RgbButton = () => {
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
    <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:pl-[5rem] 1024px:pt-[4.5rem]">
      <div>
        <ContentHeader text={"RGB border"} id={"rgb_border"} />

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          This is an RGB bordered button component. Click to engage with vibrant, customizable borders for stylish interaction.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
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
              <div className="p-8 mb-4 flex flex-wrap gap-5">
                <div className="p-1 bg-gradient-to-r from-primary to-[#8000f8]">
                  <div className="px-6 py-2 bg-secondary">Left To Right</div>
                </div>

                <div className="p-1 bg-gradient-to-l from-[#00e0e0] to-[#0010f3]">
                  <div className="px-6 py-2 bg-secondary">Right To Left</div>
                </div>

                <div className="p-1 bg-gradient-to-t from-[#07cc00] to-[#fa0000]">
                  <div className="px-6 py-2 bg-secondary">Top To Bottom</div>
                </div>

                <div className="p-1 bg-gradient-to-b from-[#e28000] to-[#f800f8]">
                  <div className="px-6 py-2 bg-secondary">Bottom To Top</div>
                </div>
              </div>
          )}

          {rgbBorderCode && (
              <ShowCode
                  code={`
// Left To Right
<div className="p-1 bg-gradient-to-r from-primary to-[#8000f8]">
  <div className="px-6 py-2 bg-secondary">Left To Right</div>
</div>

// Right To Left
<div className="p-1 bg-gradient-to-l from-[#00e0e0] to-[#0010f3]">
  <div className="px-6 py-2 bg-secondary">Right To Left</div>
</div>

// Top To Bottom
<div className="p-1 bg-gradient-to-t from-[#07cc00] to-[#fa0000]">
  <div className="px-6 py-2 bg-secondary">Top To Bottom</div>
</div>

// Bottom To Top
<div className="p-1 bg-gradient-to-b from-[#e28000] to-[#f800f8]">
  <div className="px-6 py-2 bg-secondary">Bottom To Top</div>
</div>
`}
              />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader
              text={"border hover animation"}
              id={"border_animated"}
          />
        </div>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          This is a hover animated button component. Experience dynamic interaction with engaging animations on hover.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedBorderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
            <button
                className={`${
                    animatedBorderPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleAnimatedBorderPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    animatedBorderCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handldeAnimatedBorderCode}
            >
              Code
            </button>
          </div>
          {animatedBorderPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 flex-wrap justify-center">
                <button
                    className="px-8 py-3 relative shadow-lg before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent hover:before:w-full hover:before:h-full hover:before:border-primary hover:before:transition-all hover:before:duration-500 after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500">
                  Animate 1
                </button>

                <button
                    className="py-2 px-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-primary before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-primary after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-secondary relative ">
                  Animate 2
                </button>
              </div>
          )}

          {animatedBorderCode && (
              <ShowCode
                  code={`
// Animate 1
<button className="px-8 py-3 relative shadow-lg before:absolute 
before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent 
hover:before:w-full hover:before:h-full hover:before:border-primary hover:before:transition-all hover:before:duration-500 
after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary 
after:absolute after:bottom-0 after:right-0 after:w-0 
after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500"> Animate 1
</button>

// Animate 2
<button className="py-2 px-6 shadow-lg before:block 
before:-left-1 before:-top-1 before:bg-primary before:absolute 
before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 
before:-z-40 after:block after:-right-1 after:-bottom-1 
after:bg-primary after:absolute after:h-0 after:w-0 
after:hover:w-[100%] after:hover:h-[100%] after:duration-500 
after:-z-40 bg-secondary relative "> Animate 2
</button>
`}
              />
          )}
        </div>

        <OverviewFooter/>
      </div>

      <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[40%]">
        <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
          CONTENTS
        </h2>
        <a
            href="#rgb_border"
            className={`${
                contentActiveTab === 1 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(1)}
        >
          RGB Border
        </a>
        <a
            href="#border_animated"
            className={`${
                contentActiveTab === 2 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(2)}
        >
          Border Animated
        </a>
      </div>
      <Helmet>
        <title>Buttons - RGB Button</title>
      </Helmet>
    </aside>
  );
};

export default RgbButton;
