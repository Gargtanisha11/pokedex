import { createSlice } from "@reduxjs/toolkit";

 const pokemonTypeSlice=createSlice({
    name:"pokemonType",
    initialState:{
        types:null,
        shownType:"all",
    },
    reducers:{
        addType:(state,action)=>{
          state.types=action.payload;
        },
        addShownType:(state,action)=>{
          state.shownType=action.payload;
        }
    }
 })

 export const{ addType, addShownType }=pokemonTypeSlice.actions;
 export default pokemonTypeSlice.reducer;