import React, { useState } from "react";

// icons
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

// react router dom
import { Link, useNavigate } from "react-router-dom";

const index = ({ startContent, setStartContent }) => {
  const [start, setStart] = useState(true);
  const [components, setComponents] = useState(true);

  return (
    <aside className="py-6 px-10 border-r border-border flex flex-col gap-4 h-[90vh] overflow-y-scroll fixed top-18 left-0 w-[320px] dark:bg-[#060024] bg-secondary z-20">
      <div>
        <h3
          className="flex items-center gap-1 text-[1rem] text-text font-[500] capitalize cursor-pointer dark:text-[#D9EEFF]"
          onClick={() => setStart(!start)}
        >
          <MdKeyboardArrowRight
            className={`${
              start && "rotate-[90deg]"
            } text-[1.5rem] text-primary transition-all duration-300`}
          />
          getting-started
        </h3>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            start ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul
            className={`flex flex-col ml-2 mt-3 overflow-hidden pl-4 dark:text-[#D9EEFF] `}
          >
            <Link
              to="/getting-started/overview"
              className={`${
                startContent === 0 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(0)}
            >
              Overview
            </Link>
            <Link
              to="/getting-started/templates"
              className={`${
                startContent === 1 &&
                "border-l border-primary bg-[#f3f6f9] dark:bg-[#1c173bfb] font-[500]"
              } rounded  border-l border-border flex items-center gap-3`}
              onClick={() => setStartContent(1)}
            >
              templates
              <span className="py-1 px-3 rounded-[20px] text-[12px] flex items-center gap-2 font-[600] text-red-800 bg-red-50">
                <img src="/hotIcon.png" alt="hot Icon" className="w-[10px]" />
                HOT
              </span>
            </Link>
            <Link
              to="/getting-started/faq"
              className={`${
                startContent === 2 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(2)}
            >
              faq
            </Link>
          </ul>
        </div>
      </div>

      <div>
        <h3
          className="flex items-center gap-1 text-[1rem] text-text font-[500] capitalize cursor-pointer dark:text-[#D9EEFF]"
          onClick={() => setComponents(!components)}
        >
          <MdKeyboardArrowRight
            className={`${
              components && "rotate-[90deg]"
            } text-[1.5rem] text-primary transition-all duration-300`}
          />
          Components
        </h3>

        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            components ? " grid-rows-[1fr]" : " grid-rows-[0fr]"
          }`}
        >
          <ul
            className={`flex flex-col ml-2 mt-3 overflow-hidden pl-4 dark:text-[#D9EEFF]`}
          >
            <Link
              to={"/components/all-components"}
              className={`${
                startContent === 3 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(3)}
            >
              All Components
            </Link>

            {/* inputs */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}
            >
              Inputs
            </Link>

            <Link
              to={"/components/input-text"}
              className={`${
                startContent === 4 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(4)}
            >
              Input
            </Link>
            <Link
              to={"/components/input-textarea"}
              className={`${
                startContent === 5 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(5)}
            >
              Textarea
            </Link>
            <Link
              to={"/components/input-switch"}
              className={`${
                startContent === 6 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(6)}
            >
              Switch
            </Link>
            <Link
              to={"/components/input-select"}
              className={`${
                startContent === 7 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(7)}
            >
              Select
            </Link>
            <Link
              to={"/components/input-radio"}
              className={`${
                startContent === 8 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(8)}
            >
              Radio
            </Link>
            <Link
              to={"/components/input-file"}
              className={`${
                startContent === 9 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(9)}
            >
              File
            </Link>

            {/* buttons */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}
            >
              Buttons
            </Link>
            <Link
              to={"/components/normal-button"}
              className={`${
                startContent === 10 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(10)}
            >
              normal button
            </Link>
            <Link
              to={"/components/rgb-border"}
              className={`${
                startContent === 11 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(11)}
            >
              RGB border
            </Link>
            <Link
              to={"/components/animated-button"}
              className={`${
                startContent === 12 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(12)}
            >
              animated button
            </Link>

            {/* SURFACES */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}
            >
              SURFACES
            </Link>
            <Link
              to={"/components/cards"}
              className={`${
                startContent === 13 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(13)}
            >
              Cards
            </Link>
            <Link
              to={"/components/according"}
              className={`${
                startContent === 14 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(14)}
            >
              According
            </Link>
            <Link
              to={"/components/appbar"}
              className={`${
                startContent === 15 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(15)}
            >
              App bar
            </Link>
            <Link
              to={"/components/image-gallery"}
              className={`${
                startContent === 16 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(16)}
            >
              Image Gallery
            </Link>

            {/* navigation */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}
            >
              navigation
            </Link>
            <Link
              to={"/components/pagination"}
              className={`${
                startContent === 17 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(17)}
            >
              Pagination
            </Link>
            <Link
              to={"/components/dropdown"}
              className={`${
                startContent === 18 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(18)}
            >
              dropdown menu
            </Link>
            <Link
              to={"/components/chip"}
              className={`${
                startContent === 19 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(19)}
            >
              Chip
            </Link>
            <Link
              to={"/components/modal"}
              className={`${
                startContent === 20 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(20)}
            >
              modal
            </Link>
            <Link
              to={"/components/tabs"}
              className={`${
                startContent === 21 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(21)}
            >
              tabs
            </Link>

            {/* FEEDBACK */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}
            >
              feedback
            </Link>
            <Link
              to={"/components/skeleton"}
              className={`${
                startContent === 22 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(22)}
            >
              skeleton
            </Link>
            <Link
              to={"/components/alert-message"}
              className={`${
                startContent === 23 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(23)}
            >
              alert message
            </Link>
            <Link
              to={"/components/dialog-message"}
              className={`${
                startContent === 24 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(24)}
            >
              dialog
            </Link>
            <Link
              to={"/components/testimonials"}
              className={`${
                startContent === 25 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(25)}
            >
              Testimonial
            </Link>
            <Link
              to={"/components/loader"}
              className={`${
                startContent === 26 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(26)}
            >
              Loader
            </Link>
            <Link
              to={"/components/notification"}
              className={`${
                startContent === 27 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(27)}
            >
              Notification
            </Link>

            {/* data display */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}
            >
              data display
            </Link>
            <Link
              to={"/components/badge"}
              className={`${
                startContent === 28 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(28)}
            >
              Badge
            </Link>
            <Link
              to={"/components/tooltip"}
              className={`${
                startContent === 29 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(29)}
            >
              tooltip
            </Link>

            {/* Randoms */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}
            >
              Randoms
            </Link>

            <Link
              to={"/components/code"}
              className={`${
                startContent === 30 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(30)}
            >
              Code
            </Link>
            <Link
              to={"/components/snippet"}
              className={`${
                startContent === 31 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(31)}
            >
              Snippet
            </Link>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default index;
