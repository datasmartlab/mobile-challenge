import { ts, apiKey, privateKey, hash } from "./credentials";


import { createAsyncThunk } from "@reduxjs/toolkit";
 export const fetchCharactersDataForId = createAsyncThunk('charactersForId', async (props:any) => {
  const {id} = props
  try {
    const apiUrl = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}`
    const response = await fetch(apiUrl);
    const data = await response.json();
    if(data.status !== 'Ok'){
      throw Error;
    }else{
      return data;
    }
  } catch (error) {
    console.error("Error fetching characters for id:", error);
    throw error;
  }
});
