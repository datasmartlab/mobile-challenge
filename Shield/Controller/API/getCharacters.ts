import { createAsyncThunk } from "@reduxjs/toolkit";
import { ts, apiKey, hash } from "./credentials";
import { ICharacters } from "../Interfaces/IResponseAllCharacters";

type Props = {
  limit: number;
  offset: number;
  nameStartsWith?: string;
};

const initialState: Props = {
  limit: 20,
  offset: 0,
  nameStartsWith:'',
};

export const fetchCharactersData = createAsyncThunk('AllCharacters', async (props: Props = initialState): Promise<ICharacters> => {
  try {
    const { limit, offset, nameStartsWith } = props;
   
    const apiUrl = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&${nameStartsWith&&`nameStartsWith=${nameStartsWith}`}&offset=${offset}&limit=${limit}`;


    const response = await fetch(apiUrl);
    const data = await response.json();
    if(data.status !== 'Ok'){
      throw Error(data.status);
    }
    return data;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
});
