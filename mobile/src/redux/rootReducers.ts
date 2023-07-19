import { combineReducers } from '@reduxjs/toolkit';
import pokemonSlice from './pokemon/slice';

const rootReducer = combineReducers({
    pokemons: pokemonSlice,
});

export default rootReducer;
