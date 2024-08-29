import React, {useEffect, useState} from "react";

// react icons
import { CiSearch } from "react-icons/ci";

// search data
import {searchData} from "../../Utils/SearchData.js";

const Search = ({isSearchOpen}) => {

    const [filteredData, setFilteredData] = useState([])
    const [inputText, setInputText] = useState('')

    useEffect(()=>{
        document.getElementById('zenui_search_input').focus()
    }, [isSearchOpen])

    useEffect(()=>{
        const filterData = searchData?.filter((data,index)=> {
            if(inputText !== ''){
                return data.title.toLowerCase().includes(inputText.toLowerCase())
            }
        })
        setFilteredData(filterData)
    },[inputText])

  return (
    <main className="w-full h-screen fixed top-0 left-0 bg-[#00000057] !z-[1000] flex items-center justify-center">
      <div className={`${isSearchOpen ? 'scale-[1] opacity-100 z-[100]' : 'scale-[0.7] opacity-0 z-[-1]'} transition-all duration-500 zenuiSearchComponent bg-secondary w-[90%] 425px:w-[70%] 1024px:w-[40%] h-[80vh] p-6 rounded-md `}>
        <div className='relative bg-white pb-[10px]'>
            <CiSearch className='absolute top-[25px] transform -translate-y-1/2 left-4 text-[1.5rem] text-[#9da4b0]'/>
            <input id='zenui_search_input' autoFocus maxLength='30' onInput={(e)=> setInputText(e.target.value)} className='px-4 pl-12 py-3 w-full border rounded-md border-gray-200 focus:border-primary text-text focus:outline-none' placeholder='Search Component' type='text'/>
            <span className='bg-gray-200 rounded-md px-3.5 py-1.5 text-gray-500 absolute top-[25px] transform -translate-y-1/2 right-1.5'>Esc</span>
        </div>

          <div className='h-[65vh] overflow-y-scroll'>
              {
                  filteredData?.map((data,index)=> (
                      <div className='py-3 first:mt-5 px-4 bg-[#eff5ff] mt-2 rounded-md w-full' key={index}>
                          <a href={data.url}>
                              <h1 className='text-[1.3rem] text-text font-[600]'>{data.title}</h1>
                              <p className='text-[0.9rem] text-[#767777]'>{data.subTitle}</p>
                          </a>
                      </div>
                  ))
              }

              {
                  filteredData?.length <= 0 && inputText !== '' && (
                      <div className='mt-5 flex items-center flex-col justify-center pt-[150px]'>
                          <img src='/zenui_search_not_found.png' className='w-[60px]'/>
                          <p className='text-[0.9rem] text-text mt-2'>No search result found!</p>
                      </div>
                  )}

              {
                  inputText === '' && (
                      <div className='mt-5 flex items-center flex-col justify-center pt-[140px]'>
                          <img src='/zenui_search_compoent.png' className='w-[60px]'/>
                          <p className='text-[0.9rem]  text-gray-500 mt-4'>Find and search your desired component here!</p>
                      </div>
                  )}
          </div>
      </div>
    </main>
  );
};

export default Search;
