import React from "react";

// icons
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const PricingCard = () => {
  return (
    <div className="w-[60%] border border-border shadow-lg">
      <div className="w-full flex items-center justify-center flex-col p-6">
        <h2 className="text-[1.5rem] text-primary font-[600]">Standard</h2>
        <p className="text-text text-[1rem]">Ideal for growing businesses</p>

        <div className="flex mt-6 gap-1">
          <h2 className="font-[800] text-[4rem] leading-[4rem]">49.50</h2>
          <span className="text-[1.2rem] font-[500]">$</span>
        </div>
        <p className="text-text text-[0.9rem]">per month</p>

        <button className="px-12 py-2 bg-primary rounded-3xl text-secondary text-[1rem] my-6">
          Buy Now
        </button>
      </div>

      <h3 className="text-[1.2rem] font-[600] text-text mt-3 px-6">
        What you will get?
      </h3>
      <div className="flex gap-3 flex-col py-4 px-6">
        <p className="flex items-center gap-2 text-text text-[1rem]">
          <MdDone className="text-primary text-[1.5rem]" />5 Users
        </p>
        <p className="flex items-center gap-2 text-text text-[1rem]">
          <MdDone className="text-primary text-[1.5rem]" />
          50GB Storage
        </p>
        <p className="flex items-center gap-2 text-text text-[1rem]">
          <MdDone className="text-primary text-[1.5rem]" />
          Priority Email Support
        </p>
        <p className="flex items-center gap-3 text-text text-[1rem]">
          <RxCross1 className="text-[#e73939] text-[1.2rem]" />
          Unlimited Users
        </p>
        <p className="flex items-center gap-3 text-text text-[1rem]">
          <RxCross1 className="text-[#e73939] text-[1.2rem]" />
          100GB Storage
        </p>
        <p className="flex items-center gap-3 text-text text-[1rem]">
          <RxCross1 className="text-[#e73939] text-[1.2rem]" />
          24/7 Live Chat Support
        </p>
      </div>
      <div className="w-full h-[10px] bg-primary"></div>
    </div>
  );
};

export default PricingCard;
