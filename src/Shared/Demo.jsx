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
