import React, {useRef, useState} from 'react';

const AnimatedCard = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <div onMouseMove={handleMouseMove}
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}
             ref={cardRef}
             className='w-[300px] z-0 bg-white border relative overflow-hidden border-gray-200 rounded-lg p-[25px] cursor-pointer'>

            <h2 className='text-[1.2rem] font-bold text-[#DB06F9]'>Web Developer</h2>
            <p className='text-gray-600 text-[0.9rem] mt-2'>A web developer builds and maintains websites, ensuring they
                are functional, user-friendly, and visually appealing.</p>

            <img src='https://i.ibb.co.com/Gx5pzCs/Programmer-working-remotely-with-cat-by-his-side.png'
                 alt='animated_card' className='w-[100px] mt-3 float-right'/>

            {isHovering && (
                <div
                    className="absolute inset-0 pointer-events-none blur-[50px]"
                    style={{
                        background: `radial-gradient(circle 50px at ${mousePosition.x}px ${mousePosition.y}px, #DB06F9, transparent)`,
                    }}
                />
            )}

        </div>
    );
};

export default AnimatedCard;
