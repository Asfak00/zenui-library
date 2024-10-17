import React, { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import {MdOutlineEdit, MdOutlineFileDownload, MdOutlineShoppingCart} from "react-icons/md";
import {FaArrowRightLong, FaPlus} from "react-icons/fa6";
import {RxCross2} from "react-icons/rx";
import {BiMessageDetail} from "react-icons/bi";
import {AiOutlineDelete} from "react-icons/ai";
import {IoCodeSlashOutline} from "react-icons/io5";

const Normal = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // normal button
  const [normalButtonPreview, setNormalButtonPreview] = useState(true);
  const [normalButtonCode, setNormalButtonCode] = useState(false);

  const handleNormalButtonPreview = () => {
    setNormalButtonPreview(true);
    setNormalButtonCode(false);
  };

  const handleNormalButtonCode = () => {
    setNormalButtonCode(true);
    setNormalButtonPreview(false);
  };

  // app store button
  const [appStoreButtonPreview, setAppStoreButtonPreview] = useState(true);
  const [appStoreButtonCode, setAppStoreButtonCode] = useState(false);

  const handleAppStoreButtonPreview = () => {
    setAppStoreButtonPreview(true);
    setAppStoreButtonCode(false);
  };

  const handleAppStoreButtonCode = () => {
    setAppStoreButtonCode(true);
    setAppStoreButtonPreview(false);
  };

  // play store button
  const [playStoreButtonPreview, setPlayStoreButtonPreview] = useState(true);
  const [playStoreButtonCode, setPlayStoreButtonCode] = useState(false);

  const handlePlayStoreButtonPreview = () => {
    setPlayStoreButtonPreview(true);
    setPlayStoreButtonCode(false);
  };

  const handlePlayStoreButtonCode = () => {
    setPlayStoreButtonCode(true);
    setPlayStoreButtonPreview(false);
  };

  // download button
  const [downloadButtonPreview, setDownloadButtonPreview] = useState(true);
  const [downloadButtonCode, setDownloadButtonCode] = useState(false);

  const handleDownloadButtonPreview = () => {
    setDownloadButtonPreview(true);
    setDownloadButtonCode(false);
  };

  const handleDownloadButtonCode = () => {
    setDownloadButtonCode(true);
    setDownloadButtonPreview(false);
  };

  // add to cart button
  const [addCartButtonPreview, setAddCartButtonPreview] = useState(true);
  const [addCartButtonCode, setAddCartButtonCode] = useState(false);

  const handleAddCartButtonPreview = () => {
    setAddCartButtonPreview(true);
    setAddCartButtonCode(false);
  };

  const handleAddCartButtonCode = () => {
    setAddCartButtonCode(true);
    setAddCartButtonPreview(false);
  };

  // variants button
  const [variantButtonPreview, setVariantButtonPreview] = useState(true);
  const [variantButtonCode, setVariantButtonCode] = useState(false);

  const handleVariantButtonPreview = () => {
    setVariantButtonPreview(true);
    setVariantButtonCode(false);
  };

  const handleVariantButtonCode = () => {
    setVariantButtonCode(true);
    setVariantButtonPreview(false);
  };

  // shape button
  const [shapeButtonPreview, setShapeButtonPreview] = useState(true);
  const [shapeButtonCode, setShapeButtonCode] = useState(false);

  const handleShapeButtonPreview = () => {
    setShapeButtonPreview(true);
    setShapeButtonCode(false);
  };

  const handleShapeButtonCode = () => {
    setShapeButtonCode(true);
    setShapeButtonPreview(false);
  };


  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div>
          <ContentHeader text={"normal button"} id={"normal_button"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Buttons like this are used a lot on our websites and are very easy
            to create but you can copy the codes from here to save your time.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${normalButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      normalButtonPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleNormalButtonPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      normalButtonCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleNormalButtonCode}
              >
                Code
              </button>
            </div>
            {normalButtonPreview && (
                <div className="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center">
                  <button
                      className="px-6 py-2 border border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary transition duration-300 rounded ">
                    Button 1
                  </button>
                  <button
                      className="px-6 py-2 border border-primary hover:bg-primary text-primary hover:text-secondary  transition duration-300 rounded ">
                    Button 2
                  </button>
                </div>
            )}

            {normalButtonCode && (
                <Showcode
                    code={`
// button 1
<button className="px-6 py-2 border border-[#3B9DF8] bg-[#3B9DF8] 
text-[#ffffff] hover:bg-[#ffffff] hover:text-primary transition duration-300 rounded"> Button
</button>

// button 2
<button className="px-6 py-2 border border-[#3B9DF8] hover:bg-[#3B9DF8] text-[#3B9DF8] 
hover:text-[#ffffff]  transition duration-300 rounded "> Button
</button>
`}
                />
            )}
          </div>

          <div className='mt-8'>
            <ContentHeader text={"Appstore button"} id={"appstore_button"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Button designed for downloading or accessing apps on the App Store, linking directly to the app's store page.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${appStoreButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      appStoreButtonPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleAppStoreButtonPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      appStoreButtonCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleAppStoreButtonCode}
              >
                Code
              </button>
            </div>
            {appStoreButtonPreview && (
                <div className="p-8 mb-4 flex flex-col items-center flex-wrap gap-5 justify-center">
                  <button
                      className="px-6 py-2 bg-black rounded-md flex items-center gap-[17px]">
                    <img src='https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png' alt='apple logo'
                         className='w-[35px]'/>
                    <div>
                      <span className='text-[0.8rem] font-[500] text-secondary'>Download on the</span>
                      <h3 className='text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary'>AppStore</h3>
                    </div>
                  </button>

                  <button
                      className="px-6 py-2 border border-text rounded-md flex items-center gap-[17px]">
                    <img src='https://i.ibb.co/6NFjc6z/download-removebg-preview.png' alt='apple logo'
                         className='w-[32px]'/>
                    <div>
                      <span className='text-text text-[0.8rem] font-[500]'>Download on the</span>
                      <h3 className='text-[1.5rem] font-[500] leading-[20px] mb-2'>AppStore</h3>
                    </div>
                  </button>

                  <button
                      className="px-6 py-2 bg-gradient-to-t from-pink-600 to-pink-300 rounded-md flex items-center gap-[17px]">
                    <img src='https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png' alt='apple logo'
                         className='w-[35px]'/>
                    <div>
                      <span className='text-secondary text-[0.8rem] font-[500]'>Download on the</span>
                      <h3 className='text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary'>AppStore</h3>
                    </div>
                  </button>
                </div>
            )}

            {appStoreButtonCode && (
                <Showcode
                    code='
            {/* black background button */}
            <button
                className="px-6 py-2 bg-black rounded-md flex items-center gap-[17px]">
                <img src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png" alt="apple logo"
                     className="w-[35px]"/>
                <div>
                    <span className="text-[0.8rem] font-[500] text-secondary">Download on the</span>
                    <h3 className="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary">AppStore</h3>
                </div>
            </button>

            {/* bordered button */}
            <button
                className="px-6 py-2 border border-text rounded-md flex items-center gap-[17px]">
                <img src="https://i.ibb.co/6NFjc6z/download-removebg-preview.png" alt="apple logo"
                     className="w-[32px]"/>
                <div>
                    <span className="text-text text-[0.8rem] font-[500]">Download on the</span>
                    <h3 className="text-[1.5rem] font-[500] leading-[20px] mb-2">AppStore</h3>
                </div>
            </button>

            {/* gradient background button */}
            <button
                className="px-6 py-2 bg-gradient-to-t from-pink-600 to-pink-300 rounded-md flex items-center gap-[17px]">
                <img src="https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png" alt="apple logo"
                     className="w-[35px]"/>
                <div>
                    <span className="text-secondary text-[0.8rem] font-[500]">Download on the</span>
                    <h3 className="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary">AppStore</h3>
                </div>
            </button>
                    '
                />
            )}
          </div>

          <div className='mt-8'>
            <ContentHeader text={"playstore button"} id={"playstore_button"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Button for downloading or accessing apps on the Play Store, linking directly to the app's store page.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${playStoreButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      playStoreButtonPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handlePlayStoreButtonPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      playStoreButtonCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handlePlayStoreButtonCode}
              >
                Code
              </button>
            </div>
            {playStoreButtonPreview && (
                <div className="p-8 mb-4 flex flex-col items-center flex-wrap gap-5 justify-center">
                  <button
                      className="px-6 py-2 bg-black rounded-md flex items-center gap-[17px]">
                    <img src='https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png' alt='playstore logo'
                         className='w-[35px]'/>
                    <div className='flex items-start flex-col'>
                      <span className='text-[0.850rem] font-[500] text-secondary'>Get it on</span>
                      <h3 className='text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary'>Google Play</h3>
                    </div>
                  </button>

                  <button
                      className="px-6 py-2 border border-text rounded-md flex items-center gap-[17px]">
                    <img src='https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png' alt='playstore logo'
                         className='w-[35px]'/>
                    <div className='flex items-start flex-col'>
                      <span className='text-[0.850rem] font-[500] text-text'>Get it on</span>
                      <h3 className='text-[1.5rem] font-[500] leading-[20px] mb-2'>Google Play</h3>
                    </div>
                  </button>

                  <button
                      className="px-6 py-2 bg-black rounded-md flex items-center gap-[17px]">
                    <img src='https://i.ibb.co/0f4qnNX/images-removebg-preview.png' alt='playstore logo'
                         className='w-[40px]'/>
                    <div className='flex items-start flex-col'>
                      <span className='text-[0.850rem] font-[500] text-secondary'>Get it on</span>
                      <h3 className='text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary'>Google Play</h3>
                    </div>
                  </button>


                  <button
                      className="px-6 py-2 border border-text rounded-md flex items-center gap-[17px]">
                    <img src='https://i.ibb.co/p1c3nqd/download-3-removebg-preview.png' alt='playstore logo'
                         className='w-[35px]'/>
                    <div className='flex items-start flex-col'>
                      <span className='text-[0.850rem] font-[500] text-text'>Get it on</span>
                      <h3 className='text-[1.5rem] font-[500] leading-[20px] mb-2'>Google Play</h3>
                    </div>
                  </button>

                  <button
                      className="px-6 py-2 bg-gradient-to-t from-pink-600 to-pink-300 rounded-md flex items-center gap-[17px]">
                    <img src='https://i.ibb.co/0f4qnNX/images-removebg-preview.png' alt='playstore logo'
                         className='w-[40px]'/>
                    <div className='flex items-start flex-col'>
                      <span className='text-[0.850rem] font-[500] text-secondary'>Get it on</span>
                      <h3 className='text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary'>Google Play</h3>
                    </div>
                  </button>
                </div>
            )}

            {playStoreButtonCode && (
                <Showcode
                    code='
            {/* colorful logo with black background button */}
            <button
                className="px-6 py-2 bg-black rounded-md flex items-center gap-[17px]">
                <img src="https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png" alt="playstore logo"
                     className="w-[35px]"/>
                <div className="flex items-start flex-col">
                    <span className="text-[0.850rem] font-[500] text-secondary">Get it on</span>
                    <h3 className="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary">Google Play</h3>
                </div>
            </button>

            {/* colorful logo with bordered button */}
            <button
                className="px-6 py-2 border border-text rounded-md flex items-center gap-[17px]">
                <img src="https://i.ibb.co/s9dSrDs/download-2-removebg-preview-1.png" alt="playstore logo"
                     className="w-[35px]"/>
                <div className="flex items-start flex-col">
                    <span className="text-[0.850rem] font-[500] text-text">Get it on</span>
                    <h3 className="text-[1.5rem] font-[500] leading-[20px] mb-2">Google Play</h3>
                </div>
            </button>

            {/* solid color logo with black background */}
            <button
                className="px-6 py-2 bg-black rounded-md flex items-center gap-[17px]">
                <img src="https://i.ibb.co/0f4qnNX/images-removebg-preview.png" alt="playstore logo"
                     className="w-[40px]"/>
                <div className="flex items-start flex-col">
                    <span className="text-[0.850rem] font-[500] text-secondary">Get it on</span>
                    <h3 className="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary">Google Play</h3>
                </div>
            </button>

            {/* solid color logo with bordered button */}
            <button
                className="px-6 py-2 border border-text rounded-md flex items-center gap-[17px]">
                <img src="https://i.ibb.co/p1c3nqd/download-3-removebg-preview.png" alt="playstore logo"
                     className="w-[35px]"/>
                <div className="flex items-start flex-col">
                    <span className="text-[0.850rem] font-[500] text-text">Get it on</span>
                    <h3 className="text-[1.5rem] font-[500] leading-[20px] mb-2">Google Play</h3>
                </div>
            </button>

            {/* solid color logo with gradient background */}
            <button
                className="px-6 py-2 bg-gradient-to-t from-pink-600 to-pink-300 rounded-md flex items-center gap-[17px]">
                <img src="https://i.ibb.co/0f4qnNX/images-removebg-preview.png" alt="playstore logo"
                     className="w-[40px]"/>
                <div className="flex items-start flex-col">
                    <span className="text-[0.850rem] font-[500] text-secondary">Get it on</span>
                    <h3 className="text-[1.5rem] font-[500] leading-[20px] mb-2 text-secondary">Google Play</h3>
                </div>
            </button>
                    '
                />
            )}
          </div>

          <div className='mt-8'>
            <ContentHeader text={"download button"} id={"download_button"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Button for initiating file or content downloads, providing a direct link to download resources.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${downloadButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      downloadButtonPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleDownloadButtonPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      downloadButtonCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleDownloadButtonCode}
              >
                Code
              </button>
            </div>
            {downloadButtonPreview && (
                <div className="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center">
                  <button
                      className="px-4 py-2 bg-primary text-white text-[1.1rem] rounded-md flex items-center gap-[7px]">
                    <MdOutlineFileDownload className='text-[1.4rem]'/> Download
                  </button>

                  <button
                      className="px-4 py-2 border border-primary text-primary text-[1.1rem] rounded-md flex items-center gap-[7px]">
                     Download <MdOutlineFileDownload className='text-[1.4rem]'/>
                  </button>

                  <button
                      className="bg-primary text-white text-[1.1rem] rounded-md flex items-center">
                    <span className='px-4 py-2'>Download</span>
                    <div className='w-[40px] h-[43px] rounded-r-md bg-blue-500 hover:bg-blue-600 flex items-center justify-center'>
                      <MdOutlineFileDownload className='text-[1.4rem]'/>
                    </div>
                  </button>

                  <button
                      className=" border border-primary text-primary text-[1.1rem] rounded-full flex items-center">
                    <div
                        className='w-[36px] h-[36px] rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center ml-1'>
                      <MdOutlineFileDownload className='text-[1.4rem] text-white'/>
                    </div>

                    <span className='pr-4 pl-2 py-2'>Download</span>

                  </button>
                </div>
            )}

            {downloadButtonCode && (
                <Showcode
                    code='
            {/* solid color download button */}
            <button
                className="px-4 py-2 bg-primary text-white text-[1.1rem] rounded-md flex items-center gap-[7px]">
                <MdOutlineFileDownload className="text-[1.4rem]"/> Download
            </button>

            {/* bordered download button */}
            <button
                className="px-4 py-2 border border-primary text-primary text-[1.1rem] rounded-md flex items-center gap-[7px]">
                Download <MdOutlineFileDownload className="text-[1.4rem]"/>
            </button>

            {/* button background solid color and icon background deep color button */}
            <button
                className="bg-primary text-white text-[1.1rem] rounded-md flex items-center">
                <span className="px-4 py-2">Download</span>
                <div
                    className="w-[40px] h-[43px] rounded-r-md bg-blue-500 hover:bg-blue-600 flex items-center justify-center">
                    <MdOutlineFileDownload className="text-[1.4rem]"/>
                </div>
            </button>

            {/* bordered button and icon have background color */}
            <button
                className=" border border-primary text-primary text-[1.1rem] rounded-full flex items-center">
                <div
                    className="w-[36px] h-[36px] rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center ml-1">
                    <MdOutlineFileDownload className="text-[1.4rem] text-white"/>
                </div>

                <span className="pr-4 pl-2 py-2">Download</span>

            </button>
                    '
                />
            )}
          </div>

          <div className='mt-8'>
            <ContentHeader text={"add to cart button"} id={"add_to_cart_button"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Button that adds selected items to the shopping cart, streamlining the purchasing process.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${addCartButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      addCartButtonPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleAddCartButtonPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      addCartButtonCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleAddCartButtonCode}
              >
                Code
              </button>
            </div>
            {addCartButtonPreview && (
                <div className="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center">
                  <button
                      className="px-4 py-2 bg-primary text-white text-[1.1rem] rounded-md flex items-center gap-[7px]">
                    <MdOutlineShoppingCart className='text-[1.4rem]'/> Add to cart
                  </button>

                  <button
                      className=" border border-primary text-primary text-[1.1rem] rounded-full flex items-center">
                    <div
                        className='w-[36px] h-[36px] rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center ml-1'>
                      <MdOutlineShoppingCart className='text-[1.4rem] text-white'/>
                    </div>

                    <span className='pr-4 pl-2 py-2'>Add to cart</span>

                  </button>
                </div>
            )}

            {addCartButtonCode && (
                <Showcode
                    code='
            {/* solid background color cart button */}
            <button
                className="px-4 py-2 bg-primary text-white text-[1.1rem] rounded-md flex items-center gap-[7px]">
                <MdOutlineShoppingCart className="text-[1.4rem]"/> Add to cart
            </button>

            {/* bordered cart button */}
            <button
                className=" border border-primary text-primary text-[1.1rem] rounded-full flex items-center">
                <div
                    className="w-[36px] h-[36px] rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center ml-1">
                    <MdOutlineShoppingCart className="text-[1.4rem] text-white"/>
                </div>

                <span className="pr-4 pl-2 py-2">Add to cart</span>

            </button>
                    '
                />
            )}
          </div>

          <div className='mt-8'>
            <ContentHeader text={"variants button"} id={"variants_button"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Button with multiple design variants, allowing customization in style, color, and size to fit different use cases.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${variantButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      variantButtonPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleVariantButtonPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      variantButtonCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleVariantButtonCode}
              >
                Code
              </button>
            </div>
            {variantButtonPreview && (
                <div className="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center">
                  <button
                      className="px-4 py-2 bg-primary text-white text-[1.1rem] rounded-full flex items-center gap-[10px]">
                    <FaPlus className='text-[1.1rem]'/> Create
                  </button>

                  <button className="bg-primary w-[40px] h-[40px] rounded-full flex items-center justify-center text-white">
                    <FaPlus/>
                  </button>

                  <button className="bg-primary w-[40px] h-[40px] rounded-full flex items-center justify-center text-white">
                    <RxCross2 />
                  </button>

                  <button className="border border-primary text-primary w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <RxCross2 />
                  </button>

                  <button className="border border-primary text-primary w-[40px] h-[40px] rounded-md flex items-center justify-center">
                    <BiMessageDetail className='text-[1.3rem]'/>
                  </button>

                  <button className="border border-primary text-primary w-[40px] h-[40px] rounded-md flex items-center justify-center">
                    <AiOutlineDelete className='text-[1.3rem]'/>
                  </button>

                  <button className="bg-primary py-2 px-4 rounded-md flex items-center gap-[12px] text-[1rem] text-white">
                    View page
                    <FaArrowRightLong className='text-[1.1rem]'/>
                  </button>

                  <button className="bg-primary py-2 px-4 rounded-md flex items-center gap-[8px] text-[1rem] text-white">
                    <MdOutlineEdit className='text-[1.1rem]'/>
                    Edit
                  </button>

                  <button className="border border-primary text-primary py-2 px-4 rounded-md flex items-center gap-[8px] text-[1rem]">
                    <IoCodeSlashOutline className='text-[1.2rem]'/>
                    Developer
                  </button>
                </div>
            )}

            {variantButtonCode && (
                <Showcode
                    code='
            {/* text with icon create button */}
            <button
                className="px-4 py-2 bg-primary text-white text-[1.1rem] rounded-full flex items-center gap-[10px]">
                <FaPlus className="text-[1.1rem]"/> Create
            </button>

            {/* icon create button */}
            <button className="bg-primary w-[40px] h-[40px] rounded-full flex items-center justify-center text-white">
                <FaPlus/>
            </button>

            {/* cross button with background color */}
            <button className="bg-primary w-[40px] h-[40px] rounded-full flex items-center justify-center text-white">
                <RxCross2/>
            </button>

            {/* bordered cross button */}
            <button
                className="border border-primary text-primary w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <RxCross2/>
            </button>

            {/* bordered message button */}
            <button
                className="border border-primary text-primary w-[40px] h-[40px] rounded-md flex items-center justify-center">
                <BiMessageDetail className="text-[1.3rem]"/>
            </button>

            {/* bordered delete button */}
            <button
                className="border border-primary text-primary w-[40px] h-[40px] rounded-md flex items-center justify-center">
                <AiOutlineDelete className="text-[1.3rem]"/>
            </button>

            {/* view page button with arrow icon */}
            <button className="bg-primary py-2 px-4 rounded-md flex items-center gap-[12px] text-[1rem] text-white">
                View page
                <FaArrowRightLong className="text-[1.1rem]"/>
            </button>

            {/* edit button with edit icon */}
            <button className="bg-primary py-2 px-4 rounded-md flex items-center gap-[8px] text-[1rem] text-white">
                <MdOutlineEdit className="text-[1.1rem]"/>
                Edit
            </button>

            {/* bordered developer button with code icon */}
            <button
                className="border border-primary text-primary py-2 px-4 rounded-md flex items-center gap-[8px] text-[1rem]">
                <IoCodeSlashOutline className="text-[1.2rem]"/>
                Developer
            </button>
                    '
                />
            )}
          </div>

          <div className='mt-8'>
            <ContentHeader text={"buttons shape"} id={"buttons_shape"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Buttons with various shapes, offering options like rounded, square, or pill-shaped designs to match different UI styles.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${shapeButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
              <button
                  className={`${
                      shapeButtonPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleShapeButtonPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      shapeButtonCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleShapeButtonCode}
              >
                Code
              </button>
            </div>
            {shapeButtonPreview && (
                <div className="p-8 mb-4 flex items-center flex-wrap gap-5 justify-center">
                  <button
                      className='py-2.5 px-6 border border-primary text-primary rounded-tr-[30px] rounded-bl-[30px] hover:bg-primary hover:text-white transition-all duration-200'>
                    ZenUI Library
                  </button>

                  <button
                      className='py-2.5 px-6 border border-primary text-primary rounded-tl-[30px] rounded-br-[30px] hover:bg-primary hover:text-white transition-all duration-200'>
                    ZenUI Library
                  </button>
                </div>
            )}

            {shapeButtonCode && (
                <Showcode
                    code='
            {/* left side shape button */}
            <button
                className="py-2.5 px-6 border border-primary text-primary rounded-tr-[30px] rounded-bl-[30px] hover:bg-primary hover:text-white transition-all duration-200">
                ZenUI Library
            </button>

            {/* right side shape button */}
            <button
                className="py-2.5 px-6 border border-primary text-primary rounded-tl-[30px] rounded-br-[30px] hover:bg-primary hover:text-white transition-all duration-200">
                ZenUI Library
            </button>
                    '
                />
            )}
          </div>

          <OverviewFooter backUrl='/components/otp-input' backName='OTP input' forwardName='login button' forwardUrl='/components/login-buttons'/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#normal_button"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Normal Button
          </a>
          <a
              href="#appstore_button"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Appstore button
          </a>
          <a
              href="#playstore_button"
              className={`${
                  contentActiveTab === 3 && "!text-primary !border-primary"
              } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(3)}
          >
            playstore button
          </a>
          <a
              href="#download_button"
              className={`${
                  contentActiveTab === 4 && "!text-primary !border-primary"
              } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(4)}
          >
            download button
          </a>
          <a
              href="#add_to_cart_button"
              className={`${
                  contentActiveTab === 5 && "!text-primary !border-primary"
              } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(5)}
          >
            add to cart button
          </a>
          <a
              href="#variants_button"
              className={`${
                  contentActiveTab === 6 && "!text-primary !border-primary"
              } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(6)}
          >
            variants button
          </a>
          <a
              href="#buttons_shape"
              className={`${
                  contentActiveTab === 7 && "!text-primary !border-primary"
              } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(7)}
          >
            buttons shape
          </a>
          <div data-ea-publisher="zenuinet" className='w-full' data-ea-type="image"></div>
        </div>
      </aside>
      <Helmet>
        <title>Buttons - Normal Button</title>
      </Helmet>
    </>
  );
};

export default Normal;
