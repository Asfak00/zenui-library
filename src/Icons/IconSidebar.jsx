import React, { useState, useEffect } from 'react';

// react icons
import { FaFileDownload, FaRegCopy } from "react-icons/fa";
import {IoMdColorFill, IoMdDoneAll} from "react-icons/io";
import {FiMinus, FiPlus} from "react-icons/fi";
import PngFileIcon from "../SvgIcons/PngFileIcon.jsx";
import SvgFileIcon from "../SvgIcons/SvgFileIcon.jsx";
import {CgColorPicker} from "react-icons/cg";
import {MdOutlineRefresh} from "react-icons/md";
import TransparentIcon from "../SvgIcons/TransparentIcon.jsx";
import {IoColorFillOutline} from "react-icons/io5";

const IconSidebar = ({ sidebarOpen, setSidebarOpen, iconData, setSelectedIconData }) => {
    const [isCopied, setCopied] = useState(false);
    const [color, setColor] = useState('#616161');
    const [strokeColor, setStrokeColor] = useState('#000');
    const [size, setSize] = useState(50);
    const [updatedSvgCode, setUpdatedSvgCode] = useState('');
    const [isStrokeTransparent, setIsStrokeTransparent] = useState(false);
    const [isFillTransparent, setIsFillTransparent] = useState(false);

    const hasStrokeAttribute = (svgCode) => {
        return /stroke="[^"]*"/.test(svgCode)
    };
    const hasFillAttribute = (svgCode) => {
        /fill="[^"]*"/.test(svgCode)
    };


    useEffect(() => {
        if (!iconData || !iconData.iconCode) return;

        let svgCode = iconData.iconCode
            .replace(/<svg[^>]+>/, (match) =>
                match.replace(/width="[^"]*"/, `width="${size}"`)
                    .replace(/height="[^"]*"/, `height="${size}"`)
                    .replace(/fill="[^"]*"/g, `fill="${color}"`)
            );

            if (isFillTransparent) {
                svgCode = svgCode.replace(/fill="[^"]*"/g, 'fill="none"');
            } else {
                svgCode = svgCode.replace(/fill="[^"]*"/g, `fill="${color}"`);
            }

        // Handle stroke color
        if (hasStrokeAttribute(iconData.iconCode)) {
            if (isStrokeTransparent) {
                svgCode = svgCode.replace(/stroke="[^"]*"/g, 'stroke="none"');
            } else {
                svgCode = svgCode.replace(/stroke="[^"]*"/g, `stroke="${strokeColor}"`);
            }
        }

        setUpdatedSvgCode(svgCode);
    }, [color, size, strokeColor,isStrokeTransparent, isFillTransparent, iconData]);

    const handleCopySvgCode = () => {
        navigator.clipboard.writeText(updatedSvgCode);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    const handleDownloadSvg = () => {
        if (!iconData || !updatedSvgCode) {
            return;
        }
        const blob = new Blob([updatedSvgCode], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${iconData.name}.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };


    const handleDownloadPng = () => {
        if (!iconData || !updatedSvgCode) {
            return;
        }

        const img = new Image();
        img.src = 'data:image/svg+xml;base64,' + btoa(updatedSvgCode);
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);

            const pngDataUrl = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = pngDataUrl;
            link.download = `${iconData.name}.png`;

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);
        };
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest('.iconsSidebar') && !e.target.closest('.icon')) {
                setSidebarOpen(false);
                setSelectedIconData({});
                setColor('#616161')
                setSize(50)
                setStrokeColor('#000')
                setIsFillTransparent(false)
                setIsStrokeTransparent(false)
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [setSidebarOpen, setSelectedIconData]);


    const handleMiniIncrement = () => {
        if (size <= 200) {
            setSize(prevValue => prevValue + 1);
        } else {
            setSize(200);
        }
    }

    const handleMiniDecrement = () => {
        if (size >= 0) {
            setSize(prevValue => prevValue - 1);
        } else {
            setSize(null);
        }
    }

    const handleMiniInputValueChange = (e) => {
        const inputValue = Number(e.target.value);
        if (inputValue <= 200) {
            setSize(inputValue);
        } else {
            setSize(200);
        }
    }

    const handleColorIconClick = () => {
        document.getElementById('colorPickerInput').click()
    }

    const handleColorInputChange = (e) => {
        const color = e.target.value;

        setColor(color)

        const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

        if (hexColorRegex.test(color)) {
            setColor(color);
        }
    }

    const handleStrokeColorIconClick = () => {
        document.getElementById('StrokeColorPickerInput').click()
    }

    const handleStrokeColorInputChange = (e) => {
        const color = e.target.value;

        setStrokeColor(color)

        const hexColorRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

        if (hexColorRegex.test(color)) {
            setStrokeColor(color);
        }
    }

    const handleRefresh = () => {
        setColor('#616161')
        setSize(50)
        setStrokeColor('#000')
        setIsFillTransparent(false)
        setIsStrokeTransparent(false)
    }

    const handleFillColorChange = (e) => {
        setIsFillTransparent(false)
        setColor(e.target.value)
    }

    const handleStrokeColorChange = (e) => {
        setIsStrokeTransparent(false)
        setStrokeColor(e.target.value)
    }

    return (
        <aside className={`${sidebarOpen ? 'translate-x-0' : 'translate-x-[500px]'} w-[30%] bg-white fixed top-0 right-0 boxShadow min-h-screen transition-all z-30 duration-300 iconsSidebar pt-[7rem] px-12`}>
            <div className='flex items-center mb-4 justify-between'>
                <h1 className='text-[1.3rem] font-[500]'>{iconData.name}</h1>
                <MdOutlineRefresh className='text-[2.5rem] px-2 rounded-full hover:bg-gray-50 text-text cursor-pointer' onClick={handleRefresh}/>
            </div>

            <div className='grid grid-cols-2 gap-[20px] w-full'>
                <div
                    className=' w-full h-full sidebarIcon mx-auto bg-gray-50 rounded-md px-5 flex items-center justify-center'>
                    <div dangerouslySetInnerHTML={{__html: updatedSvgCode}}/>
                </div>

                <div className='flex flex-col gap-4'>
                    {
                        hasStrokeAttribute(iconData.iconCode) && (
                            <div className='flex flex-col gap-2'>
                                <span
                                    className='text-text flex items-center justify-between w-[80%] gap-[5px]'>
                                    Stroke Color:

                                    <div className='group relative'>
                                        <IoColorFillOutline className='text-[1.2rem] cursor-pointer' onClick={()=> setIsStrokeTransparent(true)}/>

                                        <div
                                            className="px-3 py-2 rounded text-secondary bg-gray-900 w-max absolute top-[-50px] right-[-44px] translate-y-[10px] opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 group-hover:translate-y-0 transition-all duration-200">
                                        <span
                                            className='w-[10px] h-[10px] rotate-[45deg] bg-gray-900 absolute bottom-[-5px] right-[50px]'></span>
                                        Transparent stroke color
                                    </div>
                                    </div>
                                </span>
                                <div
                                    className='flex relative items-center w-max border border-gray-200 rounded-md overflow-hidden'>
                                    <div className='relative'>
                                        <IoMdColorFill onClick={handleStrokeColorIconClick}
                                                       className={`py-2.5 cursor-pointer px-2 bg-gray-50 text-text text-[2.5rem]`}/>
                                        <input
                                            type='color'
                                            value={strokeColor}
                                            id='StrokeColorPickerInput'
                                            className=' absolute top-12 w-0 h-0 right-0'
                                            onChange={handleStrokeColorChange}
                                        />
                                    </div>
                                    <input type='text' maxLength='8' value={strokeColor} onInput={handleStrokeColorInputChange}
                                           className='px-3 w-[100px] text-gray-500 focus:ring-0 outline-none'/>
                                </div>
                            </div>
                        )
                    }


                    <div className='flex flex-col gap-2'>
                        <span className='text-text flex items-center justify-between w-[80%] gap-[5px]'>
                            Fill Color:
                            <div className='group relative'>
                                        <IoColorFillOutline className='text-[1.2rem] cursor-pointer' onClick={()=> setIsFillTransparent(true)}/>

                                        <div
                                            className="px-3 py-2 rounded text-secondary bg-gray-900 w-max absolute top-[-50px] right-[-44px] translate-y-[10px] opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 group-hover:translate-y-0 transition-all duration-200">
                                        <span
                                            className='w-[10px] h-[10px] rotate-[45deg] bg-gray-900 absolute bottom-[-5px] right-[50px]'></span>
                                        Transparent Fill color
                                    </div>
                            </div>
                        </span>
                        <div
                            className='flex relative items-center w-max border border-gray-200 rounded-md overflow-hidden'>
                            <div className='relative'>
                                <IoMdColorFill onClick={handleColorIconClick}
                                               className={`py-2.5 cursor-pointer px-2 bg-gray-50 text-text text-[2.5rem]`}/>
                                <input
                                    type='color'
                                    value={color}
                                    id='colorPickerInput'
                                    className=' absolute top-12 w-0 h-0 right-0'
                                    onChange={handleFillColorChange}
                                />
                            </div>
                            <input type='text' maxLength='8' value={color} onInput={handleColorInputChange}
                                   className='px-3 w-[100px] text-gray-500 focus:ring-0 outline-none'/>
                        </div>
                    </div>

                    <label className='flex flex-col gap-2'>
                        <span className='text-text'>Size:</span>
                        <div className='flex items-center w-max border border-gray-200 rounded-md'>
                            <button className='bg-gray-100 p-[11px] rounded-l-md text-gray-700 text-[1.1rem]'
                                    onClick={handleMiniDecrement}><FiMinus/></button>
                            <input type='number'
                                   value={size}
                                   max='200'
                                   min='0'
                                   className='w-[60px] py-[7px] outline-none focus:ring-0 border-none text-center text-[1.1rem]'
                                   onInput={handleMiniInputValueChange}/>
                            <button className='bg-gray-100 p-[11px] rounded-r-md text-gray-700 text-[1.1rem]'
                                    onClick={handleMiniIncrement}><FiPlus/></button>
                        </div>
                    </label>
                </div>
            </div>

            <div className='mt-8'>
                <div className='flex items-center justify-between w-full gap-[20px]'>
                    <button
                        type='button'
                        className='w-full py-2.5 px-2 border border-border text-text rounded-md flex items-center gap-[8px] justify-center active:scale-[0.9] transition-all duration-200'
                        onClick={handleDownloadSvg}
                    >
                        <SvgFileIcon/> Download Svg
                    </button>

                    <button
                        onClick={handleDownloadPng}
                        className='w-full py-2.5 px-2 border border-border text-text rounded-md flex items-center gap-[8px] justify-center active:scale-[0.9] transition-all duration-200'>
                        <PngFileIcon/> Download Png
                    </button>
                </div>

                <button
                    type='button'
                    className='w-full mt-5 py-2.5 px-2 border bg-primary text-secondary rounded-md flex items-center gap-[8px] justify-center active:scale-[0.9] transition-all duration-200'
                    onClick={handleCopySvgCode}
                >
                    {isCopied ? <IoMdDoneAll className='text-[1.1rem]'/> : <FaRegCopy/>}
                    Copy Svg
                </button>
            </div>
        </aside>
    );
};

export default IconSidebar;
