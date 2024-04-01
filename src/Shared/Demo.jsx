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
