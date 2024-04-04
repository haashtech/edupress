import React from 'react'
import { useOpen } from '../../contextApi/OpenProvider'
import { CiSearch } from 'react-icons/ci'

function SearchBar() {
    const {setOpensearchbar , opensearchbar} = useOpen();
  return (
    <div className="relative flex  md:items-center gap-1 mt-5 md:mt-0 ">
          <button className="text-sm font-semibold md:block hidden">SignIn / Login</button>
          <button
            className={`bg-white z-50 w-7 h-7 flex items-center justify-center border text-primary border-primary  ${
              opensearchbar ? "" : ""
            } rounded-full`}
            onClick={() => setOpensearchbar(!opensearchbar)} 
          >
            <CiSearch />
          </button>
          <input
            type="search"
            placeholder="search.."
            className={`text-xs outline-none   ${
              opensearchbar ? "px-8 rounded-full w-[150px]" : "px-0 w-0"
            } duration-300 transition-all border border-primary absolute md:left-[6.5rem] left-1/2 h-[1.75rem]`}
          />
        </div>
  )
}

export default SearchBar