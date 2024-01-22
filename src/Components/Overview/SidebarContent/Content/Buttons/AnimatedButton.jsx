import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ShowCode from "../../../../../Shared/ShowCode";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

const AnimatedButton = () => {
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
      <ContentHeader text={"click animation"} />

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
            <button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
              Click Me
            </button>

            <button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
              Click Me
            </button>
          </div>
        )}

        {rgbBorderCode && <ShowCode code="" />}
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
          <div className="p-8 mb-4 flex items-center gap-5 justify-center"></div>
        )}

        {animatedBorderCode && <ShowCode code="" />}
      </div>

      <OverviewFooter />
      <Helmet>
        <title>Buttons - Animated Button</title>
      </Helmet>
    </aside>
  );
};

export default AnimatedButton;
