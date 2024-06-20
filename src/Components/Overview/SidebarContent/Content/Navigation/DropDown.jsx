import React, { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

// icons
import { FaRegCircleUser } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // listDropdown
  const [listDropdownPreview, setListDropdownPreview] = useState(true);
  const [listDropdownCode, setListDropdownCode] = useState(false);

  const handleListDropdownPreview = () => {
    setListDropdownPreview(true);
    setListDropdownCode(false);
  };

  const handleListDropdownCode = () => {
    setListDropdownCode(true);
    setListDropdownPreview(false);
  };

  // gridDropdown
  const [gridDropdownPreview, setGridDropdownPreview] = useState(true);
  const [gridDropdownCode, setGridDropdownCode] = useState(false);

  const handleGridDropdownPreview = () => {
    setGridDropdownPreview(true);
    setGridDropdownCode(false);
  };

  const handleGridDropdownCode = () => {
    setGridDropdownCode(true);
    setGridDropdownPreview(false);
  };

  // dropdownWithPicture
  const [dropdownWithPicturePreview, setDropdownWithPicturePreview] =
    useState(true);
  const [dropdownWithPictureCode, setDropdownWithPictureCode] = useState(false);

  const handleDropdownWithPicturePreview = () => {
    setDropdownWithPicturePreview(true);
    setDropdownWithPictureCode(false);
  };

  const handleDropdownWithPictureCode = () => {
    setDropdownWithPictureCode(true);
    setDropdownWithPicturePreview(false);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:pl-[5rem] 1024px:pt-[4.5rem]">
        <div>
          <ContentHeader text={"list dropdown"} id={"list_dropdown"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a list dropdown component. Select items from a neatly organized and easily accessible list.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${listDropdownPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      listDropdownPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleListDropdownPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      listDropdownCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleListDropdownCode}
              >
                Code
              </button>
            </div>
            {listDropdownPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <nav className="w-full px-4 flex items-center justify-between bg-primary relative mb-24">
                    <h2 className="text-[#ffffff] font-[600] text-[1.3rem]">
                      Logo
                    </h2>
                    <ul className="flex items-center gap-5 text-secondary">
                      <li className=" cursor-pointer py-2">Home</li>
                      <li className="cursor-pointer group py-2 flex items-center gap-1">
                        Categories
                        <MdKeyboardArrowDown
                            className="text-[1.5rem] group-hover:rotate-[180deg] transition-all duration-300"/>
                        <div
                            className=" hidden group-hover:block absolute top-[100%] left-[50%] bg-secondary shadow-2xl p-4">
                          <ul className="text-[#000]">
                            <li className="hover:text-primary hover:tracking-widest transition-all duration-300">
                              item 1
                            </li>
                            <li className="hover:text-primary hover:tracking-widest transition-all duration-300">
                              item 2
                            </li>
                            <li className="hover:text-primary hover:tracking-widest transition-all duration-300">
                              item 3
                            </li>
                            <li className="hover:text-primary hover:tracking-widest transition-all duration-300">
                              item 4
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                    <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]"/>
                  </nav>
                </div>
            )}

            {listDropdownCode && (
                <Showcode
                    code='
import React from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = () => {
  return (
    <>
      <nav className="w-full px-4 flex items-center justify-between bg-[#3B9DF8] relative mb-24">
        <h2 className="text-[#ffffff] font-[600] text-[1.3rem]">Logo</h2>
        <ul className="flex items-center gap-5 text-[#ffffff]">
          <li className=" cursor-pointer py-2">Home</li>
          <li className="cursor-pointer group py-2 flex items-center gap-1">
            Categories
            <MdKeyboardArrowDown className="text-[1.5rem] group-hover:rotate-[180deg] transition-all duration-300" />
            <div className=" hidden group-hover:block absolute top-[100%] left-[50%] bg-[#ffffff] shadow-2xl p-4">
              <ul className="text-[#000]">
                <li className="hover:text-[#3B9DF8] hover:tracking-widest transition-all duration-300">
                  item 1
                </li>
                <li className="hover:text-[#3B9DF8] hover:tracking-widest transition-all duration-300">
                  item 2
                </li>
                <li className="hover:text-[#3B9DF8] hover:tracking-widest transition-all duration-300">
                  item 3
                </li>
                <li className="hover:text-[#3B9DF8] hover:tracking-widest transition-all duration-300">
                  item 4
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]" />
      </nav>
    </>
  );
};

export default DropDown;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"grid item dropdown"} id={"grid_dropdown"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a grid list dropdown component. Choose items from a visually organized grid layout.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${gridDropdownPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      gridDropdownPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleGridDropdownPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      gridDropdownCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleGridDropdownCode}
              >
                Code
              </button>
            </div>
            {gridDropdownPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <nav className="w-full px-4 flex items-center justify-between bg-primary relative mb-24">
                    <h2 className="text-[#ffffff] font-[600] text-[1.3rem]">
                      Logo
                    </h2>
                    <ul className="flex items-center gap-5 text-secondary">
                      <li className=" cursor-pointer py-2">Home</li>
                      <li className="cursor-pointer group py-2 flex items-center gap-1">
                        Categories
                        <MdKeyboardArrowDown
                            className="text-[1.5rem] group-hover:rotate-[180deg] transition-all duration-300"/>
                        <div
                            className=" hidden group-hover:block absolute top-[100%] z-20 left-[30%] bg-secondary shadow-2xl p-4">
                          <div className="text-[#000] grid grid-cols-1 640px:grid-cols-2 gap-5">
                            <div>
                              <h3 className="font-[600] text-[1.2rem]">Dress</h3>
                              <p>Formal Dresses</p>
                              <p>Casual Dresses</p>
                              <p>Cocktail Dresses</p>
                              <p>Bodycon Dresses</p>
                            </div>
                            <div>
                              <h3 className="font-[600] text-[1.2rem]">
                                T-shirt
                              </h3>
                              <p>Basic T-Shirts</p>
                              <p>Graphic T-Shirts</p>
                              <p>Striped T-Shirts</p>
                              <p>V-Neck T-Shirts</p>
                            </div>
                            <div>
                              <h3 className="font-[600] text-[1.2rem]">
                                Baby Collection
                              </h3>
                              <p>Newborn Essentials</p>
                              <p>Baby Sleepwear</p>
                              <p>Playtime and Activity Sets</p>
                              <p>Baby Apparel Sets</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]"/>
                  </nav>
                </div>
            )}

            {gridDropdownCode && (
                <Showcode
                    code='
import React from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = () => {
  return (
    <>
      <nav className="w-full px-4 flex items-center justify-between bg-[#3B9DF8] relative mb-24">
        <h2 className="text-[#ffffff] font-[600] text-[1.3rem]">Logo</h2>
        <ul className="flex items-center gap-5 text-[#ffffff]">
          <li className=" cursor-pointer py-2">Home</li>
          <li className="cursor-pointer group py-2 flex items-center gap-1">
            Categories
            <MdKeyboardArrowDown className="text-[1.5rem] group-hover:rotate-[180deg] transition-all duration-300" />
            <div className=" hidden group-hover:block absolute top-[100%] left-[30%] bg-[#ffffff] shadow-2xl p-4">
              <div className="text-[#000] grid grid-cols-2 gap-5">
                <div>
                  <h3 className="font-[600] text-[1.2rem]">Dress</h3>
                  <p>Formal Dresses</p>
                  <p>Casual Dresses</p>
                  <p>Cocktail Dresses</p>
                  <p>Bodycon Dresses</p>
                </div>
                <div>
                  <h3 className="font-[600] text-[1.2rem]">T-shirt</h3>
                  <p>Basic T-Shirts</p>
                  <p>Graphic T-Shirts</p>
                  <p>Striped T-Shirts</p>
                  <p>V-Neck T-Shirts</p>
                </div>
                <div>
                  <h3 className="font-[600] text-[1.2rem]">Baby Collection</h3>
                  <p>Newborn Essentials</p>
                  <p>Baby Sleepwear</p>
                  <p>Playtime and Activity Sets</p>
                  <p>Baby Apparel Sets</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]" />
      </nav>
    </>
  );
};

export default DropDown;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
                text={"dropdown with picture"}
                id={"dropdown_with_picture"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a dropdown megamenu with picture component. Browse categories with visual thumbnails for enhanced navigation.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dropdownWithPicturePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      dropdownWithPicturePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleDropdownWithPicturePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      dropdownWithPictureCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleDropdownWithPictureCode}
              >
                Code
              </button>
            </div>
            {dropdownWithPicturePreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <nav className="w-full px-4 flex items-center justify-between bg-primary relative mb-24">
                    <h2 className="text-[#ffffff] font-[600] text-[1.3rem]">
                      Logo
                    </h2>
                    <ul className="flex items-center gap-5 text-secondary">
                      <li className=" cursor-pointer py-2">Home</li>
                      <li className="cursor-pointer group py-2 flex items-center gap-1">
                        Categories
                        <MdKeyboardArrowDown
                            className="text-[1.5rem] group-hover:rotate-[180deg] transition-all duration-300"/>
                        <div
                            className=" hidden group-hover:block absolute top-[100%] left-[0%] right-0 bg-secondary shadow-2xl p-4 z-50">
                          <div className="text-[#000] flex 1024px:flex-row flex-col gap-5 justify-between w-full">
                            <div className="flex flex-wrap gap-5 ">
                              <div>
                                <h3 className="font-[600] text-[1.2rem]">
                                  Dress
                                </h3>
                                <p>Formal Dresses</p>
                                <p>Casual Dresses</p>
                                <p>Cocktail Dresses</p>
                                <p>Bodycon Dresses</p>
                              </div>
                              <div>
                                <h3 className="font-[600] text-[1.2rem]">
                                  T-shirt
                                </h3>
                                <p>Basic T-Shirts</p>
                                <p>Graphic T-Shirts</p>
                                <p>Striped T-Shirts</p>
                                <p>V-Neck T-Shirts</p>
                              </div>
                              <div>
                                <h3 className="font-[600] text-[1.2rem]">
                                  Baby Collection
                                </h3>
                                <p>Newborn Essentials</p>
                                <p>Baby Sleepwear</p>
                                <p>Playtime and Activity Sets</p>
                                <p>Baby Apparel Sets</p>
                              </div>
                            </div>
                            <div>
                              <img
                                  src="https://img.freepik.com/free-photo/portrait-handsome-man-with-sunglasses-orange-background_23-2149019996.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                                  alt="picture"
                                  className="w-full h-[300px] object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]"/>
                  </nav>
                </div>
            )}

            {dropdownWithPictureCode && (
                <Showcode
                    code='
import React from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = () => {
  return (
    <>
      <nav className="w-full px-4 flex items-center justify-between bg-[#3B9DF8] relative mb-24">
        <h2 className="text-[#ffffff] font-[600] text-[1.3rem]">Logo</h2>
        <ul className="flex items-center gap-5 text-[#ffffff]">
          <li className=" cursor-pointer py-2">Home</li>
          <li className="cursor-pointer group py-2 flex items-center gap-1">
            Categories
            <MdKeyboardArrowDown className="text-[1.5rem] group-hover:rotate-[180deg] transition-all duration-300" />
            <div className=" hidden group-hover:block absolute top-[100%] left-[0%] right-0 bg-[#ffffff] shadow-2xl p-4 z-50">
              <div className="text-[#000] lg:flex-row flex-col gap-5 flex justify-between w-full">
                <div className="flex flex-wrap gap-5 ">
                  <div>
                    <h3 className="font-[600] text-[1.2rem]">Dress</h3>
                    <p>Formal Dresses</p>
                    <p>Casual Dresses</p>
                    <p>Cocktail Dresses</p>
                    <p>Bodycon Dresses</p>
                  </div>
                  <div>
                    <h3 className="font-[600] text-[1.2rem]">T-shirt</h3>
                    <p>Basic T-Shirts</p>
                    <p>Graphic T-Shirts</p>
                    <p>Striped T-Shirts</p>
                    <p>V-Neck T-Shirts</p>
                  </div>
                  <div>
                    <h3 className="font-[600] text-[1.2rem]">
                      Baby Collection
                    </h3>
                    <p>Newborn Essentials</p>
                    <p>Baby Sleepwear</p>
                    <p>Playtime and Activity Sets</p>
                    <p>Baby Apparel Sets</p>
                  </div>
                </div>
                <div>
                  <img
                    src="https://img.freepik.com/free-photo/portrait-handsome-man-with-sunglasses-orange-background_23-2149019996.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                    alt="picture"
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
        <FaRegCircleUser className="text-[1.4rem] text-[#ffffff]" />
      </nav>
    </>
  );
};

export default DropDown;
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
              href="#list_dropdown"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            List Dropdown
          </a>
          <a
              href="#grid_dropdown"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Grid Dropdown
          </a>
          <a
              href="#dropdown_with_picture"
            className={`${
              contentActiveTab === 3 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(3)}
          >
            Dropdown With Picture
          </a>
        </div>
      </aside>

      <Helmet>
        <title>Navigation - Drop Down</title>
      </Helmet>
    </>
  );
};

export default DropDown;
