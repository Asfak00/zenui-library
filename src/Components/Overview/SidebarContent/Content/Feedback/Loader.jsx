import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// icons
import { FiLoader } from "react-icons/fi";
import { TbLoader3 } from "react-icons/tb";

const Loader = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // circle loader
  const [circleLoaderPreview, setCircleLoaderPreview] = useState(true);
  const [circleLoaderCode, setCircleLoaderCode] = useState(false);

  const handleCircleLoaderPreview = () => {
    setCircleLoaderPreview(true);
    setCircleLoaderCode(false);
  };

  const handleCircleLoaderCode = () => {
    setCircleLoaderCode(true);
    setCircleLoaderPreview(false);
  };

  // dashed Loader
  const [dashedLoaderPreview, setDashedLoaderPreview] = useState(true);
  const [dashedLoaderCode, setDashedLoaderCode] = useState(false);

  const handleDashedLoaderPreview = () => {
    setDashedLoaderPreview(true);
    setDashedLoaderCode(false);
  };

  const handleDashedLoaderCode = () => {
    setDashedLoaderCode(true);
    setDashedLoaderPreview(false);
  };

  // dashed Loader
  const [opacityLoaderPreview, setOpacityLoaderPreview] = useState(true);
  const [opacityLoaderCode, setOpacityLoaderCode] = useState(false);

  const handleOpacityLoaderPreview = () => {
    setOpacityLoaderPreview(true);
    setOpacityLoaderCode(false);
  };

  const handleOpacityLoaderCode = () => {
    setOpacityLoaderCode(true);
    setOpacityLoaderPreview(false);
  };

  // wave Loader
  const [waveLoaderPreview, setWaveLoaderPreview] = useState(true);
  const [waveLoaderCode, setWaveLoaderCode] = useState(false);

  const handleWaveLoaderPreview = () => {
    setWaveLoaderPreview(true);
    setWaveLoaderCode(false);
  };

  const handleWaveLoaderCode = () => {
    setWaveLoaderCode(true);
    setWaveLoaderPreview(false);
  };

  // chase Loader
  const [chaseLoaderPreview, setChaseLoaderPreview] = useState(true);
  const [chaseLoaderCode, setChaseLoaderCode] = useState(false);

  const handleChaseLoaderPreview = () => {
    setChaseLoaderPreview(true);
    setChaseLoaderCode(false);
  };

  const handleChaseLoaderCode = () => {
    setChaseLoaderCode(true);
    setChaseLoaderPreview(false);
  };

  // chase Loader
  const [dotLoaderPreview, setDotLoaderPreview] = useState(true);
  const [dotLoaderCode, setDotLoaderCode] = useState(false);

  const handleDotLoaderPreview = () => {
    setDotLoaderPreview(true);
    setDotLoaderCode(false);
  };

  const handleDotLoaderCode = () => {
    setDotLoaderCode(true);
    setDotLoaderPreview(false);
  };

  // shape Loader
  const [shapeLoaderPreview, setShapeLoaderPreview] = useState(true);
  const [shapeLoaderCode, setShapeLoaderCode] = useState(false);

  const handleShapeLoaderPreview = () => {
    setShapeLoaderPreview(true);
    setShapeLoaderCode(false);
  };

  const handleShapeLoaderCode = () => {
    setShapeLoaderCode(true);
    setShapeLoaderPreview(false);
  };

  // flip Loader
  const [flipLoaderPreview, setFlipLoaderPreview] = useState(true);
  const [flipLoaderCode, setFlipLoaderCode] = useState(false);

  const handleFlipLoaderPreview = () => {
    setFlipLoaderPreview(true);
    setFlipLoaderCode(false);
  };

  const handleFlipLoaderCode = () => {
    setFlipLoaderCode(true);
    setFlipLoaderPreview(false);
  };

  const spinnerDivs = Array.from({ length: 10 }).map((_, index) => {
    const delay = (index + 1) * 0.1;
    const rotation = (index + 1) * 36;
    const translation = 150;

    return (
        <div
            key={index}
            className="absolute w-[50%] h-[140%] bg-primary"
            style={{
              '--delay': delay,
              '--rotation': rotation,
              '--translation': translation,
              transform: `rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%))`,
              animation: `spinner-animation 1s calc(var(--delay) * 1s) infinite ease`
            }}
        ></div>
    );
  });

  const sharedStyle = {
    content: '""',
    width: '100%',
    height: '100%',
    display: 'block',
    border: '5.6px solid #3B9DF8',
    borderRadius: '50%',
    boxShadow: '0 -33.6px 0 -5.6px #3B9DF8',
    position: 'absolute',
    animation: 'spinner-rotate 1.25s infinite ease'
  };

  const items = Array.from({ length: 9 });

  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div>
          <ContentHeader id={"circle_loader"} text={"circle loader"}/>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a circle loader component. Indicate loading status with a sleek, circular animation.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${circleLoaderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      circleLoaderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleCircleLoaderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      circleLoaderCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleCircleLoaderCode}
              >
                Code
              </button>
            </div>
            {circleLoaderPreview && (
                <div className="p-8 mb-4 flex items-center gap-12 justify-center">
                  <div
                      className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-primary border-[#3b9df84b]"></div>

                  <FiLoader className="text-[2.8rem] animate-spin text-primary"/>

                  <TbLoader3 className="text-[2.8rem] animate-spin text-primary"/>
                </div>
            )}

            {circleLoaderCode && (
                <Showcode
                    code='
// icons
import { FiLoader } from "react-icons/fi";
import { TbLoader3 } from "react-icons/tb";

const Loader = () => {
  return (
    <>
      <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-[#3B9DF8] border-[#3b9df84b]"></div>

      <FiLoader className="text-[2.8rem] animate-spin text-[#3B9DF8]" />

      <TbLoader3 className="text-[2.8rem] animate-spin text-[#3B9DF8]" />
    </>
  );
};

export default Loader;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id={"dashed_loader"} text={"dashed loader"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a dashed loader component. Show loading progress with a dynamic, dashed-line animation.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dashedLoaderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      dashedLoaderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleDashedLoaderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      dashedLoaderCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleDashedLoaderCode}
              >
                Code
              </button>
            </div>
            {dashedLoaderPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="w-10 h-10 animate-spin rounded-full border-dashed border-8 border-[#3b9df8]"></div>
                </div>
            )}

            {dashedLoaderCode && (
                <Showcode
                    code='
  <div className="w-10 h-10 animate-spin rounded-full border-dashed border-8 border-[#3b9df8]"></div>
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id={"opacity_loader"} text={"opacity loader"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an opacity loader component. Display loading status with a subtle opacity animation for sleek
            transitions.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${opacityLoaderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      opacityLoaderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleOpacityLoaderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      opacityLoaderCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleOpacityLoaderCode}
              >
                Code
              </button>
            </div>
            {opacityLoaderPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div
                      className="w-7 h-7 animate-[ping_2s_linear_infinite] rounded-full border-2 border-[#3b9df8] flex items-center justify-center">
                    <div
                        className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-[#3b9df8]"></div>
                  </div>
                </div>
            )}

            {opacityLoaderCode && (
                <Showcode
                    code='
<div className="w-7 h-7 animate-[ping_2s_linear_infinite] rounded-full border-2 border-[#3b9df8] flex items-center justify-center">

<div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-[#3b9df8]"></div>
              </div>
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id={"wave_loader"} text={"wave loader"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a wave loader component. Show loading progress with a dynamic, wave-like animation.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${waveLoaderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      waveLoaderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleWaveLoaderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      waveLoaderCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleWaveLoaderCode}
              >
                Code
              </button>
            </div>
            {waveLoaderPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className='my-10'>
                    <div className="absolute w-[9px] h-[9px]">
                      {spinnerDivs}
                      <style>
                        {`
          @keyframes spinner-animation {
            0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
              transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
            }
            50% {
              transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
            }
          }
        `}
                      </style>
                    </div>
                  </div>
                </div>
            )}

            {waveLoaderCode && (
                <Showcode
                    code="
import React from 'react';

const Loader = () => {
    const spinnerDivs = Array.from({ length: 10 }).map((_, index) => {
        const delay = (index + 1) * 0.1;
        const rotation = (index + 1) * 36;
        const translation = 150;

        return (
            <div key={index} className='absolute w-[50%] h-[140%] bg-primary'
                style={{
                    '--delay': delay,
              '--rotation': rotation,
              '--translation': translation,
              transform: `rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%))`,
              animation: `spinner-animation 1s calc(var(--delay) * 1s) infinite ease`}}
            ></div> );
          });


    return (
          <div className='absolute w-[9px] h-[9px]'>
            {spinnerDivs}
            <style>
              {`
                @keyframes spinner-animation {
                0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {
                transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1%));
               }
               50% {
                transform: rotate(calc(var(--rotation) * 1deg)) translate(0, calc(var(--translation) * 1.5%));
               }
              }
            `}
            </style>
          </div>
          );
          };

export default Loader;
          "
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id={"chase_loader"} text={"chase loader"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a chase animation loader component. Display loading progress with an engaging, sequential movement.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${chaseLoaderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      chaseLoaderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleChaseLoaderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      chaseLoaderCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleChaseLoaderCode}
              >
                Code
              </button>
            </div>
            {chaseLoaderPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className='my-10'>
                    <div className="relative w-[22.4px] h-[22.4px]">
                      <div
                          style={{
                            ...sharedStyle,
                            animation: 'spinner-b4c8mmmd 0.5s backwards, spinner-rotate 1.25s 0.5s infinite ease'
                          }}
                      ></div>
                      <div
                          style={{
                            ...sharedStyle,
                            animationDelay: '0s, 1.25s'
                          }}
                      ></div>
                      <style>
                        {`
          @keyframes spinner-b4c8mmmd {
            from {
              box-shadow: 0 0 0 -5.6px #474bff;
            }
          }

          @keyframes spinner-rotate {
            to {
              transform: rotate(360deg);
            }
          }
        `}
                      </style>
                    </div>
                  </div>
                </div>
            )}

            {chaseLoaderCode && (
                <Showcode
                    code="
import React from 'react';

const Loader = () => {
    const sharedStyle = {
        content: '',
        width: '100%',
        height: '100%',
        display: 'block',
        border: '5.6px solid #3B9DF8',
        borderRadius: '50%',
        boxShadow: '0 -33.6px 0 -5.6px #3B9DF8',
        position: 'absolute',
        animation: 'spinner-rotate 1.25s infinite ease'
    };

  return (
      <div className='relative w-[22.4px] h-[22.4px]'>
              <div
              style={{
              ...sharedStyle,
              animation: 'spinner-b4c8mmmd 0.5s backwards, spinner-rotate 1.25s 0.5s infinite ease'
            }}
              ></div>
              <div
              style={{
              ...sharedStyle,
              animationDelay: '0s, 1.25s'
            }}
          ></div>
          <style>
            {`
          @keyframes spinner-b4c8mmmd {
            from {
              box-shadow: 0 0 0 -5.6px #474bff;
            }
          }

          @keyframes spinner-rotate {
            to {
              transform: rotate(360deg);
            }
          }
        `}
          </style>
        </div>
        );};

export default Loader;
        "
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id={"dot_loader"} text={"dot loader"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a dot animation loader component. Show loading progress with rhythmic dot movement for visual feedback.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dotLoaderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      dotLoaderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleDotLoaderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      dotLoaderCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleDotLoaderCode}
              >
                Code
              </button>
            </div>
            {dotLoaderPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className='my-10'>
                    <div
                        className="w-[56px] h-[56px]"
                        style={{
                            '--c': 'radial-gradient(farthest-side, #3B9DF8 92%, transparent)',
                          background: `
          var(--c) 50% 0,
          var(--c) 50% 100%,
          var(--c) 100% 50%,
          var(--c) 0 50%
        `,
                          backgroundSize: '13.4px 13.4px',
                          backgroundRepeat: 'no-repeat',
                          animation: 'spinner-kh173p 1s infinite'
                        }}
                    >
                      <style>
                        {`
          @keyframes spinner-kh173p {
            to {
              transform: rotate(0.5turn);
            }
          }
        `}
                      </style>
                    </div>
                  </div>
                </div>
            )}

            {dotLoaderCode && (
                <Showcode
                    code="
import React from 'react';

const Loader = () => {

  return (
          <div
              className='w-[56px] h-[56px]'
              style={{
              '--c': 'radial-gradient(farthest-side, #3B9DF8 92%, transparent)',
              background: `
                  var(--c) 50% 0,
                  var(--c) 50% 100%,
                  var(--c) 100% 50%,
                  var(--c) 0 50%
              `,
              backgroundSize: '13.4px 13.4px',
              backgroundRepeat: 'no-repeat',
              animation: 'spinner-kh173p 1s infinite'
            }}
              >
              <style>
            {`
          @keyframes spinner-kh173p {
            to {
              transform: rotate(0.5turn);
              }
            }
            `}
              </style>
              </div>
              )
              ;
            };

export default Loader;
            "
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id={"shape_loader"} text={"shape loader"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a shape animation loader component. Display loading progress with dynamic shape transformations for visual appeal.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${shapeLoaderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      shapeLoaderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleShapeLoaderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      shapeLoaderCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleShapeLoaderCode}
              >
                Code
              </button>
            </div>
            {shapeLoaderPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className='my-10'>
                    <div className="relative w-[44.8px] h-[44.8px] text-primary">
                      <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `
            radial-gradient(10.08px at bottom right, transparent 94%, currentColor) top left,
            radial-gradient(10.08px at bottom left, transparent 94%, currentColor) top right,
            radial-gradient(10.08px at top right, transparent 94%, currentColor) bottom left,
            radial-gradient(10.08px at top left, transparent 94%, currentColor) bottom right
          `,
                            backgroundSize: '22.4px 22.4px',
                            backgroundRepeat: 'no-repeat',
                            animation: 'shapes-77ngqcmd 1.5s infinite cubic-bezier(0.3,1,0,1)'
                          }}
                      ></div>
                      <style>
                        {`
          @keyframes shapes-77ngqcmd {
            33% {
              inset: -11.2px;
              transform: rotate(0deg);
            }
            66% {
              inset: -11.2px;
              transform: rotate(90deg);
            }
            100% {
              inset: 0;
              transform: rotate(90deg);
            }
          }
        `}
                      </style>
                    </div>
                  </div>
                </div>
            )}

            {shapeLoaderCode && (
                <Showcode
                    code="
import React from 'react';

const Loader = () => {

  return (
      <div className='relative w-[44.8px] h-[44.8px] text-primary'>
              <div
              className='absolute inset-0 rounded-full'
              style={{
              background: `
                  radial-gradient(10.08px at bottom right, transparent 94%, currentColor) top left,
                  radial-gradient(10.08px at bottom left, transparent 94%, currentColor) top right,
                  radial-gradient(10.08px at top right, transparent 94%, currentColor) bottom left,
                  radial-gradient(10.08px at top left, transparent 94%, currentColor) bottom right
              `,
              backgroundSize: '22.4px 22.4px',
              backgroundRepeat: 'no-repeat',
              animation: 'shapes-77ngqcmd 1.5s infinite cubic-bezier(0.3,1,0,1)'
            }}
              ></div>
              <style>
            {`
          @keyframes shapes-77ngqcmd {
            33% {
              inset: -11.2px;
              transform: rotate(0deg);
            }
            66% {
              inset: -11.2px;
              transform: rotate(90deg);
            }
            100% {
              inset: 0;
              transform: rotate(90deg);
            }
          }
        `}
          </style>
        </div>
        ) ;
        };

export default Loader;
        "
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id={"flip_loader"} text={"flip loader"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a flip animation loader component. Showcase loading progress with engaging flip animations for visual interest.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${flipLoaderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      flipLoaderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleFlipLoaderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      flipLoaderCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleFlipLoaderCode}
              >
                Code
              </button>
            </div>
            {flipLoaderPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className='my-10'>
                    <div className="grid grid-cols-3 grid-rows-3 w-[67.2px] h-[67.2px]">
                      {items.map((_, index) => (
                          <div
                              key={index}
                              className="bg-primary"
                              style={{
                                animation: `flipping-18i5bq 1.5s ${index * 0.1}s infinite backwards`
                              }}
                          ></div>
                      ))}
                      <style>
                        {`
          @keyframes flipping-18i5bq {
            0% {
              transform: perspective(67.2px) rotateX(-90deg);
            }
            50%, 75% {
              transform: perspective(67.2px) rotateX(0);
            }
            100% {
              opacity: 0;
              transform: perspective(67.2px) rotateX(0);
            }
          }
        `}
                      </style>
                    </div>
                  </div>
                </div>
            )}

            {flipLoaderCode && (
                <Showcode
                    code="
import React from 'react';

const Loader = () => {

    const items = Array.from({ length: 9 });

  return (
      <div className='grid grid-cols-3 grid-rows-3 w-[67.2px] h-[67.2px]'>
            {items.map((_, index) => (
              <div
              key={index}
            className='bg-primary'
            style={{
              animation: `flipping-18i5bq 1.5s ${index * 0.1}s infinite backwards`
            }}
          ></div>
          ))}
          <style>
            {`
          @keyframes flipping-18i5bq {
            0% {
              transform: perspective(67.2px) rotateX(-90deg);
            }
            50%, 75% {
              transform: perspective(67.2px) rotateX(0);
            }
            100% {
              opacity: 0;
              transform: perspective(67.2px) rotateX(0);
            }
          }
        `}
          </style>
        </div>
        ) ;
        };

export default Loader;
        "
                />
            )}
          </div>

          <OverviewFooter/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#circle_loader"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Circle Loader
          </a>
          <a
              href="#dashed_loader"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Dashed Loader
          </a>
          <a
              href="#opacity_loader"
              className={`${
                  contentActiveTab === 3 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(3)}
          >
            Opacity Loader
          </a>
          <a
              href="#wave_loader"
              className={`${
                  contentActiveTab === 4 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(4)}
          >
            Wave Loader
          </a>
          <a
              href="#chase_loader"
              className={`${
                  contentActiveTab === 5 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(5)}
          >
            Chase Loader
          </a>
          <a
              href="#dot_loader"
              className={`${
                  contentActiveTab === 6 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(6)}
          >
            Dot Loader
          </a>
          <a
              href="#shape_loader"
              className={`${
                  contentActiveTab === 7 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(7)}
          >
            Shape Loader
          </a>
          <a
              href="#flip_loader"
              className={`${
                  contentActiveTab === 8 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(8)}
          >
            Flip Loader
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Feedback - Loader</title>
      </Helmet>
    </>
  );
};

export default Loader;
