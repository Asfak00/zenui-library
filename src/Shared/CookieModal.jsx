
import React, {useEffect, useState} from "react";

const CookieModal = ({isModalOpen, setisModalOpen}) => {

    useEffect(()=>{
        if (!localStorage.getItem("zenUICookiesAccepted")) {
            setTimeout(()=>{
                setisModalOpen(true)
            }, 6000)
        }
    },[])

    const acceptCookie = ()=>{
        localStorage.setItem("zenUICookiesAccepted", "true");
        setisModalOpen(false)
    }

    const cancelCookie = ()=>{
        localStorage.setItem("zenUICookiesAccepted", "true");
        setisModalOpen(false)
    }

    const getTheRouteName = () => {
        return window.location.pathname
    }

    return (
        <>
                <div
                    className={`${
                        isModalOpen ? " visible" : " invisible"
                    } w-full h-screen fixed flex items-end justify-end top-0 left-0 z-50   transition-all duration-300`}
                >
                    <div
                        className={`${
                            isModalOpen
                                ? " translate-y-[0px] opacity-100"
                                : " translate-y-[200px] opacity-0"
                        } w-full ${getTheRouteName() === '/' || getTheRouteName() === '/about-us' ? 'bg-[#0b0842]' : 'bg-[#fff]'} transition-all shadow-primary duration-300 mx-auto mt-8`}
                    >
                        <div className="flex justify-between 1024px:flex-row flex-col w-full gap-5 px-5 1024px:px-8 1024px:py-12 py-5">
                            <p className={`text-[1.2rem] ${getTheRouteName() === '/' || getTheRouteName() === '/about-us' ? ' text-[#9caebc]' : ' text-text'} 1024px:w-[70%]`}>
                                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. To learn more about how we use cookies and your options, please visit our <a href="/privacy-policy" className='text-blue-600 underline'>Privacy Policy</a>.
                            </p>

                            <div className="flex items-end justify-end gap-4 flex-col w-full 1024px:w-[20%]">
                                <button
                                    className="py-2 w-full px-4 rounded-md outline-none bg-[#3B9DF8] text-[#fff]"
                                    onClick={acceptCookie}
                                >
                                    Accept
                                </button>
                                <button
                                    className={`py-2 w-full px-4 border rounded-md outline-none  ${getTheRouteName() === '/' || getTheRouteName() === '/about-us' ? 'text-[#d1d1d1] border-[#d1d1d1]' : 'text-text border-text'}`}
                                    onClick={cancelCookie}
                                >
                                    Decline
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default CookieModal;
