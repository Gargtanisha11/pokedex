import { useState,useEffect } from "react";
import { POKEMON_SEARCH } from "../utils/Constants";
import { useDispatch ,useSelector} from "react-redux";
import { addPokemonList } from "../redux/searchPokemonSlice";

const useSearchedPokemon=()=>{
    const searchQuery=useSelector((store)=>store.searchPokemon.searchQuery);

   const dispatch=useDispatch();
   
    const fetchData=async()=>{
        const data=await fetch(POKEMON_SEARCH+searchQuery);
        const json=await data.json();        
       dispatch(addPokemonList({name:json.name,url:POKEMON_SEARCH+searchQuery}));
    }
  
    useEffect(()=>{
        searchQuery!=="" && fetchData();
    },[searchQuery])
    return ;
}

export default useSearchedPokemon;