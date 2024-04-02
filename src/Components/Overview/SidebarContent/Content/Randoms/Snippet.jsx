import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { MdOutlineDone } from "react-icons/md";
import { GoCopy } from "react-icons/go";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const Snippet = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // Primary Snippet
  const [primarySnippetPreview, setPrimarySnippetPreview] = useState(true);
  const [primarySnippetCode, setPrimarySnippetCode] = useState(false);

  const handlePrimarySnippetPreview = () => {
    setPrimarySnippetPreview(true);
    setPrimarySnippetCode(false);
  };

  const handlePrimarySnippetCode = () => {
    setPrimarySnippetCode(true);
    setPrimarySnippetPreview(false);
  };

  // Primary Snippet
  const [backgroundSnippetPreview, setBackgroundSnippetPreview] =
    useState(true);
  const [backgroundSnippetCode, setBackgroundSnippetCode] = useState(false);

  const handleBackgroundSnippetPreview = () => {
    setBackgroundSnippetPreview(true);
    setBackgroundSnippetCode(false);
  };

  const handleBackgroundSnippetCode = () => {
    setBackgroundSnippetCode(true);
    setBackgroundSnippetPreview(false);
  };

  // border Snippet
  const [borderSnippetPreview, setBorderSnippetPreview] = useState(true);
  const [borderSnippetCode, setBorderSnippetCode] = useState(false);

  const handleBorderSnippetPreview = () => {
    setBorderSnippetPreview(true);
    setBorderSnippetCode(false);
  };

  const handleBorderSnippetCode = () => {
    setBorderSnippetCode(true);
    setBorderSnippetPreview(false);
  };

  // border Snippet
  const [withoutIconSnippetPreview, setWithoutIconSnippetPreview] =
    useState(true);
  const [withoutIconSnippetCode, setWithoutIconSnippetCode] = useState(false);

  const handleWithoutIconSnippetPreview = () => {
    setWithoutIconSnippetPreview(true);
    setWithoutIconSnippetCode(false);
  };

  const handleWithoutIconSnippetCode = () => {
    setWithoutIconSnippetCode(true);
    setWithoutIconSnippetPreview(false);
  };

  // actions
  const [isCopy, setIsCopy] = useState(false);
  const [backgroundSnippet, setBackgroundSnippet] = useState(false);
  const [border1, setBorder1] = useState(false);
  const [border2, setBorder2] = useState(false);
  const handlePrimaryCopy = (text, setState) => {
    setState(true);
    window.navigator.clipboard.writeText(text);
    setTimeout(() => {
      setState(false);
    }, 1000);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6">
        <div>
          <ContentHeader text={"primary Snippet"} id={"primary_snippet"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  primarySnippetPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handlePrimarySnippetPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  primarySnippetCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handlePrimarySnippetCode}
              >
                Code
              </button>
            </div>
            {primarySnippetPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="bg-[#d1d1d180] text-[#000000] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
                  $ npm i @zenui
                  <GoCopy
                    onClick={() => handlePrimaryCopy("npm i @zenui", setIsCopy)}
                    className={`${
                      isCopy ? " opacity-0 hidden" : " opacity-100 flex"
                    } transition-all duration-300 cursor-pointer`}
                  />
                  <MdOutlineDone
                    className={`${
                      isCopy ? " opacity-100 flex" : " opacity-0 hidden"
                    } transition-all duration-300 cursor-pointer`}
                  />
                </div>
              </div>
            )}

            {primarySnippetCode && (
              <Showcode
                code='
// icons
import { MdOutlineDone } from "react-icons/md";
import { GoCopy } from "react-icons/go";

const Snippet = () => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = (text) => {
    setIsCopy(true);
    window.navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };
  return (
    <div className="bg-[#d1d1d180] text-[#000000] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
      $ npm i @zenui
      <GoCopy
        onClick={() => handleCopy("npm i @zenui")}
        className={`${
          isCopy ? " opacity-0 hidden" : " opacity-100 flex"
        } transition-all duration-300 cursor-pointer`}
      />
      <MdOutlineDone
        className={`${
          isCopy ? " opacity-100 flex" : " opacity-0 hidden"
        } transition-all duration-300 cursor-pointer`}
      />
    </div>
  );
};

export default Snippet;
                '
              />
            )}
          </div>

          <div class="mt-8">
            <ContentHeader
              text={"background Snippet"}
              id={"background_snippet"}
            />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  backgroundSnippetPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleBackgroundSnippetPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  backgroundSnippetCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleBackgroundSnippetCode}
              >
                Code
              </button>
            </div>
            {backgroundSnippetPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="bg-primary text-[#fff] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
                  $ npm i @zenui
                  <GoCopy
                    onClick={() =>
                      handlePrimaryCopy("npm i @zenui", setBackgroundSnippet)
                    }
                    className={`${
                      backgroundSnippet
                        ? " opacity-0 hidden"
                        : " opacity-100 flex"
                    } transition-all duration-300 cursor-pointer`}
                  />
                  <MdOutlineDone
                    className={`${
                      backgroundSnippet
                        ? " opacity-100 flex"
                        : " opacity-0 hidden"
                    } transition-all duration-300 cursor-pointer`}
                  />
                </div>
              </div>
            )}

            {backgroundSnippetCode && (
              <Showcode
                code='
// icons
import { MdOutlineDone } from "react-icons/md";
import { GoCopy } from "react-icons/go";

const Snippet = () => {
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = (text) => {
    setIsCopy(true);
    window.navigator.clipboard.writeText(text);
    setTimeout(() => {
      setIsCopy(false);
    }, 1000);
  };
  return (
    <div className="bg-[#3B9DF8] text-[#fff] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
      $ npm i @zenui
      <GoCopy
        onClick={() => handleCopy("npm i @zenui")}
        className={`${
          isCopy ? " opacity-0 hidden" : " opacity-100 flex"
        } transition-all duration-300 cursor-pointer`}
      />
      <MdOutlineDone
        className={`${
          isCopy ? " opacity-100 flex" : " opacity-0 hidden"
        } transition-all duration-300 cursor-pointer`}
      />
    </div>
  );
};

export default Snippet;
                '
              />
            )}
          </div>

          <div class="mt-8">
            <ContentHeader text={"Bordered Snippet"} id={"bordered_snippet"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  borderSnippetPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleBorderSnippetPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  borderSnippetCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleBorderSnippetCode}
              >
                Code
              </button>
            </div>
            {borderSnippetPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="border border-primary text-primary rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
                  $ npm i @zenui
                  <GoCopy
                    onClick={() =>
                      handlePrimaryCopy("npm i @zenui", setBorder1)
                    }
                    className={`${
                      border1 ? " opacity-0 hidden" : " opacity-100 flex"
                    } transition-all duration-300 cursor-pointer`}
                  />
                  <MdOutlineDone
                    className={`${
                      border1 ? " opacity-100 flex" : " opacity-0 hidden"
                    } transition-all duration-300 cursor-pointer`}
                  />
                </div>

                <div className="border border-border text-text rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
                  $ npm i @zenui
                  <GoCopy
                    onClick={() =>
                      handlePrimaryCopy("npm i @zenui", setBorder2)
                    }
                    className={`${
                      border2 ? " opacity-0 hidden" : " opacity-100 flex"
                    } transition-all duration-300 cursor-pointer`}
                  />
                  <MdOutlineDone
                    className={`${
                      border2 ? " opacity-100 flex" : " opacity-0 hidden"
                    } transition-all duration-300 cursor-pointer`}
                  />
                </div>
              </div>
            )}

            {borderSnippetCode && (
              <Showcode
                code='
// icons
import { MdOutlineDone } from "react-icons/md";
import { GoCopy } from "react-icons/go";

const Snippet = () => {
  const [isCopy1, setIsCopy1] = useState(false);
  const [isCopy2, setIsCopy2] = useState(false);

  const handleCopy = (text, setState) => {
    setState(true);
    window.navigator.clipboard.writeText(text);
    setTimeout(() => {
      setState(false);
    }, 1000);
  };
  return (
    <>
      <div className="border border-[#3B9DF8] text-[#3B9DF8] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
        $ npm i @zenui
        <GoCopy
          onClick={() => handleCopy("npm i @zenui", setIsCopy1)}
          className={`${
            isCopy1 ? " opacity-0 hidden" : " opacity-100 flex"
          } transition-all duration-300 cursor-pointer`}
        />
        <MdOutlineDone
          className={`${
            isCopy1 ? " opacity-100 flex" : " opacity-0 hidden"
          } transition-all duration-300 cursor-pointer`}
        />
      </div>

      <div className="border border-[#e5eaf2] text-[#424242] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
        $ npm i @zenui
        <GoCopy
          onClick={() => handleCopy("npm i @zenui", setIsCopy2)}
          className={`${
            isCopy2 ? " opacity-0 hidden" : " opacity-100 flex"
          } transition-all duration-300 cursor-pointer`}
        />
        <MdOutlineDone
          className={`${
            isCopy2 ? " opacity-100 flex" : " opacity-0 hidden"
          } transition-all duration-300 cursor-pointer`}
        />
      </div>
    </>
  );
};

export default Snippet;
                '
              />
            )}
          </div>

          <div class="mt-8">
            <ContentHeader
              text={"without icon Snippet"}
              id={"without_icon_snippet"}
            />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  withoutIconSnippetPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleWithoutIconSnippetPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  withoutIconSnippetCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleWithoutIconSnippetCode}
              >
                Code
              </button>
            </div>
            {withoutIconSnippetPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="bg-[#d1d1d180] text-[#000] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
                  $ npm i @zenui
                </div>
              </div>
            )}

            {withoutIconSnippetCode && (
              <Showcode
                code='
<div className="bg-[#d1d1d180] text-[#000] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
   $ npm i @zenui
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
            href="#primary_snippet"
            className={`${
              contentActiveTab === 1 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(1)}
          >
            Primary Snippet
          </a>
          <a
            href="#background_snippet"
            className={`${
              contentActiveTab === 2 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(2)}
          >
            Background Snippet
          </a>
          <a
            href="#bordered_snippet"
            className={`${
              contentActiveTab === 3 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(3)}
          >
            Bordered Snippet
          </a>
          <a
            href="#without_icon_snippet"
            className={`${
              contentActiveTab === 4 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(4)}
          >
            Without Icon Snippet
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Randoms - Snippet</title>
      </Helmet>
    </>
  );
};

export default Snippet;
