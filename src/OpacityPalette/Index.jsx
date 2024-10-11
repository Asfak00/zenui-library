import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import ColorCodeCopyModal from "./ColorCodeCopyModal.jsx";
import { RiImageAddLine } from "react-icons/ri";
import ColorPickerFromImage from "./ColorPickerFromImage.jsx";

const ShadePalette = () => {
    const [colors, setColors] = useState([
        '#FF5733', '#33FF57', '#3357FF', '#F5FF33',
        '#FF33A1', '#33FFC7', '#A133FF', '#FF6F33',
        '#6F33FF', '#FF3333', '#33FF33',
        '#3333FF', '#FF33FF', '#FF9933', '#33FF99',
        '#9933FF', '#FF3399', '#33CCFF', '#CCFF33',
    ]);
    const [colorInput, setColorInput] = useState('');
    const [isCopyClicked, setIsCopyClicked] = useState(false);
    const [clipboardColor, setClipboardColor] = useState({});
    const [invalidColorCode, setInvalidColorCode] = useState(false);
    const [image, setImage] = useState(null);
    const [isCustomPickerOpen, setIsCustomPickerOpen] = useState(false);

    const shadeLabels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    const generateShades = (baseColor) => {
        const color = tinycolor(baseColor);
        return shadeLabels.map(label => {
            let shade;
            if (label < 500) {
                shade = color.clone().lighten((500 - label) / 12);
            } else if (label > 500) {
                shade = color.clone().darken((label - 500) / 12);
            } else {
                shade = color.clone();
            }
            return shade;
        });
    };

    const addColor = () => {
        const color = tinycolor(colorInput);

        if (color.isValid()) {
            setColors([colorInput, ...colors]);
            setColorInput('');
        } else {
            setInvalidColorCode(true);
            setTimeout(() => {
                setInvalidColorCode(false);
            }, 5000);
        }
    };

    const copyToClipboard = (color) => {
        const hexCode = color.toHexString();
        const rgbCode = color.toRgbString();
        const hslCode = color.toHslString();

        setIsCopyClicked(true);
        setClipboardColor({
            hex: hexCode,
            rgb: rgbCode,
            hsl: hslCode,
        });
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            setImage(e.target.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }

        setIsCustomPickerOpen(true);

        event.target.value = '';
    };

    return (
        <>
            <section className="min-h-screen max-w-[1700px] mx-auto w-full pt-[2rem] 1024px:pt-[3rem] !px-8 425px:!px-10 relative">
                <h2 className="font-[600] text-[#0FABCA] uppercase text-[2rem] 425px:text-[2.5rem]">
                    ZenUI Color Palette
                </h2>

                <img src='https://i.ibb.co/K784XvR/Artist-Palette.png' alt='icon/image' className='absolute top-[-30px] 640px:top-[-100px] right-0 640px:left-[500px] w-[300px] opacity-5'/>

                <p className="text-text text-[0.9rem] mt-3 640px:mt-0">
                    Create Your Custom Color Palette. Design and Customize Your Unique Color Shades.
                </p>

                <p className="text-text text-[0.9rem] mt-6 w-full 640px:w-[70%]">
                    Customize Your Color Shades! Paste your color code to explore various shade levels. Instantly view and copy the corresponding hex, RGB, and HSL codes, making it easy to integrate your custom shades into any project.
                </p>

                <div className='flex items-center gap-[10px] mt-6'>
                    <div className="relative w-full 1024px:w-[50%]">
                        <input
                            className={`${invalidColorCode ? 'border-red-500 text-red-500' : 'border-border text-text'} w-full rounded-md border py-3 px-4 outline-none`}
                            placeholder="Paste color code here"
                            maxLength="50"
                            value={colorInput}
                            onChange={(e) => setColorInput(e.target.value)}
                        />

                        <button
                            onClick={addColor}
                            className="py-2 h-full text-[1rem] 640px:text-[1.1rem] px-3 640px:px-6 text-gray-500 hover:text-white transition-all duration-200 bg-gray-300 hover:bg-[#0FABCA] rounded-r-md absolute top-0 right-0"
                        >
                            Generate
                        </button>
                    </div>

                    <label htmlFor='uploadImage' className='py-[0.81rem] cursor-pointer text-[1.5rem] px-3 640px:px-8 text-gray-500 hover:text-white transition-all color-picker-upload-image-btn duration-200 bg-gray-300 hover:bg-[#0FABCA] rounded-md'>
                        <RiImageAddLine/>

                        <input accept="image/*" onChange={handleImageUpload} type='file' id='uploadImage' className='hidden'/>
                    </label>
                </div>

                {invalidColorCode && (
                    <p className='text-red-500 text-[0.9rem] mt-1'>Invalid color code</p>
                )}

                <div className="flex flex-col gap-5 mt-12 mb-12">
                    {colors.map((color, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex items-center">
                                {generateShades(color).map((shade, shadeIndex) => (
                                    <div
                                        key={shadeIndex}
                                        onClick={() => copyToClipboard(shade)}
                                        className={`${shadeIndex === 0 && 'rounded-l-md'} ${shadeIndex === 10 && 'rounded-r-md'} w-full codeBox hover:scale-[0.950] transition-all duration-200 h-[70px] cursor-pointer relative group`}
                                        style={{
                                            backgroundColor: shade.toHexString(),
                                        }}
                                    >
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <ColorCodeCopyModal isCopyClicked={isCopyClicked} setIsCopyClicked={setIsCopyClicked} clipboardColor={clipboardColor}/>

            <ColorPickerFromImage colors={colors} setColors={setColors} isCustomPickerOpen={isCustomPickerOpen} setIsCustomPickerOpen={setIsCustomPickerOpen} image={image} setImage={setImage}/>
        </>
    );
};

export default ShadePalette;