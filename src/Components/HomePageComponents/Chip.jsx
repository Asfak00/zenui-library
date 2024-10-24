import React from 'react';
import {MdDone} from "react-icons/md";

const ChipCard = () => {
    return (
        <div
            className="px-4 py-1.5 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
            <MdDone className="p-0.5 text-[1.1rem] rounded-full bg-[#18c964] text-[#fff]"/>
            ZenUI
        </div>
    );
};

export default ChipCard;
