import React from 'react';

const BadgeCard = () => {
    return (
        <div className='relative'>
            <img
                src='https://img.freepik.com/free-photo/cheerful-young-man-posing-isolated-grey_171337-10579.jpg?t=st=1722664771~exp=1722668371~hmac=b930da24388ca4a02a842fcd7697b7d73897d11c92ff354a19eb246ca222359e&w=996'
                alt='avatar' className='w-[50px] h-[50px] rounded-full object-cover'/>

            <div className='p-[2px] bg-white absolute top-[35px] right-1 rounded-full'>
                <div className='w-[10px] h-[10px] rounded-full bg-green-400 '></div>
            </div>
        </div>
    );
};

export default BadgeCard;
