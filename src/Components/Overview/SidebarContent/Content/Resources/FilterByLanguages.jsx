import {useState, useEffect, useRef} from 'react';

// icons
import {IoIosArrowDown} from "react-icons/io";

const FilterByLanguages = ({setSelectedLanguage, selectedLanguage}) => {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        name: 'All',
        slug: 'all',
    },);
    const selectRef = useRef(null);

    const platforms = [
        {
            name: 'All',
            slug: 'all',
        },
        {
            name: 'Javascript',
            slug: 'javascript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png'
        },
        {
            name: 'ReactJS',
            slug: 'react',
            image: 'https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png'
        },
        {
            name: 'NextJS',
            slug: 'nextjs',
            image: 'https://pbs.twimg.com/profile_images/1565710214019444737/if82cpbS_400x400.jpg'
        },
        {
            name: 'CSS',
            slug: 'css',
            image: 'https://wisetrolley.com/wp-content/uploads/2023/03/CSS-T-shirt-Black-2.jpg'
        },
        {
            name: 'VueJS',
            slug: 'vue',
            image: 'https://res.cloudinary.com/ddxwdqwkr/image/upload/v1690837534/patterns.dev/Images/vue/intro/vue.png'
        },
    ]

    const handleSelect = (item) => {
        setSelectedOption(item);
        setSelectedLanguage(item)
        setSearch('');
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
            {/* Selected image and name */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full bg-white cursor-pointer relative border border-gray-200 rounded-md px-10 py-2.5 text-gray-600 text-[0.9rem] flex items-center ${!selectedOption?.image && '!pl-4'} ${selectedOption ? 'pl-[44px]' : 'pl-4'}`}
            >
                {selectedOption && (
                    selectedOption?.image && (
                        <img
                            src={selectedOption.image}
                            alt={selectedOption.name}
                            className="absolute left-3 top-2.5 object-cover rounded-md w-6 h-6"
                        />
                    )
                )}
                <p className={`${selectedOption ? 'text-gray-600' : 'text-gray-400'} text-[1rem] font-[400]`}>
                    {selectedOption ? selectedOption.name : 'Select Language'}
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
                                className={`${!item.image && 'pl-[45px]'} cursor-pointer px-3 text-gray-600 py-2 flex items-center hover:bg-gray-50`}
                            >
                                {
                                    item.image && (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="mr-2 transition-all duration-300 object-cover rounded-md w-6 h-6"
                                        />
                                    )
                                }
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterByLanguages;
