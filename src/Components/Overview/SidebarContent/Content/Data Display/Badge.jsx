import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";

// icons
import { MdOutlineMail } from "react-icons/md";
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
      <aside className="flex items-start justify-between gap-6">
        <div>
          <ContentHeader text={"message badge"} id={"message_badge"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  messageBadgePreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleMessageBadgePreview}
              >
                Preview
              </button>
              <button
                className={`${
                  messageBadgeCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleMessageBadgeCode}
              >
                Code
              </button>
            </div>
            {messageBadgePreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
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
            <ContentHeader text={"cart badge"} id={"cart_badge"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  cartBadgePreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleCartBadgePreview}
              >
                Preview
              </button>
              <button
                className={`${
                  cartBadgeCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleCartBadgeCode}
              >
                Code
              </button>
            </div>
            {cartBadgePreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="relative">
                  <IoCartOutline className="text-[2.7rem]" />
                  <div className=" absolute top-[-10%] right-[-15%]  text-secondary min-w-[20px] min-h-[20px] text-center">
                    <span className="text-[0.8rem] bg-primary py-1 px-1 rounded-full w-full h-full border-[2px] border-secondary">
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

          <OverviewFooter />
        </div>

        <div className="flex flex-col gap-4 sticky top-20 right-0 w-[20%]">
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
