import React from "react";

// icons
import { RiTeamFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const TeamCard = () => {
  return (
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
  );
};

export default TeamCard;
