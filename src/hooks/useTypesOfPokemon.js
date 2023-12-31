import React, { useEffect } from "react";
import { TYPE_POKEMON } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addType } from "../redux/pokemonTypeSlice";

const useTypesOfPokemon = () => {
  const dispatch = useDispatch();
  const pokemonType = useSelector((store) => store.pokemonType.types);

  const fetchdata = async () => {
    const data = await fetch(TYPE_POKEMON);
    const json = await data.json();
    dispatch(addType(json.results));
  };
  
  useEffect(() => {
    if (!pokemonType) {
      fetchdata();
    }
  }, []);
  
  return null;
};

export default useTypesOfPokemon;
