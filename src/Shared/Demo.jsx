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
          <div
            className="w-[50px] h-[50px] flex items-center 
          justify-center text-[#fff] text-[1.3rem] rounded-full bg-[#f36f23]"
          >
            R
          </div>

          <div className="">
            <h2 className="font-[500] text-[1.2rem]">Author Name</h2>
            <p className="text-[#424242] text-[0.9rem]">September 14, 2016</p>
          </div>
        </div>
        <BsThreeDotsVertical
          className="text-text rounded-full 
        text-[2.5rem] p-2 hover:bg-[#ececec] cursor-pointer"
        />
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
