import React, { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

const Normal = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

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
      <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
        <div>
          <ContentHeader text={"normal button"} id={"normal_button"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Buttons like this are used a lot on our websites and are very easy
            to create but you can copy the codes from here to save your time.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${isPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      isPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleOnPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      isCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleOnCode}
              >
                Code
              </button>
            </div>
            {isPreview && (
                <div className="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center">
                  <button
                      className="px-6 py-2 border border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary transition duration-300 rounded ">
                    Button 1
                  </button>
                  <button
                      className="px-6 py-2 border border-primary hover:bg-primary text-primary hover:text-secondary  transition duration-300 rounded ">
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

          <div className="mt-8">
            <ContentHeader
                text={"background animated"}
                id={"background_animated"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Here we are animating from bottom, right and left over the button's
            background color via position.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${bgAnimatedPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      bgAnimatedPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleBgAnimatedPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      bgAnimatedCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleBgAnimatedCode}
              >
                Code
              </button>
            </div>
            {bgAnimatedPreview && (
                <div className="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center">
                  <button
                      className="px-6 py-2 border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                    Left
                  </button>

                  <button
                      className="px-6 py-2 border border-primary relative before:absolute overflow-hidden before:translate-x-[200px] hover:before:translate-x-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                    Right
                  </button>

                  <button
                      className="px-6 py-2 border border-primary relative before:absolute overflow-hidden before:translate-y-[-200px] hover:before:translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                    Top
                  </button>

                  <button
                      className="px-6 py-2 border border-primary relative before:absolute overflow-hidden before:translate-y-[200px] hover:before:translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
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

          <OverviewFooter/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[40%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#normal_button"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Normal Button
          </a>
          <a
              href="#background_animated"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Background Animated
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Buttons - Normal Button</title>
      </Helmet>
    </>
  );
};

export default Normal;
