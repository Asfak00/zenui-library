import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import {
  IoCheckmarkDoneCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { MdErrorOutline, MdOutlineInfo } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const Code = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // code
  const [codePreview, setCodePreview] = useState(true);
  const [codeCode, setCodeCode] = useState(false);

  const handleCodePreview = () => {
    setCodePreview(true);
    setCodeCode(false);
  };

  const handleCodeCode = () => {
    setCodeCode(true);
    setCodePreview(false);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
        <div>
          <ContentHeader text={"Code"} id={"code"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a code display component. Showcase code snippets with clarity and formatting.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${codePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      codePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleCodePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      codeCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleCodeCode}
              >
                Code
              </button>
            </div>
            {codePreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div
                      className="bg-[#d1d1d180] text-[#000000] rounded-md py-1 px-4 tracking-wider font-mono font-[500]">
                    npm i @zenui
                  </div>
                </div>
            )}

            {codeCode && (
                <Showcode
                    code='
<div className="bg-[#d1d1d180] text-[#000000] rounded-md py-1 px-4 tracking-wider font-sans font-[600]">
     npm i @zenui
</div>
                '
                />
            )}
          </div>

          <OverviewFooter/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[20%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#code"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Code
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Randoms - Code</title>
      </Helmet>
    </>
  );
};

export default Code;
