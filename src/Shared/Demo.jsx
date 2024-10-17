import React, {useState} from "react";

// react icons
import {CiImageOn} from "react-icons/ci";
import {RxCross2} from "react-icons/rx";
import {IoMdDoneAll} from "react-icons/io";

const MultipleImageUpload = () => {

    const [images, setImages] = useState([]);
    const [dragging, setDragging] = useState(false);

    // Handle files when dropped or selected
    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        uploadFiles(files);
        e.target.value = ""
    };

    // Function to simulate file upload and track progress
    const uploadFiles = (files) => {
        const fileList = Array.from(files).map((file) => ({
            file,
            size: formatFileSize(file.size),
            progress: 0,
            uploaded: false,
            cancelled: false,
        }));
        setImages((prevImages) => [...prevImages, ...fileList]);

        fileList.forEach((fileObj, index) => {
            simulateUpload(fileObj, index + images.length);
        });
    };

    // formating the sizing (e.g MB,KB)
    const formatFileSize = (sizeInBytes) => {
        if (sizeInBytes < 1024 * 1024) {
            // Show size in KB for files less than 1 MB
            return (sizeInBytes / 1024).toFixed(2) + " KB";
        } else {
            // Show size in MB for files 1 MB or larger
            return (sizeInBytes / (1024 * 1024)).toFixed(2) + " MB";
        }
    };

    // Simulate upload progress
    const simulateUpload = (fileObj, index) => {
        const interval = setInterval(() => {
            setImages((prevImages) => {
                const newImages = [...prevImages];
                if (!newImages[index].cancelled) {
                    const progress = newImages[index].progress + 10;
                    if (progress >= 100) {
                        clearInterval(interval);
                        newImages[index].progress = 100;
                        newImages[index].uploaded = true;
                    } else {
                        newImages[index].progress = progress;
                    }
                } else {
                    clearInterval(interval);
                }
                return newImages;
            });
        }, 300); // Simulate upload progress every 300ms
    };

    // Handle drag events
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = () => {
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    // Cancel the upload of a specific file
    const cancelUpload = (index) => {
        setImages((prevImages) => {
            const newImages = [...prevImages];
            newImages[index].cancelled = true;
            return newImages;
        });
    };


    return (
        <div className="p-8 mb-4 flex flex-col items-center gap-5 justify-center">
            <div className="flex flex-col justify-center items-center w-full">

                {/* Drop Zone */}
                <div
                    className={`border-2 p-6 rounded-lg w-full h-64 flex flex-col justify-center items-center bg-white  ${dragging ? "border-dashed border-blue-400 !bg-blue-100" : "border-gray-200 border-dashed"} transition-colors duration-300 ease-in-out`}
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                >
                    <img src="https://i.ibb.co.com/XY2YgLh/Searching-for-files-in-a-folder.png"
                         className="w-[100px]"/>
                    <label
                        htmlFor="file-multiple-upload"
                        className="font-[500] text-center text-gray-700 text-[1rem]"
                    >
                        <span className="underline cursor-pointer">Click to upload </span>
                        Drag & Drop your images here
                    </label>
                    <p className="text-[0.8rem] text-gray-500 mt-2">Maximum file size 50 MB.</p>
                    <input
                        id="file-multiple-upload"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleDrop}
                        multiple
                    />
                </div>

                {/* Images Uploading and uploaded List */}
                <div
                    className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {images.map((imageObj, index) => (
                        <div key={index}
                             className="relative p-3 rounded-lg bg-gray-50 border border-gray-200">
                            <div className="flex flex-col">
                                <div className="flex items-start justify-between w-full mb-1">
                                    <div className="flex items-start gap-[10px]">
                                        <CiImageOn
                                            className="bg-white rounded-md p-1 border border-gray-200 text-[1.7rem] text-gray-500"/>
                                        <div>
                                            <p className="text-gray-700 font-[500] text-[0.9rem] leading-[20px] 640px:leading-[9px] 640px:mt-0.5">{imageObj.file.name}</p>
                                            <span
                                                className="text-[0.6rem] text-gray-400">{imageObj.size}</span>
                                        </div>
                                    </div>
                                    {
                                        (!imageObj.cancelled && !imageObj.uploaded) && (
                                            <button
                                                onClick={() => cancelUpload(index)}
                                                className="text-gray-500 hover:text-red-500"
                                            >
                                                <RxCross2/>
                                            </button>
                                        )
                                    }

                                    {
                                        imageObj.uploaded && (
                                            <IoMdDoneAll className="text-green-600 text-[1.1rem]"/>
                                        )
                                    }
                                </div>

                                {/* if upload canceled show cancel text */}
                                {imageObj.cancelled ? (
                                    <p className="text-[0.8rem] text-red-600">Upload
                                        Cancelled</p>
                                ) : (
                                    <>
                                        <div
                                            className="flex items-center justify-between gap-[8px]">
                                            <div
                                                className="w-full bg-white h-1.5 rounded-lg overflow-hidden">
                                                <div
                                                    className="bg-blue-500 h-full transition-all duration-300"
                                                    style={{width: `${imageObj.progress}%`}}
                                                ></div>
                                            </div>
                                            <span
                                                className="text-[0.7rem] mb-0.5 text-gray-500">{imageObj.progress}%</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* reset button for again upload files*/}
            {
                images?.length ? (
                    <button onClick={() => setImages([])}
                            className="py-2 px-6 bg-red-500 rounded-md text-white">Reset</button>
                ) : ""
            }
        </div>
    );
};

export default MultipleImageUpload;