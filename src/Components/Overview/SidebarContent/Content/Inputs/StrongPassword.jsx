import React, { useState , useRef} from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {MdDone, MdErrorOutline} from "react-icons/md";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import {RxCross1} from "react-icons/rx";

const OtpInput = () => {
    const [contentActiveTab, setContentActiveTab] = useState(0);

    // strong password checking input
    const [strongPasswordCheckingPreview, setStrongPasswordCheckingPreview] = useState(true);
    const [StrongPasswordCheckingCode, setStrongPasswordCheckingCode] = useState(false);

    const handleStrongPasswordCheckingPreview = () => {
        setStrongPasswordCheckingPreview(true);
        setStrongPasswordCheckingCode(false);
    };

    const handleStrongPasswordCheckingCode = () => {
        setStrongPasswordCheckingCode(true);
        setStrongPasswordCheckingPreview(false);
    };

    // check by indicator
    const [checkIndicatorPreview, setCheckIndicatorPreview] = useState(true);
    const [checkIndicatorCode, setCheckIndicatorCode] = useState(false);

    const handleCheckIndicatorPreview = () => {
        setCheckIndicatorPreview(true);
        setCheckIndicatorCode(false);
    };

    const handleCheckIndicatorCode = () => {
        setCheckIndicatorCode(true);
        setCheckIndicatorPreview(false);
    };

    // checkHint
    const [checkHintPreview, setCheckHintPreview] = useState(true);
    const [checkHintCode, setCheckHintCode] = useState(false);

    const handleCheckHintPreview = () => {
        setCheckHintPreview(true);
        setCheckHintCode(false);
    };

    const handleCheckHintCode = () => {
        setCheckHintCode(true);
        setCheckHintPreview(false);
    };

    // hintDropdown
    const [hintDropdownPreview, setHintDropdownPreview] = useState(true);
    const [hintDropdownCode, setHintDropdownCode] = useState(false);

    const handleHintDropdownPreview = () => {
        setHintDropdownPreview(true);
        setHintDropdownCode(false);
    };

    const handleHintDropdownCode = () => {
        setHintDropdownCode(true);
        setHintDropdownPreview(false);
    };

    // actions
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [StrongPassword, setStrongPassword] = useState('');
    const [signal, setSignal] = useState('');

    const handleStrongPasswordCheckingChange = (e) => {
        const password = e.target.value;
        setStrongPassword(password);

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if(!hasLowerCase){
            setSignal('lowercase-error');
        } else if (!hasUpperCase) {
            setSignal('uppercase-error');
        } else if(!hasNumber) {
            setSignal('number-error');
        } else if(!hasSymbol) {
            setSignal('symbol-error');
        } else if (password.length < 8) {
            setSignal('length-error');
        } else {
            setSignal('strong');
        }
    }

    const getErrorText = () => {
        switch(signal){
            case 'length-error':
                return 'Password must be at least 8 characters long.'
                break;
            case 'uppercase-error':
                return 'Password must contain at least one uppercase letter.'
                break;
            case 'lowercase-error':
                return 'Password must contain at least one lowercase letter.'
                break;
            case 'number-error':
                return 'Password must contain at least one number.'
                break;
            case 'symbol-error':
                return 'Password must contain at least one special character.'
                break;
            default:
                return 'Wow! Very strong password.'
        }
    }

    const [signal2, setSignal2] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false,
        strong: false
    });
    const [StrongPassword2, setStrongPassword2] = useState('');


    const handleStrongPasswordCheckingChange2 = (e) => {
        const password = e.target.value;
        setStrongPassword2(password);

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setSignal2({
            lowercase: hasLowerCase,
            uppercase: hasUpperCase,
            number: hasNumber,
            symbol: hasSymbol,
            length: password.length >= 8,
            strong: hasUpperCase && hasLowerCase && hasNumber && hasSymbol && password.length >= 8
        });
    };


    // show hint in dropdown
    const [hintDropdownOpen, setHintDropdownOpen] = useState(false);


    return (
        <>
            <aside className="flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10">
                <div>

                    <ContentHeader text={"check inline"} id={"check_inline"}/>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Inline password strength checker that evaluates and displays the strength of your password in real-time as you type.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${strongPasswordCheckingPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    strongPasswordCheckingPreview && "text-tabTextColor"
                                } px-6 py-2 border-b text-text z-[2] relative border-border`}
                                onClick={handleStrongPasswordCheckingPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    StrongPasswordCheckingCode && "text-tabTextColor"
                                } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                                onClick={handleStrongPasswordCheckingCode}
                            >
                                Code
                            </button>
                        </div>
                        {strongPasswordCheckingPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="w-full 1024px:w-[80%]">
                                    <label htmlFor="password" className="text-[15px] text-text font-[400]">
                                        Password
                                    </label>
                                    <div className="w-full relative">
                                        <input
                                            type={isEyeOpen ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            onChange={handleStrongPasswordCheckingChange}
                                            placeholder="Password"
                                            className="peer border-border border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-primary transition-colors duration-300"
                                        />

                                        {
                                            StrongPassword !== '' && (
                                                <p className={`${signal === 'normal' ? 'text-red-500' : 'text-green-600'} text-[0.9rem] mt-1`}>
                                                    {
                                                        signal === 'strong' ? (
                                                            <p className='text-green-600 flex items-center gap-[5px]'>
                                                                <IoCheckmarkDoneCircleSharp className='text-[1.1rem]'/>
                                                                {getErrorText()}
                                                            </p>
                                                        ) : (
                                                            <p className='text-red-500 flex items-center gap-[5px]'>
                                                                <MdErrorOutline className='text-[1.1rem]'/>
                                                                {getErrorText()}
                                                            </p>
                                                        )
                                                    }
                                                </p>
                                            )
                                        }

                                        {isEyeOpen ? (
                                            <IoEyeOutline
                                                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                                onClick={() => setIsEyeOpen(false)}
                                            />
                                        ) : (
                                            <IoEyeOffOutline
                                                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                                onClick={() => setIsEyeOpen(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {StrongPasswordCheckingCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {IoCheckmarkDoneCircleSharp, IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {MdErrorOutline} from "react-icons/md";

const StrongPassword = () => {

    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [StrongPassword, setStrongPassword] = useState(" ");
    const [signal, setSignal] = useState(" ");

    const handleStrongPasswordChecker = (e) => {
        const password = e.target.value;
        setStrongPassword(password);

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if(!hasLowerCase){
            setSignal("lowercase-error");
        } else if (!hasUpperCase) {
            setSignal("uppercase-error");
        } else if(!hasNumber) {
            setSignal("number-error");
        } else if(!hasSymbol) {
            setSignal("symbol-error");
        } else if (password.length < 8) {
            setSignal("length-error");
        } else {
            setSignal("strong");
        }
    }

    const getMessage = () => {
        switch(signal){
            case "length-error":
                return "Password must be at least 8 characters long."
                            break;
                            case "uppercase-error":
                            return "Password must contain at least one uppercase letter."
                            break;
                            case "lowercase-error":
                            return "Password must contain at least one lowercase letter."
                            break;
                            case "number-error":
                            return "Password must contain at least one number."
                            break;
                            case "symbol-error":
                            return "Password must contain at least one special character."
                            break;
                            default:
                            return "Wow! Very strong password."
                        }
                        }

    return (
                        <div className="w-full">
                            <label htmlFor="password" className="text-[15px] text-text font-[400]">
                                Password
                            </label>
                            <div className="w-full relative">
                                <input
                                    type={isEyeOpen ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    onChange={handleStrongPasswordChecker}
                                    placeholder="Password"
                                    className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
                                />

                                {
                                    StrongPassword !== " " && (
                                        <p className={`${signal === "normal" ? "text-red-500" : "text-green-600"} text-[0.9rem] mt-1`}>
                                            {
                                                signal === "strong" ? (
                                                    <p className="text-green-600 flex items-center gap-[5px]">
                                                        <IoCheckmarkDoneCircleSharp className="text-[1.1rem]"/>
                                                        {getMessage()}
                                                    </p>
                                                ) : (
                                                    <p className="text-red-500 flex items-center gap-[5px]">
                                                        <MdErrorOutline className="text-[1.1rem]"/>
                                                        {getMessage()}
                                                    </p>
                                                )
                                            }
                                        </p>
                                    )
                                }

                                {isEyeOpen ? (
                                    <IoEyeOutline
                                        className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                        onClick={() => setIsEyeOpen(false)}
                                    />
                                ) : (
                                    <IoEyeOffOutline
                                        className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                        onClick={() => setIsEyeOpen(true)}
                                    />
                                )}
                            </div>
                        </div>
                        );
                        };

export default StrongPassword;
                                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"check by indicator"} id={"check_by_indicator"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Inline checker with indicators to visually show the status or validity of your input, providing real-time feedback.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${checkIndicatorPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    checkIndicatorPreview && "text-tabTextColor"
                                } px-6 py-2 border-b text-text z-[2] relative border-border`}
                                onClick={handleCheckIndicatorPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    checkIndicatorCode && "text-tabTextColor"
                                } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                                onClick={handleCheckIndicatorCode}
                            >
                                Code
                            </button>
                        </div>
                        {checkIndicatorPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="w-full 1024px:w-[80%]">
                                    <label htmlFor="password" className="text-[15px] text-text font-[400]">
                                        Password
                                    </label>
                                    <div className="w-full relative">
                                        <input
                                            type={isEyeOpen ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            onChange={handleStrongPasswordCheckingChange2}
                                            placeholder="Password"
                                            className="peer border-border border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-primary transition-colors duration-300"
                                        />

                                        <div className='w-full mt-2 flex items-center gap-[5px]'>
                                            <div
                                                className={`${signal2.lowercase ? 'bg-green-500' : 'bg-gray-200'} h-[9px] w-full rounded-md`}></div>
                                            <div
                                                className={`${signal2.uppercase ? 'bg-green-500' : 'bg-gray-200'} h-[9px] w-full rounded-md`}></div>
                                            <div
                                                className={`${signal2.number ? 'bg-green-500' : 'bg-gray-200'} h-[9px] w-full rounded-md`}></div>
                                            <div
                                                className={`${signal2.symbol ? 'bg-green-500' : 'bg-gray-200'} h-[9px] w-full rounded-md`}></div>
                                            <div
                                                className={`${signal2.length ? 'bg-green-500' : 'bg-gray-200'} h-[9px] w-full rounded-md`}></div>

                                        </div>

                                        {isEyeOpen ? (
                                            <IoEyeOutline
                                                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                                onClick={() => setIsEyeOpen(false)}
                                            />
                                        ) : (
                                            <IoEyeOffOutline
                                                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                                onClick={() => setIsEyeOpen(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {checkIndicatorCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";

const StrongPassword = () => {

    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [StrongPassword, setStrongPassword] = useState("");
    const [signal, setSignal] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false,
        strong: false
    });

    const handleStrongPasswordChecker = (e) => {
        const password = e.target.value;
        setStrongPassword(password);

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setSignal({
            lowercase: hasLowerCase,
            uppercase: hasUpperCase,
            number: hasNumber,
            symbol: hasSymbol,
            length: password.length >= 8,
            strong: hasUpperCase && hasLowerCase && hasNumber && hasSymbol && password.length >= 8
        });
    }

    return (
        <div className="w-full">
            <label htmlFor="password" className="text-[15px] text-text font-[400]">
                Password
            </label>
            <div className="w-full relative">
                <input
                    type={isEyeOpen ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handleStrongPasswordChecker}
                    placeholder="Password"
                    className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
                />

                <div className="w-full mt-2 flex items-center gap-[5px]">
                    <div
                        className={`${signal.lowercase ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>
                    <div
                        className={`${signal.uppercase ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>
                    <div
                        className={`${signal.number ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>
                    <div
                        className={`${signal.symbol ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>
                    <div
                        className={`${signal.length ? "bg-green-500" : "bg-gray-200"} h-[9px] w-full rounded-md`}></div>

                </div>

                {isEyeOpen ? (
                    <IoEyeOutline
                        className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                        onClick={() => setIsEyeOpen(false)}
                    />
                ) : (
                    <IoEyeOffOutline
                        className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                        onClick={() => setIsEyeOpen(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default StrongPassword;
                                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"check password with hint"} id={"check_password_with_hint"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Password input field with real-time strength checks and helpful hints to guide you in creating a stronger password.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${checkHintPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    checkHintPreview && "text-tabTextColor"
                                } px-6 py-2 border-b text-text z-[2] relative border-border`}
                                onClick={handleCheckHintPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    checkHintCode && "text-tabTextColor"
                                } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                                onClick={handleCheckHintCode}
                            >
                                Code
                            </button>
                        </div>
                        {checkHintPreview && (
                            <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center">
                                <div className="w-full 1024px:w-[80%]">
                                    <label htmlFor="password" className="text-[15px] text-text font-[400]">
                                        Password
                                    </label>
                                    <div className="w-full relative">
                                        <input
                                            type={isEyeOpen ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            onChange={handleStrongPasswordCheckingChange2}
                                            placeholder="Password"
                                            className="peer border-border border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-primary transition-colors duration-300"
                                        />

                                        <h3 className='text-gray-900 font-[500] text-[1rem] mt-4'>Your password must
                                            contain:</h3>

                                        <div className='w-full mt-2 flex-col flex gap-[6px]'>
                                            <div className={`${signal2.length ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                {
                                                    signal2.length ? (
                                                        <MdDone className={`text-[1rem]`}/>
                                                    ) : (
                                                        <RxCross1/>
                                                    )
                                                }
                                                Minimum number of characters is 8.
                                            </div>
                                            <div className={`${signal2.uppercase ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                {
                                                    signal2.uppercase ? (
                                                        <MdDone className={`text-[1rem]`}/>
                                                    ) : (
                                                        <RxCross1/>
                                                    )
                                                }
                                                Should contain uppercase.
                                            </div>
                                            <div className={`${signal2.lowercase ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                {
                                                    signal2.lowercase ? (
                                                        <MdDone className={`text-[1rem]`}/>
                                                    ) : (
                                                        <RxCross1/>
                                                    )
                                                }
                                                Should contain lowercase.
                                            </div>
                                            <div className={`${signal2.number ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                {
                                                    signal2.number ? (
                                                        <MdDone className={`text-[1rem]`}/>
                                                    ) : (
                                                        <RxCross1/>
                                                    )
                                                }
                                                Should contain numbers.
                                            </div>
                                            <div className={`${signal2.symbol ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                {
                                                    signal2.symbol ? (
                                                        <MdDone className={`text-[1rem]`}/>
                                                    ) : (
                                                        <RxCross1/>
                                                    )
                                                }
                                                Should contain special characters.
                                            </div>
                                        </div>

                                        {isEyeOpen ? (
                                            <IoEyeOutline
                                                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                                onClick={() => setIsEyeOpen(false)}
                                            />
                                        ) : (
                                            <IoEyeOffOutline
                                                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                                onClick={() => setIsEyeOpen(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {checkHintCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {MdDone} from "react-icons/md";
import {RxCross1} from "react-icons/rx";

const StrongPassword = () => {

    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [StrongPassword, setStrongPassword] = useState("");
    const [signal, setSignal] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false,
        strong: false
    });

    const handleStrongPasswordChecker = (e) => {
        const password = e.target.value;
        setStrongPassword(password);

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setSignal({
            lowercase: hasLowerCase,
            uppercase: hasUpperCase,
            number: hasNumber,
            symbol: hasSymbol,
            length: password.length >= 8,
            strong: hasUpperCase && hasLowerCase && hasNumber && hasSymbol && password.length >= 8
        });
    }

    return (
        <div className="w-full ">
            <label htmlFor="password" className="text-[15px] text-text font-[400]">
                Password
            </label>
            <div className="w-full relative">
                <input
                    type={isEyeOpen ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handleStrongPasswordChecker}
                    placeholder="Password"
                    className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
                />

                <h3 className="text-gray-900 font-[500] text-[1rem] mt-4">Your password must
                    contain:</h3>

                <div className="w-full mt-2 flex-col flex gap-[6px]">
                    <div
                        className={`${signal.length ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                        {
                            signal.length ? (
                                <MdDone className={`text-[1rem]`}/>
                            ) : (
                                <RxCross1/>
                            )
                        }
                        Minimum number of characters is 8.
                    </div>
                    <div
                        className={`${signal.uppercase ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                        {
                            signal.uppercase ? (
                                <MdDone className={`text-[1rem]`}/>
                            ) : (
                                <RxCross1/>
                            )
                        }
                        Should contain uppercase.
                    </div>
                    <div
                        className={`${signal.lowercase ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                        {
                            signal.lowercase ? (
                                <MdDone className={`text-[1rem]`}/>
                            ) : (
                                <RxCross1/>
                            )
                        }
                        Should contain lowercase.
                    </div>
                    <div
                        className={`${signal.number ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                        {
                            signal.number ? (
                                <MdDone className={`text-[1rem]`}/>
                            ) : (
                                <RxCross1/>
                            )
                        }
                        Should contain numbers.
                    </div>
                    <div
                        className={`${signal.symbol ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                        {
                            signal.symbol ? (
                                <MdDone className={`text-[1rem]`}/>
                            ) : (
                                <RxCross1/>
                            )
                        }
                        Should contain special characters.
                    </div>
                </div>

                {isEyeOpen ? (
                    <IoEyeOutline
                        className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                        onClick={() => setIsEyeOpen(false)}
                    />
                ) : (
                    <IoEyeOffOutline
                        className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                        onClick={() => setIsEyeOpen(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default StrongPassword;
                '
                            />
                        )}
                    </div>

                    <div className="mt-8">
                        <ContentHeader text={"show hint in dropdown"} id={"show_hint_in_dropdown"}/>
                    </div>

                    <p className="w-full 425px:w-[80%] text-text text-[1rem]">
                        Displays hints in a dropdown menu to provide additional guidance or suggestions based on user input.
                    </p>

                    <div className="w-full 425px:w-[80%] border border-border rounded mt-8">
                        <div className="relative">
                            <div
                                className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${hintDropdownPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[105px] rounded-br'}`}></div>
                            <button
                                className={`${
                                    hintDropdownPreview && "text-tabTextColor"
                                } px-6 py-2 border-b text-text z-[2] relative border-border`}
                                onClick={handleHintDropdownPreview}
                            >
                                Preview
                            </button>
                            <button
                                className={`${
                                    hintDropdownCode && "text-tabTextColor"
                                } px-6 py-2 border-r border-b rounded-br text-text z-[2] relative border-border`}
                                onClick={handleHintDropdownCode}
                            >
                                Code
                            </button>
                        </div>
                        {hintDropdownPreview && (
                            <div className={`p-8 ${ hintDropdownOpen ? 'mb-48':'mb-4'} transition-all duration-300 flex items-center flex-col gap-5 justify-center`}>
                                <div className="w-full 1024px:w-[80%]">
                                    <label htmlFor="password" className="text-[15px] text-text font-[400]">
                                        Password
                                    </label>
                                    <div className="w-full relative">
                                        <input
                                            type={isEyeOpen ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            onChange={handleStrongPasswordCheckingChange2}
                                            onFocus={() => setHintDropdownOpen(true)}
                                            onBlur={()=>{setHintDropdownOpen(false)}}
                                            placeholder="Password"
                                            className="peer border-border border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-primary transition-colors duration-300"
                                        />

                                        <div className={`${hintDropdownOpen ? 'opacity-100 translate-y-0 z-30' : 'opacity-0 translate-y-[-10px] z-[-1]'} bg-white boxShadow rounded-md py-3 px-4 absolute top-[60px] left-0 w-full transition-all duration-300`}>
                                            <h3 className='text-gray-900 font-[500] text-[1rem]'>Your password must
                                                contain:</h3>

                                            <div className='w-full mt-2 flex-col flex gap-[6px]'>
                                                <div
                                                    className={`${signal2.length ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                    {
                                                        signal2.length ? (
                                                            <MdDone className={`text-[1rem]`}/>
                                                        ) : (
                                                            <RxCross1/>
                                                        )
                                                    }
                                                    Minimum number of characters is 8.
                                                </div>
                                                <div
                                                    className={`${signal2.uppercase ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                    {
                                                        signal2.uppercase ? (
                                                            <MdDone className={`text-[1rem]`}/>
                                                        ) : (
                                                            <RxCross1/>
                                                        )
                                                    }
                                                    Should contain uppercase.
                                                </div>
                                                <div
                                                    className={`${signal2.lowercase ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                    {
                                                        signal2.lowercase ? (
                                                            <MdDone className={`text-[1rem]`}/>
                                                        ) : (
                                                            <RxCross1/>
                                                        )
                                                    }
                                                    Should contain lowercase.
                                                </div>
                                                <div
                                                    className={`${signal2.number ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                    {
                                                        signal2.number ? (
                                                            <MdDone className={`text-[1rem]`}/>
                                                        ) : (
                                                            <RxCross1/>
                                                        )
                                                    }
                                                    Should contain numbers.
                                                </div>
                                                <div
                                                    className={`${signal2.symbol ? 'text-green-500' : 'text-gray-500'} text-[0.8rem] flex items-center gap-[8px]`}>
                                                    {
                                                        signal2.symbol ? (
                                                            <MdDone className={`text-[1rem]`}/>
                                                        ) : (
                                                            <RxCross1/>
                                                        )
                                                    }
                                                    Should contain special characters.
                                                </div>
                                            </div>
                                        </div>

                                        {isEyeOpen ? (
                                            <IoEyeOutline
                                                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                                onClick={() => setIsEyeOpen(false)}
                                            />
                                        ) : (
                                            <IoEyeOffOutline
                                                className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                                                onClick={() => setIsEyeOpen(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {hintDropdownCode && (
                            <Showcode
                                code='
import React, {useState} from "react";

// react icons
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {MdDone} from "react-icons/md";
import {RxCross1} from "react-icons/rx";

const StrongPassword = () => {

    const [hintDropdownOpen, setHintDropdownOpen] = useState(false);
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [StrongPassword, setStrongPassword] = useState("");
    const [signal, setSignal] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false,
        strong: false
    });

    const handleStrongPasswordChecker = (e) => {
        const password = e.target.value;
        setStrongPassword(password);

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setSignal({
            lowercase: hasLowerCase,
            uppercase: hasUpperCase,
            number: hasNumber,
            symbol: hasSymbol,
            length: password.length >= 8,
            strong: hasUpperCase && hasLowerCase && hasNumber && hasSymbol && password.length >= 8
        });
    }

    return (
        <div className="w-full 1024px:w-[80%]">
            <label htmlFor="password" className="text-[15px] text-text font-[400]">
                Password
            </label>
            <div className="w-full relative">
                <input
                    type={isEyeOpen ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handleStrongPasswordChecker}
                    onFocus={() => setHintDropdownOpen(true)}
                    onBlur={() => {
                        setHintDropdownOpen(false)
                    }}
                    placeholder="Password"
                    className="peer border-[#e5eaf2] border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-[#3B9DF8] transition-colors duration-300"
                />

                <div
                    className={`${hintDropdownOpen ? "opacity-100 translate-y-0 z-30" : "opacity-0 translate-y-[-10px] z-[-1]"} bg-white shadow-md rounded-md py-3 px-4 absolute top-[60px] left-0 w-full transition-all duration-300`}>
                    <h3 className="text-gray-900 font-[500] text-[1rem]">Your password must
                        contain:</h3>

                    <div className="w-full mt-2 flex-col flex gap-[6px]">
                        <div
                            className={`${signal.length ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                            {
                                signal.length ? (
                                    <MdDone className={`text-[1rem]`}/>
                                ) : (
                                    <RxCross1/>
                                )
                            }
                            Minimum number of characters is 8.
                        </div>
                        <div
                            className={`${signal.uppercase ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                            {
                                signal.uppercase ? (
                                    <MdDone className={`text-[1rem]`}/>
                                ) : (
                                    <RxCross1/>
                                )
                            }
                            Should contain uppercase.
                        </div>
                        <div
                            className={`${signal.lowercase ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                            {
                                signal.lowercase ? (
                                    <MdDone className={`text-[1rem]`}/>
                                ) : (
                                    <RxCross1/>
                                )
                            }
                            Should contain lowercase.
                        </div>
                        <div
                            className={`${signal.number ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                            {
                                signal.number ? (
                                    <MdDone className={`text-[1rem]`}/>
                                ) : (
                                    <RxCross1/>
                                )
                            }
                            Should contain numbers.
                        </div>
                        <div
                            className={`${signal.symbol ? "text-green-500" : "text-gray-500"} text-[0.8rem] flex items-center gap-[8px]`}>
                            {
                                signal.symbol ? (
                                    <MdDone className={`text-[1rem]`}/>
                                ) : (
                                    <RxCross1/>
                                )
                            }
                            Should contain special characters.
                        </div>
                    </div>
                </div>

                {isEyeOpen ? (
                    <IoEyeOutline
                        className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                        onClick={() => setIsEyeOpen(false)}
                    />
                ) : (
                    <IoEyeOffOutline
                        className=" absolute top-4 right-4 text-[1.5rem] text-[#777777] cursor-pointer"
                        onClick={() => setIsEyeOpen(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default StrongPassword;
                '
                            />
                        )}
                    </div>

                    <OverviewFooter backUrl='/components/input-switch' backName='switch' forwardUrl='/components/input-select' forwardName='select'/>
                </div>

                <div className="1024px:flex hidden flex-col gap-4 sticky top-4 right-0 w-[40%]">
                    <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
                        CONTENTS
                    </h2>
                    <a
                        href="#check_inline"
                        className={`${
                            contentActiveTab === 1 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(1)}
                    >
                        Check Inline
                    </a>
                    <a
                        href="#check_by_indicator"
                        className={`${
                            contentActiveTab === 2 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(2)}
                    >
                        Check By Indicator
                    </a>
                    <a
                        href="#check_password_with_hint"
                        className={`${
                            contentActiveTab === 3 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(3)}
                    >
                        Check Password With Hint
                    </a>
                    <a
                        href="#show_hint_in_dropdown"
                        className={`${
                            contentActiveTab === 4 && "!text-primary !border-primary"
                        } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
                        onClick={() => setContentActiveTab(4)}
                    >
                        Show Hint In Dropdown
                    </a>
                    <div data-ea-publisher="zenuinet" className='w-full' data-ea-type="image"></div>
                </div>
            </aside>
            <Helmet>
                <title>Inputs - Strong Password</title>
            </Helmet>
        </>
    );
};

export default OtpInput;
