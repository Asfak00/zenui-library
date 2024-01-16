import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ShowCode from "../../../../../Shared/ShowCode";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

const RgbButton = () => {
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
    <aside>
      <ContentHeader text={"RGB border"} />

      <p className="w-[80%] text-text text-[1rem]">
        Buttons like this are used a lot on our websites and are very easy to
        create but you can copy the codes from here to save your time.
      </p>

      <div className="w-[80%] border border-border rounded mt-8">
        <div className="">
          <button
            className={`${
              rgbBorderPreview && "bg-border"
            } px-6 py-2 border-r border-b roudned border-border`}
            onClick={handleRgbBorderPreview}>
            Preview
          </button>
          <button
            className={`${
              rgbBorderCode && "bg-border"
            } px-6 py-2 border-r border-b rounded border-border`}
            onClick={handleRgbBorderCode}>
            Code
          </button>
        </div>
        {rgbBorderPreview && (
          <div className="p-8 mb-4 flex items-center gap-5 justify-center">
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
        <ContentHeader text={"border hover animation"} />
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
            onClick={handleAnimatedBorderPreview}>
            Preview
          </button>
          <button
            className={`${
              animatedBorderCode && "bg-border"
            } px-6 py-2 border-r border-b rounded border-border`}
            onClick={handldeAnimatedBorderCode}>
            Code
          </button>
        </div>
        {animatedBorderPreview && (
          <div className="p-8 mb-4 flex items-center gap-5 justify-center">
            <button className="px-8 py-3 relative shadow-lg before:absolute before:top-0 before:left-0 before:w-0 before:h-0 before:border-l-[4px] before:border-t-[4px] before:border-transparent hover:before:w-full hover:before:h-full hover:before:border-primary hover:before:transition-all hover:before:duration-500 after:border-r-[4px] after:border-b-[4px] after:border-transparent hover:after:border-primary after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0 hover:after:w-full hover:after:h-full hover:after:transition-all hover:after:duration-500">
              Animate 1
            </button>

            <button className="py-2 px-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-primary before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-primary after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-secondary relative ">
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

      <OverviewFooter />
      <Helmet>
        <title>Buttons - RGB Button</title>
      </Helmet>
    </aside>
  );
};

export default RgbButton;
