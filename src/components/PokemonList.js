import React, { useEffect, useRef } from "react";
import PokemonCard from "./PokemonCard";
import usePokemonList from "../hooks/usePokemonList";
import { useDispatch, useSelector } from "react-redux";
import { appendList, incrementCount } from "../redux/pokemonListSlice";
import { POKEMON_LIST_API } from "../utils/Constants";
import useSearchedPokemon from "../hooks/useSearchedPokemon";
import { addSearchQuery } from "../redux/searchPokemonSlice";

const PokemonList = () => {
  const type = useSelector((store) => store.pokemonType.shownType);
  const pokemonList = useSelector((store) => store.pokemonList.list);
  const pokemonTypeList = useSelector((store) => store.pokemonList.typeList);
  const searchQuery = useSelector((store) => store.searchPokemon.searchQuery);
  const count=useSelector((store)=>store.pokemonList.count);
  const searchPokemonList = useSelector(
    (store) => store.searchPokemon.pokemonList
  );
  const pokemonListRef = useRef(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(POKEMON_LIST_API+count);
    const json = await data.json();

    dispatch(appendList(json?.results));
  };

  usePokemonList();
  useSearchedPokemon();

  const handleScrollLeft = () => {
    if (pokemonListRef.current) {
      pokemonListRef.current.scrollLeft -= 40;
    }
  };

  const handleScrollRight = () => {
    if (pokemonListRef.current) {
      pokemonListRef.current.scrollLeft += 40;
      
      console.log(pokemonListRef.current.scrollLeft)
    }
  };

  const handleScroll=()=>{
    if (
      pokemonListRef.current &&
      pokemonListRef.current.scrollLeft + pokemonListRef.current.clientWidth >=
        pokemonListRef.current.scrollWidth - 10
    ) {
      dispatch(incrementCount());
      fetchData();
      console.log("jai shree krishna ")
      // Load more data when near the end
      //fetchData();
    }
  }

  useEffect(()=>{
    dispatch(addSearchQuery(""))
  },[type])
  if (searchQuery === "") {
    return (
      <div>
        <div
          className="mt-[10%] mx-5 md:mx-32 flex flex-row overflow-x-scroll no-scrollbar "
          onScroll={handleScroll}
          ref={pokemonListRef}
        >
          <div className="flex">
            {
              type === "all"
                ? pokemonList.map((card, index) => (
                    <PokemonCard key={index} info={card} /> // no type filter
                  ))
                : pokemonTypeList.map((card, index) => (
                    <PokemonCard key={index} info={card.pokemon} />
                  )) // type filter
            }
          </div>
        </div>
        <button
          onClick={handleScrollLeft}
          className="p-2 bg-black  hover:bg-opacity-80 active:bg-opacity-75 rounded-xl ml-7 md:ml-[8rem] text-white"
        >
          Scroll Left
        </button>
        <button
          onClick={handleScrollRight}
          className="p-2  bg-black hover:bg-opacity-80 active:bg-opacity-75 rounded-xl ml-40 md:ml-[80rem]  text-white"
        >
          Scroll Right
        </button>
      </div>
    );
  } else {
    
    return (
      <div  className="mt-[10%] mx-5 md:mx-32 flex flex-row overflow-x-scroll no-scrollbar">
        
          <PokemonCard  info={searchPokemonList} />
      
      </div>
    );
  }
};

export default PokemonList;
