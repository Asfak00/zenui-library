import React from "react";

// react icon
import {IoSearch} from "react-icons/io5";

const SearchInput = () => {

    return (
        <>
            {/* 1st search input */}
            <div className="w-full 1024px:w-[80%] relative">
                <input type='text' placeholder='Search...'
                       className='border border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md'/>

                <span
                    className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'><IoSearch
                    className='text-[1.3rem]  group-hover:text-gray-200'/></span>
            </div>

            {/* 2nd search input */}
            <div className="w-full 1024px:w-[80%] relative">
                <input type='text' placeholder='Search...'
                       className='border border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md'/>

                <span
                    className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200'>Search</span>
            </div>

            {/* 3rd search input */}
            <div
                className='bg-primary py-4 w-full 1024px:w-[80%] px-5 flex items-center justify-center rounded-full cursor-pointer relative'>
                <IoSearch className='text-[1.3rem] text-white ml-auto'/>

                <input type='text' placeholder='Search...'
                       className='border border-border absolute top-[2px] left-[3px] h-[90%] w-[85%] py-3 px-4 outline-none rounded-full'/>
            </div>
        </>
    );
};

export default SearchInput;