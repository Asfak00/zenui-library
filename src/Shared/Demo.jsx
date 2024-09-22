import React from "react";

// react icons
import {IoLocationOutline} from "react-icons/io5";
import {BsSend} from "react-icons/bs";

const TicketCard = () => {

    return (
        <div className="bg-blue-50 w-full justify-between rounded-xl flex ">

            {/* left side */}
            <div className="flex flex-col p-[15px] lg:p-[20px] gap-[18px]">
                <h1 className="text-[1rem] lg:text-[1.3rem] font-bold text-blue-800">Ticket Title</h1>
                <div className="flex items-center gap-[10px]">
                    <BsSend
                        className="p-[8px] lg:p-[10px] rounded-xl bg-blue-100 text-blue-800 text-[2rem] lg:text-[3rem]"/>
                    <div>
                        <h4 className="text-[0.8rem] lg:text-[1.1rem] font-[600] text-gray-800">Place Name</h4>
                        <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500">15-Dec-2020</p>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <IoLocationOutline
                        className="p-[8px] lg:p-[10px] rounded-xl bg-blue-100 text-blue-800 text-[2rem] lg:text-[3rem]"/>
                    <div>
                        <h4 className="text-[0.8rem] lg:text-[1.1rem] font-[600] text-gray-800">Location</h4>
                        <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500">15-Dec-2020</p>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div
                className="flex flex-col justify-between relative w-[45%] lg:w-[40%] items-center border-l-[2px] p-[15px] lg:p-[20px]  border-dashed border-gray-200">

                {/* top carve */}
                <div
                    className="w-[45px] h-[45px] rounded-full bg-white absolute top-[-15%] lg:top-[-13%] sm:left-[-13.5%] left-[-19%] lg:left-[-11.5%]"></div>

                <h4 className="text-[0.9rem] lg:text-[1.3rem] font-bold text-blue-800">9:00 AM</h4>

                <button
                    className="px-2 lg:px-4 py-1 text-[0.8rem] lg:text-[1.1rem] lg:py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600">Buy
                    Ticket
                </button>

                <p className="text-[0.9rem] lg:text-[1.1rem] text-gray-500">Price: <span
                    className="text-red-600 font-semibold">$70</span></p>

                {/* bottom carve */}
                <div
                    className="w-[45px] h-[45px] rounded-full bg-white absolute bottom-[-15%] lg:bottom-[-13%] left-[-18.5%] sm:left-[-13.5%] lg:left-[-11.5%]"></div>
            </div>
        </div>
    );
};

export default TicketCard;