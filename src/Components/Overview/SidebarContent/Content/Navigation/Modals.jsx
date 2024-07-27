import React, { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

// icons
import { RxCross1 } from "react-icons/rx";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { SlInfo } from "react-icons/sl";

const Modals = () => {
  // alertModal
  const [alertModalPreview, setAlertModalPreview] = useState(true);
  const [alertModalCode, setAlertModalCode] = useState(false);
  const [contentActiveTab, setContentActiveTab] = useState(0);

  const handleAlertModalPreview = () => {
    setAlertModalPreview(true);
    setAlertModalCode(false);
  };

  const handleAlertModalCode = () => {
    setAlertModalCode(true);
    setAlertModalPreview(false);
  };

  // successModal
  const [successModalPreview, setSuccessModalPreview] = useState(true);
  const [successModalCode, setSuccessModalCode] = useState(false);

  const handleSuccessModalPreview = () => {
    setSuccessModalPreview(true);
    setSuccessModalCode(false);
  };

  const handleSuccessModalCode = () => {
    setSuccessModalCode(true);
    setSuccessModalPreview(false);
  };

  // info modal
  const [infoModalPreview, setInfoModalPreview] = useState(true);
  const [infoModalCode, setInfoModalCode] = useState(false);

  const handleInfoModalPreview = () => {
    setInfoModalPreview(true);
    setInfoModalCode(false);
  };

  const handleInfoModalCode = () => {
    setInfoModalCode(true);
    setInfoModalPreview(false);
  };

  // permission modal
  const [permissionModalPreview, setPermissionModalPreview] = useState(true);
  const [permissionModalCode, setPermissionModalCode] = useState(false);

  const handlePermissionModalPreview = () => {
    setPermissionModalPreview(true);
    setPermissionModalCode(false);
  };

  const handlePermissionModalCode = () => {
    setPermissionModalCode(true);
    setPermissionModalPreview(false);
  };

  // form modal
  const [formModalPreview, setFormModalPreview] = useState(true);
  const [formModalCode, setFormModalCode] = useState(false);

  const handleFormModalPreview = () => {
    setFormModalPreview(true);
    setFormModalCode(false);
  };

  const handleFormModalCode = () => {
    setFormModalCode(true);
    setFormModalPreview(false);
  };

  // cookie modal
  const [cookieModalPreview, setCookieModalPreview] = useState(true);
  const [cookieModalCode, setCookieModalCode] = useState(false);

  const handleCookieModalPreview = () => {
    setCookieModalPreview(true);
    setCookieModalCode(false);
  };

  const handleCookieModalCode = () => {
    setCookieModalCode(true);
    setCookieModalPreview(false);
  };

  // fullScreen modal
  const [fullScreenModalPreview, setFullScreenModalPreview] = useState(true);
  const [fullScreenModalCode, setFullScreenModalCode] = useState(false);

  const handleFullScreenModalPreview = () => {
    setFullScreenModalPreview(true);
    setFullScreenModalCode(false);
  };

  const handleFullScreenModalCode = () => {
    setFullScreenModalCode(true);
    setFullScreenModalPreview(false);
  };

  // customize modal
  const [customizeModalPreview, setCustomizeModalPreview] = useState(true);
  const [customizeModalCode, setCustomizeModalCode] = useState(false);

  const handleCustomizeModalPreview = () => {
    setCustomizeModalPreview(true);
    setCustomizeModalCode(false);
  };

  const handleCustomizeModalCode = () => {
    setCustomizeModalCode(true);
    setCustomizeModalPreview(false);
  };

  // handling all of modal actions
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
  const [modal5Open, setModal5Open] = useState(false);
  const [modal6Open, setModal6Open] = useState(false);
  const [modal7Open, setModal7Open] = useState(false);
  const [modal8Open, setModal8Open] = useState(false);
  const [modal9Open, setModal9Open] = useState(false);

  const handleLeftSideModal = () => {
    setModal9Open(true)
    setModal8Open(false)
  }
  const handleRightSideModal = () => {
    setModal9Open(false)
    setModal8Open(true)
  }

  // outside click modal close
  document.addEventListener('click',(e)=> {
    if(!e.target.closest('.zenUIRightModal') && !e.target.closest('.zenUIRightModalButton')){
      setModal8Open(false)
      setModal9Open(false)
    }
  })

  return (
    <>
      <aside className="flex items-start gap-6 justify-between pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
        <div>
          <div className="p-4 flex gap-2 w-full 425px:w-[80%] bg-[#d18f0011] border border-[#d18e00]  rounded mb-8">
            <p>
              <SlInfo className="text-[#d17d00] text-[1.2rem]"/>
            </p>
            <p className="text-[#d18e00] text-[0.9rem]">
              Note, when you use the modal you will first connect it to the
              button in your project. And it's handled by the state here in
              "useState", so you'll get a good look at it. And here only the
              structure of the modal is given with animation you can design it
              as per your requirement.
            </p>
          </div>

          <ContentHeader id="alert_modal" text={"alert modal"}/>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an animated alert modal component. Notify with style using engaging animations for impact.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${alertModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      alertModalPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleAlertModalPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      alertModalCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleAlertModalCode}
              >
                Code
              </button>
            </div>
            {alertModalPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full flex items-center justify-center">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded "
                        onClick={() => setModal1Open(true)}
                    >
                      Open Modal
                    </button>
                  </div>
                  <div
                      className={`${
                          modal1Open
                              ? " scale-[1] opacity-100"
                              : " scale-[0] opacity-0"
                      } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
                  >
                    <div className={`w-[90%] 1024px:w-[40%] bg-secondary rounded-lg p-4 `}>
                      <div className="w-full flex items-end justify-end">
                        <RxCross1
                            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                            onClick={() => setModal1Open(false)}
                        />
                      </div>

                      <div className="w-full pl-3 1024px:pl-8">
                        <h2 className="text-[1.7rem] font-[500] text-[#202020]">
                          Are you sure about it?
                        </h2>
                        <p className="text-[1rem] text-[#525252]">
                          you can't undo this action
                        </p>
                      </div>
                      <div className="flex items-center gap-3 1024px:gap-5 w-full justify-end mt-6">
                        <button
                            className="px-4 py-2 border border-[#a8a8a8] rounded-lg text-[#585858]"
                            onClick={() => setModal1Open(false)}
                        >
                          Cancel
                        </button>
                        <button
                            className="px-4 py-2 bg-primary rounded-lg text-secondary"
                            onClick={() => setModal1Open(false)}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {alertModalCode && (
                <Showcode
                    code='
import React from "react";

// icons
import { RxCross1 } from "react-icons/rx";

const Modal = () => {
  return (
    <>
      <div
        className={`${
          modalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300 `}>
        <div className="w-[90%] lg:w-[40%] bg-[#ffffff] rounded-lg p-4 ">
          <div className="w-full flex items-end justify-end">
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>

          <div className="w-full pl-3 lg:pl-8">
            <h2 className="text-[1.7rem] font-[500] text-[#202020]">
              Are you sure about it?
            </h2>
            <p className="text-[1rem] text-[#525252]">
              you cant undo this action
            </p>
          </div>
          <div className="flex items-center gap-3 lg:gap-5 w-full justify-end mt-6">
            <button
              className="px-4 py-2 border border-[#a8a8a8] rounded-lg text-[#585858]"
              onClick={() => setModalOpen(false)}>
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-[#3B9DF8] rounded-lg text-[#ffffff]"
              onClick={() => setModalOpen(false)}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="success_modal" text={"success modal"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a success modal with animation component. Celebrate achievements with stylish animated feedback.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${successModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      successModalPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleSuccessModalPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      successModalCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleSuccessModalCode}
              >
                Code
              </button>
            </div>
            {successModalPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full flex items-center justify-center">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded "
                        onClick={() => setModal2Open(true)}
                    >
                      Open Modal
                    </button>
                  </div>
                  <div
                      className={`${
                          modal2Open ? " visible" : " invisible"
                      } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
                  >
                    <div
                        className={`${
                            modal2Open
                                ? " scale-[1] opacity-100"
                                : " scale-[0] opacity-0"
                        } w-[90%] 640px:w-[80%] 1024px:w-[30%] bg-secondary rounded-lg p-4 transition-all duration-300`}
                    >
                      <div className="w-full flex items-end justify-end">
                        <RxCross1
                            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                            onClick={() => setModal2Open(false)}
                        />
                      </div>

                      <div className="w-full flex items-center justify-center flex-col">
                        <h2 className="text-[#2cac9f] text-[2rem] font-[500]">
                          Success!
                        </h2>
                        <IoCheckmarkDoneCircleOutline className="p-2 text-[6rem] text-[#2cac9f]"/>

                        <p className="text-[1.5rem] text-gray-900 text-center mt-4">
                          Thank you for <br/>
                          <span className="font-[600] ">Subscribing</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {successModalCode && (
                <Showcode
                    code='
import React from "react";

// icons
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

const Modal = () => {
  return (
    <>
      <div
        className={`${
          modalOpen ? " visible" : " invisible"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}>
        <div
          className={`${
            modalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
          } w-[90%] md:w-[70%] lg:w-[30%] bg-[#ffffff] rounded-lg p-4 transition-all duration-300`}>
          <div className="w-full flex items-end justify-end">
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>

          <div className="w-full flex items-center justify-center flex-col">
            <h2 className="text-[#2cac9f] text-[2rem] font-[500]">Success!</h2>
            <IoCheckmarkDoneCircleOutline className="p-2 text-[6rem] text-[#2cac9f]" />

            <p className="text-[1.5rem] text-gray-900 text-center mt-4">
              Thank you for <br />
              <span className="font-[600] ">Subscribing</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
          '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="Info_modal" text={"Info modal"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an info modal with animation component. Present information dynamically with engaging animations for
            clarity.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${infoModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      infoModalPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleInfoModalPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      infoModalCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleInfoModalCode}
              >
                Code
              </button>
            </div>
            {infoModalPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full flex items-center justify-center">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded "
                        onClick={() => setModal3Open(true)}
                    >
                      Open Modal
                    </button>
                  </div>
                  <div
                      className={`${
                          modal3Open ? " visible" : " invisible"
                      } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300`}
                  >
                    <div
                        className={`${
                            modal3Open
                                ? " translate-y-[0px] opacity-100"
                                : " translate-y-[-200px] opacity-0"
                        } w-[80%] 640px:w-[90%] 1024px:w-[40%] bg-secondary rounded-lg transition-all duration-300 mx-auto mt-8`}
                    >
                      <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
                        <h1 className="text-[1.5rem] font-bold">Modal Header</h1>
                        <RxCross1
                            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                            onClick={() => setModal3Open(false)}
                        />
                      </div>

                      <div className="p-4 border-b border-[#d1d1d1]">
                        <p className="text-[1rem] text-text">
                          Woohoo, you are reading this text in a modal!
                        </p>
                      </div>

                      <div className="flex items-end justify-end gap-4 p-4 ">
                        <button
                            className="py-2 px-4 border border-[#d1d1d1] rounded-md outline-none text-[#353535]"
                            onClick={() => setModal3Open(false)}
                        >
                          Cancel
                        </button>
                        <button
                            className="py-2 px-4 border border-[#d1d1d1] rounded-md outline-none bg-primary text-[#fff]"
                            onClick={() => setModal3Open(false)}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {infoModalCode && (
                <Showcode
                    code='
import React, { useState } from "react";

// icons
import { RxCross1 } from "react-icons/rx";

const DropDown = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <div
        className={`${
          isModalOpen ? " visible" : " invisible"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300`}
      >
        <div
          className={`${
            isModalOpen
              ? " translate-y-[0px] opacity-100"
              : " translate-y-[-200px] opacity-0"
          } w-[90%] md:w-[80%] lg:w-[40%] bg-[#ffffff] rounded-lg transition-all duration-300 mx-auto mt-8`}
        >
          <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
            <h1 className="text-[1.5rem] font-bold">Modal Header</h1>
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setisModalOpen(false)}
            />
          </div>

          <div className="p-4 border-b border-[#d1d1d1]">
            <p className="text-[1rem] text-[#424242]">
              Woohoo, you are reading this text in a modal!
            </p>
          </div>

          <div className="flex items-end justify-end gap-4 p-4 ">
            <button
              className="py-2 px-4 border border-[#d1d1d1] rounded-md outline-none text-[#353535]"
              onClick={() => setisModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="py-2 px-4 border border-[#d1d1d1] rounded-md outline-none bg-[#3B9DF8] text-[#fff]"
              onClick={() => setisModalOpen(false)}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
          '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="Permission_modal" text={"Permission modal"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a permission modal with animation component. Manage permissions dynamically with engaging animations
            for clarity.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${permissionModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      permissionModalPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handlePermissionModalPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      permissionModalCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handlePermissionModalCode}
              >
                Code
              </button>
            </div>
            {permissionModalPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full flex items-center justify-center">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded "
                        onClick={() => setModal4Open(true)}
                    >
                      Open Modal
                    </button>
                  </div>
                  <div
                      className={`${
                          modal4Open ? " visible" : " invisible"
                      } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
                  >
                    <div
                        className={`${
                            modal4Open
                                ? " scale-[1] opacity-100"
                                : " scale-[0] opacity-0"
                        } w-[90%] 640px:w-[80%] 1024px:w-[60%] bg-secondary rounded-lg transition-all duration-300 mx-auto mt-8`}
                    >
                      <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
                        <h1 className="text-[1.5rem] font-bold">
                          Terms of Service
                        </h1>
                        <RxCross1
                            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                            onClick={() => setModal4Open(false)}
                        />
                      </div>

                      <div className="p-4 border-b border-[#d1d1d1]">
                        <p className="text-[1.2rem] text-text">
                          With less than a month to go before the European Union
                          enacts new consumer privacy laws for its citizens,
                          companies around the world are updating their terms of
                          service agreements to comply.
                        </p>

                        <p className="text-[1.2rem] text-text mt-8">
                          The European Union’s General Data Protection Regulation
                          (G.D.P.R.) goes into effect on May 25 and is meant to
                          ensure a common set of data rights in the European
                          Union. It requires organizations to notify users as soon
                          as possible of high-risk data breaches that could
                          personally affect them.
                        </p>
                      </div>

                      <div className="flex items-center gap-4 p-4 ">
                        <button
                            className="py-2 px-4 rounded-md outline-none bg-primary text-[#fff]"
                            onClick={() => setModal4Open(false)}
                        >
                          I Accept
                        </button>
                        <button
                            className="py-2 px-4 border border-[#d1d1d1] rounded-md outline-none text-[#353535]"
                            onClick={() => setModal4Open(false)}
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {permissionModalCode && (
                <Showcode
                    code='
import React, { useState } from "react";

// icons
import { RxCross1 } from "react-icons/rx";

const DropDown = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <div className="p-8 mb-4 flex items-center gap-5 justify-center">
        <div className="w-full flex items-center justify-center">
          <button
            className="px-4 py-2 bg-[#3B9DF8] text-[#fff] rounded "
            onClick={() => setisModalOpen(true)}
          >
            Open Modal
          </button>
        </div>
        <div
          className={`${
            isModalOpen ? " visible" : " invisible"
          } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
        >
          <div
            className={`${
              isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
            } w-[90%] md:w-[80%] lg:w-[60%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
          >
            <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
              <h1 className="text-[1.5rem] font-bold">Terms of Service</h1>
              <RxCross1
                className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                onClick={() => setisModalOpen(false)}
              />
            </div>

            <div className="p-4 border-b border-[#d1d1d1]">
              <p className="text-[1.2rem] text-text">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>

              <p className="text-[1.2rem] text-[#424242] mt-8">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            <div className="flex items-center gap-4 p-4 ">
              <button
                className="py-2 px-4 rounded-md outline-none bg-[#3B9DF8] text-[#fff]"
                onClick={() => setisModalOpen(false)}
              >
                I Accept
              </button>
              <button
                className="py-2 px-4 border border-[#d1d1d1] rounded-md outline-none text-[#353535]"
                onClick={() => setisModalOpen(false)}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown; 
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="Form_modal" text={"Form modal"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a form modal with animated input fields component. Complete forms dynamically with engaging
            animations for user interaction.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">

            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${formModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      formModalPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleFormModalPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      formModalCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleFormModalCode}
              >
                Code
              </button>
            </div>
            {formModalPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full flex items-center justify-center">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded "
                        onClick={() => setModal5Open(true)}
                    >
                      Open Modal
                    </button>
                  </div>
                  <div
                      className={`${
                          modal5Open ? " visible" : " invisible"
                      } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
                  >
                    <div
                        className={`${
                            modal5Open
                                ? " scale-[1] opacity-100"
                                : " scale-[0] opacity-0"
                        } w-[90%] 640px:w-[80%] 1024px:w-[35%] bg-secondary rounded-lg transition-all duration-300 mx-auto mt-8`}
                    >
                      <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
                        <h1 className="text-[1.5rem] font-bold">
                          Sign in to our platform
                        </h1>
                        <RxCross1
                            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                            onClick={() => setModal5Open(false)}
                        />
                      </div>

                      <form className="flex flex-col gap-5 p-4">
                        <div>
                          <label
                              htmlFor="email"
                              className="text-[1rem] font-[500] text-[#464646]"
                          >
                            Email
                          </label>
                          <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="zenuilibrary@gmail.com"
                              className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-primary"
                          />
                        </div>

                        <div>
                          <label
                              htmlFor="password"
                              className="text-[1rem] font-[500] text-[#464646]"
                          >
                            Password
                          </label>
                          <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="**********"
                              className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-primary"
                          />
                        </div>

                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="checkbox"
                                id="checkbox"
                                className="w-[17px] h-[17px]"
                            />
                            <label htmlFor="checkbox">Remember me</label>
                          </div>

                          <a
                              href="#"
                              className="text-primary font-[400] text-[1rem]"
                          >
                            Forget Password
                          </a>
                        </div>

                        <button
                            type="submit"
                            className="py-2 px-4 w-full bg-primary text-[#fff] rounded-md"
                        >
                          Sign In
                        </button>
                      </form>

                      <div className="flex items-center justify-center w-full pb-4">
                        <p className="text-[1rem] font-[400] text-[#464646c]">
                          Not have any account?{" "}
                          <a href="#" className="text-primary underline">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {formModalCode && (
                <Showcode
                    code='
import React, { useState } from "react";

// icons
import { RxCross1 } from "react-icons/rx";

const DropDown = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <div className="p-8 mb-4 flex items-center gap-5 justify-center">
        <div className="w-full flex items-center justify-center">
          <button
            className="px-4 py-2 bg-[#3B9DF8] text-[#fff] rounded "
            onClick={() => setisModalOpen(true)}
          >
            Open Modal
          </button>
        </div>
        <div
          className={`${
            isModalOpen ? " visible" : " invisible"
          } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
        >
          <div
            className={`${
              isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
            } w-[90%] md:w-[80%] lg:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
          >
            <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
              <h1 className="text-[1.5rem] font-bold">
                Sign in to our platform
              </h1>
              <RxCross1
                className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                onClick={() => setisModalOpen(false)}
              />
            </div>

            <form className="flex flex-col gap-5 p-4">
              <div>
                <label
                  htmlFor="email"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="zenuilibrary@gmail.com"
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-[1rem] font-[500] text-[#464646]"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="**********"
                  className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full focus:outline-none mt-1 focus:border-[#3B9DF8]"
                />
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className="w-[17px] h-[17px]"
                  />
                  <label htmlFor="checkbox">Remember me</label>
                </div>

                <a href="#" className="text-[#3B9DF8] font-[400] text-[1rem]">
                  Forget Password
                </a>
              </div>

              <button
                type="submit"
                className="py-2 px-4 w-full bg-[#3B9DF8] text-[#fff] rounded-md"
              >
                Sign In
              </button>
            </form>

            <div className="flex items-center justify-center w-full pb-4">
              <p className="text-[1rem] font-[400] text-[#464646c]">
                Not have any account?{" "}
                <a href="#" className="text-[#3B9DF8] underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="Cookie_modal" text={"Cookie modal"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a cookie consent modal for accepting cookies upon initial browser visit.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">

            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${cookieModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      cookieModalPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleCookieModalPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      cookieModalCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleCookieModalCode}
              >
                Code
              </button>
            </div>
            {cookieModalPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full flex items-center justify-center">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded "
                        onClick={() => setModal6Open(true)}
                    >
                      Open Modal
                    </button>
                  </div>
                  <div
                      className={`${
                          modal6Open ? " visible" : " invisible"
                      } w-full h-screen fixed flex items-end justify-end top-0 left-0 z-50   transition-all duration-300`}
                  >
                    <div
                        className={`${
                            modal6Open
                                ? " translate-y-[0px] opacity-100"
                                : " translate-y-[200px] opacity-0"
                        } w-full  bg-secondary rounded-lg transition-all shadow-primary duration-300 mx-auto mt-8`}
                    >
                      <div className="flex 640px::flex-row flex-col justify-between w-full gap-5 px-8 py-12">
                        <p className="text-[1.2rem] text-text w-full 640px:w-[70%]">
                          This site uses cookies and related technologies, as
                          described in our privacy policy, for purposes that may
                          include site operation, analytics, enhanced user
                          experience, or advertising. You may choose to consent to
                          our use of these technologies, or manage your own
                          preferences.
                        </p>

                        <div className="flex items-end justify-end gap-4 flex-col w-full 640px:w-[20%]">
                          <button
                              className="py-2 w-full px-4 border border-[#d1d1d1] rounded-md outline-none bg-primary text-[#fff]"
                              onClick={() => setModal6Open(false)}
                          >
                            Accept
                          </button>
                          <button
                              className="py-2 w-full px-4 border border-[#d1d1d1] rounded-md outline-none text-[#353535]"
                              onClick={() => setModal6Open(false)}
                          >
                            Dicline
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {cookieModalCode && (
                <Showcode
                    code='
import React, { useState } from "react";

const DropDown = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <div className="p-8 mb-4 flex items-center gap-5 justify-center">
        <div className="w-full flex items-center justify-center">
          <button
            className="px-4 py-2 bg-[#3B9DF8] text-[#fff] rounded "
            onClick={() => setisModalOpen(true)}
          >
            Open Modal
          </button>
        </div>
        <div
          className={`${
            isModalOpen ? " visible" : " invisible"
          } w-full h-screen fixed flex items-end justify-end top-0 left-0 z-50   transition-all duration-300`}
        >
          <div
            className={`${
              isModalOpen
                ? " translate-y-[0px] opacity-100"
                : " translate-y-[200px] opacity-0"
            } w-full  bg-[#fff] rounded-lg transition-all shadow-primary duration-300 mx-auto mt-8`}
          >
            <div className="flex justify-between md:flex-row flex-col w-full gap-5 px-8 py-12">
              <p className="text-[1.2rem] text-[#424242] w-full md:w-[70%]">
                This site uses cookies and related technologies, as described in
                our privacy policy, for purposes that may include site
                operation, analytics, enhanced user experience, or advertising.
                You may choose to consent to our use of these technologies, or
                manage your own preferences.
              </p>

              <div className="flex items-end justify-end gap-4 flex-col w-full md:w-[20%]">
                <button
                  className="py-2 w-full px-4 border border-[#d1d1d1] rounded-md outline-none bg-[#3B9DF8] text-[#fff]"
                  onClick={() => setisModalOpen(false)}
                >
                  Accept
                </button>
                <button
                  className="py-2 w-full px-4 border border-[#d1d1d1] rounded-md outline-none text-[#353535]"
                  onClick={() => setisModalOpen(false)}
                >
                  Dicline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="full_screen_modal" text={"full screen modal"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a full-screen modal with animation for immersive user interaction.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${fullScreenModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      fullScreenModalPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleFullScreenModalPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      fullScreenModalCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleFullScreenModalCode}
              >
                Code
              </button>
            </div>
            {fullScreenModalPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full flex items-center justify-center">
                    <button
                        className="px-4 py-2 bg-primary text-secondary rounded "
                        onClick={() => setModal7Open(true)}
                    >
                      Open Modal
                    </button>
                  </div>
                  <div
                      className={`${
                          modal7Open ? " visible" : " invisible"
                      } w-full h-screen fixed flex items-end justify-end top-0 left-0 z-50   transition-all duration-300`}
                  >
                    <div
                        className={`${
                            modal7Open
                                ? " translate-y-[0px] opacity-100"
                                : " translate-y-[200px] opacity-0"
                        } overflow-y-scroll w-full h-full bg-[#eceef6] rounded-lg transition-all shadow-primary duration-300 mx-auto mt-8`}
                    >
                      <div className="w-full flex items-end p-4 justify-end">
                        <RxCross1
                            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                            onClick={() => setModal7Open(false)}
                        />
                      </div>

                      <div className="flex items-start 1024px:flex-row flex-col justify-between gap-8">
                        <div className="bg-[#fff] min-h-screen rounded-md p-6 w-full 1024px:w-[70%]">
                          {/* steps */}
                          <div
                              className="flex items-center 1024px:flex-row flex-col justify-between w-full border-b border-[#d1d1d1]">
                            <div className="flex items-center gap-5">
                            <span className="text-[1rem] font-[500] text-primary border-b border-primary pb-3">
                              1.Cart
                            </span>
                              <span className="text-[1rem] font-[500] text-text pb-3">
                              2. Shipping & Payment
                            </span>
                              <span className="text-[1rem] font-[500] text-text pb-3">
                              3. Confimation
                            </span>
                            </div>

                            <a
                                href="#"
                                className="underline text-primary font-[500] pb-3"
                            >
                              Why is subscribing better?
                            </a>
                          </div>

                          {/* products */}
                          <div className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                            <div className="flex items-start gap-5">
                              <img
                                  src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?t=st=1711125399~exp=1711128999~hmac=012d9b565ec8c14efb41ddb92d6adaa9a7902802e6c884a3051fb6d449837afe&w=740"
                                  alt="Still life of skincare products"
                                  className="w-[90px] h-[60px] object-cover rounded-md"
                              />

                              <div className="">
                                <h2 className="text-[1.2rem] font-[600] text-primary">
                                  Still life of skincare products
                                </h2>
                                <p className="text-[1rem] font-[500] text-text">
                                  25 items
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-12">
                              <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                                $32 <span className="text-primary pl-1">$12</span>
                              </h3>

                              <RxCross1 className="text-[#6d6d6d]"/>
                            </div>
                          </div>
                          <div className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                            <div className="flex items-start gap-5">
                              <img
                                  src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg?t=st=1711125916~exp=1711129516~hmac=26762a7dd8eb383d3eccccb2cc232b163699fd9bf408804d4ad09f8ea127f639&w=740"
                                  alt="Levitating music headphones display"
                                  className="w-[90px] h-[60px] object-cover rounded-md"
                              />

                              <div className="">
                                <h2 className="text-[1.2rem] font-[600] text-primary">
                                  Still life of skincare products
                                </h2>
                                <p className="text-[1rem] font-[500] text-text">
                                  8 items
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-12">
                              <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                                $32 <span className="text-primary pl-1">$12</span>
                              </h3>

                              <RxCross1 className="text-[#6d6d6d]"/>
                            </div>
                          </div>
                          <div className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                            <div className="flex items-start gap-5">
                              <img
                                  src="https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg?t=st=1711125950~exp=1711129550~hmac=cdcb71b9735c22a4a1f74488397d71d0d32e20fed7c2ca003d8396db00961620&w=740"
                                  alt="Set of aloe vera cosmetic products"
                                  className="w-[90px] h-[60px] object-cover rounded-md"
                              />

                              <div className="">
                                <h2 className="text-[1.2rem] font-[600] text-primary">
                                  Still life of skincare products
                                </h2>
                                <p className="text-[1rem] font-[500] text-text">
                                  2 items
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-12">
                              <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                                $32 <span className="text-primary pl-1">$12</span>
                              </h3>

                              <RxCross1 className="text-[#6d6d6d]"/>
                            </div>
                          </div>
                        </div>

                        <div className="w-full 1024px:w-[30%] mr-8">
                          <div className="bg-[#fff] rounded-md p-6 ">
                            <h3 className="text-[1rem] text-primary font-[500] border-b border-[#d1d1d1] pb-4 text-center">
                              Order Summary
                            </h3>

                            <div className="flex flex-col gap-5 mt-4">
                              <div className="flex items-center justify-between w-full">
                                <h4 className="text-[1rem] font-[500] text-primary">
                                  Item Total
                                </h4>
                                <span className="text-text font-[500]">
                                $180.00
                              </span>
                              </div>

                              <div className="flex items-center justify-between w-full">
                                <h4 className="text-[1rem] font-[500] text-primary">
                                  Subcription savings (15% off)
                                </h4>
                                <span className="text-primary font-[500]">
                                - $18.00
                              </span>
                              </div>

                              <div className="flex items-center justify-between w-full">
                                <h4 className="text-[1rem] font-[500] text-primary">
                                  Shipping
                                </h4>
                                <span className="text-primary font-[500]">
                                free
                              </span>
                              </div>

                              <div className="flex items-center justify-between w-full border-t border-[#d1d1d1] pt-4">
                                <h4 className="text-[1rem] font-[500] text-text">
                                  Order Total
                                </h4>
                                <span className="text-text font-[500]">
                                $200.00
                              </span>
                              </div>
                            </div>
                          </div>
                          <button className="w-full py-2 px-6 mt-6 tracking-widest bg-primary rounded-md text-[#fff]">
                            Checkout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {fullScreenModalCode && (
                <Showcode
                    code='
import React, { useState } from "react";

// icons
import { RxCross1 } from "react-icons/rx";

const DropDown = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <div className="p-8 mb-4 flex items-center gap-5 justify-center">
        <div className="w-full flex items-center justify-cente  r">
          <button
            className="px-4 py-2 bg-[#3B9DF8] text-[#fff] rounded "
            onClick={() => setisModalOpen(true)}
          >
            Open Modal
          </button>
        </div>
        <div
          className={`${
            isModalOpen ? " visible" : " invisible"
          } overflow-y-scroll w-full h-screen fixed flex items-end justify-end top-0 left-0 z-50   transition-all duration-300`}
        >
          <div
            className={`${
              isModalOpen
                ? " translate-y-[0px] opacity-100"
                : " translate-y-[200px] opacity-0"
            } w-full h-full bg-[#eceef6] rounded-lg transition-all shadow-primary duration-300 mx-auto mt-8`}
          >
            <div className="w-full flex items-end p-4 justify-end">
              <RxCross1
                className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                onClick={() => setisModalOpen(false)}
              />
            </div>

            <div className="flex items-start justify-between gap-8">
              <div className="bg-[#fff] min-h-screen rounded-md p-6 w-full lg:w-[70%]">
                {/* steps */}
                <div className="flex items-center lg:flex-row flex-col justify-between w-full border-b border-[#d1d1d1]">
                  <div className="flex items-center gap-5">
                    <span className="text-[1rem] font-[500] text-[#3B9DF8] border-b border-[#3B9DF8] pb-3">
                      1.Cart
                    </span>
                    <span className="text-[1rem] font-[500] text-[#424242] pb-3">
                      2. Shipping & Payment
                    </span>
                    <span className="text-[1rem] font-[500] text-[#424242] pb-3">
                      3. Confimation
                    </span>
                  </div>

                  <a
                    href="#"
                    className="underline text-[#3B9DF8] font-[500] pb-3"
                  >
                    Why is subscribing better?
                  </a>
                </div>

                {/* products */}
                <div className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                  <div className="flex items-start gap-5">
                    <img
                      src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?t=st=1711125399~exp=1711128999~hmac=012d9b565ec8c14efb41ddb92d6adaa9a7902802e6c884a3051fb6d449837afe&w=740"
                      alt="Still life of skincare products"
                      className="w-[90px] h-[60px] object-cover rounded-md"
                    />

                    <div className="">
                      <h2 className="text-[1.2rem] font-[600] text-[#3B9DF8]">
                        Still life of skincare products
                      </h2>
                      <p className="text-[1rem] font-[500] text-[#424242]">
                        25 items
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-12">
                    <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                      $32 <span className="text-[#3B9DF8] pl-1">$12</span>
                    </h3>

                    <RxCross1 className="text-[#6d6d6d]" />
                  </div>
                </div>
                <div className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                  <div className="flex items-start gap-5">
                    <img
                      src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg?t=st=1711125916~exp=1711129516~hmac=26762a7dd8eb383d3eccccb2cc232b163699fd9bf408804d4ad09f8ea127f639&w=740"
                      alt="Levitating music headphones display"
                      className="w-[90px] h-[60px] object-cover rounded-md"
                    />

                    <div className="">
                      <h2 className="text-[1.2rem] font-[600] text-[#3B9DF8]">
                        Still life of skincare products
                      </h2>
                      <p className="text-[1rem] font-[500] text-[#424242]">
                        8 items
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-12">
                    <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                      $32 <span className="text-[#3B9DF8] pl-1">$12</span>
                    </h3>

                    <RxCross1 className="text-[#6d6d6d]" />
                  </div>
                </div>
                <div className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                  <div className="flex items-start gap-5">
                    <img
                      src="https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg?t=st=1711125950~exp=1711129550~hmac=cdcb71b9735c22a4a1f74488397d71d0d32e20fed7c2ca003d8396db00961620&w=740"
                      alt="Set of aloe vera cosmetic products"
                      className="w-[90px] h-[60px] object-cover rounded-md"
                    />

                    <div className="">
                      <h2 className="text-[1.2rem] font-[600] text-[#3B9DF8]">
                        Still life of skincare products
                      </h2>
                      <p className="text-[1rem] font-[500] text-[#424242]">
                        2 items
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-12">
                    <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                      $32 <span className="text-[#3B9DF8] pl-1">$12</span>
                    </h3>

                    <RxCross1 className="text-[#6d6d6d]" />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[30%] mr-8">
                <div className="bg-[#fff] rounded-md p-6 ">
                  <h3 className="text-[1rem] text-[#3B9DF8] font-[500] border-b border-[#d1d1d1] pb-4 text-center">
                    Order Summary
                  </h3>

                  <div className="flex flex-col gap-5 mt-4">
                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-[1rem] font-[500] text-[#3B9DF8]">
                        Item Total
                      </h4>
                      <span className="text-[#424242] font-[500]">$180.00</span>
                    </div>

                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-[1rem] font-[500] text-[#3B9DF8]">
                        Subcription savings (15% off)
                      </h4>
                      <span className="text-[#3B9DF8] font-[500]">- $18.00</span>
                    </div>

                    <div className="flex items-center justify-between w-full">
                      <h4 className="text-[1rem] font-[500] text-[#3B9DF8]">
                        Shipping
                      </h4>
                      <span className="text-[#3B9DF8] font-[500]">free</span>
                    </div>

                    <div className="flex items-center justify-between w-full border-t border-[#d1d1d1] pt-4">
                      <h4 className="text-[1rem] font-[500] text-[#424242]">
                        Order Total
                      </h4>
                      <span className="text-[#424242] font-[500]">$200.00</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2 px-6 mt-6 tracking-widest bg-[#3B9DF8] rounded-md text-[#fff]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="slide_modal" text={"slide Modal"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a full-screen modal with animation for immersive user interaction.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${customizeModalPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      customizeModalPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleCustomizeModalPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      customizeModalCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleCustomizeModalCode}
              >
                Code
              </button>
            </div>
            {customizeModalPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full flex items-center justify-center gap-[20px]">
                    <button
                        className="px-4 py-2 zenUIRightModalButton bg-primary text-secondary rounded "
                        onClick={handleLeftSideModal}
                    >
                      Left Modal
                    </button>
                    <button
                        className="px-4 py-2 zenUIRightModalButton bg-primary text-secondary rounded "
                        onClick={handleRightSideModal}
                    >
                      Right Modal
                    </button>

                    {/*  left side  */}
                    <div
                        className={`${
                            modal9Open ? " visible" : " invisible"
                        } w-full h-screen fixed bg-[rgb(0,0,0,0.2)] top-0 left-0 z-50  transition-all duration-300`}
                    >
                      <div
                          className={`${
                              modal9Open
                                  ? " translate-x-[0px] opacity-100"
                                  : " translate-x-[-200px] opacity-0"
                          } overflow-y-scroll zenUIRightModal w-[40%] h-screen bg-[#eceef6] transition-all duration-300`}
                      >
                        <div className="w-full flex items-end p-4 justify-end">
                          <RxCross1
                              className="p-2 w-fit   text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                              onClick={() => setModal9Open(false)}
                          />
                        </div>

                        <div className="flex items-start flex-col p-12 justify-between gap-8">
                          <div className="bg-[#fff] min-h-screen rounded-md p-6 w-full">
                            {/* steps */}
                            <div
                                className="flex items-center 1024px:flex-row flex-col justify-between w-full border-b border-[#d1d1d1]">
                              <div className="flex items-center gap-5">
                            <span className="text-[1rem] font-[500] text-primary border-b border-primary pb-3">
                              1.Cart
                            </span>
                                <span className="text-[1rem] font-[500] text-text pb-3">
                              2. Shipping & Payment
                            </span>
                                <span className="text-[1rem] font-[500] text-text pb-3">
                              3. Confimation
                            </span>
                              </div>

                              <a
                                  href="#"
                                  className="underline text-primary font-[500] pb-3"
                              >
                                Why is subscribing better?
                              </a>
                            </div>

                            {/* products */}
                            <div
                                className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                              <div className="flex items-start gap-5">
                                <img
                                    src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?t=st=1711125399~exp=1711128999~hmac=012d9b565ec8c14efb41ddb92d6adaa9a7902802e6c884a3051fb6d449837afe&w=740"
                                    alt="Still life of skincare products"
                                    className="w-[90px] h-[60px] object-cover rounded-md"
                                />

                                <div className="">
                                  <h2 className="text-[1.2rem] font-[600] text-primary">
                                    Still life of skincare products
                                  </h2>
                                  <p className="text-[1rem] font-[500] text-text">
                                    25 items
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-12">
                                <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                                  $32 <span className="text-primary pl-1">$12</span>
                                </h3>

                                <RxCross1 className="text-[#6d6d6d]"/>
                              </div>
                            </div>
                            <div
                                className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                              <div className="flex items-start gap-5">
                                <img
                                    src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg?t=st=1711125916~exp=1711129516~hmac=26762a7dd8eb383d3eccccb2cc232b163699fd9bf408804d4ad09f8ea127f639&w=740"
                                    alt="Levitating music headphones display"
                                    className="w-[90px] h-[60px] object-cover rounded-md"
                                />

                                <div className="">
                                  <h2 className="text-[1.2rem] font-[600] text-primary">
                                    Still life of skincare products
                                  </h2>
                                  <p className="text-[1rem] font-[500] text-text">
                                    8 items
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-12">
                                <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                                  $32 <span className="text-primary pl-1">$12</span>
                                </h3>

                                <RxCross1 className="text-[#6d6d6d]"/>
                              </div>
                            </div>
                            <div
                                className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                              <div className="flex items-start gap-5">
                                <img
                                    src="https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg?t=st=1711125950~exp=1711129550~hmac=cdcb71b9735c22a4a1f74488397d71d0d32e20fed7c2ca003d8396db00961620&w=740"
                                    alt="Set of aloe vera cosmetic products"
                                    className="w-[90px] h-[60px] object-cover rounded-md"
                                />

                                <div className="">
                                  <h2 className="text-[1.2rem] font-[600] text-primary">
                                    Still life of skincare products
                                  </h2>
                                  <p className="text-[1rem] font-[500] text-text">
                                    2 items
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-12">
                                <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                                  $32 <span className="text-primary pl-1">$12</span>
                                </h3>

                                <RxCross1 className="text-[#6d6d6d]"/>
                              </div>
                            </div>
                          </div>

                          <div className="w-full mr-8">
                            <div className="bg-[#fff] rounded-md p-6 ">
                              <h3 className="text-[1rem] text-primary font-[500] border-b border-[#d1d1d1] pb-4 text-center">
                                Order Summary
                              </h3>

                              <div className="flex flex-col gap-5 mt-4">
                                <div className="flex items-center justify-between w-full">
                                  <h4 className="text-[1rem] font-[500] text-primary">
                                    Item Total
                                  </h4>
                                  <span className="text-text font-[500]">
                                $180.00
                              </span>
                                </div>

                                <div className="flex items-center justify-between w-full">
                                  <h4 className="text-[1rem] font-[500] text-primary">
                                    Subcription savings (15% off)
                                  </h4>
                                  <span className="text-primary font-[500]">
                                - $18.00
                              </span>
                                </div>

                                <div className="flex items-center justify-between w-full">
                                  <h4 className="text-[1rem] font-[500] text-primary">
                                    Shipping
                                  </h4>
                                  <span className="text-primary font-[500]">
                                free
                              </span>
                                </div>

                                <div
                                    className="flex items-center justify-between w-full border-t border-[#d1d1d1] pt-4">
                                  <h4 className="text-[1rem] font-[500] text-text">
                                    Order Total
                                  </h4>
                                  <span className="text-text font-[500]">
                                $200.00
                              </span>
                                </div>
                              </div>
                            </div>
                            <button className="w-full py-2 px-6 mt-6 tracking-widest bg-primary rounded-md text-[#fff]">
                              Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*  right side  */}
                    <div
                        className={`${
                            modal8Open ? " visible" : " invisible"
                        } w-full h-screen fixed bg-[rgb(0,0,0,0.2)] top-0 left-0 z-50  transition-all duration-300`}
                    >
                      <div
                          className={`${
                              modal8Open
                                  ? " translate-x-[0px] opacity-100"
                                  : " translate-x-[200px] opacity-0"
                          } overflow-y-scroll zenUIRightModal w-[40%] h-screen bg-[#eceef6] transition-all duration-300 float-right`}
                      >
                        <div className="w-full flex items-end p-4 justify-end">
                          <RxCross1
                              className="p-2 w-fit   text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                              onClick={() => setModal8Open(false)}
                          />
                        </div>

                        <div className="flex items-start flex-col p-12 justify-between gap-8">
                          <div className="bg-[#fff] min-h-screen rounded-md p-6 w-full">
                            {/* steps */}
                            <div
                                className="flex items-center 1024px:flex-row flex-col justify-between w-full border-b border-[#d1d1d1]">
                              <div className="flex items-center gap-5">
                            <span className="text-[1rem] font-[500] text-primary border-b border-primary pb-3">
                              1.Cart
                            </span>
                                <span className="text-[1rem] font-[500] text-text pb-3">
                              2. Shipping & Payment
                            </span>
                                <span className="text-[1rem] font-[500] text-text pb-3">
                              3. Confimation
                            </span>
                              </div>

                              <a
                                  href="#"
                                  className="underline text-primary font-[500] pb-3"
                              >
                                Why is subscribing better?
                              </a>
                            </div>

                            {/* products */}
                            <div
                                className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                              <div className="flex items-start gap-5">
                                <img
                                    src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?t=st=1711125399~exp=1711128999~hmac=012d9b565ec8c14efb41ddb92d6adaa9a7902802e6c884a3051fb6d449837afe&w=740"
                                    alt="Still life of skincare products"
                                    className="w-[90px] h-[60px] object-cover rounded-md"
                                />

                                <div className="">
                                  <h2 className="text-[1.2rem] font-[600] text-primary">
                                    Still life of skincare products
                                  </h2>
                                  <p className="text-[1rem] font-[500] text-text">
                                    25 items
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-12">
                                <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                                  $32 <span className="text-primary pl-1">$12</span>
                                </h3>

                                <RxCross1 className="text-[#6d6d6d]"/>
                              </div>
                            </div>
                            <div
                                className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                              <div className="flex items-start gap-5">
                                <img
                                    src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg?t=st=1711125916~exp=1711129516~hmac=26762a7dd8eb383d3eccccb2cc232b163699fd9bf408804d4ad09f8ea127f639&w=740"
                                    alt="Levitating music headphones display"
                                    className="w-[90px] h-[60px] object-cover rounded-md"
                                />

                                <div className="">
                                  <h2 className="text-[1.2rem] font-[600] text-primary">
                                    Still life of skincare products
                                  </h2>
                                  <p className="text-[1rem] font-[500] text-text">
                                    8 items
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-12">
                                <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                                  $32 <span className="text-primary pl-1">$12</span>
                                </h3>

                                <RxCross1 className="text-[#6d6d6d]"/>
                              </div>
                            </div>
                            <div
                                className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                              <div className="flex items-start gap-5">
                                <img
                                    src="https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg?t=st=1711125950~exp=1711129550~hmac=cdcb71b9735c22a4a1f74488397d71d0d32e20fed7c2ca003d8396db00961620&w=740"
                                    alt="Set of aloe vera cosmetic products"
                                    className="w-[90px] h-[60px] object-cover rounded-md"
                                />

                                <div className="">
                                  <h2 className="text-[1.2rem] font-[600] text-primary">
                                    Still life of skincare products
                                  </h2>
                                  <p className="text-[1rem] font-[500] text-text">
                                    2 items
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-12">
                                <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                                  $32 <span className="text-primary pl-1">$12</span>
                                </h3>

                                <RxCross1 className="text-[#6d6d6d]"/>
                              </div>
                            </div>
                          </div>

                          <div className="w-full mr-8">
                            <div className="bg-[#fff] rounded-md p-6 ">
                              <h3 className="text-[1rem] text-primary font-[500] border-b border-[#d1d1d1] pb-4 text-center">
                                Order Summary
                              </h3>

                              <div className="flex flex-col gap-5 mt-4">
                                <div className="flex items-center justify-between w-full">
                                  <h4 className="text-[1rem] font-[500] text-primary">
                                    Item Total
                                  </h4>
                                  <span className="text-text font-[500]">
                                $180.00
                              </span>
                                </div>

                                <div className="flex items-center justify-between w-full">
                                  <h4 className="text-[1rem] font-[500] text-primary">
                                    Subcription savings (15% off)
                                  </h4>
                                  <span className="text-primary font-[500]">
                                - $18.00
                              </span>
                                </div>

                                <div className="flex items-center justify-between w-full">
                                  <h4 className="text-[1rem] font-[500] text-primary">
                                    Shipping
                                  </h4>
                                  <span className="text-primary font-[500]">
                                free
                              </span>
                                </div>

                                <div
                                    className="flex items-center justify-between w-full border-t border-[#d1d1d1] pt-4">
                                  <h4 className="text-[1rem] font-[500] text-text">
                                    Order Total
                                  </h4>
                                  <span className="text-text font-[500]">
                                $200.00
                              </span>
                                </div>
                              </div>
                            </div>
                            <button className="w-full py-2 px-6 mt-6 tracking-widest bg-primary rounded-md text-[#fff]">
                              Checkout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {customizeModalCode && (
                <Showcode
                    code='
import React, { useState } from "react";

// react icon
import {RxCross1} from "react-icons/rx";

const SlideModal = () => {
    const [leftSideModalOpen, setLeftSideModalOpen] = useState(false)
    const [rightSideModalOpen, setRightSideModalOpen] = useState(false)

    const handleLeftSideModal = () => {
        setLeftSideModalOpen(true)
        setRightSideModalOpen(false)
    }
    const handleRightSideModal = () => {
        setRightSideModalOpen(true)
        setLeftSideModalOpen(false)
    }

    // close modal in outside click
    document.addEventListener("click",(e)=> {
        if(!e.target.closest(".zenUIRightModal") && !e.target.closest(".zenUIRightModalButton")){
              setLeftSideModalOpen(false)
              setRightSideModalOpen(false)
            }
        })

return (
            <>
              {/*  buttons  */}
              <div className="flex items-center gap-[20px]">
                <button
                    className="px-4 py-2 zenUIRightModalButton bg-primary text-secondary rounded "
                    onClick={handleLeftSideModal}
                >
                  Left Modal
                </button>
                <button
                    className="px-4 py-2 zenUIRightModalButton bg-primary text-secondary rounded "
                    onClick={handleRightSideModal}
                >
                  Right Modal
                </button>
              </div>

              {/*  left side  */}
              <div
                  className={`${
                      leftSideModalOpen ? " visible" : " invisible"
                  } w-full h-screen fixed bg-[rgb(0,0,0,0.2)] top-0 left-0 z-50  transition-all duration-300`}
              >
                <div
                    className={`${
                        leftSideModalOpen
                            ? " translate-x-[0px] opacity-100"
                            : " translate-x-[-200px] opacity-0"
                    } overflow-y-scroll zenUIRightModal w-[40%] h-screen bg-[#eceef6] transition-all duration-300`}
                >
                  <div className="w-full flex items-end p-4 justify-end">
                    <RxCross1
                        className="p-2 w-fit   text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                        onClick={() => setLeftSideModalOpen(false)}
                    />
                  </div>

                  <div className="flex items-start flex-col p-12 justify-between gap-8">
                    <div className="bg-[#fff] min-h-screen rounded-md p-6 w-full">
                      {/* steps */}
                      <div
                          className="flex items-center 1024px:flex-row flex-col justify-between w-full border-b border-[#d1d1d1]">
                        <div className="flex items-center gap-5">
                            <span className="text-[1rem] font-[500] text-primary border-b border-primary pb-3">
                              1.Cart
                            </span>
                          <span className="text-[1rem] font-[500] text-text pb-3">
                              2. Shipping & Payment
                            </span>
                          <span className="text-[1rem] font-[500] text-text pb-3">
                              3. Confimation
                            </span>
                        </div>

                        <a
                            href="#"
                            className="underline text-primary font-[500] pb-3"
                        >
                          Why is subscribing better?
                        </a>
                      </div>

                      {/* products */}
                      <div
                          className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                        <div className="flex items-start gap-5">
                          <img
                              src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?t=st=1711125399~exp=1711128999~hmac=012d9b565ec8c14efb41ddb92d6adaa9a7902802e6c884a3051fb6d449837afe&w=740"
                              alt="Still life of skincare products"
                              className="w-[90px] h-[60px] object-cover rounded-md"
                          />

                          <div className="">
                            <h2 className="text-[1.2rem] font-[600] text-primary">
                              Still life of skincare products
                            </h2>
                            <p className="text-[1rem] font-[500] text-text">
                              25 items
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-12">
                          <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                            $32 <span className="text-primary pl-1">$12</span>
                          </h3>

                          <RxCross1 className="text-[#6d6d6d]"/>
                        </div>
                      </div>
                      <div
                          className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                        <div className="flex items-start gap-5">
                          <img
                              src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg?t=st=1711125916~exp=1711129516~hmac=26762a7dd8eb383d3eccccb2cc232b163699fd9bf408804d4ad09f8ea127f639&w=740"
                              alt="Levitating music headphones display"
                              className="w-[90px] h-[60px] object-cover rounded-md"
                          />

                          <div className="">
                            <h2 className="text-[1.2rem] font-[600] text-primary">
                              Still life of skincare products
                            </h2>
                            <p className="text-[1rem] font-[500] text-text">
                              8 items
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-12">
                          <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                            $32 <span className="text-primary pl-1">$12</span>
                          </h3>

                          <RxCross1 className="text-[#6d6d6d]"/>
                        </div>
                      </div>
                      <div
                          className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                        <div className="flex items-start gap-5">
                          <img
                              src="https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg?t=st=1711125950~exp=1711129550~hmac=cdcb71b9735c22a4a1f74488397d71d0d32e20fed7c2ca003d8396db00961620&w=740"
                              alt="Set of aloe vera cosmetic products"
                              className="w-[90px] h-[60px] object-cover rounded-md"
                          />

                          <div className="">
                            <h2 className="text-[1.2rem] font-[600] text-primary">
                              Still life of skincare products
                            </h2>
                            <p className="text-[1rem] font-[500] text-text">
                              2 items
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-12">
                          <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                            $32 <span className="text-primary pl-1">$12</span>
                          </h3>

                          <RxCross1 className="text-[#6d6d6d]"/>
                        </div>
                      </div>
                    </div>

                    <div className="w-full mr-8">
                      <div className="bg-[#fff] rounded-md p-6 ">
                        <h3 className="text-[1rem] text-primary font-[500] border-b border-[#d1d1d1] pb-4 text-center">
                          Order Summary
                        </h3>

                        <div className="flex flex-col gap-5 mt-4">
                          <div className="flex items-center justify-between w-full">
                            <h4 className="text-[1rem] font-[500] text-primary">
                              Item Total
                            </h4>
                            <span className="text-text font-[500]">
                                $180.00
                              </span>
                          </div>

                          <div className="flex items-center justify-between w-full">
                            <h4 className="text-[1rem] font-[500] text-primary">
                              Subcription savings (15% off)
                            </h4>
                            <span className="text-primary font-[500]">
                                - $18.00
                              </span>
                          </div>

                          <div className="flex items-center justify-between w-full">
                            <h4 className="text-[1rem] font-[500] text-primary">
                              Shipping
                            </h4>
                            <span className="text-primary font-[500]">
                                free
                              </span>
                          </div>

                          <div
                              className="flex items-center justify-between w-full border-t border-[#d1d1d1] pt-4">
                            <h4 className="text-[1rem] font-[500] text-text">
                              Order Total
                            </h4>
                            <span className="text-text font-[500]">
                                $200.00
                              </span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full py-2 px-6 mt-6 tracking-widest bg-primary rounded-md text-[#fff]">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/*  right modal  */}
              <div
                  className={`${
                      rightSideModalOpen ? " visible" : " invisible"
                  } w-full h-screen fixed bg-[rgb(0,0,0,0.2)] top-0 left-0 z-50  transition-all duration-300`}
              >
                <div
                    className={`${
                        rightSideModalOpen
                            ? " translate-x-[0px] opacity-100"
                            : " translate-x-[200px] opacity-0"
                    } overflow-y-scroll zenUIRightModal w-[40%] h-screen bg-[#eceef6] transition-all duration-300 float-right`}
                >
                  <div className="w-full flex items-end p-4 justify-end">
                    <RxCross1
                        className="p-2 w-fit   text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                        onClick={() => setRightSideModalOpen(false)}
                    />
                  </div>

                  <div className="flex items-start flex-col p-12 justify-between gap-8">
                    <div className="bg-[#fff] min-h-screen rounded-md p-6 w-full">
                      {/* steps */}
                      <div
                          className="flex items-center 1024px:flex-row flex-col justify-between w-full border-b border-[#d1d1d1]">
                        <div className="flex items-center gap-5">
                            <span className="text-[1rem] font-[500] text-primary border-b border-primary pb-3">
                              1.Cart
                            </span>
                          <span className="text-[1rem] font-[500] text-text pb-3">
                              2. Shipping & Payment
                            </span>
                          <span className="text-[1rem] font-[500] text-text pb-3">
                              3. Confimation
                            </span>
                        </div>

                        <a
                            href="#"
                            className="underline text-primary font-[500] pb-3"
                        >
                          Why is subscribing better?
                        </a>
                      </div>

                      {/* products */}
                      <div
                          className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                        <div className="flex items-start gap-5">
                          <img
                              src="https://img.freepik.com/free-photo/still-life-skincare-products_23-2149371284.jpg?t=st=1711125399~exp=1711128999~hmac=012d9b565ec8c14efb41ddb92d6adaa9a7902802e6c884a3051fb6d449837afe&w=740"
                              alt="Still life of skincare products"
                              className="w-[90px] h-[60px] object-cover rounded-md"
                          />

                          <div className="">
                            <h2 className="text-[1.2rem] font-[600] text-primary">
                              Still life of skincare products
                            </h2>
                            <p className="text-[1rem] font-[500] text-text">
                              25 items
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-12">
                          <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                            $32 <span className="text-primary pl-1">$12</span>
                          </h3>

                          <RxCross1 className="text-[#6d6d6d]"/>
                        </div>
                      </div>
                      <div
                          className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                        <div className="flex items-start gap-5">
                          <img
                              src="https://img.freepik.com/free-photo/levitating-music-headphones-display_23-2149817605.jpg?t=st=1711125916~exp=1711129516~hmac=26762a7dd8eb383d3eccccb2cc232b163699fd9bf408804d4ad09f8ea127f639&w=740"
                              alt="Levitating music headphones display"
                              className="w-[90px] h-[60px] object-cover rounded-md"
                          />

                          <div className="">
                            <h2 className="text-[1.2rem] font-[600] text-primary">
                              Still life of skincare products
                            </h2>
                            <p className="text-[1rem] font-[500] text-text">
                              8 items
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-12">
                          <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                            $32 <span className="text-primary pl-1">$12</span>
                          </h3>

                          <RxCross1 className="text-[#6d6d6d]"/>
                        </div>
                      </div>
                      <div
                          className="mt-12 flex items-start border-b border-[#d1d1d1] pb-6 justify-between w-full">
                        <div className="flex items-start gap-5">
                          <img
                              src="https://img.freepik.com/free-vector/set-aloe-vera-cosmetic-products_23-2147638007.jpg?t=st=1711125950~exp=1711129550~hmac=cdcb71b9735c22a4a1f74488397d71d0d32e20fed7c2ca003d8396db00961620&w=740"
                              alt="Set of aloe vera cosmetic products"
                              className="w-[90px] h-[60px] object-cover rounded-md"
                          />

                          <div className="">
                            <h2 className="text-[1.2rem] font-[600] text-primary">
                              Still life of skincare products
                            </h2>
                            <p className="text-[1rem] font-[500] text-text">
                              2 items
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-12">
                          <h3 className="text-[1.2rem] font-[600] text-[#6d6d6d]">
                            $32 <span className="text-primary pl-1">$12</span>
                          </h3>

                          <RxCross1 className="text-[#6d6d6d]"/>
                        </div>
                      </div>
                    </div>

                    <div className="w-full mr-8">
                      <div className="bg-[#fff] rounded-md p-6 ">
                        <h3 className="text-[1rem] text-primary font-[500] border-b border-[#d1d1d1] pb-4 text-center">
                          Order Summary
                        </h3>

                        <div className="flex flex-col gap-5 mt-4">
                          <div className="flex items-center justify-between w-full">
                            <h4 className="text-[1rem] font-[500] text-primary">
                              Item Total
                            </h4>
                            <span className="text-text font-[500]">
                                $180.00
                              </span>
                          </div>

                          <div className="flex items-center justify-between w-full">
                            <h4 className="text-[1rem] font-[500] text-primary">
                              Subcription savings (15% off)
                            </h4>
                            <span className="text-primary font-[500]">
                                - $18.00
                              </span>
                          </div>

                          <div className="flex items-center justify-between w-full">
                            <h4 className="text-[1rem] font-[500] text-primary">
                              Shipping
                            </h4>
                            <span className="text-primary font-[500]">
                                free
                              </span>
                          </div>

                          <div
                              className="flex items-center justify-between w-full border-t border-[#d1d1d1] pt-4">
                            <h4 className="text-[1rem] font-[500] text-text">
                              Order Total
                            </h4>
                            <span className="text-text font-[500]">
                                $200.00
                              </span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full py-2 px-6 mt-6 tracking-widest bg-primary rounded-md text-[#fff]">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
            );
            };

export default SlideModal;
                    '
                />
            )}
          </div>

          <OverviewFooter/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[70%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#alert_modal"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Alert Modal
          </a>
          <a
              href="#success_modal"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Success Modal
          </a>
          <a
              href="#Info_modal"
              className={`${
                  contentActiveTab === 3 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(3)}
          >
            Info Modal
          </a>

          <a
              href="#Permission_modal"
              className={`${
                  contentActiveTab === 4 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(4)}
          >
            Permission Modal
          </a>

          <a
              href="#Form_modal"
              className={`${
                  contentActiveTab === 5 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(5)}
          >
            Form Modal
          </a>

          <a
              href="#Cookie_modal"
              className={`${
                  contentActiveTab === 6 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(6)}
          >
            Cookie Modal
          </a>

          <a
              href="#full_screen_modal"
              className={`${
                  contentActiveTab === 7 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(7)}
          >
            Full Screen Modal
          </a>

          <a
              href="#slide_modal"
              className={`${
                  contentActiveTab === 8 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(8)}
          >
            Slide Modal
          </a>
        </div>
      </aside>

      <Helmet>
        <title>Navigation - Modal</title>
      </Helmet>
    </>
  );
};

export default Modals;
