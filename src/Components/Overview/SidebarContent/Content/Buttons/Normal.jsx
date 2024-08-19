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
  const [isPreview, setIsPreview] = useState(true);
  const [isCode, setIsCode] = useState(false);

  const handleOnCode = () => {
    setIsCode(true);
    setIsPreview(false);
  };

  const handleOnPreview = () => {
    setIsPreview(true);
    setIsCode(false);
  };


  return (
    <>
      <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
        <div>
          <ContentHeader text={"normal button"} id={"normal_button"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Buttons like this are used a lot on our websites and are very easy
            to create but you can copy the codes from here to save your time.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${isPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      isPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleOnPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      isCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleOnCode}
              >
                Code
              </button>
            </div>
            {isPreview && (
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

            {isCode && (
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
            Buttons like this are used a lot on our websites and are very easy
            to create but you can copy the codes from here to save your time.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${isPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      isPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleOnPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      isCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleOnCode}
              >
                Code
              </button>
            </div>
            {isPreview && (
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

            {isCode && (
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
            <ContentHeader text={"playstore button"} id={"playstore_button"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Buttons like this are used a lot on our websites and are very easy
            to create but you can copy the codes from here to save your time.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${isPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      isPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleOnPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      isCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleOnCode}
              >
                Code
              </button>
            </div>
            {isPreview && (
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

            {isCode && (
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
            <ContentHeader text={"download button"} id={"download_button"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Buttons like this are used a lot on our websites and are very easy
            to create but you can copy the codes from here to save your time.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${isPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      isPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleOnPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      isCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleOnCode}
              >
                Code
              </button>
            </div>
            {isPreview && (
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

            {isCode && (
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
            <ContentHeader text={"add to cart button"} id={"add_to_cart_button"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Buttons like this are used a lot on our websites and are very easy
            to create but you can copy the codes from here to save your time.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${isPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      isPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleOnPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      isCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleOnCode}
              >
                Code
              </button>
            </div>
            {isPreview && (
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

            {isCode && (
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
            <ContentHeader text={"variants button"} id={"variants_button"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Buttons like this are used a lot on our websites and are very easy
            to create but you can copy the codes from here to save your time.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${isPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      isPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleOnPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      isCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleOnCode}
              >
                Code
              </button>
            </div>
            {isPreview && (
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

            {isCode && (
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
            <ContentHeader text={"buttons shape"} id={"buttons_shape"} />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            Buttons like this are used a lot on our websites and are very easy
            to create but you can copy the codes from here to save your time.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${isPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      isPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleOnPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      isCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleOnCode}
              >
                Code
              </button>
            </div>
            {isPreview && (
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

            {isCode && (
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

          <OverviewFooter/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[40%]">
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
              href="#background_animated"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Background Animated
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Buttons - Normal Button</title>
      </Helmet>
    </>
  );
};

export default Normal;
