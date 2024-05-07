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

const AlertMessage = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // backgroundPreview
  const [backgroundPreview, setBackgroundPreview] = useState(true);
  const [backgroundCode, setBackgroundCode] = useState(false);

  const handleBackgroundPreview = () => {
    setBackgroundPreview(true);
    setBackgroundCode(false);
  };

  const handleBackgroundCode = () => {
    setBackgroundCode(true);
    setBackgroundPreview(false);
  };

  // alertWithTitlePreview
  const [alertWithTitlePreview, setAlertWithTitlePreview] = useState(true);
  const [alertWithTitleCode, setAlertWithTitleCode] = useState(false);

  const handleAlertWithTitlePreview = () => {
    setAlertWithTitlePreview(true);
    setAlertWithTitleCode(false);
  };

  const handleAlertWithTitleCode = () => {
    setAlertWithTitleCode(true);
    setAlertWithTitlePreview(false);
  };

  // borderPreview
  const [borderPreview, setBorderPreview] = useState(true);
  const [borderCode, setBorderCode] = useState(false);

  const handleBorderPreview = () => {
    setBorderPreview(true);
    setBorderCode(false);
  };

  const handleBorderCode = () => {
    setBorderCode(true);
    setBorderPreview(false);
  };

  // product details skeleton
  const [alertActionPreview, setAlertActionPreview] = useState(true);
  const [alertActionCode, setAlertActionCode] = useState(false);

  const handleAlertActionPreview = () => {
    setAlertActionPreview(true);
    setAlertActionCode(false);
  };

  const handleAlertActionCode = () => {
    setAlertActionCode(true);
    setAlertActionPreview(false);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6">
        <div className="w-[80%]">
          <ContentHeader
            text={"alert message with background"}
            id={"alert_message_with_background"}
          />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  backgroundPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleBackgroundPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  backgroundCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleBackgroundCode}
              >
                Code
              </button>
            </div>
            {backgroundPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="w-full h-full flex flex-col gap-4">
                  <div className=" p-3 flex items-center gap-3 bg-[#edf7ed] rounded">
                    <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
                    <p className="text-[#418944] text-[1rem]">
                      This is a success Alert.
                    </p>
                  </div>

                  <div className="p-3 flex items-center gap-3 bg-[#e5f6fd] rounded">
                    <MdOutlineInfo className="text-[#2d9dda] text-[1.5rem]" />
                    <p className="text-[#2d9dda] text-[1rem]">
                      This is a info Alert.
                    </p>
                  </div>

                  <div className="p-3 flex items-center gap-3 bg-[#fdeded] rounded">
                    <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
                    <p className="text-[#d74242] text-[1rem]">
                      This is a error Alert.
                    </p>
                  </div>

                  <div className="p-3  flex items-center gap-3 bg-[#fff4e5] rounded">
                    <IoWarningOutline className="text-[#f18831] text-[1.5rem]" />
                    <p className="text-[#f18831] text-[1rem]">
                      This is a warning Alert.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {backgroundCode && (
              <Showcode
                code='
import React from "react";

// icons
import {
  IoCheckmarkDoneCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { MdErrorOutline, MdOutlineInfo } from "react-icons/md";

const AlertMessageWithBackground = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      // Success Alert
      <div className=" p-3 flex items-center gap-3 bg-[#edf7ed] rounded">
        <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
        <p className="text-[#418944] text-[1rem]">This is a success Alert.</p>
      </div>
      
      // Info Alert
      <div className="p-3 flex items-center gap-3 bg-[#e5f6fd] rounded">
        <MdOutlineInfo className="text-[#2d9dda] text-[1.5rem]" />
        <p className="text-[#2d9dda] text-[1rem]">This is a info Alert.</p>
      </div>

      // Error Alert
      <div className="p-3 flex items-center gap-3 bg-[#fdeded] rounded">
        <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
        <p className="text-[#d74242] text-[1rem]">This is a error Alert.</p>
      </div>

      // Warning Alert
      <div className="p-3  flex items-center gap-3 bg-[#fff4e5] rounded">
        <IoWarningOutline className="text-[#f18831] text-[1.5rem]" />
        <p className="text-[#f18831] text-[1rem]">This is a warning Alert.</p>
      </div>
    </div>
  );
};

export default AlertMessageWithBackground;
              '
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
              text={"alert message with title"}
              id={"alert_message_with_title"}
            />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the image gallery skeleton. Here the skeleton is created for
            the image, similar to the grid layout.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  alertWithTitlePreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleAlertWithTitlePreview}
              >
                Preview
              </button>
              <button
                className={`${
                  alertWithTitleCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleAlertWithTitleCode}
              >
                Code
              </button>
            </div>
            {alertWithTitlePreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <div className="w-full h-full flex flex-col gap-4">
                  <div className=" p-3 flex gap-3 bg-[#edf7ed] rounded">
                    <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#418944] text-[1.2rem] font-[500]">
                        Message Title
                      </h2>
                      <p className="text-[#418944] text-[1rem]">
                        This is a success Alert.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 flex gap-3 bg-[#e5f6fd] rounded">
                    <MdOutlineInfo className="text-[#2d9dda] text-[1.5rem]" />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#2d9dda] text-[1.2rem] font-[500]">
                        Message Title
                      </h2>
                      <p className="text-[#2d9dda] text-[1rem]">
                        This is a info Alert.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 flex gap-3 bg-[#fdeded] rounded">
                    <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#d74242] text-[1.2rem] font-[500]">
                        Message Title
                      </h2>
                      <p className="text-[#d74242] text-[1rem]">
                        This is a error Alert.
                      </p>
                    </div>
                  </div>

                  <div className="p-3  flex gap-3 bg-[#fff4e5] rounded">
                    <IoWarningOutline className="text-[#f18831] text-[1.5rem]" />
                    <div className="flex flex-col gap-1">
                      <h2 className="text-[#f18831] text-[1.2rem] font-[500]">
                        Message Title
                      </h2>
                      <p className="text-[#f18831] text-[1rem]">
                        This is a warning Alert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {alertWithTitleCode && (
              <Showcode
                code='
import React from "react";

// icons
import {
  IoCheckmarkDoneCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { MdErrorOutline, MdOutlineInfo } from "react-icons/md";

const AlertMessageWithTitle = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      // Success Alert
      <div className=" p-3 flex gap-3 bg-[#edf7ed] rounded">
        <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
        <div className="flex flex-col gap-1">
          <h2 className="text-[#418944] text-[1.2rem] font-[500]"> Message Title
          </h2>
          <p className="text-[#418944] text-[1rem]">This is a success Alert.</p>
        </div>
      </div>

      // Info Alert
      <div className="p-3 flex gap-3 bg-[#e5f6fd] rounded">
        <MdOutlineInfo className="text-[#2d9dda] text-[1.5rem]" />
        <div className="flex flex-col gap-1">
          <h2 className="text-[#2d9dda] text-[1.2rem] font-[500]"> Message Title
          </h2>
          <p className="text-[#2d9dda] text-[1rem]">This is a info Alert.</p>
        </div>
      </div>

      // Error Alert
      <div className="p-3 flex gap-3 bg-[#fdeded] rounded">
        <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
        <div className="flex flex-col gap-1">
          <h2 className="text-[#d74242] text-[1.2rem] font-[500]"> Message Title
          </h2>
          <p className="text-[#d74242] text-[1rem]">This is a error Alert.</p>
        </div>
      </div>

      // Warning Alert
      <div className="p-3  flex gap-3 bg-[#fff4e5] rounded">
        <IoWarningOutline className="text-[#f18831] text-[1.5rem]" />
        <div className="flex flex-col gap-1">
          <h2 className="text-[#f18831] text-[1.2rem] font-[500]"> Message Title
          </h2>
          <p className="text-[#f18831] text-[1rem]">This is a warning Alert.</p>
        </div>
      </div>
    </div>
  );
};

export default AlertMessageWithTitle;
              '
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
              text={"alert message with border"}
              id={"alert_message_with_border"}
            />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the skeleton of a social post, and you can also use it as a
            card. Here is image, name, bio and post details.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  borderPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleBorderPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  borderCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleBorderCode}
              >
                Code
              </button>
            </div>
            {borderPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <div className="w-full h-full flex flex-col gap-4">
                  <div className=" p-3 flex items-center gap-3 border-[2px] border-[#418944] rounded">
                    <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
                    <p className="text-[#418944] text-[1rem]">
                      This is a success Alert.
                    </p>
                  </div>

                  <div className="p-3 flex items-center gap-3 border-[2px] border-[#2d9dda] rounded">
                    <MdOutlineInfo className="text-[#2d9dda] text-[1.5rem]" />
                    <p className="text-[#2d9dda] text-[1rem]">
                      This is a info Alert.
                    </p>
                  </div>

                  <div className="p-3 flex items-center gap-3 border-[2px] border-[#d74242] rounded">
                    <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
                    <p className="text-[#d74242] text-[1rem]">
                      This is a error Alert.
                    </p>
                  </div>

                  <div className="p-3  flex items-center gap-3 border-[2px] border-[#f18831] rounded">
                    <IoWarningOutline className="text-[#f18831] text-[1.5rem]" />
                    <p className="text-[#f18831] text-[1rem]">
                      This is a warning Alert.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {borderCode && (
              <Showcode
                code='
import React from "react";

// icons
import {
  IoCheckmarkDoneCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { MdErrorOutline, MdOutlineInfo } from "react-icons/md";

const AlertMessageWithBorder = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      // Success Alert
      <div className=" p-3 flex items-center gap-3 border-[2px] border-[#418944] rounded">
        <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
        <p className="text-[#418944] text-[1rem]">This is a success Alert.</p>
      </div>

      // Info Alert
      <div className="p-3 flex items-center gap-3 border-[2px] border-[#2d9dda] rounded">
        <MdOutlineInfo className="text-[#2d9dda] text-[1.5rem]" />
        <p className="text-[#2d9dda] text-[1rem]">This is a info Alert.</p>
      </div>

      // Error Alert
      <div className="p-3 flex items-center gap-3 border-[2px] border-[#d74242] rounded">
        <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
        <p className="text-[#d74242] text-[1rem]">This is a error Alert.</p>
      </div>

      // Warning Alert
      <div className="p-3  flex items-center gap-3 border-[2px] border-[#f18831] rounded">
        <IoWarningOutline className="text-[#f18831] text-[1.5rem]" />
        <p className="text-[#f18831] text-[1rem]">This is a warning Alert.</p>
      </div>
    </div>
  );
};

export default AlertMessageWithBorder;
              '
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
              text={"message take action"}
              id={"message_take_action"}
            />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the skeleton of the product details page. You can use this
            skeleton on the product details page of any of your e-commerce
            websites. Each section is marked with comments within the code.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  alertActionPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleAlertActionPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  alertActionCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleAlertActionCode}
              >
                Code
              </button>
            </div>
            {alertActionPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <div className="w-full h-full flex flex-col gap-4">
                  <div className=" p-3 flex items-center justify-between bg-[#edf7ed] rounded">
                    <div className="flex items-center gap-3">
                      <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
                      <p className="text-[#418944] text-[1rem]">
                        This is a success Alert.
                      </p>
                    </div>
                    <HiOutlineXMark className="text-[#418944] text-[1.8rem] p-1 rounded-full hover:bg-[#41894317] cursor-pointer active:scale-[0.9]" />
                  </div>

                  <div className="p-3 flex items-center justify-between bg-[#e5f6fd] rounded">
                    <div className="flex items-center gap-3">
                      <MdOutlineInfo className="text-[#2d9dda] text-[1.5rem]" />
                      <p className="text-[#2d9dda] text-[1rem]">
                        This is a info Alert.
                      </p>
                    </div>
                    <HiOutlineXMark className="text-[#2d9dda] text-[1.8rem] p-1 rounded-full hover:bg-[#2d9dda15] cursor-pointer active:scale-[0.9]" />
                  </div>

                  <div className="p-3 flex items-center justify-between bg-[#fdeded] rounded">
                    <div className="flex items-center gap-3">
                      <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
                      <p className="text-[#d74242] text-[1rem]">
                        This is a error Alert.
                      </p>
                    </div>
                    <HiOutlineXMark className="text-[#d74242] text-[1.8rem] p-1 rounded-full hover:bg-[#d7424215] cursor-pointer active:scale-[0.9]" />
                  </div>

                  <div className="p-3  flex items-center justify-between bg-[#fff4e5] rounded">
                    <div className="flex items-center gap-3">
                      <IoWarningOutline className="text-[#f18831] text-[1.5rem]" />
                      <p className="text-[#f18831] text-[1rem]">
                        This is a warning Alert.
                      </p>
                    </div>
                    <HiOutlineXMark className="text-[#f18831] text-[1.8rem] p-1 rounded-full hover:bg-[#f1873118] cursor-pointer active:scale-[0.9]" />
                  </div>
                </div>
              </div>
            )}

            {alertActionCode && (
              <Showcode
                code='
import React from "react";

// icons
import {
  IoCheckmarkDoneCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { MdErrorOutline, MdOutlineInfo } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";

const AlertMessageWithAction = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      // Success Alert
      <div className=" p-3 flex items-center justify-between bg-[#edf7ed] rounded">
        <div className="flex items-center gap-3">
          <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
          <p className="text-[#418944] text-[1rem]">This is a success Alert.</p>
        </div>
        <HiOutlineXMark className="text-[#418944] text-[1.8rem] 
        p-1 rounded-full hover:bg-[#41894317] cursor-pointer active:scale-[0.9]" />
      </div>

      // Info Alert
      <div className="p-3 flex items-center justify-between bg-[#e5f6fd] rounded">
        <div className="flex items-center gap-3">
          <MdOutlineInfo className="text-[#2d9dda] text-[1.5rem]" />
          <p className="text-[#2d9dda] text-[1rem]">This is a info Alert.</p>
        </div>
        <HiOutlineXMark className="text-[#2d9dda] text-[1.8rem] 
        p-1 rounded-full hover:bg-[#2d9dda15] cursor-pointer active:scale-[0.9]" />
      </div>

      // Error Alert
      <div className="p-3 flex items-center justify-between bg-[#fdeded] rounded">
        <div className="flex items-center gap-3">
          <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
          <p className="text-[#d74242] text-[1rem]">This is a error Alert.</p>
        </div>
        <HiOutlineXMark className="text-[#d74242] text-[1.8rem] 
        p-1 rounded-full hover:bg-[#d7424215] cursor-pointer active:scale-[0.9]" />
      </div>

      // Warning Alert
      <div className="p-3  flex items-center justify-between bg-[#fff4e5] rounded">
        <div className="flex items-center gap-3">
          <IoWarningOutline className="text-[#f18831] text-[1.5rem]" />
          <p className="text-[#f18831] text-[1rem]">This is a warning Alert.</p>
        </div>
        <HiOutlineXMark className="text-[#f18831] text-[1.8rem] 
        p-1 rounded-full hover:bg-[#f1873118] cursor-pointer active:scale-[0.9]" />
      </div>
    </div>
  );
};

export default AlertMessageWithAction;
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
            href="#alert_message_with_background"
            className={`${
              contentActiveTab === 1 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(1)}
          >
            Alert Message With Background
          </a>
          <a
            href="#alert_message_with_title"
            className={`${
              contentActiveTab === 2 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(2)}
          >
            Alert Message With Title
          </a>
          <a
            href="#alert_message_with_border"
            className={`${
              contentActiveTab === 3 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(3)}
          >
            Alert Message With Border
          </a>
          <a
            href="#message_take_action"
            className={`${
              contentActiveTab === 4 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(4)}
          >
            Message Take Action
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Feedback - Alert Message</title>
      </Helmet>
    </>
  );
};

export default AlertMessage;
