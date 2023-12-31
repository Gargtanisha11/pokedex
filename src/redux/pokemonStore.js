import { configureStore } from "@reduxjs/toolkit";
import pokemonTypeReducer from "./pokemonTypeSlice";
import pokemonListReducer from "./pokemonListSlice";
import searchPokemonReducer from "./searchPokemonSlice";

 const pokemonStore=configureStore({
    reducer:{
        pokemonType:pokemonTypeReducer,
        pokemonList:pokemonListReducer,
        searchPokemon:searchPokemonReducer,
    }
 })
 export default pokemonStore;
 