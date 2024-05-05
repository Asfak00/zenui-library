import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// icons
import { FiUpload } from "react-icons/fi";
import { IoMdCloudUpload } from "react-icons/io";
import { PiFilesThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdDelete } from "react-icons/md";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";

const FileInput = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // upload with icon
  const [iconUploadPreview, setIconUploadPreview] = useState(true);
  const [iconUploadCode, setIconUploadCode] = useState(false);

  const handleIconUploadPreview = () => {
    setIconUploadPreview(true);
    setIconUploadCode(false);
  };

  const handleIconUploadCode = () => {
    setIconUploadCode(true);
    setIconUploadPreview(false);
  };

  // upload with button
  const [buttonUploadPreview, setButtonUploadPreview] = useState(true);
  const [buttonUploadCode, setButtonUploadCode] = useState(false);

  const handleButtonUploadPreview = () => {
    setButtonUploadPreview(true);
    setButtonUploadCode(false);
  };

  const handleButtonUploadCode = () => {
    setButtonUploadCode(true);
    setButtonUploadPreview(false);
  };

  // upload with heading
  const [headingUploadPreview, setHeadingUploadPreview] = useState(true);
  const [headingUploadCode, setHeadingUploadCode] = useState(false);

  const handleHeadingUploadPreview = () => {
    setHeadingUploadPreview(true);
    setHeadingUploadCode(false);
  };

  const handleHeadingUploadCode = () => {
    setHeadingUploadCode(true);
    setHeadingUploadPreview(false);
  };

  // profile upload
  const [profileUploadPreview, setProfileUploadPreview] = useState(true);
  const [profileUploadCode, setProfileUploadCode] = useState(false);

  const handleProfileUploadPreview = () => {
    setProfileUploadPreview(true);
    setProfileUploadCode(false);
  };

  const handleProfileUploadCode = () => {
    setProfileUploadCode(true);
    setProfileUploadPreview(false);
  };

  // actions
  const [imageUploaded, setImageUploaded] = useState("");

  const handleUploadImageClick = () => {
    document.getElementById("image").click();
  };

  const handleFirstImageChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageUploaded(imageURL);
    }
  };

  const [imageUploaded2, setImageUploaded2] = useState("");

  const handleSecondImageClick = () => {
    document.getElementById("secondImage").click();
  };

  const handleSecondImageChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageUploaded2(imageURL);
    }
  };

  const [imageUploaded3, setImageUploaded3] = useState("");

  const handleThirdImageClick = () => {
    document.getElementById("thridImage").click();
  };

  const handleThirdImageChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageUploaded3(imageURL);
    }
  };

  const [imageUploaded4, setImageUploaded4] = useState("");

  const handleFourthImageClick = () => {
    document.getElementById("fourthImage").click();
  };

  const handleFourthImageChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageUploaded4(imageURL);
    }
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6">
        <div>
          <ContentHeader text={"upload with icon"} id={"upload_with_icon"} />

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  iconUploadPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleIconUploadPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  iconUploadCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleIconUploadCode}
              >
                Code
              </button>
            </div>
            {iconUploadPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <input
                  type="file"
                  name="image"
                  id="image"
                  className="hidden"
                  onChange={handleFirstImageChange}
                />
                {imageUploaded === "" ? (
                  <div
                    className="w-[90%] flex items-center justify-center flex-col gap-4 border-border border rounded-md py-6 cursor-pointer"
                    onClick={handleUploadImageClick}
                  >
                    <FiUpload className="text-[2rem] text-[#777777]" />
                    <p className="text-[#777777]">Browse to upload you file</p>
                  </div>
                ) : (
                  <div className="relative w-[80%] h-[300px]">
                    <img
                      src={imageUploaded}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                    <MdDelete
                      className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
                      onClick={() => setImageUploaded("")}
                    />
                  </div>
                )}
              </div>
            )}

            {iconUploadCode && (
              <Showcode
                code='
// icons
import { FiUpload } from "react-icons/fi";

const FileUpload = () => {
  const [imageLink, setImageLink] = useState("");

  const handleUploadImageClick = () => {
    document.getElementById("image").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageLink(imageURL);
    }
  };

  return (
    <>
      <input
        type="file"
        name="image"
        id="image"
        className="hidden"
        onChange={handleFileChange}
      />
      {imageLink === "" ? (
        <div
          className="w-[90%] flex items-center justify-center flex-col gap-4 border-[#e5eaf2] border rounded-md py-6 cursor-pointer"
          onClick={handleUploadImageClick}
        >
          <FiUpload className="text-[2rem] text-[#777777]" />
          <p className="text-[#777777]">Browse to upload you file</p>
        </div>
      ) : (
        <div className="relative w-[80%] h-[300px]">
          <img
            src={imageLink}
            alt="image"
            className="w-full h-full object-cover"
          />
          <MdDelete
            className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
            onClick={() => setImageLink("")}
          />
        </div>
      )}
    </>
  );
};

export default FileUpload;
            '
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
              text={"upload with button"}
              id={"upload_with_button"}
            />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  buttonUploadPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleButtonUploadPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  buttonUploadCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleButtonUploadCode}
              >
                Code
              </button>
            </div>
            {buttonUploadPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <input
                  type="file"
                  name="image"
                  id="secondImage"
                  className="hidden"
                  onChange={handleSecondImageChange}
                />
                {imageUploaded2 === "" ? (
                  <div className="w-[90%] flex items-center justify-center flex-col bg-white border border-dashed border-primary rounded-md py-6 ">
                    <IoMdCloudUpload className="text-[3rem] text-primary" />
                    <p className="mt-2 text-text">Drag and drop here</p>
                    <p className=" text-text">or</p>

                    <button
                      className="px-6 py-1.5 text-primary"
                      onClick={handleSecondImageClick}
                    >
                      Browse
                    </button>
                  </div>
                ) : (
                  <div className="relative w-[80%] h-[200px]">
                    <img
                      src={imageUploaded2}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                    <MdDelete
                      className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
                      onClick={() => setImageUploaded2("")}
                    />
                  </div>
                )}
              </div>
            )}

            {buttonUploadCode && (
              <Showcode
                code='
// icons
import { IoMdCloudUpload } from "react-icons/io";

const Inputs = () => {
  const [imageLink, setImageLink] = useState("");

  const handleUploadImageClick = () => {
    document.getElementById("image").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageLink(imageURL);
    }
  };

  return (
    <>
      <input
        type="file"
        name="image"
        id="secondImage"
        className="hidden"
        onChange={handleFileChange}
      />
      {imageLink === "" ? (
        <div className="w-[90%] flex items-center justify-center flex-col bg-white border border-dashed border-[#3B9DF8] rounded-md py-6 ">
          <IoMdCloudUpload className="text-[3rem] text-[#3B9DF8]" />
          <p className="mt-2 text-text">Drag and drop here</p>
          <p className=" text-text">or</p>

          <button
            className="px-6 py-1.5 text-primary"
            onClick={handleUploadImageClick}
          >
            Browse
          </button>
        </div>
      ) : (
        <div className="relative w-[80%] h-[200px]">
          <img
            src={imageLink}
            alt="image"
            className="w-full h-full object-cover"
          />
          <MdDelete
            className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
            onClick={() => setImageLink("")}
          />
        </div>
      )}
    </>
  );
};

export default Inputs;
                '
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader
              text={"upload with heading"}
              id={"upload_with_heading"}
            />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  headingUploadPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleHeadingUploadPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  headingUploadCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleHeadingUploadCode}
              >
                Code
              </button>
            </div>
            {headingUploadPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                {imageUploaded3 === "" ? (
                  <div className="text-center w-[90%]">
                    <input
                      type="file"
                      name="image"
                      id="thridImage"
                      className="hidden"
                      onChange={handleThirdImageChange}
                    />
                    <h1 className="text-[1.5rem] text-text font-[600]">
                      Upload your files
                    </h1>
                    <p className="text-[#777777] font-[400] text-[1rem]">
                      JPG,PNG,JPEG
                    </p>

                    <div
                      className="mt-5 w-[70%] mx-auto flex items-center justify-center flex-col bg-white border-[2px] border-dashed border-primary rounded-md py-10 cursor-pointer"
                      onClick={handleThirdImageClick}
                    >
                      <PiFilesThin className="text-[4rem] text-text" />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-[80%] h-[200px]">
                    <img
                      src={imageUploaded3}
                      alt="image"
                      className="w-full h-full object-cover"
                    />
                    <MdDelete
                      className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
                      onClick={() => setImageUploaded3("")}
                    />
                  </div>
                )}
              </div>
            )}

            {headingUploadCode && (
              <Showcode
                code='
// icons
import { PiFilesThin } from "react-icons/pi";

const Inputs = () => {
  const [imageLink, setImageLink] = useState("");

  const handleUploadImageClick = () => {
    document.getElementById("image").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageLink(imageURL);
    }
  };

  return (
    <>
      {imageLink === "" ? (
        <div className="text-center w-[90%]">
          <input
            type="file"
            name="image"
            id="thridImage"
            className="hidden"
            onChange={handleFileChange}
          />
          <h1 className="text-[1.5rem] text-[#424242] font-[600]">
            Upload your files
          </h1>
          <p className="text-[#777777] font-[400] text-[1rem]">JPG,PNG,JPEG</p>

          <div
            className="mt-5 w-[70%] mx-auto flex items-center justify-center flex-col bg-white border-[2px] border-dashed border-[#3B9DF8] rounded-md py-10 cursor-pointer"
            onClick={handleUploadImageClick}
          >
            <PiFilesThin className="text-[4rem] text-[#424242]" />
          </div>
        </div>
      ) : (
        <div className="relative w-[80%] h-[200px]">
          <img
            src={imageLink}
            alt="image"
            className="w-full h-full object-cover"
          />
          <MdDelete
            className="text-[2rem] text-white bg-[#000000ad] p-1 absolute top-0 right-0 cursor-pointer"
            onClick={() => setImageLink("")}
          />
        </div>
      )}
    </>
  );
};

export default Inputs;
                '
              />
            )}
          </div>

          <div className="mt-8">
            <ContentHeader text={"profile upload"} id={"profile_upload"} />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            This is the card skeleton. The skeleton provided here basically
            shows the information of an account.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="">
              <button
                className={`${
                  profileUploadPreview && "bg-border"
                } px-6 py-2 border-r border-b roudned border-border`}
                onClick={handleProfileUploadPreview}
              >
                Preview
              </button>
              <button
                className={`${
                  profileUploadCode && "bg-border"
                } px-6 py-2 border-r border-b rounded border-border`}
                onClick={handleProfileUploadCode}
              >
                Code
              </button>
            </div>
            {profileUploadPreview && (
              <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                <div className="text-center">
                  <input
                    type="file"
                    name="image"
                    id="fourthImage"
                    className="hidden"
                    onChange={handleFourthImageChange}
                  />
                  <div className="w-[150px] h-[150px] rounded-full border border-border flex items-center justify-center">
                    {imageUploaded4 === "" ? (
                      <CgProfile className="text-[10rem] text-border" />
                    ) : (
                      <img
                        src={imageUploaded4}
                        alt="image"
                        className="w-full h-full object-cover rounded-full"
                      />
                    )}
                  </div>

                  <button
                    className="px-4 py-2 bg-primary text-white rounded-md mt-5"
                    onClick={handleFourthImageClick}
                  >
                    Upload profile
                  </button>
                </div>
              </div>
            )}

            {profileUploadCode && (
              <Showcode
                code='
// icons
import { CgProfile } from "react-icons/cg";

const Inputs = () => {
  const [imageLink, setImageLink] = useState("");

  const handleUploadImageClick = () => {
    document.getElementById("image").click();
  };

  const handleFileChange = (e) => {
    e.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageLink(imageURL);
    }
  };

  return (
    <div className=" text-center">
      <input
        type="file"
        name="image"
        id="fourthImage"
        className="hidden"
        onChange={handleFileChange}
      />
      <div className="w-[150px] h-[150px] rounded-full border border-[#e5eaf2] flex items-center justify-center">
        {imageLink === "" ? (
          <CgProfile className="text-[10rem] text-[#e5eaf2]" />
        ) : (
          <img
            src={imageLink}
            alt="image"
            className="w-full h-full object-cover rounded-full"
          />
        )}
      </div>

      <button
        className="px-4 py-2 bg-[#3B9DF8] text-white rounded-md mt-5"
        onClick={handleUploadImageClick}
      >
        Upload profile
      </button>
    </div>
  );
};

export default Inputs;
                '
              />
            )}
          </div>

          <OverviewFooter />
        </div>

        <div className="flex flex-col gap-4 sticky top-20 right-0 w-[20%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
            href="#upload_with_icon"
            className={`${
              contentActiveTab === 1 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(1)}
          >
            Upload With Icon
          </a>
          <a
            href="#upload_with_button"
            className={`${
              contentActiveTab === 2 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(2)}
          >
            Upload With Button
          </a>
          <a
            href="#upload_with_heading"
            className={`${
              contentActiveTab === 3 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(3)}
          >
            Upload With Heading
          </a>
          <a
            href="#profile_upload"
            className={`${
              contentActiveTab === 4 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(4)}
          >
            Profile Upload
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Inputs - File Input</title>
      </Helmet>
    </>
  );
};

export default FileInput;
