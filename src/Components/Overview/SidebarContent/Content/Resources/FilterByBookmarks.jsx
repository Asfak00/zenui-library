import { useState, useEffect, useRef } from 'react';
import {IoIosArrowDown} from "react-icons/io";

const CustomSelect = ({setBookmark}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        name: 'All',
        slug: 'all'
    },);
    const selectRef = useRef(null);

    const platforms = [
        {
            name: 'All',
            slug: 'all'
        },
        {
            name: 'Bookmarks',
            slug: 'bookmarks'
        }
    ]

    const handleSelect = (item) => {
        setSelectedOption(item);
        setBookmark(item)
        setIsOpen(false);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
            handleBlur();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative custom-select w-full 640px:w-[180px]" ref={selectRef}>
            {/* Selected name */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-white cursor-pointer border-gray-200 relative border rounded-md px-10 py-2.5 text-gray-600 text-[0.9rem] flex items-center pl-4`}
            >
                <p className={`${selectedOption ? 'text-gray-600' : 'text-gray-400'} text-[1rem] font-[400]`}>
                    {selectedOption ? selectedOption.name : 'Filter by bookmark'}
                </p>
            </div>

            {/* Dropdown icon */}
            <IoIosArrowDown
                size="20"
                className={`transition-all duration-300 text-[1.3rem] absolute top-[55%] transform translate-y-[-50%] right-3 text-gray-400 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                }`}
            />

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute left-0 w-full mt-1 border border-gray-200 rounded-md bg-white shadow-lg z-20">
                    <div className="w-full overflow-auto py-1">
                        {platforms.map((item) => (
                            <p
                                key={item.id}
                                onClick={() => handleSelect(item)}
                                className="cursor-pointer px-3 py-2 text-gray-600 hover:bg-gray-50"
                            >
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CustomSelect;
