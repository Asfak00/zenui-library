import React, { useState } from "react";

// components
import OverviewFooter from "../../../../../Shared/OverviewFooter";
import ContentHeader from "../../../../../Shared/ContentHeader";

// react helmet
import { Helmet } from "react-helmet";

// showing the code
import Showcode from "../../../../../Shared/ShowCode";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const Pagination = () => {
  const [contentActiveTab, setContentActiveTab] = useState(0);

  // animatedPagination
  const [animatedPaginationPreview, setAnimatedPaginationPreview] = useState(true);
  const [animatedPaginationCode, setAnimatedPaginationCode] = useState(false);

  const handleAnimatedPaginationPreview = () => {
    setAnimatedPaginationPreview(true);
    setAnimatedPaginationCode(false);
  };

  const handleAnimatedPaginationCode = () => {
    setAnimatedPaginationCode(true);
    setAnimatedPaginationPreview(false);
  };

  // paginationWithButton
  const [paginationWithButtonPreview, setPaginationWithButtonPreview] = useState(true);
  const [paginationWithButtonCode, setPaginationWithButtonCode] = useState(false);

  const handlePaginationWithButtonPreview = () => {
    setPaginationWithButtonPreview(true);
    setPaginationWithButtonCode(false);
  };

  const handlePaginationWithButtonCode = () => {
    setPaginationWithButtonCode(true);
    setPaginationWithButtonPreview(false);
  };

  // roundedButtonPagination
  const [roundedButtonPaginationPreview, setRoundedButtonPaginationPreview] = useState(true);
  const [roundedButtonPaginationCode, setRoundedButtonPaginationCode] = useState(false);

  const handleRoundedButtonPaginationPreview = () => {
    setRoundedButtonPaginationPreview(true);
    setRoundedButtonPaginationCode(false);
  };

  const handleRoundedButtonPaginationCode = () => {
    setRoundedButtonPaginationCode(true);
    setRoundedButtonPaginationPreview(false);
  };

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
              className={`mx-1 px-3 py-1 rounded ${
                  currentPage === i ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
              }`}
          >
            {i}
          </button>
      );
    }

    return pageNumbers;
  };

  const renderPageNumbers2 = () => {
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

  const renderPageNumbers3 = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
          <button
              key={i}
              onClick={() => handlePageClick(i)}
              className={`mx-1 px-3 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 ${
                  currentPage === i ? 'bg-blue-500 text-white shadow-lg' : ''
              }`}
          >
            {i}
          </button>
      );
    }

    return pageNumbers;
  };

  return (
    <>
      <aside className="flex items-start justify-between gap-6 pl-[5rem] pt-[4.5rem]">
        <div>
          <ContentHeader
            text={"animated pagination"}
            id={"animated_pagination"}
          />

          <p className="w-[80%] text-text text-[1rem]">
            An animated pagination component that seamlessly guides users through content with fluid transitions and intuitive design.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${animatedPaginationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      animatedPaginationPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleAnimatedPaginationPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      animatedPaginationCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleAnimatedPaginationCode}
              >
                Code
              </button>
            </div>
            {animatedPaginationPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="flex items-center justify-center mt-8 space-x-2">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <FaChevronLeft/>
                    </button>
                    {renderPageNumbers2()}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
            )}

            {animatedPaginationCode && (
                <Showcode
                    code='
import React, { useState } from "react";

{/* react icons */}
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
                            ? "bg-[#3B9DF8] text-white scale-110 shadow-md"
                            : "bg-transparent text-blue-600 hover:bg-blue-100"
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
                    '
                />
            )}
          </div>

          <div className='mt-8'>
            <ContentHeader
                text={"pagination with button"}
                id={"pagination_with_button"}
            />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            Pagination featuring user-friendly buttons for effortless navigation through content, enhancing accessibility and interaction.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${paginationWithButtonPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      paginationWithButtonPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handlePaginationWithButtonPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      paginationWithButtonCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handlePaginationWithButtonCode}
              >
                Code
              </button>
            </div>
            {paginationWithButtonPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="flex items-center flex-wrap justify-center mt-4">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="mx-1 px-3 py-1 rounded bg-gray-200 text-text disabled:opacity-50"
                    >
                      Previous
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="mx-1 px-3 py-1 rounded bg-gray-200 text-text disabled:opacity-50"
                    >
                      Next
                    </button>
                  </div>
                </div>
            )}

            {paginationWithButtonCode && (
                <Showcode
                    code='
import React, { useState } from "react";

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
                    className={`mx-1 px-3 py-1 rounded ${
                        currentPage === i ? "bg-[#3B9DF8] text-white" : "bg-gray-200 text-gray-700"
                    }`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="flex items-center flex-wrap justify-center mt-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="mx-1 px-3 py-1 rounded bg-gray-200 text-text disabled:opacity-50"
            >
                Previous
            </button>
            {renderPageNumbers()}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="mx-1 px-3 py-1 rounded bg-gray-200 text-text disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default pagination;
                    '
                />
            )}
          </div>

          <div className='mt-8'>
            <ContentHeader
                text={"pagination with rounded button"}
                id={"pagination_with_rounded_button"}
            />
          </div>

          <p className="w-[80%] text-text text-[1rem]">
            Pagination with rounded buttons offering smooth navigation through content, enhancing both aesthetics and usability.
          </p>

          <div className="w-[80%] border border-border rounded mt-8">
            <div className="relative">
              <div
                  className={`absolute top-0 left-0 w-[90px] h-[40px] z-[1] bg-border transition-all duration-500 ${roundedButtonPaginationPreview ? 'translate-x-[0px] !w-[100px]' : 'translate-x-[100px] rounded-br'}`}></div>
              <button
                  className={`${
                      roundedButtonPaginationPreview && "text-tabTextColor"
                  } px-6 py-2 border-b z-[2] relative text-text border-border`}
                  onClick={handleRoundedButtonPaginationPreview}
              >
                Preview
              </button>
              <button
                  className={`${
                      roundedButtonPaginationCode && "text-tabTextColor"
                  } px-6 py-2 border-r z-[2] relative text-text border-b rounded-br border-border`}
                  onClick={handleRoundedButtonPaginationCode}
              >
                Code
              </button>
            </div>
            {roundedButtonPaginationPreview && (
                <div className="p-8 mb-4 flex items-center gap-5 justify-center">
                  <div className="flex items-center justify-center mt-8 space-x-4">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className={`px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-secondary transition-all duration-300 ${
                            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                      Previous
                    </button>
                    <div className="flex items-center space-x-2">
                      {renderPageNumbers3()}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-primary hover:text-secondary transition-all duration-300 ${
                            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                    >
                      Next
                    </button>
                  </div>
                </div>
            )}

            {roundedButtonPaginationCode && (
                <Showcode
                    code='
import React, { useState } from "react";

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
                    className={`mx-1 px-3 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 ${
                        currentPage === i ? "bg-blue-500 text-white shadow-lg" : ""
                    }`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="flex items-center justify-center mt-8 space-x-4">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className={`px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#3B9DF8] hover:text-[#fff] transition-all duration-300 ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                Previous
            </button>
            <div className="flex items-center space-x-2">
                {renderPageNumbers()}
            </div>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-1 rounded-full bg-gray-200 text-gray-700 hover:bg-[#3B9DF8] hover:text-[#fff] transition-all duration-300 ${
                    currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                }`}
            >
                Next
            </button>
        </div>
    );
};

export default pagination;
                    '
                />
            )}
          </div>

          <OverviewFooter/>
        </div>

        <div className="flex flex-col gap-4 sticky top-20 right-0 w-[40%]">
          <h2 className="text-[0.9rem] font-[600] text-text tracking-widest">
            CONTENTS
          </h2>
          <a
              href="#animated_pagination"
              className={`${
                  contentActiveTab === 1 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(1)}
          >
            Animated Pagination
          </a>
          <a
              href="#pagination_with_button"
              className={`${
                  contentActiveTab === 2 && "!text-primary !border-primary"
              } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
              onClick={() => setContentActiveTab(2)}
          >
            Pagination With Button
          </a>
          <a
              href="#pagination_with_rounded_button"
              className={`${
              contentActiveTab === 3 && "!text-primary !border-primary"
            } text-[0.9rem] text-[#5c5c5c] border-l border-transparent pl-4`}
            onClick={() => setContentActiveTab(3)}
          >
            Pagination With Rounded Button
          </a>
        </div>
      </aside>
      <Helmet>
        <title>Navigation - Chip</title>
      </Helmet>
    </>
  );
};

export default Pagination;
