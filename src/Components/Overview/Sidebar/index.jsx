import React, { useState } from "react";

// icons
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

// react router dom
import { useNavigate } from "react-router-dom";

const index = ({
  startContent,
  setStartContent,
  componentContent,
  setComponentContent,
}) => {
  const [start, setStart] = useState(true);
  const [components, setComponents] = useState(true);
  const navigate = useNavigate();

  return (
    <aside className="py-6 px-10 border-r border-border flex flex-col gap-4 h-[90vh] overflow-y-scroll fixed top-18 left-0 w-[320px]">
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
            <li
              className={`${
                startContent === 0 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(0)}>
              Overview
            </li>
            <li
              className={`${
                startContent === 1 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(1)}>
              usage
            </li>
            <li
              className={`${
                startContent === 2 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(2)}>
              templates
            </li>
            <li
              className={`${
                startContent === 3 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setStartContent(3)}>
              faq
            </li>
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
            <li
              className={`${
                componentContent === 4 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(4)}>
              All Components
            </li>

            {/* buttons */}
            <li
              className={`sectionHeader font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              Buttons
            </li>
            <li
              className={`${
                componentContent === 5 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(5)}>
              normal button
            </li>
            <li
              className={`${
                componentContent === 6 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(6)}>
              RGB border
            </li>
            <li
              className={`${
                componentContent === 7 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(7)}>
              animated button
            </li>

            {/* navigation */}
            <li
              className={`sectionHeader font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              navigation
            </li>
            <li
              className={`${
                componentContent === 8 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(8)}>
              responsive navbar
            </li>
            <li
              className={`${
                componentContent === 9 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(9)}>
              dropdown menu
            </li>
            <li
              className={`${
                componentContent === 10 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(10)}>
              sidebar menu
            </li>
            <li
              className={`${
                componentContent === 11 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(11)}>
              tabs
            </li>

            {/* FEEDBACK */}
            <li
              className={`sectionHeader font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              feedback
            </li>
            <li
              className={`${
                componentContent === 12 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(12)}>
              skeleton
            </li>
            <li
              className={`${
                componentContent === 13 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(13)}>
              alert message
            </li>
            <li
              className={`${
                componentContent === 14 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(14)}>
              dialog
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default index;
