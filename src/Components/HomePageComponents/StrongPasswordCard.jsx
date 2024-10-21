import React, {useState} from 'react';
import {MdDone} from "react-icons/md";
import {RxCross1} from "react-icons/rx";
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";

const StrongPasswordCard = () => {
    const [StrongPassword2, setStrongPassword2] = useState('');
    const [hintDropdownOpen, setHintDropdownOpen] = useState(false);

    const [isEyeOpen, setIsEyeOpen] = useState(false);

    const [signal2, setSignal2] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false,
        strong: false
    });


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

    return (
        <div className="w-[90%]">
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
                    onBlur={() => {
                        setHintDropdownOpen(false)
                    }}
                    placeholder="Password"
                    className="peer border-border border rounded-md outline-none pl-4 pr-12 py-3 w-full mt-1 focus:border-primary transition-colors duration-300"
                />

                <div
                    className={`${hintDropdownOpen ? 'opacity-100 translate-y-0 z-30' : 'opacity-0 translate-y-[-10px] z-[-1]'} bg-white boxShadow rounded-md py-3 px-4 absolute top-[60px] left-0 w-full transition-all duration-300`}>
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
    );
};

export default StrongPasswordCard;
