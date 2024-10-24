import React, { useState, useCallback } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import Showcode from "../../../../../Shared/ShowCode";

// icons
import {IoCloudUploadOutline} from "react-icons/io5";
import {CiImageOn} from "react-icons/ci";
import {RxCross2} from "react-icons/rx";
import {IoMdDoneAll} from "react-icons/io";
import {RiDraggable} from "react-icons/ri";
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";
import PremiumTooltip from "../../../../../Shared/PremiumTooltip.jsx";

const DragAndDrop = () => {
    // basicApp
    const [contentActiveTab, setContentActiveTab] = useState(0);
    const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);

    const toggleCardView = useToggleCardView()

    // actions
    const [dragDrop1Preview, setDragDrop1Preview] = useState(true);
    const [dragDrop1Code, setDragDrop1Code] = useState(false);

    const [dragDrop2Preview, setDragDrop2Preview] = useState(true);
    const [dragDrop2Code, setDragDrop2Code] = useState(false);

    const [dragDrop3Preview, setDragDrop3Preview] = useState(true);
    const [dragDrop3Code, setDragDrop3Code] = useState(false);

    const [dragDrop4Preview, setDragDrop4Preview] = useState(true);
    const [dragDrop4Code, setDragDrop4Code] = useState(false);

    const [dragDrop5Preview, setDragDrop5Preview] = useState(true);
    const [dragDrop5Code, setDragDrop5Code] = useState(false);

    const initialGrid = [
        {
            id: 1,
            image: 'https://i.ibb.co.com/XxvZ2Kq/Logo.png'
        },
        {
            id: 2,
            image: 'https://i.ibb.co.com/HgvwbMy/Logo-1.png'
        },
        {
            id: 3,
            image: 'https://i.ibb.co.com/XS8kxJF/Logo-2.png'
        },
        {
            id: 4,
            image: 'https://i.ibb.co.com/2gLx39W/Logo-3.png'
        },
        {
            id: 5,
            image: 'https://i.ibb.co.com/DkDCXrk/Logo-4.png'
        },
        {
            id: 6,
            image: 'https://i.ibb.co.com/W0qf3ZP/Amazon.png'
        },
        {
            id: 7,
            image: 'https://i.ibb.co.com/fp0pFV5/Logo-5.png'
        },
        {
            id: 8,
            image: 'https://i.ibb.co.com/S3Z98YZ/Logo-6.png'
        },
        {
            id: 9,
            image: 'https://i.ibb.co.com/0FwfDsz/Union.png'
        },
    ];

    const [gridItems, setGridItems] = useState(initialGrid);
    const [draggedItem, setDraggedItem] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    // Handle drag start event
    const handleDragStart = (item) => {
        setDraggedItem(item);
    };

    // Handle drag over event and show hover indicator
    const handleDragOver = (e, item) => {
        e.preventDefault();
        setHoveredItem(item);
    };

    // Handle drop event and swap items
    const handleDrop = (e, dropItem) => {
        e.preventDefault();

        // Swap dragged item with drop target
        const newGrid = gridItems.map((item) => {
            if (item.id === dropItem.id) {
                return draggedItem;
            }
            if (item.id === draggedItem.id) {
                return dropItem;
            }
            return item;
        });

        setGridItems(newGrid);
        setDraggedItem(null);
        setHoveredItem(null);
    };

    // drag and drop image
    const [selectedImage, setSelectedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isDragging, setIsDragging] = useState(false);

    // Handle file selection when dropped or clicked
    const handleFileDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        handleFile(file);
        setIsDragging(false)
    };

    // Function to validate and display the image
    const handleFile = (file) => {
        if (!file) return;

        if (file.type.startsWith('image/')) {
            setErrorMessage('');
            const reader = new FileReader();
            reader.onload = () => setSelectedImage(reader.result);
            reader.readAsDataURL(file);
        } else {
            setErrorMessage('Please upload an image file.');
            setSelectedImage(null);
        }
    };

    // Handle drag over event to allow the drop
    const handleImageDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = () => {
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    // multiple image upload with drag and drop
    const [images, setImages] = useState([]);
    const [dragging, setDragging] = useState(false);

    // Handle files when dropped or selected
    const handleMultipleFileDrop = (e) => {
        e.preventDefault();
        setDragging(false);
        const files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        uploadFiles(files);
        e.target.value = ''
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

    const formatFileSize = (sizeInBytes) => {
        if (sizeInBytes < 1024 * 1024) {
            // Show size in KB for files less than 1 MB
            return (sizeInBytes / 1024).toFixed(2) + ' KB';
        } else {
            // Show size in MB for files 1 MB or larger
            return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
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
    const handleMultipleDragOver = (e) => {
        e.preventDefault();
    };

    const handleMultipleDragEnter = () => {
        setDragging(true);
    };

    const handleMultipleDragLeave = () => {
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

    // profile card drag and drop
    const listsData = [
        {
            id: 1,
            name: 'John Doe',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
            title: 'Software Engineer'
        },
        {
            id: 2,
            name: 'Jane Smith',
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
            title: 'Product Manager'
        },
        {
            id: 3,
            name: 'Michael Johnson',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
            title: 'UX Designer'
        },
        {
            id: 4,
            name: 'Emily Davis',
            avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
            title: 'Marketing Specialist'
        },
        {
            id: 5,
            name: 'David Wilson',
            avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
            title: 'Data Analyst'
        },
        {
            id: 6,
            name: 'Sophia Brown',
            avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
            title: 'Project Coordinator'
        },
    ];


    const [listItems, setListItems] = useState(listsData);
    const [listDraggedItem, setListDraggedItem] = useState(null);
    const [listHoveredItem, setListHoveredItem] = useState(null);

    // Handle drag start event from the icon
    const handleListDragStart = (item) => {
        setListDraggedItem(item);
    };

    // Handle drag over event and show hover indicator
    const handleListDragOver = (e, item) => {
        e.preventDefault();
        setListHoveredItem(item);
    };

    // Handle drop event and swap items
    const handleListDrop = (e, dropItem) => {
        e.preventDefault();

        // Swap dragged item with drop target
        const newGrid = listItems.map((item) => {
            if (item.id === dropItem.id) {
                return listDraggedItem;
            }
            if (item.id === listDraggedItem.id) {
                return dropItem;
            }
            return item;
        });

        setListItems(newGrid);
        setListDraggedItem(null);
        setListHoveredItem(null);
    };

    const [todos, setTodos] = useState([
        { id: 1, text: 'Fix website bug', completed: false },
        { id: 2, text: 'Prepare for meeting', completed: false },
        { id: 3, text: 'Send email updates', completed: false },
    ]);

    const [completedTodos, setCompletedTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');

    const onTodoDragStart = (e, id, isCompleted) => {
        e.dataTransfer.setData('text/plain', JSON.stringify({ id, isCompleted }));
    };

    const onTodoDragOver = (e) => {
        e.preventDefault();
    };

    const onTodoDrop = (e, targetCompleted) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        const { id, isCompleted } = data;

        if (isCompleted !== targetCompleted) {
            if (isCompleted) {
                const [movedTodo] = completedTodos.filter(todo => todo.id === id);
                setCompletedTodos(completedTodos.filter(todo => todo.id !== id));
                setTodos(prevTodos => [...prevTodos, { ...movedTodo, completed: false }]);
            } else {
                const [movedTodo] = todos.filter(todo => todo.id === id);
                setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
                setCompletedTodos(prevCompleted => [...prevCompleted, { ...movedTodo, completed: true }]);
            }
        }
    };

    const handleAddTodo = useCallback((e) => {
        e.preventDefault();
        if (newTodoText.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: newTodoText.trim(),
                completed: false
            };
            console.log('Adding new todo:', newTodo);
            setTodos(prevTodos => {
                const updatedTodos = [...prevTodos, newTodo];
                console.log('Updated todos:', updatedTodos);
                return updatedTodos;
            });
            setNewTodoText('');
        }
    }, [newTodoText]);

    return (
        <>
            <aside className="flex items-start gap-6 justify-between w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div className="w-full 425px:w-[80%]">
                    <ContentHeader
                        id="drag-&-drop-with-indicator"
                        text={"drag & drop with indicator"}
                    />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Drag & drop with indicator shows where an item will be placed, enhancing user clarity and interaction.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dragDrop1Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    dragDrop1Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setDragDrop1Preview, setDragDrop1Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    dragDrop1Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setDragDrop1Preview, setDragDrop1Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {dragDrop1Preview && (
                            <div className="p-8 mb-4 flex flex-col items-center gap-5 justify-center">
                                <div className="grid grid-cols-1 640px:grid-cols-2 1024px:grid-cols-3 gap-4">
                                    {gridItems.map((item) => (
                                        <div
                                            key={item.id}
                                            draggable
                                            onDragStart={() => handleDragStart(item)}
                                            onDragOver={(e) => handleDragOver(e, item)}
                                            onDrop={(e) => handleDrop(e, item)}
                                            onDragLeave={() => setHoveredItem(null)}
                                            className={`w-full px-8 py-4 border-2 rounded text-center cursor-move ${
                                                item.id === draggedItem?.id && 'bg-blue-100 opacity-30'
                                            } ${
                                                item.id === hoveredItem?.id ? 'border-dashed border-2 border-blue-500' : 'border-gray-100'
                                            }`}
                                        >
                                            <img alt='image' src={item.image}
                                                 className='w-[100px] 640px:w-[140px] h-[50px] object-contain'/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {dragDrop1Code && (
                            <Showcode
                                code='
import React, {useState} from "react";

const DragAndDrop = () => {

    const cardData = [
        {
            id: 1,
            image: "https://i.ibb.co.com/XxvZ2Kq/Logo.png"
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/HgvwbMy/Logo-1.png"
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/XS8kxJF/Logo-2.png"
        },
        {
            id: 4,
            image: "https://i.ibb.co.com/2gLx39W/Logo-3.png"
        },
        {
            id: 5,
            image: "https://i.ibb.co.com/DkDCXrk/Logo-4.png"
        },
        {
            id: 6,
            image: "https://i.ibb.co.com/W0qf3ZP/Amazon.png"
        },
        {
            id: 7,
            image: "https://i.ibb.co.com/fp0pFV5/Logo-5.png"
        },
        {
            id: 8,
            image: "https://i.ibb.co.com/S3Z98YZ/Logo-6.png"
        },
        {
            id: 9,
            image: "https://i.ibb.co.com/0FwfDsz/Union.png"
        },
    ];

    const [gridItems, setGridItems] = useState(cardData);
    const [draggedItem, setDraggedItem] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    // Handle drag start event
    const handleDragStart = (item) => {
        setDraggedItem(item);
    };

    // Handle drag over event and show hover indicator
    const handleDragOver = (e, item) => {
        e.preventDefault();
        setHoveredItem(item);
    };

    // Handle drop event and swap items
    const handleDrop = (e, dropItem) => {
        e.preventDefault();

        // Swap dragged item with drop target
        const newGrid = gridItems.map((item) => {
            if (item.id === dropItem.id) {
                return draggedItem;
            }
            if (item.id === draggedItem.id) {
                return dropItem;
            }
            return item;
        });

        setGridItems(newGrid);
        setDraggedItem(null);
        setHoveredItem(null);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gridItems.map((item) => (
                <div
                    key={item.id}
                    draggable
                    onDragStart={() => handleDragStart(item)}
                    onDragOver={(e) => handleDragOver(e, item)}
                    onDrop={(e) => handleDrop(e, item)}
                    onDragLeave={() => setHoveredItem(null)}
                    className={`w-full px-8 py-4 border-2 rounded text-center cursor-move ${
                        item.id === draggedItem?.id && "bg-blue-100 opacity-30"
                    } ${
                        item.id === hoveredItem?.id ? "border-dashed border-2 border-blue-500" : "border-gray-100"
                    }`}
                >
                    <img alt="image" src={item.image}
                         className="w-[100px] sm:w-[140px] h-[50px] object-contain"/>
                </div>
            ))}
        </div>
    );
};

export default DragAndDrop;
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            id="upload-multiple-files-with-drag-&-drop"
                            text={"upload multiple files with drag & drop"}
                            isPremium={true}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Drag & drop for multiple file uploads lets users easily upload several files at once.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dragDrop2Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    dragDrop2Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            >
                                Preview
                            </button>
                            <button
                                onClick={()=> setIsPremiumModalOpen(!isPremiumModalOpen)}
                                className={`${
                                    dragDrop2Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            >
                                Code

                                {/* warning modal */}
                                <PremiumTooltip setIsPremiumModalOpen={setIsPremiumModalOpen} isPremiumModalOpen={isPremiumModalOpen} url='https://buymeacoffee.com/zenuilibrary/e/319007'/>
                            </button>
                        </div>
                        {dragDrop2Preview && (
                            <div className="p-8 mb-4 flex flex-col items-center gap-5 justify-center">
                                <div className="flex flex-col justify-center items-center w-full">

                                    {/* Drop Zone */}
                                    <div
                                        className={`border-2 p-6 rounded-lg w-full h-64 flex flex-col justify-center items-center bg-white  ${dragging ? 'border-dashed border-blue-400 !bg-blue-100' : 'border-gray-200 border-dashed'} transition-colors duration-300 ease-in-out`}
                                        onDrop={handleMultipleFileDrop}
                                        onDragOver={handleMultipleDragOver}
                                        onDragEnter={handleMultipleDragEnter}
                                        onDragLeave={handleMultipleDragLeave}
                                    >
                                        <img src='https://i.ibb.co.com/XY2YgLh/Searching-for-files-in-a-folder.png'
                                             className='w-[100px]'/>
                                        <label
                                            htmlFor="file-multiple-upload"
                                            className="font-[500] text-center text-gray-700 text-[1rem]"
                                        >
                                            <span className='underline cursor-pointer'>Click to upload </span>
                                            Drag & Drop your images here
                                        </label>
                                        <p className='text-[0.8rem] text-gray-500 mt-2'>Maximum file size 50 MB.</p>
                                        <input
                                            id="file-multiple-upload"
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={handleMultipleFileDrop}
                                            multiple
                                        />
                                    </div>

                                    {/* Images Uploading List */}
                                    <div
                                        className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                                        {images.map((imageObj, index) => (
                                            <div key={index}
                                                 className="relative p-3 rounded-lg bg-gray-50 border border-gray-200">
                                                <div className="flex flex-col">
                                                    <div className='flex items-start justify-between w-full mb-1'>
                                                        <div className='flex items-start gap-[10px]'>
                                                            <CiImageOn
                                                                className='bg-white rounded-md p-1 border border-gray-200 text-[1.7rem] text-gray-500'/>
                                                            <div>
                                                                <p className="text-gray-700 font-[500] text-[0.9rem] leading-[20px] 640px:leading-[9px] 640px:mt-0.5">{imageObj.file.name}</p>
                                                                <span
                                                                    className='text-[0.6rem] text-gray-400'>{imageObj.size}</span>
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
                                                                <IoMdDoneAll className='text-green-600 text-[1.1rem]'/>
                                                            )
                                                        }
                                                    </div>
                                                    {imageObj.cancelled ? (
                                                        <p className='text-[0.8rem] text-red-600'>Upload
                                                            Cancelled</p>
                                                    ) : (
                                                        <>
                                                            <div
                                                                className='flex items-center justify-between gap-[8px]'>
                                                                <div
                                                                    className="w-full bg-white h-1.5 rounded-lg overflow-hidden">
                                                                    <div
                                                                        className="bg-blue-500 h-full transition-all duration-300"
                                                                        style={{width: `${imageObj.progress}%`}}
                                                                    ></div>
                                                                </div>
                                                                <span
                                                                    className='text-[0.7rem] mb-0.5 text-gray-500'>{imageObj.progress}%</span>
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {
                                    images?.length ? (
                                        <button onClick={() => setImages([])}
                                                className='py-2 px-6 bg-red-500 rounded-md text-white'>Reset</button>
                                    ) : ''
                                }
                            </div>
                        )}

                        {dragDrop2Code && (
                            <Showcode
                                code='
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            id="upload-image-with-drag-&-drop"
                            text={"upload image with drag & drop"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Drag & drop image upload lets users quickly upload images by dragging them into a designated area.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dragDrop3Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    dragDrop3Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setDragDrop3Preview, setDragDrop3Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    dragDrop3Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setDragDrop3Preview, setDragDrop3Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {dragDrop3Preview && (
                            <div className="p-8 mb-4 flex flex-col items-center gap-5 justify-center">
                                <div className="flex justify-center items-center w-full flex-col">
                                    <div
                                        className={`${isDragging ? 'border-blue-300 !bg-blue-50' : 'border-gray-300'} ${selectedImage ? '' : 'border-dashed border-2 p-6'} rounded-lg w-full h-64 flex flex-col justify-center items-center bg-white`}
                                        onDragEnter={handleDragEnter}
                                        onDragLeave={handleDragLeave}
                                        onDrop={handleFileDrop}
                                        onDragOver={handleImageDragOver}
                                    >
                                        {selectedImage ? (
                                            <img src={selectedImage} alt="Preview"
                                                 className="w-full h-full object-cover rounded-lg"/>
                                        ) : (
                                            <>
                                                {
                                                    isDragging ? (
                                                        <h5 className='text-[2rem] text-blue-700 font-[600]'>Drop
                                                            Here</h5>
                                                    ) : (
                                                        <>
                                                            <IoCloudUploadOutline
                                                                className='text-[3rem] mb-4 text-gray-400'/>
                                                            <p className="text-gray-500 text-center text-[1.1rem] font-[500] mb-2">Drag
                                                                & Drop your image
                                                                here</p>
                                                            <p className="text-gray-400">or</p>
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="cursor-pointer py-2 px-4 bg-gray-200 rounded-md mt-2"
                                                            >
                                                                Browse File
                                                            </label>
                                                            <input
                                                                id="file-upload"
                                                                type="file"
                                                                accept="image/*"
                                                                className="hidden"
                                                                onChange={handleFileDrop}
                                                            />
                                                        </>
                                                    )
                                                }
                                            </>
                                        )}
                                    </div>

                                    {errorMessage && (
                                        <p className="text-red-500 mt-4">{errorMessage}</p>
                                    )}

                                    {selectedImage && (
                                        <div className="mt-4">
                                            <button
                                                onClick={() => setSelectedImage(null)}
                                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                                            >
                                                Remove Image
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {dragDrop3Code && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {IoCloudUploadOutline} from "react-icons/io5";

const DragAndDrop = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [isDragging, setIsDragging] = useState(false);

    // Handle file selection when dropped or clicked
    const handleFileDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        handleFile(file);
        setIsDragging(false)
    };

    // Function to validate and display the image
    const handleFile = (file) => {
        if (!file) return;

        if (file.type.startsWith("image/")) {
            setErrorMessage("");
            const reader = new FileReader();
            reader.onload = () => setSelectedImage(reader.result);
            reader.readAsDataURL(file);
        } else {
            setErrorMessage("Please upload an image file.");
            setSelectedImage(null);
        }
    };

    // Handle drag over event to allow the drop
    const handleImageDragOver = (e) => {
        e.preventDefault();
    };

    const handleDragEnter = () => {
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    return (
        <div className="flex justify-center items-center w-full flex-col">
            <div
                className={`${isDragging ? "border-blue-300 !bg-blue-50" : "border-gray-300"} ${selectedImage ? "" : "border-dashed border-2 p-6"} rounded-lg w-full h-64 flex flex-col justify-center items-center bg-white`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDrop={handleFileDrop}
                onDragOver={handleImageDragOver}
            >
                {selectedImage ? (
                    <img src={selectedImage} alt="Preview"
                         className="w-full h-full object-cover rounded-lg"/>
                ) : (
                    <>
                        {
                            isDragging ? (
                                <h5 className="text-[2rem] text-blue-700 font-[600]">Drop
                                    Here</h5>
                            ) : (
                                <>
                                    <IoCloudUploadOutline
                                        className="text-[3rem] mb-4 text-gray-400"/>
                                    <p className="text-gray-500 text-center text-[1.1rem] font-[500] mb-2">Drag
                                        & Drop your image
                                        here</p>
                                    <p className="text-gray-400">or</p>
                                    <label
                                        htmlFor="file-upload"
                                        className="cursor-pointer py-2 px-4 bg-gray-200 rounded-md mt-2"
                                    >
                                        Browse File
                                    </label>
                                    <input
                                        id="file-upload"
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={handleFileDrop}
                                    />
                                </>
                            )
                        }
                    </>
                )}
            </div>

            {errorMessage && (
                <p className="text-red-500 mt-4">{errorMessage}</p>
            )}

            {selectedImage && (
                <div className="mt-4">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                        Remove Image
                    </button>
                </div>
            )}
        </div>
    );
};

export default DragAndDrop;
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            id="list-drag-&-drop"
                            text={"list drag & drop"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        List drag & drop allows users to rearrange items by dragging and dropping them into a new order.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dragDrop4Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    dragDrop4Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setDragDrop4Preview, setDragDrop4Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    dragDrop4Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setDragDrop4Preview, setDragDrop4Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {dragDrop4Preview && (
                            <div className="p-8 mb-4 flex flex-col items-center gap-5 justify-center">
                                <div className="flex flex-col w-full gap-4">
                                    {listItems.map((item) => (
                                        <div
                                            key={item.id}
                                            draggable
                                            onDragStart={() => handleListDragStart(item)}
                                            onDragOver={(e) => handleListDragOver(e, item)}
                                            onDrop={(e) => handleListDrop(e, item)}
                                            onDragLeave={() => setListHoveredItem(null)}
                                            className={`grid-item p-4 border-2 rounded text-center flex items-center justify-between ${
                                                item.id === listDraggedItem?.id && 'bg-blue-100 opacity-30'
                                            } ${
                                                item.id === listHoveredItem?.id ? 'border-dashed border-2 border-blue-500' : 'border-gray-100'
                                            }`}
                                        >
                                            <div className='flex items-center gap-[8px] 640px:gap-[15px]'>
                                                <img alt='image' src={item.avatar}
                                                     className='w-[40px] h-[40px] 640px:w-[60px] 640px:h-[60px] rounded-md object-contain'/>

                                                <div className='text-left flex flex-col 640px:gap-[5px]'>
                                                    <h4 className='text-[1rem] 640px:text-[1.3rem] text-gray-700 font-[600]'>{item.name}</h4>
                                                    <p className='text-[0.7rem] 640px:text-[0.9rem] text-gray-500'>{item.title}</p>
                                                </div>
                                            </div>

                                            <RiDraggable
                                                className='text-[1.5rem] 640px:text-[1.8rem] text-gray-600 cursor-move'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {dragDrop4Code && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {RiDraggable} from "react-icons/ri";

const DragAndDrop = () => {

    const data = [
        {
            id: 1,
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            title: "Software Engineer"
        },
        {
            id: 2,
            name: "Jane Smith",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            title: "Product Manager"
        },
        {
            id: 3,
            name: "Michael Johnson",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            title: "UX Designer"
        },
        {
            id: 4,
            name: "Emily Davis",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg",
            title: "Marketing Specialist"
        },
        {
            id: 5,
            name: "David Wilson",
            avatar: "https://randomuser.me/api/portraits/men/5.jpg",
            title: "Data Analyst"
        },
        {
            id: 6,
            name: "Sophia Brown",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg",
            title: "Project Coordinator"
        },
    ];


    const [items, setItems] = useState(data);
    const [draggedItem, setDraggedItem] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    // Handle drag start event from the icon
    const handleDragStart = (item) => {
        setDraggedItem(item);
    };

    // Handle drag over event and show hover indicator
    const handleDragOver = (e, item) => {
        e.preventDefault();
        setHoveredItem(item);
    };

    // Handle drop event and swap items
    const handleDrop = (e, dropItem) => {
        e.preventDefault();

        // Swap dragged item with drop target
        const newGrid = items.map((item) => {
            if (item.id === dropItem.id) {
                return draggedItem;
            }
            if (item.id === draggedItem.id) {
                return dropItem;
            }
            return item;
        });

        setItems(newGrid);
        setDraggedItem(null);
        setHoveredItem(null);
    };

    return (
            <div className="flex flex-col w-full gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        draggable
                        onDragStart={() => handleDragStart(item)}
                        onDragOver={(e) => handleDragOver(e, item)}
                        onDrop={(e) => handleDrop(e, item)}
                        onDragLeave={() => setHoveredItem(null)}
                        className={`grid-item p-4 border-2 rounded text-center flex items-center justify-between ${
                            item.id === draggedItem?.id && "bg-blue-100 opacity-30"
                        } ${
                            item.id === hoveredItem?.id ? "border-dashed border-2 border-blue-500" : "border-gray-100"
                        }`}
                    >
                        <div className="flex items-center gap-[8px] sm:gap-[15px]">
                            <img alt="image" src={item.avatar}
                                 className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] rounded-md object-contain"/>

                            <div className="text-left flex flex-col sm:gap-[5px]">
                                <h4 className="text-[1rem] sm:text-[1.3rem] text-gray-700 font-[600]">{item.name}</h4>
                                <p className="text-[0.7rem] sm:text-[0.9rem] text-gray-500">{item.title}</p>
                            </div>
                        </div>

                        <RiDraggable
                            className="text-[1.5rem] sm:text-[1.8rem] text-gray-600 cursor-move"
                        />
                    </div>
                ))}
            </div>
    );
};

export default DragAndDrop;
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            id="todo-app-with-drag-&-drop"
                            text={"todo app with drag & drop"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A to-do app with drag & drop lets users easily organize tasks by dragging them into new positions.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dragDrop5Preview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[106px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    dragDrop5Preview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setDragDrop5Preview, setDragDrop5Code, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    dragDrop5Code && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setDragDrop5Preview, setDragDrop5Code, false)}
                            >
                                Code
                            </button>
                        </div>
                        {dragDrop5Preview && (
                            <div className="p-8 mb-4 flex 1024px:flex-row flex-col gap-5 justify-center">
                                    <div
                                        className='w-full 1024px:w-[50%] bg-gray-50 p-3 rounded-md'
                                        onDragOver={onTodoDragOver}
                                        onDrop={(e) => onTodoDrop(e, false)}
                                    >
                                        <h4 className='text-xl font-semibold text-gray-700 text-center mb-3'>Todo</h4>

                                        <form onSubmit={handleAddTodo} className="mb-4 w-full">
                                            <div className="flex">
                                                <input
                                                    type="text"
                                                    value={newTodoText}
                                                    onChange={(e) => setNewTodoText(e.target.value)}
                                                    placeholder="Add todo"
                                                    className="px-4 py-2 w-full outline-none border-l border-t border-b rounded-l-md focus:border-blue-300 border-gray-300 text-[0.9rem]"
                                                />
                                                <button
                                                    type="submit"
                                                    className="px-4 py-1 text-[0.9rem] bg-blue-500 text-white rounded-r-md"
                                                >
                                                    Add
                                                </button>
                                            </div>
                                        </form>

                                        <ul className='space-y-2'>
                                            {todos.map((todo) => (
                                                <li
                                                    key={todo.id}
                                                    draggable
                                                    onDragStart={(e) => onTodoDragStart(e, todo.id, false)}
                                                    className='bg-white p-2 rounded-md cursor-move'
                                                >
                                                    {todo.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div
                                        className='w-full 1024px:w-[50%] min-h-[120px] bg-gray-50 p-3 rounded-md'
                                        onDragOver={onTodoDragOver}
                                        onDrop={(e) => onTodoDrop(e, true)}
                                    >
                                        <h4 className='text-xl font-semibold text-gray-700 text-center mb-3'>Completed</h4>
                                        <ul className='space-y-2'>
                                            {completedTodos.map((todo) => (
                                                <li
                                                    key={todo.id}
                                                    draggable
                                                    onDragStart={(e) => onTodoDragStart(e, todo.id, true)}
                                                    className='bg-white p-2 rounded-md cursor-move'
                                                >
                                                    {todo.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                            </div>
                        )}

                        {dragDrop5Code && (
                            <Showcode
                                code='
import React, {useCallback, useState} from "react";

const DragAndDrop = () => {

    // all todo data
    const [todos, setTodos] = useState([
        { id: 1, text: "Fix website bug", completed: false },
        { id: 2, text: "Prepare for meeting", completed: false },
        { id: 3, text: "Send email updates", completed: false },
    ]);

    const [completedTodos, setCompletedTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState("");

    // handle todo drag start
    const onTodoDragStart = (e, id, isCompleted) => {
        e.dataTransfer.setData("text/plain", JSON.stringify({ id, isCompleted }));
    };

    // handle todo drag over
    const onTodoDragOver = (e) => {
        e.preventDefault();
    };

    // handle todo drop
    const onTodoDrop = (e, targetCompleted) => {
        e.preventDefault();
        const data = JSON.parse(e.dataTransfer.getData("text/plain"));
        const { id, isCompleted } = data;

        if (isCompleted !== targetCompleted) {
            if (isCompleted) {
                const [movedTodo] = completedTodos.filter(todo => todo.id === id);
                setCompletedTodos(completedTodos.filter(todo => todo.id !== id));
                setTodos(prevTodos => [...prevTodos, { ...movedTodo, completed: false }]);
            } else {
                const [movedTodo] = todos.filter(todo => todo.id === id);
                setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
                setCompletedTodos(prevCompleted => [...prevCompleted, { ...movedTodo, completed: true }]);
            }
        }
    };

    // handle add new todo
    const handleAddTodo = useCallback((e) => {
        e.preventDefault();
        if (newTodoText.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                text: newTodoText.trim(),
                completed: false
            };
            console.log("Adding new todo:", newTodo);
            setTodos(prevTodos => {
                const updatedTodos = [...prevTodos, newTodo];
                console.log("Updated todos:", updatedTodos);
                return updatedTodos;
            });
            setNewTodoText("");
        }
    }, [newTodoText]);

    return (
        <div className="p-8 mb-4 flex md:flex-row flex-col gap-5 justify-center">
            <div
                className="w-full md:w-[50%] bg-gray-50 p-3 rounded-md"
                onDragOver={onTodoDragOver}
                onDrop={(e) => onTodoDrop(e, false)}
            >
                <h4 className="text-xl font-semibold text-gray-700 text-center mb-3">Todo</h4>

                <form onSubmit={handleAddTodo} className="mb-4 w-full">
                    <div className="flex">
                        <input
                            type="text"
                            value={newTodoText}
                            onChange={(e) => setNewTodoText(e.target.value)}
                            placeholder="Add todo"
                            className="px-4 py-2 w-full outline-none border-l border-t border-b rounded-l-md focus:border-blue-300 border-gray-300 text-[0.9rem]"
                        />
                        <button
                            type="submit"
                            className="px-4 py-1 text-[0.9rem] bg-blue-500 text-white rounded-r-md"
                        >
                            Add
                        </button>
                    </div>
                </form>

                <ul className="space-y-2">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            draggable
                            onDragStart={(e) => onTodoDragStart(e, todo.id, false)}
                            className="bg-white p-2 rounded-md cursor-move"
                        >
                            {todo.text}
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className="w-full md:w-[50%] min-h-[120px] bg-gray-50 p-3 rounded-md"
                onDragOver={onTodoDragOver}
                onDrop={(e) => onTodoDrop(e, true)}
            >
                <h4 className="text-xl font-semibold text-gray-700 text-center mb-3">Completed</h4>
                <ul className="space-y-2">
                    {completedTodos.map((todo) => (
                        <li
                            key={todo.id}
                            draggable
                            onDragStart={(e) => onTodoDragStart(e, todo.id, true)}
                            className="bg-white p-2 rounded-md cursor-move"
                        >
                            {todo.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DragAndDrop;
              '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/animated-button' backName='animated button' forwardName='cards'
                                    forwardUrl='/components/cards'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#drag-&-drop-with-indicator"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4 capitalize`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        drag & drop with indicator
                    </a>
                    <a
                        href="#upload-multiple-files-with-drag-&-drop"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l capitalize border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        upload multiple files with drag & drop
                    </a>
                    <a
                        href="#upload-image-with-drag-&-drop"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l capitalize border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        upload image with drag & drop
                    </a>
                    <a
                        href="#list-drag-&-drop"
                        className={`${
                            contentActiveTab === 4 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l capitalize border-transparent pl-4`}
                        onClick={() => setContentActiveTab(4)}
                    >
                        list drag & drop
                    </a>
                    <a
                        href="#todo-app-with-drag-&-drop"
                        className={`${
                            contentActiveTab === 5 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l capitalize border-transparent pl-4`}
                        onClick={() => setContentActiveTab(5)}
                    >
                        todo app with drag & drop
                    </a>
                    <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
                </div>
            </aside>
            <Helmet>
                <title>Surfaces - Drag & Drop</title>
            </Helmet>
        </>
    );
};

export default DragAndDrop;
