import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTypesOfPokemon from "../hooks/useTypesOfPokemon";
import { addShownType } from "../redux/pokemonTypeSlice";
import usePokemonTypeDetails from "../hooks/usePokemonTypeDetails";

const TypeFilter = () => {
  const pokemonType = useSelector((store) => store.pokemonType.types);
  const dispatch=useDispatch();
  const typeValue=useRef(null);
  const handleClick=()=>{
    dispatch(addShownType(typeValue.current.value));
    
  }
  useTypesOfPokemon();
  usePokemonTypeDetails();
  
  return (
    <div className="pt-[4%] z-30 ">
      <select ref={typeValue} onChange={handleClick} className="px-2 mx-16 md:fixed md:left-[69rem] h-14 rounded-lg bg-black text-white">
        <option value="all">All</option>
        {pokemonType?.map((type) => (
          <option value={type.name} key={type.name}>
            {type?.name.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
