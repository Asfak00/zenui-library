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
            className="px-4 py-2 bg-primary text-secondary rounded "
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
            } w-[35%] bg-secondary rounded-lg transition-all duration-300 mx-auto mt-8`}
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

                <a href="#" className="text-primary font-[400] text-[1rem]">
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
    </>
  );
};

export default DropDown;
