import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";

// icons
import { RxCross1 } from "react-icons/rx";
import { SlInfo } from "react-icons/sl";

const Notification = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // borderNotification
  const [borderNotificationPreview, setBorderNotificationPreview] =
    useState(true);
  const [borderNotificationCode, setBorderNotificationCode] = useState(false);

  const handleBorderNotificationPreview = () => {
    setBorderNotificationPreview(true);
    setBorderNotificationCode(false);
  };

  const handleBorderNotificationCode = () => {
    setBorderNotificationCode(true);
    setBorderNotificationPreview(false);
  };

  // iconNotification
  const [iconNotificationPreview, setIconNotificationPreview] = useState(true);
  const [iconNotificationCode, setIconNotificationCode] = useState(false);

  const handleIconNotificationPreview = () => {
    setIconNotificationPreview(true);
    setIconNotificationCode(false);
  };

  const handleIconNotificationCode = () => {
    setIconNotificationCode(true);
    setIconNotificationPreview(false);
  };

  // customPosition
  const [customPositionPreview, setCustomPositionPreview] = useState(true);
  const [customPositionCode, setCustomPositionCode] = useState(false);

  const handleCustomPositionPreview = () => {
    setCustomPositionPreview(true);
    setCustomPositionCode(false);
  };

  const handleCustomPositionCode = () => {
    setCustomPositionCode(true);
    setCustomPositionPreview(false);
  };

  // Push notification
  const [pushNotificationPreview, setPushNotificationPreview] = useState(true);
  const [pushNotificationCode, setPushNotificationCode] = useState(false);

  const handlePushNotificationPreview = () => {
    setPushNotificationPreview(true);
    setPushNotificationCode(false);
  };

  const handlePushNotificationCode = () => {
    setPushNotificationCode(true);
    setPushNotificationPreview(false);
  };

  // click for show notification
  const [isClicked, setIsClicked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [isError, setIsError] = useState(false);
  const [autoClose, setAutoClose] = useState(false)
  const [closeWithIcon, setCloseWithIcon] = useState(false)

  const handleAutoClose = () => {
    setAutoClose(true)
    setTimeout(()=> {
      setAutoClose(false)
    }, 3000)
  }

  const handleCloseWithIcon = () => {
    setAutoClose(false)
    setCloseWithIcon(true)
  }

  // customize postioning
  const [top, setTop] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);
  const [bottom, setBottom] = useState(false);

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
        <div className="w-full 425px:w-[80%]">
          <div className="p-4 flex gap-2 w-full 425px:w-[80%] bg-[#d18f0011] border border-[#d18e00]  rounded mb-8">
            <p>
              <SlInfo className="text-[#d17d00] text-[1.2rem]"/>
            </p>
            <p className="text-[#d18e00] text-[0.9rem]">
              When you use the notification message from here in your project,
              be sure to note a few things like "z-index", "position", "onClick
              handler" etc. Because we're giving you the structure here, your
              job is to associate the notification with where you want to use
              it.
            </p>
          </div>

          <ContentHeader
              text={"border notification"}
              id={"border_notification"}
          />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a border notification component. Highlight important messages with distinct border styling for
            visibility.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${borderNotificationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      borderNotificationPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleBorderNotificationPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      borderNotificationCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleBorderNotificationCode}
              >
                Code
              </button>
            </div>
            {borderNotificationPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center ">
                  <div className="w-full overflow-hidden relative text-center">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded mt-24"
                        onClick={() => setIsClicked(true)}
                    >
                      Click me
                    </button>
                    <div
                        className={`${
                            isClicked ? "translate-x-[0px]" : " translate-x-[600px]"
                        } transition-all duration-300 py-2 px-6 border border-primary rounded text-center cursor-pointer absolute top-5 right-5`}
                        onClick={() => setIsClicked(false)}
                    >
                      Click me again for closing
                    </div>
                  </div>
                </div>
            )}

            {borderNotificationCode && (
                <Showcode
                    code='
import React from "react";

const Notification = () => {
  return (
    <>
      <div
        className={`${
          isClicked ? "translate-x-[0px]":"translate-x-[600px]"
        }  transition-all duration-300 py-2 px-6 border border-primary rounded text-center cursor-pointer absolute top-5 right-5`}
        onClick={() => setIsClicked(false)}>
        Click me again for closing
      </div>
    </>
  );
};

export default Notification;
            '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
                text={"cross icon notification"}
                id={"cross_icon_notification"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a notification with a close icon for easy dismissal on user interaction.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${iconNotificationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      iconNotificationPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleIconNotificationPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      iconNotificationCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleIconNotificationCode}
              >
                Code
              </button>
            </div>
            {iconNotificationPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center ">
                  <div className="overflow-hidden relative w-full text-center">
                    <div className="flex items-center flex-wrap gap-3 w-full justify-center mt-24 1024px:mt-0">
                      <button
                          className="px-4 py-2 bg-primary text-secondary rounded 1024px:mt-24"
                          onClick={() => setIsError(true)}
                      >
                        Error
                      </button>
                      <button
                          className="px-4 py-2 bg-primary text-secondary rounded 1024px:mt-24"
                          onClick={() => setIsInfo(true)}
                      >
                        Info
                      </button>
                      <button
                          className="px-4 py-2 bg-primary text-secondary rounded 1024px:mt-24"
                          onClick={() => setIsWarning(true)}
                      >
                        Warning
                      </button>
                      <button
                          className="px-4 py-2 bg-primary text-secondary rounded 1024px:mt-24"
                          onClick={() => setIsSuccess(true)}
                      >
                        Success
                      </button>
                    </div>
                    <div
                        className={`${
                            isInfo ? "translate-x-[0px]" : " translate-x-[600px]"
                        } transition-all duration-300 py-2 px-6 border-[#418944] text-[#418944] border rounded text-center absolute top-5 right-5 flex items-center justify-between gap-6`}
                    >
                      <p>Click me again for closing</p>{" "}
                      <RxCross1
                          className="text-[#418944] text-[1rem] cursor-pointer"
                          onClick={() => setIsInfo(false)}
                      />
                    </div>
                    <div
                        className={`${
                            isSuccess ? "translate-x-[0px]" : " translate-x-[600px]"
                        } transition-all duration-300 py-2 px-6  rounded text-center border border-[#2d9dda] text-[#2d9dda] absolute top-5 right-5 flex items-center justify-between gap-6`}
                    >
                      <p>Click me again for closing</p>{" "}
                      <RxCross1
                          className="text-[#2d9dda] text-[1rem] cursor-pointer"
                          onClick={() => setIsSuccess(false)}
                      />
                    </div>
                    <div
                        className={`${
                            isError ? "translate-x-[0px]" : "translate-x-[600px]"
                        }  transition-all duration-300 py-2 px-6  rounded text-center border border-[#d74242] text-[#d74242] absolute top-5 right-5 flex items-center justify-between gap-6`}
                    >
                      <p>Click me again for closing</p>{" "}
                      <RxCross1
                          className="text-[#ca3434] text-[1rem] cursor-pointer"
                          onClick={() => setIsError(false)}
                      />
                    </div>
                    <div
                        className={`${
                            isWarning ? "translate-x-[0px]" : "translate-x-[600px]"
                        }  transition-all duration-300 py-2 px-6  rounded text-center border border-[#f18831] text-[#f18831] absolute top-5 right-5 flex items-center justify-between gap-6`}
                    >
                      <p>Click me again for closing</p>{" "}
                      <RxCross1
                          className="text-[#f18831] text-[1rem] cursor-pointer"
                          onClick={() => setIsWarning(false)}
                      />
                    </div>
                  </div>
                </div>
            )}

            {iconNotificationCode && (
                <Showcode
                    code='
import React from "react";

const Notification = () => {
  return (
    <>
      {/* info notification */}
      <div
        className={`${
          isInfo ? "translate-x-[0px]":"translate-x-[600px]"
        }  transition-all duration-300 py-2 px-6 border-[#418944] text-[#418944] border rounded text-center absolute top-5 right-5 flex items-center justify-between gap-6`}>
        <p>Click me again for closing</p>{" "}
        <RxCross1
          className="text-[#418944] text-[1rem] cursor-pointer"
          onClick={() => setIsInfo(false)}
        />
      </div>

      {/* success notification */}
      <div
        className={`${
          isSuccess ? "translate-x-[0px]":"translate-x-[600px]"
        }  transition-all duration-300 py-2 px-6  rounded text-center border border-[#2d9dda] text-[#2d9dda] absolute top-5 right-5 flex items-center justify-between gap-6`}>
        <p>Click me again for closing</p>{" "}
        <RxCross1
          className="text-[#2d9dda] text-[1rem] cursor-pointer"
          onClick={() => setIsSuccess(false)}
        />
      </div>

      {/* error notification */}
      <div
        className={`${
          isError && "translate-x-[0px]":"translate-x-[600px] "
        } transition-all duration-300 py-2 px-6  rounded text-center border border-[#d74242] text-[#d74242] absolute top-5 right-5 flex items-center justify-between gap-6`}>
        <p>Click me again for closing</p>{" "}
        <RxCross1
          className="text-[#ca3434] text-[1rem] cursor-pointer"
          onClick={() => setIsError(false)}
        />
      </div>

      {/* warning notification */}
      <div
        className={`${
          isWarning ? "translate-x-[0px]":" translate-x-[600px
        } transition-all duration-300 py-2 px-6  rounded text-center border border-[#f18831] text-[#f18831] absolute top-5 right-5 flex items-center justify-between gap-6`}>
        <p>Click me again for closing</p>{" "}
        <RxCross1
          className="text-[#f18831] text-[1rem] cursor-pointer"
          onClick={() => setIsWarning(false)}
        />
      </div>
    </>
  );
};

export default Notification;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
                text={"customize postioning notification"}
                id={"customize_positioning_notification"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a notification with a close icon. Customize its position for optimal visibility and user
            interaction.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${customPositionPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      customPositionPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleCustomPositionPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      customPositionCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleCustomPositionCode}
              >
                Code
              </button>
            </div>
            {customPositionPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center ">
                  <div className=" overflow-hidden relative w-full text-center">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded mt-24"
                        onClick={() => setTop(true)}
                    >
                      Top
                    </button>
                    <div className="flex items-center gap-8 w-[70%] mx-auto justify-between">
                      <button
                          className="px-4 py-2 bg-primary text-secondary rounded mt-24"
                          onClick={() => setLeft(true)}
                      >
                        Left
                      </button>
                      <button
                          className="px-4 py-2 bg-primary text-secondary rounded mt-24"
                          onClick={() => setRight(true)}
                      >
                        Right
                      </button>
                    </div>
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded my-24"
                        onClick={() => setBottom(true)}
                    >
                      Bottom
                    </button>
                    <div
                        className={`${
                            top ? "translate-y-[0px]" : "translate-y-[-150px] "
                        } transition-all duration-300 py-2 px-6 border-[#418944] text-[#418944] border rounded text-center absolute top-5 left-[30%] flex items-center justify-between gap-6`}
                    >
                      <p>Click me again for closing</p>{" "}
                      <RxCross1
                          className="text-[#418944] text-[1rem] cursor-pointer"
                          onClick={() => setTop(false)}
                      />
                    </div>
                    <div
                        className={`${
                            left ? "translate-x-[0px]" : "translate-x-[-500px]"
                        }  transition-all duration-300 py-2 px-6  rounded text-center border border-[#2d9dda] text-[#2d9dda] absolute top-5 left-5 flex items-center justify-between gap-6`}
                    >
                      <p>Click me again for closing</p>{" "}
                      <RxCross1
                          className="text-[#2d9dda] text-[1rem] cursor-pointer"
                          onClick={() => setLeft(false)}
                      />
                    </div>
                    <div
                        className={`${
                            right ? "translate-x-[0px]" : "translate-x-[500px]"
                        }  transition-all duration-300 py-2 px-6  rounded text-center border border-[#d74242] text-[#d74242] absolute top-5 right-5 flex items-center justify-between gap-6`}
                    >
                      <p>Click me again for closing</p>{" "}
                      <RxCross1
                          className="text-[#ca3434] text-[1rem] cursor-pointer"
                          onClick={() => setRight(false)}
                      />
                    </div>
                    <div
                        className={`${
                            bottom ? "translate-y-[0px]" : "translate-y-[150px]"
                        }  transition-all duration-300 py-2 px-6  rounded text-center border border-[#f18831] text-[#f18831] absolute bottom-0 left-[30%] flex items-center justify-between gap-6`}
                    >
                      <p>Click me again for closing</p>{" "}
                      <RxCross1
                          className="text-[#f18831] text-[1rem] cursor-pointer"
                          onClick={() => setBottom(false)}
                      />
                    </div>
                  </div>
                </div>
            )}

            {customPositionCode && (
                <Showcode
                    code='
import React from "react";

const Notification = () => {
  return (
    <>
      {/* top notification */}
      <div
        className={`${
          top ? "translate-y-[0px]" : "translate-y-[-150px] "
        } transition-all duration-300 py-2 px-6 border-[#418944] text-[#418944] border rounded text-center absolute top-5 left-[30%] flex items-center justify-between gap-6`}>
        <p>Click me again for closing</p>{" "}
        <RxCross1
          className="text-[#418944] text-[1rem] cursor-pointer"
          onClick={() => setTop(false)}
        />
      </div>

      {/* left notification */}
      <div
        className={`${
          left ? "translate-x-[0px]" : "translate-x-[-500px]"
        }  transition-all duration-300 py-2 px-6  rounded text-center border border-[#2d9dda] text-[#2d9dda] absolute top-5 left-5 flex items-center justify-between gap-6`}>
        <p>Click me again for closing</p>{" "}
        <RxCross1
          className="text-[#2d9dda] text-[1rem] cursor-pointer"
          onClick={() => setLeft(false)}
        />
      </div>

      {/* right notification */}
      <div
        className={`${
          right ? "translate-x-[0px]" : "translate-x-[500px]"
        }  transition-all duration-300 py-2 px-6  rounded text-center border border-[#d74242] text-[#d74242] absolute top-5 right-5 flex items-center justify-between gap-6`}>
        <p>Click me again for closing</p>{" "}
        <RxCross1
          className="text-[#ca3434] text-[1rem] cursor-pointer"
          onClick={() => setRight(false)}
        />
      </div>

      {/* bottom notification */}
      <div
        className={`${
          bottom ? "translate-y-[0px]" : "translate-y-[150px]"
        }  transition-all duration-300 py-2 px-6  rounded text-center border border-[#f18831] text-[#f18831] absolute bottom-0 left-[30%] flex items-center justify-between gap-6`}>
        <p>Click me again for closing</p>{" "}
        <RxCross1
          className="text-[#f18831] text-[1rem] cursor-pointer"
          onClick={() => setBottom(false)}
        />
      </div>
    </>
  );
};

export default Notification;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
                text={"push notification"}
                id={"push_notification"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a notification with a close icon. Customize its position for optimal visibility and user
            interaction.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${pushNotificationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      pushNotificationPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handlePushNotificationPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      pushNotificationCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handlePushNotificationCode}
              >
                Code
              </button>
            </div>
            {pushNotificationPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center ">
                  <div className=" w-full text-center flex justify-center gap-[20px]">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded"
                        onClick={handleAutoClose}
                    >
                      Auto Close
                    </button>

                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded"
                        onClick={handleCloseWithIcon}
                    >
                      Close With Click
                    </button>
                  </div>

                  <div
                      className={` ${autoClose ? "translate-y-0" : "translate-y-[100px]"} transition-all duration-300 px-8 py-4 rounded-md bg-primary fixed bottom-[20px] right-[20px] z-30 text-white`}>
                    ZenUI Push Notification
                  </div>

                  <div
                      className={` ${closeWithIcon ? "translate-y-0" : "translate-y-[100px]"} transition-all duration-300  rounded-md bg-primary fixed bottom-[20px] right-[20px] z-30 text-white flex items-center justify-between px-5 py-4 gap-[10px]`}>

                    <p className="">
                      ZenUI Push Notification
                    </p>

                    <RxCross1 className='text-[1.4rem] cursor-pointer rounded-full text-[#fc1900] bg-[#75120120] p-[5px]' onClick={()=> setCloseWithIcon(false)}/>
                  </div>
                </div>
            )}

            {pushNotificationCode && (
                <Showcode
                    code='
              '
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
              href="#border_notification"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Border Notification
          </a>
          <a
              href="#cross_icon_notification"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Cross Icon Notification
          </a>
          <a
              href="#customize_positioning_notification"
              className={`${
                  contentActiveTab === 3 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(3)}
          >
            Customize Postioning Notification
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Data Display - Notification</title>
      </Helmet>
    </>
  );
};

export default Notification;
