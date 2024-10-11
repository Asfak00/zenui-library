import React, { useState } from "react";

// react helmet
import { Helmet } from "react-helmet";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";
import Showcode from "../../../../../Shared/ShowCode";

// icons
import { MdOutlineMail } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import {FaRegComment, FaRegFileAlt} from "react-icons/fa";

const Timeline = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // milestone timeline
    const [milestoneTimelinePreview, setMilestoneTimelinePreview] = useState(true);
    const [milestoneTimelineCode, setMilestoneTimelineCode] = useState(false);

    const handleMilestoneTimelinePreview = () => {
        setMilestoneTimelinePreview(true);
        setMilestoneTimelineCode(false);
    };

    const handleMilestoneTimelineCode = () => {
        setMilestoneTimelineCode(true);
        setMilestoneTimelinePreview(false);
    };

    // cartBadgePreview
    const [workHistoryPreview, setWorkHistoryPreview] = useState(true);
    const [workHistoryCode, setWorkHistoryCode] = useState(false);

    const handleWorkHistoryPreview = () => {
        setWorkHistoryPreview(true);
        setWorkHistoryCode(false);
    };

    const handleWorkHistoryCode = () => {
        setWorkHistoryCode(true);
        setWorkHistoryPreview(false);
    };

    const milestones = [
        { date: 'January 2024', title: 'Project Kickoff', description: 'Initial planning and kickoff meeting.' },
        { date: 'February 2024', title: 'Design Phase', description: 'Finalizing designs and mockups.' },
        { date: 'March 2024', title: 'Development Phase', description: 'Starting the development of the project.' },
        { date: 'April 2024', title: 'Testing Phase', description: 'Testing and quality assurance.' },
        { date: 'May 2024', title: 'Launch', description: 'Official project launch.' },
    ];

    const workHistorys = [
        {
            date: 'Jan 22',
            title: 'Posted assignments of work',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.',
            commentBtn: true,
            fileBtn: true
        },
        {
            date: 'Dec 12',
            title: 'Uploaded Assignments File',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.',
            commentBtn: false,
            fileBtn: false
        },
        {
            date: 'Nov 18',
            title: 'Asked to bring good stuff college',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.',
            commentBtn: true,
            fileBtn: true
        },
        {
            date: 'Nov 04',
            title: 'Presentation Requirement',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.',
            commentBtn: true,
            fileBtn: false
        },
        {
            date: 'Oct 15',
            title: 'File handouts',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.',
            commentBtn: false,
            fileBtn: false
        },

    ]

    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>
                    <ContentHeader text={"milestone timeline"} id={"milestone_timeline"} />

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A milestone timeline highlights key events or achievements in a project, visually tracking important deadlines and accomplishments along a chronological path.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${milestoneTimelinePreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    milestoneTimelinePreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleMilestoneTimelinePreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    milestoneTimelineCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleMilestoneTimelineCode}
                            >
                                Code
                            </button>
                        </div>
                        {milestoneTimelinePreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="max-w-4xl mx-auto p-6">
                                    <h1 className="text-3xl font-bold mb-16 text-center">Milestone Timeline</h1>
                                    <div className="relative border-l border-gray-300">
                                        {milestones.map((milestone, index) => (
                                            <div key={index} className="mb-8">
                                                <div className="absolute w-5 h-5 bg-primary z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2"/>
                                                <div className="pl-6">
                                                    <div className="flex 640px:items-center 640px:flex-row flex-col">
                                                        <div
                                                            className="text-primary  font-semibold">{milestone.date}</div>
                                                        <div
                                                            className="640px:ml-4 text-text text-lg font-semibold">{milestone.title}</div>
                                                    </div>
                                                    <p className="text-gray-600 mt-1">{milestone.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {milestoneTimelineCode && (
                            <Showcode
                                code='
import React from "react";

const Timeline = () => {

    const milestones = [
        { date: "January 2024", title: "Project Kickoff", description: "Initial planning and kickoff meeting." },
        { date: "February 2024", title: "Design Phase", description: "Finalizing designs and mockups." },
        { date: "March 2024", title: "Development Phase", description: "Starting the development of the project." },
        { date: "April 2024", title: "Testing Phase", description: "Testing and quality assurance." },
        { date: "May 2024", title: "Launch", description: "Official project launch." },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-16 text-center">Milestone Timeline</h1>
            <div className="relative border-l border-gray-300">
                {milestones.map((milestone, index) => (
                    <div key={index} className="mb-8">
                        <div
                            className="absolute w-5 h-5 bg-primary z-10 border-4 border-white rounded-full left-[0px] transform -translate-x-1/2 -translate-y-1/2"/>
                        <div className="pl-6">
                            <div className="flex sm:items-center sm:flex-row flex-col">
                                <div
                                    className="text-primary  font-semibold">{milestone.date}</div>
                                <div
                                    className="sm:ml-4 text-text text-lg font-semibold">{milestone.title}</div>
                            </div>
                            <p className="text-gray-600 mt-1">{milestone.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
          '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"work progress timeline"} id={"work_progress_timeline"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        A work progress timeline visually represents the stages of a project or task over time, showing milestones, completed steps, and upcoming phases in a sequential order.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${workHistoryPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[107px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    workHistoryPreview && "text-tabTextColor"
                                } px-6 py-2 border-b z-[2] relative text-text border-border`}
                                onClick={handleWorkHistoryPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    workHistoryCode && "text-tabTextColor"
                                } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                                onClick={handleWorkHistoryCode}
                            >
                                Code
                            </button>
                        </div>
                        {workHistoryPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="w-[55%] 640px:w-[70%] mx-auto">
                                    <h1 className="text-3xl font-bold mb-16 text-center">Work Progress</h1>
                                    <div className="relative border-l border-gray-300 w-full">
                                        {workHistorys?.map((milestone, index) => (
                                            <div key={index} className="mb-8">
                                                <div className="pl-6 w-full">
                                                    <div className="flex items-center">
                                                        <div className="text-gray-600 text-[1rem] absolute left-[-75px]">{milestone.date}</div>
                                                        <div
                                                            className="text-text text-lg">{milestone.title}</div>
                                                    </div>
                                                    <p className="text-gray-500 mt-1 text-[0.9rem]">{milestone.description}</p>

                                                    <div className='flex flex-wrap items-center gap-[20px] mt-[10px]'>
                                                        {
                                                            milestone.commentBtn && (
                                                                <button
                                                                    className='flex items-center gap-[9px] text-gray-400 rounded-md px-4 py-1 text-[0.9rem]'>
                                                                    <FaRegComment/> 5 comments
                                                                </button>
                                                            )
                                                        }

                                                        {
                                                            milestone.fileBtn && (
                                                                <button
                                                                    className='flex items-center gap-[9px] border-primary border  text-primary rounded-md px-4 py-1 text-[0.9rem]'>
                                                                    <FaRegFileAlt/> FantechProp..
                                                                </button>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {workHistoryCode && (
                            <Showcode
                                code='
import React from "react";

// react icons
import {FaRegComment, FaRegFileAlt} from "react-icons/fa";

const Timeline = () => {

    const workHistory = [
        {
            date: "Jan 22",
            title: "Posted assignments of work",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
            commentBtn: true,
            fileBtn: true
        },
        {
            date: "Dec 12",
            title: "Uploaded Assignments File",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
            commentBtn: false,
            fileBtn: false
        },
        {
            date: "Nov 18",
            title: "Asked to bring good stuff college",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
            commentBtn: true,
            fileBtn: true
        },
        {
            date: "Nov 04",
            title: "Presentation Requirement",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
            commentBtn: true,
            fileBtn: false
        },
        {
            date: "Oct 15",
            title: "File handouts",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas.",
            commentBtn: false,
            fileBtn: false
        },

    ]

    return (
        <div className="w-[55%] sm:w-[70%] mx-auto">
            <h1 className="text-3xl font-bold mb-16 text-center">Work Progress</h1>
            <div className="relative border-l border-gray-300 w-full">
                {workHistory?.map((milestone, index) => (
                    <div key={index} className="mb-8">
                        <div className="pl-6 w-full">
                            <div className="flex items-center">
                                <div className="text-gray-600 text-[1rem] absolute left-[-75px]">{milestone.date}</div>
                                <div
                                    className="text-text text-lg">{milestone.title}</div>
                            </div>
                            <p className="text-gray-500 mt-1 text-[0.9rem]">{milestone.description}</p>

                            <div className="flex flex-wrap items-center gap-[20px] mt-[10px]">
                                {
                                    milestone.commentBtn && (
                                        <button
                                            className="flex items-center gap-[9px] text-gray-400 rounded-md px-4 py-1 text-[0.9rem]">
                                            <FaRegComment/> 5 comments
                                        </button>
                                    )
                                }

                                {
                                    milestone.fileBtn && (
                                        <button
                                            className="flex items-center gap-[9px] border-primary border  text-primary rounded-md px-4 py-1 text-[0.9rem]">
                                            <FaRegFileAlt/> FantechProp..
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
          '
                            />
                        )}
                    </div>

                    <OverviewFooter/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[48%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#message_badge"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        milestone timeline
                    </a>
                    <a
                        href="#cart_badge"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] capitalize text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        work progress timeline
                    </a>
                </div>
            </aside>
            <Helmet>
                <title>Data Display - Timeline</title>
            </Helmet>
        </>
    );
};

export default Timeline;
