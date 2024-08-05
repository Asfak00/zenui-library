import React, { useState, useEffect } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { IoChevronDown } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const SelectInput = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // code
  const [selectPreview, setSelectPreview] = useState(true);
  const [selectCode, setSelectCode] = useState(false);

  const handleSelectPreview = () => {
    setSelectPreview(true);
    setSelectCode(false);
  };

  const handleSelectCode = () => {
    setSelectCode(true);
    setSelectPreview(false);
  };

  // select with icon
  const [iconSelectPreview, setIconSelectPreview] = useState(true);
  const [iconSelectCode, setIconSelectCode] = useState(false);

  const handleIconSelectPreview = () => {
    setIconSelectPreview(true);
    setIconSelectCode(false);
  };

  const handleIconSelectCode = () => {
    setIconSelectCode(true);
    setIconSelectPreview(false);
  };

  // actions
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [content, setContent] = useState("Select Option");
  const [content2, setContent2] = useState("Select Option");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const optionArray = ["Football", "Cricket", "Tennis", "Badminton"];
  const optionArray2 = [
    {
      icon: <IoMdFootball />,
      title: "Football",
    },
    {
      icon: <MdOutlineSportsCricket />,
      title: "Cricket",
    },
    {
      icon: <MdOutlineSportsTennis />,
      title: "Tennis",
    },
    {
      icon: <GiTennisRacket />,
      title: "Badminton",
    },
  ];

  document.addEventListener("click", function (event) {
    let target = event.target;

    if (!target.closest(".dropdown")) {
      setIsActive(false);
      setIsActive2(false);
      setIsActive3(false);
    }
  });

  const handleGetContent = (content) => {
    selectedOptions.push(content);
  };

  const handleDeleteOption = (index) => {
    selectedOptions.splice(index, 1);
  };

  // search select 1
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selected3Options, setSelected3Options] = useState([]);

  const items = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
  ];

  const filteredItems = items.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const isSelected = (item) => {
    return selected3Options.some(selectedItem => selectedItem.id === item.id);
  };

  const toggleSelection = (item) => {
    if (isSelected(item)) {
      setSelected3Options(selected3Options.filter(selectedItem => selectedItem.id !== item.id));
    } else {
      setSelected3Options([...selected3Options, item]);
    }
  };

  const removeOption = (option) => {
    setSelected3Options(selected3Options.filter(selectedItem => selectedItem.id !== option.id));
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.custom-select')) return;
      handleBlur();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // search select 2
  const [search2, setSearch2] = useState('');
  const [isOpen2, setIsOpen2] = useState(false);
  const [selected2Option, setSelected2Option] = useState(null);

  const items2 = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
  ];

  const filteredItems2 = items2.filter(item =>
      item.name.toLowerCase().includes(search2.toLowerCase())
  );

  const isSelected2 = (item) => {
    return selected2Option?.id === item.id;
  };

  const removeOption2 = () => {
    setSelected2Option(null)
  };

  const toggleSelection2 = (item) => {
    setSelected2Option(item);
  };

  const handleBlur2 = () => {
    setTimeout(() => {
      setIsOpen2(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.custom-select2')) return;
      handleBlur2();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem] ">
        <div>
          <ContentHeader text={"Select"} id={"select"}/>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a select component. Choose options from the dropdown menu for seamless interaction.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${selectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      selectPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleSelectPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      selectCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleSelectCode}
              >
                Code
              </button>
            </div>
            {selectPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <button
                      className="bg-[#fff] border border-[#d1d1d1] rounded-md w-[80%] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
                      onClick={() => setIsActive(!isActive)}
                  >
                    {content}
                    <IoChevronDown
                        className={`${
                            isActive ? " rotate-[180deg]" : " rotate-0"
                        } transition-all duration-300 text-[1.2rem]`}
                    />
                    <div
                        className={`${
                            isActive
                                ? " z-[1] opacity-100 scale-[1]"
                                : " z-[-1] opacity-0 scale-[0.8]"
                        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
                        style={{
                          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                      {optionArray?.map((option, index) => (
                          <p
                              className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200"
                              key={index}
                              onClick={(e) => setContent(e.target.textContent)}
                          >
                            {option}
                          </p>
                      ))}
                    </div>
                  </button>
                </div>
            )}

            {selectCode && (
                <Showcode
                    code='
// icons
import { IoChevronDown } from "react-icons/io5";

const Select = () => {
  // close the dropdown is clicked outside
  document.addEventListener("click", function (event) {
    let target = event.target;

    if (!target.closest(".dropdown")) {
      setIsActive(false);
    }
  });

  // actions
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select Option");

  const optionArray = ["Football", "Cricket", "Tennis", "Badminton"];
  return (
    <button
      className="bg-[#fff] border border-[#d1d1d1] rounded-xl w-[200px] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
      onClick={() => setIsActive(!isActive)}
    >
      {content}
      <IoChevronDown
        className={`${
          isActive ? " rotate-[180deg]" : " rotate-0"
        } transition-all duration-300 text-[1.2rem]`}
      />
      <div
        className={`${
          isActive ? " opacity-100 scale-[1]" : " opacity-0 scale-[0.8]"
        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
        }}
      >
        {optionArray?.map((option, index) => (
          <p
            className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200"
            key={index}
            onClick={(e) => setContent(e.target.textContent)}
          >
            {option}
          </p>
        ))}
      </div>
    </button>
  );
};

export default Select;
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"Select with icon"} id={"select_with_icon"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a select with icon component. Select options from the dropdown menu enriched with intuitive icons.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${iconSelectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      iconSelectPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleIconSelectPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      iconSelectCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleIconSelectCode}
              >
                Code
              </button>
            </div>
            {iconSelectPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <button
                      className="bg-[#fff] border border-[#d1d1d1] rounded-md w-[80%] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
                      onClick={() => setIsActive2(!isActive2)}
                  >
                    {content2}
                    <IoChevronDown
                        className={`${
                            isActive2 ? " rotate-[180deg]" : " rotate-0"
                        } transition-all duration-300 text-[1.2rem]`}
                    />
                    <div
                        className={`${
                            isActive2
                                ? "z-[1] opacity-100 scale-[1]"
                                : "z-[-1] opacity-0 scale-[0.8]"
                        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
                        style={{
                          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                      {optionArray2?.map((option, index) => (
                          <p
                              className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
                              key={index}
                              onClick={(e) => setContent2(e.target.textContent)}
                          >
                            {option.icon}
                            {option.title}
                          </p>
                      ))}
                    </div>
                  </button>
                </div>
            )}

            {iconSelectCode && (
                <Showcode
                    code='
// icons
import { IoChevronDown } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";

const Select = () => {
  // close the dropdown is clicked outside
  document.addEventListener("click", function (event) {
    let target = event.target;

    if (!target.closest(".dropdown")) {
      setIsActive(false);
    }
  });

  // actions
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("Select Option");

  const optionArray = [
    {
      icon: <IoMdFootball />,
      title: "Football",
    },
    {
      icon: <MdOutlineSportsCricket />,
      title: "Cricket",
    },
    {
      icon: <MdOutlineSportsTennis />,
      title: "Tennis",
    },
    {
      icon: <GiTennisRacket />,
      title: "Badminton",
    },
  ];

  return (
    <button
      className="bg-[#fff] border border-[#d1d1d1] rounded-xl w-[200px] justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
      onClick={() => setIsActive(!isActive)}
    >
      {content}
      <IoChevronDown
        className={`${
          isActive ? " rotate-[180deg]" : " rotate-0"
        } transition-all duration-300 text-[1.2rem]`}
      />
      <div
        className={`${
          isActive ? " opacity-100 scale-[1]" : " opacity-0 scale-[0.8]"
        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
        }}
      >
        {optionArray?.map((option, index) => (
          <p
            className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
            key={index}
            onClick={(e) => setContent(e.target.textContent)}
          >
            {option.icon}
            {option.title}
          </p>
        ))}
      </div>
    </button>
  );
};

export default Select;
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"multiple select with search"} id={"multiple_select_with_search"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a select with icon component. Select options from the dropdown menu enriched with intuitive icons.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${iconSelectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      iconSelectPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleIconSelectPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      iconSelectCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleIconSelectCode}
              >
                Code
              </button>
            </div>
            {iconSelectPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative custom-select w-[80%]">
                    {/* Input field with search functionality */}
                    <input
                        type="text"
                        placeholder='Search..'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setIsOpen(true)}
                        className={`w-full border rounded-md px-3 py-2 focus:outline-none`}
                    />

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div className="absolute left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-20">
                          <div className="w-full overflow-auto">
                            {filteredItems.map(item => (
                                <p
                                    key={item.id}
                                    onClick={() => toggleSelection(item)}
                                    className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
                                >
                                  <img
                                      src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                                      alt="checkicon"
                                      className={`${isSelected(item) ? 'scale-[1] opacity-100' : 'scale-[0.5] opacity-0'} mr-2 transition-all duration-300 w-6 h-6`}
                                  />
                                  {item.name}
                                </p>
                            ))}

                            {
                                filteredItems?.length === 0 && (
                                    <p className='text-center text-[0.9rem] text-text py-8'>No search found!</p>
                                )
                            }
                          </div>
                        </div>
                    )}
                  </div>
                </div>
            )}

            {iconSelectCode && (
                <Showcode
                    code='
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"single select with search"} id={"single_select_with_search"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a select with icon component. Select options from the dropdown menu enriched with intuitive icons.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${iconSelectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      iconSelectPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleIconSelectPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      iconSelectCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleIconSelectCode}
              >
                Code
              </button>
            </div>
            {iconSelectPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative custom-select2 w-[80%]">
                    {/* Input field with search functionality */}
                    <input
                        type="text"
                        placeholder='Search..'
                        value={search2}
                        onChange={(e) => setSearch2(e.target.value)}
                        onFocus={() => setIsOpen2(true)}
                        className={`w-full border rounded-md px-3 py-2 focus:outline-none`}
                    />

                    {/* Dropdown menu */}
                    {isOpen2 && (
                        <div className="absolute left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-20">
                          <div className="w-full overflow-auto">
                            {filteredItems2.map(item => (
                                <p
                                    key={item.id}
                                    onClick={() => toggleSelection2(item)}
                                    className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
                                >
                                  <img
                                      src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                                      alt="checkicon"
                                      className={`${isSelected2(item) ? 'scale-[1] opacity-100' : 'scale-[0.5] opacity-0'} mr-2 transition-all duration-300 w-6 h-6`}
                                  />
                                  {item.name}
                                </p>
                            ))}

                            {
                                filteredItems2?.length === 0 && (
                                    <p className='text-center text-[0.9rem] text-text py-8'>No search found!</p>
                                )
                            }
                          </div>
                        </div>
                    )}
                  </div>
                </div>
            )}

            {iconSelectCode && (
                <Showcode
                    code='
                '
                />
            )}
          </div>


          <div className="mt-8">
            <ContentHeader text={"single select with search and badge"} id={"single_select_with_search_and_badge"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a select with icon component. Select options from the dropdown menu enriched with intuitive icons.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${iconSelectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      iconSelectPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleIconSelectPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      iconSelectCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleIconSelectCode}
              >
                Code
              </button>
            </div>
            {iconSelectPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative custom-select2 w-[80%]">

                    {/* Input field with search functionality */}
                    <input
                        type="text"
                        placeholder='Search..'
                        value={search2}
                        onChange={(e) => setSearch2(e.target.value)}
                        onFocus={() => setIsOpen2(true)}
                        className={`w-full border rounded-md px-3 py-2 focus:outline-none`}
                    />

                    {/* Dropdown menu */}
                    {isOpen2 && (
                        <div className="absolute left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-20">
                          <div className="w-full overflow-auto">
                            {filteredItems2.map(item => (
                                <p
                                    key={item.id}
                                    onClick={() => toggleSelection2(item)}
                                    className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
                                >
                                  <img
                                      src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                                      alt="checkicon"
                                      className={`${isSelected2(item) ? 'scale-[1] opacity-100' : 'scale-[0.5] opacity-0'} mr-2 transition-all duration-300 w-6 h-6`}
                                  />
                                  {item.name}
                                </p>
                            ))}

                            {
                                filteredItems2?.length === 0 && (
                                    <p className='text-center text-[0.9rem] text-text py-8'>No search found!</p>
                                )
                            }
                          </div>
                        </div>
                    )}

                    {/* Selected items */}
                    {selected2Option !== null && (
                        <div
                            key={selected2Option.id}
                            className="bg-blue-100 w-max text-blue-800 px-3 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"
                        >
                          {selected2Option.name}
                          <button
                              onClick={() => removeOption2()}
                              className="ml-2 text-blue-800 text-[1.2rem]"
                          >
                            &times;
                          </button>
                        </div>
                    )}
                  </div>
                </div>
            )}

            {iconSelectCode && (
                <Showcode
                    code='
                '
                />
            )}
          </div>


          <div className="mt-8">
            <ContentHeader text={"multiple select with search and badge"} id={"multiple_select_with_search_and_badge"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a select with icon component. Select options from the dropdown menu enriched with intuitive icons.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${iconSelectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      iconSelectPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleIconSelectPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      iconSelectCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleIconSelectCode}
              >
                Code
              </button>
            </div>
            {iconSelectPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative custom-select w-[80%]">
                    {/* Input field with search functionality */}
                    <input
                        type="text"
                        placeholder='Search..'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setIsOpen(true)}
                        className={`w-full border rounded-md px-3 py-2 focus:outline-none`}
                    />

                    {/* Dropdown menu */}
                    {isOpen && (
                        <div className="absolute left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-20">
                          <div className="w-full overflow-auto">
                            {filteredItems.map(item => (
                                <p
                                    key={item.id}
                                    onClick={() => toggleSelection(item)}
                                    className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
                                >
                                  <img
                                      src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                                      alt="checkicon"
                                      className={`${isSelected(item) ? 'scale-[1] opacity-100' : 'scale-[0.5] opacity-0'} mr-2 transition-all duration-300 w-6 h-6`}
                                  />
                                  {item.name}
                                </p>
                            ))}

                            {
                                filteredItems?.length === 0 && (
                                    <p className='text-center text-[0.9rem] text-text py-8'>No search found!</p>
                                )
                            }
                          </div>
                        </div>
                    )}

                    {/* Selected items */}
                    {selected3Options?.length > 0 && (
                        <div className='flex items-center gap-[5px]'>
                          {
                            selected3Options?.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-blue-100 w-max text-blue-800 px-3 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"
                                >
                                  {item.name}
                                  <button
                                      onClick={() => removeOption(item)}
                                      className="ml-2 text-blue-800 text-[1.2rem]"
                                  >
                                    &times;
                                  </button>
                                </div>
                            ))
                          }
                        </div>
                    )}
                  </div>
                </div>
            )}

            {iconSelectCode && (
                <Showcode
                    code='
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
              href="#select"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Select
          </a>
          <a
              href="#select_with_icon"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Select With Icon
          </a>
          <a
              href="#multiple_select_with_search"
              className={`${
                  contentActiveTab === 3 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(3)}
          >
            Multiple Select With Search
          </a>
          <a
              href="#single_select_with_search"
              className={`${
                  contentActiveTab === 4 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(4)}
          >
            Single Select With Search
          </a>
          <a
              href="#single_select_with_search_and_badge"
              className={`${
                  contentActiveTab === 6 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(6)}
          >
            Single select with search and badge
          </a>
          <a
              href="#multiple_select_with_search_and_badge"
              className={`${
                  contentActiveTab === 5 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(5)}
          >
            multiple select with search and badge
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - Select</title>
      </Helmet>
    </>
  );
};

export default SelectInput;
