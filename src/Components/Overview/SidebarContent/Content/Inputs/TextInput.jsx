import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import {IoEyeOutline, IoEyeOffOutline, IoSearch} from "react-icons/io5";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";
import {IoIosArrowDown, IoLogoUsd} from "react-icons/io";
import {FaBangladeshiTakaSign} from "react-icons/fa6";
import {FaEuroSign} from "react-icons/fa";

const TextInput = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // primary input
  const [primaryInputPreview, setPrimaryInputPreview] = useState(true);
  const [primaryInputCode, setPrimaryInputCode] = useState(false);

  const handlePrimaryInputPreview = () => {
    setPrimaryInputPreview(true);
    setPrimaryInputCode(false);
  };

  const handlePrimaryInputCode = () => {
    setPrimaryInputCode(true);
    setPrimaryInputPreview(false);
  };

  // bottom border input
  const [bottomBorderPreview, setBottomBorderPreview] = useState(true);
  const [bottomBorderCode, setBottomBorderCode] = useState(false);

  const handleBottomBorderPreview = () => {
    setBottomBorderPreview(true);
    setBottomBorderCode(false);
  };

  const handleBottomBorderCode = () => {
    setBottomBorderCode(true);
    setBottomBorderPreview(false);
  };

  // animateLabel
  const [animateLabelPreiview, setAnimateLabelPreview] = useState(true);
  const [animateLabelCode, setAnimateLabelCode] = useState(false);

  const handleAnimateLabelPreview = () => {
    setAnimateLabelPreview(true);
    setAnimateLabelCode(false);
  };

  const handleAnimateLabelCode = () => {
    setAnimateLabelCode(true);
    setAnimateLabelPreview(false);
  };

  // icon input
  const [iconInputPreview, setIconInputPreview] = useState(true);
  const [iconInputCode, setIconInputCode] = useState(false);

  const handleIconInputPreview = () => {
    setIconInputPreview(true);
    setIconInputCode(false);
  };

  const handleIconInputCode = () => {
    setIconInputCode(true);
    setIconInputPreview(false);
  };

  // password input
  const [passwordInputPreview, setPasswordInputPreview] = useState(true);
  const [passwordInputCode, setPasswordInputCode] = useState(false);

  const handlePasswordInputPreview = () => {
    setPasswordInputPreview(true);
    setPasswordInputCode(false);
  };

  const handlePasswordInputCode = () => {
    setPasswordInputCode(true);
    setPasswordInputPreview(false);
  };

  // Link input
  const [linkInputPreview, setLinkInputPreview] = useState(true);
  const [linkInputCode, setLinkInputCode] = useState(false);

  const handleLinkInputPreview = () => {
    setLinkInputPreview(true);
    setLinkInputCode(false);
  };

  const handleLinkInputCode = () => {
    setLinkInputCode(true);
    setLinkInputPreview(false);
  };

  // price input
  const [priceInputPreview, setPriceInputPreview] = useState(true);
  const [priceInputCode, setPriceInputCode] = useState(false);

  const handlePriceInputPreview = () => {
    setPriceInputPreview(true);
    setPriceInputCode(false);
  };

  const handlePriceInputCode = () => {
    setPriceInputCode(true);
    setPriceInputPreview(false);
  };

  // search input
  const [searchInputPreview, setSearchInputPreview] = useState(true);
  const [searchInputCode, setSearchInputCode] = useState(false);

  const handleSearchInputPreview = () => {
    setSearchInputPreview(true);
    setSearchInputCode(false);
  };

  const handleSearchInputCode = () => {
    setSearchInputCode(true);
    setSearchInputPreview(false);
  };

  // join us input
  const [joinInputPreview, setJoinInputPreview] = useState(true);
  const [joinInputCode, setJoinInputCode] = useState(false);

  const handleJoinInputPreview = () => {
    setJoinInputPreview(true);
    setJoinInputCode(false);
  };

  const handleJoinInputCode = () => {
    setJoinInputCode(true);
    setJoinInputPreview(false);
  };

  // actions
  const [isEyeOpen, setIsEyeOpen] = useState(false);

  // price dropdown actions
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [selectedCurrencyType, setSelectedCurrencyType] = useState('USD');

  const allCurrencyTypes = ['USD', 'EUR', 'BDT']

  const handlePriceDropdownClick = (currency) => {
    setSelectedCurrencyType(currency)
    setPriceDropdownOpen(false)
  }


  return (
    <>
      <aside className="flex items-start justify-between gap-6 1024px:!pl-[5rem] 1024px:pt-[4.5rem] pt-[9.5rem] !px-5 425px:!px-10">
        <div>
          <ContentHeader text={"required input"} id={"primary_input"}/>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an input text field. Use it to enter your information, which will be processed accordingly.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${primaryInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      primaryInputPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handlePrimaryInputPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      primaryInputCode && " text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handlePrimaryInputCode}
              >
                Code
              </button>
            </div>
            {primaryInputPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%]">
                    <label htmlFor="name" className="text-[15px] text-text font-[400]">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        className="border-border border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>
            )}

            {primaryInputCode && (
                <Showcode
                    code='
const Textarea = () => {
  return (
    <div className="w-[80%]">
      <label htmlFor="name" className="text-[15px] font-[400]">
        Name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your name"
        className="border-[#e5eaf2] border rounded-md outline-none px-4 w-full mt-1 py-3 focus:border-[#3B9DF8] transition-colors duration-300"
      />
    </div>
  );
};

export default Textarea;
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
                text={"bottom bordered input"}
                id={"bottom_bordered_input"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a bottom-bordered input text field. Enter your information here for it to be processed accordingly.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${bottomBorderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      bottomBorderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b text-text z-[2] relative border-border`}
                  onClick={handleBottomBorderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      bottomBorderCode && "text-tabTextColor"
                  } px-6 py-2 border-r border-b text-text relative z-[2] rounded-br border-border`}
                  onClick={handleBottomBorderCode}
              >
                Code
              </button>
            </div>
            {bottomBorderPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <input type="text" name="name"
                         id="name"
                         placeholder="Your name"
                         className="border-border border-b outline-none px-4 w-full 1024px:w-[80%] py-3 focus:border-primary transition-colors duration-300"
                  />
                </div>
            )}

            {bottomBorderCode && (
                <Showcode
                    code='
<input type="text" name="name" id="name" placeholder="Your name" className="border-[#e5eaf2] border-b outline-none px-4 w-[80%] py-3 focus:border-[#3B9DF8] transition-colors duration-300"
/>
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
                text={"animate label input"}
                id={"animate_label_input"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an animated label text input field. Enter your data here, and the label will animate accordingly.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animateLabelPreiview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      animateLabelPreiview && "text-tabTextColor"
                  } px-6 py-2 border-b text-text z-[2] relative border-border`}
                  onClick={handleAnimateLabelPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      animateLabelCode && "text-tabTextColor"
                  } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                  onClick={handleAnimateLabelCode}
              >
                Code
              </button>
            </div>
            {animateLabelPreiview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <label className="relative w-full 1024px:w-[80%]">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="peer border-border border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                    <span
                        className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                    Your name
                  </span>
                  </label>
                </div>
            )}

            {animateLabelCode && (
                <Showcode
                    code='
<label className="relative w-[80%]">
  <input type="text" name="name" id="name" className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
  />
  <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
      Your name
  </span>
</label>
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"input with icon"} id={"input_with_icon"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an input field with an icon. Enter your information here and use the icon for additional actions.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${iconInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      iconInputPreview && "text-tabTextColor"
                  } px-6 py-2 border-b text-text z-[2] relative border-border`}
                  onClick={handleIconInputPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      iconInputCode && "text-tabTextColor"
                  } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                  onClick={handleIconInputCode}
              >
                Code
              </button>
            </div>
            {iconInputPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%] relative">
                    <RiAccountCircleLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]"/>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        placeholder="Username"
                        className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div className="w-full 1024px:w-[80%] relative">
                    <RiLockPasswordLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]"/>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                  </div>

                  <div className="w-full 1024px:w-[80%] relative">
                    <MdOutlineMail className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]"/>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        className="peer border-border border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>
            )}

            {iconInputCode && (
                <Showcode
                    code='
// icons
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const Inputs = () => {
  return (
    <>
      {/* username */}
      <div className="w-[80%] relative">
        <RiAccountCircleLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Username"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>

      {/* password */}
      <div className="w-[80%] relative">
        <RiLockPasswordLine className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>

      {/* email */}
      <div className="w-[80%] relative">
        <MdOutlineMail className=" absolute top-3.5 left-3 text-[1.5rem] text-[#777777]" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email address"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
        />
      </div>
    </>
  );
};

export default Inputs;
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"password input"} id={"password_input"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a password input field with show/hide functionality. Enter your password and toggle visibility as
            needed.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${passwordInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      passwordInputPreview && "text-tabTextColor"
                  } px-6 py-2 border-b text-text z-[2] relative border-border`}
                  onClick={handlePasswordInputPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      passwordInputCode && "text-tabTextColor"
                  } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                  onClick={handlePasswordInputCode}
              >
                Code
              </button>
            </div>
            {passwordInputPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%]">
                    <label htmlFor="password" className="text-[15px] text-text font-[400]">
                      Password
                    </label>
                    <div className="w-full relative">
                      <input
                          type={isEyeOpen ? "text" : "password"}
                          name="password"
                          id="password"
                          placeholder="Password"
                          className="peer border-border border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-primary transition-colors duration-300"
                      />
                      {isEyeOpen ? (
                          <IoEyeOutline
                              className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                              onClick={() => setIsEyeOpen(false)}
                          />
                      ) : (
                          <IoEyeOffOutline
                              className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                              onClick={() => setIsEyeOpen(true)}
                          />
                      )}
                    </div>
                  </div>
                </div>
            )}

            {passwordInputCode && (
                <Showcode
                    code='
const Textarea = () => {
  return (
    <div className="w-[80%]">
      <label htmlFor="password" className="text-[15px] font-[400]">
        Password
      </label>
      <div className="w-full relative">
        <input
          type={isEyeOpen ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
        />
        {isEyeOpen ? (
          <IoEyeOutline
            className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen(false)}
          />
        ) : (
          <IoEyeOffOutline
            className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
            onClick={() => setIsEyeOpen(true)}
          />
        )}
      </div>
    </div>
  );
};

export default Textarea;
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"Link input"} id={"link_input"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a link input field that allows you to enter a URL. You can customize and validate the link as needed.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${linkInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      linkInputPreview && "text-tabTextColor"
                  } px-6 py-2 border-b text-text z-[2] relative border-border`}
                  onClick={handleLinkInputPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      linkInputCode && "text-tabTextColor"
                  } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                  onClick={handleLinkInputCode}
              >
                Code
              </button>
            </div>
            {linkInputPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%] relative">
                    <input type='text' placeholder='Website url' className='border border-border py-3 pr-4 pl-[90px] outline-none w-full rounded-md'/>

                    <span className='bg-gray-300 text-gray-500 text-[1rem] absolute top-0 left-0 h-full px-3 flex items-center justify-center rounded-l-md'>Https://</span>
                  </div>
                </div>
            )}

            {linkInputCode && (
                <Showcode
                    code="
<div className='w-full relative'>
    <input type='text' placeholder='Website url' className='border border-[#e5eaf2] py-3 pr-4 pl-[90px] outline-none w-full rounded-md'/>

    <span className='bg-gray-300 text-gray-500 text-[1rem] absolute top-0 left-0 h-full px-3 flex items-center justify-center rounded-l-md'>Https://</span>
</div>
                    "
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"Price input"} id={"price_input"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a price input field where you can enter and format a price value. It supports currency symbols and ensures valid numerical input.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${priceInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      priceInputPreview && "text-tabTextColor"
                  } px-6 py-2 border-b text-text z-[2] relative border-border`}
                  onClick={handlePriceInputPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      priceInputCode && "text-tabTextColor"
                  } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                  onClick={handlePriceInputCode}
              >
                Code
              </button>
            </div>
            {priceInputPreview && (
                <div className={`${priceDropdownOpen ? 'mb-[8rem]' : 'mb-4'} p-8 flex items-center flex-col gap-5 justify-center transition-all duration-200`}>
                  <div className="w-full 1024px:w-[80%] relative">
                    <input type='number' placeholder='0' className='border border-border py-3 pl-[65px] pr-[80px] outline-none w-full rounded-md'/>

                    <div className='bg-gray-100 w-[50px] absolute top-0 h-full left-0 flex items-center justify-center rounded-l-md'>
                      {
                        selectedCurrencyType === 'BDT' && (
                              <FaBangladeshiTakaSign className='text-[1.2rem] text-gray-600'/>
                          )
                      }
                      {
                        selectedCurrencyType === 'EUR' && (
                              <FaEuroSign className='text-[1.2rem] text-gray-600'/>
                          )
                      }
                      {
                        selectedCurrencyType === 'USD' && (
                              <IoLogoUsd className='text-[1.2rem] text-gray-600'/>
                          )
                      }
                    </div>

                    <div onClick={()=> setPriceDropdownOpen(!priceDropdownOpen)} className='absolute top-0 right-0 h-full flex items-center justify-center cursor-pointer border-l border-border px-4'>
                      <span className='flex items-center gap-[8px] text-text'>
                        {selectedCurrencyType}
                        <IoIosArrowDown className={`${priceDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'} transition-all duration-200`}/>
                      </span>

                      <ul className={`${priceDropdownOpen ? 'translate-y-0 opacity-100 z-30' : 'translate-y-[-10px] opacity-0 z-[-1]'} list-none absolute top-[53px] right-0 bg-white toastshadow w-[87px] flex flex-col items-center transition-all duration-200 justify-center py-1 rounded-md`}>
                        {
                          allCurrencyTypes?.map((currency, index)=> (
                              <li key={index} className='py-2 px-4 w-full hover:bg-gray-100 text-center cursor-pointer' onClick={()=> handlePriceDropdownClick(currency)}>{currency}</li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                </div>
            )}

            {priceInputCode && (
                <Showcode
                    code="
import React, { useState } from 'react';

// react icon
import {FaBangladeshiTakaSign} from 'react-icons/fa6';
import {FaEuroSign} from 'react-icons/fa';
import {IoIosArrowDown, IoLogoUsd} from 'react-icons/io';

const PriceInput = () => {
    // price dropdown actions
    const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
    const [selectedCurrencyType, setSelectedCurrencyType] = useState('USD');

    const allCurrencyTypes = ['USD', 'EUR', 'BDT']

    const handlePriceDropdownClick = (currency) => {
        setSelectedCurrencyType(currency)
        setPriceDropdownOpen(false)
    }

    return (
        <div className='w-full relative'>
            <input type='number' placeholder='0'
                   className='border border-[#e5eaf2] py-3 pl-[65px] pr-[80px] outline-none w-full rounded-md'/>

            <div
                className='bg-gray-100 w-[50px] absolute top-0 h-full left-0 flex items-center justify-center rounded-l-md'>
                {
                    selectedCurrencyType === 'BDT' && (
                        <FaBangladeshiTakaSign className='text-[1.2rem] text-gray-600'/>
                    )
                }
                {
                    selectedCurrencyType === 'EUR' && (
                        <FaEuroSign className='text-[1.2rem] text-gray-600'/>
                    )
                }
                {
                    selectedCurrencyType === 'USD' && (
                        <IoLogoUsd className='text-[1.2rem] text-gray-600'/>
                    )
                }
            </div>

            <div onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
                 className='absolute top-0 right-0 h-full flex items-center justify-center cursor-pointer border-l border-[#e5eaf2] px-4'>
                      <span className='flex items-center gap-[8px] text-[#424242]'>
                        {selectedCurrencyType}
                          <IoIosArrowDown
                              className={`${priceDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'} transition-all duration-200`}/>
                      </span>

                <ul className={`${priceDropdownOpen ? 'translate-y-0 opacity-100 z-30' : 'translate-y-[-10px] opacity-0 z-[-1]'} list-none absolute top-[53px] right-0 bg-white toastshadow w-[87px] flex flex-col items-center transition-all duration-200 justify-center py-1 rounded-md`}>
                    {
                        allCurrencyTypes?.map((currency, index) => (
                            <li key={index} className='py-2 px-4 w-full hover:bg-gray-100 text-center cursor-pointer'
                                onClick={() => handlePriceDropdownClick(currency)}>{currency}</li>
                        ))
                    }
                </ul>
            </div>
        </div>

    );
};

export default PriceInput;
                    "
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"search input"} id={"search_input"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a search input field that lets you enter keywords to find specific content. It provides instant feedback as you type.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${passwordInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      passwordInputPreview && "text-tabTextColor"
                  } px-6 py-2 border-b text-text z-[2] relative border-border`}
                  onClick={handlePasswordInputPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      passwordInputCode && "text-tabTextColor"
                  } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                  onClick={handlePasswordInputCode}
              >
                Code
              </button>
            </div>
            {passwordInputPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%] relative">
                    <input type='text' placeholder='Search...'
                           className='border border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md'/>

                    <span
                        className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'><IoSearch
                        className='text-[1.3rem]  group-hover:text-gray-200'/></span>
                  </div>

                  <div className="w-full 1024px:w-[80%] relative">
                    <input type='text' placeholder='Search...'
                           className='border border-border py-3 pl-4 pr-[65px] outline-none w-full rounded-md'/>

                    <span
                        className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200'>Search</span>
                  </div>

                    <div className='bg-primary py-4 w-full 1024px:w-[80%] px-5 flex items-center justify-center rounded-full cursor-pointer relative'>
                      <IoSearch className='text-[1.3rem] text-white ml-auto'/>

                      <input type='text' placeholder='Search...'
                             className='border border-border absolute top-[2px] left-[3px] h-[90%] w-[85%] py-3 px-4 outline-none rounded-full'/>
                    </div>
                </div>
            )}

            {passwordInputCode && (
                <Showcode
                    code="
import React from 'react';

// react icon
import {IoSearch} from 'react-icons/io5';

const SearchInput = () => {

    return (
        <>
            {/* 1st search input */}
            <div className='w-full relative'>
              <input type='text' placeholder='Search...'
              className='border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md'/>

              <span
              className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'><IoSearch
              className='text-[1.3rem]  group-hover:text-gray-200'/></span>
              </div>

            {/* 2nd search input */}
            <div className='w-full relative'>
              <input type='text' placeholder='Search...'
                     className='border border-[#e5eaf2] py-3 pl-4 pr-[65px] outline-none w-full rounded-md'/>

              <span
                  className='bg-gray-300 text-gray-500 absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 hover:text-gray-200'>Search</span>
            </div>

            {/* 3rd search input */}
            <div
                className='bg-[#3B9DF8] py-4 w-full px-5 flex items-center justify-center rounded-full cursor-pointer relative'>
              <IoSearch className='text-[1.3rem] text-white ml-auto'/>

              <input type='text' placeholder='Search...'
                     className='border border-[#e5eaf2] absolute top-[2px] left-[3px] h-[90%] w-[85%] py-3 px-4 outline-none rounded-full'/>
            </div>
          </>
          );
          };

export default SearchInput;
                    "
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"Join us input"} id={"join_us_input"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a join us input field where users can enter their details to express interest in joining. It helps capture information for membership or subscription.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${joinInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      joinInputPreview && "text-tabTextColor"
                  } px-6 py-2 border-b text-text z-[2] relative border-border`}
                  onClick={handleJoinInputPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      joinInputCode && "text-tabTextColor"
                  } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                  onClick={handleJoinInputCode}
              >
                Code
              </button>
            </div>
            {joinInputPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%] relative">
                    <input type='email' placeholder='Email'
                           className='border border-border py-3 pl-4 pr-[115px] outline-none w-full rounded-md'/>

                    <span
                        className='bg-primary text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'>
                      Subscribe
                    </span>
                  </div>
                </div>
            )}

            {joinInputCode && (
                <Showcode
                    code="
<div className='w-full relative'>
   <input type='email' placeholder='Email' className='border border-[#e5eaf2] py-3 pl-4 pr-[115px] outline-none w-full rounded-md'/>

   <span className='bg-[#3B9DF8] text-white absolute top-0 right-0 h-full px-5 flex items-center justify-center rounded-r-md cursor-pointer hover:bg-gray-400 group'>
       Subscribe
    </span>
</div>
                    "
                />
            )}
          </div>

          <OverviewFooter/>
        </div>

        <div className="1024px:flex flex-col gap-4 sticky top-20 right-0 w-[40%] hidden">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#primary_input"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Primary Input
          </a>
          <a
              href="#bottom_bordered_input"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Bottom Border Input
          </a>
          <a
              href="#animate_label_input"
              className={`${
                  contentActiveTab === 3 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(3)}
          >
            Animate Label
          </a>
          <a
              href="#input_with_icon"
              className={`${
                  contentActiveTab === 4 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(4)}
          >
            Input With Icon
          </a>
          <a
              href="#password_input"
              className={`${
                  contentActiveTab === 5 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(5)}
          >
            Password Input
          </a>
          <a
              href="#link_input"
              className={`${
                  contentActiveTab === 6 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(6)}
          >
            Link Input
          </a>
          <a
              href="#price_input"
              className={`${
                  contentActiveTab === 7 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(7)}
          >
            Price Input
          </a>
          <a
              href="#search_input"
              className={`${
                  contentActiveTab === 8 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(8)}
          >
            Search Input
          </a>
          <a
              href="#join_us_input"
              className={`${
                  contentActiveTab === 9 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(9)}
          >
            Join Us Input
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - Text Input</title>
      </Helmet>
    </>
  );
};

export default TextInput;
