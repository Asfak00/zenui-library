import { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import {BsArrowRight, BsEye, BsSend, BsThreeDots, BsThreeDotsVertical} from "react-icons/bs";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight, FaFire,
  FaHeart, FaRegBookmark,
  FaRegDotCircle, FaRegHeart, FaStar,
} from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";
import {IoIosArrowDown, IoIosArrowUp, IoIosNotificationsOutline, IoIosRocket} from "react-icons/io";
import {RiArrowRightSLine, RiTeamFill} from "react-icons/ri";
import {BiComment, BiLike, BiRightArrowAlt, BiSolidLeaf} from "react-icons/bi";
import {MdDone, MdOutlineEmail, MdPlayArrow} from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import {IoBookmarkOutline, IoLocationOutline} from "react-icons/io5";
import {GoShareAndroid} from "react-icons/go";
import {AiOutlineDelete} from "react-icons/ai";


import {useToggleCardView} from "../../../../../Utils/ButtonToggle.js";

const Card = () => {
  // blog card
  const [blogCardPreview, setBlogCardPreview] = useState(true);
  const [blogCardCode, setBlogCardCode] = useState(false);
  const [contentActiveTab, setContentActiveTab] = useState(null);

  const handleBlogCardPreview = () => {
    setBlogCardPreview(true);
    setBlogCardCode(false);
  };

  const handleBlogCardCode = () => {
    setBlogCardCode(true);
    setBlogCardPreview(false);
  };
  // products card
  const [productCardPreview, setProductCardPreview] = useState(true);
  const [productCardCode, setProductCardCode] = useState(false);

  const handleProductCardPreview = () => {
    setProductCardPreview(true);
    setProductCardCode(false);
  };

  const handleProductCardCode = () => {
    setProductCardCode(true);
    setProductCardPreview(false);
  };
  //Music Card
  const [musicCardPreview, setMusicCardPreview] = useState(true);
  const [musicCardCode, setMusicCardCode] = useState(false);

  const handleMusicCardPreview = () => {
    setMusicCardPreview(true);
    setMusicCardCode(false);
  };

  const handleMusicCardCode = () => {
    setMusicCardCode(true);
    setMusicCardPreview(false);
  };
  // simple Profile card
  const [simpleProfileCardPreview, setSimpleProfileCardPreview] =
    useState(true);
  const [simpleProfileCardCode, setSimpleProfileCardCode] = useState(false);

  const handleSimpleProfileCardPreview = () => {
    setSimpleProfileCardPreview(true);
    setSimpleProfileCardCode(false);
  };

  const handleSimpleProfileCardCode = () => {
    setSimpleProfileCardCode(true);
    setSimpleProfileCardPreview(false);
  };

  // Profile Card
  const [profileCardPreview, setProfileCardPreview] = useState(true);
  const [profileCardCode, setProfileCardCode] = useState(false);

  const handleProfileCardPreview = () => {
    setProfileCardPreview(true);
    setProfileCardCode(false);
  };

  const handleProfileCardCode = () => {
    setProfileCardCode(true);
    setProfileCardPreview(false);
  };

  // Team Card
  const [teamCardPreview, setTeamCardPreview] = useState(true);
  const [teamCardCode, setTeamCardCode] = useState(false);

  const handleTeamCardPreview = () => {
    setTeamCardPreview(true);
    setTeamCardCode(false);
  };

  const handleTeamCardCode = () => {
    setTeamCardCode(true);
    setTeamCardPreview(false);
  };

  // Pricing Card
  const [pricingCardPreview, setPricingCardPreview] = useState(true);
  const [pricingCardCode, setPricingCardCode] = useState(false);

  const handlePricingCardPreview = () => {
    setPricingCardPreview(true);
    setPricingCardCode(false);
  };

  const handlePricingCardCode = () => {
    setPricingCardCode(true);
    setPricingCardPreview(false);
  };

  // Pricing Card 2
  const [pricingCard2Preview, setPricingCard2Preview] = useState(true);
  const [pricingCard2Code, setPricingCard2Code] = useState(false);

  const handlePricingCard2Preview = () => {
    setPricingCard2Preview(true);
    setPricingCard2Code(false);
  };

  const handlePricingCard2Code = () => {
    setPricingCard2Code(true);
    setPricingCard2Preview(false);
  };

  const toggleCardView = useToggleCardView();

  // random Card 1
  const [randomCardPreview1, setRandomCardPreview1] = useState(true);
  const [randomCardCode1, setRandomCardCode1] = useState(false);

  const [randomCardPreview2, setRandomCardPreview2] = useState(true);
  const [randomCardCode2, setRandomCardCode2] = useState(false);

  const [randomCardPreview3, setRandomCardPreview3] = useState(true);
  const [randomCardCode3, setRandomCardCode3] = useState(false);

  const [randomCardPreview4, setRandomCardPreview4] = useState(true);
  const [randomCardCode4, setRandomCardCode4] = useState(false);

  const [randomCardPreview5, setRandomCardPreview5] = useState(true);
  const [randomCardCode5, setRandomCardCode5] = useState(false);

  const [randomCardPreview6, setRandomCardPreview6] = useState(true);
  const [randomCardCode6, setRandomCardCode6] = useState(false);

  const [randomCardPreview7, setRandomCardPreview7] = useState(true);
  const [randomCardCode7, setRandomCardCode7] = useState(false);

  const [randomCardPreview8, setRandomCardPreview8] = useState(true);
  const [randomCardCode8, setRandomCardCode8] = useState(false);

  const [randomCardPreview9, setRandomCardPreview9] = useState(true);
  const [randomCardCode9, setRandomCardCode9] = useState(false);

  const [randomCardPreview10, setRandomCardPreview10] = useState(true);
  const [randomCardCode10, setRandomCardCode10] = useState(false);

  const [randomCardPreview11, setRandomCardPreview11] = useState(true);
  const [randomCardCode11, setRandomCardCode11] = useState(false);

  const [randomCardPreview12, setRandomCardPreview12] = useState(true);
  const [randomCardCode12, setRandomCardCode12] = useState(false);

  const [randomCardPreview13, setRandomCardPreview13] = useState(true);
  const [randomCardCode13, setRandomCardCode13] = useState(false);

  const [randomCardPreview14, setRandomCardPreview14] = useState(true);
  const [randomCardCode14, setRandomCardCode14] = useState(false);

  const [ticketCardPreview, setTicketCardPreview] = useState(true);
  const [ticketCardCode, setTicketCardCode] = useState(false);

  // dropdown control
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [openthreeDotMenu, setOpenThreeDotMenu] = useState(false);

  return (
    <>
      <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
        <div className="w-full 425px:w-[80%]">
          <ContentHeader id="ticket_card" text={"ticket Card"}/>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A compact card displaying essential ticket information such as title, location, and due date for quick reference.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded my-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${ticketCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      ticketCardPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setTicketCardPreview, setTicketCardCode, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      ticketCardCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setTicketCardPreview, setTicketCardCode, false)}
              >
                Code
              </button>
            </div>
            {ticketCardPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='bg-blue-50 w-full justify-between rounded-xl flex '>

                    {/* left side */}
                    <div className='flex flex-col p-[15px] 1024px:p-[20px] gap-[18px]'>
                      <h1 className='text-[1rem] 1024px:text-[1.3rem] font-bold text-blue-800'>Ticket Title</h1>
                      <div className='flex items-center gap-[10px]'>
                        <BsSend className='p-[8px] 1024px:p-[10px] rounded-xl bg-blue-100 text-blue-800 text-[2rem] 1024px:text-[3rem]'/>
                        <div>
                          <h4 className='text-[0.8rem] 1024px:text-[1.1rem] font-[600] text-gray-800'>Place Name</h4>
                          <p className='text-[0.6rem] 1024px:text-[0.9rem] font-[400] text-gray-500'>15-Dec-2020</p>
                        </div>
                      </div>
                      <div className='flex items-center gap-[10px]'>
                        <IoLocationOutline className='p-[8px] 1024px:p-[10px] rounded-xl bg-blue-100 text-blue-800 text-[2rem] 1024px:text-[3rem]'/>
                        <div>
                          <h4 className='text-[0.8rem] 1024px:text-[1.1rem] font-[600] text-gray-800'>Location</h4>
                          <p className='text-[0.6rem] 1024px:text-[0.9rem] font-[400] text-gray-500'>15-Dec-2020</p>
                        </div>
                      </div>
                    </div>

                    {/* right side */}
                    <div
                        className='flex flex-col justify-between relative w-[45%] 1024px:w-[40%] items-center border-l-[2px] p-[15px] 1024px:p-[20px]  border-dashed border-gray-200'>

                    {/* top carve */}
                      <div className='w-[45px] h-[45px] rounded-full bg-white absolute top-[-15%] 1024px:top-[-13%] 425px:left-[-13.5%] left-[-19%] 1024px:left-[-11.5%]'></div>

                      <h4 className='text-[0.9rem] 1024px:text-[1.3rem] font-bold text-blue-800'>9:00 AM</h4>

                      <button className='px-2 1024px:px-4 py-1 text-[0.8rem] 1024px:text-[1.1rem] 1024px:py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600'>Buy Ticket</button>

                      <p className='text-[0.9rem] 1024px:text-[1.1rem] text-gray-500'>Price: <span className='text-red-600 font-semibold'>$70</span></p>

                      {/* bottom carve */}
                      <div className='w-[45px] h-[45px] rounded-full bg-white absolute bottom-[-15%] 1024px:bottom-[-13%] left-[-18.5%] 425px:left-[-13.5%] 1024px:left-[-11.5%]'></div>
                    </div>
                  </div>
                </div>
            )}

            {ticketCardCode && (
                <Showcode
                    code='
import React from "react";

// react icons
import {IoLocationOutline} from "react-icons/io5";
import {BsSend} from "react-icons/bs";

const TicketCard = () => {

    return (
        <div className="bg-blue-50 w-full justify-between rounded-xl flex ">

            {/* left side */}
            <div className="flex flex-col p-[15px] lg:p-[20px] gap-[18px]">
                <h1 className="text-[1rem] lg:text-[1.3rem] font-bold text-blue-800">Ticket Title</h1>
                <div className="flex items-center gap-[10px]">
                    <BsSend
                        className="p-[8px] lg:p-[10px] rounded-xl bg-blue-100 text-blue-800 text-[2rem] lg:text-[3rem]"/>
                    <div>
                        <h4 className="text-[0.8rem] lg:text-[1.1rem] font-[600] text-gray-800">Place Name</h4>
                        <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500">15-Dec-2020</p>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <IoLocationOutline
                        className="p-[8px] lg:p-[10px] rounded-xl bg-blue-100 text-blue-800 text-[2rem] lg:text-[3rem]"/>
                    <div>
                        <h4 className="text-[0.8rem] lg:text-[1.1rem] font-[600] text-gray-800">Location</h4>
                        <p className="text-[0.6rem] lg:text-[0.9rem] font-[400] text-gray-500">15-Dec-2020</p>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div
                className="flex flex-col justify-between relative w-[45%] lg:w-[40%] items-center border-l-[2px] p-[15px] lg:p-[20px]  border-dashed border-gray-200">

                {/* top carve */}
                <div
                    className="w-[45px] h-[45px] rounded-full bg-white absolute top-[-15%] lg:top-[-13%] sm:left-[-13.5%] left-[-19%] lg:left-[-11.5%]"></div>

                <h4 className="text-[0.9rem] lg:text-[1.3rem] font-bold text-blue-800">9:00 AM</h4>

                <button
                    className="px-2 lg:px-4 py-1 text-[0.8rem] lg:text-[1.1rem] lg:py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-600">Buy
                    Ticket
                </button>

                <p className="text-[0.9rem] lg:text-[1.1rem] text-gray-500">Price: <span
                    className="text-red-600 font-semibold">$70</span></p>

                {/* bottom carve */}
                <div
                    className="w-[45px] h-[45px] rounded-full bg-white absolute bottom-[-15%] lg:bottom-[-13%] left-[-18.5%] sm:left-[-13.5%] lg:left-[-11.5%]"></div>
            </div>
        </div>
    );
};

export default TicketCard;
            '
                />
            )}
          </div>

          <ContentHeader id="Blog_Card" text={"Blog Card"}/>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a blog card with icon and dropdown component. Explore content with icons and interactive dropdowns
            for seamless navigation.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded my-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${blogCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      blogCardPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleBlogCardPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      blogCardCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleBlogCardCode}
              >
                Code
              </button>
            </div>
            {blogCardPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full 1024px:w-[70%] shadow-lg bg-secondary rounded">
                    <div className="flex w-full justify-between items-center p-4">
                      <div className="flex items-center gap-4">
                        <div
                            className="w-[50px] h-[50px] flex items-center justify-center text-secondary text-[1.3rem] rounded-full bg-[#f36f23]">
                          R
                        </div>

                        <div className="">
                          <h2 className="font-[500] text-[1.2rem]">
                            Author Name
                          </h2>
                          <p className="text-text text-[0.9rem]">
                            September 14, 2016
                          </p>
                        </div>
                      </div>
                      <BsThreeDotsVertical
                          className="text-text rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer"/>
                    </div>

                    <img
                        src="https://img.freepik.com/premium-photo/tasty-tofu-stir-fry-with-veggies-crispy-tofu-fresh-cilantro-perfect-vegan-meal-healthy_763042-1514.jpg"
                        alt=""
                        className="w-full h-[250px] object-cover"
                    />

                    <p className="text-text p-4">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of frozen
                      peas along with the mussels, if you like.
                    </p>

                    <div className="flex items-center justify-between w-full p-4 ">
                      <div className="flex items-center gap-4 ">
                        <FaHeart
                            className={`${
                                isFavorite ? "text-[#ff3d3d]" : "text-text"
                            } text-[1.4rem] cursor-pointer`}
                            onClick={() => setIsFavorite(!isFavorite)}
                        />
                        <HiMiniShare className="text-text text-[1.4rem] cursor-pointer"/>
                      </div>
                      {isOpen ? (
                          <IoIosArrowUp
                              className="text-text text-[1.4rem] cursor-pointer"
                              onClick={() => setIsOpen(false)}
                          />
                      ) : (
                          <IoIosArrowDown
                              className="text-text text-[1.4rem] cursor-pointer"
                              onClick={() => setIsOpen(true)}
                          />
                      )}
                    </div>

                    <div
                        className={`grid overflow-hidden px-4 transition-all duration-300 ${
                            isOpen ? "grid-rows-[1fr] py-4" : "grid-rows-[0fr]"
                        } text-[0.9rem] `}
                    >
                      <div className=" overflow-hidden">
                        <b>Method:</b>
                        <p className="mt-3">
                          Heat 1/2 cup of the broth in a pot until simmering, add
                          saffron and set aside for 10 minutes.
                        </p>
                        <p className="mt-5">
                          Heat oil in a (14- to 16-inch) paella pan or a large,
                          deep skillet over medium-high heat. Add chicken, shrimp
                          and chorizo, and cook, stirring occasionally until
                          lightly browned, 6 to 8 minutes. Transfer shrimp to a
                          large plate and set aside, leaving chicken and chorizo
                          in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                          onion, salt and pepper, and cook, stirring often until
                          thickened and fragrant, about 10 minutes. Add saffron
                          broth and remaining 4 1/2 cups chicken broth; bring to a
                          boil.
                        </p>
                        <p className="mt-5">
                          Add rice and stir very gently to distribute. Top with
                          artichokes and peppers, and cook without stirring, until
                          most of the liquid is absorbed, 15 to 18 minutes. Reduce
                          heat to medium-low, add reserved shrimp and mussels,
                          tucking them down
                        </p>
                        <p className="mt-5">
                          into the rice, and cook again without stirring, until
                          mussels have opened and rice is just tender, 5 to 7
                          minutes more. (Discard any mussels that don't open.) Set
                          aside off of the heat to let rest for 10 minutes, and
                          then serve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {blogCardCode && (
                <Showcode
                    code='
import React from "react";

// icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const BlogCard = () => {
  // action constrols
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="w-[70%] shadow-lg bg-[#fff] rounded">
      <div className="flex w-full justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] flex items-center
          justify-center text-[#fff] text-[1.3rem] rounded-full bg-[#f36f23]">
            R
          </div>

          <div className="">
            <h2 className="font-[500] text-[1.2rem]">Author Name</h2>
            <p className="text-[#424242] text-[0.9rem]">September 14, 2016</p>
          </div>
        </div>
        <BsThreeDotsVertical className="text-text rounded-full
        text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
      </div>

       <img
        src="https://img.freepik.com/premium-photo/tasty-tofu-stir-fry-with-veggies-crispy-tofu-
        fresh-cilantro-perfect-vegan-meal-healthy_763042-1514.jpg"
        alt=""
        className="w-full h-[250px] object-cover"
        />

      <p className="text-[#424242] p-4">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </p>

      <div className="flex items-center justify-between w-full p-4 ">
        <div className="flex items-center gap-4 ">
          <FaHeart
            className={`${
              isFavorite ? "text-[#ff3d3d]" : "text-[#424242]"
            } text-[1.4rem] cursor-pointer`}
            onClick={() => setIsFavorite(!isFavorite)}
          />
          <HiMiniShare className="text-[#424242] text-[1.4rem] cursor-pointer" />
        </div>
        {isOpen ? (
          <IoIosArrowUp
            className="text-[#424242] text-[1.4rem] cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <IoIosArrowDown
            className="text-[#424242] text-[1.4rem] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {isOpen && (
        <div className={`p-4 text-[0.9rem] `}>
          <b>Method:</b>
          <p className="mt-3">
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </p>
          <p className="mt-5">
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </p>
          <p className="mt-5">
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down
          </p>
          <p className="mt-5">
            into the rice, and cook again without stirring, until mussels have
            opened and rice is just tender, 5 to 7 minutes more. (Discard any
            mussels that don"t open.) Set aside off of the heat to let rest for
            10 minutes, and then serve.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
            '
                />
            )}
          </div>

          <ContentHeader
              id="product_card"
              className="mt-8"
              text={"Product Card"}
          />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a product card with icon and add to cart button. Browse products and add them to your cart
            effortlessly.
          </p>
          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${productCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      productCardPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleProductCardPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      productCardCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleProductCardCode}
              >
                Code
              </button>
            </div>
            {productCardPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full 1024px:w-[70%] shadow-lg bg-secondary rounded">
                    <img
                        src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
                        alt=""
                        className="w-full h-64 object-cover"
                    />
                    <div className="flex w-full justify-between items-center p-4">
                      <div className="flex  items-center gap-4">
                        <div className=" flex flex-col items-center">
                          <h2 className="font-semibold text-3xl">Shoes</h2>
                        </div>
                      </div>
                      <BsThreeDotsVertical
                          className="text-text rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer"/>
                    </div>

                    <p className="text-text p-4">
                      <div className="flex flex-row ">
                        <button className="flex flex-row ">
                          {" "}
                          <BsEye className="text-2xl p-1"/> 50
                        </button>
                        <button className="flex flex-row ">
                          <BiLike className="text-2xl p-1"/> 10
                        </button>
                      </div>
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of frozen
                      peas along with the mussels, if you like.
                    </p>

                    <div className="flex items-center justify-between w-full p-4 ">
                      <div className="flex flex-col items-center gap-4 ">
                        <div>
                          {" "}
                          <p className="text-text text-[0.9rem]">
                            Price : $25
                          </p>{" "}
                        </div>
                        <div className="flex flex-row gap-5">
                          <FaHeart
                              className={`${
                                  isFavorite ? "text-[#ff3d3d]" : "text-text"
                              } text-[1.4rem] cursor-pointer`}
                              onClick={() => setIsFavorite(!isFavorite)}
                          />
                          <HiMiniShare className="text-text text-[1.4rem] cursor-pointer"/>
                        </div>
                      </div>
                      <button className="btn p-3 rounded border bg-black text-white hover:bg-blue-700 hover:text-white">
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
            )}

            {productCardCode && (
                <Showcode
                    code='
                import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";

const SimpleProfileCard = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="w-[70%] shadow-lg bg-secondary rounded">
      <img
        src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
        alt=""
        className="w-full h-64 object-cover"
      />
      <div className="flex w-full justify-between items-center p-4">
        <div className="flex  items-center gap-4">
          <div className=" flex flex-col items-center">
            <h2 className="font-semibold text-3xl">Shoes</h2>
          </div>
        </div>
        <BsThreeDotsVertical className="text-text rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
      </div>

      <p className="text-text p-4">
        <div className="flex flex-row ">
          <button className="flex flex-row ">
            {" "}
            <BsEye className="text-2xl p-1" /> 50
          </button>
          <button className="flex flex-row ">
            <BiLike className="text-2xl p-1" /> 10
          </button>
        </div>
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </p>

      <div className="flex items-center justify-between w-full p-4 ">
        <div className="flex flex-col items-center gap-4 ">
          <div>
            {" "}
            <p className="text-text text-[0.9rem]">Price : $25</p>{" "}
          </div>
          <div className="flex flex-row gap-5">
            <FaHeart
              className={`${
                isFavorite ? "text-[#ff3d3d]" : "text-text"
              } text-[1.4rem] cursor-pointer`}
              onClick={() => setIsFavorite(!isFavorite)}
            />
            <HiMiniShare className="text-text text-[1.4rem] cursor-pointer" />
          </div>
        </div>
        <button className="btn p-3 rounded border bg-black text-white hover:bg-blue-700 hover:text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SimpleProfileCard;

            '
                />
            )}
          </div>

          <div>
            <div className="mt-8">
              <ContentHeader
                  id="music_card"
                  className="mt-8"
                  text={"Music Card"}
              />
            </div>

            <p className="w-full 425px:w-[80%] text-text text-[1rem]">
              This is a music card component. Explore tracks, albums, and artists with ease and convenience.
            </p>

            <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
              <div className="relative">
                <div
                    className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${musicCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                <button
                    className={`${
                        musicCardPreview && "text-tabTextColor"
                    } px-6 py-2 border-b z-[2] relative text-text border-border`}
                    onClick={handleMusicCardPreview}
                >
                  Preview
                </button>
                <button
                    className={`${
                        musicCardCode && "text-tabTextColor"
                    } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                    onClick={handleMusicCardCode}
                >
                  Code
                </button>
              </div>
              {musicCardPreview && (
                  <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                    <div className="w-full 1024px:w-[80%] shadow-lg bg-secondary rounded">
                      <div className="grid grid-cols-12 w-full  items-center bg-black text-white ">
                        <div className="grid col-span-5 justify-center gap-3 ">
                          <div>
                            <h1 className="text-2xl">Pop Music</h1>
                            <p>Arjit singh</p>
                          </div>
                          <div className="flex flex-row gap-3">
                            <FaArrowAltCircleLeft className="text-2xl"/>
                            <MdPlayArrow className="text-2xl"/>
                            <FaArrowAltCircleRight className="text-2xl"/>
                          </div>
                        </div>

                        <div className="grid col-span-7">
                          <img
                              src="https://media.istockphoto.com/id/1388162040/photo/a-crowded-concert-hall-with-scene-stage-in-red-lights-rock-show-performance-with-people.jpg?s=1024x1024&w=is&k=20&c=NARCbVE2aAOnSEVWr1ZxK0G4fpr60vMY7iDMsjnHjFg="
                              alt=""
                              className="w-full h-64 cover"
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full p-4 ">
                        <div className="flex items-center gap-4 ">
                          <FaHeart
                              className={`${
                                  isFavorite ? "text-[#ff3d3d]" : "text-text"
                              } text-[1.4rem] cursor-pointer`}
                              onClick={() => setIsFavorite(!isFavorite)}
                          />
                          <HiMiniShare className="text-text text-[1.4rem] cursor-pointer"/>
                        </div>
                      </div>
                    </div>
                  </div>
              )}

              {musicCardCode && (
                  <Showcode
                      code='
                import React, { useState } from "react";

                import {
                  FaArrowAltCircleLeft,
                  FaArrowAltCircleRight,
                  FaHeart,
                } from "react-icons/fa";
                import { HiMiniShare } from "react-icons/hi2";
                import { MdPlayArrow } from "react-icons/md";
                
                const MusicCard = () => {
                  const [isFavorite, setIsFavorite] = useState(false);
                
                  return (
                    <div className="w-[100%] lg:w-[80%] shadow-lg bg-secondary rounded">
                      <div className="grid grid-cols-12 w-full  items-center bg-black text-white ">
                        <div className="grid col-span-5 justify-center gap-3 ">
                          <div>
                            <h1 className="text-2xl">Pop Music</h1>
                            <p>Arjit singh</p>
                          </div>
                          <div className="flex flex-row gap-3">
                            <FaArrowAltCircleLeft className="text-2xl" />
                            <MdPlayArrow className="text-2xl" />
                            <FaArrowAltCircleRight className="text-2xl" />
                          </div>
                        </div>
                
                        <div className="grid col-span-7">
                          <img
                            src="https://media.istockphoto.com/id/1388162040/photo/a-crowded-concert-hall-with-scene-stage-in-red-lights-rock-show-performance-with-people.jpg?s=1024x1024&w=is&k=20&c=NARCbVE2aAOnSEVWr1ZxK0G4fpr60vMY7iDMsjnHjFg="
                            alt=""
                            className="w-full h-64 cover"
                          />
                        </div>
                      </div>
                
                      <div className="flex items-center justify-between w-full p-4 ">
                        <div className="flex items-center gap-4 ">
                          <FaHeart
                            className={`${
                              isFavorite ? "text-[#ff3d3d]" : "text-text"
                            } text-[1.4rem] cursor-pointer`}
                            onClick={() => setIsFavorite(!isFavorite)}
                          />
                          <HiMiniShare className="text-text text-[1.4rem] cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  );
                };
                
                export default MusicCard;
                 
            '
                  />
              )}
            </div>
          </div>

          <div className="mt-8">
            <ContentHeader id={"profile_card_2"} text={"Simple profile card"}/>

            <p className="w-full 425px:w-[80%] text-text text-[1rem]">
              This is a profile card with statistics component. View detailed insights and information about profiles
              seamlessly.
            </p>

            <div className="w-full 425px:w-[80%] border border-border rounded mt-3">
              <div className="relative">
                <div
                    className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${simpleProfileCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                <button
                    className={`${
                        simpleProfileCardPreview && "text-tabTextColor"
                    } px-6 py-2 border-b z-[2] relative text-text border-border`}
                    onClick={handleSimpleProfileCardPreview}
                >
                  Preview
                </button>
                <button
                    className={`${
                        simpleProfileCardCode && "text-tabTextColor"
                    } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                    onClick={handleSimpleProfileCardCode}
                >
                  Code
                </button>
              </div>
              {simpleProfileCardPreview && (
                  <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                    <div className="w-full 1024px:w-[60%] mt-16 1024px:mt-0 shadow-lg rounded flex flex-col">
                      <div className="w-full  flex justify-center items-center  ">
                        <img
                            src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg"
                            alt=""
                            className="w-[80px] h-[80px] rounded-full  flex justify-center border-blue-800 border-2   -mt-16 object-cover"
                        />
                      </div>

                      <div>
                        <div className="w-full start mt-3 px-2">
                          <h2 className="font-[600] text-center text-[1.4rem]">
                            Description
                          </h2>
                          <p className="text-text text-[0.9rem]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit voluptatibus porro at praesentium enim
                            animi deserunt totam voluptatem tempora repudiandae
                            possimus iure cum veniam nesciunt, ipsa ad illo,
                            magnam tenetur?
                          </p>
                        </div>

                        <div className="w-full p-4 mt-8 border-t border-border flex items-center justify-between">
                          <div className="flex items-center justify-center flex-col">
                            <h2 className=" text-[1.2rem] font-[600]">80k</h2>
                            <p className="text-text text-[0.9rem]">Post</p>
                          </div>

                          <div className="flex items-center justify-center flex-col">
                            <h2 className=" text-[1.2rem] font-[600]">8k</h2>
                            <p className="text-text text-[0.9rem]">Following</p>
                          </div>

                          <div className="flex items-center justify-center flex-col">
                            <h2 className=" text-[1.2rem] font-[600]">200k</h2>
                            <p className="text-text text-[0.9rem]">Followers</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              )}

              {simpleProfileCardCode && (
                  <Showcode
                      code={`
                const SimpleProfileCard = () => {
                  return (
                    <div className="w-[60%] shadow-lg rounded">
                      <div className="w-full h-[150px] relative bg-[url('https://img.freepik.com/premium-vector/content-writer-vector-colored-round-line-illustration_104589-2571.jpg')] bg-center">
                        <img
                          src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg"
                          alt=""
                          className="w-[80px] h-[80px] rounded-full border-secondary border-4 absolute -bottom-12 left-1/2 transform -translate-x-1/2 object-cover"
                        />
                      </div>
                
                      <div className="w-full text-center mt-16">
                        <h2 className="font-[600] text-[1.4rem]">User Name</h2>
                        <p className="text-text text-[0.9rem]">London</p>
                      </div>
                
                      <div className="w-full p-4 mt-8 border-t border-border flex items-center justify-between">
                        <div className="flex items-center justify-center flex-col">
                          <h2 className=" text-[1.2rem] font-[600]">80k</h2>
                          <p className="text-text text-[0.9rem]">Post</p>
                        </div>
                
                        <div className="flex items-center justify-center flex-col">
                          <h2 className=" text-[1.2rem] font-[600]">8k</h2>
                          <p className="text-text text-[0.9rem]">Following</p>
                        </div>
                
                        <div className="flex items-center justify-center flex-col">
                          <h2 className=" text-[1.2rem] font-[600]">200k</h2>
                          <p className="text-text text-[0.9rem]">Followers</p>
                        </div>
                      </div>
                    </div>
                  );
                };
                
                export default SimpleProfileCard;
                
                
          `}
                  />
              )}
            </div>
          </div>

          <div className="mt-8">
            <ContentHeader id="profile_card" text={"profile card"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a profile card displaying followers, posts, and likes. Explore engagement metrics effortlessly.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${profileCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      profileCardPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleProfileCardPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      profileCardCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleProfileCardCode}
              >
                Code
              </button>
            </div>
            {profileCardPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full 1024px:w-[60%] shadow-lg rounded">
                    <div
                        className="w-full h-[150px] relative bg-[url('https://img.freepik.com/premium-vector/content-writer-vector-colored-round-line-illustration_104589-2571.jpg')] bg-center">
                      <img
                          src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg"
                          alt=""
                          className="w-[80px] h-[80px] rounded-full border-secondary border-4 absolute -bottom-12 left-1/2 transform -translate-x-1/2 object-cover"
                      />
                    </div>

                    <div className="w-full text-center mt-16">
                      <h2 className="font-[600] text-[1.4rem]">User Name</h2>
                      <p className="text-text text-[0.9rem]">London</p>
                    </div>

                    <div className="w-full p-4 mt-8 border-t border-border flex items-center justify-between">
                      <div className="flex items-center justify-center flex-col">
                        <h2 className=" text-[1.2rem] font-[600]">80k</h2>
                        <p className="text-text text-[0.9rem]">Post</p>
                      </div>

                      <div className="flex items-center justify-center flex-col">
                        <h2 className=" text-[1.2rem] font-[600]">8k</h2>
                        <p className="text-text text-[0.9rem]">Following</p>
                      </div>

                      <div className="flex items-center justify-center flex-col">
                        <h2 className=" text-[1.2rem] font-[600]">200k</h2>
                        <p className="text-text text-[0.9rem]">Followers</p>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {profileCardCode && (
                <Showcode
                    code={`
import React from "react";

const profileCard = () => {
  return (
    <div className="w-[60%] shadow-lg rounded">
      <div className="w-full h-[150px] relative bg-[url('https://img.freepik.com/premium-vector/
      content-writer-vector-colored-round-line-illustration_104589-2571.jpg')] bg-center">
        <img
          src="https://images.pexels.com/photos/3772623/
          pexels-photo-3772623.jpeg"
          alt=""
          className="w-[80px] h-[80px] rounded-full border-[#ffff] 
          border-4 absolute -bottom-12 left-1/2 transform -translate-x-1/2 object-cover"
        />
      </div>

      <div className="w-full text-center mt-16">
        <h2 className="font-[600] text-[1.4rem]">User Name</h2>
        <p className="text-[#424242] text-[0.9rem]">London</p>
      </div>

      <div className="w-full p-4 mt-8 border-t border-[#fff] flex items-center justify-between">
        <div className="flex items-center justify-center flex-col">
          <h2 className=" text-[1.2rem] font-[600]">80k</h2>
          <p className="text-[#424242] text-[0.9rem]">Post</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <h2 className=" text-[1.2rem] font-[600]">8k</h2>
          <p className="text-[#424242] text-[0.9rem]">Following</p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <h2 className=" text-[1.2rem] font-[600]">200k</h2>
          <p className="text-[#424242] text-[0.9rem]">Followers</p>
        </div>
      </div>
    </div>
  );
};

export default profileCard;
          `}
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="Team_card" text={"Team card"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a team member card with elegant alignment. View team details with stylish presentation.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${teamCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      teamCardPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleTeamCardPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      teamCardCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleTeamCardCode}
              >
                Code
              </button>
            </div>
            {teamCardPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full 1024px:w-[60%] rounded shadow-lg p-4">
                    <div className="w-full flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <RiTeamFill
                            className="text-[2rem] p-2 rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer"/>
                        <h3>Teams</h3>
                      </div>
                      <BsThreeDotsVertical
                          className="text-[2rem] p-2 rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer"/>
                    </div>

                    <img
                        src="https://img.freepik.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-208.jpg"
                        alt=""
                        className="rounded-lg"
                    />

                    <h2 className="font-[600] text-[1.3rem] py-4">
                      Simple Design
                    </h2>

                    <div className="w-full flex items-center justify-between relative">
                      <button className="py-1 px-4 bg-[#3b9df828] text-[#2367a7] rounded">
                        Design
                      </button>
                      <div className=" w-[50%] h-full">
                        <div className="flex items-center">
                          <img
                              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                              alt=""
                              className="w-[30px] h-[30px] object-cover rounded-full border border-secondary absolute right-[25%] top-0"
                          />
                          <img
                              src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg"
                              alt=""
                              className="w-[30px] h-[30px] object-cover rounded-full border border-secondary absolute right-[20%] top-0"
                          />
                          <img
                              src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                              alt=""
                              className="w-[30px] h-[30px] object-cover rounded-full border border-secondary absolute right-[15%] top-0"
                          />
                          <img
                              src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                              alt=""
                              className="w-[30px] h-[30px] object-cover rounded-full border border-secondary absolute right-[10%] top-0"
                          />
                          <img
                              src="https://img.freepik.com/free-photo/portrait-hacker_23-2148165910.jpg"
                              alt=""
                              className="w-[30px] h-[30px] object-cover rounded-full border border-secondary absolute top-0 right-[5%]"
                          />
                          <div
                              className="w-[30px] h-[30px] object-cover rounded-full border border-secondary bg-[#e5eaf2] text-[#424242] absolute top-0 right-[0%] flex items-center justify-center">
                            <p className="text-[0.7rem] cursor-pointer">18+</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {teamCardCode && (
                <Showcode
                    code={`
import React from "react";

// icons
import { RiTeamFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const TeamCard = () => {
  return (
    <div className="w-[60%] rounded shadow-lg p-4">
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <RiTeamFill className="text-[2rem] p-2 rounded-full 
          bg-[#3b9df828] text-[#3B9DF8] cursor-pointer" />
          <h3>Teams</h3>
        </div>
        <BsThreeDotsVertical className="text-[2rem] p-2 
        rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer" />
      </div>

      <img
        src="https://img.freepik.com/free-psd/3d-interface-website-presentation-mockup-isolated_359791-208.jpg"
        alt=""
        className="rounded-lg"
      />

      <h2 className="font-[600] text-[1.3rem] py-4">Simple Design</h2>

      <div className="w-full flex items-center justify-between relative">
        <button className="py-1 px-4 bg-[#3b9df828] text-[#2367a7] rounded">
          Design
        </button>
        <div className=" w-[50%] h-full">
          <div className="flex items-center">
            <img
              src="https://img.freepik.com/free-photo/
              young-bearded-man-with-striped-shirt_273609-5677.jpg"
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full 
              border border-[#ffff] absolute right-[25%] top-0"
            />
            <img
              src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-
              broadly-while-standing-against-gray_176420-44508.jpg"
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full 
              border border-[#ffff] absolute right-[20%] top-0"
            />
            <img
              src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-
              looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full 
              border border-[#ffff] absolute right-[15%] top-0"
            />
            <img
              src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-
              18743.jpg"
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full 
              border border-[#ffff] absolute right-[10%] top-0"
            />
            <img
              src="https://img.freepik.com/free-photo/
              portrait-hacker_23-2148165910.jpg"
              alt=""
              className="w-[30px] h-[30px] object-cover rounded-full 
              border border-[#ffff] absolute top-0 right-[5%]"
            />
            <div className="w-[30px] h-[30px] object-cover rounded-full 
            border border-[#ffff] bg-[#e5eaf2] text-[#424242] absolute top-0 right-[0%] 
            flex items-center justify-center">
              <p className="text-[0.7rem] cursor-pointer">18+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
          `}
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="Pricing_card_1" text={"Pricing card 1"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a pricing card with highlighted points. Compare plans with clear, marked features for easy
            selection.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${pricingCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      pricingCardPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handlePricingCardPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      pricingCardCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handlePricingCardCode}
              >
                Code
              </button>
            </div>
            {pricingCardPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%] border border-border p-2 rounded-2xl">
                    <div className="w-full bg-primary rounded-2xl p-4">
                      <div className="flex items-center justify-between w-full mb-5">
                        <IoIosRocket className="text-secondary text-[3.5rem]"/>
                        <button className="px-2 py-1 border border-secondary rounded-md text-[0.8rem] bg-secondary">
                          ENTERPRISE
                        </button>
                      </div>
                      <h2 className="text-[2.3rem] font-[800] text-secondary">
                        $79.58{" "}
                        <span className="text-[1rem] font-[400]">/ month</span>
                      </h2>
                      <p className="text-[1rem] text-secondary">
                        True power of marketing
                      </p>
                    </div>

                    <div className="flex flex-col px-8 text-text mt-6">
                      <p className="flex items-center gap-2 py-3 border-b border-border text-[1rem]">
                        <FaRegDotCircle className="text-[1rem] text-[#000]"/>
                        Lorem ipsum dolor sit.
                      </p>
                      <p className="flex items-center gap-2 py-3 border-b border-border text-[1rem]">
                        <FaRegDotCircle className="text-[1rem] text-[#000]"/>
                        Lorem ipsum dolor sit.
                      </p>
                      <p className="flex items-center gap-2 py-3 border-b border-border text-[1rem]">
                        <FaRegDotCircle className="text-[1rem] text-[#000]"/>
                        Lorem ipsum dolor sit.
                      </p>
                      <p className="flex items-center gap-2 py-3 border-b border-border text-[1rem]">
                        <FaRegDotCircle className="text-[1rem] text-[#000]"/>
                        Lorem ipsum dolor sit.
                      </p>
                      <p className="flex items-center gap-2 py-3 text-[1rem]">
                        <FaRegDotCircle className="text-[1rem] text-[#000]"/>
                        Lorem ipsum dolor sit.
                      </p>
                    </div>

                    <div className="px-8 my-5">
                      <button
                          className="px-4 py-2 border border-primary bg-primary rounded-2xl text-secondary flex items-center gap-1 group">
                        GET STARTED
                        <BiRightArrowAlt className="text-[1.4rem] group-hover:ml-3 transition-all duration-300"/>
                      </button>
                    </div>
                  </div>
                </div>
            )}

            {pricingCardCode && (
                <Showcode
                    code={`
import React from "react";

// icons
import { IoIosRocket } from "react-icons/io";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaRegDotCircle } from "react-icons/fa";

const PricingCard = () => {
  return (
    <div className="w-[80%] border border-[#e5eaf2] p-2 rounded-2xl">
      <div className="w-full bg-[#3B9DF8] rounded-2xl p-4">
        <div className="flex items-center justify-between w-full mb-5">
          <IoIosRocket className="text-[#ffffff] text-[3.5rem]" />
          <button className="px-2 py-1 border
           border-[#ffffff] rounded-md text-[0.8rem] bg-[#ffffff]">
            ENTERPRISE
          </button>
        </div>
        <h2 className="text-[2.3rem] font-[800] text-secondary">
          $79.58 <span className="text-[1rem] font-[400]">/ month</span>
        </h2>
        <p className="text-[1rem] text-[#ffffff]">True power of marketing</p>
      </div>

      <div className="flex flex-col px-8 text-[#424242] mt-6">
        <p className="flex items-center gap-2 py-3 border-b 
        border-[#e5eaf2] text-[1rem]">
          <FaRegDotCircle className="text-[1rem] text-[#000]" />
          Lorem ipsum dolor sit.
        </p>
        <p className="flex items-center gap-2 py-3 border-b
         border-[#e5eaf2] text-[1rem]">
          <FaRegDotCircle className="text-[1rem] text-[#000]" />
          Lorem ipsum dolor sit.
        </p>
        <p className="flex items-center gap-2 py-3 border-b
         border-[#e5eaf2] text-[1rem]">
          <FaRegDotCircle className="text-[1rem] text-[#000]" />
          Lorem ipsum dolor sit.
        </p>
        <p className="flex items-center gap-2 py-3 border-b
         border-[#e5eaf2] text-[1rem]">
          <FaRegDotCircle className="text-[1rem] text-[#000]" />
          Lorem ipsum dolor sit.
        </p>
        <p className="flex items-center gap-2 py-3 text-[1rem]">
          <FaRegDotCircle className="text-[1rem] text-[#000]" />
          Lorem ipsum dolor sit.
        </p>
      </div>

      <div className="px-8 my-5">
        <button className="px-4 py-2 border border-[#3B9DF8]
         bg-[#3B9DF8] rounded-2xl text-secondary flex items-center gap-1 group">
          GET STARTED
          <BiRightArrowAlt className="text-[1.4rem] 
          group-hover:ml-3 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
          `}
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="Pricing_card_2" text={"Pricing card 2"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a pricing card with check and cross icons for feature comparison. Easily assess options with clear
            indicators.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${pricingCard2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      pricingCard2Preview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handlePricingCard2Preview}
              >
                Preview
              </button>
              <button
                  className={`${
                      pricingCard2Code && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handlePricingCard2Code}
              >
                Code
              </button>
            </div>
            {pricingCard2Preview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%] border border-border shadow-lg">
                    <div className="w-full flex items-center justify-center flex-col p-6">
                      <h2 className="text-[1.5rem] text-primary font-[600]">
                        Standard
                      </h2>
                      <p className="text-text text-[1rem]">
                        Ideal for growing businesses
                      </p>

                      <div className="flex mt-6 gap-1">
                        <h2 className="font-[800] text-[4rem] leading-[4rem]">
                          49.50
                        </h2>
                        <span className="text-[1.2rem] font-[500]">$</span>
                      </div>
                      <p className="text-text text-[0.9rem]">per month</p>

                      <button className="px-12 py-2 bg-primary rounded-3xl text-secondary text-[1rem] my-6">
                        Buy Now
                      </button>
                    </div>

                    <h3 className="text-[1.2rem] font-[600] text-text mt-3 px-6">
                      What you will get?
                    </h3>
                    <div className="flex gap-3 flex-col py-4 px-6">
                      <p className="flex items-center gap-2 text-text text-[1rem]">
                        <MdDone className="text-primary text-[1.5rem]"/>5 Users
                      </p>
                      <p className="flex items-center gap-2 text-text text-[1rem]">
                        <MdDone className="text-primary text-[1.5rem]"/>
                        50GB Storage
                      </p>
                      <p className="flex items-center gap-2 text-text text-[1rem]">
                        <MdDone className="text-primary text-[1.5rem]"/>
                        Priority Email Support
                      </p>
                      <p className="flex items-center gap-3 text-text text-[1rem]">
                        <RxCross1 className="text-[#e73939] text-[1.2rem]"/>
                        Unlimited Users
                      </p>
                      <p className="flex items-center gap-3 text-text text-[1rem]">
                        <RxCross1 className="text-[#e73939] text-[1.2rem]"/>
                        100GB Storage
                      </p>
                      <p className="flex items-center gap-3 text-text text-[1rem]">
                        <RxCross1 className="text-[#e73939] text-[1.2rem]"/>
                        24/7 Live Chat Support
                      </p>
                    </div>
                    <div className="w-full h-[10px] bg-primary"></div>
                  </div>
                </div>
            )}

            {pricingCard2Code && (
                <Showcode
                    code={`
import React from "react";

// icons
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const PricingCard = () => {
  return (
    <div className="w-[80%] border border-[#e5eaf2] shadow-lg">
      <div className="w-full flex items-center justify-center flex-col p-6">
        <h2 className="text-[1.5rem] text-[#3B9DF8] font-[600]">Standard</h2>
        <p className="text-[#424242] text-[1rem]">Ideal for growing businesses</p>

        <div className="flex mt-6 gap-1">
          <h2 className="font-[800] text-[4rem] leading-[4rem]">49.50</h2>
          <span className="text-[1.2rem] font-[500]">$</span>
        </div>
        <p className="text-[#424242] text-[0.9rem]">per month</p>

        <button className="px-12 py-2 bg-[#3B9DF8] rounded-3xl text-[#ffffff] text-[1rem] my-6">
          Buy Now
        </button>
      </div>

      <h3 className="text-[1.2rem] font-[600] text-[#424242] mt-3 px-6">
        What you will get?
      </h3>
      <div className="flex gap-3 flex-col py-4 px-6">
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" />5 Users
        </p>
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" />
          50GB Storage
        </p>
        <p className="flex items-center gap-2 text-[#424242] text-[1rem]">
          <MdDone className="text-[#3B9DF8] text-[1.5rem]" />
          Priority Email Support
        </p>
        <p className="flex items-center gap-3 text-[#424242] text-[1rem]">
          <RxCross1 className="text-[#e73939] text-[1.2rem]" />
          Unlimited Users
        </p>
        <p className="flex items-center gap-3 text-[#424242] text-[1rem]">
          <RxCross1 className="text-[#e73939] text-[1.2rem]" />
          100GB Storage
        </p>
        <p className="flex items-center gap-3 text-[#424242] text-[1rem]">
          <RxCross1 className="text-[#e73939] text-[1.2rem]" />
          24/7 Live Chat Support
        </p>
      </div>
      <div className="w-full h-[10px] bg-[#3B9DF8]"></div>
    </div>
  );
};

export default PricingCard;
          `}
                />
            )}
          </div>


          <div className="mt-8">
            <ContentHeader id="random_card_1" text={"random card 1"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview1 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview1 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview1, setRandomCardCode1, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode1 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview1, setRandomCardCode1, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview1 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='bg-white rounded-md boxShadow relative min-w-[60%]'>
                    <img
                        src='https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?t=st=1722609658~exp=1722613258~hmac=9c702195fba04c4449f371fd0f0f6bee3b7a911e1ee29e31032dd3683b9458f3&w=740'
                        alt='image'
                        className='w-full h-[250px] object-cover rounded-t-md'
                    />

                    <span
                        className='text-[0.9rem] py-0.5 px-3 bg-blue-500 text-white rounded-full absolute top-4 right-4'>New</span>

                    <div className='p-3'>
                      <div className='flex items-center gap-[5px]'>
                        <FaStar className='text-yellow-400 cursor-pointer'/>
                        <FaStar className='text-yellow-400 cursor-pointer'/>
                        <FaStar className='text-yellow-400 cursor-pointer'/>
                        <FaStar className='text-yellow-400 cursor-pointer'/>
                        <FaStar className='text-yellow-400 cursor-pointer'/>
                      </div>

                      <h1 className='text-[20px] font-bold text-black leading-[24px] mt-1.5'>Minimal Pattern</h1>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode1 && (
                <Showcode
                    code='
import React from "react";

import {FaStar} from "react-icons/fa";

const Card = () => {

    return (
        <div className="bg-white rounded-md shadow-md relative min-w-[60%]">
            <img
                src="https://img.freepik.com/free-photo/glassclad-skyscrapers-central-mumbai-reflecting-sunset-hues-blue-hour_469504-15.jpg?t=st=1722609658~exp=1722613258~hmac=9c702195fba04c4449f371fd0f0f6bee3b7a911e1ee29e31032dd3683b9458f3&w=740"
                alt="image"
                className="w-full h-[250px] object-cover rounded-t-md"
            />

            <span
                className="text-[0.9rem] py-0.5 px-3 bg-blue-500 text-white rounded-full absolute top-4 right-4">New</span>

            <div className="p-3">
                <div className="flex items-center gap-[5px]">
                    <FaStar className="text-yellow-400 cursor-pointer"/>
                    <FaStar className="text-yellow-400 cursor-pointer"/>
                    <FaStar className="text-yellow-400 cursor-pointer"/>
                    <FaStar className="text-yellow-400 cursor-pointer"/>
                    <FaStar className="text-yellow-400 cursor-pointer"/>
                </div>

                <h1 className="text-[20px] font-bold text-black leading-[24px] mt-1.5">Minimal Pattern</h1>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>


          <div className="mt-8">
            <ContentHeader id="random_card_2" text={"random card 2"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview2 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview2 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview2, setRandomCardCode2, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode2 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview2, setRandomCardCode2, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview2 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='bg-white rounded-md boxShadow relative w-full 1024px:min-w-[60%]'>
                    <img
                        src='https://img.freepik.com/free-vector/linear-flat-ninja-logo-template_23-2149002586.jpg?t=st=1722611270~exp=1722614870~hmac=4b39b45933e0b6565a25aedef8699d55fa1efa00e29ea31ac6b0a16464783f4e&w=740'
                        alt='image'
                        className='w-full h-[200px] object-cover rounded-t-md'
                    />

                    <div className='relative'>
                      <div className="flex items-center ">
                        <img
                            src="https://img.freepik.com/free-photo/
              young-bearded-man-with-striped-shirt_273609-5677.jpg"
                            alt=""
                            className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute right-[30%] -top-3"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-
              broadly-while-standing-against-gray_176420-44508.jpg"
                            alt=""
                            className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute right-[25%] -top-3"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-
              looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                            alt=""
                            className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute right-[20%] -top-3"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/handsome-guy-sweater_144627-13026.jpg?t=st=1722611516~exp=1722615116~hmac=b5845292ef81dc6d2006325e8e0114a4e3149947454a0e68b2d6b72537771705&w=360"
                            alt=""
                            className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute right-[15%] -top-3"
                        />
                        <img
                            src="https://img.freepik.com/free-photo/
              portrait-hacker_23-2148165910.jpg"
                            alt=""
                            className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute -top-3 right-[10%]"
                        />
                        <div className="w-[30px] h-[30px] object-cover rounded-full
            border border-[#ffff] bg-[#e5eaf2] text-[#424242] absolute -top-3 right-[5%]
            flex items-center justify-center">
                          <p className="text-[0.7rem] cursor-pointer">18+</p>
                        </div>
                      </div>
                    </div>

                    <div className='p-3'>
                      <p className='text-[1rem] text-gray-300'>Recommended</p>
                      <h1 className='text-[20px] font-bold text-black leading-[24px] mt-0.5'>Silent Ninja Stalker</h1>

                      <button className='py-2 px-4 bg-blue-500 text-white rounded-md min-w-[40%] mt-3'>Play</button>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode2 && (
                <Showcode
                    code='
import React from "react";

const Card = () => {

    return (
        <div className="bg-white rounded-md shadow-md relative min-w-[60%]">
            <img
                src="https://img.freepik.com/free-vector/linear-flat-ninja-logo-template_23-2149002586.jpg?t=st=1722611270~exp=1722614870~hmac=4b39b45933e0b6565a25aedef8699d55fa1efa00e29ea31ac6b0a16464783f4e&w=740"
                alt="image"
                className="w-full h-[200px] object-cover rounded-t-md"
            />

            <div className="relative">
                <div className="flex items-center ">
                    <img
                        src="https://img.freepik.com/free-photo/
              young-bearded-man-with-striped-shirt_273609-5677.jpg"
                        alt=""
                        className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute right-[30%] -top-3"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-
              broadly-while-standing-against-gray_176420-44508.jpg"
                        alt=""
                        className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute right-[25%] -top-3"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-
              looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                        alt=""
                        className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute right-[20%] -top-3"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/handsome-guy-sweater_144627-13026.jpg?t=st=1722611516~exp=1722615116~hmac=b5845292ef81dc6d2006325e8e0114a4e3149947454a0e68b2d6b72537771705&w=360"
                        alt=""
                        className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute right-[15%] -top-3"
                    />
                    <img
                        src="https://img.freepik.com/free-photo/
              portrait-hacker_23-2148165910.jpg"
                        alt=""
                        className="w-[30px] h-[30px] object-cover rounded-full
              border border-[#ffff] absolute -top-3 right-[10%]"
                    />
                    <div className="w-[30px] h-[30px] object-cover rounded-full
            border border-[#ffff] bg-[#e5eaf2] text-[#424242] absolute -top-3 right-[5%]
            flex items-center justify-center">
                        <p className="text-[0.7rem] cursor-pointer">18+</p>
                    </div>
                </div>
            </div>

            <div className="p-3">
                <p className="text-[1rem] text-gray-300">Recommended</p>
                <h1 className="text-[20px] font-bold text-black leading-[24px] mt-0.5">Silent Ninja Stalker</h1>

                <button className="py-2 px-4 bg-blue-500 text-white rounded-md min-w-[40%] mt-3">Play</button>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_3" text={"random card 3"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview3 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview3 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview3, setRandomCardCode3, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode3 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview3, setRandomCardCode3, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview3 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='bg-white rounded-md boxShadow w-full 1024px:min-w-[60%]'>
                    <img
                        src='https://img.freepik.com/free-psd/office-desktop-icon-isolated-3d-render-illustration_47987-8371.jpg?t=st=1722612330~exp=1722615930~hmac=ba682f8b80331752dd6f2a5f6ea1694b67b8493cf7c0f14059916cbe7f93fb57&w=740'
                        alt='image'
                        className='w-full h-[200px] object-cover rounded-t-md'
                    />

                    <div className='py-6 px-4 relative'>

                      <span
                          className='w-[40px] h-[40px] rounded-full bg-white absolute -top-5 right-5 boxShadow flex items-center justify-center'>
                        <IoBookmarkOutline className='text-gray-500'/>
                      </span>

                      <h1 className='text-[20px] font-bold text-black leading-[24px]'>ZenUI Library</h1>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode3 && (
                <Showcode
                    code='
import React from "react";

import {IoBookmarkOutline} from "react-icons/io5";

const Card = () => {

    return (
        <div className="bg-white rounded-md shadow-md min-w-[60%]">
            <img
                src="https://img.freepik.com/free-psd/office-desktop-icon-isolated-3d-render-illustration_47987-8371.jpg?t=st=1722612330~exp=1722615930~hmac=ba682f8b80331752dd6f2a5f6ea1694b67b8493cf7c0f14059916cbe7f93fb57&w=740"
                alt="image"
                className="w-full h-[200px] object-cover rounded-t-md"
            />

            <div className="py-6 px-4 relative">

                      <span
                          className="w-[40px] h-[40px] rounded-full bg-white absolute -top-5 right-5 boxShadow flex items-center justify-center">
                        <IoBookmarkOutline className="text-gray-500"/>
                      </span>

                <h1 className="text-[20px] font-bold text-black leading-[24px]">ZenUI Library</h1>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_4" text={"random card 4"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview4 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview4 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview4, setRandomCardCode4, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode4 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview4, setRandomCardCode4, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview4 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='bg-white rounded-md boxShadow w-full 1024px:min-w-[70%] 1024px:max-w-[80%]'>
                    <img
                        src='https://img.freepik.com/free-photo/hip-hop-dancer-dance_144627-7472.jpg?t=st=1722613350~exp=1722616950~hmac=4f3bd5464609f60d787b0be2c0981f9fc8fc2dab52d7880508ddaf081c6f8e4b&w=360'
                        alt='image'
                        className='w-full h-[250px] object-cover rounded-t-md'
                    />

                    <div className='p-4 relative'>

                      <div
                          className='rounded-xl w-[70px] py-3 bg-white absolute -top-9 right-6 boxShadow flex items-center flex-col justify-center'>
                        <b className='text-[1.4rem] leading-[1.4rem]'>18</b>
                        <span className='text-[1rem]'>JAN</span>
                      </div>

                      <p className='text-[1rem] text-gray-300 mt-6'>Performance</p>
                      <h1 className='text-[22px] font-bold text-black leading-[28px] mt-1.5'>Hip hop dancer in
                        dance</h1>

                      <div className='mt-5 flex items-center gap-[10px]'>
                        <span
                            className='w-[40px] cursor-pointer h-[40px] rounded-full border border-[#959393] flex items-center justify-center'>
                        <IoBookmarkOutline className='text-[#959393]'/>
                        </span>
                        <span
                            className='w-[40px] cursor-pointer h-[40px] rounded-full border border-[#959393] flex items-center justify-center'>
                        <GoShareAndroid className='text-[#959393]'/>
                        </span>

                      </div>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode4 && (
                <Showcode
                    code='
import React from "react";

import {IoBookmarkOutline} from "react-icons/io5";
import {GoShareAndroid} from "react-icons/go";

const Card = () => {

    return (
        <div className="bg-white rounded-md shadow-md min-w-[70%] max-w-[80%]">
            <img
                src="https://img.freepik.com/free-photo/hip-hop-dancer-dance_144627-7472.jpg?t=st=1722613350~exp=1722616950~hmac=4f3bd5464609f60d787b0be2c0981f9fc8fc2dab52d7880508ddaf081c6f8e4b&w=360"
                alt="image"
                className="w-full h-[250px] object-cover rounded-t-md"
            />

            <div className="p-4 relative">

                <div
                    className="rounded-xl w-[70px] py-3 bg-white absolute -top-9 right-6 boxShadow flex items-center flex-col justify-center">
                    <b className="text-[1.4rem] leading-[1.4rem]">18</b>
                    <span className="text-[1rem]">JAN</span>
                </div>

                <p className="text-[1rem] text-gray-300 mt-6">Performance</p>
                <h1 className="text-[22px] font-bold text-black leading-[28px] mt-1.5">Hip hop dancer in
                    dance</h1>

                <div className="mt-5 flex items-center gap-[10px]">
                        <span
                            className="w-[40px] cursor-pointer h-[40px] rounded-full border border-[#959393] flex items-center justify-center">
                        <IoBookmarkOutline className="text-[#959393]"/>
                        </span>
                    <span
                        className="w-[40px] cursor-pointer h-[40px] rounded-full border border-[#959393] flex items-center justify-center">
                        <GoShareAndroid className="text-[#959393]"/>
                        </span>

                </div>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_5" text={"random card 5"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview5 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview5 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview5, setRandomCardCode5, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode5 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview5, setRandomCardCode5, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview5 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div
                      className='bg-white rounded-md boxShadow w-full 1024px:min-w-[60%] px-4 py-8 flex items-center justify-center flex-col'>
                    <img
                        src='https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18666.jpg?t=st=1722611499~exp=1722615099~hmac=cde3d70c79e64336ce0f8d5f88de5fabc9d64ba95983ff1f84b6d9dba91df349&w=360'
                        alt='image'
                        className='w-[100px] h-[100px] rounded-full object-cover'
                    />

                    <h1 className='text-[1.3rem] font-[500] leading-[24px] mt-4'>Bruce Lee</h1>
                    <p className='text-[0.9rem] text-gray-500 font-[400]'>Front-End Developer</p>
                    <button className='py-1.5 mt-3 px-6 border border-blue-500 rounded-md text-blue-500'>Follow</button>
                  </div>
                </div>
            )}

            {randomCardCode5 && (
                <Showcode
                    code='
import React from "react";

const Card = () => {

    return (
        <div
            className="bg-white rounded-md shadow-md min-w-[60%] px-4 py-8 flex items-center justify-center flex-col">
            <img
                src="https://img.freepik.com/free-photo/handsome-man-with-glasses_144627-18666.jpg?t=st=1722611499~exp=1722615099~hmac=cde3d70c79e64336ce0f8d5f88de5fabc9d64ba95983ff1f84b6d9dba91df349&w=360"
                alt="image"
                className="w-[100px] h-[100px] rounded-full object-cover"
            />

            <h1 className="text-[1.3rem] font-[500] leading-[24px] mt-4">Bruce Lee</h1>
            <p className="text-[0.9rem] text-gray-500 font-[400]">Front-End Developer</p>
            <button className="py-1.5 mt-3 px-6 border border-blue-500 rounded-md text-blue-500">Follow</button>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_6" text={"random card 6"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview6 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview6 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview6, setRandomCardCode6, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode6 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview6, setRandomCardCode6, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview6 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='w-full 1024px:min-w-[60%] 1024px:max-w-[75%] relative'>
                    <img
                        src='https://img.freepik.com/free-photo/wet-vietnam-mountain-flow-stream-rural_1417-1357.jpg?t=st=1722613987~exp=1722617587~hmac=4258bcb8779776378ec091f7b349c2aa7df9b786e63ecd66704598b328cadef3&w=996'
                        alt='image'
                        className='w-full h-[400px] object-cover rounded-xl'
                    />

                    <div className='absolute top-3 right-3 bg-blue-500 rounded-full p-2'>
                      <IoIosNotificationsOutline className='text-white text-[1.4rem]'/>
                    </div>

                    <div
                        className='absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-5 rounded-b-xl'>
                      <span className='text-[0.8rem] py-1 px-3 bg-blue-500 rounded-full text-white'>Featured</span>
                      <h1 className='text-[1.8rem] text-white font-bold leading-[34px] mt-4'>Wet vietnam mountain flow
                        stream rural</h1>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode6 && (
                <Showcode
                    code='
import React from "react";

import {IoIosNotificationsOutline} from "react-icons/io";

const Card = () => {

    return (
        <div className="min-w-[60%] max-w-[75%] relative">
            <img
                src="https://img.freepik.com/free-photo/wet-vietnam-mountain-flow-stream-rural_1417-1357.jpg?t=st=1722613987~exp=1722617587~hmac=4258bcb8779776378ec091f7b349c2aa7df9b786e63ecd66704598b328cadef3&w=996"
                alt="image"
                className="w-full h-[400px] object-cover rounded-xl"
            />

            <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-2">
                <IoIosNotificationsOutline className="text-white text-[1.4rem]"/>
            </div>

            <div
                className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-5 rounded-b-xl">
                <span className="text-[0.8rem] py-1 px-3 bg-blue-500 rounded-full text-white">Featured</span>
                <h1 className="text-[1.8rem] text-white font-bold leading-[34px] mt-4">Wet vietnam mountain flow
                    stream rural</h1>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_7" text={"random card 7"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview7 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview7 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview7, setRandomCardCode7, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode7 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview7, setRandomCardCode7, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview7 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='w-full 1024px:min-w-[60%] 1024px:max-w-[75%] relative bg-white boxShadow rounded-xl'>
                    <img
                        src='https://img.freepik.com/free-psd/3d-render-illustration-chair-isolated-icon_439185-11403.jpg?t=st=1722616457~exp=1722620057~hmac=1956ee771d405caa2cd12e766fd036b10624a3976be109881a8954d10655285a&w=740'
                        alt='image'
                        className='w-full h-[260px] object-cover rounded-t-xl'
                    />

                    <div className='absolute top-3 right-3 bg-blue-500 rounded-full p-2'>
                      <IoIosNotificationsOutline className='text-white text-[1.4rem]'/>
                    </div>

                    <div className='p-4'>
                      <h1 className='text-[1.3rem] font-bold leading-[34px]'>Minimal Chair</h1>
                      <p className='text-[0.9rem] text-gray-400'>Elegant Simplicity: The Essence of Minimalist Design in
                        Chairs</p>
                    </div>

                    <div className='float-right p-2 hover:bg-gray-100 cursor-pointer mr-2 mb-2 rounded-full group'>
                      <BsArrowRight className='text-[1.5rem] text-gray-400'/>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode7 && (
                <Showcode
                    code='
import React from "react";

import {IoIosNotificationsOutline} from "react-icons/io";
import {BsArrowRight} from "react-icons/bs";

const Card = () => {

    return (
        <div className="min-w-[60%] max-w-[75%] relative bg-white shadow-md rounded-xl">
            <img
                src="https://img.freepik.com/free-psd/3d-render-illustration-chair-isolated-icon_439185-11403.jpg?t=st=1722616457~exp=1722620057~hmac=1956ee771d405caa2cd12e766fd036b10624a3976be109881a8954d10655285a&w=740"
                alt="image"
                className="w-full h-[260px] object-cover rounded-t-xl"
            />

            <div className="absolute top-3 right-3 bg-blue-500 rounded-full p-2">
                <IoIosNotificationsOutline className="text-white text-[1.4rem]"/>
            </div>

            <div className="p-4">
                <h1 className="text-[1.3rem] font-bold leading-[34px]">Minimal Chair</h1>
                <p className="text-[0.9rem] text-gray-400">Elegant Simplicity: The Essence of Minimalist Design in
                    Chairs</p>
            </div>

            <div className="float-right p-2 hover:bg-gray-100 cursor-pointer mr-2 mb-2 rounded-full group">
                <BsArrowRight className="text-[1.5rem] text-gray-400"/>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_8" text={"random card 8"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview8 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview8 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview8, setRandomCardCode8, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode8 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview8, setRandomCardCode8, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview8 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='1024px:min-w-[60%] w-full 1024px:max-w-[75%] relative bg-white boxShadow rounded-xl'>
                    <img
                        src='https://media.licdn.com/dms/image/D5603AQEipbuCEqCp2g/profile-displayphoto-shrink_800_800/0/1719018874117?e=1727913600&v=beta&t=AihY-rjDq8HfVWMHn3jURlA1Zd_VdrQPUcY1_SJPBUg'
                        alt='image'
                        className='w-full h-[260px] object-cover rounded-t-xl'
                    />

                    <div className='p-5'>
                      <h1 className='text-[1.3rem] font-bold leading-[24px]'>Asfak Ahmed</h1>
                      <span className='text-[0.9rem] text-gray-400'>Founder & CEO of ZenUI Library</span>

                      <p className='text-gray-600 mt-3'>Asfak Ahmed is a professional Front-End Web Developer. He born (
                        12 Oct 2004 ). His full name is Asfak Ahmed.....</p>

                      <button
                          className='py-2.5 px-4 bg-gray-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group'>
                        Learn more
                        <BsArrowRight
                            className='text-[1.3rem] text-gray-600 group-hover:ml-2 transition-all duration-200'/>
                      </button>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode8 && (
                <Showcode
                    code='
import React from "react";

import {BsArrowRight} from "react-icons/bs";

const Card = () => {

    return (
        <div className="min-w-[60%] max-w-[75%] relative bg-white shadow-md rounded-xl">
            <img
                src="https://media.licdn.com/dms/image/D5603AQEipbuCEqCp2g/profile-displayphoto-shrink_800_800/0/1719018874117?e=1727913600&v=beta&t=AihY-rjDq8HfVWMHn3jURlA1Zd_VdrQPUcY1_SJPBUg"
                alt="image"
                className="w-full h-[260px] object-cover rounded-t-xl"
            />

            <div className="p-5">
                <h1 className="text-[1.3rem] font-bold leading-[24px]">Asfak Ahmed</h1>
                <span className="text-[0.9rem] text-gray-400">Founder & CEO of ZenUI Library</span>

                <p className="text-gray-600 mt-3">Asfak Ahmed is a professional Front-End Web Developer. He born (
                    12 Oct 2004 ). His full name is Asfak Ahmed.....</p>

                <button
                    className="py-2.5 px-4 bg-gray-300 mt-4 rounded-md w-full flex items-center justify-center gap-[10px] group">
                    Learn more
                    <BsArrowRight
                        className="text-[1.3rem] text-gray-600 group-hover:ml-2 transition-all duration-200"/>
                </button>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_9" text={"random card 9"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview9 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview9 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview9, setRandomCardCode9, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode9 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview9, setRandomCardCode9, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview9 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='w-full 1024px:min-w-[60%] 1024px:max-w-[90%] relative bg-white boxShadow rounded-xl flex-col 640px:flex gap-[20px] p-4'>
                    <div className='w-full 640px:w-[25%]'>
                      <img
                          src='https://img.freepik.com/free-photo/portrait-young-bearded-man-looking-camera_23-2148187159.jpg?t=st=1722619967~exp=1722623567~hmac=c60da5db6ff09019a7669117874a5a90fd04fb132355f1558d5067773698dfaa&w=740'
                          alt='image'
                          className='w-[100%] h-[100px] object-cover 640px:rounded-full'
                      />
                    </div>

                    <div className='w-full 640px:w-[75%] mt-5 640px:mt-0'>
                      <div className='flex 640px:items-center justify-between w-full'>
                        <div className='flex 640px:flex-row flex-col 640px:items-center 640px:gap-[5px]'>
                          <h1 className='text-[1.2rem] font-bold'>Jerome Bell</h1>
                          <span className='text-gray-400'> • 2 week ago</span>
                        </div>

                        <div className='relative'>
                          <BsThreeDots className='text-gray-700 text-[1.2rem] cursor-pointer'
                                       onClick={() => setOpenThreeDotMenu(!openthreeDotMenu)}/>

                          <ul className={`${openthreeDotMenu ? 'translate-y-0 opacity-100 z-20 h-auto' : 'translate-y-[-10px] opacity-0 z-[-1] h-0'} transition-all duration-200 bg-white w-max boxShadow py-1 rounded-md absolute top-6 right-0`}>
                            <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-gray-600'>
                              <FaRegBookmark/>
                              Make favorite
                            </li>
                            <li className='py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-red-500'>
                              <AiOutlineDelete/>
                              Delete
                            </li>
                          </ul>
                        </div>
                      </div>

                      <p className='text-gray-600 mt-3 text-[0.9rem]'>Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.</p>

                      <div className='flex items-center gap-[20px] mt-3'>
                        <div className='flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700'>
                          <FaRegHeart/>
                          22
                        </div>
                        <div className='flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700'>
                          <FaRegBookmark/>
                          234
                        </div>
                        <div className='flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700'>
                          <BiComment/>
                          185
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode9 && (
                <Showcode
                    code='
import React, {useState} from "react";

import {BsThreeDots} from "react-icons/bs";
import {FaRegBookmark, FaRegHeart} from "react-icons/fa";
import {AiOutlineDelete} from "react-icons/ai";
import {BiComment} from "react-icons/bi";

const Card = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div
            className="min-w-[60%] max-w-[90%] relative bg-white boxShadow rounded-xl flex-col sm:flex gap-[20px] p-4">
            <div className="w-full sm:w-[25%]">
                <img
                    src="https://img.freepik.com/free-photo/portrait-young-bearded-man-looking-camera_23-2148187159.jpg?t=st=1722619967~exp=1722623567~hmac=c60da5db6ff09019a7669117874a5a90fd04fb132355f1558d5067773698dfaa&w=740"
                    alt="image"
                    className="w-[100%] h-[100px] object-cover sm:rounded-full"
                />
            </div>

            <div className="w-full sm:w-[75%] mt-5 sm:mt-0">
                <div className="flex sm:items-center justify-between w-full">
                    <div className="flex sm:flex-row flex-col sm:items-center sm:gap-[5px]">
                        <h1 className="text-[1.2rem] font-bold">Jerome Bell</h1>
                        <span className="text-gray-400"> • 2 week ago</span>
                    </div>

                    <div className="relative">
                        <BsThreeDots className="text-gray-700 text-[1.2rem] cursor-pointer"
                                     onClick={() => setIsMenuOpen(!isMenuOpen)}/>

                        <ul className={`${isMenuOpen ? "translate-y-0 opacity-100 z-20 h-auto" : "translate-y-[-10px] opacity-0 z-[-1] h-0"} transition-all duration-200 bg-white w-max boxShadow py-1 rounded-md absolute top-6 right-0`}>
                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-gray-600">
                                <FaRegBookmark/>
                                Make favorite
                            </li>
                            <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer flex items-center gap-[8px] text-[0.9rem] text-red-500">
                                <AiOutlineDelete/>
                                Delete
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-gray-600 mt-3 text-[0.9rem]">Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam
                    consequat sunt nostrud amet.</p>

                <div className="flex items-center gap-[20px] mt-3">
                    <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                        <FaRegHeart/>
                        22
                    </div>
                    <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                        <FaRegBookmark/>
                        234
                    </div>
                    <div className="flex items-center gap-[6px] text-gray-400 cursor-pointer hover:text-blue-700">
                        <BiComment/>
                        185
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>


          <div className="mt-8">
            <ContentHeader id="random_card_10" text={"random card 10"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview10 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview10 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview10, setRandomCardCode10, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode10 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview10, setRandomCardCode10, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview10 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='w-full 1024px:min-w-[60%] 1024px:max-w-[90%] relative bg-white boxShadow rounded-xl flex 640px:flex-row flex-col gap-[20px] p-4'>
                    <div className='w-full 640px:w-[50%]'>
                      <img
                          src='https://img.freepik.com/free-photo/close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe_291049-1495.jpg?t=st=1722616951~exp=1722620551~hmac=88c27af52ea53d69a3f15a046cd8f7fe8c8036a5c733e1e1449b78bc68aeef24&w=360'
                          alt='image'
                          className='w-full 640px:w-[100px] h-[100px] object-cover 640px:rounded-full'
                      />
                    </div>

                    <div className=''>
                      <h1 className='text-[1.4rem] font-bold leading-[24px]'>Jhon Dee</h1>
                      <span className='text-[0.9rem] text-gray-400'>UI/UX Designer</span>

                      <p className='text-gray-600 mt-3 text-[0.9rem]'>UI is the saddle, the stirrups, & the reins. UX is
                        the feeling you get being able to ride the horse.</p>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode10 && (
                <Showcode
                    code='
import React from "react";

const Card = () => {

    return (
        <div className="min-w-[60%] max-w-[90%] relative bg-white shadow-md rounded-xl flex sm:flex-row flex-col gap-[20px] p-4">
            <div className="w-full sm:w-[50%]">
                <img
                    src="https://img.freepik.com/free-photo/close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe_291049-1495.jpg?t=st=1722616951~exp=1722620551~hmac=88c27af52ea53d69a3f15a046cd8f7fe8c8036a5c733e1e1449b78bc68aeef24&w=360"
                    alt="image"
                    className="w-full sm:w-[100px] h-[100px] object-cover sm:rounded-full"
                />
            </div>

            <div className="">
                <h1 className="text-[1.4rem] font-bold leading-[24px]">Jhon Dee</h1>
                <span className="text-[0.9rem] text-gray-400">UI/UX Designer</span>

                <p className="text-gray-600 mt-3 text-[0.9rem]">UI is the saddle, the stirrups, & the reins. UX is
                    the feeling you get being able to ride the horse.</p>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_11" text={"random card 11"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview11 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview11 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview11, setRandomCardCode11, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode11 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview11, setRandomCardCode11, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview11 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='bg-white boxShadow rounded-md w-full 1024px:max-w-[80%]'>
                    <div className='p-5'>
                      <h1 className='text-[1.5rem] font-semibold leading-[28px]'>Constructive and destructive waves</h1>
                      <p className='text-[1rem] text-gray-600 mt-2 mb-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                      <span className='text-[0.9rem] text-gray-400 font-[300]'>2 hours 40 minutes</span>
                    </div>

                    <div className='border-t border-gray-200 p-5 flex items-center justify-between w-full'>
                      <button className='font-semibold text-gray-700'>View More</button>
                      <RiArrowRightSLine className='text-[1.4rem] cursor-pointer'/>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode11 && (
                <Showcode
                    code='
import React from "react";

import {RiArrowRightSLine} from "react-icons/ri";

const Card = () => {

    return (
        <div className="bg-white shadow-md rounded-md max-w-[80%]">
            <div className="p-5">
                <h1 className="text-[1.5rem] font-semibold leading-[28px]">Constructive and destructive waves</h1>
                <p className="text-[1rem] text-gray-600 mt-2 mb-4">Amet minim mollit non deserunt ullamco est sit aliqua
                    dolor do amet sint.</p>
                <span className="text-[0.9rem] text-gray-400 font-[300]">2 hours 40 minutes</span>
            </div>

            <div className="border-t border-gray-200 p-5 flex items-center justify-between w-full">
                <button className="font-semibold text-gray-700">View More</button>
                <RiArrowRightSLine className="text-[1.4rem] cursor-pointer"/>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_12" text={"random card 12"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview12 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview12 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview12, setRandomCardCode12, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode12 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview12, setRandomCardCode12, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview12 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='bg-white boxShadow rounded-md w-full 1024px:max-w-[80%] px-2'>
                    <div className='py-5 px-3'>
                      <span className='text-[0.9rem] text-gray-400 font-[300]'>Reading Task</span>
                      <h1 className='text-[1.5rem] font-semibold leading-[28px] mt-2'>Constructive and destructive
                        waves</h1>
                    </div>

                    <div className='flex flex-col'>
                      <div className='flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer'>
                      <MdOutlineEmail className='text-[1.3rem] mt-[3px]'/>
                        <p className='text-[1.1rem]'>Meeting Reminder: Project Kickoff</p>
                      </div>
                      <div className='flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer'>
                        <MdOutlineEmail className='text-[1.3rem] mt-[3px]'/>
                        <p className='text-[1.1rem]'>Invitation: Web Development Webinar</p>
                      </div>
                      <div className='flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer'>
                        <MdOutlineEmail className='text-[1.3rem] mt-[3px]'/>
                        <p className='text-[1.1rem]'>Invoice #12345 Due Tomorrow</p>
                      </div>
                      <div className='flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer'>
                        <MdOutlineEmail className='text-[1.3rem] mt-[3px]'/>
                        <p className='text-[1.1rem]'>Your Order Has Shipped</p>
                      </div>
                      <div className='flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer'>
                        <MdOutlineEmail className='text-[1.3rem] mt-[3px]'/>
                        <p className='text-[1.1rem]'>Update: New Policy Changes</p>
                      </div>
                    </div>

                    <div className='mx-3'>
                      <button
                          className='w-full mx-auto py-2.5 px-6 text-center bg-[#e9e1ff] text-[#7949ff] my-5 rounded-md '>Continue
                      </button>
                    </div>

                  </div>
                </div>
            )}

            {randomCardCode12 && (
                <Showcode
                    code='
import React from "react";

import {MdOutlineEmail} from "react-icons/md";

const Card = () => {

    return (
        <div className="bg-white shadow-md rounded-md max-w-[80%] px-2">
            <div className="py-5 px-3">
                <span className="text-[0.9rem] text-gray-400 font-[300]">Reading Task</span>
                <h1 className="text-[1.5rem] font-semibold leading-[28px] mt-2">Constructive and destructive
                    waves</h1>
            </div>

            <div className="flex flex-col">
                <div className="flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer">
                    <MdOutlineEmail className="text-[1.3rem] mt-[3px]"/>
                    <p className="text-[1.1rem]">Meeting Reminder: Project Kickoff</p>
                </div>
                <div className="flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer">
                    <MdOutlineEmail className="text-[1.3rem] mt-[3px]"/>
                    <p className="text-[1.1rem]">Invitation: Web Development Webinar</p>
                </div>
                <div className="flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer">
                    <MdOutlineEmail className="text-[1.3rem] mt-[3px]"/>
                    <p className="text-[1.1rem]">Invoice #12345 Due Tomorrow</p>
                </div>
                <div className="flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer">
                    <MdOutlineEmail className="text-[1.3rem] mt-[3px]"/>
                    <p className="text-[1.1rem]">Your Order Has Shipped</p>
                </div>
                <div className="flex items-start gap-[8px] py-3 hover:bg-gray-100 px-3 rounded-md cursor-pointer">
                    <MdOutlineEmail className="text-[1.3rem] mt-[3px]"/>
                    <p className="text-[1.1rem]">Update: New Policy Changes</p>
                </div>
            </div>

            <div className="mx-3">
                <button
                    className="w-full mx-auto py-2.5 px-6 text-center bg-[#e9e1ff] text-[#7949ff] my-5 rounded-md ">Continue
                </button>
            </div>

        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_13" text={"random card 13"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview13 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview13 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview13, setRandomCardCode13, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode13 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview13, setRandomCardCode13, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview13 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='w-full 1024px:max-w-[80%] boxShadow rounded-md'>
                    <div className='flex items-center justify-between w-full p-4'>
                      <h2 className='text-[1.4rem] font-semibold'>Strawberry Cake</h2>
                      <div className='flex items-center gap-[5px]'>
                        <BiSolidLeaf className='py-[4px] rounded-full text-[1.5rem] bg-green-300 text-green-900 cursor-pointer'/>
                        <FaFire className='py-[4px] rounded-full text-[1.5rem] bg-red-300 text-red-800 cursor-pointer'/>
                      </div>
                    </div>
                    <img src='https://img.freepik.com/free-photo/strawberry-dessert-gourmet-sweet-food-chocolate-indulgence-generative-ai_188544-8522.jpg?t=st=1722622233~exp=1722625833~hmac=92966e9ba3da795adaeb9da7587107d51eaff15f0424bf9628d286a28b2486b6&w=1060' alt='icecream'
                    className='w-full'
                    />

                    <div className='p-4'>
                      <p className='text-[1rem] text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt.</p>

                      <div className='mt-5 flex 640px:flex-row flex-col gap-[15px] 640px:gap-[5px] 640px:items-center justify-between w-full'>
                        <h3 className='text-[1.4rem] font-semibold flex items-center gap-[4px]'>
                          $13.90

                          <del className='text-[1rem] text-red-500 font-[300]'>
                            $18.90
                          </del>
                        </h3>

                        <button className='py-2 px-6 border border-gray-600 text-gray-700 rounded-md'>Order now</button>
                      </div>
                    </div>

                  </div>
                </div>
            )}

            {randomCardCode13 && (
                <Showcode
                    code='
import React from "react";

import {BiSolidLeaf} from "react-icons/bi";
import {FaFire} from "react-icons/fa";

const Card = () => {

    return (
        <div className="max-w-[80%] shadow-md rounded-md">
            <div className="flex items-center justify-between w-full p-4">
                <h2 className="text-[1.4rem] font-semibold">Strawberry Cake</h2>
                <div className="flex items-center gap-[5px]">
                    <BiSolidLeaf
                        className="py-[4px] rounded-full text-[1.5rem] bg-green-300 text-green-900 cursor-pointer"/>
                    <FaFire className="py-[4px] rounded-full text-[1.5rem] bg-red-300 text-red-800 cursor-pointer"/>
                </div>
            </div>
            <img
                src="https://img.freepik.com/free-photo/strawberry-dessert-gourmet-sweet-food-chocolate-indulgence-generative-ai_188544-8522.jpg?t=st=1722622233~exp=1722625833~hmac=92966e9ba3da795adaeb9da7587107d51eaff15f0424bf9628d286a28b2486b6&w=1060"
                alt="icecream"
                className="w-full"
            />

            <div className="p-4">
                <p className="text-[1rem] text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt.</p>

                <div className="mt-5 flex items-center justify-between w-full">
                    <h3 className="text-[1.4rem] font-semibold flex items-center gap-[4px]">
                        $13.90

                        <del className="text-[1rem] text-red-500 font-[300]">
                            $18.90
                        </del>
                    </h3>

                    <button className="py-2 px-6 border border-gray-600 text-gray-700 rounded-md">Order now</button>
                </div>
            </div>

        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader id="random_card_14" text={"random card 14"}/>
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            A container for displaying content and actions on a single topic, often used for organizing information into sections.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${randomCardPreview14 ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
              <button
                  className={`${
                      randomCardPreview14 && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview14, setRandomCardCode14, true)}
              >
                Preview
              </button>
              <button
                  className={`${
                      randomCardCode14 && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={() => toggleCardView(setRandomCardPreview14, setRandomCardCode14, false)}
              >
                Code
              </button>
            </div>
            {randomCardPreview14 && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className='w-full 1024px:max-w-[80%] boxShadow rounded-md'>
                    <div className='p-4'>
                      <h1 className='text-[1.5rem] font-semibold'>Minim dolorin</h1>
                      <p className='text-[0.9rem] text-gray-500'>Minim dolor in amet nulla laboris enim dolore consequat.</p>
                    </div>

                    <div className='mt-4'>
                      <div className='flex 640px:flex-row flex-col 640px:items-center w-full justify-between py-3 hover:bg-gray-100 px-4'>
                        <div className='flex gap-[10px]'>
                          <img
                              src='https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722623111~exp=1722626711~hmac=b17f00e5dcf0abc6acd95e3cc2c38c402f1215a1d21f8581ebcf6a2de0b668a0&w=996'
                              alt='avatar' className='w-[60px] h-[60px] object-cover rounded-full '/>
                          <div className='flex flex-col'>
                            <h3 className='text-[1.2rem] font-semibold'>Wade Warren</h3>
                            <span className='text-[0.9rem] text-gray-500'>Dog Trainer</span>
                          </div>
                        </div>

                        <button className='py-2 w-max 640px:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md'>Follow</button>
                      </div>

                      <div className='flex 640px:flex-row flex-col 640px:items-center w-full justify-between py-3 hover:bg-gray-100 px-4'>
                        <div className='flex gap-[10px]'>
                          <img
                              src='https://img.freepik.com/free-photo/bearded-man-listening-music-through-earphones_53876-129947.jpg?t=st=1722623213~exp=1722626813~hmac=b7deb7ad2af8b5966d5cac476223699db295447ed386ee6c02e43c44e1b12a5b&w=996'
                              alt='avatar' className='w-[60px] h-[60px] object-cover rounded-full '/>
                          <div className='flex flex-col'>
                            <h3 className='text-[1.2rem] font-semibold'>Robert Fox</h3>
                            <span className='text-[0.9rem] text-gray-500'>President of Sales</span>
                          </div>
                        </div>

                        <button className='py-2 w-max 640px:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md'>Follow</button>

                      </div>

                      <div className='flex 640px:flex-row flex-col 640px:items-center w-full justify-between py-3 hover:bg-gray-100 px-4'>
                        <div className='flex gap-[10px]'>
                          <img
                              src='https://img.freepik.com/free-photo/porait-cute-boy-cafe_23-2148436119.jpg?t=st=1722623263~exp=1722626863~hmac=6620b351cf7c4d56d5209fd59eadfa696d1edbdafbf1db30e5ab2c9e303cfa4a&w=996'
                              alt='avatar' className='w-[60px] h-[60px] object-cover rounded-full '/>
                          <div className='flex flex-col'>
                            <h3 className='text-[1.2rem] font-semibold'>Jane Cooper</h3>
                            <span className='text-[0.9rem] text-gray-500'>Nursing Assistant</span>
                          </div>
                        </div>

                        <button className='py-2 w-max 640px:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md'>Follow</button>

                      </div>

                      <div className='flex 640px:flex-row flex-col 640px:items-center w-full justify-between py-3 hover:bg-gray-100 px-4'>
                        <div className='flex gap-[10px]'>
                          <img
                              src='https://img.freepik.com/free-photo/portrait-male-traveler-looking-camera-outdoors_23-2148148710.jpg?t=st=1722623296~exp=1722626896~hmac=29e65db6c3e3bbf68796e9342afee5e3595eaa67bbe65a2688fdac5d45041201&w=996'
                              alt='avatar' className='w-[60px] h-[60px] object-cover rounded-full '/>
                          <div className='flex flex-col'>
                            <h3 className='text-[1.2rem] font-semibold'>Frank Esteban</h3>
                            <span className='text-[0.9rem] text-gray-500'>Software Tester</span>
                          </div>
                        </div>

                        <button className='py-2 w-max 640px:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md'>Follow</button>

                      </div>

                      <div className='flex 640px:flex-row flex-col 640px:items-center w-full justify-between py-3 hover:bg-gray-100 px-4'>
                        <div className='flex gap-[10px]'>
                          <img
                              src='https://img.freepik.com/free-photo/handsome-sensitive-red-head-man-smiling_23-2149509820.jpg?t=st=1722623336~exp=1722626936~hmac=f02780547f6a8bc7020a8ab4cf2bbfd1b0b559812cf7f3aea793970ee9a14dc8&w=996'
                              alt='avatar' className='w-[60px] h-[60px] object-cover rounded-full '/>
                          <div className='flex flex-col'>
                            <h3 className='text-[1.2rem] font-semibold'>Dianne Russell</h3>
                            <span className='text-[0.9rem] text-gray-500'>Web Designer</span>
                          </div>
                        </div>

                        <button className='py-2 w-max 640px:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md'>Follow</button>

                      </div>
                    </div>

                    <div className='bg-gray-100 p-4 rounded-b-md flex items-center justify-between w-full'>
                        <span className='text-[0.9rem] text-gray-400'>543 students</span>
                      <button className='text-[0.9rem] text-gray-700 font-[500]'>VIEW ALL MEMBER</button>
                    </div>
                  </div>
                </div>
            )}

            {randomCardCode14 && (
                <Showcode
                    code='
import React from "react";

const Card = () => {

    return (
        <div className="max-w-[80%] shadow-md rounded-md">
            <div className="p-4">
                <h1 className="text-[1.5rem] font-semibold">Minim dolorin</h1>
                <p className="text-[0.9rem] text-gray-500">Minim dolor in amet nulla laboris enim dolore consequat.</p>
            </div>

            <div className="mt-4">
                <div className="flex sm:flex-row flex-col sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722623111~exp=1722626711~hmac=b17f00e5dcf0abc6acd95e3cc2c38c402f1215a1d21f8581ebcf6a2de0b668a0&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] font-semibold">Wade Warren</h3>
                            <span className="text-[0.9rem] text-gray-500">Dog Trainer</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow</button>
                </div>

                <div className="flex sm:flex-row flex-col sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/bearded-man-listening-music-through-earphones_53876-129947.jpg?t=st=1722623213~exp=1722626813~hmac=b7deb7ad2af8b5966d5cac476223699db295447ed386ee6c02e43c44e1b12a5b&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] font-semibold">Robert Fox</h3>
                            <span className="text-[0.9rem] text-gray-500">President of Sales</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow</button>

                </div>

                <div className="flex sm:flex-row flex-col sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/porait-cute-boy-cafe_23-2148436119.jpg?t=st=1722623263~exp=1722626863~hmac=6620b351cf7c4d56d5209fd59eadfa696d1edbdafbf1db30e5ab2c9e303cfa4a&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] font-semibold">Jane Cooper</h3>
                            <span className="text-[0.9rem] text-gray-500">Nursing Assistant</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow</button>

                </div>

                <div className="flex sm:flex-row flex-col sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/portrait-male-traveler-looking-camera-outdoors_23-2148148710.jpg?t=st=1722623296~exp=1722626896~hmac=29e65db6c3e3bbf68796e9342afee5e3595eaa67bbe65a2688fdac5d45041201&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] font-semibold">Frank Esteban</h3>
                            <span className="text-[0.9rem] text-gray-500">Software Tester</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow</button>

                </div>

                <div className="flex sm:flex-row flex-col sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
                    <div className="flex gap-[10px]">
                        <img
                            src="https://img.freepik.com/free-photo/handsome-sensitive-red-head-man-smiling_23-2149509820.jpg?t=st=1722623336~exp=1722626936~hmac=f02780547f6a8bc7020a8ab4cf2bbfd1b0b559812cf7f3aea793970ee9a14dc8&w=996"
                            alt="avatar" className="w-[60px] h-[60px] object-cover rounded-full "/>
                        <div className="flex flex-col">
                            <h3 className="text-[1.2rem] font-semibold">Dianne Russell</h3>
                            <span className="text-[0.9rem] text-gray-500">Web Designer</span>
                        </div>
                    </div>

                    <button className="py-2 w-max sm:m-0 mx-auto px-6 bg-purple-500 text-white rounded-md">Follow</button>

                </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-b-md flex items-center justify-between w-full">
                <span className="text-[0.9rem] text-gray-400">543 students</span>
                <button className="text-[0.9rem] text-gray-700 font-[500]">VIEW ALL MEMBER</button>
            </div>
        </div>
    );
};

export default Card;
                    '
                />
            )}
          </div>

          <OverviewFooter backUrl='/components/drag-and-drop' backName='Drag & Drop' forwardName='animated cards' forwardUrl='/components/animated-cards'/>
        </div>

        <div className="1024px:block hidden sticky top-4 right-0 w-[40%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest pb-[15px]">
            CONTENTS
          </h2>
          <div className="flex flex-col gap-4 overflow-y-auto h-[90vh] pb-[120px] w-[40%]"
               style={{scrollbarWidth: 'none'}}>
            <a
                href="#ticket_card"
                className={`${
                    contentActiveTab === 0 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(0)}
            >
              Ticket Card
            </a>
            <a
                href="#Blog_Card"
                className={`${
                    contentActiveTab === 1 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(1)}
            >
              Blog Card
            </a>
            <a
                href="#product_card"
                className={`${
                    contentActiveTab === 2 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(2)}
            >
              Product Card
            </a>
            <a
                href="#music_card"
                className={`${
                    contentActiveTab === 3 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(3)}
            >
              Music Card
            </a>
            <a
                href="#profile_card_2"
                className={`${
                    contentActiveTab === 4 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(4)}
            >
              Profile Card 2
            </a>
            <a
                href="#Team_card"
                className={`${
                    contentActiveTab === 5 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(5)}
            >
              Team Card
            </a>

            <a
                href="#Pricing_card_1"
                className={`${
                    contentActiveTab === 6 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(6)}
            >
              Pricing Card 1
            </a>

            <a
                href="#Pricing_card_2"
                className={`${
                    contentActiveTab === 7 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(7)}
            >
              Pricing Card 2
            </a>

            <a
                href="#random_card_1"
                className={`${
                    contentActiveTab === 8 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(8)}
            >
              Random Card 1
            </a>

            <a
                href="#random_card_2"
                className={`${
                    contentActiveTab === 9 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(9)}
            >
              Random Card 2
            </a>

            <a
                href="#random_card_3"
                className={`${
                    contentActiveTab === 10 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(10)}
            >
              Random Card 3
            </a>

            <a
                href="#random_card_4"
                className={`${
                    contentActiveTab === 11 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(11)}
            >
              Random Card 4
            </a>

            <a
                href="#random_card_5"
                className={`${
                    contentActiveTab === 12 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(12)}
            >
              Random Card 5
            </a>

            <a
                href="#random_card_6"
                className={`${
                    contentActiveTab === 13 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(13)}
            >
              Random Card 6
            </a>
            <a
                href="#random_card_7"
                className={`${
                    contentActiveTab === 14 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(14)}
            >
              Random Card 7
            </a>
            <a
                href="#random_card_8"
                className={`${
                    contentActiveTab === 15 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(15)}
            >
              Random Card 8
            </a>
            <a
                href="#random_card_9"
                className={`${
                    contentActiveTab === 16 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(16)}
            >
              Random Card 9
            </a>
            <a
                href="#random_card_10"
                className={`${
                    contentActiveTab === 17 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(17)}
            >
              Random Card 10
            </a>
            <a
                href="#random_card_11"
                className={`${
                    contentActiveTab === 18 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(18)}
            >
              Random Card 11
            </a>
            <a
                href="#random_card_12"
                className={`${
                    contentActiveTab === 19 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(19)}
            >
              Random Card 12
            </a>
            <a
                href="#random_card_13"
                className={`${
                    contentActiveTab === 20 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(20)}
            >
              Random Card 13
            </a>
            <a
                href="#random_card_14"
                className={`${
                    contentActiveTab === 21 && "!text-primary !border-primary"
                } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                onClick={() => setContentActiveTab(21)}
            >
              Random Card 14
            </a>
          </div>
        </div>
      </aside>

      <Helmet>
        <title>Surfaces - Cards</title>
      </Helmet>
    </>
  );
};

export default Card;
