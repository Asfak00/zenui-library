import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { MdDone } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const Pagination = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // primaryChip
  const [primaryChipPreview, setPrimaryChipPreview] = useState(true);
  const [primaryChipCode, setPrimaryChipCode] = useState(false);

  const handlePrimaryChipPreview = () => {
    setPrimaryChipPreview(true);
    setPrimaryChipCode(false);
  };

  const handlePrimaryChipCode = () => {
    setPrimaryChipCode(true);
    setPrimaryChipPreview(false);
  };

  // chipVariant
  const [chipVariantPreview, setChipVariantPreview] = useState(true);
  const [chipVariantCode, setChipVariantCode] = useState(false);

  const handleChipVariantPreview = () => {
    setChipVariantPreview(true);
    setChipVariantCode(false);
  };

  const handleChipVariantCode = () => {
    setChipVariantCode(true);
    setChipVariantPreview(false);
  };

  // icon chip
  const [iconChipPreview, setIconChipPreview] = useState(true);
  const [iconChipCode, setIconChipCode] = useState(false);

  const handleIconChipPreview = () => {
    setIconChipPreview(true);
    setIconChipCode(false);
  };

  const handleIconChipCode = () => {
    setIconChipCode(true);
    setIconChipPreview(false);
  };

  // avatar chip
  const [avatarChipPreview, setAvatarChipPreview] = useState(true);
  const [avatarChipCode, setAvatarChipCode] = useState(false);

  const handleAvatarChipPreview = () => {
    setAvatarChipPreview(true);
    setAvatarChipCode(false);
  };

  const handleAvatarChipCode = () => {
    setAvatarChipCode(true);
    setAvatarChipPreview(false);
  };

  const [paginationNum, setPaginationNum] = useState(0);
  const totalPageNumber = 5;
  const updatePageNumber = (num) => {
    if (num > totalPageNumber - 1 || 0 > num) {
      return setPaginationNum(0);
    }
    setPaginationNum(num);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6">
        <div>
          <ContentHeader
            text={"square box pagination"}
            id={"square_box_pagination"}
          />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  primaryChipPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handlePrimaryChipPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  primaryChipCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handlePrimaryChipCode}
              >
                Code
              </button>
            </div>
            {primaryChipPreview && (
              <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                <div className="flex select-none justify-center items-center gap-5 ">
                  {/* left arrow */}
                  <div
                    onClick={() => {
                      updatePageNumber(paginationNum - 1);
                    }}
                    className=" hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-200 px-1 py-1 rounded-full"
                  >
                    <svg
                      className="w-10"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M15 7L10 12L15 17"
                          stroke="#0284C7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />{" "}
                      </g>
                    </svg>
                  </div>
                  <div className="flex justify-center items-center gap-2 ">
                    {[...Array(totalPageNumber).keys()].map((item) => (
                      <div
                        onClick={() => {
                          setPaginationNum(item);
                        }}
                        className={`cursor-pointer hover:scale-110 scale-100 transition-all duration-200 px-5 ${
                          paginationNum === item
                            ? "bg-sky-500 text-white"
                            : "bg-white"
                        } border-sky-300  font-semibold text-gray-700   py-3 rounded-full`}
                        key={item}
                      >
                        {item + 1}
                      </div>
                    ))}
                  </div>
                  {/* right arrow */}
                  <div
                    onClick={() => {
                      updatePageNumber(paginationNum + 1);
                    }}
                    className="bg-gray-200 hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-sky-100 px-4 py-4 rounded-full"
                  >
                    <svg
                      className="w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                          fill="#000000"
                        />{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {primaryChipCode && (
              <Showcode
                code='
<div className="px-6 py-1 bg-[#d1d1d180] rounded-full text-[0.9rem] font-[500]">
     ZenUI
</div>
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
            href="#primary_chip"
            className={`${
              contentActiveTab === 1 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(1)}
          >
            Primary Chip
          </a>
          <a
            href="#chip_variant"
            className={`${
              contentActiveTab === 2 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(2)}
          >
            Chip Variant
          </a>
          <a
            href="#icon_chip"
            className={`${
              contentActiveTab === 3 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(3)}
          >
            Icon Chip
          </a>
          <a
            href="#avatar_chip"
            className={`${
              contentActiveTab === 4 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(4)}
          >
            Avatar Chip
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Navigation - Chip</title>
      </Helmet>
    </>
  );
};

export default Pagination;
