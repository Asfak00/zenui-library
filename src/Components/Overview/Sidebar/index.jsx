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

  const handleOverview = () => {
    setStartContent(0);
    navigate("/overview");
  };

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
              onClick={handleOverview}>
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
                componentContent === 0 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(0)}>
              All Components
            </li>

            {/* buttons */}
            <li
              className={`sectionHeader font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              Buttons
            </li>
            <li
              className={`${
                componentContent === 1 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(1)}>
              normal button
            </li>
            <li
              className={`${
                componentContent === 1 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(1)}>
              RGB border
            </li>
            <li
              className={`${
                componentContent === 2 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(2)}>
              animated button
            </li>

            {/* navigation */}
            <li
              className={`sectionHeader font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              navigation
            </li>
            <li
              className={`${
                componentContent === 1 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(1)}>
              responsive navbar
            </li>
            <li
              className={`${
                componentContent === 1 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(1)}>
              dropdown menu
            </li>
            <li
              className={`${
                componentContent === 2 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(2)}>
              sidebar menu
            </li>
            <li
              className={`${
                componentContent === 2 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(2)}>
              tabs
            </li>

            {/* FEEDBACK */}
            <li
              className={`sectionHeader font-[500] hover:font-[500] relative mt-4 uppercase rounded  border-l border-border !text-[0.750rem] `}>
              feedback
            </li>
            <li
              className={`${
                componentContent === 1 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(1)}>
              skeleton
            </li>
            <li
              className={`${
                componentContent === 1 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(1)}>
              alert message
            </li>
            <li
              className={`${
                componentContent === 2 &&
                "border-l border-primary bg-[#f3f6f9] font-[500]"
              } rounded  border-l border-border`}
              onClick={() => setComponentContent(2)}>
              dialog
            </li>
          </ul>
        )}
      </div>
    </aside>
  );
};

export default index;
