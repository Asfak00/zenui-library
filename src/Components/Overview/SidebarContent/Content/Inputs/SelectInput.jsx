import React, { useState, useEffect } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { IoChevronDown } from "react-icons/io5";
import {IoIosArrowDown, IoMdFootball} from "react-icons/io";
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";

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

  // multiple section with search
  const [multipleWithSearchPreview, setMultipleWithSearchPreview] = useState(true);
  const [multipleWithSearchCode, setMultipleWithSearchCode] = useState(false);

  const handleMultipleWithSearchPreview = () => {
    setMultipleWithSearchPreview(true);
    setMultipleWithSearchCode(false);
  };

  const handleMultipleWithSearchCode = () => {
    setMultipleWithSearchCode(true);
    setMultipleWithSearchPreview(false);
  };

  // single section with search
  const [singleWithSearchPreview, setSingleWithSearchPreview] = useState(true);
  const [singleWithSearchCode, setSingleWithSearchCode] = useState(false);

  const handleSingleWithSearchPreview = () => {
    setSingleWithSearchPreview(true);
    setSingleWithSearchCode(false);
  };

  const handleSingleWithSearchCode = () => {
    setSingleWithSearchCode(true);
    setSingleWithSearchPreview(false);
  };

  // single select search with badge
  const [singleSearchWithBadgePreview, setSingleSearchWithBadgePreview] = useState(true);
  const [singleSearchWithBadgeCode, setSingleSearchWithBadgeCode] = useState(false);

  const handleSingleSearchWithBadgePreview = () => {
    setSingleSearchWithBadgePreview(true);
    setSingleSearchWithBadgeCode(false);
  };

  const handleSingleSearchWithBadgeCode = () => {
    setSingleSearchWithBadgeCode(true);
    setSingleSearchWithBadgePreview(false);
  };

  // multiple select search with badge
  const [multipleSearchWithBadgePreview, setMultipleSearchWithBadgePreview] = useState(true);
  const [multipleSearchWithBadgeCode, setMultipleSearchWithBadgeCode] = useState(false);

  const handleMultipleSearchWithBadgePreview = () => {
    setMultipleSearchWithBadgePreview(true);
    setMultipleSearchWithBadgeCode(false);
  };

  const handleMultipleSearchWithBadgeCode = () => {
    setMultipleSearchWithBadgeCode(true);
    setMultipleSearchWithBadgePreview(false);
  };

  // actions
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [content, setContent] = useState("Select Option");
  const [content1, setContent1] = useState("Select Option");
  const [content2, setContent2] = useState("Select Option");

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

  // search select 1
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
  ];

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
  const [isOpen2, setIsOpen2] = useState(false);

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

  // select 3
  const [search3, setSearch3] = useState('');
  const [isOpen3, setIsOpen3] = useState(false);
  const [selected3Options, setSelected3Options] = useState([]);

  const items3 = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
  ];

  const filteredItems3 = items3.filter(item =>
      item.name.toLowerCase().includes(search3.toLowerCase())
  );

  const isSelected3 = (item) => {
    return selected3Options.some(selectedItem => selectedItem.id === item.id);
  };

  const toggleSelection3 = (item) => {
    if (isSelected3(item)) {
      setSelected3Options(selected3Options.filter(selectedItem => selectedItem.id !== item.id));
    } else {
      setSelected3Options([...selected3Options, item]);
    }
  };

  const handleBlur3 = () => {
    setTimeout(() => {
      setIsOpen3(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.custom-select3')) return;
      handleBlur3();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // search select 4
  const [search4, setSearch4] = useState('');
  const [isOpen4, setIsOpen4] = useState(false);
  const [selected4Option, setSelected4Option] = useState(null);

  const items4 = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
  ];

  const filteredItems4 = items4.filter(item =>
      item.name.toLowerCase().includes(search4.toLowerCase())
  );

  const isSelected4 = (item) => {
    return selected4Option?.id === item.id;
  };

  const removeOption4 = () => {
    setSelected4Option(null)
  };

  const toggleSelection4 = (item) => {
    setSelected4Option(item);
  };

  const handleBlur4 = () => {
    setTimeout(() => {
      setIsOpen4(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.custom-select4')) return;
      handleBlur4();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // search select 5
  const [search5, setSearch5] = useState('');
  const [isOpen5, setIsOpen5] = useState(false);
  const [selected5Option, setSelected5Option] = useState(null);

  const items5 = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
  ];

  const filteredItems5 = items5.filter(item =>
      item.name.toLowerCase().includes(search5.toLowerCase())
  );

  const isSelected5 = (item) => {
    return selected5Option?.id === item.id;
  };

  const removeOption5 = () => {
    setSelected5Option(null)
  };

  const toggleSelection5 = (item) => {
    setSelected5Option(item);
  };

  const handleBlur5 = () => {
    setTimeout(() => {
      setIsOpen5(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.custom-select5')) return;
      handleBlur5();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  // select 6
  const [search6, setSearch6] = useState('');
  const [isOpen6, setIsOpen6] = useState(false);
  const [selected6Options, setSelected6Options] = useState([]);

  const items6 = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
  ];

  const filteredItems6 = items6.filter(item =>
      item.name.toLowerCase().includes(search6.toLowerCase())
  );

  const isSelected6 = (item) => {
    return selected6Options.some(selectedItem => selectedItem.id === item.id);
  };

  const toggleSelection6 = (item) => {
    if (isSelected6(item)) {
      setSelected6Options(selected6Options.filter(selectedItem => selectedItem.id !== item.id));
    } else {
      setSelected6Options([...selected6Options, item]);
    }
  };

  const removeOption6 = (option) => {
    setSelected6Options(selected6Options.filter(selectedItem => selectedItem.id !== option.id));
  };

  useEffect(() => {
    document.addEventListener('click', (event)=> {
      if (!event.target.closest('.custom-select')) {
        setIsOpen6(false);
      }
    })
  }, [isOpen6]);

  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div>
          <ContentHeader text={"Select"} id={"select"}/>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a select component. Choose options from the dropdown menu for seamless interaction.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${selectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
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
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${iconSelectPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
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
            Multiple select dropdown with a search feature, allowing users to easily find and select multiple options from a large list.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${multipleWithSearchPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      multipleWithSearchPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleMultipleWithSearchPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      multipleWithSearchCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleMultipleWithSearchCode}
              >
                Code
              </button>
            </div>
            {multipleWithSearchPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative custom-select3 w-[80%]">

                    {/* Input field with search functionality */}
                    <input
                        type="text"
                        placeholder='Search..'
                        value={search3}
                        onChange={(e) => setSearch3(e.target.value)}
                        onFocus={() => setIsOpen3(true)}
                        className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
                    />

                    <IoIosArrowDown className={`${isOpen3 ? 'rotate-[180deg]' : 'rotate-0'} transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500`}/>

                    {/* Dropdown menu */}
                    {isOpen3 && (
                        <div className="absolute left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-20">
                          <div className="w-full overflow-auto">
                            {filteredItems3.map(item => (
                                <p
                                    key={item.id}
                                    onClick={() => toggleSelection3(item)}
                                    className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
                                >
                                  <img
                                      src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                                      alt="checkicon"
                                      className={`${isSelected3(item) ? 'scale-[1] opacity-100' : 'scale-[0.5] opacity-0'} mr-2 transition-all duration-300 w-6 h-6`}
                                  />
                                  {item.name}
                                </p>
                            ))}

                            {
                                filteredItems3?.length === 0 && (
                                    <p className='text-center text-[0.9rem] text-text py-8'>No search found!</p>
                                )
                            }
                          </div>
                        </div>
                    )}
                  </div>
                </div>
            )}

            {multipleWithSearchCode && (
                <Showcode
                    code='
import React, {useEffect, useState} from "react";

// react icons
import {IoIosArrowDown} from "react-icons/io";

const SearchSelect = () => {

    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const items = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" },
        { id: 4, name: "Option 4" },
        { id: 5, name: "Option 5" },
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const isSelected = (item) => {
        return selectedOptions.some(selectedItem => selectedItem.id === item.id);
    };

    const toggleSelection = (item) => {
        if (isSelected(item)) {
            setSelectedOptions(selectedOptions.filter(selectedItem => selectedItem.id !== item.id));
        } else {
            setSelectedOptions([...selectedOptions, item]);
        }
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest(".custom-select")) return;
            handleBlur();
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative custom-select">

            {/* Input field with search functionality */}
            <input
                type="text"
                placeholder="Search.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsOpen(true)}
                className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
            />

            <IoIosArrowDown
                className={`${isOpen ? "rotate-[180deg]" : "rotate-0"} transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500`}/>

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
                                    className={`${isSelected(item) ? "scale-[1] opacity-100" : "scale-[0.5] opacity-0"} mr-2 transition-all duration-300 w-6 h-6`}
                                />
                                {item.name}
                            </p>
                        ))}

                        {
                            filteredItems?.length === 0 && (
                                <p className="text-center text-[0.9rem] text-text py-8">No search found!</p>
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchSelect;
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"single select with search"} id={"single_select_with_search"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Single select dropdown with a search feature, enabling users to quickly find and choose one option from a list.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${singleWithSearchPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      singleWithSearchPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleSingleWithSearchPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      singleWithSearchCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleSingleWithSearchCode}
              >
                Code
              </button>
            </div>
            {singleWithSearchPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative custom-select4 w-[80%]">

                    {/* Input field with search functionality */}
                    <input
                        type="text"
                        placeholder='Search..'
                        value={search4}
                        onChange={(e) => setSearch4(e.target.value)}
                        onFocus={() => setIsOpen4(true)}
                        className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
                    />

                    <IoIosArrowDown
                        className={`${isOpen4 ? "rotate-[180deg]" : "rotate-0"} transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500`}/>

                    {/* Dropdown menu */}
                    {isOpen4 && (
                        <div className="absolute left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-20">
                          <div className="w-full overflow-auto">
                            {filteredItems4.map(item => (
                                <p
                                    key={item.id}
                                    onClick={() => toggleSelection4(item)}
                                    className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
                                >
                                  <img
                                      src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                                      alt="checkicon"
                                      className={`${isSelected4(item) ? 'scale-[1] opacity-100' : 'scale-[0.5] opacity-0'} mr-2 transition-all duration-300 w-6 h-6`}
                                  />
                                  {item.name}
                                </p>
                            ))}

                            {
                                filteredItems4?.length === 0 && (
                                    <p className='text-center text-[0.9rem] text-text py-8'>No search found!</p>
                                )
                            }
                          </div>
                        </div>
                    )}
                  </div>
                </div>
            )}

            {singleWithSearchCode && (
                <Showcode
                    code='
import React, {useEffect, useState} from "react";

// react icons
import {IoIosArrowDown} from "react-icons/io";

const SearchSelect = () => {

    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(null);

    const items = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" },
        { id: 4, name: "Option 4" },
        { id: 5, name: "Option 5" },
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const isSelected = (item) => {
        return selectedOptions?.id === item.id;
    };

    const toggleSelection = (item) => {
        setSelectedOptions(item);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest(".custom-select")) return;
            handleBlur();
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative custom-select">

            {/* Input field with search functionality */}
            <input
                type="text"
                placeholder="Search.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsOpen(true)}
                className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
            />

            <IoIosArrowDown
                className={`${isOpen ? "rotate-[180deg]" : "rotate-0"} transition-all duration-300 text-[1.3rem] absolute top-[50%] transform translate-y-[-50%] right-3 text-gray-500`}/>

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
                                    className={`${isSelected(item) ? "scale-[1] opacity-100" : "scale-[0.5] opacity-0"} mr-2 transition-all duration-300 w-6 h-6`}
                                />
                                {item.name}
                            </p>
                        ))}

                        {
                            filteredItems?.length === 0 && (
                                <p className="text-center text-[0.9rem] text-text py-8">No search found!</p>
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchSelect;
                '
                />
            )}
          </div>


          <div className="mt-8">
            <ContentHeader text={"single select with search and badge"} id={"single_select_with_search_and_badge"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Single select dropdown with a search feature and a badge to highlight the selected option, making it easy to identify your choice.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${singleSearchWithBadgePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      singleSearchWithBadgePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleSingleSearchWithBadgePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      singleSearchWithBadgeCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleSingleSearchWithBadgeCode}
              >
                Code
              </button>
            </div>
            {singleSearchWithBadgePreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative custom-select5 w-[80%]">

                    {/* Input field with search functionality */}
                    <input
                        type="text"
                        placeholder='Search..'
                        value={search5}
                        onChange={(e) => setSearch5(e.target.value)}
                        onFocus={() => setIsOpen5(true)}
                        className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
                    />

                    <IoIosArrowDown
                        className={`${isOpen5 ? "rotate-[180deg]" : "rotate-0"} transition-all duration-300 text-[1.3rem] absolute top-[10px] right-3 text-gray-500`}/>

                    {/* Dropdown menu */}
                    {isOpen5 && (
                        <div className="absolute left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-20">
                          <div className="w-full overflow-auto">
                            {filteredItems5.map(item => (
                                <p
                                    key={item.id}
                                    onClick={() => toggleSelection5(item)}
                                    className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
                                >
                                  <img
                                      src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                                      alt="checkicon"
                                      className={`${isSelected5(item) ? 'scale-[1] opacity-100' : 'scale-[0.5] opacity-0'} mr-2 transition-all duration-300 w-6 h-6`}
                                  />
                                  {item.name}
                                </p>
                            ))}

                            {
                                filteredItems5?.length === 0 && (
                                    <p className='text-center text-[0.9rem] text-text py-8'>No search found!</p>
                                )
                            }
                          </div>
                        </div>
                    )}

                    {/* Selected items */}
                    {selected5Option !== null && (
                        <div
                            key={selected5Option.id}
                            className="bg-blue-100 w-max text-blue-800 px-3 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"
                        >
                          {selected5Option.name}
                          <button
                              onClick={() => removeOption5()}
                              className="ml-2 text-blue-800 text-[1.2rem]"
                          >
                            &times;
                          </button>
                        </div>
                    )}
                  </div>
                </div>
            )}

            {singleSearchWithBadgeCode && (
                <Showcode
                    code='
import React, {useEffect, useState} from "react";

const SearchSelect = () => {

    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);


    const items = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" },
        { id: 4, name: "Option 4" },
        { id: 5, name: "Option 5" },
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const isSelected = (item) => {
        return selectedOption?.id === item.id;
    };

    const toggleSelection = (item) => {
        setSelectedOption(item);
    };

    const removeOption = () => {
        setSelectedOption(null)
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest(".custom-select")) return;
            handleBlur();
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative custom-select2">

            {/* Input field with search functionality */}
            <input
                type="text"
                placeholder="Search.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsOpen(true)}
                className={`w-full border-gray-300 border rounded-md px-3 py-2 focus:outline-none`}
            />

            <IoIosArrowDown
                        className={`${isOpen ? "rotate-[180deg]" : "rotate-0"} transition-all duration-300 text-[1.3rem] absolute top-[10px] right-3 text-gray-500`}/>

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
                                    className={`${isSelected(item) ? "scale-[1] opacity-100" : "scale-[0.5] opacity-0"} mr-2 transition-all duration-300 w-6 h-6`}
                                />
                                {item.name}
                            </p>
                        ))}

                        {
                            filteredItems?.length === 0 && (
                                <p className="text-center text-[0.9rem] text-text py-8">No search found!</p>
                            )
                        }
                    </div>
                </div>
            )}

            {/* Selected items */}
            {selectedOption !== null && (
                <div
                    key={selectedOption.id}
                    className="bg-blue-100 w-max text-blue-800 px-3 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"
                >
                    {selectedOption.name}
                    <button
                        onClick={() => removeOption()}
                        className="ml-2 text-blue-800 text-[1.2rem]"
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchSelect;
                '
                />
            )}
          </div>


          <div className="mt-8">
            <ContentHeader text={"multiple select with search and badge"} id={"multiple_select_with_search_and_badge"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Multiple select dropdown with search and badges, allowing users to find options easily and display selected items with visual badges.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${multipleSearchWithBadgePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      multipleSearchWithBadgePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleMultipleSearchWithBadgePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      multipleSearchWithBadgeCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleMultipleSearchWithBadgeCode}
              >
                Code
              </button>
            </div>
            {multipleSearchWithBadgePreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative custom-select w-[80%]">

                    {/* Input field with search functionality */}
                    <input
                        type="text"
                        placeholder='Search..'
                        value={search6}
                        onChange={(e) => setSearch6(e.target.value)}
                        onFocus={() => setIsOpen6(true)}
                        className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
                    />

                    <IoIosArrowDown
                        className={`${isOpen6 ? "rotate-[180deg]" : "rotate-0"} transition-all duration-300 text-[1.3rem] absolute top-[10px] right-3 text-gray-500`}/>

                    {/* Dropdown menu */}
                    {isOpen6 && (
                        <div className="absolute left-0 w-full mt-1 border rounded-md bg-white shadow-lg z-20">
                          <div className="w-full overflow-auto">
                            {filteredItems6.map(item => (
                                <p
                                    key={item.id}
                                    onClick={() => toggleSelection6(item)}
                                    className="cursor-pointer px-3 py-2 flex items-center hover:bg-gray-200"
                                >
                                  <img
                                      src="https://besnik-space.fra1.cdn.digitaloceanspaces.com/doplac/dYj3EG2tlN8jM29cWxiA1711341238.svg"
                                      alt="checkicon"
                                      className={`${isSelected6(item) ? 'scale-[1] opacity-100' : 'scale-[0.5] opacity-0'} mr-2 transition-all duration-300 w-6 h-6`}
                                  />
                                  {item.name}
                                </p>
                            ))}

                            {
                                filteredItems6?.length === 0 && (
                                    <p className='text-center text-[0.9rem] text-text py-8'>No search found!</p>
                                )
                            }
                          </div>
                        </div>
                    )}

                    {/* Selected items */}
                    {selected6Options?.length > 0 && (
                        <div className='flex items-center gap-[5px] flex-wrap'>
                          {
                            selected6Options?.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-blue-100 min-w-fit text-blue-800 px-3 py-[0.1rem] text-[0.9rem] rounded-full flex items-center mt-2"
                                >
                                  {item.name}
                                  <button
                                      onClick={() => removeOption6(item)}
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

            {multipleSearchWithBadgeCode && (
                <Showcode
                    code='
import React, {useEffect, useState} from "react";

const SearchSelect = () => {

    const [search, setSearch] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const items = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" },
        { id: 4, name: "Option 4" },
        { id: 5, name: "Option 5" },
    ];

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const isSelected = (item) => {
        return selectedOptions.some(selectedItem => selectedItem.id === item.id);
    };

    const toggleSelection = (item) => {
        if (isSelected(item)) {
            setSelectedOptions(selectedOptions.filter(selectedItem => selectedItem.id !== item.id));
        } else {
            setSelectedOptions([...selectedOptions, item]);
        }
    };

    const removeOption = (option) => {
        setSelectedOptions(selectedOptions.filter(selectedItem => selectedItem.id !== option.id));
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.closest(".custom-select")) return;
            handleBlur();
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative custom-select">

            {/* Input field with search functionality */}
            <input
                type="text"
                placeholder="Search.."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsOpen(true)}
                className={`w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none`}
            />

            <IoIosArrowDown
                        className={`${isOpen ? "rotate-[180deg]" : "rotate-0"} transition-all duration-300 text-[1.3rem] absolute top-[10px] right-3 text-gray-500`}/>

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
                                    className={`${isSelected(item) ? "scale-[1] opacity-100" : "scale-[0.5] opacity-0"} mr-2 transition-all duration-300 w-6 h-6`}
                                />
                                {item.name}
                            </p>
                        ))}

                        {
                            filteredItems?.length === 0 && (
                                <p className="text-center text-[0.9rem] text-text py-8">No search found!</p>
                            )
                        }
                    </div>
                </div>
            )}

            {/* Selected items */}
            {selectedOptions?.length > 0 && (
                <div className="flex items-center gap-[5px]">
                    {
                        selectedOptions?.map((item) => (
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
    );
};

export default SearchSelect;
                '
                />
            )}
          </div>

          <OverviewFooter backUrl='/components/strong-password' backName='strong password' forwardName='radio' forwardUrl='/components/input-radio'/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
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
          <div data-ea-publisher="zenuinet" className='w-full' data-ea-type="image"></div>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - Select</title>
      </Helmet>
    </>
  );
};

export default SelectInput;
