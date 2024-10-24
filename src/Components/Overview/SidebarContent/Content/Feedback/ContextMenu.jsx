import React, {useState, useEffect, useCallback} from "react";

// react helmet
import {Helmet} from "react-helmet";

// components
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";
import OverviewFooter from "../../../../../Shared/OverviewFooter";

// icons
import {FaPlus} from "react-icons/fa6";
import {FaChevronRight, FaUser} from "react-icons/fa";
import {RxCross1} from "react-icons/rx";
import {BsChevronRight, BsCopy} from "react-icons/bs";
import {AiOutlineDelete, AiOutlineDownload, AiOutlineShareAlt} from "react-icons/ai";
import {MdContentCopy, MdOutlineFileUpload} from "react-icons/md";
import {GoLink, GoShare} from "react-icons/go";
import {LuPencil} from "react-icons/lu";
import {GrCloudUpload} from "react-icons/gr";
import {IoCloudDownloadOutline} from "react-icons/io5";
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";

const Dialog = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    const toggleCardView = useToggleCardView()

    const [contextMenuPreview, setContextMenuPreview] = useState(true);
    const [contextMenuCode, setContextMenuCode] = useState(false);

    const [dropdownContextMenuPreview, setDropdownContextMenuPreview] = useState(true);
    const [dropdownContextMenuCode, setDropdownContextMenuCode] = useState(false);

    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [menuHeight, setMenuHeight] = useState('0px');

    const handleContextMenu = useCallback((e) => {
        e.preventDefault();
        setShowMenu(true);
        setMenuPosition({ x: e.pageX, y: e.pageY });
    }, []);

    const handleClick = useCallback(() => {
        if (showMenu) {
            setMenuHeight('0px');
            setTimeout(() => setShowMenu(false), 200);
        }
    }, [showMenu]);

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [handleClick]);

    useEffect(() => {
        if (showMenu) {
            setTimeout(() => {
                const menuElement = document.getElementById('context-menu');
                if (menuElement) {
                    setMenuHeight(`${menuElement.scrollHeight}px`);
                }
            }, 0);
        }
    }, [showMenu]);

    const menuItems = [
        {
            icon: <MdContentCopy/>,
            label: 'Copy',
            action: () => console.log('Copy clicked')
        },
        {
            icon: <GoLink/>,
            label: 'Copy Link',
            action: () => console.log('Copy Link clicked')
        },
        {
            icon: <GoShare/>,
            label: 'Share',
            action: () => console.log('Share clicked')
        },
        {
            icon: <LuPencil/>,
            label: 'Rename',
            action: () => console.log('Rename clicked')
        },
        {
            icon: <AiOutlineDelete/>,
            label: 'Delete',
            action: () => console.log('Delete clicked')
        },
    ];

    const [showMenu2, setShowMenu2] = useState(false);
    const [menuPosition2, setMenuPosition2] = useState({ x: 0, y: 0 });
    const [menuHeight2, setMenuHeight2] = useState('0px');
    const [subMenuHeight, setSubMenuHeight] = useState('0px');
    const [showSubmenu, setShowSubmenu] = useState(false);

    const handleContextMenu2 = useCallback((e) => {
        e.preventDefault();
        setShowMenu2(true);
        setMenuPosition2({ x: e.pageX, y: e.pageY });
    }, []);

    const handleClick2 = useCallback(() => {
        if (showMenu2) {
            setMenuHeight2('0px');
            setTimeout(() => setShowMenu2(false), 200);
        }
    }, [showMenu2]);

    useEffect(() => {
        document.addEventListener('click', handleClick2);
        return () => {
            document.removeEventListener('click', handleClick2);
        };
    }, [handleClick2]);

    useEffect(() => {
        if (showMenu2) {
            setTimeout(() => {
                const menuElement2 = document.getElementById('context-menu2');
                if (menuElement2) {
                    setMenuHeight2(`${menuElement2.scrollHeight}px`);
                }
            }, 0);
        }
    }, [showMenu2]);

    useEffect(() => {
        if (showSubmenu) {
            setTimeout(() => {
                const subMenuHeight = document.getElementById('sub-menu');
                if (subMenuHeight) {
                    setSubMenuHeight(`${subMenuHeight.scrollHeight}px`);
                }
            }, 0);
        }
    }, [showSubmenu]);


    const menuItems2 = [
        {
            icon: <MdContentCopy/>,
            label: 'Copy',
            action: () => console.log('Copy clicked')
        },
        {
            icon: <GoShare/>,
            label: 'Share',
            hasSubmenu: true,
            submenu: [
                { icon: <IoCloudDownloadOutline/>, label: 'Download', action: () => console.log('Download clicked') },
                { icon: <GrCloudUpload/>, label: 'Upload', action: () => console.log('Upload clicked') },
                { icon: <GoLink/>, label: 'Copy Link', action: () => console.log('Copy Link clicked') }
            ],
            action: () => console.log('Share clicked')
        },
        {
            icon: <LuPencil/>,
            label: 'Rename',
            action: () => console.log('Rename clicked')
        },
        {
            icon: <AiOutlineDelete/>,
            label: 'Delete',
            action: () => console.log('Delete clicked')
        },
    ];

    const handleItemClick = (item) => {
        if (!item.submenu) {
            item.action?.();
        }
    };

    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div className='1024px:w-[80%]'>
                    <ContentHeader text={"context menu"} id={"context_menu"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A context menu is a pop-up that shows relevant actions when you right-click an item.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${contextMenuPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    contextMenuPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setContextMenuPreview, setContextMenuCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    contextMenuCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setContextMenuPreview, setContextMenuCode, false)}
                            >
                                Code
                            </button>
                        </div>
                        {contextMenuPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <p onContextMenu={handleContextMenu}
                                   className='w-full cursor-pointer bg-gray-50 border-gray-300 rounded-md border p-4 text-[1rem]'>
                                    ZENUI LIBRARY - Free Templates & Components Library.
                                    Elevate your project with free UI components, customizable icons, and a color
                                    palette. No dependencies required
                                </p>

                                {showMenu && (
                                    <div
                                        id='context-menu'
                                        className="fixed bg-white overflow-hidden transition-all duration-200 shadow-md rounded-lg py-2 w-48 border border-gray-200"
                                        style={{
                                            top: menuPosition.y,
                                            left: menuPosition.x,
                                            height: menuHeight,
                                            zIndex: 50
                                        }}
                                    >
                                        {menuItems.map((item, index) => (
                                            <button
                                                key={index}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    item.action();
                                                    setShowMenu(false);
                                                }}
                                                className={`${item.label === 'Delete' && 'hover:bg-red-50'} w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-600`}
                                            >
                                                <p className={`${item.label === 'Delete' && 'text-red-500'} text-[1.1rem] text-gray-600`}>{item.icon}</p>
                                                <p className={`${item.label === 'Delete' && 'text-red-500'}`}>{item.label}</p>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {contextMenuCode && (
                            <Showcode
                                code='
import React, {useCallback, useEffect, useState} from "react";

// react icons
import {MdContentCopy} from "react-icons/md";
import {GoLink, GoShare} from "react-icons/go";
import {LuPencil} from "react-icons/lu";
import {AiOutlineDelete} from "react-icons/ai";

const ContextMenu = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [menuHeight, setMenuHeight] = useState("0px");

    // Handle right click
    const handleContextMenu = useCallback((e) => {
        e.preventDefault();
        setShowMenu(true);
        setMenuPosition({ x: e.pageX, y: e.pageY });
    }, []);

    // Handle click outside to close menu
    const handleClick = useCallback(() => {
        if (showMenu) {
            setMenuHeight("0px");
            setTimeout(() => setShowMenu(false), 200); // Match transition duration
        }
    }, [showMenu]);

    // Add and remove event listeners
    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [handleClick]);

    // Calculate and set menu height when showing
    useEffect(() => {
        if (showMenu) {
            setTimeout(() => {
                const menuElement = document.getElementById("zenui-context-menu");
                if (menuElement) {
                    setMenuHeight(`${menuElement.scrollHeight}px`);
                }
            }, 0);
        }
    }, [showMenu]);

    // Menu items with their actions
    const menuItems = [
        {
            icon: <MdContentCopy/>,
            label: "Copy",
            action: () => console.log("Copy clicked")
        },
        {
            icon: <GoLink/>,
            label: "Copy Link",
            action: () => console.log("Copy Link clicked")
        },
        {
            icon: <GoShare/>,
            label: "Share",
            action: () => console.log("Share clicked")
        },
        {
            icon: <LuPencil/>,
            label: "Rename",
            action: () => console.log("Rename clicked")
        },
        {
            icon: <AiOutlineDelete/>,
            label: "Delete",
            action: () => console.log("Delete clicked")
        },
    ];

    return (
        <>
            <p onContextMenu={handleContextMenu}
               className="w-full cursor-pointer bg-gray-50 border-gray-300 rounded-md border p-4 text-[1rem]">
                ZENUI LIBRARY - Free Templates & Components Library.
                Elevate your project with free UI components, customizable icons, and a color
                palette. No dependencies required
            </p>

            {showMenu && (
                <div
                    id="zenui-context-menu"
                    className="fixed bg-white overflow-hidden transition-all duration-200 shadow-md rounded-lg py-2 w-48 border border-gray-200"
                    style={{
                        top: menuPosition.y,
                        left: menuPosition.x,
                        height: menuHeight,
                        zIndex: 50
                    }}
                >
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={(e) => {
                                e.stopPropagation();
                                item.action();
                                setShowMenu(false);
                            }}
                            className={`${item.label === "Delete" && "hover:bg-red-50"} w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-600`}
                        >
                            <p className={`${item.label === "Delete" && "text-red-500"} text-[1.1rem] text-gray-600`}>{item.icon}</p>
                            <p className={`${item.label === "Delete" && "text-red-500"}`}>{item.label}</p>
                        </button>
                    ))}
                </div>
            )}
        </>
    );
};

export default ContextMenu;
          '
                            />
                        )}
                    </div>

                   <div className='mt-8'>
                       <ContentHeader text={"context menu with dropdown"} id={"context_menu_with_dropdown"}/>
                   </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A context menu with a dropdown appears on right-click and includes items that expand to show more options.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dropdownContextMenuPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    dropdownContextMenuPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={()=> toggleCardView(setDropdownContextMenuPreview, setDropdownContextMenuCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    dropdownContextMenuCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> toggleCardView(setDropdownContextMenuPreview, setDropdownContextMenuCode, false)}
                            >
                                Code
                            </button>
                        </div>
                        {dropdownContextMenuPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <p onContextMenu={handleContextMenu2}
                                   className='w-full cursor-pointer bg-blue-50 border-blue-300 rounded-md border p-4 text-[1rem]'>
                                    ZENUI LIBRARY - Free Templates & Components Library.
                                    Elevate your project with free UI components, customizable icons, and a color
                                    palette. No dependencies required
                                </p>

                                {showMenu2 && (
                                    <div
                                        id="context-menu2"
                                        className={`${showSubmenu ? 'overflow-visible' : 'overflow-hidden' } fixed bg-white transition-all duration-200 shadow-md rounded-lg py-2 w-48 border border-gray-200`}
                                        style={{
                                            top: menuPosition2.y,
                                            left: menuPosition2.x,
                                            height: menuHeight2,
                                            zIndex: 50
                                        }}
                                    >
                                        {
                                            menuItems2?.map((item, index)=> (
                                                <div
                                                    key={item.id}
                                                    className="relative"
                                                    onMouseEnter={() => item.hasSubmenu && setShowSubmenu(true)}
                                                    onMouseLeave={() => {
                                                        item.hasSubmenu && setShowSubmenu(false)
                                                        setSubMenuHeight('0px')
                                                    }}
                                                >
                                                    <button
                                                        onClick={() => handleItemClick(item)}
                                                        className={`
                                                                w-full px-4 py-2 text-left flex items-center text-gray-600 justify-between text-sm
                                                                ${item.label === 'Delete' ? 'hover:bg-red-50' : 'hover:bg-gray-50'}
                                                            `}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <p className={`${item.label === 'Delete' && 'text-red-500'} text-[1.1rem] text-gray-600`}>{item.icon}</p>
                                                            <p className={`${item.label === 'Delete' && 'text-red-500'}`}>{item.label}</p>
                                                        </div>
                                                        {item.hasSubmenu && (
                                                            <BsChevronRight className="w-4 h-4 text-gray-400"/>
                                                        )}
                                                    </button>

                                                    {item.hasSubmenu && showSubmenu && (
                                                        <div
                                                            id='sub-menu'
                                                            className="absolute overflow-hidden transition-all duration-200 left-full top-0 bg-white shadow-md rounded-lg py-2 w-48 border border-gray-200 ml-0.5"
                                                            style={{
                                                                height: subMenuHeight,
                                                            }}
                                                        >
                                                            {item.submenu.map((subItem, index) => (
                                                                <button
                                                                    key={index}
                                                                    onClick={() => {
                                                                        subItem.action?.();
                                                                        setShowSubmenu(false)
                                                                    }}
                                                                    className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-600"
                                                                >
                                                                    <p className={`${subItem.label === 'Delete' && 'text-red-500'} text-[1.1rem] text-gray-600`}>{subItem.icon}</p>
                                                                    <p className={`${subItem.label === 'Delete' && 'text-red-500'}`}>{subItem.label}</p>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            ))
                                        }
                                    </div>
                                )}
                            </div>
                        )}

                        {dropdownContextMenuCode && (
                            <Showcode
                                code='
import React, {useCallback, useEffect, useState} from "react";

// react icons
import {MdContentCopy} from "react-icons/md";
import {GoLink, GoShare} from "react-icons/go";
import {LuPencil} from "react-icons/lu";
import {AiOutlineDelete} from "react-icons/ai";
import {BsChevronRight} from "react-icons/bs";
import {IoCloudDownloadOutline} from "react-icons/io5";
import {GrCloudUpload} from "react-icons/gr";

const ContextMenu = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [menuHeight, setMenuHeight] = useState("0px");
    const [subMenuHeight, setSubMenuHeight] = useState("0px");
    const [showSubmenu, setShowSubmenu] = useState(false);

    // Handle right click
    const handleContextMenu = useCallback((e) => {
        e.preventDefault();
        setShowMenu(true);
        setMenuPosition({ x: e.pageX, y: e.pageY });
    }, []);

    // Handle click outside to close menu
    const handleClick = useCallback(() => {
        if (showMenu) {
            setMenuHeight("0px");
            setTimeout(() => setShowMenu(false), 200); // Match transition duration
        }
    }, [showMenu]);

    // Add and remove event listeners
    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [handleClick]);

    // Calculate and set menu height when showing
    useEffect(() => {
        if (showMenu) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const menuElement = document.getElementById("zenui-context-menu");
                if (menuElement) {
                    setMenuHeight(`${menuElement.scrollHeight}px`);
                }
            }, 0);
        }
    }, [showMenu]);

    // Calculate and set menu height when showing
    useEffect(() => {
        if (showSubmenu) {
            // Small delay to ensure DOM is ready
            setTimeout(() => {
                const subMenuHeight = document.getElementById("sub-menu");
                if (subMenuHeight) {
                    setSubMenuHeight(`${subMenuHeight.scrollHeight}px`);
                }
            }, 0);
        }
    }, [showSubmenu]);



    // Menu items with their actions
    const menuItems = [
        {
            icon: <MdContentCopy/>,
            label: "Copy",
            action: () => console.log("Copy clicked")
        },
        {
            icon: <GoShare/>,
            label: "Share",
            hasSubmenu: true,
            submenu: [
                { icon: <IoCloudDownloadOutline/>, label: "Download", action: () => console.log("Download clicked") },
                { icon: <GrCloudUpload/>, label: "Upload", action: () => console.log("Upload clicked") },
                { icon: <GoLink/>, label: "Copy Link", action: () => console.log("Copy Link clicked") }
            ],
            action: () => console.log("Share clicked")
        },
        {
            icon: <LuPencil/>,
            label: "Rename",
            action: () => console.log("Rename clicked")
        },
        {
            icon: <AiOutlineDelete/>,
            label: "Delete",
            action: () => console.log("Delete clicked")
        },
    ];

    const handleItemClick = (item) => {
        if (!item.submenu) {
            item.action?.();
        }
    };

    return (
        <>
            <p onContextMenu={handleContextMenu}
               className="w-full cursor-pointer bg-blue-50 border-blue-300 rounded-md border p-4 text-[1rem]">
                ZENUI LIBRARY - Free Templates & Components Library.
                Elevate your project with free UI components, customizable icons, and a color
                palette. No dependencies required
            </p>

            { showMenu && (
                <div
                    id="zenui-context-menu"
                    className={`${showSubmenu ? "overflow-visible" : "overflow-hidden" } fixed bg-white transition-all duration-200 shadow-md rounded-lg py-2 w-48 border border-gray-200`}
                    style={{
                        top: menuPosition.y,
                        left: menuPosition.x,
                        height: menuHeight,
                        zIndex: 50
                    }}
                >
                    {
                        menuItems?.map((item, index)=> (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => item.hasSubmenu && setShowSubmenu(true)}
                                onMouseLeave={() => {
                                    item.hasSubmenu && setShowSubmenu(false)
                                    setSubMenuHeight("0px")
                                }}
                            >
                                <button
                                    onClick={() => handleItemClick(item)}
                                    className={`w-full px-4 py-2 text-left flex items-center text-gray-600 justify-between text-sm
                                    ${item.label === "Delete" ? "hover:bg-red-50" : "hover:bg-gray-50"} `}
                                >
                                    <div className="flex items-center gap-3">
                                        <p className={`${item.label === "Delete" && "text-red-500"} text-[1.1rem] text-gray-600`}>{item.icon}</p>
                                        <p className={`${item.label === "Delete" && "text-red-500"}`}>{item.label}</p>
                                    </div>
                                    {item.hasSubmenu && (
                                        <BsChevronRight className="w-4 h-4 text-gray-400"/>
                                    )}
                                </button>

                                { item.hasSubmenu && showSubmenu && (
                                    <div
                                        id="sub-menu"
                                        className="absolute overflow-hidden transition-all duration-200 left-full top-0 bg-white shadow-md rounded-lg py-2 w-48 border border-gray-200 ml-0.5"
                                        style={{
                                            height: subMenuHeight,
                                        }}
                                    >
                                        {item.submenu.map((subItem, index) => (
                                            <button
                                                key={index}
                                                onClick={() => {
                                                    subItem.action?.();
                                                    setShowSubmenu(false)
                                                }}
                                                className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm text-gray-600"
                                            >
                                                <p className={`${subItem.label === "Delete" && "text-red-500"} text-[1.1rem] text-gray-600`}>{subItem.icon}</p>
                                                <p className={`${subItem.label === "Delete" && "text-red-500"}`}>{subItem.label}</p>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))
                    }
                </div>
            )}
        </>
    );
};

export default ContextMenu;
          '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/tabs' backName='tabs'
                                    forwardName='skeleton' forwardUrl='/components/skeleton'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#context_menu"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Context Menu
                    </a>
                    <a
                        href="#context_menu_with_dropdown"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Context Menu With Dropdown
                    </a>
                    <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full'
                         data-ea-type="image"></div>
                </div>
            </aside>
            <Helmet>
                <title>Feedback - Context Menu</title>
            </Helmet>
        </>
    );
};

export default Dialog;
