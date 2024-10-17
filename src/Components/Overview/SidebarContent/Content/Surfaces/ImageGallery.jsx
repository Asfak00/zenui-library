import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// icons
import { IoIosInformationCircle } from "react-icons/io";

const ImageGallery = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // image gallery 1
  const [imageGallery1Preview, setImageGallery1Preview] = useState(true);
  const [imageGallery1Code, setImageGallery1Code] = useState(false);

  const handleImageGallery1Preview = () => {
    setImageGallery1Preview(true);
    setImageGallery1Code(false);
  };

  const handleImageGallery1Code = () => {
    setImageGallery1Code(true);
    setImageGallery1Preview(false);
  };

  // image gallery 2
  const [imageGallery2Preview, setImageGallery2Preview] = useState(true);
  const [imageGallery2Code, setImageGallery2Code] = useState(false);

  const handleImageGallery2Preview = () => {
    setImageGallery2Preview(true);
    setImageGallery2Code(false);
  };

  const handleImageGallery2Code = () => {
    setImageGallery2Code(true);
    setImageGallery2Preview(false);
  };

  // image gallery 3
  const [imageGallery3Preview, setImageGallery3Preview] = useState(true);
  const [imageGallery3Code, setImageGallery3Code] = useState(false);

  const handleImageGallery3Preview = () => {
    setImageGallery3Preview(true);
    setImageGallery3Code(false);
  };

  const handleImageGallery3Code = () => {
    setImageGallery3Code(true);
    setImageGallery3Preview(false);
  };

  // image gallery 4
  const [imageGallery4Preview, setImageGallery4Preview] = useState(true);
  const [imageGallery4Code, setImageGallery4Code] = useState(false);

  const handleImageGallery4Preview = () => {
    setImageGallery4Preview(true);
    setImageGallery4Code(false);
  };

  const handleImageGallery4Code = () => {
    setImageGallery4Code(true);
    setImageGallery4Preview(false);
  };

  // image gallery 5
  const [imageGallery5Preview, setImageGallery5Preview] = useState(true);
  const [imageGallery5Code, setImageGallery5Code] = useState(false);

  const handleImageGallery5Preview = () => {
    setImageGallery5Preview(true);
    setImageGallery5Code(false);
  };

  const handleImageGallery5Code = () => {
    setImageGallery5Code(true);
    setImageGallery5Preview(false);
  };

  // image gallery with title bar
  const [titleImageGalleryPreview, setTitleImageGalleryPreview] =
    useState(true);
  const [titleImageGalleryCode, setTitleImageGalleryCode] = useState(false);

  const handleTitleImageGalleryPreview = () => {
    setTitleImageGalleryPreview(true);
    setTitleImageGalleryCode(false);
  };

  const handleTitleImageGalleryCode = () => {
    setTitleImageGalleryCode(true);
    setTitleImageGalleryPreview(false);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div className="w-full 425px:w-[80%]">
          <ContentHeader text={"image Gallery 1"} id={"image_gallery_1"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an image gallery with a simple layout for easy browsing and viewing.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${imageGallery1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      imageGallery1Preview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleImageGallery1Preview}
              >
                Preview
              </button>
              <button
                  className={`${
                      imageGallery1Code && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleImageGallery1Code}
              >
                Code
              </button>
            </div>
            {imageGallery1Preview && (
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

            {imageGallery1Code && (
                <Showcode
                    code='
import React from "react";

const ImageGallery = () => {
  return (
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
  );
};

export default ImageGallery;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"image Gallery 2"} id={"image_gallery_2"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an image gallery with a complex layout for detailed and organized viewing.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${imageGallery2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      imageGallery2Preview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleImageGallery2Preview}
              >
                Preview
              </button>
              <button
                  className={`${
                      imageGallery2Code && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleImageGallery2Code}
              >
                Code
              </button>
            </div>
            {imageGallery2Preview && (
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

            {imageGallery2Code && (
                <Showcode
                    code='
import React from "react";

const ImageGallery = () => {
  return (
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
  );
};

export default ImageGallery;    
          '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"image Gallery 3"} id={"image_gallery_3"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an image gallery with a sleek layout for stylish and organized viewing.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${imageGallery3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      imageGallery3Preview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleImageGallery3Preview}
              >
                Preview
              </button>
              <button
                  className={`${
                      imageGallery3Code && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleImageGallery3Code}
              >
                Code
              </button>
            </div>
            {imageGallery3Preview && (
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

            {imageGallery3Code && (
                <Showcode
                    code='
import React from "react";

const ImageGallery = () => {
  return (
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
  );
};

export default ImageGallery;
              '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"image Gallery 4"} id={"image_gallery_4"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an image gallery with a robust layout for structured and efficient viewing.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${imageGallery4Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      imageGallery4Preview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleImageGallery4Preview}
              >
                Preview
              </button>
              <button
                  className={`${
                      imageGallery4Code && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleImageGallery4Code}
              >
                Code
              </button>
            </div>
            {imageGallery4Preview && (
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

            {imageGallery4Code && (
                <Showcode
                    code='
import React from "react";

const ImageGallery = () => {
  return (
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
  );
};

export default ImageGallery;  
            '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"image Gallery 5"} id={"image_gallery_5"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an image gallery with a complex layout for detailed and organized viewing.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${imageGallery5Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      imageGallery5Preview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleImageGallery5Preview}
              >
                Preview
              </button>
              <button
                  className={`${
                      imageGallery5Code && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleImageGallery5Code}
              >
                Code
              </button>
            </div>
            {imageGallery5Preview && (
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

            {imageGallery5Code && (
                <Showcode
                    code='
import React from "react";

const ImageGallery = () => {
  return (
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
  );
};

export default ImageGallery;  
            '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
                text={"image Gallery with title bar"}
                id={"image_gallery_6"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is an image gallery with a stylish layout featuring title text and icons for enhanced visual appeal.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${titleImageGalleryPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      titleImageGalleryPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleTitleImageGalleryPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      titleImageGalleryCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleTitleImageGalleryCode}
              >
                Code
              </button>
            </div>
            {titleImageGalleryPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="grid grid-cols-2 640px:grid-cols-3 gap-2">
                    <div className="relative">
                      <img
                          src="https://img.freepik.com/free-photo/waterfall-nature-thailand_335224-989.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.2.71340048.1688965399&semt=sph"
                          alt=""
                          className="w-full h-full object-cover"
                      />

                      <div
                          className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
                        <div className="">
                          <h3 className="text-[1rem] font-[600]">Natural</h3>
                          <p className="text-[0.9rem]">@prokas</p>
                        </div>
                        <p>
                          <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]"/>
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                          src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.2.71340048.1688965399&semt=sph"
                          alt=""
                          className="w-full h-full object-cover"
                      />

                      <div
                          className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
                        <div className="">
                          <h3 className="text-[1rem] font-[600]">Natural</h3>
                          <p className="text-[0.9rem]">@prokas</p>
                        </div>
                        <p>
                          <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]"/>
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                          src="https://img.freepik.com/free-photo/island-view-from-sea_1127-2244.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.2.71340048.1688965399&semt=sph"
                          alt=""
                          className="w-full h-full object-cover"
                      />
                      <div
                          className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
                        <div className="">
                          <h3 className="text-[1rem] font-[600]">Natural</h3>
                          <p className="text-[0.9rem]">@prokas</p>
                        </div>
                        <p>
                          <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]"/>
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                          src="https://img.freepik.com/free-photo/footpath-beautiful-arch-flowers-plants_181624-16890.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.2.71340048.1688965399&semt=sph"
                          alt=""
                          className="w-full h-full object-cover"
                      />
                      <div
                          className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
                        <div className="">
                          <h3 className="text-[1rem] font-[600]">Natural</h3>
                          <p className="text-[0.9rem]">@prokas</p>
                        </div>
                        <p>
                          <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]"/>
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                          src="https://img.freepik.com/free-photo/green-park-view_1417-1487.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                          alt=""
                          className="w-full h-full object-cover"
                      />
                      <div
                          className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
                        <div className="">
                          <h3 className="text-[1rem] font-[600]">Natural</h3>
                          <p className="text-[0.9rem]">@prokas</p>
                        </div>
                        <p>
                          <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]"/>
                        </p>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                          src="https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                          alt=""
                          className="w-full h-full object-cover"
                      />
                      <div
                          className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
                        <div className="">
                          <h3 className="text-[1rem] font-[600]">Natural</h3>
                          <p className="text-[0.9rem]">@prokas</p>
                        </div>
                        <p>
                          <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]"/>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {titleImageGalleryCode && (
                <Showcode
                    code='
import React from "react";

// icons
import { IoIosInformationCircle } from "react-icons/io";

const ImageGalleryWithTitleBar = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/waterfall-nature-thailand_335224-989.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.2.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
          <div className="">
            <h3 className="text-[1rem] font-[600]">Natural</h3>
            <p className="text-[0.9rem]">@prokas</p>
          </div>
          <p>
            <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]" />
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/morskie-oko-tatry_1204-510.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.2.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
          <div className="">
            <h3 className="text-[1rem] font-[600]">Natural</h3>
            <p className="text-[0.9rem]">@prokas</p>
          </div>
          <p>
            <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]" />
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/island-view-from-sea_1127-2244.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.2.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
          <div className="">
            <h3 className="text-[1rem] font-[600]">Natural</h3>
            <p className="text-[0.9rem]">@prokas</p>
          </div>
          <p>
            <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]" />
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/footpath-beautiful-arch-flowers-plants_181624-16890.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.2.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
          <div className="">
            <h3 className="text-[1rem] font-[600]">Natural</h3>
            <p className="text-[0.9rem]">@prokas</p>
          </div>
          <p>
            <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]" />
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/green-park-view_1417-1487.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
          <div className="">
            <h3 className="text-[1rem] font-[600]">Natural</h3>
            <p className="text-[0.9rem]">@prokas</p>
          </div>
          <p>
            <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]" />
          </p>
        </div>
      </div>
      <div className="relative">
        <img
          src="https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-152184.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="w-full px-4 py-2 backdrop-blur-[2px] absolute bottom-0 left-0 flex justify-between">
          <div className="">
            <h3 className="text-[1rem] font-[600]">Natural</h3>
            <p className="text-[0.9rem]">@prokas</p>
          </div>
          <p>
            <IoIosInformationCircle className="text-[1.4rem] cursor-pointer text-[#00000093]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
              '
                />
            )}
          </div>

          <OverviewFooter backUrl='/components/appbar' backName='app bar' forwardName='pagination' forwardUrl='/components/pagination'/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#image_gallery_1"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Image Gallery 1
          </a>
          <a
              href="#image_gallery_2"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Image Gallery 2
          </a>
          <a
              href="#image_gallery_3"
              className={`${
                  contentActiveTab === 3 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(3)}
          >
            Image Gallery 3
          </a>
          <a
              href="#image_gallery_4"
              className={`${
                  contentActiveTab === 4 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(4)}
          >
            Image Gallery 4
          </a>
          <a
              href="#image_gallery_5"
              className={`${
                  contentActiveTab === 5 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(5)}
          >
            Image Gallery 5
          </a>
          <a
              href="#image_gallery_6"
              className={`${
                  contentActiveTab === 6 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(6)}
          >
            Image Gallery 6
          </a>
          <div data-ea-publisher="zenuinet" className='w-full' data-ea-type="image"></div>
        </div>
      </aside>
      <Helmet>
        <title>Surfaces - Image Gallery</title>
      </Helmet>
    </>
  );
};

export default ImageGallery;
