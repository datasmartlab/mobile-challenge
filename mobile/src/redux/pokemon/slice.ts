import { createSlice } from '@reduxjs/toolkit';
import { initialStateProps, reducers } from './reducers';

export const initialState: initialStateProps = {
    loading: false,
    data: [],
    chosenPokemon: [],
    pokemonInfo: null,
    pagination: { limit: 20, offset: 0, count: 0 },
};
const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers,
});

export const { actions } = pokemonSlice;
export default pokemonSlice.reducer;
