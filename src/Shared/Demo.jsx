import React, { useState } from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const pagination = () => {
    const [paginationNum, setPaginationNum] = useState(0);
    const totalPageNumber = 5;
    const updatePageNumber = (num) => {
        if (num > totalPageNumber - 1 || 0 > num) {
            return setPaginationNum(0);
        }
        setPaginationNum(num);
    };

    // second pagination
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`mx-1 px-4 py-2 rounded-full transform transition-all duration-300 ${
                        currentPage === i
                            ? 'bg-primary text-white scale-110 shadow-md'
                            : 'bg-transparent text-blue-600 hover:bg-blue-100'
                    }`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="flex items-center justify-center mt-8 space-x-2">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
                <FaChevronLeft/>
            </button>
            {renderPageNumbers()}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
                <FaChevronRight/>
            </button>
        </div>
    );
};

export default pagination;