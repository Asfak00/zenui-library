import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// icons
import { FaPlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Dialog = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // backgroundPreview
  const [basicDialogPreview, setBasicDialogPreview] = useState(true);
  const [basicDialogCode, setBasicDialogCode] = useState(false);

  const handleBasicDialogPreview = () => {
    setBasicDialogPreview(true);
    setBasicDialogCode(false);
  };

  const handleBasicDialogCode = () => {
    setBasicDialogCode(true);
    setBasicDialogPreview(false);
  };

  // handle dialog message
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState("please select");

  const handleDialogAction = (e) => {
    let element = e.target;
    setDialogValue(element.innerText);
    setIsDialogOpen(false);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pl-[5rem] pt-[4.5rem]">
        <div>
          <ContentHeader text={"basic dialog"} id={"basic_dialog"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${basicDialogPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      basicDialogPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleBasicDialogPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      basicDialogCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleBasicDialogCode}
              >
                Code
              </button>
            </div>
            {basicDialogPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="flex items-center flex-col gap-5">
                    <p>Selected: {dialogValue}</p>

                    <button
                        className="px-6 py-2 border border-primary outline-none rounded text-primary"
                        onClick={() => setIsDialogOpen(true)}
                    >
                      Open Simple Dialog
                    </button>

                    {isDialogOpen && (
                        <div
                            className="bg-[#00000027] z-50 fixed flex items-center justify-center top-0 left-0 w-full h-screen">
                          <div
                              className="w-[300px] h-auto py-3 bg-secondary rounded"
                              onClick={handleDialogAction}
                          >
                            <div className="w-full flex items-end justify-end px-3">
                              <RxCross1
                                  className="text-[2rem] p-2 bg-[#3d3d3d18] text-[#222222] rounded-full cursor-pointer"
                                  onClick={() => setIsDialogOpen(false)}
                              />
                            </div>
                            <h1 className="text-[1.2rem] text-text font-[500] px-6 py-3">
                              Set backup account
                            </h1>
                            <h2
                                value="user@gmail.com"
                                className="flex items-center gap-3 text-[1rem] hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300"
                            >
                          <span>
                            <FaUser className="text-[2rem] text-[#1b703f] p-2 rounded-full bg-[#15a7522d]"/>
                          </span>
                              user@gmail.com
                            </h2>
                            <h2
                                value="user02@gmail.com "
                                className="flex items-center gap-3 text-[1rem] hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300"
                            >
                          <span>
                            <FaUser className="text-[2rem] text-[#1b703f] p-2 rounded-full bg-[#15a7522d]"/>
                          </span>
                              user02@gmail.com
                            </h2>
                            <h2
                                value="add account "
                                className="flex items-center gap-3 text-[1rem] hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300"
                            >
                          <span>
                            <FaPlus className="text-[2rem] text-[#303030] p-2 rounded-full bg-[#3d3d3d2c]"/>
                          </span>
                              Add Account
                            </h2>
                          </div>
                        </div>
                    )}
                  </div>
                </div>
            )}

            {basicDialogCode && (
                <Showcode
                    code='
import React,{ useState } from "react";

// icons
import { FaPlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const PopupDialog = () => {

  // handle dialog message
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState("please select");

  console.log(dialogValue);

  const handleDialogAction = (e) => {
    let element = e.target;
    setDialogValue(element.innerText);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex items-center flex-col gap-5">
      <p>Selected: {dialogValue}</p>

      <button
        className="px-6 py-2 border border-[#3B9DF8] outline-none rounded text-[#3B9DF8]"
        onClick={() => setIsDialogOpen(true)}>
        Open Simple Dialog
      </button>

      {isDialogOpen && (
        <div className="bg-[#00000027] z-50 fixed flex 
        items-center justify-center top-0 left-0 w-full h-screen">
          <div
            className="w-[300px] h-auto py-3 bg-[#ffff] rounded"
            onClick={handleDialogAction}>
            <div className="w-full flex items-end justify-end px-3">
              <RxCross1
                className="text-[2rem] p-2 bg-[#3d3d3d18] 
                text-[#222222] rounded-full cursor-pointer"
                onClick={() => setIsDialogOpen(false)}
              />
            </div>
            <h1 className="text-[1.2rem] text-[#424242] font-[500] px-6 py-3">
              Set backup account
            </h1>
            <h2
              value="user@gmail.com"
              className="flex items-center gap-3 text-[1rem] 
              hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300">
              <span>
                <FaUser className="text-[2rem] text-[#1b703f] p-2 rounded-full bg-[#15a7522d]" />
              </span>
              user@gmail.com
            </h2>
            <h2
              value="user02@gmail.com "
              className="flex items-center gap-3 text-[1rem] 
              hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300">
              <span>
                <FaUser className="text-[2rem] text-[#1b703f] p-2 rounded-full bg-[#15a7522d]" />
              </span>
              user02@gmail.com
            </h2>
            <h2
              value="add account "
              className="flex items-center gap-3 text-[1rem] 
              hover:bg-[#f1f1f1] py-3 px-6 cursor-pointer transition duration-300">
              <span>
                <FaPlus className="text-[2rem] text-[#303030] p-2 rounded-full bg-[#3d3d3d2c]" />
              </span>
              Add Account
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupDialog;
          '
                />
            )}
          </div>

          <OverviewFooter/>
        </div>

        <div className="flex flex-col gap-4 sticky top-20 right-0 w-[20%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#basic_dialog"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Basic Dialog
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Feedback - Dialog Message</title>
      </Helmet>
    </>
  );
};

export default Dialog;
