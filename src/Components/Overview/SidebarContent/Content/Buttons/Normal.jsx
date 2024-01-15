import React, { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

const Normal = () => {
  // normal button
  const [isPreview, setIsPreview] = useState(true);
  const [isCode, setIsCode] = useState(false);

  const handleOnCode = () => {
    setIsCode(true);
    setIsPreview(false);
  };

  const handleOnPreview = () => {
    setIsPreview(true);
    setIsCode(false);
  };

  // background animated button
  const [bgAnimatedPreview, setBgAnimatedPreview] = useState(true);
  const [bgAnimatedCode, setBgAnimatedCode] = useState(false);

  const handleBgAnimatedCode = () => {
    setBgAnimatedCode(true);
    setBgAnimatedPreview(false);
  };

  const handleBgAnimatedPreview = () => {
    setBgAnimatedPreview(true);
    setBgAnimatedCode(false);
  };
  return (
    <>
      <aside>
        <h1 className="font-[600] text-[#000] capitalize text-[1.5rem]">
          normal button
        </h1>

        <p className="w-[80%] text-text text-[1rem]">
          Buttons like this are used a lot on our websites and are very easy to
          create but you can copy the codes from here to save your time.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                isPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleOnPreview}>
              Preview
            </button>
            <button
              className={`${
                isCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleOnCode}>
              Code
            </button>
          </div>
          {isPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <button className="px-6 py-2 border border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary transition duration-300 rounded ">
                Button 1
              </button>
              <button className="px-6 py-2 border border-primary hover:bg-primary text-primary hover:text-secondary  transition duration-300 rounded ">
                Button 2
              </button>
            </div>
          )}

          {isCode && (
            <Showcode
              code={`
// button 1
<button className="px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] 
text-[#ffffff] hover:bg-[#ffffff] hover:text-primary transition duration-300 rounded"> Button
</button>

// button 2
<button className="px-6 py-2 border border-[#3B9DF8] hover:bg-[#3B9DF8] text-[#3B9DF8] 
hover:text-[#ffffff]  transition duration-300 rounded "> Button
</button>
`}
            />
          )}
        </div>

        <h1 className="font-[600] mt-12 text-[#000] capitalize text-[1.5rem]">
          background animated
        </h1>

        <p className="w-[80%] text-text text-[1rem]">
          Here we are animating from bottom, right and left over the button's
          background color via position.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                bgAnimatedPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleBgAnimatedPreview}>
              Preview
            </button>
            <button
              className={`${
                bgAnimatedCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleBgAnimatedCode}>
              Code
            </button>
          </div>
          {bgAnimatedPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <button className="px-6 py-2 border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Left
              </button>

              <button className="px-6 py-2 border border-primary relative before:absolute overflow-hidden before:translate-x-[200px] hover:before:translate-x-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Right
              </button>

              <button className="px-6 py-2 border border-primary relative before:absolute overflow-hidden before:translate-y-[-200px] hover:before:translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Top
              </button>

              <button className="px-6 py-2 border border-primary relative before:absolute overflow-hidden before:translate-y-[200px] hover:before:translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Bottom
              </button>
            </div>
          )}

          {bgAnimatedCode && (
            <Showcode
              code={`
// Left
<button className="px-6 py-2 border border-[#3B9DF8] relative 
before:absolute overflow-hidden before:translate-x-[-200px hover:before:translate-x-0 before:z-[-1] before:transition 
before:duration-300 hover:text-[#ffffff] before:w-full 
before:h-full before:bg-[#3B9DF8] before:top-0 before:left-0"> Left
</button>

// Right
<button className="px-6 py-2 border border-primary relative 
before:absolute overflow-hidden before:translate-x-[200px] hover:before:translate-x-0 before:z-[-1] before:transition 
before:duration-300 hover:text-secondary  before:w-full 
before:h-full before:bg-primary before:top-0 before:left-0"> Right
</button>

// Top
<button className="px-6 py-2 border border-primary 
relative before:absolute overflow-hidden before:translate-y-[-200px] hover:before:translate-y-0 
before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full 
before:bg-primary before:top-0 before:left-0"> Top
</button>

// Bottom
<button className="px-6 py-2 border border-primary 
relative before:absolute overflow-hidden before:translate-y-[200px] hover:before:translate-y-0 
before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full 
before:h-full before:bg-primary before:top-0 before:left-0"> Bottom
</button>`}
            />
          )}
        </div>

        <OverviewFooter />
      </aside>
    </>
  );
};

export default Normal;
