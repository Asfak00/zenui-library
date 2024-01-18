import React, { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart, FaRegDotCircle } from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp, IoIosRocket } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Card = () => {
  // blog card
  const [blogCardPreview, setBlogCardPreview] = useState(true);
  const [blogCardCode, setBlogCardCode] = useState(false);

  const handleBlogCardPreview = () => {
    setBlogCardPreview(true);
    setBlogCardCode(false);
  };

  const handleBlogCardCode = () => {
    setBlogCardCode(true);
    setBlogCardPreview(false);
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
      <aside>
        <ContentHeader text={"Blog Card"} />

        <p className="w-[80%] text-text text-[1rem]">
          We see navigation Card with borders on all sides like this on almost
          all websites. They are very simple.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                blogCardPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleBlogCardPreview}>
              Preview
            </button>
            <button
              className={`${
                blogCardCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleBlogCardCode}>
              Code
            </button>
          </div>
          {blogCardPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="w-[60%] shadow-lg bg-secondary rounded">
                <div className="flex w-full justify-between items-center p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-[50px] h-[50px] flex items-center justify-center text-secondary text-[1.3rem] rounded-full bg-[#f36f23]">
                      R
                    </div>

                    <div className="">
                      <h2 className="font-[500] text-[1.2rem]">Author Name</h2>
                      <p className="text-text text-[0.9rem]">
                        September 14, 2016
                      </p>
                    </div>
                  </div>
                  <BsThreeDotsVertical className="text-text rounded-full text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
                </div>

                <img
                  src="https://img.freepik.com/premium-photo/tasty-tofu-stir-fry-with-veggies-crispy-tofu-fresh-cilantro-perfect-vegan-meal-healthy_763042-1514.jpg"
                  alt=""
                  className="w-full h-[250px] object-cover"
                />

                <p className="text-text p-4">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </p>

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

                {isOpen && (
                  <div className={`p-4 text-[0.9rem] `}>
                    <b>Method:</b>
                    <p className="mt-3">
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </p>
                    <p className="mt-5">
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
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
                      aside off of the heat to let rest for 10 minutes, and then
                      serve.
                    </p>
                  </div>
                )}
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
    <div className="w-[60%] shadow-lg bg-[#fff] rounded">
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

        <div className="mt-8">
          <ContentHeader text={"profile card"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                profileCardPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleProfileCardPreview}>
              Preview
            </button>
            <button
              className={`${
                profileCardCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleProfileCardCode}>
              Code
            </button>
          </div>
          {profileCardPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="w-[50%] shadow-lg rounded">
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
            </div>
          )}

          {profileCardCode && (
            <Showcode
              code={`
import React from "react";

const profileCard = () => {
  return (
    <div className="w-[50%] shadow-lg rounded">
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
          <ContentHeader text={"Team card"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                teamCardPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleTeamCardPreview}>
              Preview
            </button>
            <button
              className={`${
                teamCardCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleTeamCardCode}>
              Code
            </button>
          </div>
          {teamCardPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="w-[50%] rounded shadow-lg p-4">
                <div className="w-full flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <RiTeamFill className="text-[2rem] p-2 rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer" />
                    <h3>Teams</h3>
                  </div>
                  <BsThreeDotsVertical className="text-[2rem] p-2 rounded-full bg-[#3b9df828] text-[#3B9DF8] cursor-pointer" />
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
                      <div className="w-[30px] h-[30px] object-cover rounded-full border border-secondary bg-[#e5eaf2] text-[#424242] absolute top-0 right-[0%] flex items-center justify-center">
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
    <div className="w-[50%] rounded shadow-lg p-4">
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
          <ContentHeader text={"Pricing card 1"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                pricingCardPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handlePricingCardPreview}>
              Preview
            </button>
            <button
              className={`${
                pricingCardCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handlePricingCardCode}>
              Code
            </button>
          </div>
          {pricingCardPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="w-[50%] border border-border p-2 rounded-2xl">
                <div className="w-full bg-primary rounded-2xl p-4">
                  <div className="flex items-center justify-between w-full mb-5">
                    <IoIosRocket className="text-secondary text-[3.5rem]" />
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
                    <FaRegDotCircle className="text-[1rem] text-[#000]" />
                    Lorem ipsum dolor sit.
                  </p>
                  <p className="flex items-center gap-2 py-3 border-b border-border text-[1rem]">
                    <FaRegDotCircle className="text-[1rem] text-[#000]" />
                    Lorem ipsum dolor sit.
                  </p>
                  <p className="flex items-center gap-2 py-3 border-b border-border text-[1rem]">
                    <FaRegDotCircle className="text-[1rem] text-[#000]" />
                    Lorem ipsum dolor sit.
                  </p>
                  <p className="flex items-center gap-2 py-3 border-b border-border text-[1rem]">
                    <FaRegDotCircle className="text-[1rem] text-[#000]" />
                    Lorem ipsum dolor sit.
                  </p>
                  <p className="flex items-center gap-2 py-3 text-[1rem]">
                    <FaRegDotCircle className="text-[1rem] text-[#000]" />
                    Lorem ipsum dolor sit.
                  </p>
                </div>

                <div className="px-8 my-5">
                  <button className="px-4 py-2 border border-primary bg-primary rounded-2xl text-secondary flex items-center gap-1 group">
                    GET STARTED
                    <BiRightArrowAlt className="text-[1.4rem] group-hover:ml-3 transition-all duration-300" />
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
    <div className="w-[50%] border border-[#e5eaf2] p-2 rounded-2xl">
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
          <ContentHeader text={"Pricing card 2"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                pricingCard2Preview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handlePricingCard2Preview}>
              Preview
            </button>
            <button
              className={`${
                pricingCard2Code && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handlePricingCard2Code}>
              Code
            </button>
          </div>
          {pricingCard2Preview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <div className="w-[60%] border border-border shadow-lg">
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
                    <MdDone className="text-primary text-[1.5rem]" />5 Users
                  </p>
                  <p className="flex items-center gap-2 text-text text-[1rem]">
                    <MdDone className="text-primary text-[1.5rem]" />
                    50GB Storage
                  </p>
                  <p className="flex items-center gap-2 text-text text-[1rem]">
                    <MdDone className="text-primary text-[1.5rem]" />
                    Priority Email Support
                  </p>
                  <p className="flex items-center gap-3 text-text text-[1rem]">
                    <RxCross1 className="text-[#e73939] text-[1.2rem]" />
                    Unlimited Users
                  </p>
                  <p className="flex items-center gap-3 text-text text-[1rem]">
                    <RxCross1 className="text-[#e73939] text-[1.2rem]" />
                    100GB Storage
                  </p>
                  <p className="flex items-center gap-3 text-text text-[1rem]">
                    <RxCross1 className="text-[#e73939] text-[1.2rem]" />
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
    <div className="w-[60%] border border-[#e5eaf2] shadow-lg">
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

        <OverviewFooter />
      </aside>

      <Helmet>
        <title>Surfaces - Cards</title>
      </Helmet>
    </>
  );
};

export default Card;
