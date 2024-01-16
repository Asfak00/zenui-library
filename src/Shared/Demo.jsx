import React from "react";

const SocialPostSkeleton = () => {
  return (
    <div className="w-[450px] bg-secondary p-6 border border-border rounded animate-pulse">
      <div className="flex items-center">
        <div className="w-[20%]">
          <img className="w-[60px] h-[60px] rounded-full bg-border" />
        </div>

        <div className="flex flex-col gap-3 w-[80%]">
          <h1 className="w-[60%] h-[25px] bg-border"></h1>
          <p className="w-[80%] h-[15px] bg-border"></p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <p className="w-[90%] h-[15px] bg-border"></p>
        <p className="w-[80%] h-[15px] bg-border"></p>
      </div>
    </div>
  );
};

export default SocialPostSkeleton;
