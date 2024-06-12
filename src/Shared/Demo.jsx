import React, {useState} from "react";

const Pagination = () => {
    const [paginationNum, setPaginationNum] = useState(0);
    const totalPageNumber = 5;
    const updatePageNumber = (num) => {
        if (num > totalPageNumber - 1 || 0 > num) {
            return setPaginationNum(0);
        }
        setPaginationNum(num);
    };
  return (

      // small
      <div className="px-6 py-1 bg-[#3B9DF8] text-[#fff] rounded-full text-[0.9rem] font-[500]">
          ZenUI
      </div>

    // medium
    <div
        className="px-6 py-1 border border-[#3B9DF8] text-[#3B9DF8] rounded-full text-[0.9rem] font-[500]">
        ZenUI
    </div>

    // large
    <div className="px-6 py-1 bg-[#e9e9e9] text-[#9c9c9c] rounded-full text-[0.9rem] font-[500]">
        ZenUI
    </div>
)
    ;
};

export default Pagination;
