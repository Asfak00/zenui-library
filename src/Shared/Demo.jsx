import React, { useState } from "react";

const DropDown = () => {
  const [isModalOpen, setisModalOpen] = useState(false);
  return (
    <>
      <div className="p-8 mb-4 flex items-center gap-5 justify-center">
        <div className="w-full flex items-center justify-center">
          <button
            className="px-4 py-2 bg-primary text-secondary rounded "
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
            } w-full  bg-secondary rounded-lg transition-all shadow-primary duration-300 mx-auto mt-8`}
          >
            <div className="flex justify-between w-full ga-5 px-8 py-12">
              <p className="text-[1.2rem] text-text w-[70%]">
                This site uses cookies and related technologies, as described in
                our privacy policy, for purposes that may include site
                operation, analytics, enhanced user experience, or advertising.
                You may choose to consent to our use of these technologies, or
                manage your own preferences.
              </p>

              <div className="flex items-end justify-end gap-4 flex-col w-[20%]">
                <button
                  className="py-2 w-full px-4 border border-[#d1d1d1] rounded-md outline-none bg-primary text-[#fff]"
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
