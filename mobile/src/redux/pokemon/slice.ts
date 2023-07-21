import { createSlice } from '@reduxjs/toolkit';
import { initialStateProps, reducer } from './reducers';

const initialState: initialStateProps = {
    loading: false,
    data: [],
    pokemonInfo: { name: '', sprite: '' },
    pagination: { limit: 20, offset: 0, count: 100 },
};

const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: reducer,
});

export const { actions } = pokemonSlice;
export default pokemonSlice.reducer;
