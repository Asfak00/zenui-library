import React, { useState } from "react";

// react icon
import {RxCross1} from "react-icons/rx";

const PushNotification = () => {


    return (
        <>
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

                <RxCross1 className='text-[1.4rem] cursor-pointer rounded-full text-[#fc1900] bg-[#75120120] p-[5px]'
                          onClick={() => setCloseWithIcon(false)}/>
            </div>
        </>
    );
};

export default PushNotification;