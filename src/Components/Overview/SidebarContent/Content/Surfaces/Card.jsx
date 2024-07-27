import { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaHeart,
  FaRegDotCircle,
} from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp, IoIosRocket } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { BiLike, BiRightArrowAlt } from "react-icons/bi";
import { MdDone, MdPlayArrow } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Card = () => {
  // blog card
  const [blogCardPreview, setBlogCardPreview] = useState(true);
  const [blogCardCode, setBlogCardCode] = useState(false);
  const [contentActiveTab, setContentActiveTab] = useState(0);

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

  // dropdown control
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
        <div className="w-full 425px:w-[80%]">
          <ContentHeader id="Blog_Card" text={"Blog Card"} />

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a blog card with icon and dropdown component. Explore content with icons and interactive dropdowns for seamless navigation.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded my-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${blogCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
                        className={`grid overflow-hidden transition-all duration-300 ${
                            isOpen ? "grid-rows-[1fr] p-4" : "grid-rows-[0fr]"
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
            This is a product card with icon and add to cart button. Browse products and add them to your cart effortlessly.
          </p>
          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${productCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
                    className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${musicCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
              This is a profile card with statistics component. View detailed insights and information about profiles seamlessly.
            </p>

            <div className="w-full 425px:w-[80%] border border-border rounded mt-3">
              <div className="relative">
                <div
                    className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${simpleProfileCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${profileCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${teamCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
            This is a pricing card with highlighted points. Compare plans with clear, marked features for easy selection.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${pricingCardPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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
            This is a pricing card with check and cross icons for feature comparison. Easily assess options with clear indicators.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${pricingCard2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
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

          <OverviewFooter/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[40%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
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
        </div>
      </aside>

      <Helmet>
        <title>Surfaces - Cards</title>
      </Helmet>
    </>
  );
};

export default Card;
