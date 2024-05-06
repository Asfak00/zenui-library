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

  // dashed Loader
  const [textLoaderPreview, setTextLoaderPreview] = useState(true);
  const [textLoaderCode, setTextLoaderCode] = useState(false);

  const handleTextLoaderPreview = () => {
    setTextLoaderPreview(true);
    setTextLoaderCode(false);
  };

  const handleTextLoaderCode = () => {
    setTextLoaderCode(true);
    setTextLoaderPreview(false);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6">
        <div>
          <ContentHeader id={"circle_loader"} text={"circle loader"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  circleLoaderPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleCircleLoaderPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  circleLoaderCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleCircleLoaderCode}
              >
                Code
              </button>
            </div>
            {circleLoaderPreview && (
              <div className="p-8 mb-4 flex items-center gap-12 justify-center">
                <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-primary border-[#3b9df84b]"></div>

                <FiLoader className="text-[2.8rem] animate-spin text-primary" />

                <TbLoader3 className="text-[2.8rem] animate-spin text-primary" />
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
            <ContentHeader id={"dashed_loader"} text={"dashed loader"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  dashedLoaderPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleDashedLoaderPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  dashedLoaderCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
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
            <ContentHeader id={"opacity_loader"} text={"opacity loader"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  opacityLoaderPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleOpacityLoaderPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  opacityLoaderCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleOpacityLoaderCode}
              >
                Code
              </button>
            </div>
            {opacityLoaderPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="w-7 h-7 animate-[ping_2s_linear_infinite] rounded-full border-2 border-[#3b9df8] flex items-center justify-center">
                  <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] rounded-full border-2 border-[#3b9df8]"></div>
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
            <ContentHeader id={"text_loader"} text={"text loader"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  textLoaderPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleTextLoaderPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  textLoaderCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleTextLoaderCode}
              >
                Code
              </button>
            </div>
            {textLoaderPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="text-center">
                  <h2 className="font-[600] text-primary text-[1.3rem] animate-pulse">
                    Loading...
                  </h2>
                  <div className="flex items-center gap-0.5">
                    <span className="w-[10px] h-[2px] bg-primary animate-pulse"></span>
                    <span className="w-[10px] h-[2px] bg-primary animate-pulse"></span>
                    <span className="w-[10px] h-[2px] bg-primary animate-pulse"></span>
                    <span className="w-[10px] h-[2px] bg-primary animate-pulse"></span>
                    <span className="w-[10px] h-[2px] bg-primary animate-pulse"></span>
                    <span className="w-[10px] h-[2px] bg-primary animate-pulse"></span>
                    <span className="w-[10px] h-[2px] bg-primary animate-pulse"></span>
                    <span className="w-[10px] h-[2px] bg-primary animate-pulse"></span>
                  </div>
                </div>
              </div>
            )}

            {textLoaderCode && (
              <Showcode
                code='
<div className="text-center">
  <h2 className="font-[600] text-[#3B9DF8] text-[1.3rem] animate-pulse">
      Loading...
  </h2>
  <div className="flex items-center gap-0.5">
     <span className="w-[10px] h-[2px] bg-[#3B9DF8] animate-pulse"></span>
     <span className="w-[10px] h-[2px] bg-[#3B9DF8] animate-pulse"></span>
     <span className="w-[10px] h-[2px] bg-[#3B9DF8] animate-pulse"></span>
     <span className="w-[10px] h-[2px] bg-[#3B9DF8] animate-pulse"></span>
     <span className="w-[10px] h-[2px] bg-[#3B9DF8] animate-pulse"></span>
     <span className="w-[10px] h-[2px] bg-[#3B9DF8] animate-pulse"></span>
     <span className="w-[10px] h-[2px] bg-[#3B9DF8] animate-pulse"></span>
     <span className="w-[10px] h-[2px] bg-[#3B9DF8] animate-pulse"></span>
   </div>
</div>
              '
              />
            )}
          </div>

          <OverviewFooter />
        </div>

        <div className="flex flex-col gap-4 sticky top-20 right-0 w-[20%]">
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
            href="#text_loader"
            className={`${
              contentActiveTab === 4 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(4)}
          >
            Text Loader
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
