import { useEffect,  } from "react";
import { POKEMON_TYPE_DETAIL } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addTypeList, clearList } from "../redux/pokemonListSlice";
import usePokemonList from "./usePokemonList";


const usePokemonTypeDetails = () => {
  const type = useSelector((store) => store.pokemonType.shownType);
  const dispatch=useDispatch();
  const fetchData = async () => {
    const data = await fetch(POKEMON_TYPE_DETAIL + type);
    const json = await data.json();
    console.log(json);
    dispatch(clearList());
    dispatch(addTypeList(json.pokemon));
  };
  useEffect(() => {
    if (type !== "all") {
      fetchData();
    }
  }, [type]);
  return null ;
};

export default usePokemonTypeDetails;
