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

const Appbar = () => {
  // cardSkeletonPreview
  const [cardSkeletonPreview, setCardSkeletonPreview] = useState(true);
  const [cardSkeletonCode, setCardSkeletonCode] = useState(false);

  const handleCardSkeletonPreview = () => {
    setCardSkeletonPreview(true);
    setCardSkeletonCode(false);
  };

  const handleCardSkeletonCode = () => {
    setCardSkeletonCode(true);
    setCardSkeletonPreview(false);
  };

  // imageGellaryPreview
  const [imageGellaryPreview, setImageGellaryPreview] = useState(true);
  const [imageGellaryCode, setImageGellaryCode] = useState(false);

  const handleImageGellaryPreview = () => {
    setImageGellaryPreview(true);
    setImageGellaryCode(false);
  };

  const handleImageGellaryCode = () => {
    setImageGellaryCode(true);
    setImageGellaryPreview(false);
  };

  // socialPostPreview
  const [socialPostPreview, setSocialPostPreview] = useState(true);
  const [socialPostCode, setSocialPostCode] = useState(false);

  const handleSocialPostPreview = () => {
    setSocialPostPreview(true);
    setSocialPostCode(false);
  };

  const handleSocialPostCode = () => {
    setSocialPostCode(true);
    setSocialPostPreview(false);
  };

  // product details skeleton
  const [productDetailsPreview, setProductDetailsPreview] = useState(true);
  const [productDetailsCode, setProductDetailsCode] = useState(false);

  const handleProductDetailsPreview = () => {
    setProductDetailsPreview(true);
    setProductDetailsCode(false);
  };

  const handleProductDetailsCode = () => {
    setProductDetailsCode(true);
    setProductDetailsPreview(false);
  };

  const [isLogout, setIsLogout] = useState(false);

  return (
    <>
      <aside>
        <ContentHeader text={"app bar with manu & profile"} />

        <p className="w-[80%] text-text text-[1rem]">
          This is the card skeleton. The skeleton provided here basically shows
          the information of an account.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                cardSkeletonPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleCardSkeletonPreview}>
              Preview
            </button>
            <button
              className={`${
                cardSkeletonCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleCardSkeletonCode}>
              Code
            </button>
          </div>
          {cardSkeletonPreview && (
            <div className="p-8 mb-4 flex flex-col items-center gap-5 justify-center">
              <div className="p-4 bg-primary w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
                  <h2 className="text-[1.3rem] text-secondary font-[600]">
                    Logo
                  </h2>
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
            </div>
          )}

          {cardSkeletonCode && (
            <Showcode
              code="
              "
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"app bar with search bar"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the image gallery skeleton. Here the skeleton is created for
          the image, similar to the grid layout.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                imageGellaryPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleImageGellaryPreview}>
              Preview
            </button>
            <button
              className={`${
                imageGellaryCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleImageGellaryCode}>
              Code
            </button>
          </div>
          {imageGellaryPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="p-4 bg-primary w-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <FiMenu className="text-secondary text-[1.7rem] cursor-pointer" />
                  <h2 className="text-[1.3rem] text-secondary font-[600]">
                    Logo
                  </h2>
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
            </div>
          )}

          {imageGellaryCode && (
            <Showcode
              code="

              "
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"social post skeleton"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the skeleton of a social post, and you can also use it as a
          card. Here is image, name, bio and post details.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                socialPostPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleSocialPostPreview}>
              Preview
            </button>
            <button
              className={`${
                socialPostCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleSocialPostCode}>
              Code
            </button>
          </div>
          {socialPostPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center"></div>
          )}

          {socialPostCode && (
            <Showcode
              code="
        "
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"product details skeleton"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the skeleton of the product details page. You can use this
          skeleton on the product details page of any of your e-commerce
          websites. Each section is marked with comments within the code.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                productDetailsPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleProductDetailsPreview}>
              Preview
            </button>
            <button
              className={`${
                productDetailsCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleProductDetailsCode}>
              Code
            </button>
          </div>
          {productDetailsPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center"></div>
          )}

          {productDetailsCode && (
            <Showcode
              code="
              "
            />
          )}
        </div>

        <OverviewFooter />
      </aside>
      <Helmet>
        <title>Surfaces - App Bar</title>
      </Helmet>
    </>
  );
};

export default Appbar;
