import React, {useState} from 'react';

const TabCard = () => {
    const [boxButtonActive, setBoxButtonActive] = useState(1);

    return (
        <ul className="flex items-center bg-[#59bdf738] rounded-full p-1 w-[408px] relative">
            <div
                className={`${
                    (boxButtonActive === 1 && "translate-x-[0px]") ||
                    (boxButtonActive === 2 && "translate-x-[90px]") ||
                    (boxButtonActive === 3 && "translate-x-[179px] !w-[108px] 425px:!w-[95px] 425px:translate-x-[192px]") ||
                    (boxButtonActive === 4 &&
                        "!w-[105px] translate-x-[290px] 640px:translate-x-[295px]")
                } !bg-primary absolute !text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full border-transparent cursor-pointer`}
            ></div>
            <li
                className={`${
                    boxButtonActive === 1 && " !text-[#fff]"
                } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                onClick={() => setBoxButtonActive(1)}
            >
                Home
            </li>
            <li
                className={`${
                    boxButtonActive === 2 && " !text-[#fff]"
                } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                onClick={() => setBoxButtonActive(2)}
            >
                About
            </li>
            <li
                className={`${
                    boxButtonActive === 3 && " !text-[#fff]"
                } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                onClick={() => setBoxButtonActive(3)}
            >
                Support
            </li>
            <li
                className={`${
                    boxButtonActive === 4 && " !text-[#fff]"
                } px-6 py-2 hidden 425px:block text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
                onClick={() => setBoxButtonActive(4)}
            >
                Contact
            </li>
        </ul>
    );
};

export default TabCard;
