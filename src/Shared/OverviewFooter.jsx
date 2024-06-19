import React, { useState } from "react";

// icons
import { FaGithub } from "react-icons/fa";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaHand } from "react-icons/fa6";

// utils style
import utils from "../Utils";

const OverviewFooter = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisLiked, setIsDisLiked] = useState(false);

  const handleLikeBtn = () => {
    setIsLiked(!isLiked);
    setIsDisLiked(false);
  };

  const handleDislikeBtn = () => {
    setIsDisLiked(!isDisLiked);
    setIsLiked(false);
  };

  return (
    <footer className="w-full 1024px:w-[80%] mt-8">
      <div className="flex flex-col 425px:flex-row 425px:items-center justify-between w-full pb-5">
        <button
          className={`${utils.buttonSecondary} flex items-center gap-2 !px-2 !py-1 text-[0.9rem] min-w-[110px] mr-3 max-w-[110px]`}
        >
          <FaGithub />
          Give a star
        </button>

        <div className="flex items-center justify-between w-full gap-4">
          <span className='text-[#0471d6]'>Was this page helpful?</span>
          <div className="flex items-center gap-3">
            <BiSolidLike
              className={`${
                isLiked && "!text-primary"
              } p-2 border border-[#0471d6] rounded-full text-[2.4rem] cursor-pointer text-[#9caebc]`}
              onClick={handleLikeBtn}
            />
            <BiSolidDislike
              className={`${
                isDisLiked && "!text-[#d30c0c]"
              } p-2 border border-[#0471d6] rounded-full text-[2.4rem] cursor-pointer text-[#9caebc]`}
              onClick={handleDislikeBtn}
            />
          </div>
        </div>
      </div>

      {isLiked && (
        <form action="#" className="w-full mb-5">
          <label htmlFor="message" className=''>What did you like about this page?</label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder='Give feedback'
            className="w-full h-[130px] bg-border outline-none rounded p-4 mt-1"
          ></textarea>
          <div className="w-full flex items-center mt-2 justify-end gap-3">
            <button
              type="button"
              onClick={handleLikeBtn}
              className={`${utils.buttonSecondary} !py-1 !px-3`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${utils.buttonPrimary} !py-1 !px-3`}
            >
              Submit
            </button>
          </div>
        </form>
      )}

      {isDisLiked && (
        <form action="#" className="w-full mb-5">
          <label htmlFor="message" className=''>How can we improve this page?</label>
          <br />
          <textarea
            name="message"
            id="message"
            placeholder='Report summary'
            className="w-full h-[130px] bg-border outline-none rounded p-4 mt-1"
          ></textarea>

          <div className="w-full border border-[#ffa90a] rounded p-3 flex gap-4 items-start my-4 bg-[#ffa90a21]">
            <p>
              <FaHand className="text-[1.2rem] text-[#ffa90a]" />
            </p>
            <p className="text-[1rem] text-text">
              If something is broken or if you need a reply to a problem you've
              encountered, please{" "}
              <a href="" className=" text-primary font-[500] underline">
                open an issue instead
              </a>
              . Otherwise, the team won't be able to answer back or ask for more
              information.
            </p>
          </div>
          <div className="w-full flex items-center mt-2 justify-end gap-3">
            <button
              type="button"
              onClick={handleDislikeBtn}
              className={`${utils.buttonSecondary} !py-1 !px-3`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${utils.buttonPrimary} !py-1 !px-3`}
            >
              Submit
            </button>
          </div>
        </form>
      )}

      <div className="flex items-center gap-5 justify-between w-full border-t border-border pt-5">
        <img src="/footer_logo.png" alt="logo-image" className="w-[120px]" />

        <div className="flex items-center gap-3">
          <p className=" font-[600] text-[1rem] text-text">Support:</p>
          <a href="https://buymeacoffee.com/zenuilibrary" target="_blank">
            <img
              src="https://www.codehim.com/wp-content/uploads/2022/09/bmc-button-640x180.png.webp"
              alt="sponser-image"
              className="w-[120px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default OverviewFooter;
