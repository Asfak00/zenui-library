import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// icons
import {
  IoCheckmarkDoneCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { MdErrorOutline, MdOutlineInfo } from "react-icons/md";
import { HiOutlineXMark } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const ImageGallery = () => {
  // backgroundPreview
  const [basicDialogPreview, setBasicDialogPreview] = useState(true);
  const [basicDialogCode, setBasicDialogCode] = useState(false);

  const handleBasicDialogPreview = () => {
    setBasicDialogPreview(true);
    setBasicDialogCode(false);
  };

  const handleBasicDialogCode = () => {
    setBasicDialogCode(true);
    setBasicDialogPreview(false);
  };

  // handle dialog message
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState("please select");

  console.log(dialogValue);

  const handleDialogAction = (e) => {
    let element = e.target;
    setDialogValue(element.innerText);
    setIsDialogOpen(false);
  };

  return (
    <>
      <aside>
        <ContentHeader text={"image Gallery 1"} />

        <p className="w-[80%] text-text text-[1rem]">
          This is the card skeleton. The skeleton provided here basically shows
          the information of an account.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                basicDialogPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleBasicDialogPreview}>
              Preview
            </button>
            <button
              className={`${
                basicDialogCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleBasicDialogCode}>
              Code
            </button>
          </div>
          {basicDialogPreview && (
            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
              <div className="grid grid-cols-3 gap-3">
                <img
                  src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/free-photo/green-sprouts-dark-soil-against-blurred-background-symbolizing-concept-growth-potential_90220-1462.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                />
                <img
                  src="https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                />
              </div>
            </div>
          )}

          {basicDialogCode && (
            <Showcode
              code="
          "
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"image Gallery 2"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the card skeleton. The skeleton provided here basically shows
          the information of an account.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                basicDialogPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleBasicDialogPreview}>
              Preview
            </button>
            <button
              className={`${
                basicDialogCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleBasicDialogCode}>
              Code
            </button>
          </div>
          {basicDialogPreview && (
            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
              <div className="grid grid-cols-4 gap-2">
                <img
                  src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg"
                  alt=""
                  className="col-span-2 w-full h-full object-cover"
                />
                <img
                  src="https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://img.freepik.com/free-photo/sea-beach_1203-3516.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover row-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://img.freepik.com/free-photo/group-elephants-big-green-tree-wilderness_181624-16897.jpg"
                  alt=""
                  className="col-span-2 w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {basicDialogCode && (
            <Showcode
              code="
          "
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"image Gallery 3"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the card skeleton. The skeleton provided here basically shows
          the information of an account.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                basicDialogPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleBasicDialogPreview}>
              Preview
            </button>
            <button
              className={`${
                basicDialogCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleBasicDialogCode}>
              Code
            </button>
          </div>
          {basicDialogPreview && (
            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
              <div className="grid grid-cols-3 gap-2">
                <img
                  src="https://img.freepik.com/free-vector/beach-seascape-scenery_603843-2331.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="row-span-2 col-span-2 w-full h-full object-cover"
                />
                <img
                  src="https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover col-span-1"
                />
                <img
                  src="https://img.freepik.com/free-photo/landscape-hills-covered-greenery-with-rocky-mountains-cloudy-sky_181624-9192.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover col-span-1"
                />
                <img
                  src="https://img.freepik.com/free-vector/summer-natural-landscape-with-meadow-mountains_107791-24623.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover col-span-3"
                />
              </div>
            </div>
          )}

          {basicDialogCode && (
            <Showcode
              code="
          "
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"image Gallery 4"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the card skeleton. The skeleton provided here basically shows
          the information of an account.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                basicDialogPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleBasicDialogPreview}>
              Preview
            </button>
            <button
              className={`${
                basicDialogCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleBasicDialogCode}>
              Code
            </button>
          </div>
          {basicDialogPreview && (
            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
              <div className="grid grid-cols-4 gap-2">
                <img
                  src="https://img.freepik.com/free-photo/shiraito-waterfall-autumn-japan_335224-193.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className=" row-span-1 col-span-2 w-full h-full object-cover"
                />
                <img
                  src="https://img.freepik.com/free-photo/beautiful-view-mesmerizing-nature-traditional-styled-japanese-adelaide-himeji-gardens_181624-46195.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover row-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/autumn-river-ordesa-national-park-pyrenees-huesca-aragon-spain_1301-6980.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover row-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/mustard-field-with-beautiful-snow-covered-mountains-landscape-kashmir-state-india_1232-4824.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover col-span-2 row-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/fictitious-floating-island_1048-2899.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover col-span-2 row-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/scenic-view-mountains-lake_53876-138187.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover col-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/sunset-with-silhoutte-birds-flying_335224-915.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover "
                />

                <img
                  src="https://img.freepik.com/free-photo/landscape-rocks-surrounded-by-forests-covered-fog-cloudy-sky_181624-6475.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover col-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/mist-chinese-water-peak-landscapes_1417-36.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover "
                />
              </div>
            </div>
          )}

          {basicDialogCode && (
            <Showcode
              code="
          "
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"image Gallery 5"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          This is the card skeleton. The skeleton provided here basically shows
          the information of an account.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                basicDialogPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleBasicDialogPreview}>
              Preview
            </button>
            <button
              className={`${
                basicDialogCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleBasicDialogCode}>
              Code
            </button>
          </div>
          {basicDialogPreview && (
            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
              <div className="grid grid-cols-4 gap-2">
                <img
                  src="https://img.freepik.com/free-photo/landscape-morning-fog-mountains-with-hot-air-balloons-sunrise_335224-794.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover row-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/landscape-hills-covered-greenery-with-rocky-mountains-cloudy-sky_181624-9192.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://img.freepik.com/free-photo/vertical-orange-lily-field-cloudy-dark-sky_181624-37905.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=ais"
                  alt=""
                  className="w-full h-full object-cover row-span-2"
                />

                <img
                  src="https://img.freepik.com/free-photo/bamboo-forest-kyoto-japan_335224-28.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover row-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/vertical-orange-lily-field-cloudy-dark-sky_181624-37905.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=ais"
                  alt=""
                  className="w-full h-full object-cover row-span-2"
                />
                <img
                  src="https://img.freepik.com/free-photo/fog-dark-clouds-mountains_1204-503.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt=""
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://img.freepik.com/free-photo/old-rusty-fishing-boat-slope-along-shore-lake_181624-44902.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=ais"
                  alt=""
                />
              </div>
            </div>
          )}

          {basicDialogCode && (
            <Showcode
              code="
          "
            />
          )}
        </div>

        <OverviewFooter />
      </aside>
      <Helmet>
        <title>Surfaces - Image Gallery</title>
      </Helmet>
    </>
  );
};

export default ImageGallery;
