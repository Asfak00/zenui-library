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
    <footer className="w-[80%] mt-8">
      <div className="flex items-center justify-between w-full pb-5">
        <button
          className={`${utils.buttonSecondary} flex items-center gap-2 !px-2 !py-1 text-[0.9rem]`}
        >
          <FaGithub />
          Give a star
        </button>

        <div className="flex items-center gap-4">
          <span>Was this page helpful?</span>
          <div className="flex items-center gap-3">
            <BiSolidLike
              className={`${
                isLiked && "!text-primary"
              } p-2 border border-border rounded-full text-[2.4rem] cursor-pointer text-text`}
              onClick={handleLikeBtn}
            />
            <BiSolidDislike
              className={`${
                isDisLiked && "!text-[#d30c0c]"
              } p-2 border border-border rounded-full text-[2.4rem] cursor-pointer text-text`}
              onClick={handleDislikeBtn}
            />
          </div>
        </div>
      </div>

      {isLiked && (
        <form action="#" className="w-full mb-5">
          <label htmlFor="message">What did you like about this page?</label>
          <br />
          <textarea
            name="message"
            id="message"
            className="w-full h-[130px] border border-primary outline-none rounded p-4 mt-1"
          ></textarea>
          <div className="w-full flex items-center mt-2 justify-end gap-3">
            <button
              type="submit"
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
          <label htmlFor="message">How can we improve this page?</label>
          <br />
          <textarea
            name="message"
            id="message"
            className="w-full h-[130px] border border-primary outline-none rounded p-4 mt-1"
          ></textarea>

          <div className="w-full border border-[#ffa90a] rounded p-3 flex gap-4 items-start my-4 bg-[#ffa90a21]">
            <p>
              <FaHand className="text-[1.2rem] text-[#ffa90a]" />
            </p>
            <p className="text-[1rem]">
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
              type="submit"
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

      <div className="flex items-center justify-between w-full border-t border-border pt-5">
        <img src="/logo.jpg" alt="logo-image" className="w-[50px]" />

        <div className="flex items-center gap-3">
          <p className="text-text font-[600] text-[1rem]">Support:</p>
          <a href="https://www.buymeacoffee.com/asfak00" target="_blank">
            <img
              src="https://helloimjessa.files.wordpress.com/2021/06/bmc-button.png"
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
