import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import Showcode from "../../../../../Shared/ShowCode";

const Skeleton = () => {
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
  return (
    <>
      <aside>
        <ContentHeader text={"Card Skeleton"} />

        <p className="w-[80%] text-text text-[1rem]">
          Buttons like this are used a lot on our websites and are very easy to
          create but you can copy the codes from here to save your time.
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
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="w-[400px] border border-[#00000017] animate-pulse rounded-md">
                <div className="w-full bg-border h-[130px] relative">
                  <img className="w-[120px] h-[120px] rounded-full bg-[#cecece] absolute bottom-[-40%] right-[35%]" />
                </div>

                <div className="flex flex-col gap-3 items-center justify-center w-full py-8 mt-12">
                  <h1 className="w-[70%] h-[35px] bg-border"></h1>
                  <p className="w-[50%] h-[20px] bg-border"></p>
                </div>

                <div className=" border-t p-4 w-full flex items-center justify-between">
                  <div className="w-[30%] flex flex-col gap-2">
                    <h1 className=" h-[35px] bg-border"></h1>
                    <p className="h-[20px] bg-border"></p>
                  </div>

                  <div className="w-[30%] flex flex-col gap-2">
                    <h1 className="h-[35px] bg-border"></h1>
                    <p className="h-[20px] bg-border"></p>
                  </div>

                  <div className=" w-[30%] flex flex-col gap-2">
                    <h1 className="h-[35px] bg-border"></h1>
                    <p className="h-[20px] bg-border"></p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {cardSkeletonCode && (
            <Showcode
              code="
import React from 'react';

const CardSkeleton = () => {
  return (
    <div className='w-[400px] border border-[#00000017] animate-pulse rounded-md'>

    // Background image & profile image
      <div className='w-full bg-[#e5eaf2] h-[130px] relative'>
        <img className='w-[120px] h-[120px] rounded-full bg-[#cecece] absolute bottom-[-40%] right-[35%]' />
      </div>

      // Name & Bio
      <div className='flex flex-col gap-3 items-center justify-center w-full py-8 mt-12'>
        <h1 className='w-[70%] h-[35px] bg-[#e5eaf2]'></h1>
        <p className='w-[50%] h-[20px] bg-[#e5eaf2]'></p>
      </div>

      // Follower count
      <div className='border-t p-4 w-full flex items-center justify-between'>
        <div className='w-[30%] flex flex-col gap-2'>
          <h1 className='h-[35px] bg-[#e5eaf2]'></h1>
          <p className='h-[20px] bg-[#e5eaf2]'></p>
        </div>

        <div className='w-[30%] flex flex-col gap-2'>
          <h1 className='h-[35px] bg-[#e5eaf2]'></h1>
          <p className='h-[20px] bg-[#e5eaf2]'></p>
        </div>

        <div className='w-[30%] flex flex-col gap-2'>
          <h1 className='h-[35px] bg-[#e5eaf2]'></h1>
          <p className='h-[20px] bg-[#e5eaf2]'></p>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
              "
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"image gallery skeleton"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Here we are animating from bottom, right and left over the button's
          background color via position.
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
              <div className=" animate-pulse">
                <div className="flex gap-5">
                  <img className="w-[200px] h-[300px] bg-border" />

                  <div className="flex flex-col gap-5">
                    <img className="w-[200px] h-[140px] bg-border" />

                    <img className="w-[200px] h-[140px] bg-border" />
                  </div>
                </div>

                <img className="w-full h-[150px] mt-5 bg-border" />
              </div>
            </div>
          )}

          {imageGellaryCode && (
            <Showcode
              code='
import React from "react";

const ImageGallery = () => {
  return (
    <div className=" animate-pulse">
      <div className="flex gap-5">
      // first iamge
        <img className="w-[200px] h-[300px] bg-[#e5eaf2]" />

        // second & third image
        <div className="flex flex-col gap-5">
          <img className="w-[200px] h-[140px] bg-[#e5eaf2]" />
          <img className="w-[200px] h-[140px] bg-[#e5eaf2]" />
        </div>
      </div>

      // bottom image
      <img className="w-full h-[150px] mt-5 bg-[#e5eaf2]" />
    </div>
  );
};

export default ImageGallery;

              '
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"social post skeleton"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Here we are animating from bottom, right and left over the button's
          background color via position.
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
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="w-[450px] bg-secondary p-6 border border-border rounded animate-pulse">
                <div className="flex items-center">
                  <div className="w-[20%]">
                    <img className="w-[60px] h-[60px] rounded-full bg-border" />
                  </div>

                  <div className="flex flex-col gap-3 w-[80%]">
                    <h1 className="w-[60%] h-[25px] bg-border"></h1>
                    <p className="w-[80%] h-[15px] bg-border"></p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3">
                  <p className="w-[90%] h-[15px] bg-border"></p>
                  <p className="w-[80%] h-[15px] bg-border"></p>
                </div>
              </div>
            </div>
          )}

          {socialPostCode && (
            <Showcode
              code='
import React from "react";

const SocialPostSkeleton = () => {
  return (
    <div className="w-[450px] bg-[#ffff] p-6 border border-[#e5eaf2] rounded animate-pulse">
      <div className="flex items-center">
        <div className="w-[20%]">
          <img className="w-[60px] h-[60px] rounded-full bg-[#e5eaf2]" />
        </div>

        <div className="flex flex-col gap-3 w-[80%]">
          <h1 className="w-[60%] h-[25px] bg-[#e5eaf2]"></h1>
          <p className="w-[80%] h-[15px] bg-[#e5eaf2]"></p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3">
        <p className="w-[90%] h-[15px] bg-[#e5eaf2]"></p>
        <p className="w-[80%] h-[15px] bg-[#e5eaf2]"></p>
      </div>
    </div>
  );
};

export default SocialPostSkeleton;
        '
            />
          )}
        </div>

        <OverviewFooter />
      </aside>
      <Helmet>
        <title>Feedback - Skeleton</title>
      </Helmet>
    </>
  );
};

export default Skeleton;
