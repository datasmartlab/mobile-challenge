import { createAsyncThunk } from "@reduxjs/toolkit";
import { ts, apiKey, privateKey, hash } from "./credentials";
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
 export const fetchAllComicsData = createAsyncThunk('AllComics', async (props: Props = initialState): Promise<ICharacters> => {
  const { limit, offset, nameStartsWith } = props;
   
  try {
  const response = await fetch(`https://gateway.marvel.com:443/v1/public/comics?ts=${ts}&apikey=${apiKey}&hash=${hash}&${nameStartsWith&&`nameStartsWith=${nameStartsWith}`}&offset=${offset}&limit=${limit}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comics:", error);
    throw error;
  }
});