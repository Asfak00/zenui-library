import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ShowCode from "../../../../../Shared/ShowCode";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import Showcode from "../../../../../Shared/ShowCode.jsx";

const AnimatedButton = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // click animated button
  const [clickAnimatedButtonPreview, setClickAnimatedButtonPreview] = useState(true);
  const [clickAnimatedButtonCode, setClickAnimatedButtonCode] = useState(false);

  const handleClickAnimatedButtonPreview = () => {
    setClickAnimatedButtonPreview(true);
    setClickAnimatedButtonCode(false);
  };

  const handleClickAnimatedButtonCode = () => {
    setClickAnimatedButtonCode(true);
    setClickAnimatedButtonPreview(false);
  };

  // hover animated button
  const [hoverAnimatedButtonPreview, setHoverAnimatedButtonPreview] = useState(true);
  const [hoverAnimatedButtonCode, setHoverAnimatedButtonCode] = useState(false);

  const handleHoverAnimatedButtonPreview = () => {
    setHoverAnimatedButtonPreview(true);
    setHoverAnimatedButtonCode(false);
  };

  const handleHoverAnimatedButtonCode = () => {
    setHoverAnimatedButtonCode(true);
    setHoverAnimatedButtonPreview(false);
  };

  // hover bg animated button
  const [hoverBgAnimatedButtonPreview, setHoverBgAnimatedButtonPreview] = useState(true);
  const [hoverBgAnimatedButtonCode, setHoverBgAnimatedButtonCode] = useState(false);

  const handleHoverBgAnimatedButtonPreview = () => {
    setHoverBgAnimatedButtonPreview(true);
    setHoverBgAnimatedButtonCode(false);
  };

  const handleHoverBgAnimatedButtonCode = () => {
    setHoverBgAnimatedButtonCode(true);
    setHoverBgAnimatedButtonPreview(false);
  };

  // slide up animated button
  const [slideUpAnimationButtonPreview, setSlideUpAnimationButtonPreview] = useState(true);
  const [slideUpAnimationButtonCode, setSlideUpAnimationButtonCode] = useState(false);

  const handleSlideUpAnimationButtonPreview = () => {
    setSlideUpAnimationButtonPreview(true);
    setSlideUpAnimationButtonCode(false);
  };

  const handleSlideUpAnimationButtonCode = () => {
    setSlideUpAnimationButtonCode(true);
    setSlideUpAnimationButtonPreview(false);
  };

  // slide animated button
  const [slideAnimationButtonPreview, setSlideAnimationButtonPreview] = useState(true);
  const [slideAnimationButtonCode, setSlideAnimationButtonCode] = useState(false);

  const handleSlideAnimationButtonPreview = () => {
    setSlideAnimationButtonPreview(true);
    setSlideAnimationButtonCode(false);
  };

  const handleSlideAnimationButtonCode = () => {
    setSlideAnimationButtonCode(true);
    setSlideAnimationButtonPreview(false);
  };

  // bounce up animated button
  const [bounceUpAnimationButtonPreview, setBounceUpAnimationButtonPreview] = useState(true);
  const [bounceUpAnimationButtonCode, setBounceUpAnimationButtonCode] = useState(false);

  const handleBounceUpAnimationButtonPreview = () => {
    setBounceUpAnimationButtonPreview(true);
    setBounceUpAnimationButtonCode(false);
  };

  const handleBounceUpAnimationButtonCode = () => {
    setBounceUpAnimationButtonCode(true);
    setBounceUpAnimationButtonPreview(false);
  };

  // bottom border animated button
  const [bottomBorderAnimationButtonPreview, setBottomBorderAnimationButtonPreview] = useState(true);
  const [bottomBorderAnimationButtonCode, setBottomBorderAnimationButtonCode] = useState(false);

  const handleBottomBorderAnimationButtonPreview = () => {
    setBottomBorderAnimationButtonPreview(true);
    setBottomBorderAnimationButtonCode(false);
  };

  const handleBottomBorderAnimationButtonCode = () => {
    setBottomBorderAnimationButtonCode(true);
    setBottomBorderAnimationButtonPreview(false);
  };

  // bg fill animated button
  const [bgFillAnimationPreview, setBgFillAnimationPreview] = useState(true);
  const [bgFillAnimationCode, setBgFillAnimationCode] = useState(false);

  const handleBgFillAnimationPreview = () => {
    setBgFillAnimationPreview(true);
    setBgFillAnimationCode(false);
  };

  const handleBgFillAnimationCode = () => {
    setBgFillAnimationCode(true);
    setBgFillAnimationPreview(false);
  };

  // 2 part marge animated button
  const [margeAnimationPreview, setMargeAnimationPreview] = useState(true);
  const [margeAnimationCode, setMargeAnimationCode] = useState(false);

  const handleMargeAnimationPreview = () => {
    setMargeAnimationPreview(true);
    setMargeAnimationCode(false);
  };

  const handleMargeAnimationCode = () => {
    setMargeAnimationCode(true);
    setMargeAnimationPreview(false);
  };

  return (
    <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
      <div>
        <ContentHeader text={"click animation"} id={"click_animation"}/>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          This is an animated button on click component. Enjoy dynamic responses with captivating animations upon
          clicking.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${clickAnimatedButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
            <button
                className={`${
                    clickAnimatedButtonPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleClickAnimatedButtonPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    clickAnimatedButtonCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleClickAnimatedButtonCode}
            >
              Code
            </button>
          </div>
          {clickAnimatedButtonPreview && (
              <div className="p-8 mb-4 flex flex-wrap items-center gap-5 justify-center">
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

          {clickAnimatedButtonCode && <ShowCode code='
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
              id={"border_animated"}
          />
        </div>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          This is a hover animated button component. Experience dynamic interaction with engaging animations on hover.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${hoverAnimatedButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
            <button
                className={`${
                    hoverAnimatedButtonPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleHoverAnimatedButtonPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    hoverAnimatedButtonCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleHoverAnimatedButtonCode}
            >
              Code
            </button>
          </div>
          {hoverAnimatedButtonPreview && (
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

          {hoverAnimatedButtonCode && (
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

        <div className="mt-8">
          <ContentHeader
              text={"Bg hover animation"}
              id={"bg_hover_animation"}
          />
        </div>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          Button with background hover animation, creating a dynamic effect when users hover over it.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${hoverBgAnimatedButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
            <button
                className={`${
                    hoverBgAnimatedButtonPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleHoverBgAnimatedButtonPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    hoverBgAnimatedButtonCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleHoverBgAnimatedButtonCode}
            >
              Code
            </button>
          </div>
          {hoverBgAnimatedButtonPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center flex-wrap">
                <button
                    className="px-6 rounded-md py-2 border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 before:transition hover:before:translate-y-0 before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                  Left Bottom
                </button>

                <button
                    className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-x-[200px] hover:before:translate-x-0 before:-translate-y-12 hover:before:-translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                  Right Top
                </button>

                <button
                    className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                  Left
                </button>

                <button
                    className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-x-[200px] hover:before:translate-x-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                  Right
                </button>

                <button
                    className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-y-[-200px] hover:before:translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                  Top
                </button>

                <button
                    className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-y-[200px] hover:before:translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                  Bottom
                </button>
              </div>
          )}

          {hoverBgAnimatedButtonCode &&
              <ShowCode code='
            {/* left bottom */}
            <button
                className="px-6 rounded-md py-2 border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:translate-y-12 before:transition hover:before:translate-y-0 before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Left Bottom
            </button>

            {/* right top */}
            <button
                className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-x-[200px] hover:before:translate-x-0 before:-translate-y-12 hover:before:-translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Right Top
            </button>

            {/* left */}
            <button
                className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-x-[-200px] hover:before:translate-x-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Left
            </button>

            {/* right */}
            <button
                className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-x-[200px] hover:before:translate-x-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Right
            </button>

            {/* top */}
            <button
                className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-y-[-200px] hover:before:translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Top
            </button>

            {/* bottom */}
            <button
                className="px-6 py-2 rounded-md border border-primary relative before:absolute overflow-hidden before:translate-y-[200px] hover:before:translate-y-0 before:z-[-1] before:transition before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
                Bottom
            </button>
              '
              />
          }
        </div>

        <div className="mt-8">
          <ContentHeader
              text={"bg slide up animation"}
              id={"bg_slide_up_animation"}
          />
        </div>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          Button with a background slide-up animation, where the background color smoothly slides up when hovered over.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${slideUpAnimationButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
            <button
                className={`${
                    slideUpAnimationButtonPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleSlideUpAnimationButtonPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    slideUpAnimationButtonCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleSlideUpAnimationButtonCode}
            >
              Code
            </button>
          </div>
          {slideUpAnimationButtonPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <button
                    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span
                      className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="#3B9DF8" viewBox="0 0 24 24"
     xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
                  <span
                      className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="#fff" viewBox="0 0 24 24"
     xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
                  <span
                      className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">ZenUI Library</span>
                </button>
              </div>
          )}

          {slideUpAnimationButtonCode &&
              <ShowCode code='
<button
    className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
      <span
          className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full"></span>
    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
        <svg className="w-5 h-5 text-green-400" fill="none" stroke="#3B9DF8" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
    </span>
        <span
        className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="#fff" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
        </span>
    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">ZenUI Library</span>
</button>
              '
              />}
        </div>

        <div className="mt-8">
          <ContentHeader
              text={"Bg slide animation"}
              id={"bg_slide_animation"}
          />
        </div>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          Button with a background slide animation, where the background color slides in from a specified direction on hover.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${slideAnimationButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
            <button
                className={`${
                    slideAnimationButtonPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleSlideAnimationButtonPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    slideAnimationButtonCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleSlideAnimationButtonCode}
            >
              Code
            </button>
          </div>
          {slideAnimationButtonPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <button
                    className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
<span
    className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
                  <span
                      className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">ZenUI Library</span>
                  <span className="relative invisible">ZenUI Library</span>
                </button>
              </div>
          )}

          {slideAnimationButtonCode &&
              <ShowCode code='
<button
  className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
        stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    </span>
    <span
        className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">ZenUI Library</span>
    <span className="relative invisible">ZenUI Library</span>
</button>
              '
              />}
        </div>

        <div className="mt-8">
          <ContentHeader
              text={"bg bounce up animation"}
              id={"bg_bounce_up_animation"}
          />
        </div>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          Button with a background bounce-up animation, where the background color bounces upward with a dynamic effect when hovered over.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${bounceUpAnimationButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
            <button
                className={`${
                    bounceUpAnimationButtonPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleBounceUpAnimationButtonPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    bounceUpAnimationButtonCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleBounceUpAnimationButtonCode}
            >
              Code
            </button>
          </div>
          {bounceUpAnimationButtonPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <button
                    className="relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium text-primary border-2 border-primary rounded-full hover:text-white group hover:bg-gray-50">
                  <span
                      className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span
                      className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
                  <span
                      className="relative text-[1rem] group-hover:pr-4 transition-all duration-400">ZenUI Library</span>
                </button>
              </div>
          )}

          {bounceUpAnimationButtonCode &&
              <ShowCode code='
<button
    className="relative inline-flex items-center px-8 py-2.5 overflow-hidden text-lg font-medium text-primary border-2 border-primary rounded-full hover:text-white group hover:bg-gray-50">
      <span
          className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
        <span
        className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
          stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </span>
    <span className="relative text-[1rem] group-hover:pr-4 transition-all duration-400">ZenUI Library</span>
</button>
              '
              />}
        </div>

        <div className="mt-8">
          <ContentHeader
              text={"Bottom border animation"}
              id={"bottom_border_animation"}
          />
        </div>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          Button with a bottom border animation, featuring a dynamic effect where the bottom border slides in or changes style on hover.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${bottomBorderAnimationButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
            <button
                className={`${
                    bottomBorderAnimationButtonPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleBottomBorderAnimationButtonPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    bottomBorderAnimationButtonCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleBottomBorderAnimationButtonCode}
            >
              Code
            </button>
          </div>
          {bottomBorderAnimationButtonPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <button
                    className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                  <span
                      className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                  <span
                      className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
                  <span
                      className="relative text-primary transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">ZenUI Library</span>
                </button>
              </div>
          )}

          {bottomBorderAnimationButtonCode &&
              <ShowCode code='
<button
    className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
  <span
      className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-primary rounded-md group-hover:mt-0 group-hover:ml-0"></span>
  <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
  <span
      className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-primary rounded-md opacity-0 group-hover:opacity-100 "></span>
  <span
      className="relative text-primary transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">ZenUI Library</span>
</button>
              '
              />}
        </div>

        <div className="mt-8">
          <ContentHeader
              text={"hover bg fill animation"}
              id={"hover_bg_fill_animation"}
          />
        </div>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          Button with a hover background fill animation, where the background color smoothly fills the button from one side to the other when hovered over.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${bgFillAnimationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
            <button
                className={`${
                    bgFillAnimationPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleBgFillAnimationPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    bgFillAnimationCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleBgFillAnimationCode}
            >
              Code
            </button>
          </div>
          {bgFillAnimationPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <button
                    className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-mono  tracking-tighter text-white bg-gray-300 rounded-lg group">
                  <span
                      className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
                  <span
                      className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-300"></span>
                  <span className="relative text-text group-hover:text-white">ZenUI Library</span>
                </button>
              </div>
          )}

          {bgFillAnimationCode &&
              <ShowCode code='
<button
    className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-mono  tracking-tighter text-white bg-gray-300 rounded-lg group">
  <span
      className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
  <span
      className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-300"></span>
  <span className="relative text-text group-hover:text-white">ZenUI Library</span>
</button>
              '
              />}
        </div>

        <div className="mt-8">
          <ContentHeader
              text={"2 part marge animation"}
              id={"2_part_marge_animation"}
          />
        </div>

        <p className="w-full 425px:w-[80%] text-text text-[1rem]">
          Button with a two-part merge animation, where two distinct sections of the button smoothly combine into a single cohesive design on hover.
        </p>

        <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
          <div className="relative">
            <div
                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${margeAnimationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
            <button
                className={`${
                    margeAnimationPreview && "text-tabTextColor"
                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                onClick={handleMargeAnimationPreview}
            >
              Preview
            </button>
            <button
                className={`${
                    margeAnimationCode && "text-tabTextColor"
                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                onClick={handleMargeAnimationCode}
            >
              Code
            </button>
          </div>
          {margeAnimationPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <button className="relative px-6 py-3 font-bold text-white rounded-lg group">
                  <span
                      className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-primary ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span
                      className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-purple-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
                  <span className="relative">ZenUI Library</span>
                </button>
              </div>
          )}

          {margeAnimationCode &&
              <ShowCode code='
<button className="relative px-6 py-3 font-bold text-white rounded-lg group">
  <span
     className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-primary ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
  <span
     className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-purple-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
  <span className="relative">ZenUI Library</span>
</button>
              '
              />}
        </div>

        <OverviewFooter backUrl='/components/dropdown-button' backName='dropdown button' forwardName='cards' forwardUrl='/components/cards'/>
      </div>

      <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
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
            href="#border_animated"
            className={`${
                contentActiveTab === 2 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(2)}
        >
          Border Animation
        </a>
        <a
            href="#bg_hover_animation"
            className={`${
                contentActiveTab === 3 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(3)}
        >
          Bg hover animation
        </a>
        <a
            href="#bg_slide_up_animation"
            className={`${
                contentActiveTab === 4 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(4)}
        >
          bg slide up animation
        </a>
        <a
            href="#bg_slide_animation"
            className={`${
                contentActiveTab === 5 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(5)}
        >
          Bg slide animation
        </a>
        <a
            href="#bg_bounce_up_animation"
            className={`${
                contentActiveTab === 6 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(6)}
        >
          bg bounce up animation
        </a>
        <a
            href="#bottom_border_animation"
            className={`${
                contentActiveTab === 7 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(7)}
        >
          Bottom border animation
        </a>
        <a
            href="#hover_bg_fill_animation"
            className={`${
                contentActiveTab === 8 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(8)}
        >
          hover bg fill animation
        </a>
        <a
            href="#2_part_marge_animation"
            className={`${
                contentActiveTab === 9 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(9)}
        >
          2 part marge animation
        </a>
        <div data-ea-publisher="zenuinet" className='w-full' data-ea-type="image"></div>
      </div>
      <Helmet>
        <title>Buttons - Animated Button</title>
      </Helmet>
    </aside>
  );
};

export default AnimatedButton;
