import { createSlice } from "@reduxjs/toolkit";

const searchPokemonSlice=createSlice({
    name:"searchPokemon",
    initialState:{
        searchQuery:"",
        pokemonList:[],

    },
    reducers:{
        addSearchQuery:(state,action)=>{
            state.searchQuery=action.payload;
        },
        addPokemonList:(state,action)=>{
            state.pokemonList=action.payload
        },
    }
})
export const { addSearchQuery,addPokemonList}=searchPokemonSlice.actions;
export default searchPokemonSlice.reducer;