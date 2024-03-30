import React, { useState } from "react";
import { BiLike } from "react-icons/bi";

// icons
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { HiMiniShare } from "react-icons/hi2";


const ProductCard = () => {
  // action constrols
  
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="w-[70%] shadow-lg bg-[#fff] rounded">
    <img
    src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2VzfGVufDB8fDB8fHww"
    alt=""
    className="w-full h-[250px] object-cover"
  />
      <div className="flex w-full justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <div className="w-[50px] h-[50px] flex items-center 
          justify-center text-[#fff] text-[1.3rem] rounded-full bg-[#f36f23]">
            R
          </div>

          <div className="">
            <h2 className="font-[500] text-[1.2rem]">Author Name</h2>
            <p className="text-[#424242] text-[0.9rem]">September 14, 2016</p>
             <div className="flex flex-row justify-between">
                 <button className="flex flex-row "> <BsEye className="text-2xl p-1"/>  50</button>
                 <button className="flex flex-row "><BiLike className="text-2xl p-1"/> 10</button>
              </div>
          </div>
        </div>
        <BsThreeDotsVertical className="text-text rounded-full 
        text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer" />
      </div>
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
        <button className="btn p-3 rounded border bg-black text-white hover:bg-blue-700 hover:text-white">Add to cart</button>

      </div>
      
    </div>
  );
};

export default ProductCard;