import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ShowCode from "../../../../../Shared/ShowCode";
import ContentHeader from "../../../../../Shared/ContentHeader";
import { Helmet } from "react-helmet";
import Showcode from "../../../../../Shared/ShowCode.jsx";

const AuthButton = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // rgb border
    const [rgbBorderPreview, setRgbBorderPreview] = useState(true);
    const [rgbBorderCode, setRgbBorderCode] = useState(false);

    const handleRgbBorderPreview = () => {
        setRgbBorderPreview(true);
        setRgbBorderCode(false);
    };

    const handleRgbBorderCode = () => {
        setRgbBorderCode(true);
        setRgbBorderPreview(false);
    };

    // animated border
    const [animatedBorderPreview, setAnimatedBorderPreview] = useState(true);
    const [animatedBorderCode, setAnimatedBorderCode] = useState(false);

    const handleAnimatedBorderPreview = () => {
        setAnimatedBorderPreview(true);
        setAnimatedBorderCode(false);
    };

    const handldeAnimatedBorderCode = () => {
        setAnimatedBorderCode(true);
        setAnimatedBorderPreview(false);
    };

    // animated border
    const [animatedBgPreview, setAnimatedBgPreview] = useState(true);
    const [animatedBgCode, setAnimatedBgCode] = useState(false);

    const handleAnimatedBgPreview = () => {
        setAnimatedBgPreview(true);
        setAnimatedBgCode(false);
    };

    const handldeAnimatedBgCode = () => {
        setAnimatedBgCode(true);
        setAnimatedBgPreview(false);
    };

    // background animated button
    const [bgAnimatedPreview, setBgAnimatedPreview] = useState(true);
    const [bgAnimatedCode, setBgAnimatedCode] = useState(false);

    const handleBgAnimatedCode = () => {
        setBgAnimatedCode(true);
        setBgAnimatedPreview(false);
    };

    const handleBgAnimatedPreview = () => {
        setBgAnimatedPreview(true);
        setBgAnimatedCode(false);
    };

    return (
        <aside className="flex items-start justify-between gap-6 pt-[9.5rem] !px-5 425px:!px-10 1024px:!pl-[5rem] 1024px:pt-[4.5rem]">
            <div>
                <ContentHeader text={"login with google"} id={"login_with_google"}/>

                <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon
                    clicking.
                </p>

                <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${rgbBorderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                rgbBorderPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleRgbBorderPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                rgbBorderCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleRgbBorderCode}
                        >
                            Code
                        </button>
                    </div>
                    {rgbBorderPreview && (
                        <div className="p-8 mb-4 flex flex-col flex-wrap items-center gap-5 justify-center">
                            <button
                                className='border border-border rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-text hover:bg-gray-50 transition-all duration-200'>
                                <img src='https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png' alt='google logo'
                                     className='w-[23px]'/>
                                Sign in with Google
                            </button>

                            <button
                                className='bg-primary text-white rounded-md py-1 pl-1 pr-4 flex items-center gap-[10px] text-[1rem] hover:bg-blue-500 transition-all duration-200'>
                                <div className='py-2 px-2.5 rounded-l-md bg-white'>
                                    <img src='https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png'
                                         alt='google logo'
                                         className='w-[23px]'/>
                                </div>
                                Sign in with Google
                            </button>

                            <button
                                className='bg-primary text-white rounded-md py-[5px] pl-[5px] pr-4 flex items-center gap-[10px] text-[1rem] hover:bg-blue-500 transition-all duration-200'>
                                <div className='p-2 rounded-full bg-white'>
                                    <img src='https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png'
                                         alt='google logo'
                                         className='w-[23px]'/>
                                </div>
                                Sign in with Google
                            </button>
                        </div>
                    )}

                    {rgbBorderCode && <ShowCode code='
<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
      Click Me
</button>

<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
    Click Me
</button>
          '/>}
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"login with apple"} id={"login_with_apple"}/>
                </div>

                <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon
                    clicking.
                </p>

                <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${rgbBorderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                rgbBorderPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleRgbBorderPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                rgbBorderCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleRgbBorderCode}
                        >
                            Code
                        </button>
                    </div>
                    {rgbBorderPreview && (
                        <div className="p-8 mb-4 flex flex-col flex-wrap items-center gap-5 justify-center">
                            <button
                                className='bg-black text-white rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://i.ibb.co/xFjCsGm/download-1-removebg-preview.png' alt='google logo'
                                     className='w-[23px]'/>
                                Continue with Apple
                            </button>

                            <button
                                className='border border-border text-text rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] hover:bg-gray-50 transition-all duration-200'>
                                <img src='https://i.ibb.co/6NFjc6z/download-removebg-preview.png' alt='google logo'
                                     className='w-[23px]'/>
                                Continue with Apple
                            </button>
                        </div>
                    )}

                    {rgbBorderCode && <ShowCode code='
<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
      Click Me
</button>

<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
    Click Me
</button>
          '/>}
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Social Login background"} id={"social_login_background"}/>
                </div>

                <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon
                    clicking.
                </p>

                <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${rgbBorderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                rgbBorderPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleRgbBorderPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                rgbBorderCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleRgbBorderCode}
                        >
                            Code
                        </button>
                    </div>
                    {rgbBorderPreview && (
                        <div className="p-8 mb-4 flex flex-col flex-wrap items-center gap-5 justify-center">
                            <button
                                className='bg-black text-white rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://i.ibb.co/w4xtRf9/download-10-removebg-preview.png' alt='Github logo'
                                     className='w-[35px]'/>
                                Continue with Github
                            </button>

                            <button
                                className='bg-[#0a66c2] text-white rounded-md py-[11px] px-[15px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://assets.website-files.com/632c941ea9199f8985f3fd52/632cacdc3a7f08d5fb21fa73_linkedin-white.svg' alt='Linkedin logo'
                                     className='w-[25px]'/>
                                Continue with Linkedin
                            </button>

                            <button
                                className='bg-[#ea4c89] text-white rounded-md py-[11px] px-[19px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://i.ibb.co/8BcCFQv/download-11-removebg-preview.png' alt='Dribble logo'
                                     className='w-[25px]'/>
                                Continue with Dribble
                            </button>

                            <button
                                className='bg-[#1777f2] text-white rounded-md py-[11px] px-[10px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://i.ibb.co/GP1q2C7/download-12-removebg-preview.png' alt='Facebook logo'
                                     className='w-[25px]'/>
                                Continue with Facebook
                            </button>

                            <button
                                className='bg-[#1db954] text-white rounded-md py-[11px] px-[19px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://assets.website-files.com/632c941ea9199f8985f3fd52/632cacdbd49f28d441099203_spotify-white.svg' alt='Spotify logo'
                                     className='w-[25px]'/>
                                Continue with Spotify
                            </button>

                            <button
                                className='bg-[#2f2f2f] text-white rounded-md py-[11px] px-[10px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c4b20dd0430d840a26_microsoft.svg' alt='Microsoft logo'
                                     className='w-[25px]'/>
                                Continue with Microsoft
                            </button>
                        </div>
                    )}

                    {rgbBorderCode && <ShowCode code='
<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
      Click Me
</button>

<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
    Click Me
</button>
          '/>}
                </div>

                <div className='mt-8'>
                    <ContentHeader text={"Social Login bordered"} id={"social_login_bordered"}/>
                </div>

                <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                    This is an animated button on click component. Enjoy dynamic responses with captivating animations upon
                    clicking.
                </p>

                <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                    <div className="relative">
                        <div
                            className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${rgbBorderPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
                        <button
                            className={`${
                                rgbBorderPreview && "text-tabTextColor"
                            } px-6 py-2 border-b z-[2] relative text-text border-border`}
                            onClick={handleRgbBorderPreview}
                        >
                            Preview
                        </button>
                        <button
                            className={`${
                                rgbBorderCode && "text-tabTextColor"
                            } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                            onClick={handleRgbBorderCode}
                        >
                            Code
                        </button>
                    </div>
                    {rgbBorderPreview && (
                        <div className="p-8 mb-4 flex flex-col flex-wrap items-center gap-5 justify-center">
                            <button
                                className='border border-black text-black rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c46041d682027a3c2a_github.svg' alt='Github logo'
                                     className='w-[30px]'/>
                                Continue with Github
                            </button>

                            <button
                                className='border border-[#0a66c2] text-[#0a66c2] rounded-md py-[11px] px-[12px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c4b20dd0e861840a27_linkedin.svg' alt='Linkedin logo'
                                     className='w-[25px]'/>
                                Continue with Linkedin
                            </button>

                            <button
                                className='border border-[#ea4c89] text-[#ea4c89] rounded-md py-[11px] px-[16px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://assets.website-files.com/632c941ea9199f8985f3fd52/632ca01585cf323fdd614a81_dribbble-svgrepo-com.svg' alt='Dribble logo'
                                     className='w-[25px]'/>
                                Continue with Dribble
                            </button>

                            <button
                                className='border border-[#1777f2] text-[#1777f2] rounded-md py-[11px] px-[7px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://assets.website-files.com/632c941ea9199f8985f3fd52/632c960d4839cf20aeafcad2_facebook.svg' alt='Facebook logo'
                                     className='w-[25px]'/>
                                Continue with Facebook
                            </button>

                            <button
                                className='border border-[#1db954] text-[#1db954] rounded-md py-[11px] px-[16px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c4c75f2ea0362f20b7_spotify.svg' alt='Spotify logo'
                                     className='w-[25px]'/>
                                Continue with Spotify
                            </button>

                            <button
                                className='border border-[#2f2f2f] text-[#2f2f2f] rounded-md py-[11px] px-[7px] flex items-center gap-[10px] text-[1rem] '>
                                <img src='https://assets.website-files.com/632c941ea9199f8985f3fd52/632c95c4b20dd0430d840a26_microsoft.svg' alt='Microsoft logo'
                                     className='w-[25px]'/>
                                Continue with Microsoft
                            </button>
                        </div>
                    )}

                    {rgbBorderCode && <ShowCode code='
<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded active:scale-[0.9] transition-all duration-300">
      Click Me
</button>

<button className="px-6 py-3 bg-primary border-none outline-none text-secondary text-[1rem] rounded transition-all duration-500 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ffffffb4] before:translate-x-[-150px] before:rounded overflow-hidden active:before:animate-ping active:before:translate-x-[0px]">
    Click Me
</button>
          '/>}
                </div>

                <OverviewFooter/>
            </div>

            <div className="1024px:flex hidden flex-col gap-4 sticky top-20 right-0 w-[40%]">
                <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                    CONTENTS
                </h2>
                <a
                    href="#login_with_google"
                    className={`${
                        contentActiveTab === 1 && "!text-primary !border-primary"
                    } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                    onClick={() => setContentActiveTab(1)}
                >
                    Login With Google
                </a>
                <a
                    href="#login_with_apple"
                    className={`${
                        contentActiveTab === 2 && "!text-primary !border-primary"
                    } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                    onClick={() => setContentActiveTab(2)}
                >
                    Login With Apple
                </a>
                <a
                    href="#social_login_background"
                    className={`${
                        contentActiveTab === 3 && "!text-primary !border-primary"
                    } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                    onClick={() => setContentActiveTab(3)}
                >
                    Social Login Background
                </a>
                <a
                    href="#social_login_bordered"
                    className={`${
                        contentActiveTab === 4 && "!text-primary !border-primary"
                    } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                    onClick={() => setContentActiveTab(4)}
                >
                    Social Login Bordered
                </a>
            </div>
            <Helmet>
                <title>Buttons - Animated Button</title>
            </Helmet>
        </aside>
    );
};

export default AuthButton;
