import { useEffect } from "react";
import { POKEMON_LIST_API } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addList } from "../redux/pokemonListSlice";

const usePokemonList = () => {
  const type = useSelector((store) => store.pokemonType.shownType);
  const pokemonList = useSelector((store) => store.pokemonList.list);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const data = await fetch(POKEMON_LIST_API);
    const json = await data.json();

    dispatch(addList(json?.results));
  };

  useEffect(() => {
    fetchData();
  }, [type]);
  return;
};
export default usePokemonList;
