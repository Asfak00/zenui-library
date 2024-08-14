import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";

// icons
import {MdOutlineMail, MdVerified} from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";

const Badge = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // messageBadgePreview
  const [messageBadgePreview, setMessageBadgePreview] = useState(true);
  const [messageBadgeCode, setMessageBadgeCode] = useState(false);

  const handleMessageBadgePreview = () => {
    setMessageBadgePreview(true);
    setMessageBadgeCode(false);
  };

  const handleMessageBadgeCode = () => {
    setMessageBadgeCode(true);
    setMessageBadgePreview(false);
  };

  // cartBadgePreview
  const [cartBadgePreview, setCartBadgePreview] = useState(true);
  const [cartBadgeCode, setCartBadgeCode] = useState(false);

  const handleCartBadgePreview = () => {
    setCartBadgePreview(true);
    setCartBadgeCode(false);
  };

  const handleCartBadgeCode = () => {
    setCartBadgeCode(true);
    setCartBadgePreview(false);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
        <div>
          <ContentHeader text={"message badge"} id={"message_badge"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a message badge component. Display notifications or messages with a sleek and visible badge.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${messageBadgePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      messageBadgePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleMessageBadgePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      messageBadgeCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleMessageBadgeCode}
              >
                Code
              </button>
            </div>
            {messageBadgePreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative">
                    <MdOutlineMail className="text-[2.7rem]"/>
                    <div
                        className=" absolute top-[-10%] right-[-15%]  text-secondary min-w-[20px] min-h-[20px] text-center">
                    <span
                        className="text-[0.8rem] bg-primary py-1 px-1 rounded-full w-full h-full border-[2px] border-secondary">
                      10
                    </span>
                    </div>
                  </div>

                  <div
                      className="relative before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:top-[-2%] before:right-[-5%] before:border-[2px] before:border-secondary before:bg-primary ">
                    <MdOutlineMail className="text-[2.7rem]"/>
                  </div>
                </div>
            )}

            {messageBadgeCode && (
                <Showcode
                    code='
import React from "react";

// icon
import { MdOutlineMail } from "react-icons/md";

const MessageBadge = () => {
  return (
    <>
      <div className="relative">
        <MdOutlineMail className="text-[2.7rem]" />
        <div className=" absolute top-[-10%] right-[-15%]  text-secondary min-w-[20px] min-h-[20px] text-center">
          <span className="text-[0.8rem] bg-primary py-1 px-1 rounded-full w-full h-full border-[2px] border-secondary">
            10
          </span>
        </div>
      </div>

      <div className="relative before:absolute before:w-[20px] before:h-[20px] before:rounded-full before:top-[-2%] before:right-[-5%] before:border-[2px] before:border-secondary before:bg-primary ">
        <MdOutlineMail className="text-[2.7rem]" />
      </div>
    </>
  );
};

export default MessageBadge;
          '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"cart badge"} id={"cart_badge"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a cart badge component. Show cart items or notifications with a stylish and visible badge.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${cartBadgePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      cartBadgePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleCartBadgePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      cartBadgeCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleCartBadgeCode}
              >
                Code
              </button>
            </div>
            {cartBadgePreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="relative">
                    <IoCartOutline className="text-[2.7rem]"/>
                    <div
                        className=" absolute top-[-10%] right-[-15%]  text-secondary min-w-[20px] min-h-[20px] text-center">
                    <span
                        className="text-[0.8rem] bg-primary py-1 px-1 rounded-full w-full h-full border-[2px] border-secondary">
                      10
                    </span>
                    </div>
                  </div>
                </div>
            )}

            {cartBadgeCode && (
                <Showcode
                    code='
import React from "react";

// icon
import { IoCartOutline } from "react-icons/io5";

const CartBadge = () => {
  return (
    <>
      <div className="relative">
        <IoCartOutline className="text-[2.7rem]" />
        <div className=" absolute top-[-10%] right-[-15%]  text-secondary min-w-[20px] min-h-[20px] text-center">
          <span className="text-[0.8rem] bg-primary py-1 px-1 rounded-full w-full h-full border-[2px] border-secondary">
            10
          </span>
        </div>
      </div>
    </>
  );
};

export default CartBadge;
          '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"online badge"} id={"online_badge"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a cart badge component. Show cart items or notifications with a stylish and visible badge.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${cartBadgePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      cartBadgePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleCartBadgePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      cartBadgeCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleCartBadgeCode}
              >
                Code
              </button>
            </div>
            {cartBadgePreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='relative'>
                    <img
                        src='https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996'
                        alt='avatar' className='w-[80px] h-[80px] rounded-full object-cover'/>

                    <div className='p-[2px] bg-white absolute top-[60px] right-2 rounded-full'>
                      <div className='w-[16px] h-[16px] rounded-full bg-green-400 '></div>
                    </div>
                  </div>

                  <div className='relative'>
                    <img
                        src='https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996'
                        alt='avatar' className='w-[70px] h-[70px] rounded-full object-cover'/>

                    <div className='p-[2px] bg-white absolute top-[53px] right-2 rounded-full'>
                      <div className='w-[14px] h-[14px] rounded-full bg-green-400 '></div>
                    </div>
                  </div>

                  <div className='relative'>
                    <img
                        src='https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996' alt='avatar' className='w-[60px] h-[60px] rounded-full object-cover'/>

                    <div className='p-[2px] bg-white absolute top-[47px] right-2 rounded-full'>
                      <div className='w-[12px] h-[12px] rounded-full bg-green-400 '></div>
                    </div>
                  </div>

                  <div className='relative'>
                    <img
                        src='https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996'
                        alt='avatar' className='w-[50px] h-[50px] rounded-full object-cover'/>

                    <div className='p-[2px] bg-white absolute top-[38px] right-[4px] rounded-full'>
                      <div className='w-[10px] h-[10px] rounded-full bg-green-400 '></div>
                    </div>
                  </div>
                </div>
            )}

            {cartBadgeCode && (
                <Showcode
                    code='
          '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"verified badge"} id={"verified_badge"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a cart badge component. Show cart items or notifications with a stylish and visible badge.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${cartBadgePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      cartBadgePreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleCartBadgePreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      cartBadgeCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleCartBadgeCode}
              >
                Code
              </button>
            </div>
            {cartBadgePreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='relative'>
                    <img src='https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg?t=st=1722665625~exp=1722669225~hmac=61213dc4a128104a1e6f2685a176eca7bf689928fffab03d713789c45b6a1696&w=996' alt='avatar' className='w-[80px] h-[80px] rounded-full object-cover'/>

                    <MdVerified className='text-blue-500 p-[2px] text-[1.5rem] bg-white rounded-full absolute top-[57px] right-[5px]'/>
                  </div>

                  <div className='relative'>
                    <img src='https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg?t=st=1722665625~exp=1722669225~hmac=61213dc4a128104a1e6f2685a176eca7bf689928fffab03d713789c45b6a1696&w=996' alt='avatar' className='w-[70px] h-[70px] rounded-full object-cover'/>

                    <MdVerified className='text-blue-500 p-[2px] text-[1.4rem] bg-white rounded-full absolute top-[50px] right-[4px]'/>
                  </div>

                  <div className='relative'>
                    <img src='https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg?t=st=1722665625~exp=1722669225~hmac=61213dc4a128104a1e6f2685a176eca7bf689928fffab03d713789c45b6a1696&w=996' alt='avatar' className='w-[60px] h-[60px] rounded-full object-cover'/>

                    <MdVerified className='text-blue-500 p-[2px] text-[1.3rem] bg-white rounded-full absolute top-[43px] right-[4px]'/>
                  </div>

                  <div className='relative'>
                    <img src='https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg?t=st=1722665625~exp=1722669225~hmac=61213dc4a128104a1e6f2685a176eca7bf689928fffab03d713789c45b6a1696&w=996' alt='avatar' className='w-[50px] h-[50px] rounded-full object-cover'/>

                    <MdVerified className='text-blue-500 p-[2px] text-[1.2rem] bg-white rounded-full absolute top-[35px] right-[4px]'/>
                  </div>
                </div>
            )}

            {cartBadgeCode && (
                <Showcode
                    code='
          '
                />
            )}
          </div>

          <OverviewFooter/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[20%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#message_badge"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Message Badge
          </a>
          <a
              href="#cart_badge"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Cart Badge
          </a>
        </div>
      </aside>
      <Helmet>
      <title>Data Display - Badge</title>
      </Helmet>
    </>
  );
};

export default Badge;
