import React from "react";

const RoundedTooltip = () => {
  return (
    <div className=" relative group">
      <button className="px-3 py-2 border border-primary rounded text-primary ">
        Rounded Tooltip
      </button>

      <div className=" absolute bottom-[-90%] right-[6%] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
        <span className="text-[0.9rem] bg-[#8d8d8d] text-secondary rounded px-3 py-2 ">
          Rounded Tooltip
        </span>
      </div>
    </div>
  );
};

export default RoundedTooltip;
