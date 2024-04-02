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

const Chip = () => {
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

  return (
    <>
      <aside className="flex items-start justify-between gap-6">
        <div>
          <ContentHeader text={"Primary Chip"} id={"primary_chip"} />

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
                <div className="px-4 py-1 bg-[#d1d1d180] rounded-full text-[0.9rem] font-[500]">
                  ZenUI
                </div>

                <div className="px-4 py-1 bg-[#d1d1d180] rounded-full text-[1.3rem] font-[500]">
                  ZenUI
                </div>

                <div className="px-4 py-1 bg-[#d1d1d180] rounded-full text-[1.6rem] font-[500]">
                  ZenUI
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

          <div className="mt-8">
            <ContentHeader text={"Chip variants"} id={"chip_variant"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  chipVariantPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleChipVariantPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  chipVariantCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleChipVariantCode}
              >
                Code
              </button>
            </div>
            {chipVariantPreview && (
              <div className="p-8 mb-4 flex items-start flex-wrap gap-5 justify-center">
                <div className="px-6 py-1 bg-[#3B9DF8] text-[#fff] rounded-full text-[0.9rem] font-[500]">
                  ZenUI
                </div>
                <div className="px-6 py-1 border border-[#3B9DF8] text-[#3B9DF8] rounded-full text-[0.9rem] font-[500]">
                  ZenUI
                </div>
                <div className="px-6 py-1 bg-[#e9e9e9] text-[#9c9c9c] rounded-full text-[0.9rem] font-[500]">
                  ZenUI
                </div>
              </div>
            )}

            {chipVariantCode && (
              <Showcode
                code='
<div className="px-6 py-1 bg-[#3B9DF8] text-[#fff] rounded-full text-[0.9rem] font-[500]">
      ZenUI
</div>

<div className="px-6 py-1 border border-[#3B9DF8] text-[#3B9DF8] rounded-full text-[0.9rem] font-[500]">
   ZenUI
</div>

<div className="px-6 py-1 bg-[#e9e9e9] text-[#9c9c9c] rounded-full text-[0.9rem] font-[500]">
    ZenUI
</div>
                '
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"Icon Chip"} id={"icon_chip"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  iconChipPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleIconChipPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  iconChipCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleIconChipCode}
              >
                Code
              </button>
            </div>
            {iconChipPreview && (
              <div className="p-8 mb-4 flex items-start flex-wrap gap-5 justify-center">
                <div className="px-4 py-1.5 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
                  <MdDone className="p-0.5 text-[1.1rem] rounded-full bg-[#18c964] text-[#fff]" />
                  ZenUI
                </div>

                <div className="px-4 py-1.5 bg-[#e4d4f4] text-[#7828c8] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
                  <IoMdNotifications className="text-[1.3rem] text-[#7828c8]" />
                  ZenUI
                </div>

                <div className="px-4 py-1.5 border border-border text-text rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
                  <TbPointFilled className="text-[1.3rem] text-text" />
                  ZenUI
                </div>

                <div className="px-4 py-1.5 border border-border text-text rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
                  ZenUI
                  <RxCross2 className="text-[1.1rem] text-[#fff] rounded-full p-0.5  bg-text " />
                </div>
              </div>
            )}

            {iconChipCode && (
              <Showcode
                code='
// icons
import { MdDone } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

const Chip = () => {
  return (
    <>
      <div className="px-4 py-1.5 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
        <MdDone className="p-0.5 text-[1.1rem] rounded-full bg-[#18c964] text-[#fff]" />
        ZenUI
      </div>

      <div className="px-4 py-1.5 bg-[#e4d4f4] text-[#7828c8] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
        <IoMdNotifications className="text-[1.3rem] text-[#7828c8]" />
        ZenUI
      </div>

      <div className="px-4 py-1.5 border border-[#e5eaf2] text-[#424242] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
        <TbPointFilled className="text-[1.3rem] text-text" />
        ZenUI
      </div>

      <div className="px-4 py-1.5 border border-[#e5eaf2] text-[#424242] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
        ZenUI
      <RxCross2 className="text-[1.1rem] text-[#fff] rounded-full p-0.5  bg-[#424242] " />
      </div>
    </>
  );
};

export default Chip;
                '
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"avatar Chip"} id={"avatar_chip"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  avatarChipPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleAvatarChipPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  avatarChipCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleAvatarChipCode}
              >
                Code
              </button>
            </div>
            {avatarChipPreview && (
              <div className="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center">
                <div className="pl-2 pr-4 py-1 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1712077473~exp=1712081073~hmac=63310a81f493e9368aeb918070f9181f5f316124f4793e1499d65115fc45ef46&w=740"
                    className="w-[25px] h-[25px] rounded-full"
                    alt=""
                  />
                  ZenUI
                </div>

                <div className="pl-2 pr-4 py-1 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1712077473~exp=1712081073~hmac=63310a81f493e9368aeb918070f9181f5f316124f4793e1499d65115fc45ef46&w=740"
                    className="w-[35px] h-[35px] rounded-full"
                    alt=""
                  />
                  ZenUI
                </div>

                <div className="pl-2 pr-4 py-1 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1712077473~exp=1712081073~hmac=63310a81f493e9368aeb918070f9181f5f316124f4793e1499d65115fc45ef46&w=740"
                    className="w-[45px] h-[45px] rounded-full"
                    alt=""
                  />
                  ZenUI
                </div>
              </div>
            )}

            {avatarChipCode && (
              <Showcode
                code='
const Chip = () => {
  return (
    <>
      <div className="pl-2 pr-4 py-1 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
        <img
          src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1712077473~exp=1712081073~hmac=63310a81f493e9368aeb918070f9181f5f316124f4793e1499d65115fc45ef46&w=740"
          className="w-[25px] h-[25px] rounded-full"
          alt=""
        />
        ZenUI
      </div>

      <div className="pl-2 pr-4 py-1 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
        <img
          src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1712077473~exp=1712081073~hmac=63310a81f493e9368aeb918070f9181f5f316124f4793e1499d65115fc45ef46&w=740"
          className="w-[35px] h-[35px] rounded-full"
          alt=""
        />
        ZenUI
      </div>

      <div className="pl-2 pr-4 py-1 bg-[#ececec80] border border-[#d1d1d180] text-[#18c964] rounded-full text-[0.9rem] font-[500] flex items-center gap-2">
        <img
          src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?t=st=1712077473~exp=1712081073~hmac=63310a81f493e9368aeb918070f9181f5f316124f4793e1499d65115fc45ef46&w=740"
          className="w-[45px] h-[45px] rounded-full"
          alt=""
        />
        ZenUI
      </div>
    </>
  );
};

export default Chip;
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

export default Chip;
