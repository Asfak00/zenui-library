import React, { useState } from "react";

// icons
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

// react router dom
import { Link, useNavigate } from "react-router-dom";

const index = ({ startContent, setStartContent }) => {
  const [start, setStart] = useState(true);
  const [components, setComponents] = useState(true);

  return (
    <aside className="py-6 px-10 border-r border-border flex flex-col gap-4 h-[90vh] overflow-y-scroll fixed top-18 left-0 w-[320px] bg-secondary z-20">
      <div>
        <h3
          className="flex items-center gap-1 text-[1rem] text-text font-[500] capitalize cursor-pointer"
          onClick={() => setStart(!start)}>
          {start ? (
            <MdKeyboardArrowDown className="text-[1.5rem] text-primary transition-all duration-300" />
          ) : (
            <MdKeyboardArrowRight className="text-[1.5rem] text-primary transition-all duration-300" />
          )}
          getting-started
        </h3>
        {start && (
          <ul className={`flex flex-col ml-2 mt-3 `}>
            <Link
              to="/getting-started/overview"
              className={`${
                startContent === 0 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(0)}>
              Overview
            </Link>
            <Link
              to="/getting-started/usage"
              className={`${
                startContent === 1 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(1)}>
              usage
            </Link>
            <Link
              to="/getting-started/templates"
              className={`${
                startContent === 2 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(2)}>
              templates
            </Link>
            <Link
              to="/getting-started/faq"
              className={`${
                startContent === 3 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(3)}>
              faq
            </Link>
          </ul>
        )}
      </div>

      <div>
        <h3
          className="flex items-center gap-1 text-[1rem] text-text font-[500] capitalize cursor-pointer"
          onClick={() => setComponents(!components)}>
          {components ? (
            <MdKeyboardArrowDown className="text-[1.5rem] text-primary transition-all duration-300" />
          ) : (
            <MdKeyboardArrowRight className="text-[1.5rem] text-primary transition-all duration-300" />
          )}
          Components
        </h3>
        {components && (
          <ul className={`flex flex-col ml-2 mt-3 `}>
            <Link
              to={"/components/all-components"}
              className={`${
                startContent === 4 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(4)}>
              All Components
            </Link>

            {/* buttons */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              Buttons
            </Link>
            <Link
              to={"/components/normal-button"}
              className={`${
                startContent === 5 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(5)}>
              normal button
            </Link>
            <Link
              to={"/components/rgb-border"}
              className={`${
                startContent === 6 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(6)}>
              RGB border
            </Link>
            <Link
              to={""}
              className={`${
                startContent === 7 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(7)}>
              animated button
            </Link>

            {/* SURFACES */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              SURFACES
            </Link>
            <Link
              to={"/components/cards"}
              className={`${
                startContent === 8 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(8)}>
              Cards
            </Link>
            <Link
              to={""}
              className={`${
                startContent === 9 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(9)}>
              According
            </Link>
            <Link
              to={""}
              className={`${
                startContent === 10 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(10)}>
              App bar
            </Link>

            {/* navigation */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              navigation
            </Link>
            <Link
              to={""}
              className={`${
                startContent === 11 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(11)}>
              responsive navbar
            </Link>
            <Link
              to={""}
              className={`${
                startContent === 12 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(12)}>
              dropdown menu
            </Link>
            <Link
              to={""}
              className={`${
                startContent === 13 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(13)}>
              sidebar menu
            </Link>
            <Link
              to={"/components/tabs"}
              className={`${
                startContent === 14 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(14)}>
              tabs
            </Link>

            {/* FEEDBACK */}
            <Link
              to={""}
              className={`sectionHeader tracking-widest font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              feedback
            </Link>
            <Link
              to={"/components/skeleton"}
              className={`${
                startContent === 15 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(15)}>
              skeleton
            </Link>
            <Link
              to={"/components/alert-message"}
              className={`${
                startContent === 16 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(16)}>
              alert message
            </Link>
            <Link
              to={"/components/dialog-message"}
              className={`${
                startContent === 17 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(17)}>
              dialog
            </Link>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default index;
