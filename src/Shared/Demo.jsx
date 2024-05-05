import { useState } from "react";

const AnimatedTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <ul className="flex items-center bg-[#59bdf738] rounded-full p-1 relative">
      <div
        className={`${
          (activeTab === 1 && "translate-x-[0px]") ||
          (activeTab === 2 && "translate-x-[90px]") ||
          (activeTab === 3 && "translate-x-[186px]") ||
          (activeTab === 4 && "!w-[100px] translate-x-[290px]")
        } !bg-primary absolute !text-[#fff] h-[85%] w-[95px] transition duration-700 rounded-full border-transparent cursor-pointer`}
      ></div>
      <li
        className={`${
          activeTab === 1 && " !text-[#fff]"
        } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
        onClick={() => setActiveTab(1)}
      >
        Home
      </li>
      <li
        className={`${
          activeTab === 2 && " !text-[#fff]"
        } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
        onClick={() => setActiveTab(2)}
      >
        About
      </li>
      <li
        className={`${
          activeTab === 3 && " !text-[#fff]"
        } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
        onClick={() => setActiveTab(3)}
      >
        Support
      </li>
      <li
        className={`${
          activeTab === 4 && " !text-[#fff]"
        } px-6 py-2  text-text z-20 transition duration-300 rounded-full border-transparent cursor-pointer`}
        onClick={() => setActiveTab(4)}
      >
        Contact
      </li>
    </ul>
  );
};

export default AnimatedTab;
