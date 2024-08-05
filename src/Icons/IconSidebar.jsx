import React, {useState} from 'react';

// react icons
import {FaFileDownload, FaRegCopy} from "react-icons/fa";
import {IoMdDoneAll} from "react-icons/io";

const IconSidebar = ({sidebarOpen, setSidebarOpen, iconData, setSelectedIconData}) => {
    const[isCopied, setCopied] = useState(false);

    document.addEventListener('click', (e)=> {
        if(!e.target.closest('.iconsSidebar') && !e.target.closest('.icon')){
            setSidebarOpen(false)
            setSelectedIconData({})
        }
    })

    const handleCopySvgCode = () => {
        navigator.clipboard.writeText(iconData.iconCode)
        setCopied(true)
        setTimeout(()=>{
            setCopied(false)
        }, 1500)
    }

    const handleDownload = () => {
        if (!iconData || !iconData.iconCode) {
            return;
        }
        const blob = new Blob([iconData.iconCode], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${iconData.name}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <aside className={`${sidebarOpen ? 'translate-x-0' : 'translate-x-[500px]'} w-[30%] bg-white fixed top-0 right-0 boxShadow min-h-screen transition-all z-30 duration-300 iconsSidebar pt-[7rem] px-12`}>

            <div className='w-[80%] sidebarIcon h-[150px] mx-auto bg-gray-50 rounded-md px-5 flex items-center justify-center' dangerouslySetInnerHTML={{ __html: iconData.iconCode }}>
            </div>

            <div className='flex items-center justify-between w-full gap-[20px] mt-8'>
                <button type='button' className=' w-full py-2 px-2 bg-primary text-secondary rounded-md flex items-center gap-[8px] justify-center active:scale-[0.9] transition-all duration-200' onClick={handleCopySvgCode}>
                    {
                        isCopied ? (
                                <IoMdDoneAll className='text-[1.1rem]'/>
                        ) : (
                            <FaRegCopy/>
                        )
                    }
                    Copy Svg
                </button>
                <button type='button' className=' w-full py-2 px-2 bg-primary text-secondary rounded-md flex items-center gap-[8px] justify-center active:scale-[0.9] transition-all duration-200' onClick={handleDownload}><FaFileDownload /> Download File</button>
            </div>
        </aside>
    );
};

export default IconSidebar;
