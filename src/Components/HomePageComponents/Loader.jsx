import React from 'react';

const LoaderCard = () => {
    return (
        <div className='my-10'>
            <div
                className="w-[56px] h-[56px]"
                style={{
                    '--c': 'radial-gradient(farthest-side, #3B9DF8 92%, transparent)',
                    background: `
          var(--c) 50% 0,
          var(--c) 50% 100%,
          var(--c) 100% 50%,
          var(--c) 0 50%
        `,
                    backgroundSize: '13.4px 13.4px',
                    backgroundRepeat: 'no-repeat',
                    animation: 'spinner-kh173p 1s infinite'
                }}
            >
                <style>
                    {`
          @keyframes spinner-kh173p {
            to {
              transform: rotate(0.5turn);
            }
          }
        `}
                </style>
            </div>
        </div>
    );
};

export default LoaderCard;
