import React, {useState} from "react";

const ClickedTooltip = () => {

    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);
    const [topClicked, setTopClicked] = useState(false);
    const [bottomClicked, setBottomClicked] = useState(false);

    return (
        <div className="flex items-center gap-[10px] justify-center flex-wrap">

            {/*  left  */}
            <div className="relative">
                <button onClick={() => setLeftClicked(true)}
                        className="left_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800">Left
                </button>

                {/* tooltip */}
                <p className={`${leftClicked ? "opacity-100 z-[100] translate-x-0" : "opacity-0 z-[-1] translate-x-[20px]"} absolute top-[50%] transform translate-y-[-50%] left-[-130px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                    Left Tooltip

                    {/* arrow */}
                    <span
                        className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] right-[-3%]"></span>
                </p>
            </div>

            {/*  top  */}
            <div className="relative">
                <button onClick={() => setTopClicked(true)}
                        className="top_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800">Top
                </button>

                {/* tooltip */}
                <p className={`${topClicked ? "opacity-100 z-[100] translate-y-0" : "opacity-0 z-[-1] translate-y-[20px]"} absolute top-[-50px] transform translate-x-[-50%] left-[50%] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                    Top Tooltip

                    {/* arrow */}
                    <span
                        className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] bottom-[-10%]"></span>
                </p>
            </div>

            {/*  bottom  */}
            <div className="relative">
                <button onClick={() => setBottomClicked(true)}
                        className="bottom_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800">Bottom
                </button>

                {/* tooltip */}
                <p className={`${bottomClicked ? "opacity-100 z-[100] translate-y-0" : "opacity-0 z-[-1] translate-y-[-20px]"} absolute left-[50%] transform translate-x-[-50%] bottom-[-50px] w-max py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                    Bottom Tooltip

                    {/* arrow */}
                    <span
                        className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute left-[50%] transform translate-x-[-50%] top-[-13%]"></span>
                </p>
            </div>

            {/*  right  */}
            <div className="relative">
                <button onClick={() => setRightClicked(true)}
                        className="right_button py-2 px-6 border rounded-md border-gray-800 text-[1rem] font-[500] text-gray-800">Right
                </button>

                {/* tooltip */}
                <p className={`${rightClicked ? "opacity-100 z-[100] translate-x-0" : "opacity-0 z-[-1] translate-x-[-20px]"} absolute top-[50%] transform translate-y-[-50%] right-[-140px] w-fit py-[7px] px-[20px] rounded-md bg-gray-800 text-[0.9rem] text-white font-[400] transition-all duration-200`}>
                    Right Tooltip

                    {/* arrow */}
                    <span
                        className="w-[8px] h-[8px] bg-gray-800 rotate-[45deg] absolute top-[50%] transform translate-y-[-50%] left-[-3%]"></span>
                </p>
            </div>
        </div>
    );
};

export default ClickedTooltip;