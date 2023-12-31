import React, { useEffect, useRef, useState } from "react";
import useSearchedPokemon from "../hooks/useSearchedPokemon";
import { useDispatch } from "react-redux";
import { addSearchQuery } from "../redux/searchPokemonSlice";

const SearchBar = () => {
  const [searchQuery,setSearchQuery]=useState(null);
  const search=useRef(null);
  const dispatch=useDispatch();

 

  const handlesubmit = () => {
  dispatch(addSearchQuery(search.current.value.toLowerCase()));
  
  };
 
  return (
    <div className=" pt-[4%] z-30">
      <form
        className="bg-black mx-1 px-4 py-3 w-full md:w-1/2 grid grid-flow-col rounded-lg md:fixed md:left-44 "
        action=""
        onSubmit={(e) => e.preventDefault()}
      >
        <div className=" col-span-9">
          <input
          ref={search}
            className=" px-2 border border-solid border-t-0 border-r-0 border-l-0 border-b-0 rounded-lg roundedgrid-cols-9 w-full h-10"
            type="text"
            placeholder="Name or Id of Pokemon"
          />
        </div>
        <div className=" rounded-lg  col-span-3  h-10  py-2 bg-red-700 text-white hover:bg-opacity-80 active:bg-opacity-75 hover:cursor-pointer ml-2">
          <button  className=" pl-5 md:ml-20   text-xl justify-center " onClick={handlesubmit}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
