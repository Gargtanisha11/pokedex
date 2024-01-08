import { createSlice } from "@reduxjs/toolkit";

 const pokemonListSlice=createSlice({
    name:"pokemonList",
    initialState:{
        list:[],
        typeList:[],
        count:20,
    },
    reducers:{
       addList:(state,action)=>{
        state.list=action.payload;
       },
       addTypeList:(state,action)=>{
        state.typeList=action.payload;
       },
        appendList:(state,action)=>{
          state.list=state.list.concat(action.payload);
        },
        clearList:(state)=>{
          state.list=[];
        },
        incrementCount:(state)=>{
          state.count+=20;
          if(count>1320){
            state.count=20;
          }
        }
    }
 })

 export const{ addList,appendList,addTypeList,clearList,incrementCount }=pokemonListSlice.actions;
 export default pokemonListSlice.reducer;