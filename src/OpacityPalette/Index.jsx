import React, { useState } from 'react';
import tinycolor from 'tinycolor2';
import ColorCodeCopyModal from "./ColorCodeCopyModal.jsx";

const OpacityPalette = () => {
    const [colors, setColors] = useState([
        '#FF5733', '#33FF57', '#3357FF', '#F5FF33',
        '#FF33A1', '#33FFC7', '#A133FF', '#FF6F33',
        '#33FF6F', '#6F33FF', '#FF3333', '#33FF33',
        '#3333FF', '#FF33FF', '#FF9933', '#33FF99',
        '#9933FF', '#FF3399', '#33CCFF', '#CCFF33',
        '#FFCC33', '#33CC33', '#CC33FF', '#33FFCC',
        '#FF6633', '#66FF33', '#3366FF', '#FF3366',
        '#66CCFF', '#FF66CC', '#CCFF66', '#66FF66',
        '#FF6666', '#6666FF', '#66FF99', '#99FF66'
    ]);
    const [colorInput, setColorInput] = useState('');
    const [isCopyClicked, setIsCopyClicked] = useState(false);
    const [clipboardColor, setClipboardColor] = useState({});
    const [invalidColorCode, setInvalidCodeCode] = useState(false);

    const addColor = () => {
        const color = tinycolor(colorInput);

        if (color.isValid()) {
            setColors([colorInput, ...colors]);
            setColorInput('');
        } else {
            setInvalidCodeCode(true)
            setTimeout(()=>{
                setInvalidCodeCode(false)
            }, 5000)
        }
    };

    const copyToClipboard = (color, opacity) => {
        const colorWithOpacity = tinycolor(color).setAlpha(opacity);

        const hexCode = colorWithOpacity.toHexString();
        const rgbCode = colorWithOpacity.toRgbString();
        const hslCode = colorWithOpacity.toHslString();

        setIsCopyClicked(true);

        setClipboardColor({
            hex: hexCode,
            rgb: rgbCode,
            hsl: hslCode,
        })
    };

    return (
        <>
            <section className="min-h-screen w-full pt-[9.5rem] 1024px:pt-[7rem] !px-5 425px:!px-10 relative">
                <h2 className="font-[600] text-[#0471d6] uppercase text-[2rem] 425px:text-[2.5rem]">
                    ZenUI Opacity Palette
                </h2>

                <img src='https://i.ibb.co/K784XvR/Artist-Palette.png' alt='icon/image' className='absolute top-[0px] left-[500px] w-[300px] opacity-5'/>

                <p className="text-text text-[0.9rem]">
                    Create Your Custom Color Opacity Palette. Design and Customize Your Unique Color Shades.
                </p>

                <p className="text-text text-[0.9rem] mt-6 w-[70%]">
                    Customize Your Color Opacity! Paste your color code to explore various opacity levels. Instantly view and copy the corresponding hex, RGB, and HSL codes, making it easy to integrate your custom shades into any project.
                </p>

                <div className="mt-6 relative w-[50%]">
                    <input
                        className={`${invalidColorCode ? 'border-red-500 text-red-500' : 'border-border text-text'} w-full rounded-md border py-3 px-4 focus:outline-2 focus:outline-primary`}
                        placeholder="Paste color code here"
                        maxLength="50"
                        value={colorInput}
                        onChange={(e) => setColorInput(e.target.value)}
                    />

                    <button
                        onClick={addColor}
                        className="py-2 h-full text-[1.1rem] px-6 text-gray-500 hover:text-white transition-all duration-200 bg-gray-300 hover:bg-primary rounded-r-md absolute top-0 right-0"
                    >
                        Generate
                    </button>
                </div>
                {
                    invalidColorCode && (
                        <p className='text-red-500 text-[0.9rem] mt-1'>Invalid color code</p>
                    )
                }

                <div className="flex flex-col gap-5 mt-12 mb-12">
                    {colors.map((color, index) => (
                        <div key={index} className="flex items-center">
                            {[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].map((opacity) => (
                                <div
                                    key={opacity}
                                    onClick={() => copyToClipboard(color, opacity)}
                                    className="w-full codeBox hover:scale-[0.950] transition-all duration-200 h-[70px] cursor-pointer"
                                    style={{
                                        backgroundColor: tinycolor(color).setAlpha(opacity).toRgbString(),
                                    }}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <ColorCodeCopyModal isCopyClicked={isCopyClicked} setIsCopyClicked={setIsCopyClicked} clipboardColor={clipboardColor}/>
        </>
    );
};

export default OpacityPalette;
