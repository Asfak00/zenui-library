import React, {useState,useEffect} from 'react';

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import {Helmet} from "react-helmet";

// icons
import {IoMdArrowDropdown, IoMdArrowDropright} from "react-icons/io";
import {GoPlus} from "react-icons/go";
import {HiOutlineMinusSm} from "react-icons/hi";
import {FaRegFile, FaRegFolder, FaRegFolderOpen} from "react-icons/fa";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";
import {useToggleCardView} from "../../../../../CustomHooks/ButtonToggle.js";
import {SlInfo} from "react-icons/sl";
import PremiumTooltip from "../../../../../Shared/PremiumTooltip.jsx";

const TreeDropdown = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);
    const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
    const [isPremiumModalOpen2, setIsPremiumModalOpen2] = useState(false);

    const toggleCardView = useToggleCardView()


    const [dataTreePreview, setDataTreePreview] = useState(true);
    const [dataTreeCode, setDataTreeCode] = useState(false);

    const [treeWithLinePreview, setTreeWithLinePreview] = useState(true);
    const [treeWithLineCode, setTreeWithLineCode] = useState(false);

    const [directoryTreePreview, setDirectoryTreePreview] = useState(true);
    const [directoryTreeCode, setDirectoryTreeCode] = useState(false);

    const [controlledTreePreview, setControlledTreePreview] = useState(true);
    const [controlledTreeCode, setControlledTreeCode] = useState(false);

    // actions
    const treeData1 = [
        {
            label: 'Corporate Office',
            children: [
                {
                    label: 'Finance Department',
                    children: [
                        {
                            label: 'Accounting Team',
                            children: [
                                {label: 'Payroll Management'},
                            ]
                        },
                        {
                            label: 'Audit and Compliance'
                        }
                    ]
                },
                {
                    label: 'Legal Department'
                }
            ]
        },
        {
            label: 'Regional Office - Europe',
            children: [
                {
                    label: 'Marketing Department',
                    children: [
                        {
                            label: 'Digital Marketing',
                        },
                        {
                            label: 'Market Research'
                        }
                    ]
                },
                {
                    label: 'Operations Team'
                }
            ]
        }
    ];

    // Helper function to get all labels recursively
    const getAllLabels = (nodes) => {
        let labels = [];
        nodes.forEach((node) => {
            labels.push(node.label);
            if (node.children) {
                labels = labels.concat(getAllLabels(node.children));
            }
        });
        return labels;
    };

    // State to track which nodes are open, initialized with all labels
    const [openNodes1, setOpenNodes1] = useState(getAllLabels(treeData1));

    // Toggle node open/close state
    const toggleNode1 = (node) => {
        if (openNodes1.includes(node.label)) {
            setOpenNodes1(openNodes1.filter((n) => n !== node.label));
        } else {
            setOpenNodes1([...openNodes1, node.label]);
        }
    };

    // Check if node is open
    const isOpen1 = (node) => openNodes1.includes(node.label);
    // Recursive rendering of tree nodes
    const renderTree1 = (nodes) => {
        return (
            <ul className="space-y-2">
                {nodes.map((node) => (
                    <li key={node.label} className="ml-2">

                        {/* Node Label */}
                        <div
                            className="cursor-pointer py-1 px-3 flex items-center rounded-md gap-[5px] hover:bg-blue-50 hover:text-blue-800 group transition-all text-[1rem] duration-200"
                        >
                            {node.children && (
                                <span className="text-gray-500">
                                    {isOpen1(node) ? (
                                        <IoMdArrowDropdown onClick={() => toggleNode1(node)} className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200" />
                                        ) : (
                                        <IoMdArrowDropright onClick={() => toggleNode1(node)} className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200" />
                                    )}
                                </span>
                            )}
                            {node.label}
                        </div>

                        {/* children nodes */}
                        <div
                            className={`ml-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen1(node) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            style={{ transition: 'max-height 0.3s ease-in-out, opacity 0.2s ease-in-out' }}
                        >
                            <ul>
                                {node.children && renderTree1(node.children)}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const treeData2 = [
        {
            label: 'Company Headquarters',
            children: [
                {
                    label: 'HR Department',
                    children: [
                        {
                            label: 'Employee Relations',
                            children: [
                                {label: 'Benefits Team'},
                            ]
                        },
                        {
                            label: 'Recruitment',
                            children: [
                                {label: 'Talent Acquisition Team'},
                            ]
                        }
                    ]
                },
                {
                    label: 'IT Department',
                    children: [
                        {
                            label: 'Infrastructure Team',
                            children: [
                                {label: 'Network Support'},
                            ]
                        },
                        {
                            label: 'Software Development',
                            children: [
                                {label: 'Frontend Team'},
                                {label: 'Backend Team'}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: 'Regional Office',
            children: [
                {
                    label: 'Sales Department',
                },
                {
                    label: 'Customer Support',
                }
            ]
        }
    ];

    // State to track which nodes are open
    const [openNodes2, setOpenNodes2] = useState(getAllLabels(treeData2));

    // Toggle node open/close state
    const toggleNode2 = (node) => {
        if (openNodes2.includes(node.label)) {
            setOpenNodes2(openNodes2.filter((n) => n !== node.label));
        } else {
            setOpenNodes2([...openNodes2, node.label]);
        }
    };

    // Check if node is open
    const isOpen2 = (node) => openNodes2.includes(node.label);

    // Recursive rendering of tree nodes
    const renderTree2 = (nodes, level = 0) => {
        return (
            <ul className="space-y-2">
                {nodes.map((node, index) => (
                    <li key={node.label} className="ml-2 relative">

                        {/* Node Label */}
                        <div
                            className={`cursor-pointer py-1 px-3 flex items-center rounded-md gap-[10px] hover:bg-blue-50 hover:text-blue-800 group transition-all duration-200`}
                        >
                            {node.children && (
                                <span className="text-gray-500 z-10">
                                    {isOpen2(node) ? (
                                        <HiOutlineMinusSm onClick={() => toggleNode2(node)} className="group-hover:text-blue-800 text-[1.2rem] bg-white transition-all duration-200 border border-gray-300" />
                                    ) : (
                                        <GoPlus onClick={() => toggleNode2(node)} className="group-hover:text-blue-800 transition-all duration-200 bg-white text-[1.2rem] border border-gray-300" />
                                    )}
                                </span>
                            )}
                            {node.label}
                        </div>

                        {/* Border extension for parent node to connect to children */}

                            <div style={{ transition: 'max-height 0.3s ease-in-out, opacity 0.2s ease-in-out' }} className={`${node.children && isOpen2(node) && index !== nodes.length - 1 ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 absolute left-[21px] top-6 w-[1px] bg-gray-200 h-full`}></div>


                        {/* Render children nodes */}
                        <div
                            className={`ml-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen2(node) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            style={{ transition: 'max-height 0.3s ease-in-out, opacity 0.2s ease-in-out' }}
                        >
                            <ul>
                                {node.children && renderTree2(node.children, level + 1)}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const treeData3 = [
        {
            label: 'Root Folder',
            children: [
                {
                    label: 'Documents',
                    children: [
                        {
                            label: 'Work',
                            children: [
                                {label: 'Resume.docx'},
                                {label: 'ProjectProposal.pdf'},
                            ]
                        },
                        {
                            label: 'Personal',
                            children: [
                                {label: 'VacationPlan.xlsx'},
                            ]
                        }
                    ]
                },
                {
                    label: 'Legal',
                    children: [
                        {label: 'Contract.pdf'},
                        {label: 'TermsAndConditions.docx'}
                    ]
                }
            ]
        },
        {
            label: 'Downloads',
            children: [
                {
                    label: 'Software',
                    children: [
                        {label: 'Installer.exe'},
                        {label: 'ReadMe.txt'},
                    ]
                },
                {
                    label: 'Images',
                    children: [
                        {label: 'HolidayPhoto.jpg'},
                        {label: 'ProfilePicture.png'}
                    ]
                }
            ]
        }
    ];

    // State to track which nodes are open
    const [openNodes3, setOpenNodes3] = useState(getAllLabels(treeData3));

    // Toggle node open/close state
    const toggleNode3 = (node) => {
        if (openNodes3.includes(node.label)) {
            setOpenNodes3(openNodes3.filter((n) => n !== node.label));
        } else {
            setOpenNodes3([...openNodes3, node.label]);
        }
    };

    // Check if node is open
    const isOpen3 = (node) => openNodes3.includes(node.label);

    // Recursive rendering of tree nodes
    const renderTree3 = (nodes) => {
        return (
            <ul className="space-y-2">
                {nodes.map((node) => (
                    <li key={node.label} className="ml-2">

                        {/* Node Label */}
                        <div
                            className="cursor-pointer py-1 px-3 flex items-center rounded-md gap-[5px] hover:bg-blue-50 hover:text-blue-800 group transition-all text-[1rem] duration-200"
                        >
                            {node.children && (
                                <span className="text-gray-500">
                                    {isOpen3(node) ? (
                                        <FaRegFolderOpen onClick={() => toggleNode3(node)} className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200" />
                                    ) : (
                                        <FaRegFolder onClick={() => toggleNode3(node)} className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200" />
                                    )}
                                </span>
                            )}

                            {
                                !node.children && (
                                    <FaRegFile className='group-hover:text-blue-800 text-gray-500 transition-all text-[1rem] duration-200'/>
                                )
                            }
                            {node.label}
                        </div>

                        {/* children nodes */}
                        <div
                            className={`ml-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen3(node) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                            style={{ transition: 'max-height 0.3s ease-in-out, opacity 0.2s ease-in-out' }}
                        >
                            <ul>
                                {node.children && renderTree3(node.children)}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const treeData4 = [
        {
            label: 'University Campus',
            children: [
                {
                    label: 'Faculty of Business and Economics',
                    children: [
                        {
                            label: 'Department of Finance',
                            children: [
                                {label: 'Corporate Finance Course'},
                            ]
                        },
                        {
                            label: 'Department of Accounting',
                            children: [
                                {label: 'Financial Accounting Course'},
                            ]
                        }
                    ]
                },
                {
                    label: 'Faculty of Law',
                    children: [
                        {label: 'International Law Course'},
                        {label: 'Business Law Course'}
                    ]
                }
            ]
        },
        {
            label: 'Regional Campus - Europe',
            children: [
                {
                    label: 'Faculty of Arts and Humanities',
                    children: [
                        {
                            label: 'Department of Literature',
                            children: [
                                {label: 'Modern Literature Course'},
                            ]
                        },
                        {
                            label: 'Department of Philosophy',
                            children: [
                                {label: 'Ethics and Morality Course'}
                            ]
                        }
                    ]
                },
                {
                    label: 'Faculty of Social Sciences',
                    children: [
                        {label: 'Sociology Course'},
                        {label: 'Political Science Course'}
                    ]
                }
            ]
        }
    ];


    const [openNodes4, setOpenNodes4] = useState(getAllLabels(treeData4));
    const [checkedNodes, setCheckedNodes] = useState({});

    // Toggle node open/close state
    const toggleNode4 = (node) => {
        if (openNodes4.includes(node.label)) {
            setOpenNodes4(openNodes4.filter((n) => n !== node.label));
        } else {
            setOpenNodes4([...openNodes4, node.label]);
        }
    };

    // Check if node is open
    const isOpen4 = (node) => openNodes4.includes(node.label);

    // Handle checkbox change for parent/child
    const handleCheckboxChange = (node, isChecked) => {
        const updatedCheckedNodes = { ...checkedNodes };

        const updateCheckedState = (node, isChecked) => {
            updatedCheckedNodes[node.label] = isChecked;

            if (node.children) {
                node.children.forEach((child) => {
                    updateCheckedState(child, isChecked);
                });
            }
        };

        updateCheckedState(node, isChecked);
        setCheckedNodes(updatedCheckedNodes);
    };

    // Recursive rendering of tree nodes
    const renderTree4 = (nodes, parent = null) => {
        return (
            <ul className="space-y-2">
                {nodes.map((node) => (
                    <li key={node.label} className="ml-2">
                        {/* Node Label */}
                        <div
                            className="cursor-pointer py-1 px-3 flex items-center rounded-md gap-[5px] hover:bg-blue-50 hover:text-blue-800 group transition-all text-[0.990rem] duration-200"
                        >
                            {node.children && (
                                <span className="text-gray-500">
                  {isOpen4(node) ? (
                      <IoMdArrowDropdown
                          onClick={() => toggleNode4(node)}
                          className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200"
                      />
                  ) : (
                      <IoMdArrowDropright
                          onClick={() => toggleNode4(node)}
                          className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200"
                      />
                  )}
                </span>
                            )}
                            <label className="flex items-center gap-[10px] cursor-pointer">
                                <input
                                    type="checkbox"
                                    className='hidden'
                                    checked={
                                        checkedNodes[node.label] === true ||
                                        checkedNodes[node.label] === "indeterminate"
                                    }
                                    indeterminate={checkedNodes[node.label] === "indeterminate" ? true : false}
                                    onChange={(e) =>
                                        handleCheckboxChange(node, e.target.checked)
                                    }
                                />
                                <div className="relative">
                  <span
                      className={`${
                          checkedNodes[node.label]
                              ? "opacity-100 z-20 scale-[1]"
                              : "opacity-0 scale-[0.4] z-[-1]"
                      } transition-all duration-200 absolute top-0 left-0`}
                  >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group 335">
                        <rect
                            id="Rectangle 331"
                            x="-0.00012207"
                            y="6.10352e-05"
                            width="20"
                            height="20"
                            rx="4"
                            className="fill-[#3B9DF8]"
                            stroke="#3B9DF8"
                        ></rect>
                        <path
                            id="Vector"
                            d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                            fill="white"
                        ></path>
                      </g>
                    </svg>
                  </span>

                                    <span
                                        className={`${
                                            !checkedNodes[node.label]
                                                ? "opacity-100 z-20 scale-[1]"
                                                : "opacity-0 scale-[0.4] z-[-1]"
                                        } transition-all duration-200`}
                                    >
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group 335">
                        <rect
                            id="Rectangle 331"
                            x="-0.00012207"
                            y="6.10352e-05"
                            width="19"
                            height="19"
                            rx="4"
                            className="fill-transparent"
                            stroke="#cccccc"
                        ></rect>
                      </g>
                    </svg>
                  </span>
                                </div>
                            </label>
                            {node.label}
                        </div>

                        {/* children nodes */}
                        <div
                            className={`ml-6 overflow-hidden transition-all duration-500 ease-in-out ${
                                isOpen4(node) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                            style={{
                                transition:
                                    "max-height 0.3s ease-in-out, opacity 0.2s ease-in-out",
                            }}
                        >
                            <ul>{node.children && renderTree4(node.children, node)}</ul>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };


    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">

                <div className="w-full 425px:w-[80%]">
                        <div
                            className="p-4 flex gap-2 w-full 425px:w-[80%] bg-[#d18f0011] border border-[#d18e00]  rounded mb-8">
                            <p>
                                <SlInfo className="text-[#d17d00] text-[1.2rem]"/>
                            </p>
                            <p className="text-[#d18e00] text-[0.9rem]">
                                This component may include some features or patterns that might be more advanced for beginner developers.
                                However, we’ve made sure to include detailed comments throughout the code to help you understand
                                how everything works and guide you in customizing it to suit your needs.

                                <p className='mt-4'>
                                    If you're new to React or component-based libraries, don’t worry! Just follow the comments,
                                    and you’ll find it easier to understand the logic and flow of the component.
                                </p>
                            </p>
                        </div>

                    <ContentHeader
                        text={"data tree"}
                        id={"data_tree"}
                    />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A data tree is a hierarchical structure of nodes used to organize and navigate data
                        efficiently, with a root node and branches of connected child nodes.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${dataTreePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    dataTreePreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setDataTreePreview, setDataTreeCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    dataTreeCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setDataTreePreview, setDataTreeCode, false)}
                            >
                                Code
                            </button>
                        </div>
                        {dataTreePreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div>
                                    {/* Render the Tree Dropdown */}
                                    {renderTree1(treeData1)}
                                </div>
                            </div>
                        )}

                        {dataTreeCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {IoMdArrowDropdown, IoMdArrowDropright} from "react-icons/io";

const TreeDropdown = () => {

    // tree data array
    const treeData = [
        {
            label: "Corporate Office",
            children: [
                {
                    label: "Finance Department",
                    children: [
                        {
                            label: "Accounting Team",
                            children: [
                                {
                                    label: "Payroll Management"
                                },
                            ]
                        },
                        {
                            label: "Audit and Compliance"
                        }
                    ]
                },
                {
                    label: "Legal Department"
                }
            ]
        },
        {
            label: "Regional Office - Europe",
            children: [
                {
                    label: "Marketing Department",
                    children: [
                        {
                            label: "Digital Marketing",
                        },
                        {
                            label: "Market Research"
                        }
                    ]
                },
                {
                    label: "Operations Team"
                }
            ]
        }
    ];


    // State to track which nodes are open
    const [openNodes, setOpenNodes] = useState([]);

    // Toggle node (open/close) state
    const toggleNode = (node) => {
        if (openNodes.includes(node.label)) {
            setOpenNodes(openNodes.filter((n) => n !== node.label));
        } else {
            setOpenNodes([...openNodes, node.label]);
        }
    };

    // Check if node is open
    const isOpen = (node) => openNodes.includes(node.label);

    // Recursive rendering of tree nodes
    const renderTree = (nodes) => {
        return (
            <ul className="space-y-2">
                {nodes.map((node) => (
                    <li key={node.label} className="ml-2">

                        {/* Node Label */}
                        <div
                            className="cursor-pointer py-1 px-3 flex items-center rounded-md gap-[5px] hover:bg-blue-50 hover:text-blue-800 group transition-all text-[1rem] duration-200"
                        >
                            {node.children && (
                                <span className="text-gray-500">
                                    {isOpen(node) ? (
                                        <IoMdArrowDropdown onClick={() => toggleNode(node)} className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200" />
                                    ) : (
                                        <IoMdArrowDropright onClick={() => toggleNode(node)} className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200" />
                                    )}
                                </span>
                            )}
                            {node.label}
                        </div>

                        {/* children nodes */}
                        <div
                            className={`ml-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen(node) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                            style={{ transition: "max-height 0.3s ease-in-out, opacity 0.2s ease-in-out" }}
                        >
                            <ul>
                                {node.children && renderTree(node.children)}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            {/* Render the Tree Dropdown */}
            {renderTree(treeData)}
        </>
    );
};

export default TreeDropdown;
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            text={"tree with line"}
                            id={"tree_with_line"}
                            isPremium={true}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A tree with lines shows hierarchical data, with nodes connected by lines to represent
                        relationships.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${treeWithLinePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    treeWithLinePreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setTreeWithLinePreview, setTreeWithLineCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    treeWithLineCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={()=> setIsPremiumModalOpen(!isPremiumModalOpen)}
                            >
                                Code

                                {/* warning modal */}
                                <PremiumTooltip url={'https://buymeacoffee.com/zenuilibrary/e/316753'} isPremiumModalOpen={isPremiumModalOpen} setIsPremiumModalOpen={setIsPremiumModalOpen}/>
                            </button>
                        </div>
                        {treeWithLinePreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div>
                                    {/* Render the Tree Dropdown */}
                                    {renderTree2(treeData2)}
                                </div>
                            </div>
                        )}

                        {treeWithLineCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {HiOutlineMinusSm} from "react-icons/hi";
import {GoPlus} from "react-icons/go";

const TreeDropdown = () => {

    // tree data array
    const treeData = [
        {
            label: "Company Headquarters",
            children: [
                {
                    label: "HR Department",
                    children: [
                        {
                            label: "Employee Relations",
                            children: [
                                {label: "Benefits Team"},
                            ]
                        },
                        {
                            label: "Recruitment",
                            children: [
                                {label: "Talent Acquisition Team"},
                            ]
                        }
                    ]
                },
                {
                    label: "IT Department",
                    children: [
                        {
                            label: "Infrastructure Team",
                            children: [
                                {label: "Network Support"},
                            ]
                        },
                        {
                            label: "Software Development",
                            children: [
                                {label: "Frontend Team"},
                                {label: "Backend Team"}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: "Regional Office",
            children: [
                {
                    label: "Sales Department",
                },
                {
                    label: "Customer Support",
                }
            ]
        }
    ];


    // State to track which nodes are open
    const [openNodes, setOpenNodes] = useState([]);

    // Toggle node (open/close) state
    const toggleNode = (node) => {
        if (openNodes.includes(node.label)) {
            setOpenNodes(openNodes.filter((n) => n !== node.label));
        } else {
            setOpenNodes([...openNodes, node.label]);
        }
    };

    // Check if node is open
    const isOpen = (node) => openNodes.includes(node.label);

    // Recursive rendering of tree nodes
    const renderTree = (nodes, level = 0) => {
        return (
            <ul className="space-y-2">
                {nodes.map((node, index) => (
                    <li key={node.label} className="ml-2 relative">

                        {/* Node Label */}
                        <div
                            className={`cursor-pointer py-1 px-3 flex items-center rounded-md gap-[10px] hover:bg-blue-50 hover:text-blue-800 group transition-all duration-200`}
                        >
                            {node.children && (
                                <span className="text-gray-500 z-10">
                                    {isOpen(node) ? (
                                        <HiOutlineMinusSm onClick={() => toggleNode(node)} className="group-hover:text-blue-800 text-[1.2rem] bg-white transition-all duration-200 border border-gray-300" />
                                    ) : (
                                        <GoPlus onClick={() => toggleNode(node)} className="group-hover:text-blue-800 transition-all duration-200 bg-white text-[1.2rem] border border-gray-300" />
                                    )}
                                </span>
                            )}
                            {node.label}
                        </div>

                        {/* Border extension for parent node to connect to children */}

                        <div style={{ transition: "max-height 0.3s ease-in-out, opacity 0.2s ease-in-out" }} className={`${node.children && isOpen(node) && index !== nodes.length - 1 ? "max-h-full opacity-100" : "max-h-0 opacity-0"} transition-all duration-500 absolute left-[21px] top-6 w-[1px] bg-gray-200 h-full`}></div>


                        {/* Render children nodes */}
                        <div
                            className={`ml-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen(node) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                            style={{ transition: "max-height 0.3s ease-in-out, opacity 0.2s ease-in-out" }}
                        >
                            <ul>
                                {node.children && renderTree(node.children, level + 1)}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            {/* Render the Tree Dropdown */}
            {renderTree(treeData)}
        </>
    );
};

export default TreeDropdown;
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            text={"directory tree"}
                            id={"directory_tree"}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A directory tree is a hierarchical structure that displays folders and files in a system,
                        organized by directories and subdirectories.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${directoryTreePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    directoryTreePreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setDirectoryTreePreview, setDirectoryTreeCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    directoryTreeCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => toggleCardView(setDirectoryTreePreview, setDirectoryTreeCode, false)}
                            >
                                Code
                            </button>
                        </div>
                        {directoryTreePreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div>
                                    {/* Render the Tree Dropdown */}
                                    {renderTree3(treeData3)}
                                </div>
                            </div>
                        )}

                        {directoryTreeCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {FaRegFile, FaRegFolder, FaRegFolderOpen} from "react-icons/fa";

const TreeDropdown = () => {

    // tree data array
    const treeData = [
        {
            label: "Root Folder",
            children: [
                {
                    label: "Documents",
                    children: [
                        {
                            label: "Work",
                            children: [
                                {label: "Resume.docx"},
                                {label: "ProjectProposal.pdf"},
                            ]
                        },
                        {
                            label: "Personal",
                            children: [
                                {label: "VacationPlan.xlsx"},
                            ]
                        }
                    ]
                },
                {
                    label: "Legal",
                    children: [
                        {label: "Contract.pdf"},
                        {label: "TermsAndConditions.docx"}
                    ]
                }
            ]
        },
        {
            label: "Downloads",
            children: [
                {
                    label: "Software",
                    children: [
                        {label: "Installer.exe"},
                        {label: "ReadMe.txt"},
                    ]
                },
                {
                    label: "Images",
                    children: [
                        {label: "HolidayPhoto.jpg"},
                        {label: "ProfilePicture.png"}
                    ]
                }
            ]
        }
    ];


    // State to track which nodes are open
    const [openNodes, setOpenNodes] = useState([]);

    // Toggle node (open/close) state
    const toggleNode = (node) => {
        if (openNodes.includes(node.label)) {
            setOpenNodes(openNodes.filter((n) => n !== node.label));
        } else {
            setOpenNodes([...openNodes, node.label]);
        }
    };

    // Check if node is open
    const isOpen = (node) => openNodes.includes(node.label);

    // Recursive rendering of tree nodes
    const renderTree = (nodes) => {
        return (
            <ul className="space-y-2">
                {nodes.map((node) => (
                    <li key={node.label} className="ml-2">

                        {/* Node Label */}
                        <div
                            className="cursor-pointer py-1 px-3 flex items-center rounded-md gap-[5px] hover:bg-blue-50 hover:text-blue-800 group transition-all text-[1rem] duration-200"
                        >
                            {node.children && (
                                <span className="text-gray-500">
                                    {isOpen(node) ? (
                                        <FaRegFolderOpen onClick={() => toggleNode(node)} className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200" />
                                    ) : (
                                        <FaRegFolder onClick={() => toggleNode(node)} className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200" />
                                    )}
                                </span>
                            )}

                            {
                                !node.children && (
                                    <FaRegFile className="group-hover:text-blue-800 text-gray-500 transition-all text-[1rem] duration-200"/>
                                )
                            }
                            {node.label}
                        </div>

                        {/* children nodes */}
                        <div
                            className={`ml-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen(node) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                            style={{ transition: "max-height 0.3s ease-in-out, opacity 0.2s ease-in-out" }}
                        >
                            <ul>
                                {node.children && renderTree(node.children)}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            {/* Render the Tree Dropdown */}
            {renderTree(treeData)}
        </>
    );
};

export default TreeDropdown;
              '
                            />
                        )}
                    </div>

                    <div className='mt-8'>
                        <ContentHeader
                            text={"Controlled Tree"}
                            id={"controlled_tree"}
                            isPremium={true}
                        />
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A controlled tree checkbox is a tree structure with checkboxes for each node, where the
                        checked state is programmatically managed for dynamic updates.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${controlledTreePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    controlledTreePreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={() => toggleCardView(setControlledTreePreview, setControlledTreeCode, true)}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    controlledTreeCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={() => setIsPremiumModalOpen2(!isPremiumModalOpen2)}
                            >
                                Code

                                {/*  warning modal  */}
                                <PremiumTooltip url={'https://buymeacoffee.com/zenuilibrary/e/316746'} setIsPremiumModalOpen={setIsPremiumModalOpen2} isPremiumModalOpen={isPremiumModalOpen2}/>
                            </button>
                        </div>
                        {controlledTreePreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">

                                <div>
                                    {/* Render the Tree Dropdown */}
                                    {renderTree4(treeData4)}
                                </div>
                            </div>
                        )}

                        {controlledTreeCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {IoMdArrowDropdown, IoMdArrowDropright} from "react-icons/io";

const TreeDropdown = () => {

    // tree data array
    const treeData = [
        {
            label: "University Campus",
            children: [
                {
                    label: "Faculty of Business and Economics",
                    children: [
                        {
                            label: "Department of Finance",
                            children: [
                                {label: "Corporate Finance Course"},
                            ]
                        },
                        {
                            label: "Department of Accounting",
                            children: [
                                {label: "Financial Accounting Course"},
                            ]
                        }
                    ]
                },
                {
                    label: "Faculty of Law",
                    children: [
                        {label: "International Law Course"},
                        {label: "Business Law Course"}
                    ]
                }
            ]
        },
        {
            label: "Regional Campus - Europe",
            children: [
                {
                    label: "Faculty of Arts and Humanities",
                    children: [
                        {
                            label: "Department of Literature",
                            children: [
                                {label: "Modern Literature Course"},
                            ]
                        },
                        {
                            label: "Department of Philosophy",
                            children: [
                                {label: "Ethics and Morality Course"}
                            ]
                        }
                    ]
                },
                {
                    label: "Faculty of Social Sciences",
                    children: [
                        {label: "Sociology Course"},
                        {label: "Political Science Course"}
                    ]
                }
            ]
        }
    ];


    const [openNodes, setOpenNodes] = useState([]);

    // here will be your all of checked nodes which you checked from the tree
    const [checkedNodes, setCheckedNodes] = useState({});

    // Toggle node (open/close) state
    const toggleNode = (node) => {
        if (openNodes.includes(node.label)) {
            setOpenNodes(openNodes.filter((n) => n !== node.label));
        } else {
            setOpenNodes([...openNodes, node.label]);
        }
    };

    // Check if node is open
    const isOpen = (node) => openNodes.includes(node.label);

    // Handle checkbox change for parent/child
    const handleCheckboxChange = (node, isChecked) => {
        const updatedCheckedNodes = { ...checkedNodes };

        // If the node has children, update the children recursively
        const updateCheckedState = (node, isChecked) => {
            updatedCheckedNodes[node.label] = isChecked;

            if (node.children) {
                node.children.forEach((child) => {
                    updateCheckedState(child, isChecked);
                });
            }
        };

        updateCheckedState(node, isChecked);
        setCheckedNodes(updatedCheckedNodes);
    };

    // Recursive rendering of tree nodes
    const renderTree = (nodes, parent = null) => {
        return (
            <ul className="space-y-2">
                {nodes.map((node) => (
                    <li key={node.label} className="ml-2">

                        {/* Node Label */}
                        <div
                            className="cursor-pointer py-1 px-3 flex items-center rounded-md gap-[5px] hover:bg-blue-50 hover:text-blue-800 group transition-all text-[0.990rem] duration-200"
                        >
                            {node.children && (
                                <span className="text-gray-500">
                                      {isOpen(node) ? (
                                          <IoMdArrowDropdown
                                              onClick={() => toggleNode(node)}
                                              className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200"
                                          />
                                      ) : (
                                          <IoMdArrowDropright
                                              onClick={() => toggleNode(node)}
                                              className="group-hover:text-blue-800 transition-all text-[1.2rem] duration-200"
                                          />
                                      )}
                                </span>
                            )}
                            <label className="flex items-center gap-[10px] cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={
                                        checkedNodes[node.label] === true ||
                                        checkedNodes[node.label] === "indeterminate"
                                    }
                                    indeterminate={checkedNodes[node.label] === "indeterminate" ? true : false}
                                    onChange={(e) =>
                                        handleCheckboxChange(node, e.target.checked)
                                    }
                                />
                                <div className="relative">
                                      <span
                                          className={`${
                                              checkedNodes[node.label]
                                                  ? "opacity-100 z-20 scale-[1]"
                                                  : "opacity-0 scale-[0.4] z-[-1]"
                                          } transition-all duration-200 absolute top-0 left-0`}
                                      >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g id="Group 335">
                                            <rect
                                                id="Rectangle 331"
                                                x="-0.00012207"
                                                y="6.10352e-05"
                                                width="20"
                                                height="20"
                                                rx="4"
                                                className="fill-[#3B9DF8]"
                                                stroke="#3B9DF8"
                                            ></rect>
                                            <path
                                                id="Vector"
                                                d="M8.19594 15.4948C8.0646 15.4949 7.93453 15.4681 7.81319 15.4157C7.69186 15.3633 7.58167 15.2865 7.48894 15.1896L4.28874 11.8566C4.10298 11.6609 3.99914 11.3965 3.99988 11.1213C4.00063 10.8461 4.10591 10.5824 4.29272 10.3878C4.47953 10.1932 4.73269 10.0835 4.99689 10.0827C5.26109 10.0819 5.51485 10.1901 5.70274 10.3836L8.19591 12.9801L14.2887 6.6335C14.4767 6.4402 14.7304 6.3322 14.9945 6.33307C15.2586 6.33395 15.5116 6.44362 15.6983 6.63815C15.8851 6.83268 15.9903 7.09627 15.9912 7.37137C15.992 7.64647 15.8883 7.91073 15.7027 8.10648L8.90294 15.1896C8.8102 15.2865 8.7 15.3633 8.57867 15.4157C8.45734 15.4681 8.32727 15.4949 8.19594 15.4948Z"
                                                fill="white"
                                            ></path>
                                          </g>
                                        </svg>
                                      </span>

                                    <span
                                        className={`${
                                            !checkedNodes[node.label]
                                                ? "opacity-100 z-20 scale-[1]"
                                                : "opacity-0 scale-[0.4] z-[-1]"
                                        } transition-all duration-200`}
                                    >
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g id="Group 335">
                                            <rect
                                                id="Rectangle 331"
                                                x="-0.00012207"
                                                y="6.10352e-05"
                                                width="19"
                                                height="19"
                                                rx="4"
                                                className="fill-transparent"
                                                stroke="#cccccc"
                                            ></rect>
                                          </g>
                                        </svg>
                                    </span>
                                </div>
                            </label>
                            {node.label}
                        </div>

                        {/* children nodes */}
                        <div
                            className={`ml-6 overflow-hidden transition-all duration-500 ease-in-out ${
                                isOpen(node) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                            style={{
                                transition:
                                    "max-height 0.3s ease-in-out, opacity 0.2s ease-in-out",
                            }}
                        >
                            <ul>{node.children && renderTree(node.children, node)}</ul>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            {/* Render the Tree Dropdown */}
            {renderTree(treeData)}
        </>
    );
};

export default TreeDropdown;
              '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/skeleton' backName='skeleton' forwardName='alert message'
                                    forwardUrl='/components/alert-message'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#data_tree"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Data Tree
                    </a>
                    <a
                        href="#tree_with_line"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Tree With Line
                    </a>
                    <a
                        href="#directory_tree"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        Directory Tree
                    </a>
                    <a
                        href="#controlled_tree"
                        className={`${
                            contentActiveTab === 4 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(4)}
                    >
                        Controlled Tree
                    </a>
                    <div data-ea-publisher="zenuinet" data-ea-manual="true" className='w-full' data-ea-type="image"></div>
                </div>
            </aside>
            <Helmet>
                <title>Feedback - Tree Dropdown</title>
            </Helmet>
        </>
);
};

export default TreeDropdown;
