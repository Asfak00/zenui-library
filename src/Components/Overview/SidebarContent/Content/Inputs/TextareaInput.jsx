import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const TextareaInput = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // primary input
  const [primaryInputPreview, setPrimaryInputPreview] = useState(true);
  const [primaryInputCode, setPrimaryInputCode] = useState(false);

  const handlePrimaryInputPreview = () => {
    setPrimaryInputPreview(true);
    setPrimaryInputCode(false);
  };

  const handlePrimaryInputCode = () => {
    setPrimaryInputCode(true);
    setPrimaryInputPreview(false);
  };

  // bottom border input
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

  // animateLabel
  const [animateLabelPreiview, setAnimateLabelPreview] = useState(true);
  const [animateLabelCode, setAnimateLabelCode] = useState(false);

  const handleAnimateLabelPreview = () => {
    setAnimateLabelPreview(true);
    setAnimateLabelCode(false);
  };

  const handleAnimateLabelCode = () => {
    setAnimateLabelCode(true);
    setAnimateLabelPreview(false);
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6 1024px:pl-[5rem] pt-[9.5rem] 1024px:pt-[4.5rem] !px-5 425px:!px-10 ">
        <div>
          <ContentHeader text={"required textarea"} id={"required_textarea"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is a required textarea component. Please enter your text here; this field cannot be left empty.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${primaryInputPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      primaryInputPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handlePrimaryInputPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      primaryInputCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handlePrimaryInputCode}
              >
                Code
              </button>
            </div>
            {primaryInputPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%]">
                    <label
                        htmlFor="description"
                    className="font-[400] text-[15px] text-text"
                  >
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Write something about zenUI"
                    className="border-border border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[200px] focus:border-primary transition-colors duration-300"
                  />
                </div>
              </div>
            )}

            {primaryInputCode && (
              <Showcode
                code='
const Textarea = () => {
  return (
    <div className="w-[80%]">
      <label htmlFor="description" className="font-[400] text-[15px]">
        Description <span className="text-red-500">*</span>
      </label>
      <textarea
        type="text"
        name="description"
        id="description"
        placeholder="Write something about zenUI"
        className="border-[#e5eaf2] border rounded-md outline-none mt-1 px-4 w-full py-3 min-h-[200px] focus:border-[#3B9DF8] transition-colors duration-300"
      />
    </div>
  );
};

export default Textarea;
                '
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
              text={"background textarea"}
              id={"background_textarea"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a textarea input with a background color. Enter your text here for a more visually appealing experience.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${bottomBorderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      bottomBorderPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleBottomBorderPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      bottomBorderCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleBottomBorderCode}
              >
                Code
              </button>
            </div>
            {bottomBorderPreview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <div className="w-full 1024px:w-[80%]">
                    <label
                        htmlFor="description"
                        className="font-[400] text-[15px] text-text"
                    >
                      Description
                    </label>
                    <textarea
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Write something about zenUI"
                        className="border-border border outline-none px-4 w-full mt-1 min-h-[100px] bg-gray-200 rounded-md py-3 focus:border-gray-400 transition-colors duration-300"
                    />
                  </div>
                </div>
            )}

            {bottomBorderCode && (
                <Showcode
                    code='
const Textarea = () => {
  return (
    <div className="w-[80%]">
      <label htmlFor="description" className="font-[400] text-[15px]">
        Description
      </label>
      <textarea
        type="text"
        name="name"
        id="name"
        placeholder="Write something about zenUI"
        className="border-[#e5eaf2] border outline-none px-4 w-full mt-1 min-h-[100px] bg-gray-200 rounded-md py-3 focus:border-gray-400 transition-colors duration-300"
      />
    </div>
  );
};

export default Textarea;
                '
                />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
                text={"animate label textarea"}
                id={"animate_label_textarea"}
            />
          </div>

          <p className="w-full 425px:w-[80%] text-text text-[1rem]">
            This is a textarea input with an animated label. Enter your text here; the label animates accordingly for clarity.
          </p>

          <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animateLabelPreiview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      animateLabelPreiview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleAnimateLabelPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      animateLabelCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleAnimateLabelCode}
              >
                Code
              </button>
            </div>
            {animateLabelPreiview && (
                <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                  <label className="relative w-full 1024px:w-[80%]">
      <textarea
          name="name"
          id="name"
          className="peer border-[#e5eaf2] border rounded-md outline-none px-4 min-h-[200px] py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
      />
                    <span
                        className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
        Write something about zenUI
      </span>
                  </label>
                </div>
            )}

            {animateLabelCode && (
                <Showcode
                    code='
const Textarea = () => {
  return (
    <label className="relative w-[80%]">
      <textarea
        name="name"
        id="name"
        className="peer border-[#e5eaf2] border rounded-md outline-none px-4 min-h-[200px] py-3 w-full focus:border-[#3B9DF8] transition-colors duration-300"
      />
      <span className=" absolute top-3.5 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#777777] peer-focus:px-1 transition-all duration-300 ">
        Write something about zenUI
      </span>
    </label>
  );
};

export default Textarea;
                '
                />
            )}
          </div>

          <OverviewFooter/>
        </div>

        <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[20%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#required_textarea"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Required Textarea
          </a>
          <a
              href="#background_textarea"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-text border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Background Textarea
          </a>
          <a
              href="#animate_label_textarea"
            className={`${
              contentActiveTab === 3 && "!text-primary !border-primary"
            } text-[0.9rem] text-text border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(3)}
          >
            Animate Label Textarea
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - Textarea</title>
      </Helmet>
    </>
  );
};

export default TextareaInput;
