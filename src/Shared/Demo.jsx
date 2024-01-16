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
      <div className=" p-3 flex items-center justify-between bg-[#edf7ed] rounded">
        <div className="flex items-center gap-3">
          <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
          <p className="text-[#418944] text-[1rem]">This is a success Alert.</p>
        </div>
        <HiOutlineXMark className="text-[#418944] text-[1.8rem] p-1 rounded-full hover:bg-[#41894317] cursor-pointer active:scale-[0.9]" />
      </div>

      <div className="p-3 flex items-center justify-between bg-[#e5f6fd] rounded">
        <div className="flex items-center gap-3">
          <MdOutlineInfo className="text-[#2d9dda] text-[1.5rem]" />
          <p className="text-[#2d9dda] text-[1rem]">This is a info Alert.</p>
        </div>
        <HiOutlineXMark className="text-[#2d9dda] text-[1.8rem] p-1 rounded-full hover:bg-[#2d9dda15] cursor-pointer active:scale-[0.9]" />
      </div>

      <div className="p-3 flex items-center justify-between bg-[#fdeded] rounded">
        <div className="flex items-center gap-3">
          <MdErrorOutline className="text-[#d74242] text-[1.5rem]" />
          <p className="text-[#d74242] text-[1rem]">This is a error Alert.</p>
        </div>
        <HiOutlineXMark className="text-[#d74242] text-[1.8rem] p-1 rounded-full hover:bg-[#d7424215] cursor-pointer active:scale-[0.9]" />
      </div>

      <div className="p-3  flex items-center justify-between bg-[#fff4e5] rounded">
        <div className="flex items-center gap-3">
          <IoWarningOutline className="text-[#f18831] text-[1.5rem]" />
          <p className="text-[#f18831] text-[1rem]">This is a warning Alert.</p>
        </div>
        <HiOutlineXMark className="text-[#f18831] text-[1.8rem] p-1 rounded-full hover:bg-[#f1873118] cursor-pointer active:scale-[0.9]" />
      </div>
    </div>
  );
};

export default AlertMessageWithAction;
