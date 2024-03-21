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

  // handling all of modal actions
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
  const [modal5Open, setModal5Open] = useState(false);
  const [modal6Open, setModal6Open] = useState(false);

  return (
    <>
      <aside>
        <div className="p-4 flex gap-2 w-[80%] bg-[#d18f0011] border border-[#d18e00]  rounded mb-8">
          <p>
            <SlInfo className="text-[#d17d00] text-[1.2rem]" />
          </p>
          <p className="text-[#d18e00] text-[0.9rem]">
            Note, when you use the modal you will first connect it to the button
            in your project. And it's handled by the state here in "useState",
            so you'll get a good look at it. And here only the structure of the
            modal is given with animation you can design it as per your
            requirement.
          </p>
        </div>

        <ContentHeader text={"alert modal"} />

        <p className="w-[80%] text-text text-[1rem]">
          We see navigation tabs with borders on all sides like this on almost
          all websites. They are very simple.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                alertModalPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleAlertModalPreview}
            >
              Preview
            </button>
            <button
              className={`${
                alertModalCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
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
                  modal1Open ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
                } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
              >
                <div className={` w-[40%] bg-secondary rounded-lg p-4 `}>
                  <div className="w-full flex items-end justify-end">
                    <RxCross1
                      className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
                      onClick={() => setModal1Open(false)}
                    />
                  </div>

                  <div className="w-full pl-8">
                    <h2 className="text-[1.7rem] font-[500] text-[#202020]">
                      Are you sure about it?
                    </h2>
                    <p className="text-[1rem] text-[#525252]">
                      you can't undo this action
                    </p>
                  </div>
                  <div className="flex items-center gap-5 w-full justify-end mt-6">
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
        <div className=" w-[40%] bg-[#ffffff] rounded-lg p-4 ">
          <div className="w-full flex items-end justify-end">
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>

          <div className="w-full pl-8">
            <h2 className="text-[1.7rem] font-[500] text-[#202020]">
              Are you sure about it?
            </h2>
            <p className="text-[1rem] text-[#525252]">
              you cant undo this action
            </p>
          </div>
          <div className="flex items-center gap-5 w-full justify-end mt-6">
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
          <ContentHeader text={"success modal"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                successModalPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleSuccessModalPreview}
            >
              Preview
            </button>
            <button
              className={`${
                successModalCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
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
                  } w-[30%] bg-secondary rounded-lg p-4 transition-all duration-300`}
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
                    <IoCheckmarkDoneCircleOutline className="p-2 text-[6rem] text-[#2cac9f]" />

                    <p className="text-[1.5rem] text-gray-900 text-center mt-4">
                      Thank you for <br />
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
          } w-[30%] bg-[#ffffff] rounded-lg p-4 transition-all duration-300`}>
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
          <ContentHeader text={"Info modal"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                infoModalPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleInfoModalPreview}
            >
              Preview
            </button>
            <button
              className={`${
                infoModalCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
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
                  } w-[40%] bg-secondary rounded-lg transition-all duration-300 mx-auto mt-8`}
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
          } w-[40%] bg-[#ffffff] rounded-lg transition-all duration-300 mx-auto mt-8`}
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
          <ContentHeader text={"Permission modal"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                permissionModalPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handlePermissionModalPreview}
            >
              Preview
            </button>
            <button
              className={`${
                permissionModalCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
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
                  } w-[60%] bg-secondary rounded-lg transition-all duration-300 mx-auto mt-8`}
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
                      ensure a common set of data rights in the European Union.
                      It requires organizations to notify users as soon as
                      possible of high-risk data breaches that could personally
                      affect them.
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
            } w-[60%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
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
          <ContentHeader text={"Form modal"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                formModalPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleFormModalPreview}
            >
              Preview
            </button>
            <button
              className={`${
                formModalCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
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
                  } w-[35%] bg-secondary rounded-lg transition-all duration-300 mx-auto mt-8`}
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
            } w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
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
          <ContentHeader text={"Cookie modal"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                cookieModalPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleCookieModalPreview}
            >
              Preview
            </button>
            <button
              className={`${
                cookieModalCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
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
                  <div className="flex justify-between w-full ga-5 px-8 py-12">
                    <p className="text-[1.2rem] text-text w-[70%]">
                      This site uses cookies and related technologies, as
                      described in our privacy policy, for purposes that may
                      include site operation, analytics, enhanced user
                      experience, or advertising. You may choose to consent to
                      our use of these technologies, or manage your own
                      preferences.
                    </p>

                    <div className="flex items-end justify-end gap-4 flex-col w-[20%]">
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
            <div className="flex justify-between w-full ga-5 px-8 py-12">
              <p className="text-[1.2rem] text-[#424242] w-[70%]">
                This site uses cookies and related technologies, as described in
                our privacy policy, for purposes that may include site
                operation, analytics, enhanced user experience, or advertising.
                You may choose to consent to our use of these technologies, or
                manage your own preferences.
              </p>

              <div className="flex items-end justify-end gap-4 flex-col w-[20%]">
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

        <OverviewFooter />
      </aside>

      <Helmet>
        <title>Navigation - Modal</title>
      </Helmet>
    </>
  );
};

export default Modals;
