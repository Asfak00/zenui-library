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

const TextInput = () => {
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
      <aside className="flex items-start justify-between gap-6">
        <div>
          <ContentHeader text={"primary input"} id={"primary_input"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  codePreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleCodePreview}
              >
                Preview
              </button>
              <button
                className={`${
                  codeCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleCodeCode}
              >
                Code
              </button>
            </div>
            {codePreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="bg-[#d1d1d180] text-[#000000] rounded-md py-1 px-4 tracking-wider font-mono font-[500]">
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

          <OverviewFooter />
        </div>

        <div className="flex flex-col gap-4 sticky top-20 right-0 w-[20%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
            href="#primary_input"
            className={`${
              contentActiveTab === 1 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(1)}
          >
            Primary Input
          </a>
          <a
            href="#bottom_border_input"
            className={`${
              contentActiveTab === 1 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(1)}
          >
            Bottom Border Input
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - Text Input</title>
      </Helmet>
    </>
  );
};

export default TextInput;
