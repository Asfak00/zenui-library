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

  // handling all of modal actions
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

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
              onClick={handleAlertModalPreview}>
              Preview
            </button>
            <button
              className={`${
                alertModalCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleAlertModalCode}>
              Code
            </button>
          </div>
          {alertModalPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="w-full flex items-center justify-center">
                <button
                  className="px-4 py-2 bg-primary text-secondary rounded "
                  onClick={() => setModal1Open(true)}>
                  Open Modal
                </button>
              </div>
              <div
                className={`${
                  modal1Open ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
                } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}>
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
                      onClick={() => setModal1Open(false)}>
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 bg-primary rounded-lg text-secondary"
                      onClick={() => setModal1Open(false)}>
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
              onClick={handleSuccessModalPreview}>
              Preview
            </button>
            <button
              className={`${
                successModalCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleSuccessModalCode}>
              Code
            </button>
          </div>
          {successModalPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="w-full flex items-center justify-center">
                <button
                  className="px-4 py-2 bg-primary text-secondary rounded "
                  onClick={() => setModal2Open(true)}>
                  Open Modal
                </button>
              </div>
              <div
                className={`${
                  modal2Open ? " visible" : " invisible"
                } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}>
                <div
                  className={`${
                    modal2Open
                      ? " scale-[1] opacity-100"
                      : " scale-[0] opacity-0"
                  } w-[30%] bg-secondary rounded-lg p-4 transition-all duration-300`}>
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

        <OverviewFooter />
      </aside>

      <Helmet>
        <title>Navigation - Modal</title>
      </Helmet>
    </>
  );
};

export default Modals;
