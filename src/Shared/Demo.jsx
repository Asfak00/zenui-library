import React from "react";

// icon
import { MdOutlineMail } from "react-icons/md";

const MessageBadge = () => {
  return (
    <>
      <div className="relative">
        <MdOutlineMail className="text-[2.7rem]" />
        <div className=" absolute top-[-10%] right-[-15%]  text-secondary min-w-[20px] min-h-[20px] text-center">
          <span className="text-[0.8rem] bg-primary py-1 px-1 rounded-full w-full h-full border-[2px] border-secondary">
            10
          </span>
        </div>
      </div>

      <div className="relative before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:top-[-2%] before:right-[-5%] before:border-[2px] before:border-secondary before:bg-primary ">
        <MdOutlineMail className="text-[2.7rem]" />
      </div>
    </>
  );
};

export default MessageBadge;
