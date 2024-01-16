import React, { useState } from "react";

// components
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";

const Tabs = () => {
  // normal button
  const [fullBorderTabPreview, setFullBorderTabPreview] = useState(true);
  const [fullBorderTabCode, setFullBorderTabCode] = useState(false);

  const handleFullBorderPreview = () => {
    setFullBorderTabPreview(true);
    setFullBorderTabCode(false);
  };

  const handleFullBorderCode = () => {
    setFullBorderTabCode(true);
    setFullBorderTabPreview(false);
  };

  // background animated button
  const [bottomBorderPreview, setBottomBorderPreview] = useState(true);
  const [bottomBorderCode, setBottomBorderCode] = useState(false);

  const handleBottomBorderPreview = () => {
    setBottomBorderPreview(true);
    setBottomBorderCode(false);
  };

  const handleBottomBorderCode = () => {
    setBottomBorderCode(true);
    setBottomBorderPreview(false);
  };

  // state for full border tab
  const [isActive, setIsActive] = useState(1);

  // bottom border tab
  const [bottomBorderActive, setBottomBorderActive] = useState(1);
  return (
    <>
      <aside>
        <ContentHeader text={"Border navigation tab"} />

        <p className="w-[80%] text-text text-[1rem]">
          We see navigation tabs with borders on all sides like this on almost
          all websites. They are very simple.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                fullBorderTabPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleFullBorderPreview}>
              Preview
            </button>
            <button
              className={`${
                fullBorderTabCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleFullBorderCode}>
              Code
            </button>
          </div>
          {fullBorderTabPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <ul className="flex items-center gap-5">
                <li
                  className={`${
                    isActive === 1 && "bg-primary text-secondary"
                  } px-6 py-2 border  text-primary transition duration-300 border-primary cursor-pointer`}
                  onClick={() => setIsActive(1)}>
                  Home
                </li>
                <li
                  className={`${
                    isActive === 2 && "bg-primary text-secondary"
                  } px-6 py-2 border text-primary transition duration-300 border-primary cursor-pointer`}
                  onClick={() => setIsActive(2)}>
                  About
                </li>
                <li
                  className={`${
                    isActive === 3 && "bg-primary text-secondary"
                  } px-6 py-2 border text-primary transition duration-300 border-primary cursor-pointer`}
                  onClick={() => setIsActive(3)}>
                  Support
                </li>
              </ul>
            </div>
          )}

          {fullBorderTabCode && (
            <Showcode
              code="
import React, { useState } from 'react';

const BorderTab = () => {

  const [isActive, setIsActive] = useState(1);

  return (
    <ul className='flex items-center gap-5'>
      <li
        className={`${
          isActive === 1 && 'bg-primary text-secondary'
        } px-6 py-2 border  text-primary transition duration-300 border-primary cursor-pointer`}
        onClick={() => setIsActive(1)}> Home
      </li>
      <li
        className={`${
          isActive === 2 && 'bg-primary text-secondary'
        } px-6 py-2 border text-primary transition duration-300 border-primary cursor-pointer`}
        onClick={() => setIsActive(2)}> About
      </li>
      <li
        className={`${
          isActive === 3 && 'bg-primary text-secondary'
        } px-6 py-2 border text-primary transition duration-300 border-primary cursor-pointer`}
        onClick={() => setIsActive(3)}> Support
      </li>
    </ul>
  );
};

export default BorderTab;
"
            />
          )}
        </div>

        <div className="mt-8">
          <ContentHeader text={"bottom border navigation tab"} />
        </div>

        <p className="w-[80%] text-text text-[1rem]">
          Many times it is seen that only the bottom of the bar does not come
          from all sides, that is the tab of the bottom bar.
        </p>

        <div className="w-[80%] border border-border rounded mt-8">
          <div className="">
            <button
              className={`${
                bottomBorderPreview && "bg-border"
              } px-6 py-2 border-r border-b roudned border-border`}
              onClick={handleBottomBorderPreview}>
              Preview
            </button>
            <button
              className={`${
                bottomBorderCode && "bg-border"
              } px-6 py-2 border-r border-b rounded border-border`}
              onClick={handleBottomBorderCode}>
              Code
            </button>
          </div>
          {bottomBorderPreview && (
            <div className="p-8 mb-4 flex items-center gap-5 justify-center">
              <ul className="flex items-center gap-5">
                <li
                  className={`${
                    bottomBorderActive === 1 && "!border-primary !text-primary"
                  } px-6 py-2 border-b  text-text transition duration-300 border-transparent cursor-pointer`}
                  onClick={() => setBottomBorderActive(1)}>
                  Home
                </li>
                <li
                  className={`${
                    bottomBorderActive === 2 && "!border-primary !text-primary"
                  } px-6 py-2 border-b  text-text transition duration-300 border-transparent cursor-pointer`}
                  onClick={() => setBottomBorderActive(2)}>
                  About
                </li>
                <li
                  className={`${
                    bottomBorderActive === 3 && "!border-primary !text-primary"
                  } px-6 py-2 border-b  text-text transition duration-300 border-transparent cursor-pointer`}
                  onClick={() => setBottomBorderActive(3)}>
                  Support
                </li>
              </ul>
            </div>
          )}

          {bottomBorderCode && (
            <Showcode
              code="
import React from 'react';

const BottomBorderTab = () => {

    const [isActive, setIsActive] = useState(1);

  return (
    <ul className='flex items-center gap-5'>
      <li
        className={`${
          isActive === 1 && '!border-primary !text-primary'
        } px-6 py-2 border-b  text-text transition duration-300 border-transparent cursor-pointer`}
        onClick={() => setIsActive(1)}> Home
      </li>
      <li
        className={`${
          isActive === 2 && '!border-primary !text-primary'
        } px-6 py-2 border-b  text-text transition duration-300 border-transparent cursor-pointer`}
        onClick={() => setIsActive(2)}> About
      </li>
      <li
        className={`${
          isActive === 3 && '!border-primary !text-primary'
        } px-6 py-2 border-b  text-text transition duration-300 border-transparent cursor-pointer`}
        onClick={() => setIsActive(3)}> Support
      </li>
    </ul>
  );
};

export default BottomBorderTab; "
            />
          )}
        </div>

        <OverviewFooter />
      </aside>

      <Helmet>
        <title>Navigation - Tabs</title>
      </Helmet>
    </>
  );
};

export default Tabs;
