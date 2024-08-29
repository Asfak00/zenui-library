import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import Showcode from "../../../../../Shared/ShowCode";

// icons
import { FiMenu } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import {IoCartOutline, IoResize} from "react-icons/io5";

const ResizableDiv = () => {
    // basicApp
    const [basicAppPreview, setBasicAppPreview] = useState(true);
    const [basicAppCode, setBasicAppCode] = useState(false);
    const [contentActiveTab, setContentActiveTab] = useState(0);

    const handleBasicAppPreview = () => {
        setBasicAppPreview(true);
        setBasicAppCode(false);
    };

    const handleBasicAppCode = () => {
        setBasicAppCode(true);
        setBasicAppPreview(false);
    };

    // appbarwithsearch
    const [appBarWithSearchPreview, setAppBarWithSearchPreview] = useState(true);
    const [appBarWithSearchCode, setAppBarWithSearchCode] = useState(false);

    const handleAppbarSearchPreview = () => {
        setAppBarWithSearchPreview(true);
        setAppBarWithSearchCode(false);
    };

    const handleAppbarSearchCode = () => {
        setAppBarWithSearchCode(true);
        setAppBarWithSearchPreview(false);
    };

    // appbarwithicons
    const [appbarWithIconsPreview, setAppbarWithIconsPreview] = useState(true);
    const [appbarWithIconsCode, setAppbarWithIconsCode] = useState(false);

    const handleAppbarWithIconsPreview = () => {
        setAppbarWithIconsPreview(true);
        setAppbarWithIconsCode(false);
    };

    const handleAppbarWithIconsCode = () => {
        setAppbarWithIconsCode(true);
        setAppbarWithIconsPreview(false);
    };

    const [isLogout, setIsLogout] = useState(false);

    const [size, setSize] = useState({ width: 300, height: 200 });

    const handleMouseDown = (e) => {
        const startX = e.clientX;
        const startY = e.clientY;
        const startWidth = size.width;
        const startHeight = size.height;

        const onMouseMove = (e) => {
            setSize({
                width: startWidth + e.clientX - startX,
                height: startHeight + e.clientY - startY,
            });
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    // x axis
    const [section1Width, setSection1Width] = useState(200);
    const [isResizing, setIsResizing] = useState(false);

    const minWidth = 30;
    const maxWidth = 200;
    const totalWidth = 400; // Total width for both sections combined

    const handleXMouseDown = (e) => {
        e.preventDefault();
        setIsResizing(true);

        const startX = e.clientX;
        const startWidth = section1Width;

        const onMouseMove = (e) => {
            if (isResizing) {
                const newWidth = Math.min(maxWidth, Math.max(minWidth, startWidth + e.clientX - startX));
                if (newWidth + (totalWidth - newWidth) <= totalWidth) {
                    setSection1Width(newWidth);
                }
            }
        };

        const onMouseUp = () => {
            setIsResizing(false);
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };



    return (
        <>
            <aside className="flex items-start gap-6 justify-between pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
                <div className="w-full 425px:w-[80%]">
                    <ContentHeader
                        id=""
                        text={"resizable card"}
                    />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is an app bar with profile login/logout component. Manage user sessions seamlessly with profile access.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${basicAppPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    basicAppPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleBasicAppPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    basicAppCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleBasicAppCode}
                            >
                                Code
                            </button>
                        </div>
                        {basicAppPreview && (
                            <div className="p-8 mb-4 flex flex-col items-center gap-5 justify-center">
                                <div
                                    className="relative border border-gray-300 p-4 bg-white"
                                    style={{width: `${size.width}px`, height: `${size.height}px`}}
                                >
                                    <IoResize className='rotate-[90deg] absolute bottom-0 right-0 text-[1.2rem] text-gray-500 cursor-e-resize bg-gray-100 p-1 rounded-bl-sm' onMouseDown={handleMouseDown}/>
                                    <h2 className="text-xl">Resizable Card</h2>
                                    <p>This card can be resized by dragging the bottom-right corner.</p>
                                </div>
                            </div>
                        )}

                        {basicAppCode && (
                            <Showcode
                                code='
import React, { useState } from "react";

// icons
import { FiMenu } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";


const AppbarWithUsericon = () => {
  const [isLogout, setIsLogout] = useState(false);
  return (
    <>
      <div className="p-4 bg-primary w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
          <h2 className="text-[1.3rem] text-secondary font-[600]">Logo</h2>
        </div>
        {!isLogout && (
          <FaRegCircleUser className="text-secondary text-[1.5rem] cursor-pointer" />
        )}
      </div>
      <div className="flex items-center gap-3">
        <div
          className={`${
            isLogout ? "!bg-[#b3b3b3]" : "!bg-[#83c2fd]"
          } cursor-pointer px-4 py-2 rounded-lg before:bg-transparent before:w-[20px] before:h-[20px] before:rounded-full before:absolute relative before:top-[-12%] before:right-[-15%] before:cursor-pointer after:bg-primary after:absolute after:top-[-12%] after:left-[-15%] after:cursor-pointer  after:h-[20px] after:w-[20px] after:rounded-full transition-all duration-300 ${
            isLogout && "after:!bg-transparent before:!bg-primary "
          }`}
          onClick={() => setIsLogout(!isLogout)}></div>
        <span
          className={`text-[1.2rem] font-[500] ${
            isLogout ? "text-text" : "text-primary"
          }`}>
          Logout
        </span>
      </div>
    </>
  );
};

export default AppbarWithUsericon;
              '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader
                            id="app_bar_with_search_bar"
                            text={"app bar with search bar"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is an app bar with menu and search bar for intuitive navigation and quick access.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${appBarWithSearchPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    appBarWithSearchPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleAppbarSearchPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    appBarWithSearchCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleAppbarSearchCode}
                            >
                                Code
                            </button>
                        </div>
                        {appBarWithSearchPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div className="flex">
                                    <div
                                        className="relative border border-gray-300 p-4 bg-white"
                                        style={{
                                            width: `${section1Width}px`,
                                            minWidth: `${minWidth}px`,
                                            maxWidth: `${maxWidth}px`,
                                            height: '200px'
                                        }}
                                    >
                                        <IoResize
                                            className="rotate-[90deg] absolute bottom-0 right-0 text-[1.2rem] text-gray-500 cursor-e-resize bg-gray-100 p-1 rounded-bl-sm"
                                            onMouseDown={handleXMouseDown}
                                        />
                                        <h2 className="text-xl">Section 1</h2>
                                        <p>This section can be resized horizontally.</p>
                                    </div>

                                    <div
                                        className="relative border border-gray-300 p-4 bg-white"
                                        style={{width: `${totalWidth - section1Width}px`, height: '200px'}}
                                    >
                                        <h2 className="text-xl">Section 2</h2>
                                        <p>This section adjusts based on the width of Section 1.</p>
                                    </div>
                                </div>

                            </div>
                        )}

                        {appBarWithSearchCode && (
                            <Showcode
                                code='
import React, { useState } from "react";

// icons
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


const AppbarWithSearchbar = () => {

  return (
    <>
      <div className="px-4 py-2 bg-primary w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
          <h2 className="text-[1.3rem] text-secondary font-[600]">Logo</h2>
        </div>
        <div className="relative">
          <input
            type="search"
            className="pl-10 py-2 bg-[#104c853d] border-none outline-none text-secondary placeholder:text-[#ffffffa8] "
            placeholder="Search..."
          />
          <CiSearch className=" absolute top-2 left-3 text-secondary text-[1.4rem]" />
        </div>
      </div>
    </>
  );
};

export default AppbarWithSearchbar;
            '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader
                            id="app_bar_with_search_and_icons"
                            text={"app bar with search and icons"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        This is an app bar with menu, cart, notification icons, and search bar for comprehensive navigation and interaction.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${appbarWithIconsPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    appbarWithIconsPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleAppbarWithIconsPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    appbarWithIconsCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleAppbarWithIconsCode}
                            >
                                Code
                            </button>
                        </div>
                        {appbarWithIconsPreview && (
                            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                                <div className="px-4 py-2 bg-primary w-full gap-2 flex-wrap flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <div className="flex items-center gap-4">
                                            <FiMenu className="text-secondary text-[1.7rem] cursor-pointer"/>
                                            <h2 className="text-[1.3rem] text-secondary font-[600]">
                                                Logo
                                            </h2>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="search"
                                                className="pl-10 py-2 bg-[#104c853d] w-full border-none outline-none text-secondary placeholder:text-[#ffffffa8] "
                                                placeholder="Search..."
                                            />
                                            <CiSearch className=" absolute top-2 left-3 text-secondary text-[1.4rem]"/>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <IoCartOutline className="text-[1.8rem] text-[#ffffff]"/>
                                            <div
                                                className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
                        <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                          10
                        </span>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <IoIosNotifications className="text-[1.8rem] text-[#ffffff]"/>
                                            <div
                                                className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
                        <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                          10
                        </span>
                                            </div>
                                        </div>
                                        <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]"/>
                                    </div>
                                </div>
                            </div>
                        )}

                        {appbarWithIconsCode && (
                            <Showcode
                                code='
import React, { useState } from "react";

// icons
import { FiMenu } from "react-icons/fi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const AppbarWithIcons = () => {

  return (
    <>
      <div className="px-4 py-2 bg-primary w-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4">
            <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
            <h2 className="text-[1.3rem] text-secondary font-[600]">Logo</h2>
          </div>
          <div className="relative">
            <input
              type="search"
              className="pl-10 py-2 bg-[#104c853d] border-none outline-none text-secondary placeholder:text-[#ffffffa8] "
              placeholder="Search..."
            />
            <CiSearch className=" absolute top-2 left-3 text-secondary text-[1.4rem]" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <IoCartOutline className="text-[1.8rem] text-[#ffffff]" />
            <div className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
              <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                10
              </span>
            </div>
          </div>

          <div className="relative">
            <IoIosNotifications className="text-[1.8rem] text-[#ffffff]" />
            <div className=" absolute top-[-30%] right-[-10%]  text-secondary min-w-[20px] min-h-[20px] text-center">
              <span className="text-[0.6rem] bg-[#cf0e0e] py-1 px-1 rounded-full w-full h-full">
                10
              </span>
            </div>
          </div>
          <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]" />
        </div>
      </div>
    </>
  );
};

export default AppbarWithIcons;
              '
                            />
                        )}
                    </div>

                    <OverviewFooter/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[40%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#app_bar_with_manu_&__profile"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4 capitalize`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        app bar with manu & profile
                    </a>
                    <a
                        href="#app_bar_with_search_bar"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l capitalize border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        app bar with search bar
                    </a>
                    <a
                        href="#app_bar_with_search_and_icons"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l capitalize border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        app bar with search and icons
                    </a>
                </div>
            </aside>
            <Helmet>
                <title>Surfaces - App Bar</title>
            </Helmet>
        </>
    );
};

export default ResizableDiv;
