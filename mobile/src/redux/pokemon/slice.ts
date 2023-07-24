import { createSlice } from '@reduxjs/toolkit';
import { initialStateProps, reducers } from './reducers';

const initialState: initialStateProps = {
    loading: false,
    data: [],

    pagination: { limit: 20, offset: 1 },
};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers,
});

export const { actions } = pokemonSlice;
export default pokemonSlice.reducer;
