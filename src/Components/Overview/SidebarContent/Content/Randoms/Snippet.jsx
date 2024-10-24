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
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div>
          <ContentHeader text={"primary Snippet"} id={"primary_snippet"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a primary code snippet component with a copy button for easy code duplication.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${primarySnippetPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      primarySnippetPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handlePrimarySnippetPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      primarySnippetCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handlePrimarySnippetCode}
              >
                Code
              </button>
            </div>
            {primarySnippetPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div
                      className="bg-[#d1d1d180] text-[#000000] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
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

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a primary code snippet with background color and a copy button for convenient code sharing.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${backgroundSnippetPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      backgroundSnippetPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleBackgroundSnippetPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      backgroundSnippetCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleBackgroundSnippetCode}
              >
                Code
              </button>
            </div>
            {backgroundSnippetPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div
                      className="bg-primary text-[#fff] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
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
            <ContentHeader text={"Bordered Snippet"} id={"bordered_snippet"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a primary code snippet with border color and a copy button for efficient code sharing and reuse.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${borderSnippetPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      borderSnippetPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleBorderSnippetPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      borderSnippetCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleBorderSnippetCode}
              >
                Code
              </button>
            </div>
            {borderSnippetPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div
                      className="border border-primary text-primary rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
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

                  <div
                      className="border border-border text-text rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
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

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a primary code snippet with a gray background for clear code display without a copy button.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${withoutIconSnippetPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
              <button
                  className={`${
                      withoutIconSnippetPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleWithoutIconSnippetPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      withoutIconSnippetCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleWithoutIconSnippetCode}
              >
                Code
              </button>
            </div>
            {withoutIconSnippetPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div
                      className="bg-[#d1d1d180] text-[#000] rounded-md py-1 px-4 tracking-wider font-mono font-[500] flex items-center justify-between gap-4">
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

          <OverviewFooter backUrl='/components/code' backName='code' forwardName='all blocks' forwardUrl='/blocks/all-blocks'/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
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
          <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
        </div>
      </aside>
      <Helmet>
        <title>Randoms - Snippet</title>
      </Helmet>
    </>
  );
};

export default Snippet;
