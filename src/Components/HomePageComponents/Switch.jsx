import React, {useState} from 'react';

const SwitchCard = () => {
    const [animatedSwitch, setAnimatedSwitch] = useState(false);
    const [widthIncrease, setWidthIncrease] = useState(false);

    const handleAnimatedSwitch = () => {
        setWidthIncrease(true)
        setTimeout(()=> {
            setWidthIncrease(false)
            setAnimatedSwitch(!animatedSwitch);
        }, 300)
    }

    return (
        <div className={`${animatedSwitch ? 'bg-primary border-primary' : 'bg-[#f0f0f0] border-gray-200'} border relative p-1 rounded-full w-[60px] cursor-pointer transition-all h-[33px] duration-200`} onClick={handleAnimatedSwitch}>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${animatedSwitch ? 'translate-x-[13px]' : 'translate-x-[-13px]'} ${widthIncrease ? '!w-[29px]' : '!w-[25px]'} w-[25px] h-[25px] rounded-full bg-white transition-all duration-200`}>
                </div>
            </div>
        </div>
    );
};

export default SwitchCard;
