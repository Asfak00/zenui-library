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
import {
  FaUser,
  FaQuoteLeft,
  FaRegStar,
  FaStar,
  FaQuoteRight,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Testimonial = () => {
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

  return (
    <>
      <aside>
        <ContentHeader text={"testimonial 1"} />

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
              <div className="w-[60%] p-4 bg-secondary shadow-2xl rounded-lg relative">
                <FaQuoteLeft className=" absolute -top-2 left-[5%] text-[1.3rem] text-[#727272]" />
                <img
                  src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-[100px] h-[100px] object-cover rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 border-4 border-primary"
                />
                <p className="text-text text-[0.9rem] mt-16">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae non, explicabo cum dolorem temporibus alias odio quod
                  officiis nam. Debitis odio libero dolorum harum magnam
                  inventore ut molestias rerum sapiente!
                </p>

                <div className="flex items-start mt-5 justify-between">
                  <div>
                    <h2 className="text-[1.2rem] font-[600]">Jhone Dehon</h2>
                    <p className="text-[1rem] text-[#727272]">CEO of Miracle</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[1.3rem] text-[#ffba24]" />
                    <FaStar className="text-[1.3rem] text-[#ffba24]" />
                    <FaStar className="text-[1.3rem] text-[#ffba24]" />
                    <FaStar className="text-[1.3rem] text-[#ffba24]" />
                    <FaRegStar className="text-[#ffba24] text-[1.3rem]" />
                  </div>
                </div>
                <FaQuoteLeft className=" absolute -bottom-2 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]" />
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
          <ContentHeader text={"testimonial 2"} />
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
              <div className="w-[60%] p-4 bg-secondary shadow-2xl rounded-lg relative">
                <FaQuoteLeft className=" absolute -top-2 left-[5%] text-[1.3rem] text-[#727272]" />
                <img
                  src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?size=626&ext=jpg&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-[100px] h-[100px] object-cover rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2 border-4 border-primary"
                />
                <p className="text-text text-[0.9rem] mt-16">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae non, explicabo cum dolorem temporibus alias odio quod
                  officiis nam. Debitis odio libero dolorum harum magnam
                  inventore ut molestias rerum sapiente!
                </p>

                <div className="flex items-start mt-5 justify-between">
                  <div>
                    <h2 className="text-[1.2rem] font-[600]">Jhone Dehon</h2>
                    <p className="text-[1rem] text-[#727272]">CEO of Miracle</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-[1.3rem] text-[#ffba24]" />
                    <FaStar className="text-[1.3rem] text-[#ffba24]" />
                    <FaStar className="text-[1.3rem] text-[#ffba24]" />
                    <FaStar className="text-[1.3rem] text-[#ffba24]" />
                    <FaRegStar className="text-[#ffba24] text-[1.3rem]" />
                  </div>
                </div>
                <FaQuoteLeft className=" absolute -bottom-2 right-[5%] rotate-[180deg] text-[1.3rem] text-[#727272]" />
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
          <ContentHeader text={"testimonial 2"} />
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
              <div className="w-full p-4 bg-secondary shadow-2xl rounded-lg relative flex items-start justify-between gap-6">
                <div className="relative w-[50%]">
                  <img
                    src="https://img.freepik.com/free-photo/front-view-smiley-man-holding-laptop_23-2148946208.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=ais"
                    alt="demo/image"
                    className="w-full h-full object-cover"
                  />
                  <FaQuoteRight className=" absolute -top-5 right-[-5%] text-[3rem] text-[#ffffff] bg-primary p-3 rounded-full" />
                </div>
                <div className="w-[45%]">
                  <h3 className="text-[1.5rem] font-[500] capitalize">
                    help us improve our productivity
                  </h3>
                  <p className="text-text text-[0.8rem] mt-2 text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae non, explicabo cum dolorem temporibus alias odio quod
                    officiis nam. Lorem ipsum dolor sit amet.
                  </p>

                  <div className="mt-4">
                    <h2 className="text-[1rem] font-[500]">Jhone Dehon</h2>
                    <p className="text-[0.9rem] text-[#727272]">
                      CEO of Miracle
                    </p>
                  </div>
                </div>
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
          <ContentHeader text={"testimonial 3"} />
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
              <div className="w-[55%] bg-secondary shadow-2xl rounded-lg p-6">
                <h3 className="text-[1.5rem] font-[500] capitalize">
                  help us improve our productivity
                </h3>
                <p className=" text-justify text-[0.9rem] my-3 text-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nesciunt saepe quam doloremque nulla cumque vero sequi,
                  repellendus vel reiciendis? Eos totam quidem ducimus amet, in
                  fuga quia minus ab!
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                    alt="demo/image"
                    className="w-[40px] h-[40px] object-cover rounded-full"
                  />
                  <div>
                    <h2 className="text-[1rem] font-[500]">Jhone Dehon</h2>
                    <p className="text-[0.9rem] text-text">CEO of Miracle</p>
                  </div>
                </div>
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
          <ContentHeader text={"testimonial 4"} />
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
              <div className="w-[70%] bg-secondary shadow-2xl rounded-lg p-6 flex items-center justify-center flex-col">
                <img
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-[150px] h-[150px] object-cover rounded-full"
                />
                <h3 className="text-[1.5rem] font-[500] capitalize mt-4">
                  Jhone Dehon
                </h3>
                <p className="text-text text-[0.9rem]">London</p>

                <div className="flex items-center gap-1 my-4">
                  <FaStar className="text-[1.3rem] text-[#ffba24]" />
                  <FaStar className="text-[1.3rem] text-[#ffba24]" />
                  <FaStar className="text-[1.3rem] text-[#ffba24]" />
                  <FaStar className="text-[1.3rem] text-[#ffba24]" />
                  <FaRegStar className="text-[#ffba24] text-[1.3rem]" />
                </div>

                <div className="relative">
                  <p className=" text-justify text-[0.9rem] my-3 text-text ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                  </p>
                  <FaQuoteRight className="text-[3rem] text-[#d1d1d169] absolute top-[-20%] left-0 " />
                  <FaQuoteLeft className="text-[3rem] text-[#d1d1d169] absolute bottom-[0%] right-0 " />
                </div>
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
          <ContentHeader text={"testimonial 5"} />
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
              <div className="w-[75%] bg-primary text-secondary shadow-2xl rounded-lg p-6 relative">
                <FaQuoteRight className="text-[4rem] text-[#e9e9e959] absolute top-[10%] right-[10%] " />
                <div className="flex items-center gap-4 mt-4">
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                    alt="demo/image"
                    className="w-[40px] h-[40px] object-cover rounded-full"
                  />
                  <div>
                    <h2 className="text-[1rem] font-[500]">Jhone Dehon</h2>
                    <p className="text-[0.9rem] text-[#e9e9e9]">
                      CEO of Miracle
                    </p>
                  </div>
                </div>

                <h2 className="text-[1.5rem] capitalize font-[500] mt-5 leading-[30px]">
                  such a life changing experience, higly recomanded!
                </h2>

                <p className=" text-justify text-[0.9rem] my-3 text-[#e9e9e9]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nesciunt saepe quam doloremque nulla cumque vero sequi,
                  repellendus vel reiciendis? Eos totam quidem ducimus amet, in
                  fuga quia minus ab!
                </p>
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
          <ContentHeader text={"testimonial 6"} />
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
              <div className="w-[50%] bg-secondary shadow-2xl rounded-lg ">
                <div className="relative">
                  <img
                    src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                    alt="demo/image"
                    className="w-full h-[200px] object-cover border-b-[10px] border-[#e6e6e6]"
                  />
                  <FaQuoteRight className=" absolute -bottom-5 left-[5%] text-[3rem] text-[#ffffff] bg-primary p-3 rounded-full" />
                </div>
                <div className="p-6">
                  <p className=" text-justify text-[0.9rem] my-3 text-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                  </p>

                  <div className="mt-4">
                    <h2 className="text-[1rem] font-[500]">Jhone Dehon</h2>
                    <p className="text-[0.9rem] text-text">CEO of Miracle</p>
                  </div>
                </div>
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
          <ContentHeader text={"testimonial 7"} />
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
              <div className="w-full border border-primary shadow-2xl rounded-lg flex items-center justify-between gap-6 px-6 py-16">
                <img
                  src="https://img.freepik.com/free-photo/curly-man-with-broad-smile-shows-perfect-teeth-being-amused-by-interesting-talk-has-bushy-curly-dark-hair-stands-indoor-against-white-blank-wall_273609-17092.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                  alt="demo/image"
                  className="w-[180px] h-[180px] object-cover rounded-full"
                />

                <div className="w-[65%] relative">
                  <div className="flex items-center justify-between relative">
                    <FaQuoteRight className=" absolute top-[-150%] left-[0%] text-[2rem] text-primary" />
                    <div className="flex items-center gap-2">
                      <h2 className="text-[1rem] font-[500]">Jhone Dehon -</h2>
                      <p className="text-[0.9rem] text-[#9c9c9c]">
                        CEO of Miracle
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-[1.1rem] text-[#ffba24]" />
                      <FaStar className="text-[1.1rem] text-[#ffba24]" />
                      <FaStar className="text-[1.1rem] text-[#ffba24]" />
                      <FaStar className="text-[1.1rem] text-[#ffba24]" />
                      <FaRegStar className="text-[#ffba24] text-[1.1rem]" />
                    </div>
                  </div>
                  <h2 className="text-[1.5rem] font-[500] capitalize mt-1">
                    amazing customer service
                  </h2>
                  <p className=" text-justify text-[0.9rem] my-3 text-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque nesciunt saepe quam doloremque nulla cumque vero
                    sequi, repellendus vel reiciendis? Eos totam quidem ducimus
                    amet, in fuga quia minus ab!
                  </p>
                  <FaQuoteLeft className=" absolute bottom-[-10%] right-[0%] text-[2rem] text-primary" />
                </div>
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
        <title>Feedback - Testimonials</title>
      </Helmet>
    </>
  );
};

export default Testimonial;
